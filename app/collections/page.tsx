import { collections } from "@/lib/data";
import Link from "next/link";
import PageHeader from "@/components/PageHeader";
import ScrollReveal from "@/components/ScrollReveal";

export default function CollectionsPage() {
  return (
    <>
      <PageHeader
        eyebrow="Our Craft"
        title="Collections"
        description="Explore our curated ranges of bespoke natural stone furniture, handcrafted in Rajasthan."
        image="/images/table1.jpeg"
      />

      <section className="bg-white py-24 dark:bg-charcoal md:py-32">
        <div className="mx-auto max-w-8xl px-6 md:px-8 lg:px-12">
                    <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {collections.map((collection, index) => (
              <ScrollReveal key={collection.slug} delay={index * 0.05}>
                <Link
                  href={`/collections/${collection.slug}`}
                  className="group relative block h-[320px] overflow-hidden rounded-lg"
                >
                  {collection.image && (
                    <img
                      src={collection.image}
                      alt={collection.name}
                      className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
                    />
                  )}
                  <div className="absolute inset-0 bg-gradient-to-t from-charcoal/80 via-charcoal/20 to-transparent" />
                  <div className="absolute bottom-0 left-0 right-0 p-6">
                    <h2 className="font-display text-2xl text-white">
                      {collection.name}
                    </h2>
                    {collection.description && (
                      <p className="mt-2 font-body text-sm text-white/80">
                        {collection.description}
                      </p>
                    )}
                  </div>
                </Link>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}