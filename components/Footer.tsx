import Link from "next/link";
import { Instagram } from "lucide-react";
import { collections } from "@/lib/data";

export default function Footer() {
  return (
    <footer className="border-t border-charcoal/10 bg-ivory dark:border-ivory/10 dark:bg-charcoal">
      <div className="mx-auto grid max-w-8xl gap-12 px-6 py-16 md:grid-cols-4 md:px-8 lg:px-12">
        {/* Brand Info */}
        <div className="md:col-span-1">
          <p className="font-display text-xl uppercase tracking-widest text-charcoal dark:text-ivory">
            Surface <span className="text-gold">Studio</span>
          </p>
          <p className="mt-4 max-w-xs font-body text-sm leading-relaxed text-charcoal/60 dark:text-ivory/60">
            Handcrafted marble furniture and décor, designed in India and exported to luxury homes across the world.
          </p>
          <div className="mt-6 flex gap-4 text-charcoal/60 dark:text-ivory/60">
            <a
              href="https://www.instagram.com/surface_studio.marble"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Instagram"
              className="hover:text-gold"
            >
              <Instagram className="h-5 w-5" strokeWidth={1.5} />
            </a>
          </div>
        </div>

        {/* Collections */}
        <div>
          <p className="font-body text-[12px] uppercase tracking-[0.2em] text-gold">
            Collections
          </p>
          <ul className="mt-4 space-y-2">
            {collections.slice(0, 6).map((c) => (
              <li key={c.slug}>
                <Link
                  href={/collections/${c.slug}}
                  className="font-body text-sm text-charcoal/70 hover:text-gold dark:text-ivory/70"
                >
                  {c.name}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        {/* Navigation */}
        