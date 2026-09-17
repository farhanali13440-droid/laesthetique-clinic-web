import { createFileRoute } from "@tanstack/react-router";
import {
  AlignCenter,
  ArrowRight,
  BadgeCheck,
  Check,
  ChevronDown,
  Crown,
  Droplets,
  HeartHandshake,
  MapPin,
  MessageCircle,
  Phone,
  ShieldCheck,
  Sparkles,
  Stethoscope,
  Syringe,
  Smile,
  SmilePlus,
  Users,
  Wrench,
} from "lucide-react";
import { Reveal } from "@/components/site/Reveal";
import { clinic, dentalWhatsappLink, images, mehwishProfile, whatsappForDental } from "@/lib/site";
import dentalCheckup from "@/assets/dental/dental-checkup.jpg";
import scalingPolishing from "@/assets/dental/scaling-polishing.jpg";
import completeSmileMakeover from "@/assets/dental/complete-smile-makeover.jpg";

const title = "Dentist in Islamabad | Dr. Mehwish Zaman | La Esthetique";
const description =
  "Looking for a dentist in Islamabad? Book a dental appointment with Dr. Mehwish Zaman at La Esthetique, F-11 Markaz. Call or WhatsApp to book.";

export const Route = createFileRoute("/dr-mehwish-zaman")({
  component: DrMehwish,
  head: () => ({
    meta: [
      { title },
      { name: "description", content: description },
      { name: "robots", content: "index,follow" },
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
          jobTitle: "Dentist / Aesthetic Physician",
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

type ServiceIcon = typeof Stethoscope;

const services: { name: string; copy: string; icon: ServiceIcon }[] = [
  { name: "Dental Checkup", copy: "Examination and assessment of your teeth and gums.", icon: Stethoscope },
  { name: "Scaling & Polishing", copy: "Professional cleaning for plaque, tartar and surface stains.", icon: Droplets },
  { name: "Root Canal Treatment", copy: "Treatment for infected or damaged teeth where appropriate.", icon: Syringe },
  { name: "Dental Fillings", copy: "Restore cavities and damaged teeth with tooth-colored fillings.", icon: Wrench },
  { name: "Gum Bleeding Treatment", copy: "Assessment and care focused on healthier gums.", icon: HeartHandshake },
  { name: "Teeth Whitening", copy: "Professionally supervised treatment for stained or discolored teeth.", icon: Sparkles },
  { name: "Dental Implants", copy: "Options for replacing missing teeth and restoring function.", icon: SmilePlus },
  { name: "Crown, Bridge & Veneer", copy: "Restorative and aesthetic solutions for damaged or altered teeth.", icon: Crown },
  { name: "Braces & Invisalign", copy: "Orthodontic options for improving tooth alignment and your bite.", icon: AlignCenter },
  { name: "Complete Smile Makeover", copy: "A personalized combination of cosmetic and restorative care.", icon: Smile },
];

const concerns = [
  "Toothache or sensitivity",
  "Bleeding or uncomfortable gums",
  "Cavities or damaged teeth",
  "Missing teeth",
  "Yellow or stained teeth",
  "Crooked or crowded teeth",
];

const whyChoose = [
  [BadgeCheck, "Qualified dental care", "BDS, MDS Res/Endo, C. Implantology and MRCS UK credentials."],
  [Stethoscope, "Broad dental services", "General, cosmetic, restorative and orthodontic care in one place."],
  [MapPin, "Convenient F-11 location", "La Esthetique is located in F-11 Markaz, Islamabad."],
  [HeartHandshake, "Consultation-led care", "Your dental concern can be assessed before suitable options are discussed."],
  [ShieldCheck, "Professional credentials", "Member Royal College of Surgeons Edinburgh UK and Diplomate American Board of Aesthetics USA."],
  [MessageCircle, "Simple booking", "Call or WhatsApp the clinic to request an appointment."],
] as const;

const faqs = [
  {
    q: "How can I book an appointment with Dr. Mehwish Zaman?",
    a: "Call 0300 5013111 or WhatsApp La Esthetique to request a dental appointment and check available dates and times.",
  },
  {
    q: "Where is La Esthetique located?",
    a: "Office No. 12 & 13, Lord Trade Center, Above Najeeb Pharmacy, F-11 Markaz, Islamabad.",
  },
  {
    q: "Do I need a consultation before treatment?",
    a: "An examination allows your dental concern to be assessed and suitable treatment options to be discussed with you.",
  },
  {
    q: "What dental treatments are available?",
    a: "Services include dental checkups, scaling and polishing, root canal treatment, fillings, gum care, whitening, implants, crowns, bridges, veneers, braces, Invisalign and smile makeover care.",
  },
  {
    q: "Can I contact the clinic on WhatsApp?",
    a: "Yes. Use the WhatsApp button on this page to send a dental appointment request directly to La Esthetique.",
  },
];

const gallery = [
  [dentalCheckup, "Dental Checkup"],
  [scalingPolishing, "Scaling & Polishing"],
  [completeSmileMakeover, "Smile Makeover Care"],
] as const;

function CallButton({ className = "" }: { className?: string }) {
  return (
    <a
      id="call-now"
      href={`tel:${clinic.phoneTel}`}
      className={`inline-flex items-center justify-center gap-2 rounded-sm bg-primary px-5 py-3 text-sm font-medium text-primary-foreground shadow-sm transition-all hover:-translate-y-0.5 hover:bg-espresso ${className}`}
    >
      <Phone className="h-4 w-4" /> Call Now
    </a>
  );
}

function WhatsAppButton({ className = "" }: { className?: string }) {
  return (
    <a
      id="whatsapp-booking"
      href={dentalWhatsappLink}
      target="_blank"
      rel="noopener noreferrer"
      className={`inline-flex items-center justify-center gap-2 rounded-sm bg-[#19c86a] px-5 py-3 text-sm font-medium text-white shadow-sm transition-all hover:-translate-y-0.5 hover:bg-[#14ad5b] ${className}`}
    >
      <MessageCircle className="h-4 w-4" /> WhatsApp Us
    </a>
  );
}

function SectionTitle({ eyebrow, title: heading, copy }: { eyebrow: string; title: string; copy?: string }) {
  return (
    <Reveal className="mx-auto max-w-3xl text-center">
      <p className="text-[0.68rem] font-medium uppercase tracking-[0.2em] text-primary">{eyebrow}</p>
      <h2 className="mt-3 font-display text-3xl font-semibold leading-tight text-espresso sm:text-4xl">{heading}</h2>
      {copy && <p className="mx-auto mt-3 max-w-2xl text-sm leading-relaxed text-muted-foreground sm:text-base">{copy}</p>}
    </Reveal>
  );
}

function DrMehwish() {
  return (
    <main className="bg-[#f7f9fc] pb-20 text-espresso lg:pb-0">
      {/* Compact landing-page header */}
      <div className="bg-[#0b357f] px-4 py-2 text-center text-[10px] font-medium tracking-[0.08em] text-white sm:text-xs">
        DENTAL & AESTHETIC CLINIC · F-11 MARKAZ · ISLAMABAD · CALL 0300 5013111
      </div>

      <header className="sticky top-0 z-40 border-b border-slate-200/80 bg-white/95 backdrop-blur-md">
        <div className="mx-auto flex max-w-6xl items-center justify-between gap-4 px-4 py-3 sm:px-6">
          <div className="flex items-center gap-2.5">
            <img src={images.logo} alt="La Esthetique logo" width={40} height={40} className="h-9 w-9 rounded-full object-contain" />
            <div>
              <p className="font-display text-base font-semibold tracking-wide">LA ESTHETIQUE</p>
              <p className="hidden text-[9px] uppercase tracking-[0.14em] text-slate-500 sm:block">Dental & Aesthetic Clinic</p>
            </div>
          </div>
          <a href={`tel:${clinic.phoneTel}`} className="inline-flex items-center gap-2 rounded-sm bg-[#0b357f] px-4 py-2 text-xs font-semibold text-white transition-colors hover:bg-espresso sm:px-5 sm:text-sm">
            <Phone className="h-3.5 w-3.5" /> Call to Book
          </a>
        </div>
      </header>

      {/* HERO */}
      <section className="overflow-hidden bg-gradient-to-b from-[#edf4ff] to-[#f7f9fc]">
        <div className="mx-auto grid max-w-6xl items-center gap-8 px-4 py-9 sm:px-6 sm:py-14 lg:grid-cols-[1.05fr_0.95fr] lg:gap-12 lg:py-16">
          <Reveal>
            <div className="inline-flex rounded-full bg-white px-3 py-1 text-[10px] font-semibold uppercase tracking-[0.12em] text-[#0b357f] shadow-sm">Female Dentist in Islamabad</div>
            <h1 className="mt-4 max-w-xl font-display text-4xl font-semibold leading-[1.02] text-[#083577] sm:text-5xl lg:text-[4rem]">Looking for a dentist in Islamabad you can actually trust?</h1>
            <p className="mt-4 max-w-xl text-sm leading-relaxed text-slate-600 sm:text-base">Book a dental consultation with Dr. Mehwish Zaman at La Esthetique, F-11 Markaz, for personalized general, cosmetic, restorative and orthodontic care.</p>
            <div className="mt-5 grid gap-2 text-xs text-slate-700 sm:grid-cols-2">
              {["BDS, MDS Res/Endo", "C. Implantology, MRCS UK", "Member Royal College of Surgeons Edinburgh UK", "Diplomate American Board of Aesthetics USA"].map((item) => (
                <div key={item} className="flex items-start gap-2"><Check className="mt-0.5 h-3.5 w-3.5 shrink-0 text-[#0b357f]" />{item}</div>
              ))}
            </div>
            <div className="mt-6 flex flex-col gap-2.5 sm:flex-row">
              <CallButton className="w-full sm:w-auto" />
              <WhatsAppButton className="w-full sm:w-auto" />
            </div>
            <p className="mt-3 text-[10px] text-slate-500">Call or WhatsApp to request an appointment and check available dates and times.</p>
          </Reveal>

          <Reveal delay={100} className="mx-auto w-full max-w-sm">
            <div className="relative">
              <div className="absolute -inset-2 rounded-[2rem] bg-white/70 shadow-xl" aria-hidden />
              <img src={images.drMehwish} alt="Dr. Mehwish Zaman, dentist at La Esthetique in Islamabad" width={769} height={1025} fetchPriority="high" className="relative aspect-[4/5] w-full rounded-[1.7rem] object-cover object-top shadow-lg" />
              <div className="absolute bottom-3 left-3 right-3 rounded-xl bg-white/95 px-4 py-3 shadow-lg backdrop-blur-sm">
                <p className="font-display text-lg font-semibold text-[#083577]">Dr. Mehwish Zaman</p>
                <p className="mt-0.5 text-[10px] uppercase tracking-[0.12em] text-slate-500">Dentist / Aesthetic Physician</p>
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      {/* TRUST STRIP */}
      <section className="border-y border-slate-200 bg-white">
        <div className="mx-auto grid max-w-6xl grid-cols-2 divide-x divide-slate-200 sm:grid-cols-4">
          {[
            [BadgeCheck, "Qualified Dentist", "Professional credentials"],
            [Stethoscope, "Dental Care", "Multiple treatment options"],
            [MapPin, "F-11 Markaz", "Islamabad location"],
            [MessageCircle, "Easy Booking", "Call or WhatsApp"],
          ].map(([Icon, heading, copy]) => {
            const IconComponent = Icon as typeof BadgeCheck;
            return <div key={heading as string} className="flex min-h-20 items-center gap-2.5 px-3 py-4 sm:px-5"><IconComponent className="h-4 w-4 shrink-0 text-[#0b357f]" /><div><p className="text-[10px] font-semibold text-[#083577] sm:text-xs">{heading as string}</p><p className="mt-0.5 text-[9px] text-slate-500 sm:text-[10px]">{copy as string}</p></div></div>;
          })}
        </div>
      </section>

      {/* CONCERNS */}
      <section className="bg-white px-4 py-14 sm:px-6 sm:py-18">
        <SectionTitle eyebrow="Start with your concern" title="What is bothering you today?" copy="Choose the concern closest to what you are experiencing and request an appointment." />
        <div className="mx-auto mt-8 max-w-4xl rounded-2xl border border-slate-200 bg-white p-4 shadow-sm sm:p-6">
          <div className="flex flex-wrap justify-center gap-2">
            {concerns.map((concern) => (
              <a key={concern} href={whatsappForDental(concern)} target="_blank" rel="noopener noreferrer" className="rounded-full border border-slate-200 bg-slate-50 px-3 py-2 text-[10px] font-medium text-slate-700 transition-colors hover:border-[#0b357f] hover:text-[#0b357f] sm:text-xs">{concern}</a>
            ))}
          </div>
          <div className="mt-5 flex flex-col justify-center gap-2.5 sm:flex-row">
            <WhatsAppButton />
            <CallButton />
          </div>
        </div>
      </section>

      {/* WHY CHOOSE */}
      <section className="bg-[#f7f9fc] px-4 py-14 sm:px-6 sm:py-18">
        <SectionTitle eyebrow="Why patients choose us" title="Why patients choose Dr. Mehwish Zaman" copy="A focused dental landing page built around credentials, access and clear next steps." />
        <div className="mx-auto mt-9 grid max-w-5xl gap-3 sm:grid-cols-2 lg:grid-cols-3">
          {whyChoose.map(([Icon, heading, copy], i) => (
            <Reveal key={heading} delay={i * 40} className="rounded-xl border border-slate-200 bg-white p-5 shadow-sm">
              <Icon className="h-5 w-5 text-[#0b357f]" />
              <h3 className="mt-3 font-display text-lg font-semibold text-[#083577]">{heading}</h3>
              <p className="mt-1.5 text-xs leading-relaxed text-slate-500">{copy}</p>
            </Reveal>
          ))}
        </div>
      </section>

      {/* CLINIC GALLERY */}
      <section className="bg-white px-4 py-14 sm:px-6 sm:py-18">
        <SectionTitle eyebrow="See the clinic before you come" title="See the dental care environment before your visit" copy="Get a visual feel for the dental space and the type of care available at La Esthetique." />
        <div className="mx-auto mt-9 max-w-5xl">
          <Reveal className="overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-md">
            <div className="relative">
              <img src={images.dentalRoom} alt="Dental treatment room at La Esthetique" className="h-64 w-full object-cover sm:h-80" />
              <div className="absolute inset-0 bg-gradient-to-t from-black/55 via-transparent to-transparent" />
              <div className="absolute bottom-4 left-4 right-4 flex items-end justify-between gap-4 text-white">
                <div><p className="text-[10px] uppercase tracking-[0.14em] text-white/75">La Esthetique · F-11 Markaz</p><p className="mt-1 font-display text-2xl font-semibold">A professional dental setting</p></div>
                <a href={`tel:${clinic.phoneTel}`} className="hidden shrink-0 rounded-full bg-white px-4 py-2 text-xs font-semibold text-[#083577] sm:inline-flex">Book a visit</a>
              </div>
            </div>
          </Reveal>
          <div className="mt-3 grid grid-cols-3 gap-2 sm:gap-3">
            {gallery.map(([src, label], i) => <Reveal key={label} delay={i * 50} className="overflow-hidden rounded-xl border border-slate-200 bg-white shadow-sm"><img src={src} alt={label} className="h-24 w-full object-cover sm:h-36" /><p className="px-2 py-2 text-[9px] font-medium text-slate-600 sm:px-3 sm:text-[10px]">{label}</p></Reveal>)}
          </div>
        </div>
      </section>

      {/* DOCTOR */}
      <section className="bg-[#edf4ff] px-4 py-14 sm:px-6 sm:py-18">
        <div className="mx-auto grid max-w-5xl items-center gap-8 sm:grid-cols-[0.7fr_1.3fr] sm:gap-10">
          <Reveal className="mx-auto w-full max-w-xs"><img src={images.drMehwish} alt="Dr. Mehwish Zaman" className="aspect-[4/5] w-full rounded-2xl object-cover object-top shadow-lg" /></Reveal>
          <Reveal delay={100}>
            <p className="text-[10px] font-semibold uppercase tracking-[0.18em] text-[#0b357f]">Meet your dentist</p>
            <h2 className="mt-2 font-display text-3xl font-semibold leading-tight text-[#083577] sm:text-4xl">Dr. Mehwish Zaman</h2>
            <p className="mt-1 text-xs font-medium uppercase tracking-[0.12em] text-slate-500">Dentist / Aesthetic Physician</p>
            <p className="mt-4 text-sm leading-relaxed text-slate-600">Dr. Mehwish Zaman provides dental care at La Esthetique in F-11 Markaz, Islamabad, across general, cosmetic, restorative and orthodontic dentistry.</p>
            <div className="mt-5 grid gap-2 text-xs text-slate-700 sm:grid-cols-2">
              {[mehwishProfile.qualifications, mehwishProfile.memberships, mehwishProfile.certifications].map((item) => <div key={item} className="flex gap-2"><Check className="mt-0.5 h-3.5 w-3.5 shrink-0 text-[#0b357f]" />{item}</div>)}
            </div>
            <div className="mt-6 flex flex-col gap-2.5 sm:flex-row"><CallButton /><WhatsAppButton /></div>
          </Reveal>
        </div>
      </section>

      {/* GOOGLE REVIEW CTA WITHOUT FABRICATED REVIEWS */}
      <section className="bg-white px-4 py-14 sm:px-6 sm:py-18">
        <SectionTitle eyebrow="Patient feedback" title="Want to see what patients are saying?" copy="Review the clinic's current Google feedback before you book." />
        <Reveal className="mx-auto mt-8 max-w-md rounded-2xl border border-slate-200 bg-white p-6 text-center shadow-sm">
          <div className="mx-auto flex h-11 w-11 items-center justify-center rounded-full bg-[#f1f5f9] text-[#0b357f]"><Users className="h-5 w-5" /></div>
          <h3 className="mt-3 font-display text-xl font-semibold text-[#083577]">Read current Google reviews</h3>
          <p className="mt-2 text-xs leading-relaxed text-slate-500">See the latest patient feedback directly on Google rather than relying on selected testimonials on this page.</p>
          <a href="https://www.google.com/search?q=La+Esthetique+F-11+Markaz+Islamabad" target="_blank" rel="noopener noreferrer" className="mt-5 inline-flex items-center gap-2 rounded-sm bg-[#0b357f] px-5 py-3 text-xs font-semibold text-white hover:bg-espresso">View Google feedback <ArrowRight className="h-3.5 w-3.5" /></a>
        </Reveal>
      </section>

      {/* SERVICES */}
      <section className="bg-[#f7f9fc] px-4 py-14 sm:px-6 sm:py-18">
        <SectionTitle eyebrow="Dental services" title="What we treat" copy="A range of general, cosmetic, restorative and orthodontic dental care is available." />
        <div className="mx-auto mt-9 grid max-w-5xl grid-cols-2 gap-2.5 sm:grid-cols-3 lg:grid-cols-5">
          {services.map(({ name, icon: Icon }, i) => <Reveal key={name} delay={i * 30} className="rounded-xl border border-slate-200 bg-white p-4 text-center shadow-sm"><Icon className="mx-auto h-5 w-5 text-[#0b357f]" strokeWidth={1.8} /><p className="mt-2 text-[10px] font-semibold leading-tight text-[#083577] sm:text-xs">{name}</p></Reveal>)}
        </div>
        <div className="mt-7 text-center"><a href="#book" className="inline-flex items-center gap-1 text-xs font-semibold text-[#0b357f] hover:underline">Need help choosing a treatment? Talk to the clinic <ArrowRight className="h-3.5 w-3.5" /></a></div>
      </section>

      {/* CARE PRINCIPLES */}
      <section className="bg-[#0b357f] px-4 py-14 text-white sm:px-6 sm:py-18">
        <SectionTitle eyebrow="Our approach" title="Dental care built around clarity, care and access" copy="The next step is simple: tell us what is bothering you, discuss your options and choose an appointment time." />
        <div className="mx-auto mt-9 grid max-w-5xl gap-3 md:grid-cols-3">
          {[
            ["01", "Understand your concern", "Start with a dental assessment so your needs can be understood."],
            ["02", "Discuss your options", "Suitable treatment choices can be explained according to your dental needs."],
            ["03", "Book your visit", "Call or WhatsApp the clinic to check available dates and times."],
          ].map(([number, heading, copy], i) => <Reveal key={number} delay={i * 70} className="rounded-xl border border-white/15 bg-white/10 p-5"><span className="text-xs font-semibold tracking-[0.2em] text-white/60">{number}</span><h3 className="mt-3 font-display text-xl font-semibold">{heading}</h3><p className="mt-2 text-xs leading-relaxed text-white/70">{copy}</p></Reveal>)}
        </div>
      </section>

      {/* FAQ */}
      <section className="bg-white px-4 py-14 sm:px-6 sm:py-18">
        <SectionTitle eyebrow="The questions everyone asks" title="Dental appointment FAQs" />
        <div className="mx-auto mt-8 max-w-3xl divide-y divide-slate-200 border-y border-slate-200">
          {faqs.map((faq, i) => <Reveal key={faq.q} delay={i * 35}><details className="group py-4"><summary className="flex cursor-pointer list-none items-center justify-between gap-4 text-xs font-semibold text-[#083577] sm:text-sm"><span>{faq.q}</span><ChevronDown className="h-4 w-4 shrink-0 transition-transform group-open:rotate-180" /></summary><p className="mt-3 max-w-2xl pr-6 text-xs leading-relaxed text-slate-500">{faq.a}</p></details></Reveal>)}
        </div>
      </section>

      {/* LOCATION */}
      <section className="bg-[#f7f9fc] px-4 py-14 sm:px-6 sm:py-18">
        <SectionTitle eyebrow="Coming to see us" title="Find La Esthetique in F-11 Markaz" copy="Use the clinic address below when planning your visit." />
        <div className="mx-auto mt-8 grid max-w-4xl gap-3 sm:grid-cols-2">
          <div className="rounded-xl border border-slate-200 bg-white p-5 shadow-sm"><MapPin className="h-5 w-5 text-[#0b357f]" /><h3 className="mt-3 font-display text-lg font-semibold text-[#083577]">Clinic address</h3><p className="mt-2 text-xs leading-relaxed text-slate-500">{clinic.address}</p></div>
          <div className="rounded-xl border border-slate-200 bg-white p-5 shadow-sm"><Phone className="h-5 w-5 text-[#0b357f]" /><h3 className="mt-3 font-display text-lg font-semibold text-[#083577]">Book by phone or WhatsApp</h3><p className="mt-2 text-xs leading-relaxed text-slate-500">Call {clinic.phoneDisplay} or send a WhatsApp appointment request.</p><div className="mt-4 flex gap-2"><CallButton /><WhatsAppButton /></div></div>
        </div>
      </section>

      {/* FINAL CTA */}
      <section id="book" className="bg-[#0b357f] px-4 py-14 text-white sm:px-6 sm:py-18">
        <Reveal className="mx-auto max-w-3xl text-center">
          <p className="text-[10px] font-semibold uppercase tracking-[0.2em] text-white/60">Ready to take the next step?</p>
          <h2 className="mt-3 font-display text-3xl font-semibold sm:text-4xl">That tooth is not going to fix itself.</h2>
          <p className="mx-auto mt-3 max-w-xl text-sm leading-relaxed text-white/70">Request a dental appointment with Dr. Mehwish Zaman at La Esthetique, F-11 Markaz, Islamabad.</p>
          <div className="mt-6 flex flex-col justify-center gap-2.5 sm:flex-row"><CallButton className="bg-white text-[#083577] hover:bg-slate-100" /><WhatsAppButton /></div>
        </Reveal>
      </section>

      {/* Mobile CTA */}
      <div className="fixed inset-x-0 bottom-0 z-50 grid grid-cols-2 border-t border-slate-200 bg-white shadow-2xl lg:hidden">
        <a id="mobile-call" href={`tel:${clinic.phoneTel}`} className="flex items-center justify-center gap-2 bg-[#0b357f] px-4 py-3.5 text-xs font-semibold text-white"><Phone className="h-4 w-4" /> Call Now</a>
        <a id="mobile-whatsapp" href={dentalWhatsappLink} target="_blank" rel="noopener noreferrer" className="flex items-center justify-center gap-2 bg-[#19c86a] px-4 py-3.5 text-xs font-semibold text-white"><MessageCircle className="h-4 w-4" /> WhatsApp</a>
      </div>
    </main>
  );
}
