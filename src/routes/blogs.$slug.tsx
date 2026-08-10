import { createFileRoute, Link, notFound } from "@tanstack/react-router";
import { PageHero } from "@/components/PageHero";
import { SupportCard } from "@/components/SupportCard";
import { getBlog } from "@/data/details";
import { BLOGS } from "@/data/site";

export const Route = createFileRoute("/blogs/$slug")({
  loader: ({ params }) => {
    const blog = getBlog(params.slug);
    if (!blog) throw notFound();
    return blog;
  },
  head: ({ loaderData }) => {
    const t = loaderData ? `${loaderData.title} | NGOGURU` : "Article | NGOGURU";
    const d = loaderData?.excerpt ?? "NGO compliance and funding guidance from NGOGURU.";
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
  component: BlogDetail,
});

function BlogDetail() {
  const blog = Route.useLoaderData();
  return (
    <>
      <PageHero
        eyebrow={blog.category}
        title={blog.title}
        subtitle={blog.excerpt}
        breadcrumb="Home / Blogs / Article"
      />
      <article className="mx-auto max-w-3xl px-4 py-16 sm:px-6">
        <div className="space-y-4 text-sm leading-relaxed text-muted-foreground sm:text-base">
          {blog.body.map((p) => (
            <p key={p}>{p}</p>
          ))}
        </div>
        <Link
          to="/blogs"
          className="mt-8 inline-block rounded-full border border-border px-5 py-2.5 text-sm font-semibold text-brand-navy-deep hover:border-brand-green hover:text-brand-green"
        >
          ← Back to all blogs
        </Link>
        <div className="mt-10 border-t border-border pt-8">
          <p className="eyebrow">Related Reading</p>
          <ul className="mt-4 space-y-2">
            {BLOGS.filter((b) => b.slug !== blog.slug)
              .slice(0, 4)
              .map((b) => (
                <li key={b.slug}>
                  <Link
                    to="/blogs/$slug"
                    params={{ slug: b.slug }}
                    className="text-sm font-medium text-brand-navy-deep hover:text-brand-green"
                  >
                    {b.title} →
                  </Link>
                </li>
              ))}
          </ul>
        </div>
      </article>
      <SupportCard deskId="ca" serviceTitle={blog.category} />
    </>
  );
}
