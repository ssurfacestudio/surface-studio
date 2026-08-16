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
  images: string[];
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
      "Marble is more than a surface—it is a design decision that defines the character of a space. The right stone should complement your architecture, respond to the way the room is used, and reveal its natural beauty for years to come.",
      "Begin with the atmosphere you want to create. Soft whites and subtle grey-veined marbles bring a sense of light, calm and timeless elegance, while warm creams and richly coloured stones create depth and character. For a more dramatic statement, bold veining and exotic marbles can transform a wall, floor or bespoke furniture piece into a focal point.",
      "Consider how the marble will be lived with. High-traffic floors and everyday surfaces benefit from stones and finishes suited to regular use, while statement consoles, coffee tables and feature walls allow greater freedom to prioritise distinctive veining and visual impact. Polished finishes enhance depth and luminosity; honed finishes offer a softer, understated luxury.",
      "Finally, choose the slab—not just the sample. Every natural marble slab is unique, with variations in tone, veining and movement. Reviewing the full slab and planning the vein direction before fabrication ensures that the finished surface feels intentional, balanced and beautifully composed.",
      "The finest marble is not simply selected for its beauty—it is chosen for how beautifully it belongs to the space.",
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
    readTime: "7 min read",
    content: [
      "Marble is designed to be lived with. Its natural veining, subtle variations and distinctive surface character are what make every piece unique. With a few thoughtful habits, your marble furniture can retain its elegance and finish for years to come.",
      "Keep the surface clean and dry. For everyday maintenance, gently wipe the marble with a soft, lint-free cloth. When deeper cleaning is needed, use a pH-neutral stone cleaner and avoid abrasive materials that may affect the surface finish.",
      "Treat spills promptly. Marble is naturally porous and can react with acidic substances. Citrus, wine, coffee, vinegar and other acidic liquids should be wiped away as soon as possible to minimise the risk of staining or etching.",
      "Protect the surface from heat and scratches. Although marble is durable, it is not completely resistant to marks. Use coasters, placemats and trivets beneath hot, sharp or rough objects, particularly on dining and coffee tables.",
      "Avoid harsh household cleaners. Products containing acids, bleach, strong chemicals or abrasive ingredients can gradually dull or damage a polished marble surface. Always choose products specifically formulated for natural stone.",
      "Maintain the seal. Depending on the marble, finish and frequency of use, professional resealing may be required periodically. A simple water-bead test can help indicate whether the protective seal is still effective.",
      "Most importantly, embrace the natural character of marble. Small variations, subtle movement and the gradual development of the stone are part of its beauty. Proper care isn't about keeping marble untouched—it is about preserving its character while allowing it to age gracefully.",
      "A little care keeps every Surface Studio piece looking as timeless as the stone itself.",
    ],
  },
  {
    slug: "where-marble-find-its-form",
    title: "Where Marble Finds Its Form",
    excerpt:
      "A look at the quarries, the cutting floor and the hand-finishing benches where every Surface Studio piece begins.",
    image: "/images/table3.jpeg",
    category: "Craft",
    date: "2026-04-27",
    readTime: "5 min read",
    content: [
      "Our workshop is rooted in the heart of Rajasthan, close to one of India’s most renowned marble-producing regions. Here, centuries-old stone craftsmanship meets contemporary technology to create marble furniture with precision, character and enduring beauty.",
      "Every piece begins with the careful selection of natural stone. We study each slab for its veining, colour, movement and natural character, selecting the section that best complements the design.",
      "Advanced CNC technology allows us to achieve precise forms and refined detailing, while skilled artisans bring the final piece to life by hand. Edges are shaped, surfaces are refined and every detail is carefully finished to meet the standards of a luxury piece.",
      "From raw marble to a finished table, the process is closely supervised at every stage.",
      "This balance of modern precision and traditional craftsmanship allows us to create furniture that feels contemporary, yet remains deeply connected to the natural beauty of Rajasthan.",
      "Every piece leaves our workshop carrying something unique: the character of the stone, the skill of the hands that shaped it, and the vision behind its design.",
    ],
  },
];

