import type { Metadata } from "next";
import { Ruler, PenTool, Hammer, Truck } from "lucide-react";
import PageHeader from "@/components/PageHeader";
import ScrollReveal from "@/components/ScrollReveal";
import ContactForm from "@/components/ContactForm";

export const metadata: Metadata = {
  title: "Custom Projects",
  description:
    "Bespoke marble furniture for private residences, hotels and interior design studios — designed to your dimensions, marble and finish.",
};

const steps = [
  { icon: PenTool, title: "Brief & Design", description: "Share dimensions, a reference image, or a sketch — our designers turn it into a technical drawing within 5 working days." },
  { icon: Ruler, title: "Material Selection", description: "Choose from our slab library or ask us to source a specific marble type for your project." },
  { icon: Hammer, title: "Handcrafting", description: "Your piece is cut, carved and finished by the same artisans who build our standard collections." },
  { icon: Truck, title: "Crating & Delivery", description: "Custom timber crating and insured freight, with tracked delivery to your project site." },
];

export default function CustomProjectsPage() {
  return (
    <>
      <PageHeader
        eyebrow="Custom Projects"
        title="Built to your drawing, not our catalogue."
        description="For private residences, hospitality projects and design studios who need a piece that fits an exact space."
        image="https://images.unsplash.com/photo-1615529182904-14819c35db37?q=80&w=2000&auto=format&fit=crop"
      />

      <section className="bg-white py-20 dark:bg-charcoal md:py-28">
        <div className="mx-auto max-w-8xl px-6 md:px-8 lg:px-12">
          <ScrollReveal className="mx-auto mb-16 max-w-xl text-center">
            <p className="font-body text-[12px] uppercase tracking-[0.3em] text-gold">How It Works</p>
            <h2 className="mt-4 font-display text-3xl text-charcoal dark:text-ivory md:text-4xl">
              Four stages, one point of contact.
            </h2>
          </ScrollReveal>
          <div className="grid grid-cols-1 gap-10 sm:grid-cols-2 lg:grid-cols-4">
            {steps.map((s, i) => (
              <ScrollReveal key={s.title} delay={i * 0.08} className="text-center">
                <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-full border border-gold/40">
                  <s.icon className="h-6 w-6 text-gold" strokeWidth={1.4} />
                </div>
                <h3 className="mt-5 font-display text-lg text-charcoal dark:text-ivory">{s.title}</h3>
                <p className="mt-2 font-body text-sm leading-relaxed text-charcoal/60 dark:text-ivory/60">
                  {s.description}
                </p>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-ivory py-20 dark:bg-charcoal-soft md:py-28">
        <div className="mx-auto grid max-w-5xl grid-cols-1 gap-12 px-6 md:px-8 lg:grid-cols-2">
          <ScrollReveal>
            <p className="font-body text-[12px] uppercase tracking-[0.3em] text-gold">Start a Project</p>
            <h2 className="mt-4 font-display text-3xl text-charcoal dark:text-ivory">
              Tell us what you're building.
            </h2>
            <p className="mt-4 font-body text-sm leading-relaxed text-charcoal/65 dark:text-ivory/65">
              Trade accounts, hospitality groups and private clients welcome.
              Include rough dimensions and a project timeline if you have one
              — it helps us quote accurately on the first pass.
            </p>
          </ScrollReveal>
          <ScrollReveal delay={0.1}>
            <ContactForm compact projectField />
          </ScrollReveal>
        </div>
      </section>
    </>
  );
}
