"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronLeft, ChevronRight, Star } from "lucide-react";
import { testimonials } from "@/lib/data";
import ScrollReveal from "@/components/ScrollReveal";

export default function Testimonials() {
  const [index, setIndex] = useState(0);
  const t = testimonials[index];

  const next = () => setIndex((i) => (i + 1) % testimonials.length);
  const prev = () => setIndex((i) => (i - 1 + testimonials.length) % testimonials.length);

  return (
    <section className="bg-beige-light py-24 dark:bg-charcoal-soft md:py-32">
      <div className="mx-auto max-w-3xl px-6 text-center md:px-8">
        <ScrollReveal>
          <p className="font-body text-[12px] uppercase tracking-[0.3em] text-gold">
            Client Testimonials
          </p>
        </ScrollReveal>

        <div className="relative mt-10 min-h-[220px]">
          <AnimatePresence mode="wait">
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -16 }}
              transition={{ duration: 0.5 }}
            >
              <div className="mb-4 flex justify-center gap-1">
                {Array.from({ length: t.rating }).map((_, i) => (
                  <Star key={i} className="h-4 w-4 fill-gold text-gold" />
                ))}
              </div>
              <p className="font-display text-2xl leading-relaxed text-charcoal dark:text-ivory md:text-3xl">
                "{t.quote}"
              </p>
              <p className="mt-6 font-body text-sm uppercase tracking-[0.12em] text-charcoal/60 dark:text-ivory/60">
                {t.name} — {t.location}
              </p>
            </motion.div>
          </AnimatePresence>
        </div>

        <div className="mt-10 flex justify-center gap-4">
          <button
            aria-label="Previous testimonial"
            onClick={prev}
            className="flex h-11 w-11 items-center justify-center rounded-full border border-charcoal/20 text-charcoal transition-colors hover:border-gold hover:text-gold dark:border-ivory/20 dark:text-ivory"
          >
            <ChevronLeft className="h-5 w-5" />
          </button>
          <button
            aria-label="Next testimonial"
            onClick={next}
            className="flex h-11 w-11 items-center justify-center rounded-full border border-charcoal/20 text-charcoal transition-colors hover:border-gold hover:text-gold dark:border-ivory/20 dark:text-ivory"
          >
            <ChevronRight className="h-5 w-5" />
          </button>
        </div>
      </div>
    </section>
  );
}
