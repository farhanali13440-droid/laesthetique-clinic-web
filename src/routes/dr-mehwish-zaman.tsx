import { createFileRoute } from "@tanstack/react-router";
import {
  AlignCenter,
  Check,
  Crown,
  Droplets,
  HeartPulse,
  MapPin,
  MessageCircle,
  Phone,
  ScanFace,
  ShieldCheck,
  Sparkles,
  Stethoscope,
  Syringe,
  Smile,
  SmilePlus,
  Wrench,
} from "lucide-react";
import { Reveal } from "@/components/site/Reveal";
import { btnGhost, btnPrimary } from "@/components/site/ui";
import { clinic, dentalWhatsappLink, images, mehwishProfile } from "@/lib/site";

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
  { name: "Gum Bleeding Treatment", copy: "Assessment and care focused on healthier gums.", icon: HeartPulse },
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

const faqs = [
  {
    q: "How do I book a dental appointment?",
    a: "Call 0300 5013111 or WhatsApp La Esthetique and request a dental appointment with Dr. Mehwish Zaman.",
  },
  {
    q: "Where is La Esthetique located?",
    a: "La Esthetique is located at Office No. 12 & 13, Lord Trade Center, Above Najeeb Pharmacy, F-11 Markaz, Islamabad.",
  },
  {
    q: "Do I need a consultation before treatment?",
    a: "An examination allows your dental concern to be assessed and suitable treatment options to be discussed with you.",
  },
  {
    q: "Which dental treatments are available?",
    a: "Dental care includes general, cosmetic, restorative and orthodontic treatments. The appropriate option depends on your individual examination and needs.",
  },
];

function CallButton({ className = "" }: { className?: string }) {
  return (
    <a id="call-now" href={`tel:${clinic.phoneTel}`} className={`${btnPrimary} ${className}`}>
      <Phone className="h-4 w-4" /> Call {clinic.phoneDisplay}
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
      className={`${btnGhost} ${className}`}
    >
      <MessageCircle className="h-4 w-4" /> WhatsApp Us
    </a>
  );
}

