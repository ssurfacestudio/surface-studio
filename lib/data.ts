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

export type Product = {
  id: string;
  slug: string;
  name: string;
  collection: string;
  price: string;
  image: string;
  description?: string;
  dimensions?: string;
  material?: string;
  inStock?: boolean;
};

export type Collection = {
  slug: string;
  name: string;
  description?: string;
  image?: string;
};

// 1. BLOG POSTS
export const blogPosts: BlogPost[] = [
  {
    slug: "how-to-choose-marble-for-your-home",
    title: "How to Choose the Right Marble for Your Home",
    excerpt:
      "Calacatta or Carrara? Honed or polished? A practical guide to matching marble to the way a room is actually used.",
    image: "/images/table1.jpeg",
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
    image: "/images/table2.jpeg",
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
    image: "/images/table3.jpeg",
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

// 2. PROCESS STEPS (Used in ManufacturingProcess.tsx)
export const processSteps = [
  {
    number: "01",
    title: "Slab Selection",
    description:
      "Hand-picking high-grade natural marble blocks direct from Rajasthan quarries.",
  },
  {
    number: "02",
    title: "Precision Cutting",
    description:
      "Advanced CNC diamond wire cutting tailored to exact dimensional specifications.",
  },
  {
    number: "03",
    title: "Artisanal Finishing",
    description:
      "Hand-polishing and edge-detailing by master craftsmen with decades of stone heritage.",
  },
  {
    number: "04",
    title: "Quality & Export",
    description:
      "Sealed for protection, crate-packaged, and shipped securely around the world.",
  },
];

// 3. TESTIMONIALS (Used in Testimonials.tsx)
export const testimonials = [
  {
    quote:
      "The craftsmanship of our Calacatta coffee table exceeded our expectations. Truly a masterpiece in our living room.",
    author: "Sophia Laurent",
    location: "London, UK",
  },
  {
    quote:
      "Working with Surface Studio on our custom dining project was seamless. The stone quality and finishing are world-class.",
    author: "Marcello Rossi",
    location: "Milan, Italy",
  },
];

// 4. BEST SELLERS (Used in BestSellers.tsx)
export const bestSellers = [
  {
    id: "1",
    slug: "calacatta-coffee-table",
    title: "Calacatta Marble Coffee Table",
    name: "Calacatta Marble Coffee Table",
    price: "$1,200",
    image: "/images/table1.jpeg",
  },
];

// 5. EXPORT COUNTRIES (Used in GlobalExport.tsx)
export const exportCountries = [
  "United States",
  "United Kingdom",
  "United Arab Emirates",
  "Australia",
  "Canada",
  "Germany",
  "France",
  "Saudi Arabia",
];

// 6. COLLECTIONS (Used in Navbar, FeaturedCollections, etc.)
export const collections: Collection[] = [
  { slug: "coffee-tables", name: "Coffee Tables", description: "Handcrafted marble coffee tables" },
  { slug: "side-tables", name: "Side Tables", description: "Elegant marble side tables" },
  { slug: "accent-tables", name: "Accent Tables", description: "Unique marble accent pieces" },
  { slug: "console-tables", name: "Console Tables", description: "Statement marble consoles" },
  { slug: "dining-tables", name: "Dining Tables", description: "Bespoke marble dining tables" },
  { slug: "sculptures", name: "Sculptures", description: "Hand-carved stone sculptures" },
];

// 7. PRODUCTS (Used in Product pages)
export const products: Product[] = [
  {
    id: "1",
    slug: "calacatta-coffee-table",
    name: "Calacatta Marble Coffee Table",
    collection: "coffee-tables",
    price: "$1,200",
    image: "/images/table1.jpeg",
    description: "Solid Calacatta marble table hand-finished in Rajasthan.",
  },
];

// 8. HELPER FUNCTIONS (Used in Dynamic pages and Sitemap)
export function getCollection(slug: string) {
  return collections.find((c) => c.slug === slug);
}

export function getProduct(slug: string) {
  return products.find((p) => p.slug === slug);
}

export function getProductsByCollection(collectionSlug: string) {
  return products.filter((p) => p.collection === collectionSlug);
}

export function getRelatedProducts(currentSlug: string) {
  return products.filter((p) => p.slug !== currentSlug);
}