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
  video?: string;
  description?: string;
  dimensions?: string;
  material?: string;
  inStock?: boolean;
  marbleType?: string;
  finish?: string;
  weight?: string;
  bestSeller?: boolean;
  customizable?: boolean;
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
    author: "Anonymous Client",
    location: "Maharastra, India",
  },
  {
    quote:
      "Working with Surface Studio on our custom dining project was seamless. The stone quality and finishing are world-class.",
    author: "Aayush Srivastava",
    location: "Bangalore, India",
  },
];

// 4. BEST SELLERS
export const bestSellers = [
  {
    id: "01",
    slug: "marble-coffee-table01",
    title: "Marble Coffee Table",
    name: "Marble Coffee Table",
    price: "Request Quote",
    image: "/images/coffee01main.jpeg",
    images: ["/images/coffee01main.jpeg"],
  },
  {
    id: "00",
    slug: "Marble-coffee-table00",
    title: "Marble Coffee Table",
    name: "Marble Coffee Table",
    price: "Request Quote",
    image: "/images/coffeetable00main.jpeg",
    images: ["/images/coffeetable00main.jpeg"],
  }
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
  { slug: "dining-tables", name: "Dining Tables", description: "Bespoke marble dining tables", image: "/images/dining.jpeg" },
  { slug: "objects-&-living", name: "Objects & Living", description: "Artful Objects for your home", image: "/images/objects.jpeg" },
];

