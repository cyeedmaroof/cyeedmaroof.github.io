# Maroof Mushtaq — Portfolio

Static portfolio site built with [Astro](https://astro.build). Design direction:
**"Forecast"** — the site as a plotting surface, with an animated measured-vs-forecast
signal as the hero signature.

## Run locally

```bash
npm install          # first time only
npm run dev          # dev server at http://localhost:4321
npm run build        # production build → dist/
npm run preview      # serve the built dist/ locally
```

## Content — edit data, not markup

All content lives in `src/data/` so it can be updated without touching components
(and so `/github-sync` and `/resume` can update it programmatically). **Never invent
facts — everything traces to `career/profile.md` and `career/projects.md`.**

| File | Holds |
|---|---|
| `profile.json` | name, positioning, bio, links, contact, roles, languages, skills |
| `projects.json` | each project + its case-study fields |
| `certificates.json` | array of `{ name, issuer, date, url? }` |
| `events.json` | array of `{ name, role, date, description?, url? }` |

### Add a certificate

```json
[
  { "name": "AWS Certified Cloud Practitioner", "issuer": "Amazon Web Services", "date": "2024", "url": "https://..." }
]
```

### Add an event

```json
[
  { "name": "PyData Stavanger", "role": "Co-organizer", "date": "2025", "description": "Monthly data-science meetup.", "url": "https://..." }
]
```

## Design system

Tokens and component styles are in `src/styles/global.css`.
- Palette: paper `#F3F5F8`, ink `#0F1B2D`, indigo `#2457D6`, teal `#0FA79A`, amber `#E8A020`.
- Type: Space Grotesk (display) · IBM Plex Sans (body) · IBM Plex Mono (data/labels), self-hosted via `@fontsource`.
- Accessibility floor: skip link, visible keyboard focus, `prefers-reduced-motion` respected on the hero animation.

## Deploy to Vercel (free)

1. Push this repo to GitHub.
2. On [vercel.com](https://vercel.com) → **Add New → Project** → import the repo.
   Vercel auto-detects Astro (build `astro build`, output `dist/`) — no config needed.
3. Ships on a free `*.vercel.app` subdomain. Add a custom domain later under
   **Settings → Domains**, then update `site` in `astro.config.mjs`.

## To do

- [ ] Replace `public/Maroof-Mushtaq-CV.pdf` with a **general** CV (currently the
      Tieto-tailored version) — regenerate via the `/resume` skill.
- [ ] Add languages to `profile.json`.
- [ ] Populate `certificates.json` and `events.json`.
- [ ] Add real result figures to the strongest case studies (e.g. SAIL predicted-vs-actual).
