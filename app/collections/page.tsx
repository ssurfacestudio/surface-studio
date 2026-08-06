import type { Metadata } from "next";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import PageHeader from "@/components/PageHeader";
import ScrollReveal from "@/components/ScrollReveal";
import { collections } from "@/lib/data";

export const metadata: Metadata = {
  title: "Collections",
  description:
    "Browse Surface Studio's marble furniture collections — coffee tables, dining tables, consoles, sculptures and home décor, handcrafted in India.",
};

export default function CollectionsPage() {
  return (
    <>
      <PageHeader
        eyebrow="Collections"
        title="Seven collections. One material, endless form."
        description="Every piece begins as a single block, chosen for how its veining will move across the finished form."
        image="https://images.unsplash.com/photo-1616486338812-3dadae4b4ace?q=80&w=2000&auto=format&fit=crop"
      />

      <section className="bg-white py-20 dark:bg-charcoal md:py-28">
        <div className="mx-auto grid max-w-8xl grid-cols-1 gap-6 px-6 sm:grid-cols-2 md:px-8 lg:grid-cols-3 lg:px-12">
          {collections.map((c, i) => (
            <ScrollReveal key={c.slug} delay={(i % 3) * 0.08}>
              <Link
                href={`/collections/${c.slug}`}
                className="group relative block h-[340px] overflow-hidden rounded-lg"
              >
                <img
                  src={c.image}
                  alt={c.name}
                  loading="lazy"
                  className="h-full w-full object-cover transition-transform duration-700 ease-luxury group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-charcoal/85 via-charcoal/10 to-transparent" />
                <div className="absolute inset-x-0 bottom-0 p-6">
                  <p className="font-body text-xs uppercase tracking-[0.14em] text-gold">
                    {c.productCount} pieces
                  </p>
                  <div className="mt-1 flex items-center justify-between">
                    <h2 className="font-display text-2xl text-white">{c.name}</h2>
                    <ArrowUpRight className="h-5 w-5 text-white transition-transform group-hover:translate-x-1 group-hover:-translate-y-1" />
                  </div>
                  <p className="mt-1 font-body text-sm text-white/70">{c.tagline}</p>
                </div>
              </Link>
            </ScrollReveal>
          ))}
        </div>
      </section>
    </>
  );
}
