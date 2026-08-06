import { Gem, Hand, Globe2, ShieldCheck } from "lucide-react";
import ScrollReveal from "@/components/ScrollReveal";

const points = [
  {
    icon: Gem,
    title: "Rare Marble, Sourced Direct",
    description:
      "We buy blocks directly from quarries in Rajasthan and Italy, skipping the middlemen who inflate cost and inconsistency.",
  },
  {
    icon: Hand,
    title: "Hand-Finished, Always",
    description:
      "Every edge, curve and joint passes through an artisan's hands — CNC shapes, but craft finishes.",
  },
  {
    icon: Globe2,
    title: "Built for Export",
    description:
      "Custom crating, moisture-proofing and door-to-door logistics to over 30 countries, refined over a decade.",
  },
  {
    icon: ShieldCheck,
    title: "Warrantied Craftsmanship",
    description:
      "A 5-year structural warranty on every piece, backed by the same workshop that made it.",
  },
];

export default function WhySurfaceStudio() {
  return (
    <section className="bg-white py-24 dark:bg-charcoal md:py-32">
      <div className="mx-auto max-w-8xl px-6 md:px-8 lg:px-12">
        <ScrollReveal className="mx-auto mb-16 max-w-2xl text-center">
          <p className="font-body text-[12px] uppercase tracking-[0.3em] text-gold">
            Why Surface Studio
          </p>
          <h2 className="mt-4 font-display text-3xl text-charcoal dark:text-ivory md:text-4xl">
            Luxury, defined by what you don't see.
          </h2>
        </ScrollReveal>

        <div className="grid grid-cols-1 gap-10 sm:grid-cols-2 lg:grid-cols-4">
          {points.map((point, i) => (
            <ScrollReveal key={point.title} delay={i * 0.08} className="text-center">
              <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-full border border-gold/40">
                <point.icon className="h-6 w-6 text-gold" strokeWidth={1.4} />
              </div>
              <h3 className="mt-5 font-display text-lg text-charcoal dark:text-ivory">
                {point.title}
              </h3>
              <p className="mt-2 font-body text-sm leading-relaxed text-charcoal/60 dark:text-ivory/60">
                {point.description}
              </p>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
}
