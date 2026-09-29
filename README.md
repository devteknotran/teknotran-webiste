# Teknotran Website

Corporate website for **Teknotran**: DevOps & Cloud Engineering for SaaS.
Built with **React 19 + Vite + React Router**. Plain CSS, no UI framework.

## Run locally

```bash
npm install
npm run dev        # http://localhost:5173
npm run build      # production build in dist/
npm run preview    # serve the production build
```

Requires Node.js 20.19+ (or 22.12+).

## Before going live: edit `src/config.js`

| Setting | What it does |
|---|---|
| `email` | Contact email shown across the site (`admin@teknotran.com`) |
| `linkedin` | LinkedIn company page URL |
| `bookingUrl` | Calendly / Cal.com link for "Book a 30-Min Audit". Empty = goes to `/contact#book` |
| `formEndpoint` | Form backend URL (e.g. Formspree). Empty = form shows a "not connected" notice |

## Project structure

```
├── index.html               # SEO meta, Open Graph, JSON-LD, fonts
├── public/
│   ├── favicon.svg
│   ├── robots.txt
│   ├── sitemap.xml
│   ├── _redirects           # Netlify SPA routing
│   └── assets/
│       ├── logo/            # logo SVGs (light, dark, icon, square icon)
│       ├── icons/           # apple-touch-icon, 512px icon
│       └── images/          # og-image.png
├── src/
│   ├── config.js            # site settings (edit this)
│   ├── App.jsx              # routes
│   ├── data/                # ALL content lives here
│   │   ├── services.js      # 6 services + detail page content
│   │   ├── caseStudies.js   # reference projects
│   │   └── site.js          # problems, process, tech stack, principles, form options
│   ├── components/          # Navbar, Footer, PipelineConsole, cards, forms, CTA…
│   ├── pages/               # Home, Services, ServiceDetail, CaseStudies,
│   │                        # CaseStudyDetail, About, DWorker, Training, Contact
│   ├── hooks/useReveal.js   # subtle scroll reveal
│   └── styles/              # tokens.css, base.css, components.css, pages.css
└── vercel.json              # Vercel SPA routing
```

## Routes

`/` · `/services` · `/services/:slug` · `/case-studies` · `/case-studies/:slug` · `/about` · `/d-worker` · `/training` · `/contact`

## Editing content

- **Services:** `src/data/services.js`. Each entry creates a card and a full detail page.
- **Case studies:** `src/data/caseStudies.js`. Keep `type: 'Reference project'` for non-client work.
  For real client work, only publish with permission and verified results.
- **Team:** the About page shows a placeholder until real names, roles and photos are added.
- If you add pages or case studies, update `public/sitemap.xml`.

## Deploy

**AWS S3 + CloudFront**

```bash
npm run build
aws s3 sync dist/ s3://YOUR_BUCKET --delete
aws cloudfront create-invalidation --distribution-id YOUR_ID --paths "/*"
```

In CloudFront, set custom error responses for 403 and 404 → `/index.html` with status 200, so deep links work.

**Netlify / Vercel:** connect the repo. Build command `npm run build`, output `dist`. Routing files are included.

## Content rules

No invented statistics, testimonials, customer logos or team members. Illustrative UI is labelled
"Illustrative workflow". D-Worker is described as early-stage R&D, not a released product.
