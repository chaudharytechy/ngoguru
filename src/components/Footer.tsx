import { Link } from "@tanstack/react-router";
import { Facebook, Instagram, Linkedin, Play, Youtube } from "lucide-react";
import { CONTACT } from "@/data/site";

export function Footer() {
  return (
    <footer className="bg-brand-navy-deep text-primary-foreground">
      <div className="mx-auto grid max-w-7xl gap-10 px-4 py-14 sm:px-6 md:grid-cols-3">
        <div>
          <h3 className="text-xs font-bold tracking-[0.18em] text-brand-green-soft uppercase">
            About NGOGURU
          </h3>
          <div className="mt-3 h-0.5 w-10 bg-brand-green" />
          <p className="mt-4 text-sm leading-relaxed text-primary-foreground/75">
            NGOGURU's expert team of CAs, CS, Advocates, MBAs and Technocrats works with up-to-date
            knowledge of Government Grants, Projects and Foreign Contribution regulation — helping
            mission-driven organisations register, comply and grow with confidence.
          </p>
          <div className="mt-5 flex gap-2">
            {[Facebook, Instagram, Linkedin, Youtube].map((Icon, i) => (
              <span
                key={i}
                className="flex h-9 w-9 items-center justify-center rounded-md bg-primary-foreground/10 transition-colors hover:bg-brand-green"
              >
                <Icon className="h-4 w-4" />
              </span>
            ))}
          </div>
        </div>

        <div>
          <h3 className="text-xs font-bold tracking-[0.18em] text-brand-green-soft uppercase">
            Location & Contact
          </h3>
          <div className="mt-3 h-0.5 w-10 bg-brand-green" />
          <address className="mt-4 space-y-2 text-sm not-italic text-primary-foreground/75">
            <p>{CONTACT.address}</p>
            <p>
              <a className="hover:text-brand-green-soft" href={`mailto:${CONTACT.email}`}>
                {CONTACT.email}
              </a>
            </p>
            <p>
              <a className="hover:text-brand-green-soft" href={`tel:${CONTACT.phoneHref}`}>
                {CONTACT.phone}
              </a>
            </p>
          </address>
          <div className="mt-5 flex flex-wrap gap-4 text-sm text-primary-foreground/70">
            <Link to="/services" className="hover:text-brand-green-soft">
              Services
            </Link>
            <Link to="/grants" className="hover:text-brand-green-soft">
              Grants
            </Link>
            <Link to="/contact" className="hover:text-brand-green-soft">
              Contact
            </Link>
          </div>
        </div>

        <div>
          <h3 className="text-xs font-bold tracking-[0.18em] text-brand-green-soft uppercase">
            Subscribe on YouTube
          </h3>
          <div className="mt-3 h-0.5 w-10 bg-brand-green" />
          <div className="mt-4 flex items-center gap-3 rounded-lg bg-primary-foreground/10 p-3">
            <span className="flex h-9 w-12 items-center justify-center rounded-md bg-brand-green">
              <Play className="h-4 w-4" />
            </span>
            <span className="text-sm text-primary-foreground/85">
              Ways for NGO Funding — a quick primer
            </span>
          </div>
          <p className="mt-4 text-sm text-primary-foreground/70">
            NGOGURU Pvt Ltd — CA Rajesh Verma (Founder)
          </p>
        </div>
      </div>

      <div className="border-t border-primary-foreground/10">
        <div className="mx-auto flex max-w-7xl flex-col gap-2 px-4 py-5 text-xs text-primary-foreground/60 sm:flex-row sm:items-center sm:justify-between sm:px-6">
          <p>Copyright © 2026, NGOGURU Pvt. Ltd. All Rights Reserved.</p>
          <p>Crafted with care for the NGO sector</p>
        </div>
      </div>
    </footer>
  );
}