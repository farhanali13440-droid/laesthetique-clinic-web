import { createFileRoute } from "@tanstack/react-router";
import {
  Phone,
  MessageCircle,
  MapPin,
  Instagram,
  Facebook,
  Sparkles,
  HeartHandshake,
  Stethoscope,
  Leaf,
  ArrowRight,
  Quote,
} from "lucide-react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Header, MobileCtaBar } from "@/components/site/Header";
import { Reveal } from "@/components/site/Reveal";
import { Gallery } from "@/components/site/Gallery";
import { AppointmentForm } from "@/components/site/AppointmentForm";
import { clinic, images, navLinks, treatmentCategories, whatsappLink } from "@/lib/site";
import featureSkin from "@/assets/feature-skin.jpg";
import featureCare from "@/assets/feature-care.jpg";
import featureHair from "@/assets/feature-hair.jpg";
import featureGlow from "@/assets/feature-glow.jpg";

const title = "Dr. Sumbleen Majid | Dermatologist in Islamabad | La Esthetique";
const description =
  "Consult Dr. Sumbleen Majid at La Esthetique, Islamabad for personalized dermatology, skin, hair and aesthetic treatments in F-11 Markaz.";

export const Route = createFileRoute("/")({
  component: Index,
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

const featured = [
  {
    name: "Acne Scar Treatments",
    copy: "Customized protocols that target different scar types to refine texture and tone.",
    img: featureSkin,
    alt: "Close-up of refined, healthy facial skin texture",
  },
  {
    name: "HydraFacial",
    copy: "Cleanse, exfoliate, extract and hydrate in one refreshing, no-downtime session.",
    img: featureCare,
    alt: "Serum dropper resting on a smooth stone",
  },
  {
    name: "PRP Scalp Treatment",
    copy: "Platelet-rich plasma therapy to support scalp health and healthier-looking hair.",
    img: featureHair,
    alt: "Close-up of glossy healthy hair",
  },
  {
    name: "Anti-Aging Treatments",
    copy: "Biostimulators, RF microneedling, threads, Botox and fillers, chosen for you.",
    img: featureGlow,
    alt: "Soft ivory silk folds",
  },
  {
    name: "Laser Hair Removal",
    copy: "Advanced laser sessions to reduce unwanted hair and keep skin smoother for longer.",
    img: images.treatmentRoom,
    alt: "La Esthetique laser treatment room with medical aesthetic devices",
  },
  {
    name: "Botox Treatments",
    copy: "Precise, restrained treatment to soften fine lines while keeping expression natural.",
    img: images.signage,
    alt: "La Esthetique clinic reception signage",
  },
];

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
    copy: "A calm, professional clinic environment designed around patient comfort and care.",
  },
];

const journey = [
  { step: "01", title: "Consultation", copy: "Understand your concerns and goals." },
  { step: "02", title: "Assessment", copy: "Evaluate your skin, hair or aesthetic needs." },
  {
    step: "03",
    title: "Personalized Plan",
    copy: "Recommend suitable treatments based on your individual needs.",
  },
  { step: "04", title: "Treatment", copy: "Receive care in a professional clinical environment." },
  {
    step: "05",
    title: "Follow-Up",
    copy: "Review progress and adjust your treatment plan when needed.",
  },
];

const faqs = [
  {
    q: "How do I book an appointment?",
    a: "You can book a consultation by calling or WhatsApping La Esthetique at 0300 5013111.",
  },
  {
    q: "Where is La Esthetique located?",
    a: "Office No. 12 & 13, Lord Trade Center, Above Najeeb Pharmacy, F-11 Markaz, Islamabad.",
  },
  {
    q: "Do I need a consultation before treatment?",
    a: "A consultation is recommended so your concerns can be assessed and an appropriate treatment plan can be discussed.",
  },
  {
    q: "Are treatments suitable for everyone?",
    a: "Suitability varies by treatment and individual circumstances. A consultation helps determine the most appropriate option.",
  },
  {
    q: "How can I contact the clinic?",
    a: "You can contact La Esthetique by phone or WhatsApp at 0300 5013111.",
  },
];

