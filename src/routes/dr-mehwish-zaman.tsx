import { createFileRoute, Link } from "@tanstack/react-router";
import { MessageCircle } from "lucide-react";
import { Reveal } from "@/components/site/Reveal";
import { btnGhost, btnPrimary, CtaBand } from "@/components/site/ui";
import { clinic, dentalWhatsappLink, images, mehwishProfile, whatsappLink } from "@/lib/site";

const title = "Dr. Mehwish Zaman | Dentist in Islamabad | La Esthetique";
const description =
  "Meet Dr. Mehwish Zaman, dentist at La Esthetique in F-11 Markaz, Islamabad — personalized general, cosmetic, restorative and orthodontic dental care.";

export const Route = createFileRoute("/dr-mehwish-zaman")({
  component: DrMehwish,
  head: () => ({
    meta: [
      { title },
      { name: "description", content: description },
      { property: "og:title", content: title },
      { property: "og:description", content: description },
      { property: "og:type", content: "website" },
      { property: "og:url", content: "/dr-mehwish-zaman" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
    links: [{ rel: "canonical", href: "/dr-mehwish-zaman" }],
    scripts: [
      {
        type: "application/ld+json",
        children: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "Dentist",
          name: "Dr. Mehwish Zaman — La Esthetique",
          description,
          telephone: clinic.phoneTel,
          address: {
            "@type": "PostalAddress",
            streetAddress: "Office No. 12 & 13, Lord Trade Center, Above Najeeb Pharmacy",
            addressLocality: "F-11 Markaz, Islamabad",
            postalCode: "44000",
            addressCountry: "PK",
          },
          sameAs: [clinic.facebook, clinic.instagram],
        }),
      },
    ],
  }),
});

const profileFields = [
  { label: "Qualifications", value: mehwishProfile.qualifications },
  { label: "Certifications", value: mehwishProfile.certifications },
  { label: "Experience", value: mehwishProfile.experience },
  { label: "Areas of Focus", value: mehwishProfile.specializations },
  { label: "Professional Memberships", value: mehwishProfile.memberships },
].filter((f) => f.value.trim().length > 0);

const sections = [
  {
    heading: "Dental Care at La Esthetique",
    copy: "Dr. Mehwish Zaman provides dental care at La Esthetique in F-11 Markaz, Islamabad, across general, cosmetic, restorative and orthodontic dentistry. Care begins with an examination and a clear explanation of what is found, so you understand your options before anything is decided.",
  },
  {
    heading: "Treatment Philosophy",
    copy: "Personalized dental care designed around each patient's oral health needs, concerns and goals.",
  },
  {
    heading: "Comprehensive Oral Health",
    copy: "Rather than looking at a single tooth in isolation, treatment considers your teeth, gums and bite together — supporting comfortable everyday function alongside the appearance of your smile.",
  },
];

function DrMehwish() {
  return (
    <>
      <section className="bg-sand/50 pt-28 pb-16 lg:pt-36 lg:pb-24">
        <div className="mx-auto grid max-w-7xl items-center gap-14 px-5 lg:grid-cols-[0.9fr_1.1fr] lg:px-8">
          <Reveal className="relative mx-auto w-full max-w-md">
            <div className="absolute -inset-3 rounded-sm border border-primary/35" aria-hidden />
            <img
              src={images.drMehwish}
              alt="Professional photo placeholder for Dr. Mehwish Zaman, dentist at La Esthetique, Islamabad"
              width={960}
              height={1200}
              className="relative w-full rounded-sm object-cover"
            />
          </Reveal>
          <Reveal delay={100}>
            <p className="eyebrow">Dentistry</p>
            <h1 className="rule-gold mt-4 font-display text-4xl text-espresso sm:text-5xl">
              Dr. Mehwish Zaman
            </h1>
            <p className="mt-5 text-sm uppercase tracking-[0.18em] text-muted-foreground">
              Dentist at La Esthetique, Islamabad
            </p>
            <p className="mt-7 max-w-xl leading-relaxed text-muted-foreground">
              Providing personalized dental care focused on healthy teeth, comfortable treatment and
              confident smiles.
            </p>
            <div className="mt-9 flex flex-wrap gap-3">
              <a
                href={dentalWhatsappLink}
                target="_blank"
                rel="noopener noreferrer"
                className={btnPrimary}
              >
                Book a Dental Appointment
              </a>
              <a
                href={whatsappLink}
                target="_blank"
                rel="noopener noreferrer"
                className={btnGhost}
              >
                <MessageCircle className="h-4 w-4" /> WhatsApp Us
              </a>
            </div>
          </Reveal>
        </div>
      </section>

      <section className="mx-auto max-w-4xl px-5 py-20 lg:py-24">
        <Reveal>
          <h2 className="rule-gold font-display text-3xl text-espresso sm:text-4xl">
            Meet Dr. Mehwish Zaman
          </h2>
          <p className="mt-7 leading-relaxed text-muted-foreground">
            Dr. Mehwish Zaman looks after the dental side of La Esthetique, caring for patients
            across preventive, restorative, cosmetic and orthodontic dentistry. Her approach is
            unhurried and practical: understand the concern, examine carefully, explain the findings
            in plain language, and plan treatment around what matters to the patient.
          </p>
        </Reveal>

        <div className="mt-14 space-y-12">
          {sections.map((s, i) => (
            <Reveal key={s.heading} delay={i * 70}>
              <h3 className="font-display text-2xl text-espresso">{s.heading}</h3>
              <p className="mt-4 leading-relaxed text-muted-foreground">{s.copy}</p>
            </Reveal>
          ))}
        </div>

        {profileFields.length > 0 && (
          <Reveal className="mt-14 rounded-sm border border-border bg-card p-8">
            <h3 className="font-display text-2xl text-espresso">Professional Details</h3>
            <dl className="mt-6 space-y-4 text-sm">
              {profileFields.map((f) => (
                <div key={f.label}>
                  <dt className="text-xs uppercase tracking-[0.16em] text-muted-foreground">
                    {f.label}
                  </dt>
                  <dd className="mt-1 leading-relaxed text-foreground/85">{f.value}</dd>
                </div>
              ))}
            </dl>
          </Reveal>
        )}

        <Reveal className="mt-14">
          <Link to="/dental-services" className={btnGhost}>
            Explore Dental Services
          </Link>
        </Reveal>
      </section>

      <CtaBand
        title="Book a Dental Appointment"
        copy="Speak with Dr. Mehwish Zaman at La Esthetique, F-11 Markaz, Islamabad."
      />
    </>
  );
}