function DrMehwish() {
  return (
    <main className="bg-background pb-20 lg:pb-0">
      <header className="sticky top-0 z-50 border-b border-border/70 bg-background/95 backdrop-blur-md">
        <div className="mx-auto flex max-w-7xl items-center justify-between gap-4 px-5 py-3 lg:px-8">
          <div className="flex min-w-0 items-center gap-3">
            <img src={images.logo} alt="La Esthetique logo" width={42} height={42} className="h-10 w-10 shrink-0 rounded-full object-contain" />
            <div className="min-w-0">
              <p className="font-display text-base tracking-wide text-espresso">LA ESTHETIQUE</p>
              <p className="hidden text-[0.62rem] uppercase tracking-[0.16em] text-muted-foreground sm:block">Dental & Aesthetic Clinic · Islamabad</p>
            </div>
          </div>
          <a href={`tel:${clinic.phoneTel}`} className="flex shrink-0 items-center gap-2 rounded-sm bg-primary px-4 py-2.5 text-sm text-primary-foreground transition-colors hover:bg-espresso sm:px-5">
            <Phone className="h-4 w-4" /><span className="hidden sm:inline">Call to Book</span><span className="sm:hidden">Call</span>
          </a>
        </div>
      </header>

      <section className="overflow-hidden bg-sand/45">
        <div className="mx-auto grid max-w-7xl items-center gap-10 px-5 py-12 sm:py-16 lg:grid-cols-[0.95fr_1.05fr] lg:gap-16 lg:px-8 lg:py-20">
          <Reveal className="order-2 lg:order-1">
            <p className="eyebrow">Dentist in F-11 Markaz, Islamabad</p>
            <h1 className="rule-gold mt-4 max-w-2xl font-display text-4xl leading-[1.05] text-espresso sm:text-5xl lg:text-6xl">Complete Dental Care For A Healthier, More Confident Smile.</h1>
            <p className="mt-5 max-w-xl text-base leading-relaxed text-muted-foreground sm:text-lg">Book a dental consultation with Dr. Mehwish Zaman at La Esthetique for personalized general, cosmetic, restorative and orthodontic care.</p>
            <div className="mt-7 grid gap-3 text-sm text-foreground/85 sm:grid-cols-2">
              {["BDS, MDS Res/Endo", "C. Implantology, MRCS UK", "Member Royal College of Surgeons Edinburgh UK", "Diplomate American Board of Aesthetics USA"].map((item) => (
                <div key={item} className="flex items-start gap-2"><Check className="mt-0.5 h-4 w-4 shrink-0 text-primary" /><span>{item}</span></div>
              ))}
            </div>
            <div className="mt-9 flex flex-col gap-3 sm:flex-row"><CallButton className="w-full justify-center sm:w-auto" /><WhatsAppButton className="w-full justify-center sm:w-auto" /></div>
            <p className="mt-4 text-xs text-muted-foreground">Call or WhatsApp to request an appointment and check available dates and times.</p>
          </Reveal>
          <Reveal delay={100} className="order-1 mx-auto w-full max-w-md lg:order-2">
            <div className="relative">
              <div className="absolute -inset-3 rounded-sm border border-primary/30" aria-hidden />
              <img src={images.drMehwish} alt="Dr. Mehwish Zaman, dentist at La Esthetique in Islamabad" width={769} height={1025} fetchPriority="high" className="relative aspect-[769/1025] w-full rounded-sm object-cover" />
              <div className="absolute bottom-4 left-4 right-4 rounded-sm bg-background/95 p-4 shadow-lg backdrop-blur-sm"><p className="font-display text-xl text-espresso">Dr. Mehwish Zaman</p><p className="mt-1 text-xs uppercase tracking-[0.15em] text-muted-foreground">Dentist / Aesthetic Physician</p></div>
            </div>
          </Reveal>
        </div>
      </section>

      <section className="border-y border-border bg-card">
        <div className="mx-auto grid max-w-6xl gap-0 sm:grid-cols-3">
          {[{ icon: ShieldCheck, title: "Qualified Care", copy: "Professional credentials" }, { icon: MapPin, title: "F-11 Markaz", copy: "Islamabad location" }, { icon: MessageCircle, title: "Easy Booking", copy: "Call or WhatsApp" }].map(({ icon: Icon, title: itemTitle, copy }) => (
            <div key={itemTitle} className="flex items-center gap-3 border-border px-5 py-5 sm:border-r sm:last:border-r-0"><Icon className="h-5 w-5 shrink-0 text-primary" /><div><p className="text-sm font-medium text-espresso">{itemTitle}</p><p className="text-xs text-muted-foreground">{copy}</p></div></div>
          ))}
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-5 py-16 lg:px-8 lg:py-20">
        <Reveal><p className="eyebrow">Dental concerns</p><h2 className="rule-gold mt-3 max-w-3xl font-display text-3xl text-espresso sm:text-4xl">Looking for help with a dental concern?</h2><p className="mt-5 max-w-2xl leading-relaxed text-muted-foreground">If you are dealing with pain, sensitivity, gum concerns, staining, missing teeth or alignment issues, start with an appointment so your dental needs can be assessed.</p></Reveal>
        <div className="mt-9 grid gap-3 sm:grid-cols-2 lg:grid-cols-3">{concerns.map((concern, i) => <Reveal key={concern} delay={i * 40} className="rounded-sm border border-border bg-card p-4"><div className="flex items-center gap-3 text-sm text-foreground/85"><Check className="h-4 w-4 shrink-0 text-primary" />{concern}</div></Reveal>)}</div>
      </section>

      <section className="bg-sand/35">
        <div className="mx-auto max-w-6xl px-5 py-16 lg:px-8 lg:py-20">
          <Reveal><p className="eyebrow">Dental services</p><h2 className="rule-gold mt-3 font-display text-3xl text-espresso sm:text-4xl">Dental care for your needs and goals</h2><p className="mt-5 max-w-2xl leading-relaxed text-muted-foreground">A range of general, cosmetic, restorative and orthodontic dental treatments is available at La Esthetique.</p></Reveal>
          <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {services.map(({ name, copy, icon: Icon }, i) => (
              <Reveal key={name} delay={i * 35} className="rounded-sm border border-border bg-background p-5 transition-transform duration-300 hover:-translate-y-0.5">
                <div className="flex items-start gap-4">
                  <div className="mt-0.5 flex h-11 w-11 shrink-0 items-center justify-center rounded-full border border-primary/25 bg-primary/5 text-primary"><Icon className="h-5 w-5" strokeWidth={1.8} /></div>
                  <div><h3 className="font-display text-xl text-espresso">{name}</h3><p className="mt-2 text-sm leading-relaxed text-muted-foreground">{copy}</p></div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-5 py-16 lg:px-8 lg:py-20">
        <div className="grid items-center gap-10 lg:grid-cols-[0.75fr_1.25fr]">
          <Reveal className="mx-auto w-full max-w-sm"><img src={images.drMehwish} alt="Dr. Mehwish Zaman at La Esthetique" width={769} height={1025} loading="lazy" className="aspect-[769/1025] w-full rounded-sm object-cover" /></Reveal>
          <Reveal delay={100}><p className="eyebrow">Your dental care</p><h2 className="rule-gold mt-3 font-display text-3xl text-espresso sm:text-4xl">Meet Dr. Mehwish Zaman</h2><p className="mt-5 leading-relaxed text-muted-foreground">Dr. Mehwish Zaman provides dental care at La Esthetique in F-11 Markaz, Islamabad, with a focus across general, cosmetic, restorative and orthodontic dentistry.</p><div className="mt-7 space-y-3 text-sm text-foreground/85"><p><strong className="font-medium text-espresso">Qualifications:</strong> {mehwishProfile.qualifications}</p><p><strong className="font-medium text-espresso">Membership:</strong> {mehwishProfile.memberships}</p><p><strong className="font-medium text-espresso">Certification:</strong> {mehwishProfile.certifications}</p></div><div className="mt-8 flex flex-col gap-3 sm:flex-row"><CallButton className="justify-center" /><WhatsAppButton className="justify-center" /></div></Reveal>
        </div>
      </section>

      <section className="bg-espresso text-background"><div className="mx-auto max-w-6xl px-5 py-16 lg:px-8 lg:py-20"><Reveal><p className="eyebrow text-background/65">Simple appointment process</p><h2 className="rule-gold mt-3 font-display text-3xl sm:text-4xl">Ready to discuss your dental concern?</h2></Reveal><div className="mt-10 grid gap-5 md:grid-cols-3">{[["01", "Call or WhatsApp", "Contact La Esthetique at 0300 5013111."], ["02", "Share your concern", "Tell the team what you would like help with."], ["03", "Choose your appointment", "Check available dates and times and book your visit."]].map(([number, heading, copy], i) => <Reveal key={number} delay={i * 70} className="rounded-sm border border-background/15 bg-background/5 p-6"><span className="text-sm tracking-[0.18em] text-primary">{number}</span><h3 className="mt-4 font-display text-2xl">{heading}</h3><p className="mt-3 text-sm leading-relaxed text-background/70">{copy}</p></Reveal>)}</div><div className="mt-10 flex flex-col gap-3 sm:flex-row"><CallButton className="justify-center" /><WhatsAppButton className="justify-center border-background/30 text-background hover:bg-background hover:text-espresso" /></div></div></section>

      <section className="mx-auto max-w-6xl px-5 py-16 lg:px-8 lg:py-20"><div className="grid gap-10 lg:grid-cols-[1fr_0.8fr] lg:items-center"><Reveal><p className="eyebrow">Visit La Esthetique</p><h2 className="rule-gold mt-3 font-display text-3xl text-espresso sm:text-4xl">Conveniently located in F-11 Markaz</h2><div className="mt-6 flex items-start gap-3"><MapPin className="mt-1 h-5 w-5 shrink-0 text-primary" /><p className="leading-relaxed text-muted-foreground">{clinic.address}</p></div><p className="mt-5 text-sm text-muted-foreground">Phone: {clinic.phoneDisplay}</p></Reveal><Reveal delay={100} className="rounded-sm border border-border bg-sand/40 p-7"><p className="font-display text-2xl text-espresso">Book your dental appointment</p><p className="mt-3 text-sm leading-relaxed text-muted-foreground">Call or WhatsApp the clinic to request an appointment with Dr. Mehwish Zaman.</p><div className="mt-6 space-y-3"><CallButton className="w-full justify-center" /><WhatsAppButton className="w-full justify-center" /></div></Reveal></div></section>

      <section className="bg-sand/35"><div className="mx-auto max-w-4xl px-5 py-16 lg:px-8 lg:py-20"><Reveal><p className="eyebrow">Frequently asked questions</p><h2 className="rule-gold mt-3 font-display text-3xl text-espresso sm:text-4xl">Before you book</h2></Reveal><div className="mt-8 space-y-3">{faqs.map((faq, i) => <Reveal key={faq.q} delay={i * 50}><details className="group rounded-sm border border-border bg-background px-5 py-4"><summary className="cursor-pointer list-none pr-8 font-medium text-espresso marker:hidden"><span>{faq.q}</span><span className="float-right text-primary transition-transform group-open:rotate-45">+</span></summary><p className="mt-3 max-w-3xl text-sm leading-relaxed text-muted-foreground">{faq.a}</p></details></Reveal>)}</div></div></section>

      <section className="bg-background"><div className="mx-auto max-w-4xl px-5 py-16 text-center lg:px-8 lg:py-20"><Reveal><p className="eyebrow">Dental appointment</p><h2 className="mt-3 font-display text-4xl text-espresso sm:text-5xl">Take the next step for your smile.</h2><p className="mx-auto mt-5 max-w-xl leading-relaxed text-muted-foreground">Speak with La Esthetique in F-11 Markaz, Islamabad, and request an appointment with Dr. Mehwish Zaman.</p><div className="mt-8 flex flex-col justify-center gap-3 sm:flex-row"><CallButton className="justify-center" /><WhatsAppButton className="justify-center" /></div><p className="mt-4 text-xs text-muted-foreground">0300 5013111 · F-11 Markaz, Islamabad</p></Reveal></div></section>

      <div className="fixed inset-x-0 bottom-0 z-50 grid grid-cols-2 border-t border-border bg-background/95 shadow-2xl backdrop-blur-md lg:hidden"><a id="mobile-call" href={`tel:${clinic.phoneTel}`} className="flex items-center justify-center gap-2 border-r border-border py-4 text-sm font-medium text-espresso"><Phone className="h-4 w-4 text-primary" /> Call Now</a><a id="mobile-whatsapp" href={dentalWhatsappLink} target="_blank" rel="noopener noreferrer" className="flex items-center justify-center gap-2 bg-primary py-4 text-sm font-medium text-primary-foreground"><MessageCircle className="h-4 w-4" /> WhatsApp</a></div>
    </main>
  );
}
