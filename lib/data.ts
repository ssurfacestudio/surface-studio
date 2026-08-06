// Central placeholder content. Swap image URLs and copy with real product
// photography and catalogue data — the shape of each object is what the
// rest of the app depends on, so keep the keys intact when editing.

export type Collection = {
  slug: string;
  name: string;
  tagline: string;
  description: string;
  image: string;
  productCount: number;
};

export type Product = {
  slug: string;
  name: string;
  collection: string; // Collection slug
  price: string;
  images: string[];
  marbleType: string;
  finish: string;
  dimensions: string;
  weight: string;
  material: string;
  description: string;
  customizable: boolean;
  bestSeller?: boolean;
};

export const collections: Collection[] = [
  {
    slug: "coffee-tables",
    name: "Coffee Tables",
    tagline: "The centrepiece of every living room",
    description:
      "Sculptural forms in Calacatta, Statuario and Emperador marble, engineered for daily life without losing their presence.",
    image:
      "https://images.unsplash.com/photo-1550226891-ef816aed4a98?q=80&w=1600&auto=format&fit=crop",
    productCount: 18,
  },
  {
    slug: "side-tables",
    name: "Side Tables",
    tagline: "Quiet detail, close at hand",
    description:
      "Compact, richly veined companions for sofas and beds — each one book-matched for a mirrored grain.",
    image:
      "https://images.unsplash.com/photo-1567538096630-e0c55bd6374c?q=80&w=1600&auto=format&fit=crop",
    productCount: 12,
  },
  {
    slug: "accent-tables",
    name: "Accent Tables",
    tagline: "Small footprint, singular character",
    description:
      "Freestanding pieces designed to be walked around and admired from every angle.",
    image:
      "https://images.unsplash.com/photo-1616486338812-3dadae4b4ace?q=80&w=1600&auto=format&fit=crop",
    productCount: 9,
  },
  {
    slug: "console-tables",
    name: "Console Tables",
    tagline: "Architecture for the hallway",
    description:
      "Slim, sure-footed consoles that turn an entryway or landing into a considered space.",
    image:
      "https://images.unsplash.com/photo-1616137466211-f939a420be84?q=80&w=1600&auto=format&fit=crop",
    productCount: 10,
  },
  {
    slug: "dining-tables",
    name: "Dining Tables",
    tagline: "Where the family gathers",
    description:
      "Solid marble tops on hand-finished bases, built to anchor a room for generations.",
    image:
      "https://images.unsplash.com/photo-1617806118233-18e1de247200?q=80&w=1600&auto=format&fit=crop",
    productCount: 14,
  },
  {
    slug: "sculptures",
    name: "Sculptures",
    tagline: "Marble, unbound from function",
    description:
      "Studies in form carved by our master artisans — decorative works for shelves, plinths and gardens.",
    image:
      "https://images.unsplash.com/photo-1544967082-d9d25d867d66?q=80&w=1600&auto=format&fit=crop",
    productCount: 22,
  },
  {
    slug: "home-decor",
    name: "Home Décor",
    tagline: "The finishing detail",
    description:
      "Bowls, trays, coasters and objets — smaller expressions of the same stone and the same hand.",
    image:
      "https://images.unsplash.com/photo-1586023492125-27b2c045efd7?q=80&w=1600&auto=format&fit=crop",
    productCount: 31,
  },
];

