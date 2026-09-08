import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowRight } from "lucide-react";
import { Reveal } from "@/components/site/Reveal";
import { btnPrimary, CtaBand, DentalServiceCard, SectionHeading } from "@/components/site/ui";
import { dentalWhatsappLink, images } from "@/lib/site";
import { dentalCategories } from "@/lib/dental";

const title = "Dental Services in Islamabad | La Esthetique";
const description =
  "Complete dental care in Islamabad with Dr. Mehwish Zaman at La Esthetique, F-11 Markaz — general, cosmetic, restorative and orthodontic dentistry.";

export const Route = createFileRoute("/dental-services/")({
  component: DentalServices,
  head: () => ({
    meta: [
      { title },
      { name: "description", content: description },
      { property: "og:title", content: title },
      { property: "og:description", content: description },
      { property: "og:type", content: "website" },
      { property: "og:url", content: "/dental-services" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
    links: [{ rel: "canonical", href: "/dental-services" }],
  }),
});

function DentalServices() {
  return (
    <>
      <section className="bg-sand/50 pt-28 pb-16 lg:pt-36 lg:pb-24">
        <div className="mx-auto grid max-w-7xl items-center gap-12 px-5 lg:grid-cols-[1.05fr_0.95fr] lg:px-8">
          <Reveal>
            <p className="eyebrow">Dentistry · Dr. Mehwish Zaman</p>
            <h1 className="rule-gold mt-4 font-display text-4xl text-espresso sm:text-5xl">
              Complete Dental Care in Islamabad
            </h1>
            <p className="mt-7 max-w-xl leading-relaxed text-muted-foreground">
              From routine dental care to restorative, cosmetic and orthodontic treatments, La
              Esthetique provides personalized dental solutions for healthier teeth and confident
              smiles.
            </p>
            <div className="mt-5 space-y-1 text-sm leading-relaxed text-muted-foreground">
              <p>Dr. Mehwish Zaman · Dentist / Aesthetic Physician</p>
              <p>BDS, MDS Res/Endo, C. Implantology, MRCS UK</p>
            </div>
            <a
              href={dentalWhatsappLink}
              target="_blank"
              rel="noopener noreferrer"
              className={`${btnPrimary} mt-9`}
            >
              Book a Dental Appointment
            </a>
          </Reveal>
          <Reveal delay={120}>
            <img
              src={images.drMehwish}
              alt="Dr. Mehwish Zaman, dentist and aesthetic physician at La Esthetique, Islamabad"
              width={769}
              height={1025}
              className="mx-auto aspect-[769/1025] max-h-[42rem] w-full rounded-sm object-contain"
            />
          </Reveal>
        </div>
      </section>

      {dentalCategories.map((category, categoryIndex) => (
        <section
          key={category.slug}
          className={categoryIndex % 2 === 1 ? "bg-sand/40 py-20 lg:py-24" : "py-20 lg:py-24"}
        >
          <div className="mx-auto max-w-7xl px-5 lg:px-8">
            <SectionHeading
              eyebrow="Dental Services"
              title={category.name}
              copy={category.blurb}
            />
            <div className="mt-12 grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
              {category.items.map((service, index) => (
                <DentalServiceCard key={service.slug} {...service} delay={(index % 3) * 60} />
              ))}
            </div>
            {category.note && (
              <Reveal className="mt-10 rounded-sm border border-border bg-card p-6 text-sm leading-relaxed text-muted-foreground">
                {category.note.copy}{" "}
                <Link
                  to="/dental-services/$slug"
                  params={{ slug: category.note.slug }}
                  className="inline-flex items-center gap-2 text-xs uppercase tracking-[0.16em] text-primary"
                >
                  {category.note.label} <ArrowRight className="h-3.5 w-3.5" />
                </Link>
              </Reveal>
            )}
          </div>
        </section>
      ))}

      <CtaBand
        title="Book a Dental Appointment"
        copy="Discuss your dental concern with Dr. Mehwish Zaman at La Esthetique, F-11 Markaz, Islamabad."
      />
    </>
  );
}
