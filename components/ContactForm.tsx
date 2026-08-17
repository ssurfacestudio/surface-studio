"use client";

import { useState, FormEvent } from "react";
import { Send, Check } from "lucide-react";

export default function ContactForm({
  compact = false,
  projectField = false,
}: {
  compact?: boolean;
  projectField?: boolean;
}) {
  const [status, setStatus] = useState<"idle" | "loading" | "done">("idle");

  async function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setStatus("loading");
    const form = new FormData(e.currentTarget);
    const payload = Object.fromEntries(form.entries());
    try {
     await fetch("https://api.web3forms.com/submit", {
  method: "POST",
  headers: { "Content-Type": "application/json" },
  body: JSON.stringify({
    access_key: "5a4d0249-de0d-4591-ae81-ad48d7e4e12c",
    subject: "New Project Enquiry",
    ...payload,
  }),
});
    } catch {
      // Placeholder endpoint — connect to email/CRM in production.
    }
    setStatus("done");
  }

  if (status === "done") {
    return (
      <div className="flex items-center gap-3 rounded-lg bg-gold/10 p-6 font-body text-sm text-charcoal dark:text-ivory">
        <Check className="h-5 w-5 text-gold" />
        Thank you — our team will reply within one business day.
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className={`grid grid-cols-1 gap-4 ${compact ? "" : "sm:grid-cols-2"}`}>
      <input
        name="name"
        required
        placeholder="Full name"
        className="rounded-md border border-charcoal/20 bg-transparent px-4 py-3 font-body text-sm text-charcoal outline-none placeholder:text-charcoal/40 focus:border-gold dark:border-ivory/20 dark:text-ivory dark:placeholder:text-ivory/40"
      />
      <input
        name="email"
        type="email"
        required
        placeholder="Email address"
        className="rounded-md border border-charcoal/20 bg-transparent px-4 py-3 font-body text-sm text-charcoal outline-none placeholder:text-charcoal/40 focus:border-gold dark:border-ivory/20 dark:text-ivory dark:placeholder:text-ivory/40"
      />
      <input
        name="phone"
        placeholder="Phone / WhatsApp"
        className="rounded-md border border-charcoal/20 bg-transparent px-4 py-3 font-body text-sm text-charcoal outline-none placeholder:text-charcoal/40 focus:border-gold dark:border-ivory/20 dark:text-ivory dark:placeholder:text-ivory/40"
      />
      <input
        name="country"
        placeholder="Country"
        className="rounded-md border border-charcoal/20 bg-transparent px-4 py-3 font-body text-sm text-charcoal outline-none placeholder:text-charcoal/40 focus:border-gold dark:border-ivory/20 dark:text-ivory dark:placeholder:text-ivory/40"
      />
      {projectField && (
        <input
          name="project"
          placeholder="Project type (residence, hotel, studio…)"
          className="rounded-md border border-charcoal/20 bg-transparent px-4 py-3 font-body text-sm text-charcoal outline-none placeholder:text-charcoal/40 focus:border-gold dark:border-ivory/20 dark:text-ivory dark:placeholder:text-ivory/40 sm:col-span-2"
        />
      )}
      <textarea
        name="message"
        required
        rows={4}
        placeholder="Tell us about the piece or project you have in mind"
        className="rounded-md border border-charcoal/20 bg-transparent px-4 py-3 font-body text-sm text-charcoal outline-none placeholder:text-charcoal/40 focus:border-gold dark:border-ivory/20 dark:text-ivory dark:placeholder:text-ivory/40 sm:col-span-2"
      />
      <button
        type="submit"
        disabled={status === "loading"}
        className="inline-flex items-center justify-center gap-2 rounded-full bg-gold px-6 py-3.5 font-body text-[13px] uppercase tracking-[0.14em] text-white transition-colors hover:bg-gold-dark disabled:opacity-70 sm:col-span-2"
      >
        <Send className="h-4 w-4" />
        {status === "loading" ? "Sending…" : "Send Enquiry"}
      </button>
    </form>
  );
}