export const products: Product[] = [
  {
    slug: "calacatta-halo-coffee-table",
    name: "Halo Coffee Table",
    collection: "coffee-tables",
    price: "₹1,85,000",
    images: [
      "https://images.unsplash.com/photo-1550226891-ef816aed4a98?q=80&w=1600&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1567016432779-094069958ea5?q=80&w=1600&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1499933374294-4584851497cc?q=80&w=1600&auto=format&fit=crop",
    ],
    marbleType: "Calacatta Gold",
    finish: "Honed, sealed",
    dimensions: "120 × 65 × 35 cm",
    weight: "68 kg",
    material: "Solid marble top, brushed brass base",
    description:
      "A single slab of Calacatta Gold, cut to let the gold veining run uninterrupted across the surface, set on a brushed brass ring base that appears to float beneath it.",
    customizable: true,
    bestSeller: true,
  },
  {
    slug: "statuario-arc-side-table",
    name: "Arc Side Table",
    collection: "side-tables",
    price: "₹68,000",
    images: [
      "https://images.unsplash.com/photo-1567538096630-e0c55bd6374c?q=80&w=1600&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1615873968403-89e068629265?q=80&w=1600&auto=format&fit=crop",
    ],
    marbleType: "Statuario",
    finish: "Polished",
    dimensions: "45 × 45 × 55 cm",
    weight: "22 kg",
    material: "Solid marble, hand-carved",
    description:
      "A gently curved cylinder of Statuario marble, hand-carved so the grain wraps the form like a single continuous line.",
    customizable: true,
    bestSeller: true,
  },
  {
    slug: "emperador-plinth-accent-table",
    name: "Plinth Accent Table",
    collection: "accent-tables",
    price: "₹52,000",
    images: [
      "https://images.unsplash.com/photo-1616486338812-3dadae4b4ace?q=80&w=1600&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1615529162924-f8605388461d?q=80&w=1600&auto=format&fit=crop",
    ],
    marbleType: "Dark Emperador",
    finish: "Matte honed",
    dimensions: "38 × 38 × 42 cm",
    weight: "31 kg",
    material: "Solid marble block",
    description:
      "Cut from a single block of Dark Emperador and left honed rather than polished, so light sits on the surface instead of bouncing off it.",
    customizable: false,
  },
  {
    slug: "verona-linear-console",
    name: "Verona Linear Console",
    collection: "console-tables",
    price: "₹1,45,000",
    images: [
      "https://images.unsplash.com/photo-1616137466211-f939a420be84?q=80&w=1600&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1616486029423-aaa4789e8c9a?q=80&w=1600&auto=format&fit=crop",
    ],
    marbleType: "Carrara White",
    finish: "Polished",
    dimensions: "150 × 35 × 82 cm",
    weight: "74 kg",
    material: "Marble top, powder-coated steel legs",
    description:
      "A restrained rectilinear console — a thin marble top on a blackened-steel frame that recedes so the stone stays the focus.",
    customizable: true,
    bestSeller: true,
  },
  {
    slug: "aurelia-oval-dining-table",
    name: "Aurelia Oval Dining Table",
    collection: "dining-tables",
    price: "₹4,20,000",
    images: [
      "https://images.unsplash.com/photo-1617806118233-18e1de247200?q=80&w=1600&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1617104551722-3b2d51366400?q=80&w=1600&auto=format&fit=crop",
    ],
    marbleType: "Calacatta Viola",
    finish: "Polished, edge bevelled",
    dimensions: "240 × 110 × 75 cm",
    weight: "210 kg",
    material: "Solid marble top, cast bronze base",
    description:
      "Seats eight. A book-matched Calacatta Viola top on a sculpted bronze base cast in our own foundry — every table in this run is individually numbered.",
    customizable: true,
  },
  {
    slug: "vesper-figure-sculpture",
    name: "Vesper Figure",
    collection: "sculptures",
    price: "₹2,10,000",
    images: [
      "https://images.unsplash.com/photo-1544967082-d9d25d867d66?q=80&w=1600&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1554188248-986adbb73be4?q=80&w=1600&auto=format&fit=crop",
    ],
    marbleType: "White Makrana",
    finish: "Hand-polished",
    dimensions: "40 × 30 × 95 cm",
    weight: "58 kg",
    material: "Solid marble, hand-carved",
    description:
      "Carved over six weeks by a single artisan, Vesper reduces the human form to a single continuous gesture in White Makrana marble.",
    customizable: false,
  },
  {
    slug: "luna-marble-bowl-set",
    name: "Luna Bowl Set",
    collection: "home-decor",
    price: "₹14,500",
    images: [
      "https://images.unsplash.com/photo-1586023492125-27b2c045efd7?q=80&w=1600&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1616627981382-a5e3f0e57cc9?q=80&w=1600&auto=format&fit=crop",
    ],
    marbleType: "Green Onyx",
    finish: "Polished",
    dimensions: "Set of 3, 12–22 cm dia.",
    weight: "3.4 kg (set)",
    material: "Solid onyx marble",
    description:
      "Three nesting bowls turned from a single block of Green Onyx, translucent enough to glow when lit from beneath.",
    customizable: false,
    bestSeller: true,
  },
];

export const bestSellers = products.filter((p) => p.bestSeller);

export function getCollection(slug: string) {
  return collections.find((c) => c.slug === slug);
}

export function getProduct(slug: string) {
  return products.find((p) => p.slug === slug);
}

export function getProductsByCollection(slug: string) {
  return products.filter((p) => p.collection === slug);
}

export function getRelatedProducts(product: Product, count = 4) {
  return products
    .filter((p) => p.collection === product.collection && p.slug !== product.slug)
    .slice(0, count);
}

export const processSteps = [
  {
    step: "01",
    title: "Sourcing",
    description:
      "Our team selects blocks directly from quarries in Rajasthan and Italy, chosen slab-by-slab for veining and structural integrity.",
  },
  {
    step: "02",
    title: "Cutting",
    description:
      "Diamond-wire saws slice each block into slabs, sequenced so grain flows and book-matches correctly across a single piece.",
  },
  {
    step: "03",
    title: "Shaping",
    description:
      "CNC precision for structural forms, then hand-tools for every edge, curve and detail a machine cannot feel.",
  },
  {
    step: "04",
    title: "Finishing",
    description:
      "Honed, polished or leathered by hand — the finish is chosen to match how the stone will actually live in a room.",
  },
  {
    step: "05",
    title: "Quality Check",
    description:
      "Every piece is inspected for density, sealing and finish consistency before it is crated for its destination.",
  },
  {
    step: "06",
    title: "Export Packing",
    description:
      "Custom timber crating, moisture control and insured freight to over 30 countries — built for the piece it protects.",
  },
];

