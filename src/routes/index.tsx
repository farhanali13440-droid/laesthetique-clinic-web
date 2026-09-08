import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowRight, Sparkles } from "lucide-react";
import { GoogleReviews } from "@/components/site/GoogleReviews";
import { Reveal } from "@/components/site/Reveal";
import { Gallery } from "@/components/site/Gallery";
import { btnGhost, btnPrimary, SectionHeading } from "@/components/site/ui";
import { clinic, doctors, images, whatsappLink, dentalWhatsappLink } from "@/lib/site";
import { getDentalService } from "@/lib/dental";
import { getTreatment } from "@/lib/treatments";

const title = "La Esthetique Islamabad | Skin, Hair & Dental Care";
const description =
  "La Esthetique in F-11 Markaz, Islamabad brings dermatology, aesthetic and dental care together — Dr. Sumbleen Majid for skin and hair, Dr. Mehwish Zaman for dentistry.";

export const Route = createFileRoute("/")({
  component: Home,
  head: () => ({
    meta: [
      { title },
      { name: "description", content: description },
      {
        name: "keywords",
        content:
          "Dermatologist in Islamabad, skin specialist Islamabad, dentist Islamabad, dental clinic Islamabad, aesthetic clinic Islamabad, HydraFacial Islamabad, dental implants Islamabad, La Esthetique Islamabad, Dr Sumbleen Majid, Dr Mehwish Zaman",
      },
      { property: "og:title", content: title },
      { property: "og:description", content: description },
      { property: "og:type", content: "website" },
      { property: "og:url", content: "/" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
    links: [{ rel: "canonical", href: "/" }],
    scripts: [
      {
        type: "application/ld+json",
        children: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "MedicalBusiness",
          name: "La Esthetique",
          description,
          medicalSpecialty: ["Dermatology", "Dentistry"],
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

const skinFeatured = ["laser-hair-removal", "hydrafacial", "botox", "acne-scar-treatment"];
const dentalFeatured = [
  "teeth-whitening",
  "dental-implants",
  "invisalign",
  "complete-smile-makeover",
];

const journey = ["Skin", "Hair", "Aesthetics", "Smile"];

function Home() {
  const skin = skinFeatured.map((s) => getTreatment(s)).filter(Boolean);
  const dental = dentalFeatured.map((s) => getDentalService(s)).filter(Boolean);

  return (
    <>
      {/* HERO */}
      <section className="bg-sand/50 pt-28 pb-0 lg:pt-36">
        <div className="mx-auto max-w-7xl px-5 text-center lg:px-8">
          <Reveal>
            <p className="eyebrow">La Esthetique · F-11 Markaz, Islamabad</p>
            <h1 className="mt-5 font-display text-4xl leading-[1.1] text-espresso sm:text-5xl lg:text-6xl">
              Your Skin. Your Hair. Your Smile.
            </h1>
            <p className="mx-auto mt-6 max-w-2xl text-base leading-relaxed text-muted-foreground">
              Complete dermatology, aesthetic and dental care in one premium clinic in Islamabad.
            </p>
            <div className="mt-8 flex justify-center">
              <a
                href={whatsappLink}
                target="_blank"
                rel="noopener noreferrer"
                className={btnPrimary}
              >
                Book an Appointment
              </a>
            </div>
          </Reveal>
        </div>

        {/* SPLIT PANELS */}
        <div className="mt-12 grid gap-px bg-espresso/10 lg:mt-16 lg:grid-cols-2">
          <Reveal as="article" className="group flex flex-col bg-background">
            <div className="relative aspect-[4/5] w-full overflow-hidden bg-sand">
              <img
                src={doctors[0].image}
                alt={doctors[0].imageAlt}
                className="h-full w-full object-contain transition-transform duration-700 group-hover:scale-105"
              />
            </div>
            <div className="flex flex-1 flex-col p-6 sm:p-8">
              <p className="eyebrow">Skin &amp; Aesthetics</p>
              <h2 className="mt-3 font-display text-2xl text-espresso sm:text-3xl">
                Dr. Sumbleen Majid
              </h2>
              <p className="mt-2 text-sm text-muted-foreground">
                Dermatology • Skin • Hair • Aesthetics
              </p>
              <Link
                to="/skin-treatments"
                className="mt-auto inline-flex w-full items-center justify-center gap-2 rounded-sm border border-gold px-6 py-3 text-xs uppercase tracking-[0.16em] text-gold transition-colors hover:bg-gold hover:text-espresso sm:mt-7 sm:w-fit"
              >
                Explore Skin &amp; Hair <ArrowRight className="h-4 w-4" />
              </Link>
            </div>
          </Reveal>

          <Reveal
            as="article"
            delay={90}
            className="group flex flex-col bg-background"
          >
            <div className="relative aspect-[4/5] w-full overflow-hidden bg-sand">
              <img
                src={images.drMehwish}
                alt={doctors[1].imageAlt}
                className="h-full w-full object-contain transition-transform duration-700 group-hover:scale-105"
              />
            </div>
            <div className="flex flex-1 flex-col p-6 sm:p-8">
              <p className="eyebrow">Dental Care</p>
              <p className="mt-2 text-sm text-muted-foreground">
                Dentistry • Cosmetic Dentistry • Smile Care
              </p>
              <Link
                to="/dental-services"
                className="mt-auto inline-flex w-full items-center justify-center gap-2 rounded-sm border border-gold px-6 py-3 text-xs uppercase tracking-[0.16em] text-gold transition-colors hover:bg-gold hover:text-espresso sm:mt-7 sm:w-fit"
              >
                Explore Dental Services <ArrowRight className="h-4 w-4" />
              </Link>
            </div>
          </Reveal>
        </div>
      </section>

      {/* TWO SPECIALISTS */}
      <section className="mx-auto max-w-7xl px-5 py-20 lg:px-8 lg:py-28">
        <div className="mx-auto max-w-3xl text-center">
          <Reveal>
            <p className="eyebrow">La Esthetique</p>
            <h2 className="mt-4 font-display text-3xl text-espresso sm:text-4xl">
              Two Specialties. One Trusted Destination.
            </h2>
            <p className="mt-6 leading-relaxed text-muted-foreground">
              La Esthetique brings together advanced dermatology, aesthetic and dental care under
              one roof, with personalized treatment focused on your individual needs.
            </p>
          </Reveal>
        </div>

        <div className="mt-14 grid gap-8 lg:grid-cols-2">
          {doctors.map((d, i) => (
            <Reveal
              as="article"
              key={d.name}
              delay={i * 90}
              className="group grid grid-cols-[minmax(0,1fr)] gap-6 rounded-sm border border-espresso/10 p-6 sm:grid-cols-[9rem_minmax(0,1fr)] sm:items-center sm:p-8"
            >
              <img
                src={d.image}
                alt={d.imageAlt}
                loading="lazy"
                className="aspect-[4/5] w-full rounded-sm bg-sand object-cover object-top sm:h-40 sm:w-36"
              />
              <div className="min-w-0">
                <h3 className="font-display text-2xl text-espresso">{d.name}</h3>
                <p className="mt-1 text-xs uppercase tracking-[0.18em] text-primary">{d.role}</p>
                <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{d.focus}</p>
                <Link
                  to={d.to}
                  className="mt-5 inline-flex items-center gap-2 text-xs uppercase tracking-[0.16em] text-primary"
                >
                  View Doctor Profile{" "}
                  <ArrowRight className="h-3.5 w-3.5 transition-transform group-hover:translate-x-1" />
                </Link>
              </div>
            </Reveal>
          ))}
        </div>
      </section>

      {/* TWO TREATMENT WORLDS */}
      <section className="bg-sand/40 py-20 lg:py-28">
        <div className="mx-auto max-w-7xl px-5 lg:px-8">
          <SectionHeading eyebrow="Explore Our Care" title="Two Worlds of Treatment" />
          <div className="mt-14 space-y-8">
            <Reveal as="article" className="group relative min-h-[26rem] overflow-hidden rounded-sm">
              <img
                src={images.skin}
                alt="Skin, hair and aesthetic treatments at La Esthetique Islamabad"
                loading="lazy"
                className="absolute inset-0 h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-r from-espresso/92 via-espresso/60 to-espresso/20" />
              <div className="relative flex min-h-[26rem] flex-col justify-end p-8 text-background sm:p-12">
                <p className="text-xs uppercase tracking-[0.22em] text-gold">01 —</p>
                <h3 className="mt-3 font-display text-3xl sm:text-4xl">
                  Skin, Hair &amp; Aesthetics
                </h3>
                <p className="mt-4 max-w-lg text-sm leading-relaxed text-background/85">
                  Acne • Pigmentation • Hair Loss • Laser Treatments • Anti-Aging • Facials
                </p>
                <Link
                  to="/skin-treatments"
                  className="mt-7 inline-flex w-fit items-center gap-2 rounded-sm border border-gold px-6 py-3 text-xs uppercase tracking-[0.16em] text-gold transition-colors hover:bg-gold hover:text-espresso"
                >
                  Explore Skin &amp; Hair Treatments <ArrowRight className="h-4 w-4" />
                </Link>
              </div>
            </Reveal>

            <Reveal
              as="article"
              delay={80}
              className="group relative min-h-[26rem] overflow-hidden rounded-sm"
            >
              <img
                src={images.dentalRoom}
                alt="Modern dental treatment room at La Esthetique Islamabad"
                loading="lazy"
                className="absolute inset-0 h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-r from-espresso/92 via-espresso/60 to-espresso/20" />
              <div className="relative flex min-h-[26rem] flex-col justify-end p-8 text-background sm:p-12">
                <p className="text-xs uppercase tracking-[0.22em] text-gold">02 —</p>
                <h3 className="mt-3 font-display text-3xl sm:text-4xl">Dental Care</h3>
                <p className="mt-4 max-w-lg text-sm leading-relaxed text-background/85">
                  Checkups • Implants • Braces • Invisalign • Whitening • Smile Makeovers
                </p>
                <Link
                  to="/dental-services"
                  className="mt-7 inline-flex w-fit items-center gap-2 rounded-sm border border-gold px-6 py-3 text-xs uppercase tracking-[0.16em] text-gold transition-colors hover:bg-gold hover:text-espresso"
                >
                  Explore Dental Services <ArrowRight className="h-4 w-4" />
                </Link>
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* FROM SKIN TO SMILE */}
      <section className="mx-auto max-w-4xl px-5 py-20 text-center lg:py-24">
        <Reveal>
          <Sparkles className="mx-auto h-7 w-7 text-primary" strokeWidth={1.3} />
          <h2 className="mt-6 font-display text-3xl text-espresso sm:text-4xl">
            Complete Care. Beautifully Connected.
          </h2>
          <p className="mt-6 leading-relaxed text-muted-foreground">
            From healthier skin and stronger hair to a confident, healthy smile, La Esthetique
            brings specialized care together in one modern clinic.
          </p>
          <ul className="mt-10 flex flex-wrap items-center justify-center gap-3">
            {journey.map((step, i) => (
              <li key={step} className="flex items-center gap-3">
                <span className="rounded-sm border border-primary/40 px-5 py-2.5 text-xs uppercase tracking-[0.18em] text-espresso">
                  {step}
                </span>
                {i < journey.length - 1 && (
                  <ArrowRight className="h-4 w-4 text-primary" aria-hidden />
                )}
              </li>
            ))}
          </ul>
        </Reveal>
      </section>

      {/* FEATURED TREATMENTS */}
      <section className="bg-sand/40 py-20 lg:py-28">
        <div className="mx-auto max-w-7xl px-5 lg:px-8">
          <SectionHeading eyebrow="Popular Treatments" title="Where Most Patients Begin" />

          <div className="mt-14">
            <div className="grid grid-cols-[minmax(0,1fr)_auto] items-center gap-4">
              <h3 className="truncate font-display text-2xl text-espresso">Skin &amp; Aesthetics</h3>
              <Link
                to="/skin-treatments"
                className="shrink-0 text-xs uppercase tracking-[0.16em] text-primary"
              >
                View All
              </Link>
            </div>
            <div className="mt-6 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
              {skin.map((t, i) => (
                <Reveal as="article" key={t!.slug} delay={i * 70} className="group">
                  <Link
                    to="/treatments/$slug"
                    params={{ slug: t!.slug }}
                    className="block overflow-hidden rounded-sm bg-sand"
                  >
                    <img
                      src={t!.image}
                      alt={t!.imageAlt}
                      loading="lazy"
                      width={960}
                      height={720}
                      className="h-44 w-full object-cover transition-transform duration-700 group-hover:scale-105"
                    />
                  </Link>
                  <h4 className="mt-4 font-display text-lg text-espresso">{t!.name}</h4>
                </Reveal>
              ))}
            </div>
          </div>

          <div className="mt-16">
            <div className="grid grid-cols-[minmax(0,1fr)_auto] items-center gap-4">
              <h3 className="truncate font-display text-2xl text-espresso">Dental</h3>
              <Link
                to="/dental-services"
                className="shrink-0 text-xs uppercase tracking-[0.16em] text-primary"
              >
                View All
              </Link>
            </div>
            <div className="mt-6 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
              {dental.map((s, i) => (
                <Reveal as="article" key={s!.slug} delay={i * 70} className="group">
                  <Link
                    to="/dental-services/$slug"
                    params={{ slug: s!.slug }}
                    className="block overflow-hidden rounded-sm bg-sand"
                  >
                    <img
                      src={s!.image}
                      alt={s!.imageAlt}
                      loading="lazy"
                      width={960}
                      height={720}
                      className="h-44 w-full object-cover transition-transform duration-700 group-hover:scale-105"
                    />
                  </Link>
                  <h4 className="mt-4 font-display text-lg text-espresso">{s!.name}</h4>
                </Reveal>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CLINIC EXPERIENCE */}
      <section className="mx-auto max-w-7xl px-5 py-20 lg:px-8 lg:py-28">
        <SectionHeading
          eyebrow="Clinic Experience"
          title="A Modern Space for Your Care"
          copy="A thoughtfully designed clinical environment where advanced treatment meets personalized attention."
        />
        <Reveal className="mt-12">
          <Gallery
            items={[
              {
                src: images.reception,
                alt: "Reception and waiting lounge at La Esthetique Islamabad",
                caption: "Reception",
              },
              {
                src: images.treatmentRoom,
                alt: "Treatment room at La Esthetique with laser and facial devices",
                caption: "Treatment Room",
              },
              {
                src: images.dentalRoom,
                alt: "Dental treatment room at La Esthetique Islamabad",
                caption: "Dental Room",
              },
              {
                src: images.signage,
                alt: "La Esthetique clinic entrance signage in F-11 Markaz Islamabad",
                caption: "Clinic Entrance",
              },
            ]}
          />
        </Reveal>
        <div className="mt-12 text-center">
          <Link to="/clinic" className={btnGhost}>
            Experience La Esthetique
          </Link>
        </div>
      </section>

      {/* GOOGLE REVIEWS */}
      <GoogleReviews />

      {/* FINAL CTA */}
      <section className="bg-espresso py-20 text-background lg:py-24">
        <div className="mx-auto max-w-3xl px-5 text-center">
          <Reveal>
            <h2 className="font-display text-3xl sm:text-4xl">Ready to Take the Next Step?</h2>
            <p className="mt-5 leading-relaxed text-background/75">
              Book a consultation with the specialist who fits your needs.
            </p>
            <div className="mt-9 flex flex-wrap justify-center gap-3">
              <a
                href={whatsappLink}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 rounded-sm bg-gold px-7 py-3.5 text-sm uppercase tracking-[0.14em] text-espresso transition-opacity hover:opacity-90"
              >
                Dermatology / Aesthetic Consultation
              </a>
              <a
                href={dentalWhatsappLink}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 rounded-sm border border-background/40 px-7 py-3.5 text-sm uppercase tracking-[0.14em] text-background transition-colors hover:bg-background hover:text-espresso"
              >
                Dental Consultation
              </a>
            </div>
          </Reveal>
        </div>
      </section>
    </>
  );
}