// Placeholder reviews — replace with real Google reviews when available.
const reviews = [
  { name: "Patient review placeholder", text: "Add a real Google review here." },
  { name: "Patient review placeholder", text: "Add a real Google review here." },
  { name: "Patient review placeholder", text: "Add a real Google review here." },
];

const btnPrimary =
  "inline-flex items-center justify-center gap-2 rounded-sm bg-primary px-7 py-3.5 text-sm uppercase tracking-[0.14em] text-primary-foreground transition-colors hover:bg-espresso";
const btnGhost =
  "inline-flex items-center justify-center gap-2 rounded-sm border border-primary px-7 py-3.5 text-sm uppercase tracking-[0.14em] text-primary transition-colors hover:bg-primary hover:text-primary-foreground";

function Index() {
  return (
    <div className="overflow-x-hidden pb-16 lg:pb-0">
      <Header />

      {/* HERO */}
      <section id="home" className="relative bg-sand/50 pt-28 pb-16 lg:pt-36 lg:pb-24">
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
              <a href="#contact" className={btnPrimary}>
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
            <div className="relative -mt-8 ml-4 inline-block bg-background px-5 py-3 shadow-sm">
              <p className="font-display text-lg text-espresso">Dr. Sumbleen Majid</p>
              <p className="text-[0.68rem] uppercase tracking-[0.2em] text-primary">Dermatologist</p>
            </div>
          </Reveal>
        </div>
      </section>

      {/* INTRO / TRUST */}
      <section className="mx-auto max-w-7xl px-5 py-20 lg:px-8 lg:py-28">
        <div className="grid items-center gap-12 lg:grid-cols-2">
          <Reveal>
            <img
              src={images.reception}
              alt="La Esthetique clinic reception and waiting lounge in Islamabad"
              loading="lazy"
              className="h-[26rem] w-full rounded-sm object-cover lg:h-[34rem]"
            />
          </Reveal>
          <Reveal delay={100}>
            <p className="eyebrow">Welcome</p>
            <h2 className="rule-gold mt-4 font-display text-3xl text-espresso sm:text-4xl">
              Where Skin Health Meets Aesthetic Expertise
            </h2>
            <p className="mt-7 leading-relaxed text-muted-foreground">
              At La Esthetique, Dr. Sumbleen Majid provides personalized dermatology and aesthetic
              care focused on healthier-looking skin, hair and natural-looking enhancement. Every
              treatment begins with understanding your concerns and creating a plan suited to your
              individual needs.
            </p>
            <a href="#about" className={`${btnGhost} mt-9`}>
              Meet Dr. Sumbleen
            </a>
          </Reveal>
        </div>
      </section>

      {/* ABOUT */}
      <section id="about" className="bg-sand/50 py-20 lg:py-28">
        <div className="mx-auto grid max-w-7xl items-center gap-14 px-5 lg:grid-cols-[0.9fr_1.1fr] lg:px-8">
          <Reveal className="relative mx-auto w-full max-w-sm">
            <img
              src={images.doctor}
              alt="Portrait of Dr. Sumbleen Majid, dermatologist"
              loading="lazy"
              className="w-full rounded-sm object-cover"
            />
          </Reveal>
          <Reveal delay={100}>
            <p className="eyebrow">About</p>
            <h2 className="rule-gold mt-4 font-display text-3xl text-espresso sm:text-4xl">
              Meet Dr. Sumbleen Majid
            </h2>
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
            {/* Editable placeholder: add qualifications, memberships or experience here when confirmed. */}
            <div className="mt-8 flex flex-wrap gap-3">
              <a href="#contact" className={btnPrimary}>
                Book a Consultation
              </a>
              <a
                href={whatsappLink}
                target="_blank"
                rel="noopener noreferrer"
                className={btnGhost}
              >
                WhatsApp Us
              </a>
            </div>
          </Reveal>
        </div>
      </section>

      {/* FEATURED TREATMENTS */}
      <section className="mx-auto max-w-7xl px-5 py-20 lg:px-8 lg:py-28">
        <Reveal className="max-w-2xl">
          <p className="eyebrow">Featured</p>
          <h2 className="rule-gold mt-4 font-display text-3xl text-espresso sm:text-4xl">
            Treatments Our Patients Ask For Most
          </h2>
        </Reveal>
        <div className="mt-14 grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {featured.map((f, i) => (
            <Reveal as="article" key={f.name} delay={i * 70} className="group">
              <div className="overflow-hidden rounded-sm bg-sand">
                <img
                  src={f.img}
                  alt={f.alt}
                  loading="lazy"
                  className="h-80 w-full object-cover transition-transform duration-700 group-hover:scale-105"
                />
              </div>
              <h3 className="mt-5 font-display text-2xl text-espresso">{f.name}</h3>
              <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{f.copy}</p>
              <a
                href="#contact"
                className="mt-4 inline-flex items-center gap-2 text-xs uppercase tracking-[0.16em] text-primary"
              >
                Book Consultation <ArrowRight className="h-3.5 w-3.5" />
              </a>
            </Reveal>
          ))}
        </div>
        <div className="mt-14 text-center">
          <a href="#treatments" className={btnGhost}>
            Explore All Treatments
          </a>
        </div>
      </section>

      {/* TREATMENTS DIRECTORY */}
      <section id="treatments" className="bg-sand/50 py-20 lg:py-28">
        <div className="mx-auto max-w-7xl px-5 lg:px-8">
          <Reveal className="max-w-2xl">
            <p className="eyebrow">Directory</p>
            <h2 className="rule-gold mt-4 font-display text-3xl text-espresso sm:text-4xl">
              Our Treatments
            </h2>
            <p className="mt-6 text-muted-foreground">
              Personalized dermatology and aesthetic solutions for your skin, hair and overall
              appearance.
            </p>
          </Reveal>

          {treatmentCategories.map((cat) => (
            <div key={cat.category} className="mt-16">
              <Reveal>
                <h3 className="border-b border-border pb-4 text-xs uppercase tracking-[0.24em] text-primary">
                  {cat.category}
                </h3>
              </Reveal>
              <div className="mt-8 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
                {cat.items.map((t, i) => (
                  <Reveal
                    as="article"
                    key={t.name}
                    delay={(i % 3) * 60}
                    className="group flex h-full flex-col rounded-sm border border-border bg-card p-7 transition-all duration-300 hover:-translate-y-1 hover:border-primary/50"
                  >
                    <Sparkles className="h-5 w-5 text-primary" />
                    <h4 className="mt-5 font-display text-xl text-espresso">{t.name}</h4>
                    <p className="mt-3 flex-1 text-sm leading-relaxed text-muted-foreground">
                      {t.description}
                    </p>
                    <div className="mt-6 flex items-center gap-5 text-xs uppercase tracking-[0.14em]">
                      <a href="#contact" className="text-foreground/70 hover:text-primary">
                        Learn More
                      </a>
                      <a
                        href={`https://wa.me/${clinic.whatsapp}?text=${encodeURIComponent(
                          `Hello La Esthetique, I would like to book a consultation for ${t.name}.`,
                        )}`}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-1.5 text-primary"
                      >
                        Book Consultation <ArrowRight className="h-3.5 w-3.5" />
                      </a>
                    </div>
                  </Reveal>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* WHY */}
      <section id="why" className="mx-auto max-w-7xl px-5 py-20 lg:px-8 lg:py-28">
        <Reveal className="max-w-2xl">
          <p className="eyebrow">The Difference</p>
          <h2 className="rule-gold mt-4 font-display text-3xl text-espresso sm:text-4xl">
            Why Choose La Esthetique?
          </h2>
        </Reveal>
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

      {/* JOURNEY */}
      <section className="bg-espresso py-20 text-background lg:py-28">
        <div className="mx-auto max-w-7xl px-5 lg:px-8">
          <Reveal className="max-w-2xl">
            <p className="text-[0.72rem] uppercase tracking-[0.24em] text-gold">Process</p>
            <h2 className="mt-4 font-display text-3xl sm:text-4xl">
              Your Journey to Better Skin Starts Here
            </h2>
          </Reveal>
          <ol className="mt-14 grid gap-10 sm:grid-cols-2 lg:grid-cols-5">
            {journey.map((j, i) => (
              <Reveal as="li" key={j.step} delay={i * 70}>
                <p className="font-display text-3xl text-gold">{j.step}</p>
                <h3 className="mt-3 font-display text-xl">{j.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-background/70">{j.copy}</p>
              </Reveal>
            ))}
          </ol>
        </div>
      </section>

      {/* CLINIC EXPERIENCE */}
      <section className="mx-auto max-w-7xl px-5 py-20 lg:px-8 lg:py-28">
        <Reveal className="max-w-2xl">
          <p className="eyebrow">The Clinic</p>
          <h2 className="rule-gold mt-4 font-display text-3xl text-espresso sm:text-4xl">
            A Space Designed Around You
          </h2>
        </Reveal>
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
                src: images.treatmentRoom,
                alt: "Advanced laser and aesthetic equipment at La Esthetique",
                caption: "Equipment",
              },
              {
                src: images.signage,
                alt: "La Esthetique clinic entrance signage in F-11 Markaz Islamabad",
                caption: "Clinic Entrance",
              },
            ]}
          />
        </Reveal>
      </section>

      {/* REVIEWS */}
      <section className="bg-sand/50 py-20 lg:py-28">
        <div className="mx-auto max-w-7xl px-5 lg:px-8">
          <Reveal className="max-w-2xl">
            <p className="eyebrow">Patients</p>
            <h2 className="rule-gold mt-4 font-display text-3xl text-espresso sm:text-4xl">
              What Our Patients Say
            </h2>
          </Reveal>
          <div className="mt-14 grid gap-6 md:grid-cols-3">
            {reviews.map((r, i) => (
              <Reveal
                key={i}
                delay={i * 80}
                className="rounded-sm border border-border bg-card p-8"
              >
                <Quote className="h-6 w-6 text-primary" strokeWidth={1.3} />
                <p className="mt-5 leading-relaxed text-muted-foreground">{r.text}</p>
                <p className="mt-6 text-xs uppercase tracking-[0.16em] text-espresso">{r.name}</p>
              </Reveal>
            ))}
          </div>
          <div className="mt-12 text-center">
            <a
              href="https://www.google.com/maps/search/La+Esthetique+F-11+Markaz+Islamabad"
              target="_blank"
              rel="noopener noreferrer"
              className={btnGhost}
            >
              View More Reviews
            </a>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section id="faqs" className="mx-auto max-w-4xl px-5 py-20 lg:py-28">
        <Reveal>
          <p className="eyebrow">FAQs</p>
          <h2 className="rule-gold mt-4 font-display text-3xl text-espresso sm:text-4xl">
            Frequently Asked Questions
          </h2>
        </Reveal>
        <Reveal className="mt-10">
          <Accordion type="single" collapsible className="w-full">
            {faqs.map((f, i) => (
              <AccordionItem key={f.q} value={`item-${i}`}>
                <AccordionTrigger className="text-left font-display text-lg text-espresso">
                  {f.q}
                </AccordionTrigger>
                <AccordionContent className="text-sm leading-relaxed text-muted-foreground">
                  {f.a}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </Reveal>
      </section>

      {/* CONTACT / BOOKING */}
      <section id="contact" className="bg-sand/50 py-20 lg:py-28">
        <div className="mx-auto grid max-w-7xl gap-14 px-5 lg:grid-cols-[1fr_1fr] lg:px-8">
          <Reveal>
            <p className="eyebrow">Appointments</p>
            <h2 className="rule-gold mt-4 font-display text-3xl text-espresso sm:text-4xl">
              Ready to Give Your Skin the Care It Deserves?
            </h2>
            <p className="mt-6 text-muted-foreground">
              Book a consultation with Dr. Sumbleen Majid at La Esthetique, Islamabad.
            </p>
            <div className="mt-9 space-y-3">
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
          </Reveal>
          <Reveal delay={100} className="rounded-sm border border-border bg-card p-7 lg:p-9">
            <AppointmentForm />
          </Reveal>
        </div>
      </section>

      {/* LOCATION */}
      <section className="mx-auto max-w-7xl px-5 py-20 lg:px-8 lg:py-28">
        <Reveal className="max-w-2xl">
          <p className="eyebrow">Location</p>
          <h2 className="rule-gold mt-4 font-display text-3xl text-espresso sm:text-4xl">
            Visit La Esthetique
          </h2>
          <p className="mt-6 text-muted-foreground">{clinic.address}</p>
        </Reveal>
        <div className="mt-12 grid gap-8 lg:grid-cols-[1.4fr_1fr]">
          <Reveal className="overflow-hidden rounded-sm border border-border">
            <iframe
              title="Map showing La Esthetique in F-11 Markaz, Islamabad"
              src="https://www.google.com/maps?q=Lord%20Trade%20Center%20F-11%20Markaz%20Islamabad&output=embed"
              className="h-[26rem] w-full"
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
          </Reveal>
          <Reveal delay={100} className="space-y-7">
            <div>
              <p className="eyebrow">Call Us</p>
              <a href={`tel:${clinic.phoneTel}`} className="mt-2 block text-lg text-espresso">
                {clinic.phoneDisplay}
              </a>
            </div>
            <div>
              <p className="eyebrow">WhatsApp Us</p>
              <a
                href={whatsappLink}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-2 block text-lg text-espresso"
              >
                {clinic.phoneDisplay}
              </a>
            </div>
            <div>
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
        </div>
      </section>

      {/* FOOTER */}
      <footer className="bg-espresso py-16 text-background/85">
        <div className="mx-auto grid max-w-7xl gap-12 px-5 lg:grid-cols-4 lg:px-8">
          <div>
            <img
              src={images.logo}
              alt="La Esthetique logo"
              loading="lazy"
              className="h-16 w-16 rounded-full bg-background/90 object-contain p-1"
            />
            <p className="mt-5 text-sm leading-relaxed text-background/70">
              La Esthetique is a dermatology and medical aesthetics clinic in F-11 Markaz,
              Islamabad, led by Dr. Sumbleen Majid.
            </p>
          </div>
          <div>
            <h3 className="text-xs uppercase tracking-[0.2em] text-gold">Navigation</h3>
            <ul className="mt-5 space-y-2.5 text-sm">
              {navLinks.map((l) => (
                <li key={l.href}>
                  <a href={l.href} className="text-background/70 hover:text-background">
                    {l.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h3 className="text-xs uppercase tracking-[0.2em] text-gold">Treatments</h3>
            <ul className="mt-5 space-y-2.5 text-sm">
              {treatmentCategories.map((c) => (
                <li key={c.category}>
                  <a href="#treatments" className="text-background/70 hover:text-background">
                    {c.category}
                  </a>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h3 className="text-xs uppercase tracking-[0.2em] text-gold">Contact</h3>
            <ul className="mt-5 space-y-2.5 text-sm text-background/70">
              <li>{clinic.address}</li>
              <li>
                <a href={`tel:${clinic.phoneTel}`} className="hover:text-background">
                  Call {clinic.phoneDisplay}
                </a>
              </li>
              <li>
                <a
                  href={whatsappLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-background"
                >
                  WhatsApp {clinic.phoneDisplay}
                </a>
              </li>
              <li className="flex gap-4 pt-2">
                <a href={clinic.facebook} target="_blank" rel="noopener noreferrer" aria-label="Facebook">
                  <Facebook className="h-4 w-4" />
                </a>
                <a href={clinic.instagram} target="_blank" rel="noopener noreferrer" aria-label="Instagram">
                  <Instagram className="h-4 w-4" />
                </a>
              </li>
            </ul>
          </div>
        </div>
        <p className="mx-auto mt-14 max-w-7xl border-t border-background/15 px-5 pt-6 text-xs text-background/55 lg:px-8">
          © 2026 La Esthetique. All rights reserved.
        </p>
      </footer>

      <MobileCtaBar />
    </div>
  );
}
