export interface Collection {
  slug: string;
  name: string;
  tagline: string;
  productCount: number;
  image: string;
}

export const collections: Collection[] = [
  {
    slug: "coffee-tables",
    name: "Coffee Tables",
    tagline: "Low-profile sculptural centerpieces",
    productCount: 12,
    image: "/images/coffee.jpeg",
  },
  {
    slug: "side-tables",
    name: "Side Tables",
    tagline: "Compact, accent marble statements",
    productCount: 8,
    image: "/images/side.jpeg",
  },
  {
    slug: "accent-tables",
    name: "Accent Tables",
    tagline: "Sculptural forms and unique silhouettes",
    productCount: 6,
    image: "/images/accent.jpeg",
  },
  {
    slug: "console-tables",
    name: "Console Tables",
    tagline: "Architectural entry and hallway statements",
    productCount: 5,
    image: "/images/console.jpeg",
  },
];