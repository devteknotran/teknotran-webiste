# Teknotran Enquiry API

Small Node.js service behind Nginx at `https://teknotran.com/api/enquiry`.

- Validates the website enquiry form (required fields, length limits, email format)
- Drops bot submissions caught by the hidden `_gotcha` field
- Saves every enquiry to `/data/enquiries.jsonl` first, so nothing is lost if email fails
- Emails the team through Google Workspace SMTP (plain text, Reply-To set to the visitor)
- Rate limiting is done in Nginx (`zone=enquiry`)

## Run

```bash
cp .env.example .env        # add the Google App Password
docker build -t teknotran-enquiry-api .
docker run -d --name enquiry-api \
  -p 127.0.0.1:3001:3001 \
  --env-file .env \
  -v enquiry-data:/data \
  --read-only --tmpfs /tmp \
  --restart unless-stopped \
  teknotran-enquiry-api
```

## Read stored enquiries

```bash
docker exec enquiry-api cat /data/enquiries.jsonl
```

## Responses

| Status | Body | Meaning |
|---|---|---|
| 200 | `{"ok":true}` | Stored (and emailed if SMTP is set) |
| 422 | `{"ok":false,"errors":{...}}` | Validation failed |
| 400 / 413 | `{"ok":false}` | Bad JSON / body over 32 KB |
| 429 | (Nginx) | Rate limit hit |
