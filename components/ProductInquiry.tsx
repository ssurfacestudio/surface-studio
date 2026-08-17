"use client";

import { useState } from "react";
import { MessageCircle, FileText, Check } from "lucide-react";
import type { Product } from "@/lib/data";
import { whatsappLink } from "@/lib/utils";

export default function ProductInquiry({ product }: { product: Product }) {
  const [sent, setSent] = useState(false);

  async function requestQuote() {
    try {
      const res = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          access_key: "5a4d0249-de0d-4591-ae81-ad48d7e4e12c",
          subject: `Quote Request: ${product.name}`,
          message: `Product: ${product.name}\nSlug: ${product.slug}`,
        }),
      });
      if (res.ok) {
        setSent(true);
      }
    } catch {
      // failed silently — sent stays false
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
