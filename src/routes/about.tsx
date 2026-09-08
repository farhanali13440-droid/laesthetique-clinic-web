import { createFileRoute } from "@tanstack/react-router";
import { Reveal } from "@/components/site/Reveal";
import { btnPrimary, CtaBand } from "@/components/site/ui";
import { clinic, images, whatsappLink } from "@/lib/site";

const title = "About Dr. Sumbleen Majid | Dermatologist in Islamabad | La Esthetique";
const description =
  "Meet Dr. Sumbleen Majid, dermatologist at La Esthetique in F-11 Markaz, Islamabad — personalized dermatology, skin, hair and aesthetic care.";

export const Route = createFileRoute("/about")({
  component: About,
  head: () => ({
    meta: [
      { title },
      { name: "description", content: description },
      { property: "og:title", content: title },
      { property: "og:description", content: description },
      { property: "og:type", content: "website" },
      { property: "og:url", content: "/about" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
    links: [{ rel: "canonical", href: "/about" }],
  }),
});

const sections = [
  {
    heading: "Dermatology Expertise",
    copy: "Dr. Sumbleen Majid works across clinical dermatology and medical aesthetics, caring for concerns that range from acne and acne scarring to pigmentation, skin texture, hair thinning and the visible signs of aging.",
  },
  {
    heading: "Treatment Philosophy",
    copy: "Treatment begins with listening. Rather than offering fixed packages, each plan is built around what you are experiencing, what is realistic for your skin, and what you feel comfortable with — always with a restrained, natural-looking result in mind.",
  },
  {
    heading: "Personalized Care",
    copy: "Your assessment, plan and follow-up are handled personally. Progress is reviewed over time and the plan adjusted where needed, so your care continues to reflect your skin and your goals.",
  },
];

function About() {
  return (
    <>
      <section className="bg-sand/50 pt-28 pb-16 lg:pt-36 lg:pb-24">
        <div className="mx-auto grid max-w-7xl items-center gap-14 px-5 lg:grid-cols-[0.9fr_1.1fr] lg:px-8">
          <Reveal className="relative mx-auto w-full max-w-md">
            <div className="absolute -inset-3 rounded-sm border border-primary/35" aria-hidden />
            <img
              src={images.doctor}
              alt="Dr. Sumbleen Majid, dermatologist at La Esthetique, Islamabad"
              className="relative w-full rounded-sm object-cover"
            />
          </Reveal>
          <Reveal delay={100}>
            <p className="eyebrow">About</p>
            <h1 className="rule-gold mt-4 font-display text-4xl text-espresso sm:text-5xl">
              Meet Dr. Sumbleen Majid
            </h1>
            <div className="mt-7 flex flex-wrap gap-3">
              <span className="rounded-sm border border-primary/40 px-4 py-1.5 text-xs uppercase tracking-[0.16em] text-primary">
                Dermatologist
              </span>
              <span className="rounded-sm border border-border px-4 py-1.5 text-xs uppercase tracking-[0.16em] text-muted-foreground">
                La Esthetique, Islamabad
              </span>
            </div>
            <p className="mt-7 leading-relaxed text-muted-foreground">
              Dr. Sumbleen Majid is a dermatologist dedicated to providing personalized care for a
              wide range of skin, hair and aesthetic concerns. At La Esthetique, her approach
              combines clinical dermatology with advanced aesthetic treatments to help patients
              achieve healthy, refreshed and natural-looking results.
            </p>
            <a href={whatsappLink} target="_blank" rel="noopener noreferrer" className={`${btnPrimary} mt-9`}>
              Book an Appointment
            </a>
          </Reveal>
        </div>
      </section>

      <section className="mx-auto max-w-4xl px-5 py-20 lg:py-28">
        <div className="space-y-14">
          {sections.map((s, i) => (
            <Reveal key={s.heading} delay={i * 70}>
              <h2 className="font-display text-2xl text-espresso sm:text-3xl">{s.heading}</h2>
              <p className="mt-4 leading-relaxed text-muted-foreground">{s.copy}</p>
            </Reveal>
          ))}
        </div>

        {/* EDITABLE AREA — add confirmed qualifications, memberships and experience here. */}
        <Reveal className="mt-16 rounded-sm border border-dashed border-primary/40 bg-sand/40 p-8">
          <h2 className="font-display text-2xl text-espresso">Qualifications</h2>
          <p className="mt-4 text-sm leading-relaxed text-muted-foreground">
            This section is reserved for Dr. Sumbleen Majid's degrees, registrations and
            memberships. Share the exact details and they will be listed here.
          </p>
        </Reveal>

        <Reveal className="mt-12 text-sm text-muted-foreground">
          <p>
            La Esthetique · {clinic.address}
          </p>
        </Reveal>
      </section>

      <CtaBand title="Book an Appointment" />
    </>
  );
}
