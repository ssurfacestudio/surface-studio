export default function Loading() {
  return (
    <div className="flex h-screen w-full items-center justify-center bg-ivory dark:bg-charcoal">
      <div className="flex flex-col items-center gap-4">
        <div className="relative h-12 w-12">
          <div className="absolute inset-0 rounded-full border-2 border-gold/25" />
          <div className="absolute inset-0 animate-spin rounded-full border-2 border-transparent border-t-gold" />
        </div>
        <p className="font-body text-[11px] uppercase tracking-[0.3em] text-charcoal/50 dark:text-ivory/50">
          Surface Studio
        </p>
      </div>
    </div>
  );
}
