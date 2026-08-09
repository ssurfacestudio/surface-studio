import Link from "next/link";
import Image from "next/image";
import { blogPosts } from "@/lib/data";

export default function BlogPage() {
  return (
    <div className="bg-ivory dark:bg-charcoal min-h-screen px-6 py-16 md:px-8 lg:px-12">
      <div className="mx-auto max-w-8xl">
        <header className="mb-12">
          <p className="font-body text-[12px] uppercase tracking-[0.2em] text-gold">
            Journal
          </p>
          <h1 className="font-display mt-2 text-3xl text-charcoal dark:text-ivory md:text-4xl">
            Notes on stone, craft and care.
          </h1>
        </header>

        <div className="grid gap-8 md:grid-cols-3">
          {blogPosts.map((post) => (
            <article key={post.slug} className="group">
              <Link href={`/blog/${post.slug}`}>
                {/* Image Container */}
                <div className="relative aspect-[4/3] w-full overflow-hidden rounded-xl bg-charcoal/5 dark:bg-ivory/5">
                  <Image
                    src={post.image}
                    alt={post.title}
                    fill
                    className="object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                </div>

                {/* Meta info */}
                <p className="mt-4 font-body text-xs font-medium uppercase tracking-widest text-charcoal/60 dark:text-ivory/60">
                  {post.category} · {post.readTime}
                </p>

                {/* Title */}
                <h2 className="font-display mt-2 text-xl text-charcoal group-hover:text-gold dark:text-ivory">
                  {post.title}
                </h2>

                {/* Excerpt */}
                <p className="mt-2 font-body text-sm leading-relaxed text-charcoal/70 dark:text-ivory/70 line-clamp-3">
                  {post.description}
                </p>
              </Link>
            </article>
          ))}
        </div>
      </div>
    </div>
  );
}