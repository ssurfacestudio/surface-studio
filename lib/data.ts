// ==========================================
// Types & Interfaces
// ==========================================

export interface NavItem {
  label: string;
  href: string;
}

export interface Project {
  id: string;
  title: string;
  category: string;
  description: string;
  imageUrl: string;
  href?: string;
  featured?: boolean;
}

export interface Service {
  id: string;
  title: string;
  description: string;
  iconName?: string;
}

export interface SocialLink {
  label: string;
  href: string;
}

// ==========================================
// Navigation & Footer Links
// ==========================================

export const STUDIO_NAV_LINKS: NavItem[] = [
  { label: "About", href: "/about" },
  { label: "Custom Projects", href: "/projects" },
  { label: "Gallery", href: "/gallery" },
  { label: "Blog", href: "/blog" },
  { label: "Contact", href: "/contact" },
];

export const SOCIAL_LINKS: SocialLink[] = [
  { label: "Instagram", href: "https://instagram.com" },
  { label: "Pinterest", href: "https://pinterest.com" },
  { label: "LinkedIn", href: "https://linkedin.com" },
];

// ==========================================
// Studio Information
// ==========================================

export const STUDIO_INFO = {
  name: "Surface Studio",
  tagline: "Crafting Timeless Architectural & Bespoke Surfaces",
  email: "hello@surfacestudio.com",
  phone: "+1 (555) 234-5678",
  address: "100 Design Avenue, Creative District",
  workingHours: "Mon – Fri: 9:00 AM – 6:00 PM",
};

// ==========================================
// Featured & Gallery Projects
// ==========================================

export const PROJECTS: Project[] = [
  {
    id: "minimalist-concrete-villa",
    title: "Minimalist Concrete Villa",
    category: "Architectural Surfaces",
    description:
      "Custom micro-cement flooring and seamless wall textures designed for a modern residential sanctuary.",
    imageUrl: "/images/projects/project-1.jpg",
    featured: true,
  },
  {
    id: "venetian-plaster-loft",
    title: "Venetian Plaster Loft",
    category: "Custom Finishes",
    description:
      "Hand-troweled lime plaster accents providing depth and organic texture to an open-concept living space.",
    imageUrl: "/images/projects/project-2.jpg",
    featured: true,
  },
  {
    id: "monolithic-stone-island",
    title: "Monolithic Stone Kitchen",
    category: "Bespoke Fabrication",
    description:
      "Precision-milled architectural surface integration for high-wear kitchen and dining environments.",
    imageUrl: "/images/projects/project-3.jpg",
    featured: false,
  },
  {
    id: "commercial-studio-showroom",
    title: "Artisan Gallery Showroom",
    category: "Commercial Spaces",
    description:
      "Durable, textured acoustic wall treatments crafted specifically for an art display gallery.",
    imageUrl: "/images/projects/project-4.jpg",
    featured: true,
  },
];

// ==========================================
// Services Offered
// ==========================================

export const SERVICES: Service[] = [
  {
    id: "bespoke-surface-design",
    title: "Bespoke Surface Design",
    description:
      "We collaborate with architects and designers to formulate unique finishes, textures, and color palettes.",
  },
  {
    id: "architectural-plastering",
    title: "Architectural & Lime Plastering",
    description:
      "Authentic Venetian, Tadelakt, and Roman clay finishes applied by master craftspeople.",
  },
  {
    id: "micro-cement-installations",
    title: "Seamless Micro-Cement",
    description:
      "Water-resistant, continuous surface coatings ideal for floors, bathrooms, and contemporary interiors.",
  },
];