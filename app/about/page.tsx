import type { Metadata } from "next";
import PageHeader from "@/components/PageHeader";
import ScrollReveal from "@/components/ScrollReveal";
import MarbleVein from "@/components/MarbleVein";
import ManufacturingProcess from "@/components/home/ManufacturingProcess";
import GlobalExport from "@/components/home/GlobalExport";
import ContactCTA from "@/components/home/ContactCTA";

export const metadata: Metadata = {
  title: "About Us",
  description:
    "Surface Studio is a family-run manufacturer of handcrafted marble furniture, working from Rajasthan's marble belt to luxury homes worldwide.",
};

const milestones = [
  { year: "2011", event: "Founded as a two-man cutting workshop in Kishangarh" },
  { year: "2015", event: "First container export shipped to the UAE" },
  { year: "2019", event: "In-house design studio launched for custom commissions" },
  { year: "2023", event: "Reached 30 export markets across six continents" },
];

export default function AboutPage() {
  return (
    <>
      <PageHeader
        eyebrow="About Surface Studio"
        title="Stone-workers first, designers second."
        description="A family workshop in Rajasthan's marble belt, now exporting to luxury homes on six continents."
        image="https://images.unsplash.com/photo-1581092160607-ee22621dd758?q=80&w=2000&auto=format&fit=crop"
      />

      <section className="bg-white py-24 dark:bg-charcoal md:py-32">
        <div className="mx-auto grid max-w-8xl gap-16 px-6 md:px-8 lg:grid-cols-2 lg:px-12">
          <ScrollReveal>
            <p className="font-body text-[12px] uppercase tracking-[0.3em] text-gold">Our Story</p>
            <h2 className="mt-4 font-display text-3xl text-charcoal dark:text-ivory md:text-4xl">
              We started with one saw and a stack of Makrana slabs.
            </h2>
            <div className="mt-6 space-y-4 font-body text-sm leading-relaxed text-charcoal/70 dark:text-ivory/70 md:text-base">
              <p>
                Surface Studio began in 2011 in Kishangarh, the heart of
                India's marble trade, as a small cutting workshop serving
                local builders. What set us apart early was refusing to treat
                marble as a construction material — we treated every slab as
                furniture waiting to be found inside it.
              </p>
              <p>
                Fifteen years on, we're still in Kishangarh, still family-run,
                and still walking the cutting floor every morning. What's
                changed is scale: a design studio, an export division, and a
                bench of artisans whose fathers taught them the same hand
                tools we started with.
              </p>
            </div>
          </ScrollReveal>

          <ScrollReveal delay={0.15}>
            <img
              src="https://images.unsplash.com/photo-1600607687920-4e2a09cf159d?q=80&w=1600&auto=format&fit=crop"
              alt="Artisan hand-finishing a marble table edge"
              className="h-full w-full rounded-lg object-cover"
            />
          </ScrollReveal>
        </div>
      </section>

      <section className="bg-ivory py-20 dark:bg-charcoal-soft md:py-28">
        <div className="mx-auto max-w-8xl px-6 md:px-8 lg:px-12">
          <ScrollReveal className="mb-14 text-center">
            <p className="font-body text-[12px] uppercase tracking-[0.3em] text-gold">Milestones</p>
          </ScrollReveal>
          <div className="mx-auto max-w-2xl divide-y divide-charcoal/10 dark:divide-ivory/10">
            {milestones.map((m, i) => (
              <ScrollReveal key={m.year} delay={i * 0.06}>
                <div className="flex items-baseline gap-6 py-6">
                  <span className="w-16 shrink-0 font-display text-2xl text-gold">{m.year}</span>
                  <span className="font-body text-sm text-charcoal/70 dark:text-ivory/70 md:text-base">
                    {m.event}
                  </span>
                </div>
              </ScrollReveal>
            ))}
          </div>
          <div className="mt-14 flex justify-center">
            <MarbleVein />
          </div>
        </div>
      </section>

      <ManufacturingProcess />
      <GlobalExport />
      <ContactCTA />
    </>
  );
}
