import { createFileRoute, Link } from "@tanstack/react-router";
import { Newspaper } from "lucide-react";
import { PageHero } from "@/components/PageHero";
import { NEWS_ITEMS } from "@/data/details";

const title = "NGO News — Sector Updates from Across India | NGOGURU";
const description =
  "Curated coverage from India's non-profit and social impact sector: regulation, funding, judgments and programmes.";

export const Route = createFileRoute("/news/")({
  head: () => ({
    meta: [
      { title },
      { name: "description", content: description },
      { property: "og:title", content: title },
      { property: "og:description", content: description },
    ],
  }),
  component: News,
});

function News() {
  return (
    <>
      <PageHero
        eyebrow="Newsroom"
        title="NGO News"
        subtitle="Curated coverage from across India's non-profit and social impact sector."
        breadcrumb="Home / NGO News"
      />
      <section className="mx-auto max-w-7xl px-4 py-16 sm:px-6">
        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {NEWS_ITEMS.map((n) => (
            <article key={n.slug} className="card-surface flex flex-col p-6">
              <span className="flex h-9 w-9 items-center justify-center rounded-lg bg-brand-tint text-brand-green">
                <Newspaper className="h-4 w-4" />
              </span>
              <p className="mt-3 text-[10px] font-bold tracking-[0.16em] text-brand-green uppercase">
                NGO News
              </p>
              <h2 className="mt-1 text-base leading-snug text-brand-navy-deep">{n.title}</h2>
              <p className="mt-2 flex-1 text-sm leading-relaxed text-muted-foreground">{n.body}</p>
              <Link
                to="/news/$slug"
                params={{ slug: n.slug }}
                className="mt-3 inline-block text-sm font-semibold text-brand-green hover:underline"
              >
                Read More →
              </Link>
            </article>
          ))}
        </div>
        <p className="mt-8 text-center text-sm text-muted-foreground">
          Showing 1–9 of 116 updates
        </p>
      </section>
    </>
  );
}