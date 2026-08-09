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
    image: "/images/table1.jpeg", // Fixed: /images/
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
    image: "/images/table2.jpeg", // Fixed: /images/
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
    image: "/images/table3.jpeg", // Fixed: /images/
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