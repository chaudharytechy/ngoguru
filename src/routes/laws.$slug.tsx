import { createFileRoute, Link, notFound } from "@tanstack/react-router";
import { PageHero } from "@/components/PageHero";
import { SupportCard } from "@/components/SupportCard";
import { LAW_ITEMS, getLaw } from "@/data/details";

export const Route = createFileRoute("/laws/$slug")({
  loader: ({ params }) => {
    const law = getLaw(params.slug);
    if (!law) throw notFound();
    return law;
  },
  head: ({ loaderData }) => {
    const t = loaderData ? `${loaderData.title} | NGO Laws | NGOGURU` : "NGO Law | NGOGURU";
    const d = loaderData?.body ?? "Key laws governing Indian NGOs, explained by NGOGURU.";
    return {
      meta: [
        { title: t },
        { name: "description", content: d.slice(0, 155) },
        { property: "og:title", content: t },
        { property: "og:description", content: d.slice(0, 155) },
        { property: "og:type", content: "article" },
        { name: "twitter:card", content: "summary_large_image" },
      ],
    };
  },
  component: LawDetail,
});

function LawDetail() {
  const law = Route.useLoaderData();
  return (
    <>
      <PageHero
        eyebrow="Legal Library"
        title={law.title}
        subtitle={law.body}
        breadcrumb="Home / NGO Laws / Act"
      />
      <section className="mx-auto max-w-5xl px-4 py-16 sm:px-6">
        <div className="grid gap-5 sm:grid-cols-2">
          {law.sections.map((s: { title: string; body: string }) => (
            <div key={s.title} className="card-surface p-6">
              <h2 className="text-base text-brand-navy-deep">{s.title}</h2>
              <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{s.body}</p>
            </div>
          ))}
        </div>
        <div className="mt-8 flex flex-wrap gap-3">
          <Link
            to="/laws"
            className="rounded-full border border-border px-5 py-2.5 text-sm font-semibold text-brand-navy-deep hover:border-brand-green hover:text-brand-green"
          >
            ← All NGO laws
          </Link>
          {LAW_ITEMS.filter((l) => l.slug !== law.slug).map((l) => (
            <Link
              key={l.slug}
              to="/laws/$slug"
              params={{ slug: l.slug }}
              className="rounded-full border border-border px-4 py-2 text-sm font-medium text-brand-navy-deep hover:border-brand-green hover:text-brand-green"
            >
              {l.title}
            </Link>
          ))}
        </div>
      </section>
      <SupportCard deskId="registration" serviceTitle={law.title} />
    </>
  );
}
