import ScrollReveal from "@/components/ScrollReveal";

export default function PageHeader({
  eyebrow,
  title,
  description,
  image,
}: {
  eyebrow: string;
  title: string;
  description?: string;
  image?: string;
}) {
  return (
    <section className="relative flex min-h-[46vh] items-end bg-charcoal pt-28">
      {image && (
        <div className="absolute inset-0">
          <img src={image} alt="" className="h-full w-full object-cover opacity-40" />
          <div className="absolute inset-0 bg-gradient-to-t from-charcoal via-charcoal/50 to-charcoal/30" />
        </div>
      )}
      <div className="relative z-10 mx-auto w-full max-w-8xl px-6 pb-16 md:px-8 lg:px-12">
        <ScrollReveal>
          <p className="font-body text-[12px] uppercase tracking-[0.3em] text-gold">{eyebrow}</p>
          <h1 className="mt-4 max-w-2xl font-display text-4xl text-ivory md:text-5xl">{title}</h1>
          {description && (
            <p className="mt-4 max-w-xl font-body text-sm text-ivory/70 md:text-base">
              {description}
            </p>
          )}
        </ScrollReveal>
      </div>
    </section>
  );
}
