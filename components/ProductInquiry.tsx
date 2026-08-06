"use client";

import { useState } from "react";
import { MessageCircle, FileText, Check } from "lucide-react";
import type { Product } from "@/lib/data";
import { whatsappLink } from "@/lib/utils";

export default function ProductInquiry({ product }: { product: Product }) {
  const [sent, setSent] = useState(false);

  async function requestQuote() {
    setSent(true);
    try {
      await fetch("/api/quote", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ product: product.name, slug: product.slug }),
      });
    } catch {
      // Placeholder endpoint — wire to CRM/email service in production.
    }
  }

  return (
    <div className="mt-8 flex flex-wrap gap-3">
      <a
        href={whatsappLink(
          `Hello Surface Studio, I'd like to enquire about the ${product.name} (${product.marbleType}).`
        )}
        target="_blank"
        rel="noopener noreferrer"
        className="inline-flex items-center gap-2 rounded-full bg-[#25D366] px-6 py-3 font-body text-[13px] uppercase tracking-[0.12em] text-white transition-opacity hover:opacity-90"
      >
        <MessageCircle className="h-4 w-4" /> WhatsApp Inquiry
      </a>
      <button
        onClick={requestQuote}
        disabled={sent}
        className="inline-flex items-center gap-2 rounded-full border border-gold px-6 py-3 font-body text-[13px] uppercase tracking-[0.12em] text-charcoal transition-colors hover:bg-gold hover:text-white disabled:opacity-70 dark:text-ivory"
      >
        {sent ? <Check className="h-4 w-4" /> : <FileText className="h-4 w-4" />}
        {sent ? "Quote Requested" : "Request Quote"}
      </button>
    </div>
  );
}
