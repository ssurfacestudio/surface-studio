import Link from "next/link";
import type { Product } from "@/lib/data";

export default function ProductCard({ product }: { product: Product }) {
  return (
    <Link href={`/product/${product.slug}`} className="group block">
      <div className="relative aspect-[4/5] overflow-hidden rounded-lg bg-charcoal/5 dark:bg-ivory/5">
        <img
          src={product.images[0]}
          alt={product.name}
          loading="lazy"
          className="h-full w-full object-cover transition-transform duration-700 ease-luxury group-hover:scale-105"
        />
        {product.bestSeller && (
          <span className="absolute left-3 top-3 rounded-full bg-gold px-3 py-1 font-body text-[10px] uppercase tracking-[0.14em] text-white">
            Best Seller
          </span>
        )}
      </div>
      <div className="mt-4 flex items-start justify-between">
        <div>
          <h3 className="font-display text-lg text-charcoal dark:text-ivory">{product.name}</h3>
          <p className="font-body text-xs uppercase tracking-[0.1em] text-charcoal/50 dark:text-ivory/50">
            {product.marbleType}
          </p>
        </div>
        <span className="font-body text-sm text-gold">{product.price}</span>
      </div>
    </Link>
  );
}