// 7. PRODUCTS
export const products: Product[] = [
  {
    id: "00",
    slug: "Marble-coffee-table00",
    name: "Marble Coffee Table",
    collection: "coffee-tables",
    price: "Request Quote",
    image: "/images/coffeetable00main.jpeg",
    images: [
      "/images/coffeetable00main.jpeg",
      "/images/coffeetable00angle.jpeg",
    ],
    video: "/videos/coffeetable00video.mp4",
    description: "A statement of sculptural elegance, the Wave Loop Coffee Table is crafted from natural marble and shaped into a seamless, flowing silhouette. Its continuous curved form creates a striking interplay of solid stone and open space, while the soft rounded edges bring a sense of movement and balance. Subtle natural veining enhances the marble’s character, making each piece uniquely its own. Designed for refined contemporary interiors, it serves as a sophisticated centrepiece for living rooms, lounges, luxury residences, and hospitality spaces.",
    dimensions: "120 x 60 x 38 cm",
    material: "Natural Marble",
    marbleType: "White Marble",
    finish: "Polished",
    weight: "200 kg",
    bestSeller: true,
    customizable: true,
  },
  {
    id: "01",
    slug: "marble-coffee-table01",
    name: "Marble Coffee Table",
    collection: "coffee-tables",
    price: "Request Quote",
    image: "/images/coffee01main.jpeg",
    images: [
      "/images/coffee01main.jpeg",
      "/images/coffee01angle1.jpeg",
      "/images/coffee01angle2.jpeg",
      "/images/coffee01angle3.jpeg",
      "/images/coffee01angle4.jpeg",
    ],
    video: "/videos/coffee01video.mp4",
    description: `A study in form, balance, and natural stone, this sculptural coffee table transforms marble into a statement of contemporary luxury. Its softly rounded tabletop rests upon three bold, spherical marble forms, creating a striking composition that feels both architectural and organic.

Crafted from natural marble, every surface reveals its own distinctive veining, making each piece inherently unique. The smooth polished finish enhances the depth and movement of the stone, while the sculptural base gives the table a strong yet effortlessly elegant presence.

Designed for refined living spaces, this statement coffee table brings together functionality and collectible design—serving as a sophisticated centrepiece while adding an artistic character to the room.
  `,
    dimensions: "36 x 90 x 90 cm",
    material: "Natural Marble",
    marbleType: "Arabescato Corchia Marble",
    finish: "Polished",
    weight: "200 kg",
    bestSeller: true,
    customizable: true,
  },
    {
    id: "02",
    slug: "Marble-coffee-table02",
    name: "Marble Coffee Table",
    collection: "coffee-tables",
    price: "Request Quote",
    image: "/images/coffeetable02main.jpeg",
    images: [
      "/images/coffeetable02main.jpeg",
      "/images/coffeetable02angle1.jpeg",
      "/images/coffeetable02angle2.jpeg",
    ],
    description: "A sculptural statement table crafted in premium Makrana White Marble, featuring a substantial slab top with softly rounded edges and elegant cylindrical supports. The natural white stone is accented by delicate grey veining, highlighting its authentic character and refined craftsmanship. Its monolithic silhouette and architectural proportions make it a striking addition to contemporary, minimalist, and luxury interiors.",
    dimensions: "100 x 100 x 35 cm",
    material: "Natural Marble",
    marbleType: "Makrana White Marble",
    finish: "Polished",
    weight: "180 kg",
    bestSeller: false,
    customizable: true,
  },
  {
    id: "03",
    slug: "marble-coffee-table03",
    name: "Marble Coffee Table",
    collection: "coffee-tables",
    price: "Request Quote",
    image: "/images/coffeetable03main.jpeg",
    images: [
      "/images/coffeetable03main.jpeg",
      "/images/coffeetable03angle1.jpeg",
      "/images/coffeetable03angle2.jpeg",
      "/images/coffeetable03angle3.jpeg",
    ],
    description: `A statement-making round marble coffee table crafted from richly veined natural stone. Its softly rounded tabletop and sculptural, bulbous pedestal legs create a bold yet refined silhouette, while the deep brown marble with intricate light veining brings warmth, depth, and a luxurious character to the space.
Designed to balance organic form with contemporary elegance, this table works beautifully as a centrepiece for sophisticated living rooms, lounges, and hospitality interiors. Each piece is naturally unique, with variations in veining and tone that make every table one of a kind.`,
      dimensions: "36 x 90 x 90 cm",
    material: "Natural Marble",
    marbleType: "Dark Emperador Marble",
    finish: "Polished",
    weight: "200 kg approx",
    bestSeller: false,
    customizable: true,
  },
  {
    id: "04",
    slug: "marble-coffee-table04",
    name: "Marble Coffee Table",
    collection: "coffee-tables",
    price: "Request Quote",
    image: "/images/coffeetable04main.jpeg",
    images: [
      "/images/coffeetable04main.jpeg",
      "/images/coffeetable04angle1.jpeg",
      "/images/coffeetable04angle2.jpeg",
      "/images/coffeetable04angle3.jpeg",
    ],
    description: `A refined oval marble coffee table designed with a minimalist, sculptural aesthetic. The table features a softly rounded oval top with naturally flowing grey and white marble veining, giving every piece a unique character.
The substantial cylindrical marble legs echo the shape of the tabletop, creating a balanced and architectural silhouette. Its understated form and natural stone finish make it an elegant centrepiece for contemporary, modern, and luxury interiors.`,
    dimensions: "40 x 120 x 80 cm",
    material: "Natural Marble",
    marbleType: "Terra Bianca Marble",
    finish: "Polished",
    weight: "150 kg approx",
    bestSeller: false,
    customizable: true,
  },
  {
    id: "05",
    slug: "marble-coffee-table05",
    name: "Marble Coffee Table",
    collection: "coffee-tables",
    price: "Request Quote",
    image: "/images/coffeetable05main.jpeg",
    images: [
      "/images/coffeetable05main.jpeg",
      "/images/coffeetable05angle1.jpeg",
      "/images/coffeetable05angle2.jpeg",
      "/images/coffeetable05angle3.jpeg",
      "/images/coffeetable05angle4.jpeg",
      "/images/coffeetable05angle5.jpeg",
    ],
    description: "A statement-making coffee table crafted from richly veined burgundy marble, featuring a softly rounded rectangular top and four cylindrical marble legs. The dramatic natural veining brings depth and character, while the sculptural silhouette creates a refined contemporary presence. Designed to elevate sophisticated living spaces with a timeless, luxurious aesthetic.",
    dimensions: "48W x 30D x 15H",
    material: "Natural Marble",
    marbleType: "Merlot Marble",
    finish: "Polished",
    weight: "150 kg approx",
    bestSeller: false,
    customizable: true,
  },
  {
  id: "06",
    slug: "marble-coffee-table06",
    name: "Marble Coffee Table",
    collection: "coffee-tables",
    price: "Request Quote",
    image: "/images/coffeetable06main.jpeg",
    images: [
      "/images/coffeetable06main.jpeg",
      "/images/coffeetable06angle1.jpeg",
      "/images/coffeetable06angle2.jpeg",
      "/images/coffeetable06angle3.jpeg",
      "/images/coffeetable06angle4.jpeg",
    ],
    description: "This elegant oval marble coffee table features a richly veined natural stone top with matching solid marble legs. Its sculptural silhouette, organic veining, and substantial rounded edge create a refined, contemporary look. The neutral earthy tones pair beautifully with modern, minimalist, and luxury interiors, making it a statement centrepiece for sophisticated living spaces.",
    dimensions: "32W x 32D x 15H",
    material: "Natural Marble",
    marbleType: "Terra Bianca Marble",
    finish: "Polished",
    weight: "150 kg approx",
    bestSeller: false,
    customizable: true,
  },
  {
    id: "07",
    slug: "marble-coffee-table07",
    name: "Marble Coffee Table",
    collection: "coffee-tables",
    price: "Request Quote",
    image: "/images/coffeetable07main.jpeg",
    images: [
      "/images/coffeetable07main.jpeg",
      "/images/coffeetable07angle1.jpeg",
      "/images/coffeetable07angle2.jpeg",
      "/images/coffeetable07angle3.jpeg",
      "/images/coffeetable07angle4.jpeg",
    ],
    description: "A sophisticated set of three sculptural coffee tables crafted from premium white marble, featuring organically rounded tops, varied heights, and cylindrical marble legs. The natural stone showcases distinctive grey veining, giving each piece a unique character while maintaining a cohesive look. Designed to nest and overlap beautifully, the set brings a refined architectural quality to contemporary and luxury interiors.",
    dimensions: "121W x 95D x 38H , 84W x 77D x 44H , 61W x 49D x 50H ",
    material: "Natural Marble",
    marbleType: "Makrana White Marble",
    finish: "Polished",
    weight: "400 kg approx",
    bestSeller: false,
    customizable: true,
  },
   {
    id: "08",
    slug: "marble-coffee-table08",
    name: "Marble Coffee Table",
    collection: "coffee-tables",
    price: "Request Quote",
    image: "/images/coffeetable08main.jpeg",
    images: [
      "/images/coffeetable08main.jpeg",
      "/images/coffeetable08angle1.jpeg",
      "/images/coffeetable08angle2.jpeg",
      "/images/coffeetable08angle3.jpeg",
      "/images/coffeetable08angle4.jpeg",
    ],
    description: "A bold sculptural coffee table featuring a rounded oval top, layered stepped edges, and organically curved legs. Crafted from rich burgundy-red marble with striking natural white veining, the table creates a dramatic focal point while its soft, rounded geometry adds a refined contemporary character. Perfect for luxurious living spaces and statement interiors.",
    dimensions: "120W x 80D x 38H",
    material: "Natural Marble",
    marbleType: "Rosso Levanto Marble",
    finish: "Polished",
    weight: "200 kg approx",
    bestSeller: false,
    customizable: true,
  },
  {
    id: "09",
    slug: "marble-coffee-table09",
    name: "Marble Coffee Table",
    collection: "coffee-tables",
    price: "Request Quote",
    image: "/images/coffeetable09main.jpeg",
    images: [
      "/images/coffeetable09main.jpeg",
      "/images/coffeetable09angle1.jpeg",
      "/images/coffeetable09angle2.jpeg",
    ],
    description: "Crafted from premium Makrana White Marble, this tabletop features a clean ivory-white surface with subtle natural grey veining. Its softly rounded rectangular form and polished finish create an elegant, timeless look, making it ideal for sophisticated coffee tables and contemporary interiors.",
    dimensions: "120W x 70D x 43H",
    material: "Natural Marble",
    marbleType: "Makrana Marble",
    finish: "Polished",
    weight: "120 kg approx",
    bestSeller: false,
    customizable: true,
  },
  {
    id: "10",
    slug: "marble-coffee-table10",
    name: "Marble Coffee Table",
    collection: "coffee-tables",
    price: "Request Quote",
    image: "/images/coffeetable10main.jpeg",
    images: [
      "/images/coffeetable10main.jpeg",
      "/images/coffeetable10angle1.jpeg",
      "/images/coffeetable10angle2.jpeg",
    ],
    description: "A sculptural oval coffee table crafted from premium Makrana White Marble, featuring a softly rounded tabletop and smooth spherical pedestal legs. Its natural ivory-white surface is accented with subtle grey veining, highlighting the unique character of the stone. The polished finish adds a refined sheen, while the bold, rounded silhouette brings a contemporary yet timeless elegance to modern living spaces.",
    dimensions: "110W x 50D x 78H",
    material: "Natural Marble",
    marbleType: "Makrana Marble",
    finish: "Polished",
    weight: "180 kg approx",
    bestSeller: false,
    customizable: true,
  },
    {
    id: "11",
    slug: "marble-coffee-table11",
    name: "Marble Coffee Table",
    collection: "coffee-tables",
    price: "Request Quote",
    image: "/images/coffeetable11main.jpeg",
    images: [
      "/images/coffeetable11main.jpeg",
      "/images/coffeetable11angle1.jpeg",
      "/images/coffeetable11angle2.jpeg",
    ],
    description: "This monolithic square coffee table is crafted from authentic Makrana white marble, showcasing an architectural silhouette rooted in bold geometric massing. Its low-profile design features a substantial slab tabletop that transitions seamlessly into four wide, block-cut corner legs via crisp mitered edges, creating an integrated, bridge-like form. The stone's pure, luminous white base is accented with soft, feathery grey veining, brought to life through a smooth, honed satin finish that balances visual weight with quiet luxury. Styled within a warm minimalist interior characterized by muted lime-washed walls and refined micro-cement floors, the piece serves as a timeless, sculptural anchor in modern living spaces.",
    dimensions: "100W x 100D x 36H",
    material: "Natural Marble",
    marbleType: "Makrana Marble",
    finish: "Polished",
    weight: "190 kg approx",
    bestSeller: false,
    customizable: true,
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