"use client";

import { motion } from "framer-motion";

/**
 * Signature brand motif: a single hairline gold "vein" that draws itself
 * across the section boundary, evoking the natural veining inside a slab
 * of marble. Used instead of a plain <hr> between major sections.
 */
export default function MarbleVein({
  className = "",
  align = "center",
}: {
  className?: string;
  align?: "left" | "center" | "right";
}) {
  const justify =
    align === "left"
      ? "justify-start"
      : align === "right"
      ? "justify-end"
      : "justify-center";

  return (
    <div className={`flex w-full ${justify} ${className}`} aria-hidden="true">
      <svg
        width="240"
        height="20"
        viewBox="0 0 240 20"
        fill="none"
        className="overflow-visible"
      >
        <motion.path
          d="M0 10 C 40 2, 60 18, 96 10 S 150 2, 178 12 S 220 4, 240 10"
          stroke="currentColor"
          strokeWidth="1"
          className="text-gold"
          strokeLinecap="round"
          initial={{ pathLength: 0, opacity: 0 }}
          whileInView={{ pathLength: 1, opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1.4, ease: [0.22, 1, 0.36, 1] }}
        />
        <motion.circle
          cx="120"
          cy="10"
          r="2"
          className="fill-gold"
          initial={{ opacity: 0, scale: 0 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 1, duration: 0.4 }}
        />
      </svg>
    </div>
  );
}
