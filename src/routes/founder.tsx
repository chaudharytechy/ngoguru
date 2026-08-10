import { createFileRoute } from "@tanstack/react-router";
import { Award, CheckCircle2, Trophy } from "lucide-react";
import { PageHero } from "@/components/PageHero";
import { SupportCard } from "@/components/SupportCard";
import { FOUNDER, WORLD_RECORDS } from "@/data/founder";

const title = "CA Rajesh Kumar Verma — Founder, NGO Guru";
const description =
  "Founder of NGO Guru: Chartered Accountant, Company Secretary, Law Graduate and funding strategist with 20+ years guiding thousands of NGOs on CSR and grants.";

export const Route = createFileRoute("/founder")({
  head: () => ({
    meta: [
      { title },
      { name: "description", content: description },
      { property: "og:title", content: title },
      { property: "og:description", content: description },
      { property: "og:type", content: "profile" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: Founder,
});

function Founder() {
  return (
    <>
      <PageHero
        eyebrow="Founder · NGO Guru"
        title={FOUNDER.name}
        subtitle={FOUNDER.tagline}
        breadcrumb="Home / Founder"
      />

      <section className="mx-auto max-w-7xl px-4 py-14 sm:px-6">
        <ul className="flex flex-wrap gap-2">
          {FOUNDER.credentials.map((c) => (
            <li
              key={c}
              className="rounded-full bg-brand-tint px-4 py-1.5 text-xs font-semibold text-brand-green"
            >
              {c}
            </li>
          ))}
        </ul>
        <div className="mt-8 grid gap-5 md:grid-cols-2">
          {FOUNDER.pillars.map((p) => (
            <div key={p.title} className="card-surface p-6">
              <h2 className="text-lg text-brand-navy-deep">{p.title}</h2>
              <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{p.body}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="bg-brand-tint">
        <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6">
          <p className="eyebrow">Recognition</p>
          <h2 className="mt-2 text-3xl text-brand-navy-deep sm:text-4xl">
            Achievement Highlights
          </h2>
          <div className="mt-8 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {FOUNDER.achievements.map((a) => (
              <div key={a.value} className="rounded-xl bg-card p-6 shadow-sm">
                <Trophy className="h-5 w-5 text-brand-green" />
                <p className="mt-3 font-display text-lg font-bold text-brand-navy-deep">{a.value}</p>
                <p className="text-xs font-semibold tracking-[0.12em] text-brand-green uppercase">
                  {a.label}
                </p>
                <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{a.body}</p>
              </div>
            ))}
          </div>
          <div className="mt-6 rounded-xl border border-brand-green/30 bg-card p-6">
            <p className="flex items-center gap-2 text-sm font-semibold text-brand-navy-deep">
              <Award className="h-4 w-4 text-brand-green" /> Records held
            </p>
            <ul className="mt-3 grid gap-2 sm:grid-cols-3">
              {WORLD_RECORDS.map((r) => (
                <li key={r} className="flex gap-2 text-sm text-muted-foreground">
                  <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-brand-green" />
                  {r}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-4 py-16 sm:px-6">
        <div className="grid gap-10 lg:grid-cols-2">
          <div>
            <p className="eyebrow">Journey</p>
            <h2 className="mt-2 text-2xl text-brand-navy-deep sm:text-3xl">Milestones</h2>
            <ol className="mt-6 space-y-4">
              {FOUNDER.milestones.map((m) => (
                <li key={m.year} className="card-surface flex gap-4 p-5">
                  <span className="font-display text-xl font-bold text-brand-green/60">
                    {m.year}
                  </span>
                  <p className="text-sm leading-relaxed text-muted-foreground">{m.body}</p>
                </li>
              ))}
            </ol>
          </div>
          <div>
            <p className="eyebrow">Learn From The Best</p>
            <h2 className="mt-2 text-2xl text-brand-navy-deep sm:text-3xl">
              Why Learn From CA Rajesh Verma?
            </h2>
            <ul className="mt-6 space-y-3">
              {FOUNDER.whyLearn.map((w) => (
                <li key={w} className="card-surface flex items-center gap-3 p-5">
                  <CheckCircle2 className="h-5 w-5 shrink-0 text-brand-green" />
                  <span className="text-sm font-medium text-brand-navy-deep">{w}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      <SupportCard deskId="ca" serviceTitle="Founder's Desk" />
    </>
  );
}
