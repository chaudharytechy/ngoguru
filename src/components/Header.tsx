import { Link } from "@tanstack/react-router";
import { Mail, MapPin, Menu, Phone, X } from "lucide-react";
import { useState } from "react";
import { CONTACT, NAV_LINKS, TICKER } from "@/data/site";
import { Logo } from "./Logo";

export function Header() {
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-40">
      <div className="hidden bg-brand-navy-deep text-primary-foreground/85 lg:block">
        <div className="mx-auto flex max-w-7xl flex-wrap items-center justify-between gap-3 px-6 py-2 text-xs">
          <div className="flex items-center gap-6">
            <a className="flex items-center gap-1.5 hover:text-brand-green-soft" href={`mailto:${CONTACT.email}`}>
              <Mail className="h-3.5 w-3.5" /> {CONTACT.email}
            </a>
            <a className="flex items-center gap-1.5 hover:text-brand-green-soft" href={`tel:${CONTACT.phoneHref}`}>
              <Phone className="h-3.5 w-3.5" /> {CONTACT.phone}
            </a>
          </div>
          <span className="flex items-center gap-1.5">
            <MapPin className="h-3.5 w-3.5" /> {CONTACT.addressShort}
          </span>
        </div>
      </div>

      <div className="border-b border-border bg-background/95 backdrop-blur">
        <div className="mx-auto flex max-w-7xl items-center justify-between gap-4 px-4 py-3 sm:px-6">
          <Link to="/" onClick={() => setOpen(false)}>
            <Logo />
          </Link>

          <nav className="hidden items-center gap-5 xl:flex">
            {NAV_LINKS.map((l) => (
              <Link
                key={l.to}
                to={l.to}
                activeOptions={{ exact: l.to === "/" }}
                className="text-sm font-medium text-foreground/75 transition-colors hover:text-brand-green [&.active]:text-brand-navy-deep [&.active]:font-semibold"
              >
                {l.label}
              </Link>
            ))}
          </nav>

          <div className="flex items-center gap-2">
            <Link
              to="/appointment"
              className="hidden rounded-full border border-border px-4 py-2 text-sm font-semibold text-brand-navy-deep transition-colors hover:border-brand-green hover:text-brand-green md:inline-flex"
            >
              Appointment
            </Link>
            <Link
              to="/signin"
              className="hidden rounded-full bg-brand-gradient px-5 py-2 text-sm font-semibold text-primary-foreground shadow-sm transition-opacity hover:opacity-90 sm:inline-flex"
            >
              Sign In
            </Link>
            <button
              type="button"
              aria-label={open ? "Close menu" : "Open menu"}
              onClick={() => setOpen((v) => !v)}
              className="rounded-md border border-border p-2 text-brand-navy-deep xl:hidden"
            >
              {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
            </button>
          </div>
        </div>

        {open && (
          <div className="border-t border-border bg-background xl:hidden">
            <nav className="mx-auto flex max-w-7xl flex-col px-4 py-2 sm:px-6">
              {NAV_LINKS.map((l) => (
                <Link
                  key={l.to}
                  to={l.to}
                  activeOptions={{ exact: l.to === "/" }}
                  onClick={() => setOpen(false)}
                  className="border-b border-border/60 py-3 text-sm font-medium text-foreground/80 last:border-0 [&.active]:text-brand-green"
                >
                  {l.label}
                </Link>
              ))}
              <div className="flex gap-2 py-3">
                <Link
                  to="/appointment"
                  onClick={() => setOpen(false)}
                  className="flex-1 rounded-full border border-border px-4 py-2 text-center text-sm font-semibold text-brand-navy-deep"
                >
                  Appointment
                </Link>
                <Link
                  to="/signin"
                  onClick={() => setOpen(false)}
                  className="flex-1 rounded-full bg-brand-gradient px-4 py-2 text-center text-sm font-semibold text-primary-foreground"
                >
                  Sign In
                </Link>
              </div>
            </nav>
          </div>
        )}
      </div>

      <div className="overflow-hidden border-b border-border bg-brand-tint py-2">
        <div className="mx-auto flex max-w-7xl items-center gap-3 px-4 sm:px-6">
          <span className="hidden shrink-0 rounded-full bg-brand-green px-2.5 py-0.5 text-[10px] font-bold tracking-widest text-primary-foreground sm:inline">
            LATEST
          </span>
          <div className="relative flex-1 overflow-hidden">
            <div className="marquee-track text-xs text-brand-navy-deep/80">
              {[...TICKER, ...TICKER].map((t, i) => (
                <span key={i}>{t}</span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}