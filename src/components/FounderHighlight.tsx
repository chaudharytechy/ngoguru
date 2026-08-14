import { Link } from "@tanstack/react-router";
import { Award, CheckCircle2, Trophy } from "lucide-react";
import { FOUNDER, WORLD_RECORDS } from "@/data/founder";
import founderPhoto from "@/assets/ca-rajesh.png.asset.json";

export function FounderHighlight({ compact = false }: { compact?: boolean }) {
  return (
    <section className={compact ? "bg-brand-tint" : "bg-background"}>
      <div className="mx-auto grid max-w-7xl gap-8 px-4 py-16 sm:px-6 lg:grid-cols-[0.85fr_1.15fr] lg:items-start">
        <div className="overflow-hidden rounded-2xl bg-brand-gradient text-primary-foreground">
          <img
            src={founderPhoto.url}
            alt={`${FOUNDER.name}, ${FOUNDER.role}`}
            loading="lazy"
            className="h-64 w-full object-cover object-[60%_30%]"
          />
          <div className="p-7">
          <h3 className="text-2xl">{FOUNDER.name}</h3>
          <p className="mt-1 text-xs font-bold tracking-[0.16em] text-brand-green-soft uppercase">
            {FOUNDER.role}
          </p>
          <ul className="mt-4 flex flex-wrap gap-2">
            {FOUNDER.credentials.map((c) => (
              <li
                key={c}
                className="rounded-full border border-primary-foreground/25 px-3 py-1 text-[11px] text-primary-foreground/85"
              >
                {c}
              </li>
            ))}
          </ul>
          <p className="mt-4 text-sm leading-relaxed text-primary-foreground/80">
            {FOUNDER.tagline}
          </p>
          <Link
            to="/founder"
            className="mt-6 inline-block rounded-full bg-brand-green px-5 py-2.5 text-sm font-semibold text-primary-foreground hover:opacity-90"
          >
            Read Full Profile →
          </Link>
          </div>
        </div>

        <div>
          <p className="eyebrow">Why Choose Us</p>
          <h2 className="mt-2 text-3xl text-brand-navy-deep sm:text-4xl">
            Guided by India's most recognised NGO advisor
          </h2>
          <div className="mt-6 grid gap-4 sm:grid-cols-2">
            {FOUNDER.achievements.map((a) => (
              <div key={a.value} className="card-surface bg-card p-5">
                <Trophy className="h-5 w-5 text-brand-green" />
                <p className="mt-3 font-display text-lg font-bold text-brand-navy-deep">{a.value}</p>
                <p className="text-xs font-semibold tracking-[0.12em] text-brand-green uppercase">
                  {a.label}
                </p>
                <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{a.body}</p>
              </div>
            ))}
          </div>

          <div className="mt-6 rounded-xl border border-brand-green/30 bg-card p-5">
            <p className="flex items-center gap-2 text-sm font-semibold text-brand-navy-deep">
              <Award className="h-4 w-4 text-brand-green" /> Records held
            </p>
            <ul className="mt-3 space-y-2">
              {WORLD_RECORDS.map((r) => (
                <li key={r} className="flex gap-2 text-sm text-muted-foreground">
                  <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-brand-green" />
                  {r}
                </li>
              ))}
            </ul>
          </div>

          <ul className="mt-6 flex flex-wrap gap-2">
            {FOUNDER.whyLearn.map((w) => (
              <li
                key={w}
                className="rounded-full bg-brand-tint px-3.5 py-1.5 text-xs font-semibold text-brand-green"
              >
                {w}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}
