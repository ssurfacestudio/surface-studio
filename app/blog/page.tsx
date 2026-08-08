import type { Metadata } from "next";
import Link from "next/link";
import PageHeader from "@/components/PageHeader";
import ScrollReveal from "@/components/ScrollReveal";
import { blogPosts } from "@/lib/data";

export const metadata: Metadata = {
  title: "Blog",
  description:
    "Guides on choosing, caring for and living with marble furniture, plus stories from the Surface Studio workshop.",
};

export default function BlogPage() {
  const blogImages = [
    "/images/table1.jpeg",
    "/images/table2.jpeg",
    "/images/table3.jpeg"
  ];

  return (
    <>
      <PageHeader
        eyebrow="Journal"
        title="Notes on stone, craft and care."
        image="/images/table1.jpeg"
      />

      <section className="bg-white py-20 dark:bg-charcoal md:py-28">
        <div className="mx-auto grid max-w-8xl grid-cols-1 gap-10 px-6 md:grid-cols-2 md:px-8 lg:grid-cols-3">
          {blogPosts.map((post, i) => (
            <ScrollReveal key={post.slug} delay={(i % 3) * 0.08}>
              <Link href={/blog/${post.slug}} className="group block">
                <div className="aspect-[4/3] overflow-hidden rounded-lg">
                  <img
                    src={blogImages[i % blogImages.length]}
                    alt={post.title}
                    loading="lazy"
                    className="h-full w-full object-cover transition-transform duration-700 ease-luxury group-hover:scale-105"
                  />
                </div>
                <p className="mt-4 font-body text-xs uppercase tracking-[0.12em] text-gold">
                  {post.category} · {post.readTime}
                </p>
                <h2 className="mt-2 font-display text-xl text-charcoal dark:text-ivory">
                  {post.title}
                </h2>
                <p className="mt-2 font-body text-sm leading-relaxed text-charcoal/60 dark:text-ivory/60">
                  {post.excerpt}
                </p>
              </Link>
            </ScrollReveal>
          ))}
        </div>
      </section>
    </>
  );
}
