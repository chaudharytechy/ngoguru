import { createFileRoute, Link } from "@tanstack/react-router";
import { PageHero } from "@/components/PageHero";
import { CONTACT } from "@/data/site";

const title = "NGO Client Login — NGOGURU Compliance Dashboard";
const description =
  "Sign in to your NGOGURU account to access filing status, documents and grant applications in one secure place.";

export const Route = createFileRoute("/signin")({
  head: () => ({
    meta: [
      { title },
      { name: "description", content: description },
      { property: "og:title", content: title },
      { property: "og:description", content: description },
    ],
  }),
  component: SignIn,
});

const STEPS = [
  {
    no: "01",
    title: "Contact the NGOGURU team",
    body: "Call, email, or submit the enquiry form on the Contact page. Tell us your organisation name and the services you need.",
  },
  {
    no: "02",
    title: "Team verifies your organisation",
    body: "Our team confirms your NGO details — registration certificate, PAN, and authorised signatory.",
  },
  {
    no: "03",
    title: "Receive your credentials",
    body: "Once verified, we create your account and send your Login ID and a temporary password by email and SMS.",
  },
];

function SignIn() {
  return (
    <>
      <PageHero
        eyebrow="Secure Access"
        title="NGO Client Login"
        subtitle="Access your compliance dashboard, filing status, documents and grant applications in one secure place."
        breadcrumb="Home / Client Login"
      />
      <section className="mx-auto grid max-w-7xl gap-8 px-4 py-16 sm:px-6 lg:grid-cols-2">
        <form className="card-surface space-y-4 p-6 sm:p-8" onSubmit={(e) => e.preventDefault()}>
          <h2 className="text-xl text-brand-navy-deep">Sign in to your account</h2>
          <p className="text-sm text-muted-foreground">
            Use the Login ID and password issued to you by the NGOGURU team.
          </p>
          <input required placeholder="Your NGOGURU Login ID" className="w-full rounded-lg border border-input px-3.5 py-2.5 text-sm outline-none focus:border-brand-green" />
          <input required type="password" placeholder="Password" className="w-full rounded-lg border border-input px-3.5 py-2.5 text-sm outline-none focus:border-brand-green" />
          <div className="flex items-center justify-between text-sm">
            <label className="flex items-center gap-2 text-muted-foreground">
              <input type="checkbox" className="accent-brand-green" /> Keep me signed in
            </label>
            <span className="font-semibold text-brand-green">Forgot password?</span>
          </div>
          <button
            type="submit"
            className="w-full rounded-full bg-brand-gradient py-3 text-sm font-semibold text-primary-foreground hover:opacity-90"
          >
            Sign In
          </button>
          <p className="text-xs text-muted-foreground">
            Need help signing in? Call {CONTACT.phone} (Mon–Sat, 10 AM – 6 PM) or write to{" "}
            {CONTACT.email}.
          </p>
        </form>

        <div>
          <p className="eyebrow">How to get access</p>
          <h2 className="mt-2 text-2xl text-brand-navy-deep">
            3 steps to get your Login ID & password
          </h2>
          <ol className="mt-6 space-y-4">
            {STEPS.map((s) => (
              <li key={s.no} className="card-surface flex gap-4 p-5">
                <span className="font-display text-2xl font-bold text-brand-green/40">{s.no}</span>
                <div>
                  <h3 className="text-base text-brand-navy-deep">{s.title}</h3>
                  <p className="mt-1 text-sm leading-relaxed text-muted-foreground">{s.body}</p>
                </div>
              </li>
            ))}
          </ol>
          <Link
            to="/contact"
            className="mt-6 inline-block rounded-full bg-brand-green px-6 py-3 text-sm font-semibold text-primary-foreground hover:opacity-90"
          >
            Contact NGOGURU
          </Link>
        </div>
      </section>
    </>
  );
}