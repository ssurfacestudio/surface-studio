import { collections } from "@/lib/data";
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
          <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
            {collections.map((collection, index) => (
              <ScrollReveal key={collection.slug} delay={index * 0.05}>
                <div className="rounded-lg border border-charcoal/10 bg-ivory/50 p-6 dark:border-ivory/10 dark:bg-charcoal-soft">
                  <h2 className="font-display text-2xl text-charcoal dark:text-ivory">
                    {collection.name}
                  </h2>
                  {collection.description && (
                    <p className="mt-3 font-body text-sm text-charcoal/70 dark:text-ivory/70">
                      {collection.description}
                    </p>
                  )}
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}