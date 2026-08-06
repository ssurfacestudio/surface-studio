"use client";

import { useState, FormEvent } from "react";
import { ArrowRight, Check } from "lucide-react";
import ScrollReveal from "@/components/ScrollReveal";

export default function Newsletter() {
  const [email, setEmail] = useState("");
  const [status, setStatus] = useState<"idle" | "loading" | "done">("idle");

  async function handleSubmit(e: FormEvent) {
    e.preventDefault();
    if (!email) return;
    setStatus("loading");
    try {
      await fetch("/api/newsletter", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email }),
      });
    } catch {
      // Swallow errors — endpoint is a placeholder until wired to a real ESP.
    }
    setStatus("done");
  }

  return (
    <section className="bg-charcoal py-20 md:py-28">
      <ScrollReveal className="mx-auto max-w-2xl px-6 text-center md:px-8">
        <p className="font-body text-[12px] uppercase tracking-[0.3em] text-gold">Newsletter</p>
        <h2 className="mt-4 font-display text-3xl text-ivory md:text-4xl">
          New pieces, first look.
        </h2>
        <p className="mt-3 font-body text-sm text-ivory/60">
          One email a month. New collections, design notes, no clutter.
        </p>

        {status === "done" ? (
          <div className="mt-8 flex items-center justify-center gap-2 font-body text-sm text-gold">
            <Check className="h-5 w-5" /> You're on the list.
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="mx-auto mt-8 flex max-w-md items-center gap-2">
            <input
              type="email"
              required
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="your@email.com"
              className="w-full rounded-full border border-ivory/25 bg-transparent px-5 py-3 font-body text-sm text-ivory placeholder:text-ivory/40 outline-none focus:border-gold"
            />
            <button
              type="submit"
              disabled={status === "loading"}
              aria-label="Subscribe"
              className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-gold text-white transition-colors hover:bg-gold-dark disabled:opacity-60"
            >
              <ArrowRight className="h-4 w-4" />
            </button>
          </form>
        )}
      </ScrollReveal>
    </section>
  );
}
