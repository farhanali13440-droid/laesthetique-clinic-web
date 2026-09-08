import { createFileRoute } from "@tanstack/react-router";
import { Phone, MessageCircle, MapPin, Facebook, Instagram } from "lucide-react";
import { Reveal } from "@/components/site/Reveal";
import { btnPrimary } from "@/components/site/ui";
import { clinic, whatsappLink } from "@/lib/site";

const title = "Book an Appointment | Dermatologist in Islamabad | La Esthetique";
const description =
  "Book a consultation with Dr. Sumbleen Majid at La Esthetique, Office 12 & 13 Lord Trade Center, F-11 Markaz, Islamabad. Call or WhatsApp 0300 5013111.";

export const Route = createFileRoute("/contact")({
  component: Contact,
  head: () => ({
    meta: [
      { title },
      { name: "description", content: description },
      { property: "og:title", content: title },
      { property: "og:description", content: description },
      { property: "og:type", content: "website" },
      { property: "og:url", content: "/contact" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
    links: [{ rel: "canonical", href: "/contact" }],
  }),
});

function Contact() {
  return (
    <>
      <section className="bg-sand/50 pt-28 pb-14 lg:pt-36 lg:pb-20">
        <div className="mx-auto max-w-3xl px-5 text-center">
          <Reveal>
            <p className="eyebrow">Appointments</p>
            <h1 className="mt-4 font-display text-4xl text-espresso sm:text-5xl">
              Book Your Consultation
            </h1>
            <p className="mt-6 leading-relaxed text-muted-foreground">
              Request an appointment directly through WhatsApp, or call the clinic to speak with the team.
            </p>
          </Reveal>
        </div>
      </section>

      <section className="mx-auto grid max-w-7xl gap-14 px-5 py-20 lg:grid-cols-[1fr_1fr] lg:px-8 lg:py-24">
        <Reveal>
          <div className="space-y-3">
            <a
              href={`tel:${clinic.phoneTel}`}
              className="flex items-center gap-3 rounded-sm border border-border bg-card px-5 py-4 transition-colors hover:border-primary/50"
            >
              <Phone className="h-5 w-5 text-primary" />
              <span className="text-sm">Call: {clinic.phoneDisplay}</span>
            </a>
            <a
              href={whatsappLink}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-3 rounded-sm border border-border bg-card px-5 py-4 transition-colors hover:border-primary/50"
            >
              <MessageCircle className="h-5 w-5 text-primary" />
              <span className="text-sm">WhatsApp: {clinic.phoneDisplay}</span>
            </a>
            <p className="flex items-start gap-3 rounded-sm border border-border bg-card px-5 py-4 text-sm text-muted-foreground">
              <MapPin className="mt-0.5 h-5 w-5 shrink-0 text-primary" />
              {clinic.address}
            </p>
          </div>

          <div className="mt-7 overflow-hidden rounded-sm border border-border">
            <iframe
              title="Map showing La Esthetique in F-11 Markaz, Islamabad"
              src="https://www.google.com/maps?q=Lord%20Trade%20Center%20F-11%20Markaz%20Islamabad&output=embed"
              className="h-80 w-full"
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
          </div>

          <div className="mt-8">
            <p className="eyebrow">Follow Us</p>
            <div className="mt-3 flex flex-col gap-2 text-sm">
              <a
                href={clinic.facebook}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 text-muted-foreground hover:text-primary"
              >
                <Facebook className="h-4 w-4" /> La Esthetique Islamabad
              </a>
              <a
                href={clinic.instagram}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 text-muted-foreground hover:text-primary"
              >
                <Instagram className="h-4 w-4" /> @laesthetique.isb
              </a>
            </div>
          </div>
        </Reveal>

        <Reveal delay={100} className="flex flex-col justify-center bg-sand/40 p-8 lg:p-12">
          <h2 className="font-display text-2xl text-espresso">Request an Appointment</h2>
          <p className="mt-4 leading-relaxed text-muted-foreground">Open a WhatsApp chat with La Esthetique to ask for the available date and time. You can review the message before sending it.</p>
          <a href={whatsappLink} target="_blank" rel="noopener noreferrer" className={`${btnPrimary} mt-7 self-start`}>
            <MessageCircle className="h-4 w-4" /> Request Appointment
          </a>
        </Reveal>
      </section>
    </>
  );
}
