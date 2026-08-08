import { Clock, Mail, MessageCircle, Phone, ArrowLeft, X, CheckCircle2 } from "lucide-react";
import { useState } from "react";
import { SUPPORT_DESKS, type SupportDesk } from "@/data/site";

type Msg = { from: "bot" | "user"; text: string };

const GREETING: Msg = {
  from: "bot",
  text: "Namaste! I'm the NGOGURU assistant. Which support desk would you like to reach?",
};

export function Chatbot() {
  const [open, setOpen] = useState(false);
  const [messages, setMessages] = useState<Msg[]>([GREETING]);
  const [desk, setDesk] = useState<SupportDesk | null>(null);

  const select = (d: SupportDesk) => {
    setDesk(d);
    setMessages((m) => [
      ...m,
      { from: "user", text: d.label },
      {
        from: "bot",
        text: `Connecting you to our ${d.label} desk — here are the direct contact details.`,
      },
    ]);
  };

  const reset = () => {
    setDesk(null);
    setMessages([GREETING]);
  };

  return (
    <>
      <button
        type="button"
        onClick={() => setOpen((v) => !v)}
        aria-label={open ? "Close support chat" : "Open support chat"}
        className="fixed right-4 bottom-4 z-50 flex h-14 w-14 items-center justify-center rounded-full bg-brand-gradient text-primary-foreground shadow-lg transition-transform hover:scale-105 sm:right-6 sm:bottom-6"
      >
        {open ? <X className="h-6 w-6" /> : <MessageCircle className="h-6 w-6" />}
      </button>

      {open && (
        <div className="fixed inset-x-3 bottom-22 z-50 flex max-h-[75vh] flex-col overflow-hidden rounded-2xl border border-border bg-card shadow-2xl sm:inset-x-auto sm:right-6 sm:bottom-24 sm:w-[380px]">
          <div className="flex items-center gap-3 bg-brand-gradient px-4 py-3 text-primary-foreground">
            <span className="flex h-9 w-9 items-center justify-center rounded-full bg-primary-foreground/15 text-[10px] font-bold">
              NGO
            </span>
            <div className="leading-tight">
              <p className="text-sm font-semibold">NGOGURU Support</p>
              <p className="text-[11px] text-primary-foreground/75">
                Typically replies within a working day
              </p>
            </div>
          </div>

          <div className="flex-1 space-y-3 overflow-y-auto bg-brand-tint/50 px-4 py-4">
            {messages.map((m, i) => (
              <div key={i} className={m.from === "user" ? "flex justify-end" : "flex"}>
                <p
                  className={
                    m.from === "user"
                      ? "max-w-[85%] rounded-2xl rounded-br-sm bg-brand-navy px-3.5 py-2 text-sm text-primary-foreground"
                      : "max-w-[85%] rounded-2xl rounded-bl-sm border border-border bg-card px-3.5 py-2 text-sm text-foreground"
                  }
                >
                  {m.text}
                </p>
              </div>
            ))}

            {desk && (
              <div className="rounded-2xl border border-border bg-card p-4">
                <p className="eyebrow">{desk.label}</p>
                <p className="mt-1 font-display text-base font-bold text-brand-navy-deep">
                  {desk.person}
                </p>
                <p className="text-xs text-muted-foreground">{desk.designation}</p>
                <p className="mt-1 text-xs text-muted-foreground">{desk.tagline}</p>

                <div className="mt-3 space-y-2 text-sm">
                  <a
                    href={`tel:${desk.phoneHref}`}
                    className="flex items-center gap-2 rounded-lg bg-brand-green px-3 py-2 font-semibold text-primary-foreground"
                  >
                    <Phone className="h-4 w-4" /> {desk.phone}
                  </a>
                  {desk.altPhone && (
                    <p className="flex items-center gap-2 text-muted-foreground">
                      <Phone className="h-4 w-4" /> {desk.altPhone} (landline)
                    </p>
                  )}
                  <a
                    href={`mailto:${desk.email}`}
                    className="flex items-center gap-2 text-brand-navy underline-offset-2 hover:underline"
                  >
                    <Mail className="h-4 w-4" /> {desk.email}
                  </a>
                  <p className="flex items-center gap-2 text-muted-foreground">
                    <Clock className="h-4 w-4" /> {desk.hours}
                  </p>
                </div>

                <ul className="mt-3 space-y-1.5 border-t border-border pt-3 text-xs text-muted-foreground">
                  {desk.handles.map((h) => (
                    <li key={h} className="flex items-start gap-2">
                      <CheckCircle2 className="mt-0.5 h-3.5 w-3.5 shrink-0 text-brand-green" />
                      {h}
                    </li>
                  ))}
                </ul>
              </div>
            )}
          </div>

          <div className="border-t border-border bg-card px-4 py-3">
            {desk ? (
              <button
                type="button"
                onClick={reset}
                className="flex w-full items-center justify-center gap-2 rounded-full border border-border py-2 text-sm font-semibold text-brand-navy-deep hover:border-brand-green hover:text-brand-green"
              >
                <ArrowLeft className="h-4 w-4" /> Choose another service
              </button>
            ) : (
              <div className="grid gap-2">
                {SUPPORT_DESKS.map((d) => (
                  <button
                    key={d.id}
                    type="button"
                    onClick={() => select(d)}
                    className="rounded-xl border border-border px-3 py-2 text-left text-sm font-semibold text-brand-navy-deep transition-colors hover:border-brand-green hover:bg-brand-tint"
                  >
                    {d.label}
                    <span className="block text-[11px] font-normal text-muted-foreground">
                      {d.tagline}
                    </span>
                  </button>
                ))}
              </div>
            )}
          </div>
        </div>
      )}
    </>
  );
}