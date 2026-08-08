import Link from "next/link";
import { Instagram, Facebook, Linkedin } from "lucide-react";
import { collections } from "@/lib/data";

export default function Footer() {
  return (
    <footer className="border-t border-charcoal/10 bg-ivory dark:border-ivory/10 dark:bg-charcoal">
      <div className="mx-auto grid max-w-8xl gap-12 px-6 py-16 md:grid-cols-4 md:px-8 lg:px-12">
        <div className="md:col-span-1">
          <p className="font-display text-xl uppercase tracking-widest2 text-charcoal dark:text-ivory">
            Surface <span className="text-gold">Studio</span>
          </p>
          <p className="mt-4 max-w-xs font-body text-sm leading-relaxed text-charcoal/60 dark:text-ivory/60">
            Handcrafted marble furniture and décor, designed in India and
            exported to luxury homes across the world.
          </p>
          <div className="mt-6 flex gap-4 text-charcoal/60 dark:text-ivory/60">
            <a 
            href="https://www.instagram.com/surface_s_"
            target="_blank"
            rel="noopener noreferrer"
             aria-label="Instagram" className="hover:text-gold"><Instagram className="h-5 w-5" strokeWidth={1.5} /></a>
            <a href="#" aria-label="Facebook" className="hover:text-gold"><Facebook className="h-5 w-5" strokeWidth={1.5} /></a>
            <a href="#" aria-label="LinkedIn" className="hover:text-gold"><Linkedin className="h-5 w-5" strokeWidth={1.5} /></a>
          </div>
        </div>

        <div>
          <p className="font-body text-[12px] uppercase tracking-[0.2em] text-gold">Collections</p>
          <ul className="mt-4 space-y-2">
            {collections.slice(0, 6).map((c) => (
              <li key={c.slug}>
                <Link href={`/collections/${c.slug}`} className="font-body text-sm text-charcoal/70 hover:text-gold dark:text-ivory/70">
                  {c.name}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <p className="font-body text-[12px] uppercase tracking-[0.2em] text-gold">Studio</p>
          <ul className="mt-4 space-y-2">
            {[
              ["About", "/about"],
              ["Custom Projects", "/custom-projects"],
              ["Gallery", "/gallery"],
              ["Blog", "/blog"],
              ["Contact", "/contact"],
            ].map(([label, href]) => (
              <li key={href}>
                <Link href={href} className="font-body text-sm text-charcoal/70 hover:text-gold dark:text-ivory/70">
                  {label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <p className="font-body text-[12px] uppercase tracking-[0.2em] text-gold">Contact</p>
          <ul className="mt-4 space-y-2 font-body text-sm text-charcoal/70 dark:text-ivory/70">
            <li>Surface Studio</li>
            <li>Jaipur ,Rajasthan 302015</li>
            <li>India</li>
            <li className="pt-2">ssurfacestudio@gmail.com</li>
            <li>+91 8619233925 / +91 7792823718</li>
          </ul>
        </div>
      </div>

      <div className="border-t border-charcoal/10 px-6 py-6 dark:border-ivory/10 md:px-8 lg:px-12">
        <div className="mx-auto flex max-w-8xl flex-col items-center justify-between gap-3 font-body text-xs text-charcoal/50 dark:text-ivory/50 md:flex-row">
          <p>© {new Date().getFullYear()} Surface Studio. All rights reserved.</p>
          <p>Handcrafted in Rajasthan, India · Exported Worldwide</p>
        </div>
      </div>
    </footer>
  );
}
