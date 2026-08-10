import { createFileRoute, Link, notFound } from "@tanstack/react-router";
import { PageHero } from "@/components/PageHero";
import { SupportCard } from "@/components/SupportCard";
import { NEWS_ITEMS, getNews } from "@/data/details";

export const Route = createFileRoute("/news/$slug")({
  loader: ({ params }) => {
    const item = getNews(params.slug);
    if (!item) throw notFound();
    return item;
  },
  head: ({ loaderData }) => {
    const t = loaderData ? `${loaderData.title} | NGOGURU News` : "NGO News | NGOGURU";
    const d = loaderData?.body[0] ?? "NGO sector news from NGOGURU.";
    return {
      meta: [
        { title: t },
        { name: "description", content: d },
        { property: "og:title", content: t },
        { property: "og:description", content: d },
        { property: "og:type", content: "article" },
        { name: "twitter:card", content: "summary_large_image" },
      ],
    };
  },
  component: NewsDetail,
});

function NewsDetail() {
  const item = Route.useLoaderData();
  return (
    <>
      <PageHero eyebrow="NGO News" title={item.title} breadcrumb="Home / NGO News / Story" />
      <article className="mx-auto max-w-3xl px-4 py-16 sm:px-6">
        <div className="space-y-4 text-sm leading-relaxed text-muted-foreground sm:text-base">
          {item.body.map((p) => (
            <p key={p}>{p}</p>
          ))}
        </div>
        <Link
          to="/news"
          className="mt-8 inline-block rounded-full border border-border px-5 py-2.5 text-sm font-semibold text-brand-navy-deep hover:border-brand-green hover:text-brand-green"
        >
          ← Back to NGO News
        </Link>
        <div className="mt-10 border-t border-border pt-8">
          <p className="eyebrow">More Updates</p>
          <ul className="mt-4 space-y-2">
            {NEWS_ITEMS.filter((n) => n.slug !== item.slug)
              .slice(0, 4)
              .map((n) => (
                <li key={n.slug}>
                  <Link
                    to="/news/$slug"
                    params={{ slug: n.slug }}
                    className="text-sm font-medium text-brand-navy-deep hover:text-brand-green"
                  >
                    {n.title} →
                  </Link>
                </li>
              ))}
          </ul>
        </div>
      </article>
      <SupportCard deskId="registration" serviceTitle="NGO News Desk" />
    </>
  );
}
