import { bestSellers } from "@/lib/data";
import ScrollReveal from "@/components/ScrollReveal";
import ProductCard from "@/components/ProductCard";

export default function BestSellers() {
  return (
    <section className="bg-ivory py-24 dark:bg-charcoal-soft md:py-32">
      <div className="mx-auto max-w-8xl px-6 md:px-8 lg:px-12">
        <ScrollReveal className="mb-14 flex flex-col items-start justify-between gap-4 md:flex-row md:items-end">
          <div>
            <p className="font-body text-[12px] uppercase tracking-[0.3em] text-gold">
              Best Sellers
            </p>
            <h2 className="mt-4 font-display text-3xl text-charcoal dark:text-ivory md:text-4xl">
              The pieces our clients return to.
            </h2>
          </div>
        </ScrollReveal>

        <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {bestSellers.map((p, i) => (
            <ScrollReveal key={p.slug} delay={i * 0.08}>
              <ProductCard product={p as any} />
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
}
