import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowRight } from "lucide-react";
import { PageHero } from "@/components/PageHero";
import { BLOGS } from "@/data/site";

const title = "NGO Blogs — Compliance, Funding & Governance Guides | NGOGURU";
const description =
  "Plain-language guidance on FCRA, CSR funding, 12A/80G, audits and governance for the Indian NGO sector.";

export const Route = createFileRoute("/blogs/")({
  head: () => ({
    meta: [
      { title },
      { name: "description", content: description },
      { property: "og:title", content: title },
      { property: "og:description", content: description },
    ],
  }),
  component: Blogs,
});

function Blogs() {
  return (
    <>
      <PageHero
        eyebrow="Insights"
        title="Blogs"
        subtitle="Practical, plain-language guidance on compliance, funding and governance for the Indian NGO sector."
        breadcrumb="Home / Blogs"
      />
      <section className="mx-auto max-w-7xl px-4 py-16 sm:px-6">
        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {BLOGS.map((b) => (
            <Link
              key={b.slug}
              to="/blogs/$slug"
              params={{ slug: b.slug }}
              className="card-surface group flex flex-col p-6 transition-colors hover:border-brand-green"
            >
              <span className="w-fit rounded-full bg-brand-tint px-3 py-1 text-[10px] font-bold tracking-[0.14em] text-brand-green uppercase">
                {b.category}
              </span>
              <h3 className="mt-3 text-lg leading-snug text-brand-navy-deep">{b.title}</h3>
              <p className="mt-2 flex-1 text-sm leading-relaxed text-muted-foreground">
                {b.excerpt}
              </p>
              <span className="mt-4 inline-flex items-center gap-1 text-sm font-semibold text-brand-green">
                Read article{" "}
                <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
              </span>
            </Link>
          ))}
        </div>
        <p className="mt-8 text-center text-sm text-muted-foreground">
          Showing 1–9 of 43 articles
        </p>
      </section>
    </>
  );
}