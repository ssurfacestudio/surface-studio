import { processSteps } from "@/lib/data";
import ScrollReveal from "@/components/ScrollReveal";

export default function ManufacturingProcess() {
  return (
    <section className="bg-charcoal py-24 md:py-32">
      <div className="mx-auto max-w-8xl px-6 md:px-8 lg:px-12">
        <ScrollReveal className="mb-16 max-w-xl">
          <p className="font-body text-[12px] uppercase tracking-[0.3em] text-gold">
            The World of Marble
          </p>
          <h2 className="mt-4 font-display text-3xl text-ivory md:text-4xl">
            Natural Rarity. Refined Design.
          </h2>
        </ScrollReveal>

        <div className="grid grid-cols-1 gap-x-8 gap-y-12 md:grid-cols-3">
          {processSteps.map((step, i) => (
            <ScrollReveal key={i} delay={i * 0.06}>
              <p className="font-display text-4xl text-gold/50">{step.number}</p>
              <h3 className="mt-3 font-display text-xl text-ivory">{step.title}</h3>
              <p className="mt-2 font-body text-sm leading-relaxed text-ivory/60">
                {step.description}
              </p>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
}
