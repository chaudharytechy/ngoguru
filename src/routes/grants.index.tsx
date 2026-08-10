import { createFileRoute } from "@tanstack/react-router";
import { CalendarClock, MapPin } from "lucide-react";
import { PageHero } from "@/components/PageHero";
import { GRANTS } from "@/data/site";

const title = "Grants & Funding — Live EOIs and RFPs for NGOs | NGOGURU";
const description =
  "Live EOIs, RFPs and empanelment notices from partner organisations across India — updated as they open.";

export const Route = createFileRoute("/grants/")({
  head: () => ({
    meta: [
      { title },
      { name: "description", content: description },
      { property: "og:title", content: title },
      { property: "og:description", content: description },
    ],
  }),
  component: Grants,
});

function Grants() {
  return (
    <>
      <PageHero
        eyebrow="Open Now"
        title="Grants & Funding"
        subtitle="Live EOIs, RFPs and empanelment notices from partner organisations across India — updated as they open."
        breadcrumb="Home / Grants & Funding"
      />
      <section className="mx-auto max-w-7xl px-4 py-16 sm:px-6">
        <h2 className="text-2xl text-brand-navy-deep sm:text-3xl">On-Going Grants & Fundings</h2>
        <div className="mt-8 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {GRANTS.map((g) => (
            <article key={g.title} className="overflow-hidden rounded-xl border border-border shadow-sm">
              <div className="bg-brand-navy-deep p-5 text-primary-foreground">
                <p className="text-[10px] font-bold tracking-[0.16em] text-brand-green-soft uppercase">
                  NGOGURU · Private Limited
                </p>
                <h3 className="mt-2 text-base leading-snug">{g.title}</h3>
                <span className="mt-3 inline-block rounded-full bg-brand-green/25 px-3 py-1 text-[11px] text-brand-green-soft">
                  {g.closes}
                </span>
              </div>
              <div className="space-y-1.5 bg-card p-5 text-sm">
                <p className="flex items-center gap-1.5 text-muted-foreground">
                  <MapPin className="h-4 w-4" /> {g.location}
                </p>
                <p className="flex items-center gap-1.5 font-medium text-brand-green">
                  <CalendarClock className="h-4 w-4" /> {g.deadline}
                </p>
                <button
                  type="button"
                  className="mt-3 w-full rounded-full border border-border py-2 text-sm font-semibold text-brand-navy-deep hover:border-brand-green hover:text-brand-green"
                >
                  Read More
                </button>
              </div>
            </article>
          ))}
        </div>
      </section>
    </>
  );
}