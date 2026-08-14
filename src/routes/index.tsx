import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowRight, CalendarClock, MapPin, Star } from "lucide-react";
import { SERVICES, STATS, TESTIMONIALS } from "@/data/site";
import { GRANT_ITEMS } from "@/data/details";
import { FounderHighlight } from "@/components/FounderHighlight";
import heroBg from "@/assets/hero-bg.jpg";
import pillarFunding from "@/assets/pillar-funding.jpg";
import pillarTech from "@/assets/pillar-tech.jpg";
import pillarOneStop from "@/assets/pillar-onestop.jpg";

const title = "NGOGURU — Funding, Technology & Growth for NGOs and Startups";
const description =
  "Funding, new technology and a one-stop compliance platform for NGOs, startups and enterprises — registration, FCRA, 12A/80G, audit and grants under one roof.";

const PILLARS = [
  {
    img: pillarFunding,
    tag: "Funding",
    title: "Access to funding & investment",
    body: "CSR partnerships, government schemes, institutional grants and investor-ready proposals — matched to your mission.",
  },
  {
    img: pillarTech,
    tag: "New Technology",
    title: "AI, innovation & digital systems",
    body: "AI-assisted proposal drafting, digital compliance dashboards and automation built for modern organisations.",
  },
  {
    img: pillarOneStop,
    tag: "One Stop Solution",
    title: "Everything in one platform",
    body: "Registration, accounting, audit, legal, HR and reporting — one connected team, one accountable partner.",
  },
];

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title },
      { name: "description", content: description },
      { property: "og:title", content: title },
      { property: "og:description", content: description },
    ],
  }),
  component: Index,
});

