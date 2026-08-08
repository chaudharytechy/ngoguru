import { createFileRoute } from "@tanstack/react-router";
import { Clock, Mail, MapPin, Phone, ShieldCheck, Users, Zap } from "lucide-react";
import { useState } from "react";
import { PageHero } from "@/components/PageHero";
import { CONTACT, SUPPORT_DESKS } from "@/data/site";

const title = "Contact NGOGURU — Talk to Our NGO Consultants in Delhi";
const description =
  "Reach the NGOGURU team in Shakarpur, Delhi for NGO registration, compliance, CSR, IT and funding support.";

export const Route = createFileRoute("/contact")({
  head: () => ({
    meta: [
      { title },
      { name: "description", content: description },
      { property: "og:title", content: title },
      { property: "og:description", content: description },
    ],
  }),
  component: Contact,
});

function Contact() {
  const [sent, setSent] = useState(false);

  return (
    <>
      <PageHero
        eyebrow="Contact us"
        title="Let's Get In Touch"
        subtitle="Send a message through the form below. If your enquiry is time-sensitive, please use the contact details alongside."
        breadcrumb="Home / Contact Us"
      />

      <section className="mx-auto grid max-w-7xl gap-8 px-4 py-16 sm:px-6 lg:grid-cols-[1.1fr_0.9fr]">
        <form
          className="card-surface space-y-4 p-6 sm:p-8"
          onSubmit={(e) => {
            e.preventDefault();
            setSent(true);
          }}
        >
          <h2 className="text-xl text-brand-navy-deep">Send a Message</h2>
          <div className="grid gap-4 sm:grid-cols-2">
            <label className="text-xs font-semibold tracking-wide text-muted-foreground uppercase">
              Name
              <input required placeholder="Your full name" className="mt-1.5 w-full rounded-lg border border-input px-3.5 py-2.5 text-sm font-normal normal-case text-foreground outline-none focus:border-brand-green" />
            </label>
            <label className="text-xs font-semibold tracking-wide text-muted-foreground uppercase">
              Email
              <input required type="email" placeholder="you@organisation.org" className="mt-1.5 w-full rounded-lg border border-input px-3.5 py-2.5 text-sm font-normal normal-case text-foreground outline-none focus:border-brand-green" />
            </label>
            <label className="text-xs font-semibold tracking-wide text-muted-foreground uppercase">
              Phone
              <input required placeholder="+91" className="mt-1.5 w-full rounded-lg border border-input px-3.5 py-2.5 text-sm font-normal normal-case text-foreground outline-none focus:border-brand-green" />
            </label>
            <label className="text-xs font-semibold tracking-wide text-muted-foreground uppercase">
              Message Type
              <select required defaultValue="" className="mt-1.5 w-full rounded-lg border border-input px-3.5 py-2.5 text-sm font-normal normal-case text-foreground outline-none focus:border-brand-green">
                <option value="" disabled>
                  Select Message Type
                </option>
                {SUPPORT_DESKS.map((d) => (
                  <option key={d.id}>{d.label}</option>
                ))}
              </select>
            </label>
          </div>
          <label className="block text-xs font-semibold tracking-wide text-muted-foreground uppercase">
            Message
            <textarea required rows={5} placeholder="How can we help?" className="mt-1.5 w-full rounded-lg border border-input px-3.5 py-2.5 text-sm font-normal normal-case text-foreground outline-none focus:border-brand-green" />
          </label>
          <button
            type="submit"
            className="w-full rounded-full bg-brand-gradient py-3 text-sm font-semibold text-primary-foreground hover:opacity-90"
          >
            Send Message
          </button>
          {sent && (
            <p className="rounded-lg bg-brand-tint px-4 py-3 text-sm text-brand-green">
              Thank you — our team will respond within one working day.
            </p>
          )}
        </form>

        <div className="space-y-4">
          <div className="card-surface space-y-3 p-6 text-sm">
            <h2 className="text-lg text-brand-navy-deep">Head Office</h2>
            <p className="flex gap-2 text-muted-foreground">
              <MapPin className="mt-0.5 h-4 w-4 shrink-0 text-brand-green" /> {CONTACT.address}
            </p>
            <a className="flex gap-2 text-muted-foreground hover:text-brand-green" href={`mailto:${CONTACT.email}`}>
              <Mail className="mt-0.5 h-4 w-4 shrink-0 text-brand-green" /> {CONTACT.email}
            </a>
            <a className="flex gap-2 text-muted-foreground hover:text-brand-green" href={`tel:${CONTACT.phoneHref}`}>
              <Phone className="mt-0.5 h-4 w-4 shrink-0 text-brand-green" /> {CONTACT.phone}
            </a>
            <p className="flex gap-2 text-muted-foreground">
              <Clock className="mt-0.5 h-4 w-4 shrink-0 text-brand-green" /> Mon–Sat · 10:00 AM – 6:30 PM IST
            </p>
          </div>

          {[
            { icon: Zap, title: "Fast Response", body: "Our support team typically responds within one working day of your request." },
            { icon: ShieldCheck, title: "Confidential", body: "Every consultation is handled with discretion and full data confidentiality." },
            { icon: Users, title: "Expert-Led", body: "You'll speak directly with our CA, CS and legal specialists — not a call centre." },
          ].map((c) => (
            <div key={c.title} className="card-surface flex gap-3 p-5">
              <c.icon className="mt-0.5 h-5 w-5 shrink-0 text-brand-green" />
              <div>
                <h3 className="text-base text-brand-navy-deep">{c.title}</h3>
                <p className="mt-1 text-sm leading-relaxed text-muted-foreground">{c.body}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      <section className="bg-brand-tint">
        <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6">
          <p className="eyebrow">Direct Lines</p>
          <h2 className="mt-2 text-2xl text-brand-navy-deep sm:text-3xl">Support Desks</h2>
          <div className="mt-8 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {SUPPORT_DESKS.map((d) => (
              <div key={d.id} className="rounded-xl bg-card p-6 shadow-sm">
                <h3 className="text-base text-brand-navy-deep">{d.label}</h3>
                <p className="mt-1 text-xs text-muted-foreground">{d.tagline}</p>
                <p className="mt-3 text-sm font-semibold text-brand-navy-deep">{d.person}</p>
                <p className="text-xs text-muted-foreground">{d.designation}</p>
                <a
                  href={`tel:${d.phoneHref}`}
                  className="mt-3 flex items-center gap-2 text-sm font-semibold text-brand-green"
                >
                  <Phone className="h-4 w-4" /> {d.phone}
                </a>
                <a
                  href={`mailto:${d.email}`}
                  className="mt-1 flex items-center gap-2 text-sm text-muted-foreground hover:text-brand-green"
                >
                  <Mail className="h-4 w-4" /> {d.email}
                </a>
                <p className="mt-1 flex items-center gap-2 text-xs text-muted-foreground">
                  <Clock className="h-4 w-4" /> {d.hours}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}