export const testimonials = [
  {
    name: "Elena Rossi",
    location: "Milan, Italy",
    quote:
      "The veining on our dining table looks like it was painted on purpose. Guests always ask where it came from.",
    rating: 5,
  },
  {
    name: "James Whitfield",
    location: "London, UK",
    quote:
      "Ordering marble furniture from overseas felt risky, but the crating and documentation were flawless. The console arrived without a scratch.",
    rating: 5,
  },
  {
    name: "Sara Al-Mansouri",
    location: "Dubai, UAE",
    quote:
      "Surface Studio built a custom console to our exact hallway dimensions. The communication throughout was as premium as the piece itself.",
    rating: 5,
  },
  {
    name: "Marcus Lindqvist",
    location: "Stockholm, Sweden",
    quote:
      "We've bought marble furniture before. This is the first time the photos actually undersold the piece.",
    rating: 5,
  },
];

export const exportCountries = [
  "United States",
  "United Kingdom",
  "UAE",
  "Italy",
  "Australia",
  "Germany",
  "Singapore",
  "Canada",
  "Saudi Arabia",
  "France",
];

export type BlogPost = {
  slug: string;
  title: string;
  excerpt: string;
  image: string;
  category: string;
  date: string;
  readTime: string;
  content: string[];
};

export const blogPosts: BlogPost[] = [
  {
    slug: "how-to-choose-marble-for-your-home",
    title: "How to Choose the Right Marble for Your Home",
    excerpt:
      "Calacatta or Carrara? Honed or polished? A practical guide to matching marble to the way a room is actually used.",
    image:
      "https://images.unsplash.com/photo-1600607687920-4e2a09cf159d?q=80&w=1600&auto=format&fit=crop",
    category: "Guides",
    date: "2026-06-02",
    readTime: "6 min read",
    content: [
      "Marble is chosen with the eyes and lived with by the hand — the two don't always agree, and the gap between them is where most regret comes from.",
      "Start with light. North-facing rooms flatter warmer stones like Emperador and Botticino; bright, south-facing rooms carry cooler whites like Carrara and Statuario without looking cold.",
      "Then think about touch and traffic. A honed finish resists showing etching on a dining table used daily. A polished finish rewards a piece that is seen more than it is used, like a console or side table.",
      "Veining direction matters more than most buyers expect. Book-matched veining across a large top reads as intentional; mismatched veining on a small piece can look accidental. Ask to see the slab layout before it's cut.",
    ],
  },
  {
    slug: "caring-for-marble-furniture",
    title: "Caring for Marble Furniture: A Simple Routine",
    excerpt:
      "Marble is more forgiving than its reputation suggests. Here's the five-minute routine that keeps it that way for decades.",
    image:
      "https://images.unsplash.com/photo-1616486029423-aaa4789e8c9a?q=80&w=1600&auto=format&fit=crop",
    category: "Care",
    date: "2026-05-18",
    readTime: "4 min read",
    content: [
      "Marble is calcium carbonate, which means acids are its one real enemy — not water, not weight, not everyday use.",
      "Wipe spills promptly, especially citrus, wine and vinegar-based dressings. A soft cloth and pH-neutral stone soap handle almost everything else.",
      "Reseal every 12–18 months depending on use. A quick water-bead test tells you when it's due: if water stops beading and starts soaking in, it's time.",
      "Avoid generic bathroom or kitchen sprays entirely. They're formulated for tile and grout, and they will dull a polished marble finish faster than daily use ever would.",
    ],
  },
  {
    slug: "inside-our-rajasthan-workshop",
    title: "Inside Our Rajasthan Workshop",
    excerpt:
      "A look at the quarries, the cutting floor and the hand-finishing benches where every Surface Studio piece begins.",
    image:
      "https://images.unsplash.com/photo-1581092160607-ee22621dd758?q=80&w=1600&auto=format&fit=crop",
    category: "Craft",
    date: "2026-04-27",
    readTime: "5 min read",
    content: [
      "Our workshop sits an hour from the marble belt of Rajasthan, close enough that a block can move from quarry to cutting floor within a day.",
      "Three generations of carving families work alongside our CNC floor — machines rough out structural forms, hands finish every edge that will actually be touched.",
      "We keep a library of over 400 slabs on site at any time, organised by vein pattern rather than just marble type, so a client's book-match request can usually be filled from stock already on the floor.",
    ],
  },
];
