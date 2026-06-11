# Gabriel Bustus — Portfolio

A fast, fully hand-coded personal portfolio. No framework, no build step — just
semantic HTML, a token-based CSS design system, and a small amount of vanilla
JavaScript. Bilingual (English / Portuguese) with light and dark themes.

**Live:** https://xbustus.github.io/Portfolio/ · **Code:** this repository

---

## Highlights

- **Bilingual (EN / PT)** — a tiny ~3 KB i18n engine (`i18n.js`) swaps every
  string from a single dictionary, with the preference stored in `localStorage`.
- **Light / dark theming** — driven entirely by CSS custom properties; the theme
  is applied before first paint to avoid any flash.
- **Zero dependencies, zero build** — no bundler, no CDN runtime. Loads instantly
  and works offline.
- **Accessible & responsive** — keyboard focus states, reduced-motion support,
  semantic landmarks, and a mobile-first layout.
- **Résumé → PDF** — the résumé page has print styles, so "Download PDF" produces
  a clean document straight from the browser.

## Structure

| File | Purpose |
| --- | --- |
| `index.html` | Home — hero, selected work, about, stack, contact |
| `projects.html` | Full project list |
| `cv.html` | Résumé (print-ready) |
| `blog.html` · `endlessList.html` · `certificados.html` | Writing, goals, certificates |
| `settings.html` | Theme, language and font-size preferences |
| `style.css` | Design system (tokens + components) |
| `i18n.js` | Bilingual engine and content dictionary |
| `theme.js` · `script.js` | Early settings + UI interactions |

## Featured projects

- **Serveo** — multi-tenant restaurant SaaS: POS, kitchen display, delivery,
  AI waiter and an NFC-e fiscal engine. *(Angular 17 · TypeScript · Supabase · PWA)*
- **Vexia** — all-in-one SaaS for waste-collection fleets: live tracking, smart
  routing, maintenance and an operational AI agent. *(React · Vite · Firebase · Leaflet)*
- **Lumo** — financial-control SaaS with invoice OCR (Gemini 2.0), PostgreSQL RLS
  multi-tenancy and Mercado Pago billing. *(Next.js 14 · TypeScript · Supabase)*

## Tech

`HTML` · `CSS` · `Vanilla JS` · `TypeScript` · `Angular` · `React` · `Next.js` ·
`Node.js` · `PostgreSQL` · `Supabase`

## License

Released under the MIT License — see [LICENSE](LICENSE).

---

Open to 2026 Software Engineer roles. Feel free to reach out.
