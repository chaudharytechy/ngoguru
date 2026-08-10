import { createFileRoute, Link } from "@tanstack/react-router";
import { Download } from "lucide-react";
import { PageHero } from "@/components/PageHero";
import { LAW_ITEMS } from "@/data/details";

const title = "NGO Laws & Advice — Trust, Society, FCRA Acts | NGOGURU";
const description =
  "Overview of the key laws governing Indian NGOs: Indian Trusts Act, Societies Registration Act, FCRA 2010 and Bombay Public Trusts Act.";

export const Route = createFileRoute("/laws/")({
  head: () => ({
    meta: [
      { title },
      { name: "description", content: description },
      { property: "og:title", content: title },
      { property: "og:description", content: description },
    ],
  }),
  component: Laws,
});

function Laws() {
  return (
    <>
      <PageHero
        eyebrow="Legal Library"
        title="NGO Laws & Advice"
        subtitle="NGOs are regulated under various laws depending on their legal structure, such as the Societies Registration Act, the Indian Trusts Act, or the Companies Act."
        breadcrumb="Home / NGO Laws"
      />
      <section className="mx-auto max-w-7xl px-4 py-16 sm:px-6">
        <div className="space-y-4">
          {LAW_ITEMS.map((l) => (
            <article
              key={l.no}
              className="card-surface flex flex-col gap-4 p-6 md:flex-row md:items-center"
            >
              <span className="font-display text-3xl font-bold text-brand-green/40">{l.no}</span>
              <div className="flex-1">
                <h2 className="text-lg text-brand-navy-deep">{l.title}</h2>
                <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{l.body}</p>
              </div>
              <div className="flex w-fit shrink-0 flex-wrap gap-2">
                <Link
                  to="/laws/$slug"
                  params={{ slug: l.slug }}
                  className="inline-flex items-center gap-2 rounded-full bg-brand-gradient px-4 py-2 text-sm font-semibold text-primary-foreground hover:opacity-90"
                >
                  Read More →
                </Link>
                <button
                  type="button"
                  className="inline-flex items-center gap-2 rounded-full border border-border px-4 py-2 text-sm font-semibold text-brand-navy-deep hover:border-brand-green hover:text-brand-green"
                >
                  <Download className="h-4 w-4" /> Download PDF
                </button>
              </div>
            </article>
          ))}
        </div>
      </section>
    </>
  );
}