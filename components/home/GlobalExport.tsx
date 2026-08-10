import { exportCountries } from "@/lib/data";
import ScrollReveal from "@/components/ScrollReveal";

const stats = [
  { value: "30+", label: "GLOBAL MARKETS" },
  { value: "12,000+", label: "PIECES CREATED" },
  { value: "15 Yrs", label: "YEARS OF CRAFT" },
  { value: "100%", label: "NATURAL STONE" },
];

export default function GlobalExport() {
  return (
    <section className="bg-white py-24 dark:bg-charcoal md:py-32">
      <div className="mx-auto max-w-8xl px-6 md:px-8 lg:px-12">
        <div className="grid grid-cols-1 gap-16 lg:grid-cols-2 lg:items-center">
          <ScrollReveal>
            <p className="font-body text-[12px] uppercase tracking-[0.3em] text-gold">
              Global Export
            </p>
            <h2 className="mt-4 font-display text-3xl text-charcoal dark:text-ivory md:text-4xl">
              From India, For the World.
            </h2>
            <p className="mt-5 max-w-md font-body text-sm leading-relaxed text-charcoal/60 dark:text-ivory/60">
              Surface Studio brings the beauty of exceptional natural stone and the art of refined design from India to interiors across the globe. Each piece is thoughtfully created to celebrate the individuality of its material while embracing a contemporary, sophisticated aesthetic.
              From private residences and luxury hospitality to architects and design studios, our work travels across borders to become part of spaces that value character, craftsmanship and timeless design. 
              Rooted in craftsmanship. Shaped by stone. Designed for the world.
            </p>
            <div className="mt-8 flex flex-wrap gap-x-3 gap-y-2">
              {exportCountries.map((c) => (
                <span
                  key={c}
                  className="rounded-full border border-charcoal/15 px-4 py-1.5 font-body text-xs text-charcoal/70 dark:border-ivory/15 dark:text-ivory/70"
                >
                  {c}
                </span>
              ))}
            </div>
          </ScrollReveal>

          <ScrollReveal delay={0.15}>
            <div className="grid grid-cols-2 gap-6">
              {stats.map((s) => (
                <div
                  key={s.label}
                  className="rounded-lg border border-charcoal/10 p-8 dark:border-ivory/10"
                >
                  <p className="font-display text-4xl text-gold">{s.value}</p>
                  <p className="mt-2 font-body text-sm text-charcoal/60 dark:text-ivory/60">
                    {s.label}
                  </p>
                </div>
              ))}
            </div>
          </ScrollReveal>
        </div>
      </div>
    </section>
  );
}
