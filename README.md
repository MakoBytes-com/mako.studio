# Mako Studio

Marketing + portfolio site for Mako Studio — the web practice inside Mako Logics.

**Stack:** Next.js 15 (App Router) · TypeScript · Tailwind · Resend · Vercel

## Quick start

```bash
npm install
cp .env.local.example .env.local   # fill in RESEND_API_KEY later
npm run dev                         # http://localhost:3000
```

## Hero video

Drop the final RunwayML `.mp4` into `public/hero.mp4`. The Hero component
detects it automatically and uses a crossfade loop (two staggered `<video>`
elements) to hide any hard cut on non-seamlessly-looping AI video. If the
file is missing, an animated underwater gradient renders in its place.

## Contact form

Form → `POST /api/contact` → Resend → `CONTACT_TO_EMAIL`. Until `RESEND_API_KEY`
is set, submissions log to the server console and return `{ ok: true }` so the
dev flow isn't blocked.

## Portfolio data

One file — [lib/portfolio.ts](lib/portfolio.ts). Add/edit entries there and
they render automatically on the `#work` grid.
