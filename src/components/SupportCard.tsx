import { useState } from "react";
import { Link } from "@tanstack/react-router";
import { Clock, Mail, Phone, ShieldCheck } from "lucide-react";
import { SUPPORT_DESKS, type SupportDesk } from "@/data/site";

export function SupportCard({
  deskId = "registration",
  serviceTitle,
}: {
  deskId?: string;
  serviceTitle?: string;
}) {
  const desk: SupportDesk = SUPPORT_DESKS.find((d) => d.id === deskId) ?? SUPPORT_DESKS[0];
  const [sent, setSent] = useState(false);

  return (
    <section className="mx-auto max-w-7xl px-4 py-16 sm:px-6">
      <p className="eyebrow">Talk To A Specialist</p>
      <h2 className="mt-2 text-2xl text-brand-navy-deep sm:text-3xl">
        Support & Enquiry{serviceTitle ? ` — ${serviceTitle}` : ""}
      </h2>
      <div className="mt-8 grid gap-5 lg:grid-cols-[0.9fr_1.1fr]">
        <div className="card-surface p-6 sm:p-7">
          <span className="inline-block rounded-full bg-brand-tint px-3 py-1 text-[10px] font-bold tracking-[0.16em] text-brand-green uppercase">
            {desk.label}
          </span>
          <h3 className="mt-3 text-lg text-brand-navy-deep">{desk.person}</h3>
          <p className="text-xs text-muted-foreground">{desk.designation}</p>
          <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{desk.tagline}</p>

          <div className="mt-5 space-y-2.5 text-sm">
            <a
              href={`tel:${desk.phoneHref}`}
              className="flex items-center gap-2 font-semibold text-brand-navy-deep hover:text-brand-green"
            >
              <Phone className="h-4 w-4 text-brand-green" /> {desk.phone}
            </a>
            {desk.altPhone && (
              <p className="flex items-center gap-2 text-muted-foreground">
                <Phone className="h-4 w-4 text-brand-green" /> {desk.altPhone}
              </p>
            )}
            <a
              href={`mailto:${desk.email}`}
              className="flex items-center gap-2 text-muted-foreground hover:text-brand-green"
            >
              <Mail className="h-4 w-4 text-brand-green" /> {desk.email}
            </a>
            <p className="flex items-center gap-2 text-muted-foreground">
              <Clock className="h-4 w-4 text-brand-green" /> {desk.hours}
            </p>
          </div>

          <ul className="mt-5 space-y-2 border-t border-border pt-5 text-sm text-muted-foreground">
            {desk.handles.map((h) => (
              <li key={h} className="flex gap-2">
                <ShieldCheck className="mt-0.5 h-4 w-4 shrink-0 text-brand-green" />
                {h}
              </li>
            ))}
          </ul>

          <Link
            to="/appointment"
            className="mt-6 block rounded-full bg-brand-gradient py-2.5 text-center text-sm font-semibold text-primary-foreground hover:opacity-90"
          >
            Book an Appointment
          </Link>
        </div>

        <form
          className="card-surface space-y-3 p-6 sm:p-7"
          onSubmit={(e) => {
            e.preventDefault();
            setSent(true);
          }}
        >
          <h3 className="text-lg text-brand-navy-deep">Send an enquiry</h3>
          <p className="text-xs text-muted-foreground">
            We reply within one working day{serviceTitle ? ` about ${serviceTitle}` : ""}.
          </p>
          <div className="grid gap-3 sm:grid-cols-2">
            <input required placeholder="Full name" className="rounded-lg border border-input px-3.5 py-2.5 text-sm outline-none focus:border-brand-green" />
            <input required placeholder="Organisation" className="rounded-lg border border-input px-3.5 py-2.5 text-sm outline-none focus:border-brand-green" />
            <input required type="email" placeholder="Email" className="rounded-lg border border-input px-3.5 py-2.5 text-sm outline-none focus:border-brand-green" />
            <input required placeholder="Mobile number" className="rounded-lg border border-input px-3.5 py-2.5 text-sm outline-none focus:border-brand-green" />
          </div>
          <input
            readOnly
            value={serviceTitle ?? desk.label}
            className="w-full rounded-lg border border-input bg-brand-tint px-3.5 py-2.5 text-sm text-brand-green"
          />
          <textarea
            rows={4}
            placeholder="Tell us briefly what you need help with"
            className="w-full rounded-lg border border-input px-3.5 py-2.5 text-sm outline-none focus:border-brand-green"
          />
          <button
            type="submit"
            className="w-full rounded-full bg-brand-gradient py-3 text-sm font-semibold text-primary-foreground hover:opacity-90"
          >
            Submit Enquiry
          </button>
          {sent && (
            <p className="rounded-lg bg-brand-tint px-4 py-3 text-sm text-brand-green">
              Thank you — your enquiry has reached the {desk.label} desk.
            </p>
          )}
        </form>
      </div>
    </section>
  );
}
