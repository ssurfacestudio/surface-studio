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
    "Surface Studio creates collectible furniture from nature's exquisite stones. Every piece is defined by rare material, redefined form and meticulous craftsmanship. Made to be admired. Made to endure.",
};

const makingOfAPiece = [
  { title: "THE SLAB", event: "We begin with a stone chosen for its unique movement, veining and character." },
  { title: "THE VISION", event: "The natural pattern inspires the shape, proportions and direction of the design." },
  { title: "THE FORM", event: "The slab is precisely cut and sculpted into a distinctive silhouette." },
  { title: "THE FINISH", event: "Edges, surfaces and details are refined by hand to reveal the stone at its best." },
  { title: "THE PIECE", event: "A raw slab becomes a one-of-a-kind object designed to live beautifully for years." },
];

export default function AboutPage() {
  return (
    <>
      <PageHeader
        eyebrow="About Surface Studio"
        title="We See Possibility in Every Stone"
        description="Every slab has a character of its own. We discover it, shape it and reveal it and turn it into something entirely unique."
        image="/aboutphoto1.jpeg"
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
                We began by selecting a marble slab not with a finished product in mind, but for the beauty we saw within the stone. Its natural movement, veining and character became the starting point for the design. Instead of giving the marble a conventional shape, we explored how its pattern could influence the silhouette, proportions and form of the piece. Through sketches, shaping and careful craftsmanship, the original slab gradually became a distinctive piece of furniture—one where the material itself leads the design. 
              </p>
              <p>
                What began as a simple piece of stone became an expression of form, craftsmanship and individuality. That is the idea behind Surface Studio: to look at stone differently and create something that could exist nowhere else.
              </p>
            </div>
          </ScrollReveal>

          <ScrollReveal delay={0.15}>
            <img
              src="/aboutphoto2.jpeg"
              alt="Artisan hand-finishing a marble table edge"
              className="h-full w-full rounded-lg object-cover"
            />
          </ScrollReveal>
        </div>
      </section>

      <section className="bg-ivory py-20 dark:bg-charcoal-soft md:py-28">
        <div className="mx-auto max-w-8xl px-6 md:px-8 lg:px-12">
          <ScrollReveal className="mb-14 text-center">
            <p className="font-body text-[12px] uppercase tracking-[0.3em] text-gold">Making of a Piece</p>
          </ScrollReveal>
          
          <div className="mx-auto max-w-2xl divide-y divide-charcoal/10 dark:divide-ivory/10">
            {makingOfAPiece.map((m, i) => (
              <ScrollReveal key={m.title} delay={i * 0.06}>
                <div className="flex flex-col sm:flex-row sm:items-baseline gap-2 sm:gap-8 py-6">
                  <span className="w-36 shrink-0 font-display text-lg tracking-wider text-gold">
                    {m.title}
                  </span>
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