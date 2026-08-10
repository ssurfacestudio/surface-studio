import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { collections } from "@/lib/data";
import ScrollReveal from "@/components/ScrollReveal";
import MarbleVein from "@/components/MarbleVein";

export default function FeaturedCollections() {
  const featured = collections.slice(0, 4);
  return (
    <section className="bg-white py-24 dark:bg-charcoal md:py-32">
      <div className="mx-auto max-w-8xl px-6 md:px-8 lg:px-12">
        <ScrollReveal className="mb-14 max-w-xl">
          <p className="font-body text-[12px] uppercase tracking-[0.3em] text-gold">
            Featured Collections
          </p>
          <h2 className="mt-4 font-display text-3xl text-charcoal dark:text-ivory md:text-4xl">
            MADE FOR SPACES WHERE BEAUTY IS ESSENTIAL
          </h2>
        </ScrollReveal>

        <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
          {featured.map((c, i) => (
            <ScrollReveal key={c.slug} delay={i * 0.08}>
              <Link
                href={`/collections/${c.slug}`}
                className="group relative block h-[380px] overflow-hidden rounded-lg md:h-[440px]"
              >
                <img
                  src={c.image}
                  alt={c.name}
                  className="h-full w-full object-cover transition-transform duration-[1200ms] ease-luxury group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-charcoal/80 via-charcoal/10 to-transparent" />
                <div className="absolute inset-x-0 bottom-0 flex items-end justify-between p-7">
                  <div>
                    <h3 className="font-display text-2xl text-white">{c.name}</h3>
                    <p className="mt-1 font-body text-sm text-white/70">{c.tagline}</p>
                  </div>
                  <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-white/15 text-white backdrop-blur-sm transition-transform group-hover:translate-x-1 group-hover:-translate-y-1">
                    <ArrowUpRight className="h-5 w-5" />
                  </span>
                </div>
              </Link>
            </ScrollReveal>
          ))}
        </div>

        <div className="mt-10 flex justify-center">
          <MarbleVein />
        </div>
      </div>
    </section>
  );
}
