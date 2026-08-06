import Link from "next/link";
import { ArrowRight } from "lucide-react";
import ScrollReveal from "@/components/ScrollReveal";

export default function ContactCTA() {
  return (
    <section className="relative overflow-hidden bg-beige py-24 dark:bg-charcoal-light md:py-32">
      <div className="mx-auto max-w-4xl px-6 text-center md:px-8">
        <ScrollReveal>
          <h2 className="font-display text-3xl text-charcoal dark:text-ivory md:text-5xl">
            Have a space that deserves marble?
          </h2>
          <p className="mx-auto mt-5 max-w-md font-body text-sm text-charcoal/70 dark:text-ivory/70 md:text-base">
            Tell us about the room, the piece, or the collection you have in
            mind — our design team replies within one business day.
          </p>
          <div className="mt-9 flex flex-wrap justify-center gap-4">
            <Link
              href="/contact"
              className="group inline-flex items-center gap-2 rounded-full bg-charcoal px-7 py-3.5 font-body text-[13px] uppercase tracking-[0.14em] text-ivory transition-colors hover:bg-charcoal-soft dark:bg-ivory dark:text-charcoal"
            >
              Get in Touch
              <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
            </Link>
            <Link
              href="/custom-projects"
              className="inline-flex items-center gap-2 rounded-full border border-charcoal/30 px-7 py-3.5 font-body text-[13px] uppercase tracking-[0.14em] text-charcoal transition-colors hover:border-charcoal dark:border-ivory/30 dark:text-ivory"
            >
              Start a Custom Project
            </Link>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}
