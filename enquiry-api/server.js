// Teknotran enquiry API
// POST /api/enquiry  -> validates, saves to /data/enquiries.jsonl, emails the team
// GET  /healthz      -> "ok"

import express from 'express'
import nodemailer from 'nodemailer'
import { appendFile, mkdir } from 'node:fs/promises'
import { randomUUID } from 'node:crypto'
import path from 'node:path'

const {
  PORT = '3001',
  DATA_DIR = '/data',
  SMTP_HOST = 'smtp.gmail.com',
  SMTP_PORT = '465',
  SMTP_USER = '',
  SMTP_PASS = '',
  MAIL_TO = 'admin@teknotran.com',
  MAIL_FROM = '', // defaults to SMTP_USER
} = process.env

const mailEnabled = Boolean(SMTP_USER && SMTP_PASS)
const transporter = mailEnabled
  ? nodemailer.createTransport({
      host: SMTP_HOST,
      port: Number(SMTP_PORT),
      secure: Number(SMTP_PORT) === 465,
      auth: { user: SMTP_USER, pass: SMTP_PASS },
    })
  : null

const LIMITS = { name: 100, company: 150, email: 200, role: 80, website: 300, cloud: 80, help: 80, message: 5000 }
const REQUIRED = ['name', 'company', 'email', 'help', 'message']
const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]+$/

function clean(v, max) {
  if (typeof v !== 'string') return ''
  // strip control characters except newline/tab, trim, cap length
  return v.replace(/[\u0000-\u0008\u000B\u000C\u000E-\u001F\u007F]/g, '').trim().slice(0, max)
}

function validate(body) {
  const data = {}
  for (const [k, max] of Object.entries(LIMITS)) data[k] = clean(body?.[k], max)
  // single-line fields: no newlines (prevents header-style injection in email subject)
  for (const k of Object.keys(LIMITS)) if (k !== 'message') data[k] = data[k].replace(/[\r\n]+/g, ' ')
  const errors = {}
  for (const k of REQUIRED) if (!data[k]) errors[k] = 'required'
  if (data.email && !EMAIL_RE.test(data.email)) errors.email = 'invalid'
  if (data.message && data.message.length < 10) errors.message = 'too_short'
  return { data, errors }
}

const app = express()
app.disable('x-powered-by')
app.set('trust proxy', 'loopback') // Nginx on the same host
app.use(express.json({ limit: '32kb' }))

app.get('/healthz', (_req, res) => res.type('text/plain').send('ok\n'))

app.post('/api/enquiry', async (req, res) => {
  // Honeypot: bots fill hidden fields. Pretend success, store nothing.
  if (typeof req.body?._gotcha === 'string' && req.body._gotcha.trim() !== '') {
    return res.json({ ok: true })
  }

  const { data, errors } = validate(req.body)
  if (Object.keys(errors).length) return res.status(422).json({ ok: false, errors })

  const record = { id: randomUUID(), receivedAt: new Date().toISOString(), ip: req.ip, userAgent: clean(req.get('user-agent'), 300), ...data }

  // 1. Always store first, so no lead is lost if email fails.
  try {
    await mkdir(DATA_DIR, { recursive: true })
    await appendFile(path.join(DATA_DIR, 'enquiries.jsonl'), JSON.stringify(record) + '\n', { mode: 0o600 })
  } catch (err) {
    console.error(JSON.stringify({ level: 'error', msg: 'store_failed', id: record.id, err: err.message }))
    return res.status(500).json({ ok: false })
  }

  // 2. Email the team (plain text only).
  if (mailEnabled) {
    const text = [
      `New enquiry from teknotran.com`,
      ``,
      `Name:     ${data.name}`,
      `Company:  ${data.company}`,
      `Email:    ${data.email}`,
      `Role:     ${data.role || '-'}`,
      `Website:  ${data.website || '-'}`,
      `Cloud:    ${data.cloud || '-'}`,
      `Needs:    ${data.help}`,
      ``,
      `Message:`,
      data.message,
      ``,
      `---`,
      `ID: ${record.id}`,
      `Received: ${record.receivedAt}`,
    ].join('\n')
    try {
      await transporter.sendMail({
        from: `"Teknotran Website" <${MAIL_FROM || SMTP_USER}>`,
        to: MAIL_TO,
        replyTo: `"${data.name.replace(/"/g, '')}" <${data.email}>`,
        subject: `New enquiry: ${data.company} — ${data.help}`,
        text,
      })
    } catch (err) {
      // Stored already; log and still tell the visitor it was received.
      console.error(JSON.stringify({ level: 'error', msg: 'email_failed', id: record.id, err: err.message }))
    }
  }

  console.log(JSON.stringify({ level: 'info', msg: 'enquiry_received', id: record.id, company: data.company, help: data.help, mailed: mailEnabled }))
  res.json({ ok: true })
})

// Malformed JSON or oversize body
app.use((err, _req, res, _next) => {
  const status = err.type === 'entity.too.large' ? 413 : 400
  res.status(status).json({ ok: false })
})

app.listen(Number(PORT), '0.0.0.0', () => {
  console.log(JSON.stringify({ level: 'info', msg: 'listening', port: Number(PORT), mailEnabled }))
})
