import { useState } from 'react'
import { site } from '../config.js'
import { helpOptions, cloudOptions, roleOptions } from '../data/site.js'

const empty = { name: '', company: '', email: '', role: '', website: '', help: '', cloud: '', message: '', _gotcha: '' }

function validate(v) {
  const e = {}
  if (!v.name.trim()) e.name = 'Enter your name.'
  if (!v.company.trim()) e.company = 'Enter your company name.'
  if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(v.email)) e.email = 'Enter a valid work email, for example name@company.com.'
  if (!v.help) e.help = 'Choose what you need help with.'
  if (v.message.trim().length < 10) e.message = 'Add a short description, at least 10 characters.'
  return e
}

export default function EnquiryForm({ defaultHelp = '' }) {
  const [values, setValues] = useState({ ...empty, help: defaultHelp })
  const [errors, setErrors] = useState({})
  const [status, setStatus] = useState('idle') // idle | sending | sent | error | preview

  const set = (k) => (ev) => setValues((v) => ({ ...v, [k]: ev.target.value }))

  async function onSubmit(ev) {
    ev.preventDefault()
    const e = validate(values)
    setErrors(e)
    if (Object.keys(e).length) {
      document.getElementById(`f-${Object.keys(e)[0]}`)?.focus()
      return
    }
    if (values._gotcha) return
    if (!site.formEndpoint) { setStatus('preview'); return }
    setStatus('sending')
    try {
      const res = await fetch(site.formEndpoint, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json', Accept: 'application/json' },
        body: JSON.stringify(values),
      })
      if (!res.ok) throw new Error('Request failed')
      setStatus('sent')
      setValues({ ...empty })
    } catch {
      setStatus('error')
    }
  }

  const field = (k, label, props = {}, hint) => (
    <div className={`field ${errors[k] ? 'has-error' : ''}`}>
      <label htmlFor={`f-${k}`}>{label}{props.required && <span className="req" aria-hidden="true"> *</span>}</label>
      <input id={`f-${k}`} name={k} value={values[k]} onChange={set(k)} aria-invalid={!!errors[k]} aria-describedby={errors[k] ? `e-${k}` : undefined} {...props} />
      {hint && !errors[k] && <span className="hint">{hint}</span>}
      {errors[k] && <span className="error" id={`e-${k}`}>{errors[k]}</span>}
    </div>
  )

  const select = (k, label, options, required) => (
    <div className={`field ${errors[k] ? 'has-error' : ''}`}>
      <label htmlFor={`f-${k}`}>{label}{required && <span className="req" aria-hidden="true"> *</span>}</label>
      <select id={`f-${k}`} name={k} value={values[k]} onChange={set(k)} aria-invalid={!!errors[k]} aria-describedby={errors[k] ? `e-${k}` : undefined}>
        <option value="">Select…</option>
        {options.map((o) => <option key={o} value={o}>{o}</option>)}
      </select>
      {errors[k] && <span className="error" id={`e-${k}`}>{errors[k]}</span>}
    </div>
  )

  if (status === 'sent') {
    return (
      <div className="form-card form-done" role="status">
        <h3>Thanks. Your enquiry has been received.</h3>
        <p>An engineer will reply within one working day. If the work is a good fit, we will send a short technical questionnaire before the call so we can use the time well.</p>
      </div>
    )
  }

  return (
    <form className="form-card" onSubmit={onSubmit} noValidate>
      <input className="hp" type="text" name="_gotcha" tabIndex={-1} autoComplete="off" value={values._gotcha} onChange={set('_gotcha')} aria-hidden="true" />
      <div className="form-row">
        {field('name', 'Name', { required: true, autoComplete: 'name' })}
        {field('company', 'Company', { required: true, autoComplete: 'organization' })}
      </div>
      <div className="form-row">
        {field('email', 'Work email', { required: true, type: 'email', autoComplete: 'email', inputMode: 'email' })}
        {select('role', 'Role', roleOptions)}
      </div>
      <div className="form-row">
        {field('website', 'Company website', { type: 'url', inputMode: 'url', placeholder: 'https://', autoComplete: 'url' })}
        {select('cloud', 'Current cloud provider', cloudOptions)}
      </div>
      {select('help', 'What do you need help with?', helpOptions, true)}
      <div className={`field ${errors.message ? 'has-error' : ''}`}>
        <label htmlFor="f-message">Message<span className="req" aria-hidden="true"> *</span></label>
        <textarea id="f-message" name="message" rows={5} value={values.message} onChange={set('message')} placeholder="What is happening with your infrastructure today, and what would you like to change?" aria-invalid={!!errors.message} aria-describedby={errors.message ? 'e-message' : undefined} />
        {errors.message && <span className="error" id="e-message">{errors.message}</span>}
      </div>

      {status === 'preview' && (
        <p className="notice" role="status">This form is not connected yet. Add a form endpoint in <code>src/config.js</code>, or email <strong>{site.email}</strong> in the meantime.</p>
      )}
      {status === 'error' && (
        <p className="notice error-notice" role="alert">Your enquiry did not send. Please try again, or email <strong>{site.email}</strong> directly.</p>
      )}

      <div className="form-foot">
        <p className="hint">We reply within one working day. Detailed technical questions come later, only if needed.</p>
        <button className="btn btn-primary" type="submit" disabled={status === 'sending'}>{status === 'sending' ? 'Sending…' : 'Send Enquiry'}</button>
      </div>
    </form>
  )
}
