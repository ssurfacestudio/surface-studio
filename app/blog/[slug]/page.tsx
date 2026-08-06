import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Link from "next/link";
import { ChevronRight } from "lucide-react";
import ScrollReveal from "@/components/ScrollReveal";
import { blogPosts } from "@/lib/data";

export function generateStaticParams() {
  return blogPosts.map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const post = blogPosts.find((p) => p.slug === slug);
  if (!post) return {};
  return {
    title: post.title,
    description: post.excerpt,
    openGraph: { images: [{ url: post.image }] },
  };
}

export default async function BlogPostPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const post = blogPosts.find((p) => p.slug === slug);
  if (!post) notFound();

  return (
    <article className="pt-28">
      <div className="mx-auto max-w-3xl px-6 md:px-8">
        <nav className="flex items-center gap-1.5 font-body text-xs text-charcoal/50 dark:text-ivory/50">
          <Link href="/blog" className="hover:text-gold">Journal</Link>
          <ChevronRight className="h-3.5 w-3.5" />
          <span>{post.category}</span>
        </nav>

        <ScrollReveal>
          <p className="mt-6 font-body text-xs uppercase tracking-[0.12em] text-gold">
            {post.category} · {post.readTime} · {new Date(post.date).toLocaleDateString("en-IN", { year: "numeric", month: "long", day: "numeric" })}
          </p>
          <h1 className="mt-3 font-display text-3xl text-charcoal dark:text-ivory md:text-4xl">
            {post.title}
          </h1>
        </ScrollReveal>
      </div>

      <ScrollReveal delay={0.1} className="mx-auto mt-10 max-w-5xl px-6 md:px-8">
        <img
          src={post.image}
          alt={post.title}
          className="aspect-[16/9] w-full rounded-lg object-cover"
        />
      </ScrollReveal>

      <div className="mx-auto max-w-3xl px-6 py-14 md:px-8">
        {post.content.map((para, i) => (
          <ScrollReveal key={i} delay={i * 0.04}>
            <p className="mb-6 font-body text-base leading-relaxed text-charcoal/75 dark:text-ivory/75">
              {para}
            </p>
          </ScrollReveal>
        ))}
      </div>
    </article>
  );
}
