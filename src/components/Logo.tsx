export function Logo({ light = false }: { light?: boolean }) {
  return (
    <div className="flex items-center gap-2.5">
      <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-brand-gradient text-[11px] font-bold tracking-tight text-primary-foreground">
        NGO
      </div>
      <div className="leading-tight">
        <div
          className={`font-display text-lg font-bold tracking-tight ${light ? "text-primary-foreground" : "text-brand-navy-deep"}`}
        >
          NGOGURU
        </div>
        <div
          className={`text-[9px] font-semibold tracking-[0.16em] uppercase ${light ? "text-primary-foreground/70" : "text-muted-foreground"}`}
        >
          Helping who help others
        </div>
      </div>
    </div>
  );
}