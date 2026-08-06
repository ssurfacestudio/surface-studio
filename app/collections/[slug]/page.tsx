import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Link from "next/link";
import { ChevronRight } from "lucide-react";
import PageHeader from "@/components/PageHeader";
import ScrollReveal from "@/components/ScrollReveal";
import ProductCard from "@/components/ProductCard";
import { collections, getCollection, getProductsByCollection } from "@/lib/data";

export function generateStaticParams() {
  return collections.map((c) => ({ slug: c.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const collection = getCollection(slug);
  if (!collection) return {};
  return {
    title: collection.name,
    description: collection.description,
  };
}

export default async function CollectionDetailPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const collection = getCollection(slug);
  if (!collection) notFound();
  const productList = getProductsByCollection(collection.slug);

  return (
    <>
      <PageHeader
        eyebrow={`Collection · ${productList.length} pieces`}
        title={collection.name}
        description={collection.description}
        image={collection.image}
      />

      <div className="mx-auto max-w-8xl px-6 pt-8 md:px-8 lg:px-12">
        <nav className="flex items-center gap-1.5 font-body text-xs text-charcoal/50 dark:text-ivory/50">
          <Link href="/collections" className="hover:text-gold">Collections</Link>
          <ChevronRight className="h-3.5 w-3.5" />
          <span>{collection.name}</span>
        </nav>
      </div>

      <section className="bg-white py-14 dark:bg-charcoal md:py-20">
        <div className="mx-auto max-w-8xl px-6 md:px-8 lg:px-12">
          {productList.length > 0 ? (
            <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-4">
              {productList.map((p, i) => (
                <ScrollReveal key={p.slug} delay={(i % 4) * 0.06}>
                  <ProductCard product={p} />
                </ScrollReveal>
              ))}
            </div>
          ) : (
            <p className="font-body text-sm text-charcoal/60 dark:text-ivory/60">
              New pieces from this collection are being catalogued — enquire
              directly and our team will share available stock.
            </p>
          )}
        </div>
      </section>
    </>
  );
}
