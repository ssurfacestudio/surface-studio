"use client";

import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { X } from "lucide-react";
import { collections } from "@/lib/data";

type Item = { src: string; name: string; collection: string };

export default function GalleryGrid({ images }: { images: Item[] }) {
  const [filter, setFilter] = useState("all");
  const [lightbox, setLightbox] = useState<Item | null>(null);

  const filtered = filter === "all" ? images : images.filter((i) => i.collection === filter);

  return (
    <div>
      <div className="mb-8 flex flex-wrap gap-2">
        <button
          onClick={() => setFilter("all")}
          className={`rounded-full px-4 py-2 font-body text-xs uppercase tracking-[0.1em] transition-colors ${
            filter === "all"
              ? "bg-charcoal text-ivory dark:bg-ivory dark:text-charcoal"
              : "border border-charcoal/20 text-charcoal/70 dark:border-ivory/20 dark:text-ivory/70"
          }`}
        >
          All
        </button>
        {collections.map((c) => (
          <button
            key={c.slug}
            onClick={() => setFilter(c.slug)}
            className={`rounded-full px-4 py-2 font-body text-xs uppercase tracking-[0.1em] transition-colors ${
              filter === c.slug
                ? "bg-charcoal text-ivory dark:bg-ivory dark:text-charcoal"
                : "border border-charcoal/20 text-charcoal/70 dark:border-ivory/20 dark:text-ivory/70"
            }`}
          >
            {c.name}
          </button>
        ))}
      </div>

      <div className="grid grid-cols-2 gap-3 sm:grid-cols-3 md:grid-cols-4">
        {filtered.map((img, i) => (
          <motion.button
            key={img.src + i}
            onClick={() => setLightbox(img)}
            className={`relative overflow-hidden rounded-md ${i % 5 === 0 ? "row-span-2 aspect-[4/5]" : "aspect-square"}`}
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: (i % 8) * 0.04 }}
          >
            <img src={img.src} alt={img.name} loading="lazy" className="h-full w-full object-cover transition-transform duration-500 hover:scale-105" />
          </motion.button>
        ))}
      </div>

      <AnimatePresence>
        {lightbox && (
          <motion.div
            className="fixed inset-0 z-50 flex items-center justify-center bg-charcoal/90 p-6"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setLightbox(null)}
          >
            <button
              aria-label="Close"
              className="absolute right-6 top-6 text-white"
              onClick={() => setLightbox(null)}
            >
              <X className="h-7 w-7" />
            </button>
            <motion.img
              src={lightbox.src}
              alt={lightbox.name}
              initial={{ scale: 0.95 }}
              animate={{ scale: 1 }}
              className="max-h-[85vh] max-w-full rounded-lg object-contain"
              onClick={(e) => e.stopPropagation()}
            />
            <p className="absolute bottom-6 font-body text-sm text-white/80">{lightbox.name}</p>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
