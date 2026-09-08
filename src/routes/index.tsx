
import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowRight, MessageCircle, Sparkles, HeartHandshake, Stethoscope, Leaf } from "lucide-react";
import { GoogleReviews } from "@/components/site/GoogleReviews";
import { Reveal } from "@/components/site/Reveal";
import { Gallery } from "@/components/site/Gallery";
import { btnGhost, btnPrimary, CtaBand, SectionHeading } from "@/components/site/ui";
import { clinic, doctors, images, whatsappLink } from "@/lib/site";
import { featuredDentalSlugs, getDentalService } from "@/lib/dental";

const title = "Dr. Sumbleen Majid | Dermatologist in Islamabad | La Esthetique";
const description =
  "Consult Dr. Sumbleen Majid at La Esthetique, Islamabad for personalized dermatology, skin, hair and aesthetic treatments in F-11 Markaz.";

export const Route = createFileRoute("/")({
  component: Home,
  head: () => ({
    meta: [
      { title },
      { name: "description", content: description },
      {
        name: "keywords",
        content:
          "Dermatologist in Islamabad, skin specialist Islamabad, aesthetic clinic Islamabad, dermatology clinic Islamabad, laser treatments Islamabad, acne scar treatment Islamabad, Botox Islamabad, HydraFacial Islamabad, La Esthetique Islamabad, Dr Sumbleen Majid",
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
          name: "La Esthetique — Dr. Sumbleen Majid",
          description,
          medicalSpecialty: "Dermatology",
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

const whyPoints = [
  {
    icon: HeartHandshake,
    title: "Personalized Care",
    copy: "Treatment plans tailored to your skin, hair and aesthetic concerns.",
  },
  {
    icon: Stethoscope,
    title: "Advanced Treatments",
    copy: "Modern dermatology and aesthetic techniques selected according to your needs.",
  },
  {
    icon: Leaf,
    title: "Natural-Looking Approach",
    copy: "A focus on balanced, refreshed and natural-looking aesthetic enhancement.",
  },
  {
    icon: Sparkles,
    title: "Comfortable Experience",
    copy: "A calm, professional clinic environment designed around patient comfort.",
  },
];


function Home() {
  return (
    <>
      {/* HERO */}
      <section className="relative bg-sand/50 pt-28 pb-16 lg:pt-36 lg:pb-24">
        <div className="mx-auto grid max-w-7xl items-center gap-12 px-5 lg:grid-cols-[1.05fr_0.95fr] lg:px-8">
          <Reveal>
            <p className="eyebrow">La Esthetique · F-11 Markaz, Islamabad</p>
            <h1 className="mt-5 font-display text-4xl leading-[1.1] text-espresso sm:text-5xl lg:text-6xl">
              Expert Dermatology &amp; Aesthetic Care in Islamabad
            </h1>
            <p className="mt-6 max-w-xl text-base leading-relaxed text-muted-foreground">
              Personalized skin, hair and aesthetic treatments designed around your individual
              needs, with care you can trust.
            </p>
            <div className="mt-9 flex flex-wrap gap-3">
              <a href={whatsappLink} target="_blank" rel="noopener noreferrer" className={btnPrimary}>
                Book an Appointment
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
            <p className="mt-10 text-xs uppercase tracking-[0.2em] text-muted-foreground">
              Dermatology • Skin Health • Hair Care • Aesthetic Treatments
            </p>
          </Reveal>

          <Reveal delay={120} className="relative mx-auto w-full max-w-md">
            <div className="absolute -inset-3 rounded-sm border border-primary/35" aria-hidden />
            <img
              src={images.doctor}
              alt="Dr. Sumbleen Majid, dermatologist at La Esthetique Islamabad"
              className="relative w-full rounded-sm object-cover"
            />
          </Reveal>
        </div>
      </section>

      {/* INTRO */}
      <section className="mx-auto max-w-4xl px-5 py-20 text-center lg:py-24">
        <Reveal>
          <p className="eyebrow">Welcome</p>
          <h2 className="mt-4 font-display text-3xl text-espresso sm:text-4xl">
            Where Skin Health Meets Aesthetic Expertise
          </h2>
          <p className="mt-7 leading-relaxed text-muted-foreground">
            At La Esthetique, Dr. Sumbleen Majid provides personalized dermatology and aesthetic
            care focused on healthier-looking skin, hair and natural-looking enhancement. Every
            treatment begins with understanding your concerns and creating a plan suited to you.
          </p>
          <p className="mt-5 leading-relaxed text-muted-foreground">
            The clinic brings together two areas of expertise under one roof: dermatology and
            aesthetics with Dr. Sumbleen Majid, and dentistry with Dr. Mehwish Zaman.
          </p>
        </Reveal>
      </section>

      {/* TREATMENT PREVIEW */}
      <section className="bg-sand/40 py-20 lg:py-28">
        <div className="mx-auto max-w-7xl px-5 lg:px-8">
          <SectionHeading eyebrow="Our Treatments" title="Personalized Care, Clearly Organized" />
          <div className="mt-14 grid gap-8 lg:grid-cols-2">
            <Reveal as="article" className="group relative min-h-[28rem] overflow-hidden rounded-sm">
              <img src={images.skin} alt="Skin treatments at La Esthetique" loading="lazy" className="absolute inset-0 h-full w-full object-cover transition-transform duration-700 group-hover:scale-105" />
              <div className="absolute inset-0 bg-gradient-to-t from-espresso/90 via-espresso/30 to-transparent" />
              <div className="relative flex min-h-[28rem] flex-col justify-end p-8 text-background sm:p-10">
                <h3 className="font-display text-3xl">Skin Treatments</h3>
                <p className="mt-3 max-w-md text-sm leading-relaxed text-background/80">Explore advanced dermatology, skin rejuvenation, laser and aesthetic treatments.</p>
                <Link to="/skin-treatments" className="mt-7 inline-flex items-center gap-2 text-xs uppercase tracking-[0.16em] text-gold">Explore Treatments <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" /></Link>
              </div>
            </Reveal>
            <Reveal as="article" delay={90} className="group relative min-h-[28rem] overflow-hidden rounded-sm">
              <img src={images.hair} alt="Hair and scalp treatments at La Esthetique" loading="lazy" className="absolute inset-0 h-full w-full object-cover transition-transform duration-700 group-hover:scale-105" />
              <div className="absolute inset-0 bg-gradient-to-t from-espresso/90 via-espresso/30 to-transparent" />
              <div className="relative flex min-h-[28rem] flex-col justify-end p-8 text-background sm:p-10">
                <h3 className="font-display text-3xl">Hair Treatments</h3>
                <p className="mt-3 max-w-md text-sm leading-relaxed text-background/80">Explore personalized treatments for hair loss, thinning and scalp health.</p>
                <Link to="/hair-treatments" className="mt-7 inline-flex items-center gap-2 text-xs uppercase tracking-[0.16em] text-gold">Explore Treatments <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" /></Link>
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* WHY */}
      <section className="mx-auto max-w-7xl px-5 py-20 lg:px-8 lg:py-28">
        <SectionHeading eyebrow="The Difference" title="Why La Esthetique" />
        <div className="mt-14 grid gap-10 sm:grid-cols-2 lg:grid-cols-4">
          {whyPoints.map((p, i) => (
            <Reveal key={p.title} delay={i * 80}>
              <p.icon className="h-7 w-7 text-primary" strokeWidth={1.3} />
              <h3 className="mt-5 font-display text-xl text-espresso">{p.title}</h3>
              <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{p.copy}</p>
            </Reveal>
          ))}
        </div>
      </section>

      {/* DOCTOR HIGHLIGHT */}
      <section className="bg-sand/50 py-20 lg:py-28">
        <div className="mx-auto grid max-w-7xl items-center gap-14 px-5 lg:grid-cols-[0.85fr_1.15fr] lg:px-8">
          <Reveal className="mx-auto w-full max-w-sm">
            <img
              src={images.doctor}
              alt="Portrait of Dr. Sumbleen Majid, dermatologist in Islamabad"
              loading="lazy"
              className="w-full rounded-sm object-cover"
            />
          </Reveal>
          <Reveal delay={100}>
            <p className="eyebrow">The Doctor</p>
            <h2 className="rule-gold mt-4 font-display text-3xl text-espresso sm:text-4xl">
              Dr. Sumbleen Majid
            </h2>
            <p className="mt-7 leading-relaxed text-muted-foreground">
              A dermatologist dedicated to personalized care across skin, hair and aesthetic
              concerns — combining clinical dermatology with advanced aesthetic treatments for
              healthy, refreshed and natural-looking results.
            </p>
            <Link to="/about" className={`${btnGhost} mt-9`}>
              Meet Dr. Sumbleen
            </Link>
          </Reveal>
        </div>
      </section>

      {/* CLINIC PREVIEW */}
      <section className="mx-auto max-w-7xl px-5 py-20 lg:px-8 lg:py-28">
        <SectionHeading eyebrow="The Clinic" title="A Space Designed Around You" />
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
                src: images.signage,
                alt: "La Esthetique clinic entrance signage in F-11 Markaz Islamabad",
                caption: "Clinic Entrance",
              },
              {
                src: images.care,
                alt: "Skincare products used during treatments at La Esthetique",
                caption: "Clinic Environment",
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

      {/* DENTAL DEPARTMENT */}
      <section className="bg-sand/40 py-20 lg:py-28">
        <div className="mx-auto max-w-7xl px-5 lg:px-8">
          <div className="grid items-center gap-14 lg:grid-cols-[0.85fr_1.15fr]">
            <Reveal className="relative mx-auto w-full max-w-sm">
              <div className="absolute -inset-3 rounded-sm border border-primary/35" aria-hidden />
              <img
                src={images.drMehwish}
                alt="Professional photo placeholder for Dr. Mehwish Zaman, dentist at La Esthetique"
                loading="lazy"
                width={960}
                height={1200}
                className="relative w-full rounded-sm object-cover"
              />
            </Reveal>
            <Reveal delay={100}>
              <p className="eyebrow">Dentistry</p>
              <h2 className="rule-gold mt-4 font-display text-3xl text-espresso sm:text-4xl">
                Comprehensive Dental Care at La Esthetique
              </h2>
              <p className="mt-7 leading-relaxed text-muted-foreground">
                Dr. Mehwish Zaman provides personalized dental care, from preventive and restorative
                dentistry to cosmetic and orthodontic treatments.
              </p>
              <div className="mt-9 flex flex-wrap gap-3">
                <Link to="/dental-services" className={btnPrimary}>
                  Explore Dental Services
                </Link>
                <Link to="/dr-mehwish-zaman" className={btnGhost}>
                  Meet Dr. Mehwish
                </Link>
              </div>
            </Reveal>
          </div>

          <div className="mt-16 grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
            {featuredDentalSlugs.map((slug, i) => {
              const service = getDentalService(slug);
              if (!service) return null;
              return (
                <Reveal as="article" key={slug} delay={i * 70} className="group">
                  <Link
                    to="/dental-services/$slug"
                    params={{ slug }}
                    className="block overflow-hidden rounded-sm bg-sand"
                  >
                    <img
                      src={service.image}
                      alt={service.imageAlt}
                      loading="lazy"
                      width={960}
                      height={720}
                      className="h-48 w-full object-cover transition-transform duration-700 group-hover:scale-105"
                    />
                  </Link>
                  <h3 className="mt-4 font-display text-xl text-espresso">{service.name}</h3>
                  <Link
                    to="/dental-services/$slug"
                    params={{ slug }}
                    className="mt-3 inline-flex items-center gap-2 text-xs uppercase tracking-[0.16em] text-primary"
                  >
                    Learn More <ArrowRight className="h-3.5 w-3.5" />
                  </Link>
                </Reveal>
              );
            })}
          </div>
        </div>
      </section>

      {/* MEET OUR DOCTORS */}
      <section className="mx-auto max-w-7xl px-5 py-20 lg:px-8 lg:py-28">
        <SectionHeading eyebrow="La Esthetique" title="Meet Our Doctors" />
        <div className="mt-14 grid gap-10 lg:grid-cols-2">
          {doctors.map((d, i) => (
            <Reveal as="article" key={d.name} delay={i * 90} className="group">
              <Link to={d.to} className="block overflow-hidden rounded-sm bg-sand">
                <img
                  src={d.image}
                  alt={d.imageAlt}
                  loading="lazy"
                  className="h-[26rem] w-full object-cover object-top transition-transform duration-700 group-hover:scale-105"
                />
              </Link>
              <h3 className="mt-6 font-display text-2xl text-espresso">{d.name}</h3>
              <p className="mt-1 text-sm uppercase tracking-[0.18em] text-primary">{d.role}</p>
              <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{d.focus}</p>
              <Link
                to={d.to}
                className="mt-5 inline-flex items-center gap-2 text-xs uppercase tracking-[0.16em] text-primary"
              >
                View Profile{" "}
                <ArrowRight className="h-3.5 w-3.5 transition-transform group-hover:translate-x-1" />
              </Link>
            </Reveal>
          ))}
        </div>
      </section>

      {/* GOOGLE REVIEWS */}
      <GoogleReviews />

      <CtaBand />
    </>
  );
}
