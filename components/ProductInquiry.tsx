"use client";

import { useState } from "react";
import { MessageCircle, FileText, Check, X } from "lucide-react";
import type { Product } from "@/lib/data";
import { whatsappLink } from "@/lib/utils";

export default function ProductInquiry({ product }: { product: Product }) {
  const [sent, setSent] = useState(false);
  const [showForm, setShowForm] = useState(false);
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [email, setEmail] = useState("");
  const [loading, setLoading] = useState(false);

  async function requestQuote() {
    if (!name || !phone) return;
    setLoading(true);
    try {
      const res = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          access_key: "5a4d0249-de0d-4591-ae81-ad48d7e4e12c",
          subject: `Quote Request: ${product.name}`,
          message: `Product: ${product.name}\nSlug: ${product.slug}\nName: ${name}\nPhone: ${phone}\nEmail: ${email || "Not provided"}`,
          name: name,
          phone: phone,
          email: email,
        }),
      });
      if (res.ok) {
        setSent(true);
        setShowForm(false);
      }
    } catch {
      // failed silently
    } finally {
      setLoading(false);
    }
  }

  return (
    <div className="mt-8 flex flex-wrap gap-3">
      <a
        href={whatsappLink(
          `Hello Surface Studio, I'd like to enquire about the ${product.name}.`
        )}
        target="_blank"
        rel="noopener noreferrer"
        className="inline-flex items-center gap-2 rounded-full bg-[#25D366] px-6 py-3 font-body text-[13px] uppercase tracking-[0.12em] text-white transition-opacity hover:opacity-90"
      >
        <MessageCircle className="h-4 w-4" /> WhatsApp Inquiry
      </a>

      <button
        onClick={() => setShowForm(true)}
        disabled={sent}
        className="inline-flex items-center gap-2 rounded-full border border-gold px-6 py-3 font-body text-[13px] uppercase tracking-[0.12em] text-charcoal transition-colors hover:bg-gold hover:text-white disabled:opacity-70 dark:text-ivory"
      >
        {sent ? <Check className="h-4 w-4" /> : <FileText className="h-4 w-4" />}
        {sent ? "Quote Requested" : "Request Quote"}
      </button>

      {showForm && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 px-4">
          <div className="relative w-full max-w-sm rounded-lg bg-white p-6 dark:bg-charcoal">
            <button
              onClick={() => setShowForm(false)}
              className="absolute right-4 top-4 text-charcoal dark:text-ivory"
            >
              <X className="h-5 w-5" />
            </button>
            <h3 className="font-display text-lg text-charcoal dark:text-ivory">
              Request a Quote
            </h3>
            <p className="mt-1 text-sm text-charcoal/70 dark:text-ivory/70">
              {product.name}
            </p>

            <div className="mt-4 space-y-3">
              <input
                type="text"
                placeholder="Your Name"
                value={name}
                onChange={(e) => setName(e.target.value)}
                className="w-full rounded border border-gold/40 px-3 py-2 text-sm outline-none"
              />
              <input
                type="tel"
                placeholder="Phone Number"
                value={phone}
                onChange={(e) => setPhone(e.target.value)}
                className="w-full rounded border border-gold/40 px-3 py-2 text-sm outline-none"
              />
              <input
                type="email"
                placeholder="Email (optional)"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="w-full rounded border border-gold/40 px-3 py-2 text-sm outline-none"
              />
              <button
                onClick={requestQuote}
                disabled={loading || !name || !phone}
                className="w-full rounded-full bg-gold px-6 py-3 font-body text-[13px] uppercase tracking-[0.12em] text-white disabled:opacity-50"
              >
                {loading ? "Sending..." : "Submit Request"}
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}