// 2. PROCESS STEPS / WORLD OF STONE
export const theWorldofStone = [
  {
    number: "01",
    title: "MARBLE",
    description:
      "The foundation of our collection. Marble is valued for its depth, natural veining and ability to bring an understated sense of luxury to furniture and interiors. From subtle, cloud-like patterns to bold, architectural movement, every slab offers a different composition. (Makrana · Carrara · Calacatta · Statuario · Dungri · Albeta · Pink Marble and more)",
  },
  {
    number: "02",
    title: "ONYX",
    description:
      "Known for its translucent quality and dramatic natural patterns, onyx brings an almost luminous character to interiors. Its layered colours and organic movement make it particularly striking for statement furniture and sculptural applications. (Character: Translucent · Dramatic · Rare · Sculptural)",
  },
  {
    number: "03",
    title: "TRAVERTINE",
    description:
      "Recognised for its warm tones, tactile surface and naturally porous character, travertine introduces a softer, more organic expression of stone. Its earthy palette works beautifully with contemporary, minimalist and Mediterranean-inspired interiors. (Character: Warm · Organic · Textural · Architectural)",
  },
  {
    number: "04",
    title: "QUARTZITE",
    description:
      "For spaces that call for stronger visual movement, quartzite offers dramatic patterns and rich natural variation. Its distinctive appearance makes it particularly suited to statement pieces where the stone itself becomes the focal point.(Character: Bold · Expressive · Dramatic · Distinctive)",
  },
  {
    number: "05",
    title: "GRANITE",
    description:
      "Known for its strength and enduring character, granite offers a more grounded and substantial expression of natural stone. Its varied mineral patterns and deep tones create a powerful presence in both residential and commercial spaces.(Character: Strong · Enduring · Natural · Bold)",
  },
];

// Export alias to maintain backwards compatibility for components using `processSteps`
export const processSteps = theWorldofStone;

// 3. TESTIMONIALS
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

// 4. BEST SELLERS
export const bestSellers = [
  {
    id: "1",
    slug: "calacatta-coffee-table",
    title: "Calacatta Marble Coffee Table",
    name: "Calacatta Marble Coffee Table",
    price: "$1,200",
    image: "/images/table1.jpeg",
    images: ["/images/table1.jpeg"],
  },
];

// 5. EXPORT COUNTRIES
export const exportCountries = [
  "United States",
  "United Kingdom",
  "United Arab Emirates",
  "Australia",
  "Singapore",
  "Italy",
  "Hungary",
  "Thailand",
  "Qatar",
  "Mongolia",
  "South Korea",
  "Spain",
  "Netherlands",
  "Sweden",
  "Norway",
  "Finland",
  "Belgium",
  "Austria",
  "New Zealand",
  "Hong Kong",
  "Turkey",
  "Brazil",
  "Mexico",
  "South Africa",
  "Canada",
  "Germany",
  "France",
  "Saudi Arabia",
];

// 6. COLLECTIONS
export const collections: Collection[] = [
  { slug: "coffee-tables", name: "Coffee Tables", description: "Handcrafted marble coffee tables", image: "/images/coffee.jpeg" },
  { slug: "side-tables", name: "Side Tables", description: "Elegant marble side tables", image: "/images/side.jpeg" },
  { slug: "accent-tables", name: "Accent Tables", description: "Unique marble accent pieces", image: "/images/accent.jpeg" },
  { slug: "console-tables", name: "Console Tables", description: "Statement marble consoles", image: "/images/console.jpeg" },
  { slug: "dining-tables", name: "Dining Tables", description: "Bespoke marble dining tables" },
  { slug: "sculptures", name: "Sculptures", description: "Hand-carved stone sculptures" },
];

// 7. PRODUCTS
export const products: Product[] = [
  {
    id: "1",
    slug: "calacatta-coffee-table",
    name: "Calacatta Marble Coffee Table",
    collection: "coffee-tables",
    price: "$1,200",
    image: "/images/table1.jpeg",
    images: ["/images/table1.jpeg"],
    description: "Solid Calacatta marble table hand-finished in Rajasthan.",
  },
];

// 8. HELPER FUNCTIONS
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