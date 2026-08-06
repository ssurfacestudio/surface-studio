import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Link from "next/link";
import { ChevronRight, Ruler, Layers, Sparkles, Weight, Wand2 } from "lucide-react";
import ScrollReveal from "@/components/ScrollReveal";
import ProductGallery from "@/components/ProductGallery";
import ProductInquiry from "@/components/ProductInquiry";
import ProductCard from "@/components/ProductCard";
import { products, getProduct, getRelatedProducts, getCollection } from "@/lib/data";

export function generateStaticParams() {
  return products.map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const product = getProduct(slug);
  if (!product) return {};
  return {
    title: product.name,
    description: product.description,
    openGraph: { images: [{ url: product.images[0] }] },
  };
}

const specs = (product: NonNullable<ReturnType<typeof getProduct>>) => [
  { icon: Layers, label: "Marble Type", value: product.marbleType },
  { icon: Sparkles, label: "Finish", value: product.finish },
  { icon: Ruler, label: "Dimensions", value: product.dimensions },
  { icon: Weight, label: "Weight", value: product.weight },
];

export default async function ProductPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const product = getProduct(slug);
  if (!product) notFound();
  const collection = getCollection(product.collection);
  const related = getRelatedProducts(product);

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Product",
    name: product.name,
    image: product.images,
    description: product.description,
    material: product.material,
    offers: {
      "@type": "Offer",
      priceCurrency: "INR",
      price: product.price.replace(/[^0-9]/g, ""),
      availability: "https://schema.org/InStock",
    },
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <div className="mx-auto max-w-8xl px-6 pt-28 md:px-8 lg:px-12">
        <nav className="flex items-center gap-1.5 font-body text-xs text-charcoal/50 dark:text-ivory/50">
          <Link href="/collections" className="hover:text-gold">Collections</Link>
          <ChevronRight className="h-3.5 w-3.5" />
          {collection && (
            <>
              <Link href={`/collections/${collection.slug}`} className="hover:text-gold">
                {collection.name}
              </Link>
              <ChevronRight className="h-3.5 w-3.5" />
            </>
          )}
          <span>{product.name}</span>
        </nav>
      </div>

      <section className="bg-white py-10 dark:bg-charcoal md:py-14">
        <div className="mx-auto grid max-w-8xl grid-cols-1 gap-12 px-6 md:px-8 lg:grid-cols-2 lg:px-12">
          <ScrollReveal>
            <ProductGallery images={product.images} name={product.name} />
          </ScrollReveal>

          <ScrollReveal delay={0.1}>
            {product.bestSeller && (
              <span className="mb-3 inline-block rounded-full bg-gold px-3 py-1 font-body text-[10px] uppercase tracking-[0.14em] text-white">
                Best Seller
              </span>
            )}
            <h1 className="font-display text-3xl text-charcoal dark:text-ivory md:text-4xl">
              {product.name}
            </h1>
            <p className="mt-2 font-body text-sm uppercase tracking-[0.1em] text-charcoal/50 dark:text-ivory/50">
              {collection?.name}
            </p>
            <p className="mt-4 font-display text-2xl text-gold">{product.price}</p>

            <p className="mt-6 font-body text-sm leading-relaxed text-charcoal/70 dark:text-ivory/70 md:text-base">
              {product.description}
            </p>

            <div className="mt-8 grid grid-cols-2 gap-5 border-y border-charcoal/10 py-6 dark:border-ivory/10">
              {specs(product).map((s) => (
                <div key={s.label} className="flex items-start gap-3">
                  <s.icon className="mt-0.5 h-4 w-4 text-gold" strokeWidth={1.5} />
                  <div>
                    <p className="font-body text-xs uppercase tracking-[0.1em] text-charcoal/45 dark:text-ivory/45">
                      {s.label}
                    </p>
                    <p className="font-body text-sm text-charcoal dark:text-ivory">{s.value}</p>
                  </div>
                </div>
              ))}
              <div className="col-span-2 flex items-start gap-3">
                <Layers className="mt-0.5 h-4 w-4 text-gold" strokeWidth={1.5} />
                <div>
                  <p className="font-body text-xs uppercase tracking-[0.1em] text-charcoal/45 dark:text-ivory/45">
                    Material
                  </p>
                  <p className="font-body text-sm text-charcoal dark:text-ivory">{product.material}</p>
                </div>
              </div>
            </div>

            {product.customizable && (
              <div className="mt-6 flex items-start gap-3 rounded-lg bg-beige-light p-4 dark:bg-charcoal-soft">
                <Wand2 className="mt-0.5 h-4 w-4 shrink-0 text-gold" strokeWidth={1.5} />
                <p className="font-body text-sm text-charcoal/75 dark:text-ivory/75">
                  This piece can be customized in size, marble type, and base
                  finish. Mention your requirements when you enquire.
                </p>
              </div>
            )}

            <ProductInquiry product={product} />
          </ScrollReveal>
        </div>
      </section>

      {related.length > 0 && (
        <section className="bg-ivory py-20 dark:bg-charcoal-soft md:py-28">
          <div className="mx-auto max-w-8xl px-6 md:px-8 lg:px-12">
            <ScrollReveal className="mb-10">
              <p className="font-body text-[12px] uppercase tracking-[0.3em] text-gold">
                You May Also Like
              </p>
              <h2 className="mt-3 font-display text-2xl text-charcoal dark:text-ivory md:text-3xl">
                More from {collection?.name}
              </h2>
            </ScrollReveal>
            <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-4">
              {related.map((p, i) => (
                <ScrollReveal key={p.slug} delay={i * 0.06}>
                  <ProductCard product={p} />
                </ScrollReveal>
              ))}
            </div>
          </div>
        </section>
      )}
    </>
  );
}
