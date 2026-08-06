import Link from "next/link";
import { ArrowRight } from "lucide-react";

export default function NotFound() {
  return (
    <div className="flex min-h-[80vh] flex-col items-center justify-center px-6 pt-24 text-center">
      <p className="font-body text-[12px] uppercase tracking-[0.3em] text-gold">Error 404</p>
      <h1 className="mt-4 font-display text-4xl text-charcoal dark:text-ivory md:text-5xl">
        This piece isn't on the floor.
      </h1>
      <p className="mt-4 max-w-md font-body text-sm text-charcoal/60 dark:text-ivory/60">
        The page you're looking for may have been moved, renamed, or is part
        of a collection we haven't catalogued yet.
      </p>
      <Link
        href="/"
        className="mt-8 inline-flex items-center gap-2 rounded-full bg-gold px-7 py-3.5 font-body text-[13px] uppercase tracking-[0.14em] text-white transition-colors hover:bg-gold-dark"
      >
        Back to Home
        <ArrowRight className="h-4 w-4" />
      </Link>
    </div>
  );
}
