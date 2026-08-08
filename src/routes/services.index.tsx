import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowRight } from "lucide-react";
import { PageHero } from "@/components/PageHero";
import { SERVICES } from "@/data/site";

const title = "Services — NGO Registration, Compliance & Funding | NGOGURU";
const description =
  "Expert-led support across every stage of an NGO's life: registration, outsourcing, training, funding, audit and statutory approvals.";

export const Route = createFileRoute("/services/")({
  head: () => ({
    meta: [
      { title },
      { name: "description", content: description },
      { property: "og:title", content: title },
      { property: "og:description", content: description },
    ],
  }),
  component: ServicesPage,
});

function ServicesPage() {
  return (
    <>
      <PageHero
        eyebrow="What We Do"
        title="Services"
        subtitle="Practical, expert-led support across every stage of an NGO's life — registration, funding, compliance and growth."
        breadcrumb="Home / Services"
      />
      <section className="mx-auto max-w-7xl px-4 py-16 sm:px-6">
        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {SERVICES.map((s) => (
            <Link
              key={s.slug}
              to="/services/$slug"
              params={{ slug: s.slug }}
              className="card-surface group p-6 transition-colors hover:border-brand-green"
            >
              <h2 className="text-lg text-brand-navy-deep">{s.title}</h2>
              <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{s.summary}</p>
              <span className="mt-4 inline-flex items-center gap-1 text-sm font-semibold text-brand-green">
                Learn more <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
              </span>
            </Link>
          ))}
        </div>

        <div className="mt-12 grid gap-6 rounded-2xl bg-brand-tint p-8 md:grid-cols-2 md:items-center">
          <div>
            <p className="eyebrow">A Focused Sub-Service</p>
            <h2 className="mt-2 text-2xl text-brand-navy-deep">We also offer NSDC Funding Service</h2>
          </div>
          <div>
            <p className="text-sm leading-relaxed text-muted-foreground">
              The NSDC takes initiatives that can potentially have a developing effect, rather than
              being an actual operator in this field. Through this approach, the organisation
              attempts to involve the industry in every aspect of skill development.
            </p>
            <Link
              to="/services/$slug"
              params={{ slug: "funding-for-ngos" }}
              className="mt-4 inline-flex items-center gap-1 text-sm font-semibold text-brand-green"
            >
              Explore NSDC Funding <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}