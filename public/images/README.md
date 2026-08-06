# Image assets

This project ships with Unsplash placeholder photography (referenced by URL
in `lib/data.ts`) so the site renders fully out of the box. For production:

1. Shoot or source real product photography — square (1:1) for gallery/cards,
   and at least 1600px wide for hero and product-zoom images.
2. Drop files in this folder (e.g. `/images/products/halo-coffee-table-1.jpg`).
3. Update the `images` arrays in `lib/data.ts` to point at
   `/images/products/...` instead of the Unsplash URLs.
4. Add your own Open Graph image at `/public/og-image.jpg` (1200×630) and a
   logo at `/public/logo.png` for the JSON-LD in `app/layout.tsx`.

Next's `<Image>`-style optimization is already configured in
`next.config.mjs` for remote Unsplash/Cloudinary URLs — once you're on local
files, consider swapping the plain `<img>` tags for `next/image` for
automatic resizing and lazy-loading.
