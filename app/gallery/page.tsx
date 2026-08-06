import type { Metadata } from "next";
import PageHeader from "@/components/PageHeader";
import GalleryGrid from "@/components/GalleryGrid";
import { products } from "@/lib/data";

export const metadata: Metadata = {
  title: "Gallery",
  description:
    "A visual archive of Surface Studio's handcrafted marble furniture, sculptures and installed projects.",
};

export default function GalleryPage() {
  const images = products.flatMap((p) =>
    p.images.map((src) => ({ src, name: p.name, collection: p.collection }))
  );

  return (
    <>
      <PageHeader
        eyebrow="Gallery"
        title="A closer look at the stone."
        description="Studio photography and installed projects from clients across the world."
        image="https://images.unsplash.com/photo-1615529162924-f8605388461d?q=80&w=2000&auto=format&fit=crop"
      />
      <section className="bg-white py-16 dark:bg-charcoal md:py-24">
        <div className="mx-auto max-w-8xl px-6 md:px-8 lg:px-12">
          <GalleryGrid images={images} />
        </div>
      </section>
    </>
  );
}
