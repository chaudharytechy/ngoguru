import { createFileRoute } from "@tanstack/react-router";
import { PageHero } from "@/components/PageHero";
import { TEAM, VALUES } from "@/data/site";

const title = "About NGOGURU — A Decade of Guiding India's NGO Sector";
const description =
  "Since 2013 NGOGURU has guided 300+ NGOs with registration, compliance, funding and governance support across India.";

export const Route = createFileRoute("/about")({
  head: () => ({
    meta: [
      { title },
      { name: "description", content: description },
      { property: "og:title", content: title },
      { property: "og:description", content: description },
    ],
  }),
  component: About,
});

function About() {
  return (
    <>
      <PageHero
        eyebrow="NGOGURU · Helping who help others"
        title="About Us"
        subtitle="NGOGURU is a pioneering force in NGO consultancy — elevating and guiding struggling NGOs towards sustainable success."
        breadcrumb="Home / About Us"
      />

      <section className="mx-auto grid max-w-7xl gap-10 px-4 py-16 sm:px-6 lg:grid-cols-2 lg:items-center">
        <div>
          <p className="eyebrow">Our Story</p>
          <h2 className="mt-2 text-3xl text-brand-navy-deep">
            A decade of guiding the development sector
          </h2>
          <div className="mt-4 space-y-4 text-sm leading-relaxed text-muted-foreground">
            <p>
              NGOGURU, with its humble inception in 2013, has become a pioneering force in NGO
              consultancy, elevating and guiding struggling NGOs towards sustainable success.
            </p>
            <p>
              Our deep understanding of the Indian social and business world, and our extensive
              contacts with Government functionaries, simplify solutions for every client we serve.
            </p>
            <p>
              We hold an extensive resource and connection in the corporate world and among senior
              government functionaries. It helps us serve clients better and cater to their needs
              effectively — following procedures smoothly, without any lethargy.
            </p>
          </div>
        </div>
        <div className="rounded-2xl bg-brand-gradient p-10 text-primary-foreground">
          <p className="font-display text-5xl font-bold">13 yrs</p>
          <p className="mt-2 text-sm text-primary-foreground/80">of NGO sector experience</p>
          <div className="mt-8 border-t border-primary-foreground/20 pt-6">
            <p className="font-display text-5xl font-bold">300+</p>
            <p className="mt-2 text-sm text-primary-foreground/80">NGOs guided to success</p>
          </div>
        </div>
      </section>

      <section className="bg-brand-tint">
        <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6">
          <p className="eyebrow">The People Behind NGOGURU</p>
          <h2 className="mt-2 text-3xl text-brand-navy-deep">Our Team</h2>
          <div className="mt-8 grid gap-5 sm:grid-cols-3">
            {TEAM.map((m) => (
              <div key={m.name} className="rounded-xl bg-card p-6 text-center shadow-sm">
                <span className="mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-brand-gradient font-display text-lg font-bold text-primary-foreground">
                  {m.initials}
                </span>
                <h3 className="mt-4 text-base text-brand-navy-deep">{m.name}</h3>
                <p className="mt-1 text-xs font-semibold tracking-[0.14em] text-brand-green uppercase">
                  {m.role}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-4 py-16 sm:px-6">
        <p className="eyebrow">What We Stand For</p>
        <h2 className="mt-2 text-3xl text-brand-navy-deep">Values</h2>
        <div className="mt-8 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {VALUES.map((v, i) => (
            <div key={v.title} className="card-surface p-6">
              <span className="font-display text-3xl font-bold text-brand-green/40">
                {String(i + 1).padStart(2, "0")}
              </span>
              <h3 className="mt-2 text-base text-brand-navy-deep">{v.title}</h3>
              <p className="mt-1 text-sm leading-relaxed text-muted-foreground">{v.body}</p>
            </div>
          ))}
        </div>
      </section>
    </>
  );
}