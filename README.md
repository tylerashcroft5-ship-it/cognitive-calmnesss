# Cognitive Calmness — Cassie-Anne Simmonds

Custom Next.js site. Static-rendered, no database, one serverless function (the enquiry form).

## Run locally
```bash
npm install
npm run dev        # http://localhost:3000
```

## Deploy to Vercel
1. Push this folder to a GitHub repo.
2. vercel.com → Add New Project → import the repo. No settings needed — Vercel detects Next.js.
3. Every push to `main` auto-deploys.

## Before launch — the checklist

### 1. Contact details — `lib/site.js`
Replace the placeholder `email` and `phone` with the client's real details. They flow everywhere automatically (footer, booking page, form error fallback).

### 2. Booking system — `lib/booking.js`
The site has a **Cal.com calendar embedded directly into the `/book` page** (free tier is enough). Visitors pick a session type from the tabs and book in-page — no redirect. Every "Book" / "Get started" button on the site lands them on that calendar with the right session preselected. The Cal.com phone app gives the client instant booking notifications and lets her manage availability from anywhere.

**To go live (≈10 minutes):**
1. Client creates a free account at cal.com — ideally installs the **Cal.com mobile app** for instant notifications + availability control from her phone.
2. She creates one event type per session, with URL slugs matching the ones in `lib/booking.js` (`wellbeing-30`, `wellbeing-60`, `cbt-session`, `one-off`, `supervision`) — or edit the slugs here to match whatever she names them.
3. In `lib/booking.js`, set `CAL_USERNAME` to her Cal.com username and flip `CAL_CONFIGURED` to `true`. Done.

Until that flag is flipped, every Book button gracefully routes to the enquiry form instead, and the booking page shows a "coming soon" note — so the site can launch before the calendar is ready. The embed colour is themed to the site's sage (`CAL_BRAND_COLOR` in the same file).

### 3. Enquiry form — `app/api/contact/route.js`
Currently logs submissions to Vercel function logs (visible in the dashboard) and returns success. Wire it to email before launch — full Resend snippet is in the file's header comment (~5 minutes). Add `RESEND_API_KEY` in Vercel → Settings → Environment Variables.

### 4. Logo
`public/logo.jpg` is the client's file, untouched, with its pink background baked in. The hero arch background is set to the exact sampled colour (`#CDB5B5`) so it sits seamlessly. **Ask the client for a transparent PNG/SVG version** — if she has one, you can use it more freely (nav, footer, light backgrounds).

### 5. Content flags for the client
- Her source copy said "over 15 years" in the intro but "over 10 years" in Why Choose Me. The site uses **15 consistently** — confirm with her.
- Support group join mechanism: currently routed through the enquiry form. If she has a Zoom/Teams link or WhatsApp group, that can be linked directly.
- No photos of Cassie-Anne were supplied. The design works without them, but a professional headshot on the About page would strengthen trust — there's room in the layout for an arch-framed portrait.

## Where things live
| What | Where |
|---|---|
| Colours, type, all styling | `app/globals.css` (design tokens at the top) |
| Nav links | `lib/site.js` |
| Package prices & inclusions | `app/page.jsx` and `app/services/page.jsx` (PLANS arrays) |
| Breathing exercise timing | `components/Breathing.jsx` (PHASES array) |
| Crisis signposting | `components/Footer.jsx` |

## Design notes
- Palette sampled directly from the logo file: blush `#CDB5B5`, rose `#A57575`, plum `#8E6265`, plus sage and pale-brown ranges per the brief.
- Type: Marcellus (display, matches the wordmark's engraved feel) · Cormorant Garamond italic (accents) · Figtree (body). Loaded from Google Fonts at runtime.
- All animation respects `prefers-reduced-motion` — important for this audience.
- The footer carries a crisis signpost (999 / NHS 111 / Samaritans 116 123) on every page. Standard practice for private mental-health sites; recommend keeping it.