function Index() {
  return (
    <>
      <section className="relative isolate overflow-hidden bg-brand-navy-deep">
        <img
          src={heroBg}
          alt=""
          aria-hidden
          width={1600}
          height={900}
          className="absolute inset-0 -z-10 h-full w-full object-cover opacity-60"
        />
        <div className="absolute inset-0 -z-10 bg-brand-gradient opacity-80" />
        <div className="mx-auto grid max-w-7xl gap-10 px-4 py-14 sm:px-6 md:py-20 lg:grid-cols-[1.15fr_0.85fr] lg:items-start">
          <div>
            <p className="text-xs font-bold tracking-[0.2em] text-brand-green-soft uppercase">
              Funding · Technology · One Stop Solution
            </p>
            <h1 className="mt-4 text-4xl leading-[1.1] text-primary-foreground sm:text-5xl lg:text-6xl">
              Funding. Technology. Growth.{" "}
              <span className="text-brand-green-soft">All in One Place.</span>
            </h1>
            <p className="mt-5 max-w-xl text-sm leading-relaxed text-primary-foreground/80 sm:text-base">
              One connected platform for NGOs, startups and enterprises — access to funding,
              AI-driven technology and every compliance service you need, delivered by India's
              largest NGO service team.
            </p>
            <div className="mt-7 flex flex-wrap gap-3">
              <Link
                to="/appointment"
                className="rounded-full bg-brand-green px-6 py-3 text-sm font-semibold text-primary-foreground transition-opacity hover:opacity-90"
              >
                Book a Consultation
              </Link>
              <Link
                to="/services"
                className="rounded-full border border-primary-foreground/40 px-6 py-3 text-sm font-semibold text-primary-foreground transition-colors hover:bg-primary-foreground/10"
              >
                Explore Services
              </Link>
            </div>
            <dl className="mt-10 grid grid-cols-2 gap-6 sm:grid-cols-4">
              {STATS.map((s) => (
                <div key={s.label}>
                  <dt className="font-display text-2xl font-bold text-primary-foreground sm:text-3xl">
                    {s.value}
                  </dt>
                  <dd className="mt-1 text-xs text-primary-foreground/70">{s.label}</dd>
                </div>
              ))}
            </dl>
          </div>

          <div className="rounded-2xl bg-card p-6 shadow-2xl sm:p-7">
            <span className="inline-block rounded-full bg-brand-tint px-3 py-1 text-[10px] font-bold tracking-[0.18em] text-brand-green uppercase">
              Get Started
            </span>
            <h2 className="mt-3 text-xl text-brand-navy-deep">
              Startups, NGOs & More — From Struggling to Successful
            </h2>
            <p className="mt-1 text-xs text-muted-foreground">
              100% client satisfaction guaranteed · no hidden charges
            </p>
            <form
              className="mt-5 space-y-3"
              onSubmit={(e) => {
                e.preventDefault();
                alert("Thank you! Our team will contact you within one working day.");
              }}
            >
              <input required placeholder="Full Name" className="w-full rounded-lg border border-input px-3.5 py-2.5 text-sm outline-none focus:border-brand-green" />
              <input required type="email" placeholder="Email" className="w-full rounded-lg border border-input px-3.5 py-2.5 text-sm outline-none focus:border-brand-green" />
              <input required placeholder="Mobile Number" className="w-full rounded-lg border border-input px-3.5 py-2.5 text-sm outline-none focus:border-brand-green" />
              <select required defaultValue="" className="w-full rounded-lg border border-input px-3.5 py-2.5 text-sm text-foreground outline-none focus:border-brand-green">
                <option value="" disabled>
                  Select State
                </option>
                {["Delhi", "Maharashtra", "Karnataka", "Bihar", "Punjab", "Madhya Pradesh", "Other"].map((s) => (
                  <option key={s}>{s}</option>
                ))}
              </select>
              <button
                type="submit"
                className="w-full rounded-lg bg-brand-gradient py-3 text-sm font-semibold text-primary-foreground transition-opacity hover:opacity-90"
              >
                Submit Request →
              </button>
            </form>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-4 py-16 sm:px-6 md:py-20">
        <div className="text-center">
          <p className="eyebrow">Our Three Pillars</p>
          <h2 className="mt-2 text-3xl text-brand-navy-deep sm:text-4xl">
            Built on Funding, Technology and One Stop Delivery
          </h2>
        </div>
        <div className="mt-10 grid gap-6 md:grid-cols-3">
          {PILLARS.map((p) => (
            <article
              key={p.tag}
              className="card-surface group overflow-hidden p-0 transition-transform hover:-translate-y-1"
            >
              <div className="relative">
                <img
                  src={p.img}
                  alt={p.title}
                  loading="lazy"
                  width={1024}
                  height={768}
                  className="h-48 w-full object-cover"
                />
                <span className="absolute bottom-3 left-3 rounded-full bg-brand-navy-deep/85 px-3 py-1 text-[11px] font-bold tracking-[0.14em] text-brand-green-soft uppercase">
                  {p.tag}
                </span>
              </div>
              <div className="p-6">
                <h3 className="text-lg text-brand-navy-deep">{p.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{p.body}</p>
              </div>
            </article>
          ))}
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-4 pb-16 sm:px-6 md:pb-20">
        <div className="text-center">
          <p className="eyebrow">What We Do</p>
          <h2 className="mt-2 text-3xl text-brand-navy-deep sm:text-4xl">Services</h2>
          <p className="mx-auto mt-3 max-w-2xl text-sm text-muted-foreground">
            End-to-end support for NGOs — from formation to funding, compliance and communications.
          </p>
        </div>
        <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {SERVICES.map((s) => (
            <Link
              key={s.slug}
              to="/services/$slug"
              params={{ slug: s.slug }}
              className="card-surface group p-6 transition-colors hover:border-brand-green"
            >
              <h3 className="text-lg text-brand-navy-deep">{s.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{s.summary}</p>
              <span className="mt-4 inline-flex items-center gap-1 text-sm font-semibold text-brand-green">
                Learn more <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
              </span>
            </Link>
          ))}
        </div>
      </section>

      <section className="bg-brand-tint">
        <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 md:py-20">
          <div className="flex flex-wrap items-end justify-between gap-4">
            <div>
              <p className="eyebrow">Open Opportunities</p>
              <h2 className="mt-2 text-3xl text-brand-navy-deep sm:text-4xl">
                On-Going Grants & Fundings
              </h2>
            </div>
            <Link
              to="/grants"
              className="rounded-full bg-card px-5 py-2.5 text-sm font-semibold text-brand-navy-deep shadow-sm hover:text-brand-green"
            >
              View All Opportunities →
            </Link>
          </div>
          <div className="mt-8 grid gap-5 md:grid-cols-3">
            {GRANT_ITEMS.slice(0, 3).map((g) => (
              <article key={g.slug} className="overflow-hidden rounded-xl bg-card shadow-sm">
                <div className="bg-brand-navy-deep p-5 text-primary-foreground">
                  <p className="text-[10px] font-bold tracking-[0.16em] text-brand-green-soft uppercase">
                    NGOGURU · Private Limited
                  </p>
                  <h3 className="mt-2 text-base leading-snug">{g.title}</h3>
                  <span className="mt-3 inline-block rounded-full bg-brand-green/25 px-3 py-1 text-[11px] text-brand-green-soft">
                    {g.closes}
                  </span>
                </div>
                <div className="space-y-1.5 p-5 text-sm">
                  <p className="flex items-center gap-1.5 text-muted-foreground">
                    <MapPin className="h-4 w-4" /> {g.location}
                  </p>
                  <p className="flex items-center gap-1.5 font-medium text-brand-green">
                    <CalendarClock className="h-4 w-4" /> {g.deadline}
                  </p>
                  <Link
                    to="/grants/$slug"
                    params={{ slug: g.slug }}
                    className="mt-3 block rounded-full border border-border py-2 text-center text-sm font-semibold text-brand-navy-deep hover:border-brand-green hover:text-brand-green"
                  >
                    Read More
                  </Link>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <FounderHighlight />

      <section className="mx-auto max-w-7xl px-4 py-16 sm:px-6 md:py-20">
        <div className="text-center">
          <p className="eyebrow">Testimonials</p>
          <h2 className="mt-2 text-3xl text-brand-navy-deep sm:text-4xl">What Our Clients Say</h2>
        </div>
        <div className="mt-10 grid gap-5 md:grid-cols-2">
          {TESTIMONIALS.map((t) => (
            <figure key={t.name} className="card-surface p-6">
              <div className="flex gap-0.5 text-brand-green">
                {Array.from({ length: 5 }).map((_, i) => (
                  <Star key={i} className="h-4 w-4 fill-current" />
                ))}
              </div>
              <blockquote className="mt-4 text-sm leading-relaxed text-foreground/85 italic">
                "{t.quote}"
              </blockquote>
              <figcaption className="mt-5 flex items-center gap-3">
                <span className="flex h-9 w-9 items-center justify-center rounded-full bg-brand-gradient text-xs font-bold text-primary-foreground">
                  {t.initials}
                </span>
                <span>
                  <span className="block text-sm font-semibold text-brand-navy-deep">{t.name}</span>
                  <span className="block text-xs text-muted-foreground">{t.role}</span>
                </span>
              </figcaption>
            </figure>
          ))}
        </div>
      </section>

      <section className="bg-brand-gradient">
        <div className="mx-auto grid max-w-7xl gap-5 px-4 py-14 sm:px-6 md:grid-cols-2">
          {[
            {
              title: "New Milestone",
              body: "Every milestone we reach is guided by purpose — measured not just in numbers, but in the communities strengthened along the way.",
            },
            {
              title: "100 Employees",
              body: "A growing team of dedicated specialists bringing legal, financial and strategic expertise to every NGO we serve.",
            },
          ].map((c) => (
            <div
              key={c.title}
              className="rounded-xl border border-primary-foreground/20 bg-primary-foreground/10 p-6"
            >
              <h3 className="text-xl text-primary-foreground">{c.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-primary-foreground/80">{c.body}</p>
            </div>
          ))}
        </div>
      </section>
    </>
  );
}
