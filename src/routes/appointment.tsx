import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import { PageHero } from "@/components/PageHero";
import { SERVICES } from "@/data/site";
import { FounderHighlight } from "@/components/FounderHighlight";

const title = "Book an Appointment with NGOGURU Consultants";
const description =
  "Schedule a consultation with NGOGURU's CA, CS and legal specialists for your NGO's registration, compliance or funding needs.";

export const Route = createFileRoute("/appointment")({
  head: () => ({
    meta: [
      { title },
      { name: "description", content: description },
      { property: "og:title", content: title },
      { property: "og:description", content: description },
    ],
  }),
  component: Appointment,
});

function Appointment() {
  const [booked, setBooked] = useState(false);

  return (
    <>
      <PageHero
        eyebrow="Book a Slot"
        title="Appointment"
        subtitle="Pick a service and a preferred time — our team confirms your slot by phone within one working day."
        breadcrumb="Home / Appointment"
      />
      <section className="mx-auto max-w-3xl px-4 py-16 sm:px-6">
        <form
          className="card-surface space-y-4 p-6 sm:p-8"
          onSubmit={(e) => {
            e.preventDefault();
            setBooked(true);
          }}
        >
          <div className="grid gap-4 sm:grid-cols-2">
            <input required placeholder="Full name" className="rounded-lg border border-input px-3.5 py-2.5 text-sm outline-none focus:border-brand-green" />
            <input required placeholder="Organisation name" className="rounded-lg border border-input px-3.5 py-2.5 text-sm outline-none focus:border-brand-green" />
            <input required type="email" placeholder="Email" className="rounded-lg border border-input px-3.5 py-2.5 text-sm outline-none focus:border-brand-green" />
            <input required placeholder="Mobile number" className="rounded-lg border border-input px-3.5 py-2.5 text-sm outline-none focus:border-brand-green" />
            <select required defaultValue="" className="rounded-lg border border-input px-3.5 py-2.5 text-sm outline-none focus:border-brand-green">
              <option value="" disabled>
                Select service
              </option>
              {SERVICES.map((s) => (
                <option key={s.slug}>{s.title}</option>
              ))}
            </select>
            <input required type="date" className="rounded-lg border border-input px-3.5 py-2.5 text-sm text-foreground outline-none focus:border-brand-green" />
          </div>
          <textarea rows={4} placeholder="Anything we should know before the call?" className="w-full rounded-lg border border-input px-3.5 py-2.5 text-sm outline-none focus:border-brand-green" />
          <button
            type="submit"
            className="w-full rounded-full bg-brand-gradient py-3 text-sm font-semibold text-primary-foreground hover:opacity-90"
          >
            Request Appointment
          </button>
          {booked && (
            <p className="rounded-lg bg-brand-tint px-4 py-3 text-sm text-brand-green">
              Appointment request received — we'll confirm your slot shortly.
            </p>
          )}
        </form>
      </section>
      <FounderHighlight compact />
    </>
  );
}