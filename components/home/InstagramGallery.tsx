import { Instagram } from "lucide-react";
import ScrollReveal from "@/components/ScrollReveal";
import { products } from "@/lib/data";

export default function InstagramGallery() {
  const images = products.slice(0, 6).map((p) => p.images[0]);

  return (
    <section className="bg-ivory py-24 dark:bg-charcoal-soft md:py-32">
      <div className="mx-auto max-w-8xl px-6 md:px-8 lg:px-12">
        <ScrollReveal className="mb-12 flex flex-col items-center text-center">
          <p className="font-body text-[12px] uppercase tracking-[0.3em] text-gold">
            Follow the Craft
          </p>
          <h2 className="mt-4 font-display text-3xl text-charcoal dark:text-ivory md:text-4xl">
            @surface_s_
          </h2>
        </ScrollReveal>

        <div className="grid grid-cols-3 gap-3 md:grid-cols-6">
          {images.map((src, i) => (
            <a
              key={i}
              href="https://instagram.com/surface_S_"
              target="_blank"
              rel="noopener noreferrer"
              className="group relative aspect-square overflow-hidden rounded-md"
            >
              <img src={src} alt="Surface Studio on Instagram" loading="lazy" className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-110" />
              <div className="absolute inset-0 flex items-center justify-center bg-charcoal/0 transition-colors group-hover:bg-charcoal/40">
                <Instagram className="h-5 w-5 text-white opacity-0 transition-opacity group-hover:opacity-100" />
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}
