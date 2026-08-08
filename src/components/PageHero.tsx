export function PageHero({
  eyebrow,
  title,
  subtitle,
  breadcrumb,
}: {
  eyebrow?: string;
  title: string;
  subtitle?: string;
  breadcrumb?: string;
}) {
  return (
    <section className="bg-brand-gradient">
      <div className="mx-auto max-w-7xl px-4 py-14 sm:px-6 md:py-20">
        {breadcrumb && (
          <p className="text-xs text-primary-foreground/60">{breadcrumb}</p>
        )}
        {eyebrow && (
          <p className="mt-2 text-xs font-bold tracking-[0.18em] text-brand-green-soft uppercase">
            {eyebrow}
          </p>
        )}
        <h1 className="mt-3 max-w-3xl text-3xl text-primary-foreground sm:text-4xl md:text-5xl">
          {title}
        </h1>
        {subtitle && (
          <p className="mt-4 max-w-2xl text-sm leading-relaxed text-primary-foreground/80 sm:text-base">
            {subtitle}
          </p>
        )}
      </div>
    </section>
  );
}