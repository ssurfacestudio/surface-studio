"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";

export default function Hero() {
  return (
    <section className="relative flex h-[100svh] w-full items-end overflow-hidden bg-charcoal">
      <motion.div
        className="absolute inset-0"
        initial={{ scale: 1.08 }}
        animate={{ scale: 1 }}
        transition={{ duration: 2.4, ease: [0.22, 1, 0.36, 1] }}
      >
        <img
          src="https://images.unsplash.com/photo-1615873968403-89e068629265?q=80&w=2400&auto=format&fit=crop"
          alt="Handcrafted marble coffee table in a sunlit luxury living room"
          className="h-full w-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-charcoal via-charcoal/20 to-charcoal/10" />
      </motion.div>

      <div className="relative z-10 mx-auto w-full max-w-8xl px-6 pb-20 md:px-12 md:pb-28">
        <motion.p
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6, duration: 0.8 }}
          className="mb-5 font-body text-[12px] uppercase tracking-[0.3em] text-gold"
        >
          Handcrafted in Rajasthan · Est. India
        </motion.p>
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.8, duration: 0.9 }}
          className="max-w-3xl font-display text-4xl leading-[1.1] text-ivory sm:text-5xl md:text-6xl lg:text-7xl"
        >
          Crafting Timeless Luxury in Natural Marble.
        </motion.h1>
        <motion.p
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.05, duration: 0.8 }}
          className="mt-6 max-w-lg font-body text-base text-ivory/75 md:text-lg"
        >
          Designed in India. Crafted for Luxury Homes Worldwide.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.3, duration: 0.8 }}
          className="mt-10 flex flex-wrap items-center gap-4"
        >
          <Link
            href="/collections"
            className="group inline-flex items-center gap-2 rounded-full bg-gold px-7 py-3.5 font-body text-[13px] uppercase tracking-[0.14em] text-white transition-colors hover:bg-gold-dark"
          >
            Explore Collection
            <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
          </Link>
          <Link
            href="/contact"
            className="inline-flex items-center gap-2 rounded-full border border-ivory/40 px-7 py-3.5 font-body text-[13px] uppercase tracking-[0.14em] text-ivory transition-colors hover:border-ivory hover:bg-ivory/10"
          >
            Request Catalogue
          </Link>
        </motion.div>
      </div>

      <motion.div
        className="absolute bottom-8 right-8 hidden h-12 w-px bg-ivory/40 md:block"
        initial={{ scaleY: 0 }}
        animate={{ scaleY: 1 }}
        transition={{ delay: 1.6, duration: 0.6 }}
        style={{ transformOrigin: "top" }}
      />
    </section>
  );
}
