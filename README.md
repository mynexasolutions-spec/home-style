# Home Style – website

Marketing website for **Home Style** (carpentry, electrical, tiles & marble, plumbing, interior & exterior painting, texture & design, Duco, wood polish, wallpaper & panelling, UPVC, waterproofing) built with **Next.js 16 (App Router) + React 19 + TypeScript**. Plain CSS, no UI framework.

## Getting started

```bash
npm install
npm run dev          # http://localhost:3000
npm run build        # production build
npm start            # serve the production build
npm run typecheck    # TypeScript check
```

Copy `.env.example` to `.env.local` and set `NEXT_PUBLIC_SITE_URL` to the public URL (used for canonical links, the sitemap and social previews). It is optional while developing.

### Quote forms → WhatsApp
Every quote form opens WhatsApp with the visitor's details pre-written, addressed to the number in `src/data/site.ts` (`whatsappNumber`, digits only). There is no backend – the visitor just presses *Send*. The message is built in `src/lib/whatsapp.ts`.

## Pages

| Route | What it is |
| --- | --- |
| `/` | Home – hero with quote form, services, about, why us, spaces, process, projects, stats, testimonials, FAQ |
| `/about` | Story, mission / vision / values, stats, process, testimonials |
| `/services` | All services + what is included with every project |
| `/services/[slug]` | One page per service (generated from `src/data/services.ts`) with a pre-filled quote form |
| `/projects` | Filterable project cards |
| `/gallery` | Filterable masonry gallery with a full-screen lightbox |
| `/contact` | Contact cards, quote form, map, FAQ |
| `/privacy`, `/terms` | Starter legal pages (**have them reviewed before launch**) |
| `/sitemap.xml`, `/robots.txt` | Generated automatically |

## Project structure

```
src/
  app/                 routes (one folder per page), layout, template, sitemap, robots
  components/          shared UI (Header, Footer, QuoteForm, GalleryBrowser, …)
    sections/          reusable page sections (ServicesGrid, WhySection, CtaSection, …)
  data/                ← edit content here
    site.ts            phone, email, address, nav links
    services.ts        the twelve services + their detail-page content
    projects.ts        gallery photos and featured projects
    content.ts         testimonials, FAQs, process steps
    images.ts          Unsplash photo ids
  lib/imageLoader.ts   builds resized Unsplash URLs for next/image
  styles/              base · layout · sections · pages · animations (plain CSS)
```

## Editing content

* **Contact details / address / nav** → `src/data/site.ts`
* **Add or change a service** → `src/data/services.ts` (a new entry automatically gets its own page, nav item, footer link, form option and sitemap entry)
* **Gallery & projects** → `src/data/projects.ts`
* **Testimonials / FAQs** → `src/data/content.ts`
* **About page – founders, team, timeline** → `src/data/team.ts` (all names, quotes and dates there are **dummy placeholders**)
* **Favicons** → `src/app/icon.png`, `src/app/apple-icon.png`, `src/app/favicon.ico` (cropped from the logo's "H" mark)
* **Logo** → replace `public/home-style-logo.png` (if the new file has a different shape, update `width`/`height` in `src/components/Logo.tsx`). It is used in the header and footer.
* **Colours & fonts** → CSS variables at the top of `src/styles/base.css`

### Using your own photos

Photos currently come from Unsplash (placeholders). To use real photos:

1. Put them in `public/images/` and set `images.loader` back to the default in `next.config.mjs` (remove the `loader` / `loaderFile` lines).
2. Change `src/components/Img.tsx` to use local paths instead of `unsplash(id)`.

## Animations

All built in-house (no animation library) and all switched off automatically for visitors who prefer reduced motion:

| Effect | File |
| --- | --- |
| Scroll reveal (fade / slide / zoom / curtain wipe) | `components/Reveal.tsx` |
| Headings that slide in word by word | `components/AnimatedHeading.tsx` |
| Typewriter in the hero | `components/Typewriter.tsx` |
| Counting numbers | `components/CountUp.tsx` |
| Scroll progress bar | `components/ScrollProgress.tsx` |
| Parallax backgrounds | `components/Parallax.tsx` |
| Marquee strip, page fade, hover effects | `styles/animations.css`, `styles/sections.css` |

## Before launch checklist

- [ ] Replace stock photos with real project photos and update captions in `projects.ts`
- [ ] Replace the placeholder testimonials (the last two) and project descriptions with real ones
- [ ] Set `NEXT_PUBLIC_SITE_URL`
- [ ] Confirm the WhatsApp number in `src/data/site.ts` and send yourself a test quote
- [ ] Fill in the social links in `site.ts` (currently `#`)
- [ ] Have the privacy policy and terms reviewed

## Deploying

Works on Vercel out of the box (`vercel` or connect the Git repo). Any Node host works too: `npm run build && npm start`.
