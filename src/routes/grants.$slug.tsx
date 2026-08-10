import { createFileRoute, Link, notFound } from "@tanstack/react-router";
import { CalendarClock, FileText, MapPin } from "lucide-react";
import { PageHero } from "@/components/PageHero";
import { SupportCard } from "@/components/SupportCard";
import { getGrant } from "@/data/details";

export const Route = createFileRoute("/grants/$slug")({
  loader: ({ params }) => {
    const grant = getGrant(params.slug);
    if (!grant) throw notFound();
    return grant;
  },
  head: ({ loaderData }) => {
    const t = loaderData ? `${loaderData.title} | Grants | NGOGURU` : "Grant | NGOGURU";
    const d = loaderData
      ? `${loaderData.location} · ${loaderData.deadline}`
      : "Live grant opportunities for Indian NGOs.";
    return {
      meta: [
        { title: t.slice(0, 70) },
        { name: "description", content: d },
        { property: "og:title", content: t },
        { property: "og:description", content: d },
        { property: "og:type", content: "article" },
        { name: "twitter:card", content: "summary_large_image" },
      ],
    };
  },
  component: GrantDetail,
});

function GrantDetail() {
  const grant = Route.useLoaderData();
  return (
    <>
      <PageHero
        eyebrow={grant.closes}
        title={grant.title}
        subtitle={grant.overview}
        breadcrumb="Home / Grants & Funding / Opportunity"
      />
      <section className="mx-auto max-w-5xl px-4 py-16 sm:px-6">
        <div className="card-surface flex flex-wrap gap-6 p-6 text-sm">
          <p className="flex items-center gap-2 text-muted-foreground">
            <MapPin className="h-4 w-4 text-brand-green" /> {grant.location}
          </p>
          <p className="flex items-center gap-2 font-medium text-brand-green">
            <CalendarClock className="h-4 w-4" /> {grant.deadline}
          </p>
        </div>
        <div className="mt-6 grid gap-5 sm:grid-cols-2">
          <div className="card-surface p-6">
            <h2 className="text-base text-brand-navy-deep">Eligibility</h2>
            <ul className="mt-3 space-y-2 text-sm text-muted-foreground">
              {grant.eligibility.map((e) => (
                <li key={e} className="flex gap-2">
                  <FileText className="mt-0.5 h-4 w-4 shrink-0 text-brand-green" />
                  {e}
                </li>
              ))}
            </ul>
          </div>
          <div className="card-surface p-6">
            <h2 className="text-base text-brand-navy-deep">Documents Required</h2>
            <ul className="mt-3 space-y-2 text-sm text-muted-foreground">
              {grant.documents.map((d) => (
                <li key={d} className="flex gap-2">
                  <FileText className="mt-0.5 h-4 w-4 shrink-0 text-brand-green" />
                  {d}
                </li>
              ))}
            </ul>
          </div>
        </div>
        <Link
          to="/grants"
          className="mt-8 inline-block rounded-full border border-border px-5 py-2.5 text-sm font-semibold text-brand-navy-deep hover:border-brand-green hover:text-brand-green"
        >
          ← All opportunities
        </Link>
      </section>
      <SupportCard deskId="funding" serviceTitle={grant.title} />
    </>
  );
}
