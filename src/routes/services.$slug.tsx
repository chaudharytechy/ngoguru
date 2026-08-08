import { createFileRoute, Link, notFound } from "@tanstack/react-router";
import { CheckCircle2 } from "lucide-react";
import { SERVICES, type Service } from "@/data/site";

export const Route = createFileRoute("/services/$slug")({
  loader: ({ params }): Service => {
    const service = SERVICES.find((s) => s.slug === params.slug);
    if (!service) throw notFound();
    return service;
  },
  head: ({ loaderData }) => {
    const t = loaderData ? `${loaderData.title} | NGOGURU` : "Service | NGOGURU";
    const d = loaderData?.summary ?? "NGO consulting services by NGOGURU.";
    return {
      meta: [
        { title: t },
        { name: "description", content: d },
        { property: "og:title", content: t },
        { property: "og:description", content: d },
      ],
    };
  },
  component: ServiceDetail,
});

function ServiceDetail() {
  const service = Route.useLoaderData();

  return (
    <>
      <section className="bg-brand-gradient">
        <div className="mx-auto grid max-w-7xl gap-8 px-4 py-14 sm:px-6 md:py-20 lg:grid-cols-[1.2fr_0.8fr] lg:items-center">
          <div>
            <p className="text-xs text-primary-foreground/60">Home / Services / {service.title}</p>
            <h1 className="mt-3 text-3xl text-primary-foreground sm:text-4xl md:text-5xl">
              {service.title}
            </h1>
            <p className="mt-4 max-w-2xl text-sm leading-relaxed text-primary-foreground/80 sm:text-base">
              {service.intro}
            </p>
            <div className="mt-7 flex flex-wrap gap-3">
              <Link
                to="/appointment"
                className="rounded-full bg-brand-green px-6 py-3 text-sm font-semibold text-primary-foreground hover:opacity-90"
              >
                Book a Consultation
              </Link>
              <Link
                to="/services"
                className="rounded-full border border-primary-foreground/40 px-6 py-3 text-sm font-semibold text-primary-foreground hover:bg-primary-foreground/10"
              >
                All Services
              </Link>
            </div>
          </div>
        </div>
      </section>

      <section className="mx-auto grid max-w-7xl gap-10 px-4 py-16 sm:px-6 lg:grid-cols-2">
        <div>
          <p className="eyebrow">What's Included</p>
          <h2 className="mt-2 text-2xl text-brand-navy-deep">Service Highlights</h2>
          <ul className="mt-6 space-y-4">
            {service.highlights.map((h) => (
              <li key={h.title} className="card-surface flex gap-3 p-5">
                <CheckCircle2 className="mt-0.5 h-5 w-5 shrink-0 text-brand-green" />
                <div>
                  <h3 className="text-base text-brand-navy-deep">{h.title}</h3>
                  <p className="mt-1 text-sm leading-relaxed text-muted-foreground">{h.body}</p>
                </div>
              </li>
            ))}
          </ul>
        </div>
        <div>
          <p className="eyebrow">Common Questions</p>
          <h2 className="mt-2 text-2xl text-brand-navy-deep">FAQs</h2>
          <div className="mt-6 space-y-3">
            {service.faqs.map((f) => (
              <details key={f.q} className="card-surface group p-5">
                <summary className="cursor-pointer list-none text-sm font-semibold text-brand-navy-deep">
                  {f.q}
                </summary>
                <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{f.a}</p>
              </details>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-brand-tint">
        <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6">
          <p className="eyebrow">How It Works</p>
          <h2 className="mt-2 text-2xl text-brand-navy-deep sm:text-3xl">Our Process</h2>
          <div className="mt-8 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {service.process.map((p) => (
              <div key={p.step} className="rounded-xl bg-card p-6 shadow-sm">
                <span className="font-display text-3xl font-bold text-brand-green/40">{p.step}</span>
                <h3 className="mt-2 text-base text-brand-navy-deep">{p.title}</h3>
                <p className="mt-1 text-sm leading-relaxed text-muted-foreground">{p.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-4 py-16 sm:px-6">
        <p className="eyebrow">Explore More</p>
        <h2 className="mt-2 text-2xl text-brand-navy-deep sm:text-3xl">Other Services</h2>
        <div className="mt-6 flex flex-wrap gap-3">
          {SERVICES.filter((s) => s.slug !== service.slug).map((s) => (
            <Link
              key={s.slug}
              to="/services/$slug"
              params={{ slug: s.slug }}
              className="rounded-full border border-border px-4 py-2 text-sm font-medium text-brand-navy-deep hover:border-brand-green hover:text-brand-green"
            >
              {s.title}
            </Link>
          ))}
        </div>
      </section>
    </>
  );
}