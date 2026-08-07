# Surface Studio

A production-ready, responsive marketing site for **Surface Studio** — a
premium Indian manufacturer and exporter of handcrafted marble furniture and
décor. Built with Next.js 15 (App Router), TypeScript, Tailwind CSS, and
Framer Motion.

**Live design tokens:** White `#FFFFFF` · Ivory `#F8F7F5` · Charcoal `#1C1C1C`
· Warm Beige `#D8C8B8` · Gold `#C8A96A` — see `tailwind.config.ts`.

---

## Tech stack

| Layer      | Choice |
|------------|--------|
| Framework  | Next.js 15 (App Router, Server Components) |
| Language   | TypeScript |
| Styling    | Tailwind CSS 3 |
| Animation  | Framer Motion |
| Icons      | lucide-react |
| Dark mode  | next-themes |
| Fonts      | `next/font/google` — Cormorant (display) + Inter (body) |

No external UI kit — every component is hand-built and lives in `/components`.

---

## Getting started

```bash
npm install
cp .env.example .env.local   # fill in your WhatsApp number & site URL
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

### Environment variables

| Variable | Purpose |
|---|---|
| `NEXT_PUBLIC_WHATSAPP_NUMBER` | Country code + number, digits only (e.g. `917792823718`). Used by the floating WhatsApp button and product "WhatsApp Inquiry" CTA. |
| `NEXT_PUBLIC_SITE_URL` | Canonical site URL — used in metadata, Open Graph, `sitemap.xml`, and `robots.txt`. |
| `CONTACT_FORM_ENDPOINT` | Optional. If set, `/api/quote` forwards submissions here (e.g. Formspree, Resend, your CRM webhook). If empty, submissions are logged server-side only. |
| `NEWSLETTER_ENDPOINT` | Optional. Same idea for `/api/newsletter` (Mailchimp, Klaviyo, Resend, Buttondown, etc.). |

---

## Folder structure

```
app/
  layout.tsx              Root layout — fonts, metadata, JSON-LD, nav/footer
  page.tsx                Homepage
  globals.css             Base styles, dark-mode surfaces, scrollbar
  sitemap.ts              Dynamic sitemap.xml
  robots.ts               Dynamic robots.txt
  loading.tsx             Global route-transition skeleton
  not-found.tsx           Custom 404
  about/page.tsx
  collections/
    page.tsx               All collections grid
    [slug]/page.tsx         Single collection + its products
  product/[slug]/page.tsx  Product detail (gallery, specs, related)
  custom-projects/page.tsx
  gallery/page.tsx
  blog/
    page.tsx                Blog index
    [slug]/page.tsx          Blog post
  contact/page.tsx
  api/
    newsletter/route.ts     Newsletter signup handler
    quote/route.ts          Contact / quote-request handler

components/
  Navbar.tsx               Sticky nav, mega menu, search, dark toggle, mobile drawer
  Footer.tsx
  WhatsAppButton.tsx       Floating WhatsApp CTA (all pages)
  ProductCard.tsx / ProductGallery.tsx / ProductInquiry.tsx
  ContactForm.tsx / Newsletter.tsx / GalleryGrid.tsx
  PageHeader.tsx           Shared interior-page banner
  MarbleVein.tsx           Brand signature — animated gold "vein" divider
  ScrollReveal.tsx         Framer Motion scroll-in wrapper
  ThemeProvider.tsx        next-themes wrapper
  home/                    Homepage-only sections (Hero, BestSellers, etc.)

lib/
  data.ts                  All placeholder content: collections, products,
                            testimonials, process steps, blog posts
  utils.ts                 cn() helper + WhatsApp link builder
```

---

## Customizing content

Everything content-related lives in **`lib/data.ts`** — collections,
products, testimonials, the manufacturing process timeline, export
countries, and blog posts. The rest of the app reads from this file, so
editing it is usually enough to reflow the whole site with new copy.

Each `Product` needs: `slug`, `name`, `collection` (must match a
`Collection.slug`), `price`, `images[]`, `marbleType`, `finish`,
`dimensions`, `weight`, `material`, `description`, `customizable`, and
optionally `bestSeller: true`.

### Images

Placeholder photography comes from Unsplash by URL, so the site renders
fully without any uploads. See `public/images/README.md` for how to swap in
real product photography.

### Colors & type

Brand tokens live in `tailwind.config.ts` under `theme.extend.colors` (white
/ ivory / charcoal / beige / gold) and `theme.extend.fontFamily`. Fonts are
loaded in `app/layout.tsx` via `next/font/google` — swap `Cormorant`/`Inter`
for different families if needed; the CSS variables (`--font-display`,
`--font-body`) are already wired through Tailwind.

### WhatsApp & forms

- The floating button and all "WhatsApp Inquiry" CTAs build their link from
  `NEXT_PUBLIC_WHATSAPP_NUMBER` via `lib/utils.ts#whatsappLink`.
- The contact form, custom-project form, and "Request Quote" button all
  POST to `/api/quote`; the newsletter form POSTs to `/api/newsletter`. Both
  routes are thin placeholders — point `CONTACT_FORM_ENDPOINT` /
  `NEWSLETTER_ENDPOINT` at a real service or replace the route bodies with
  your own email/CRM integration.

---

## SEO & performance

- **Metadata** — per-page `metadata`/`generateMetadata` exports (title
  templates, descriptions, Open Graph, Twitter cards) in every route.
- **Structured data** — `Organization` JSON-LD in the root layout,
  `Product` JSON-LD on every product page.
- **Sitemap & robots** — generated dynamically at `/sitemap.xml` and
  `/robots.txt` from `app/sitemap.ts` / `app/robots.ts`, so new
  products/collections/posts are picked up automatically.
- **Fonts** — loaded via `next/font/google` (self-hosted, zero layout
  shift, automatic `font-display: swap`).
- **Images** — `next.config.mjs` whitelists remote image domains; swap the
  plain `<img>` tags for `next/image` once you're serving local files to get
  automatic resizing, lazy-loading, and AVIF/WebP output.
- **Motion** — all Framer Motion scroll/hover effects respect
  `prefers-reduced-motion` (see `app/globals.css`).
- **Accessibility** — visible focus rings, semantic headings, alt text on
  every image, labelled icon-only buttons.

To validate Lighthouse locally:

```bash
npm run build && npm run start
# then run Lighthouse in Chrome DevTools against http://localhost:3000
```

---

## Deployment (Vercel)

1. Push this repo to GitHub.
2. Import it in [Vercel](https://vercel.com/new) — it auto-detects Next.js.
3. Add the environment variables from `.env.example` in Project Settings →
   Environment Variables.
4. Deploy. `vercel.json` pins the framework and build commands; the
   `regions` field defaults to Mumbai (`bom1`) — change it if your audience
   is elsewhere.

---

## Scripts

```bash
npm run dev     # local dev server
npm run build   # production build
npm run start   # run the production build locally
npm run lint    # ESLint
```
