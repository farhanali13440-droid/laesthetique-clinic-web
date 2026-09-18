import { createFileRoute } from "@tanstack/react-router";
import {
  ArrowRight,
  BadgeCheck,
  Check,
  ChevronDown,
  Droplets,
  HeartHandshake,
  MapPin,
  MessageCircle,
  Phone,
  ShieldCheck,
  Sparkles,
  Stethoscope,
  Users,
} from "lucide-react";
import { Reveal } from "@/components/site/Reveal";
import { clinic, images, whatsappLink } from "@/lib/site";

const title = "Dr. Sumbleen Majid | Dermatologist in Islamabad | La Esthetique";
const description =
  "Meet Dr. Sumbleen Majid, dermatologist at La Esthetique in F-11 Markaz, Islamabad — personalized dermatology, skin, hair and aesthetic care.";

export const Route = createFileRoute("/about")({
  component: About,
  head: () => ({
    meta: [
      { title },
      { name: "description", content: description },
      { name: "robots", content: "index,follow" },
      { property: "og:title", content: title },
      { property: "og:description", content: description },
      { property: "og:type", content: "website" },
      { property: "og:url", content: "/about" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
    links: [{ rel: "canonical", href: "/about" }],
  }),
});

const concerns = [
  "Acne & breakouts",
  "Acne scars & texture",
  "Pigmentation & uneven tone",
  "Hair fall & thinning",
  "Skin rejuvenation",
  "Signs of aging",
];

const whyChoose = [
  [BadgeCheck, "Dermatology-focused care", "Assessment-led care for a wide range of skin and hair concerns."],
  [HeartHandshake, "Personalized approach", "Treatment planning is shaped around your concern, skin and individual goals."],
  [MapPin, "Convenient F-11 location", "La Esthetique is located in F-11 Markaz, Islamabad."],
  [ShieldCheck, "Natural-looking approach", "A restrained aesthetic philosophy focused on healthy, refreshed results."],
  [Stethoscope, "Skin, hair & aesthetics", "Clinical dermatology and aesthetic care available under one clinic."],
  [MessageCircle, "Simple booking", "Call or WhatsApp the clinic to request a consultation."],
] as const;

const services = [
  ["Advanced Skincare", "Skin health and customized skincare guidance."],
  ["Acne & Acne Scar Care", "Care for active acne, marks, scars and texture."],
  ["Chemical Peels", "Peel-based rejuvenation selected for your skin needs."],
  ["Hydrafacial", "Deep cleansing and skin-refreshing facial care."],
  ["Laser Hair Removal", "Laser-based care for unwanted hair."],
  ["Pigmentation Care", "Assessment-led options for uneven skin tone."],
  ["Anti-Aging Care", "Personalized options for visible signs of aging."],
  ["Hair & Scalp Care", "Assessment and treatment planning for hair concerns."],
];

const faqs = [
  {
    q: "How can I book an appointment with Dr. Sumbleen Majid?",
    a: "Call 0300 5013111 or WhatsApp La Esthetique to request a consultation and check available dates and times.",
  },
  {
    q: "Where is La Esthetique located?",
    a: "Office No. 12 & 13, Lord Trade Center, Above Najeeb Pharmacy, F-11 Markaz, Islamabad.",
  },
  {
    q: "What concerns can Dr. Sumbleen help with?",
    a: "The clinic provides dermatology, skin, hair and aesthetic care for concerns such as acne, acne scarring, pigmentation, skin texture, hair thinning and visible signs of aging.",
  },
  {
    q: "Do I need a consultation before treatment?",
    a: "A consultation allows your concern and skin to be assessed before suitable treatment options are discussed.",
  },
  {
    q: "Can I contact the clinic on WhatsApp?",
    a: "Yes. Use the WhatsApp buttons on this page to send an appointment request directly to La Esthetique.",
  },
];

const reviews = [
  {
    name: "rabia sheren",
    date: "34 weeks ago",
    text: "I had an amazing experience! I went in for laser and Dr Nilo did my y...",
  },
  {
    name: "Fakhar Abbas Naz",
    date: "30 May 2025",
    text: "I was facing excessive hair fall , i went to dr sumbleen ali for hair exosomes now i am getting my hair volume back...",
  },
  {
    name: "Noor ul ain Ahmed",
    date: "4 Jun 2025",
    text: "My mom went there to get some facial treatment done and SHE ENJOYED THE EXPERIENCE SO MUCH. Such a professional environment and the sweetest lady ever, must recommend to everyone.",
  },
  {
    name: "Adeel Ahmed",
    date: "38 weeks ago",
    text: "Excellent Aesthetic Services",
  },
];

function CallButton({ className = "" }: { className?: string }) {
  return (
    <a
      href={`tel:${clinic.phoneTel}`}
      className={`inline-flex items-center justify-center gap-2 rounded-sm bg-[#CCA079] px-5 py-3 text-sm font-medium text-[#3A3029] shadow-sm transition-all hover:-translate-y-0.5 hover:bg-[#B98B5F] ${className}`}
    >
      <Phone className="h-4 w-4" /> Call Now
    </a>
  );
}

function WhatsAppButton({ className = "" }: { className?: string }) {
  return (
    <a
      href={whatsappLink}
      target="_blank"
      rel="noopener noreferrer"
      className={`inline-flex items-center justify-center gap-2 rounded-sm bg-[#19c86a] px-5 py-3 text-sm font-medium text-white shadow-sm transition-all hover:-translate-y-0.5 hover:bg-[#14ad5b] ${className}`}
    >
      <MessageCircle className="h-4 w-4" /> WhatsApp Us
    </a>
  );
}

function SectionTitle({
  eyebrow,
  title: heading,
  copy,
  dark = false,
}: {
  eyebrow: string;
  title: string;
  copy?: string;
  dark?: boolean;
}) {
  return (
    <Reveal className="mx-auto max-w-3xl text-center">
      <p className={`text-[0.68rem] font-medium uppercase tracking-[0.2em] ${dark ? "text-white/60" : "text-[#CCA079]"}`}>
        {eyebrow}
      </p>
      <h2 className={`mt-3 font-display text-3xl font-semibold leading-tight sm:text-4xl ${dark ? "text-white" : "text-[#3A3029]"}`}>
        {heading}
      </h2>
      {copy && (
        <p className={`mx-auto mt-3 max-w-2xl text-sm leading-relaxed sm:text-base ${dark ? "text-white/70" : "text-slate-600"}`}>
          {copy}
        </p>
      )}
    </Reveal>
  );
}

function About() {
  return (
    <main className="bg-[#FAFAF8] pb-20 text-[#3A3029] lg:pb-0">
      <div className="bg-[#3A3029] px-4 py-2 text-center text-[10px] font-medium tracking-[0.08em] text-white sm:text-xs">
        DERMATOLOGY & AESTHETIC CLINIC · F-11 MARKAZ · ISLAMABAD · CALL 0300 5013111
      </div>

      <header className="sticky top-0 z-40 border-b border-[#E6D8C9] bg-[#FAFAF8]/95 backdrop-blur-md">
        <div className="mx-auto flex max-w-6xl items-center justify-between gap-4 px-4 py-3 sm:px-6">
          <div className="flex items-center gap-2.5">
            <img src={images.logo} alt="La Esthetique logo" width={40} height={40} className="h-9 w-9 object-contain" />
            <div>
              <p className="font-display text-base font-semibold tracking-wide">LA ESTHETIQUE</p>
              <p className="hidden text-[9px] uppercase tracking-[0.14em] text-slate-500 sm:block">Skin · Laser · Dental Aesthetics</p>
            </div>
          </div>
          <a href={`tel:${clinic.phoneTel}`} className="inline-flex items-center gap-2 rounded-sm bg-[#CCA079] px-4 py-2 text-xs font-semibold text-[#3A3029] transition-colors hover:bg-[#B98B5F] sm:px-5 sm:text-sm">
            <Phone className="h-3.5 w-3.5" /> Call to Book
          </a>
        </div>
      </header>

      <section className="overflow-hidden bg-gradient-to-b from-[#F5EFE8] to-[#FAFAF8]">
        <div className="mx-auto grid max-w-6xl items-center gap-8 px-4 py-9 sm:px-6 sm:py-14 lg:grid-cols-[1.05fr_0.95fr] lg:gap-12 lg:py-16">
          <Reveal>
            <div className="inline-flex rounded-full bg-white px-3 py-1 text-[10px] font-semibold uppercase tracking-[0.12em] text-[#3A3029] shadow-sm">
              Female Dermatologist in Islamabad
            </div>
            <h1 className="mt-4 max-w-xl font-display text-4xl font-semibold leading-[1.02] text-[#3A3029] sm:text-5xl lg:text-[4rem]">
              Looking for a dermatologist in Islamabad you can actually trust?
            </h1>
            <p className="mt-4 max-w-xl text-sm leading-relaxed text-slate-600 sm:text-base">
              Meet Dr. Sumbleen Majid at La Esthetique, F-11 Markaz, for personalized dermatology, skin, hair and aesthetic care.
            </p>
            <div className="mt-5 grid gap-2 text-xs text-slate-700 sm:grid-cols-2">
              {["Dermatology", "Skin & Hair Care", "Aesthetic Treatments", "F-11 Markaz, Islamabad"].map((item) => (
                <div key={item} className="flex items-start gap-2">
                  <Check className="mt-0.5 h-3.5 w-3.5 shrink-0 text-[#CCA079]" />{item}
                </div>
              ))}
            </div>
            <div className="mt-6 flex flex-col gap-2.5 sm:flex-row">
              <CallButton className="w-full sm:w-auto" />
              <WhatsAppButton className="w-full sm:w-auto" />
            </div>
            <p className="mt-3 text-[10px] text-slate-500">Call or WhatsApp to request a consultation and check available dates and times.</p>
          </Reveal>

          <Reveal delay={100} className="mx-auto w-full max-w-sm">
            <div className="relative">
              <div className="absolute -inset-2 rounded-[2rem] bg-white/70 shadow-xl" aria-hidden />
              <img src={images.doctor} alt="Dr. Sumbleen Majid, dermatologist at La Esthetique in Islamabad" width={769} height={1025} fetchPriority="high" className="relative aspect-[4/5] w-full rounded-[1.7rem] object-cover object-top shadow-lg" />
              <div className="absolute bottom-3 left-3 right-3 rounded-xl bg-white/95 px-4 py-3 shadow-lg backdrop-blur-sm">
                <p className="font-display text-lg font-semibold text-[#3A3029]">Dr. Sumbleen Majid</p>
                <p className="mt-0.5 text-[10px] uppercase tracking-[0.12em] text-slate-500">Dermatologist</p>
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      <section className="border-y border-[#E6D8C9] bg-white">
        <div className="mx-auto grid max-w-6xl grid-cols-2 divide-x divide-[#E6D8C9] sm:grid-cols-4">
          {[
            [BadgeCheck, "Dermatology", "Skin & hair care"],
            [Stethoscope, "Aesthetic Care", "Treatment options"],
            [MapPin, "F-11 Markaz", "Islamabad location"],
            [MessageCircle, "Easy Booking", "Call or WhatsApp"],
          ].map(([Icon, heading, copy]) => {
            const IconComponent = Icon as typeof BadgeCheck;
            return (
              <div key={heading as string} className="flex min-h-20 items-center gap-2.5 px-3 py-4 sm:px-5">
                <IconComponent className="h-4 w-4 shrink-0 text-[#CCA079]" />
                <div>
                  <p className="text-[10px] font-semibold text-[#3A3029] sm:text-xs">{heading as string}</p>
                  <p className="mt-0.5 text-[9px] text-slate-500 sm:text-[10px]">{copy as string}</p>
                </div>
              </div>
            );
          })}
        </div>
      </section>

      <section className="bg-white px-4 py-14 sm:px-6 sm:py-18">
        <SectionTitle eyebrow="Start with your concern" title="What is bothering you today?" copy="Choose the concern closest to what you are experiencing and request a consultation." />
        <div className="mx-auto mt-8 max-w-4xl rounded-2xl border border-[#E6D8C9] bg-white p-4 shadow-sm sm:p-6">
          <div className="flex flex-wrap justify-center gap-2">
            {concerns.map((concern) => (
              <a key={concern} href={`https://wa.me/${clinic.whatsapp}?text=${encodeURIComponent(`Hello La Esthetique, I would like to book a consultation for ${concern} with Dr. Sumbleen Majid.`)}`} target="_blank" rel="noopener noreferrer" className="rounded-full border border-[#E6D8C9] bg-[#FAFAF8] px-3 py-2 text-[10px] font-medium text-slate-700 transition-colors hover:border-[#CCA079] hover:text-[#3A3029] sm:text-xs">
                {concern}
              </a>
            ))}
          </div>
          <div className="mt-5 flex flex-col justify-center gap-2.5 sm:flex-row"><WhatsAppButton /><CallButton /></div>
        </div>
      </section>

      <section className="bg-[#F5EFE8] px-4 py-14 sm:px-6 sm:py-18">
        <SectionTitle eyebrow="Why patients choose us" title="Why people in Islamabad keep coming back" copy="A clear, consultation-led approach to skin, hair and aesthetic care at La Esthetique." />
        <div className="mx-auto mt-9 grid max-w-5xl gap-3 sm:grid-cols-2 lg:grid-cols-3">
          {whyChoose.map(([Icon, heading, copy], i) => (
            <Reveal key={heading} delay={i * 40} className="rounded-xl border border-[#E6D8C9] bg-white p-5 shadow-sm">
              <Icon className="h-5 w-5 text-[#CCA079]" />
              <h3 className="mt-3 font-display text-lg font-semibold text-[#3A3029]">{heading}</h3>
              <p className="mt-1.5 text-xs leading-relaxed text-slate-500">{copy}</p>
            </Reveal>
          ))}
        </div>
      </section>

      <section className="bg-white px-4 py-14 sm:px-6 sm:py-18">
        <SectionTitle eyebrow="See the clinic before you come" title="See the clinic before your visit" copy="Get a visual feel for La Esthetique and the environment where your consultation takes place." />
        <div className="mx-auto mt-9 max-w-5xl">
          <Reveal className="overflow-hidden rounded-2xl border border-[#E6D8C9] bg-white shadow-md">
            <div className="relative">
              <img src={images.treatmentRoom} alt="Treatment room at La Esthetique" className="h-64 w-full object-cover sm:h-80" />
              <div className="absolute inset-0 bg-gradient-to-t from-black/55 via-transparent to-transparent" />
              <div className="absolute bottom-4 left-4 right-4 flex items-end justify-between gap-4 text-white">
                <div>
                  <p className="text-[10px] uppercase tracking-[0.14em] text-white/75">La Esthetique · F-11 Markaz</p>
                  <p className="mt-1 font-display text-2xl font-semibold">A calm, professional setting</p>
                </div>
                <a href={`tel:${clinic.phoneTel}`} className="hidden shrink-0 rounded-full bg-white px-4 py-2 text-xs font-semibold text-[#3A3029] sm:inline-flex">Book a visit</a>
              </div>
            </div>
          </Reveal>
          <div className="mt-3 grid grid-cols-3 gap-2 sm:gap-3">
            {[
              [images.reception, "Reception"],
              [images.doctor, "Dr. Sumbleen Majid"],
              [images.signage, "La Esthetique"],
            ].map(([src, label], i) => (
              <Reveal key={label} delay={i * 50} className="overflow-hidden rounded-xl border border-[#E6D8C9] bg-white shadow-sm">
                <img src={src} alt={label} className="h-24 w-full object-cover sm:h-36" />
                <p className="px-2 py-2 text-[9px] font-medium text-slate-600 sm:px-3 sm:text-[10px]">{label}</p>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-[#F5EFE8] px-4 py-14 sm:px-6 sm:py-18">
        <div className="mx-auto grid max-w-5xl items-center gap-8 sm:grid-cols-[0.7fr_1.3fr] sm:gap-10">
          <Reveal className="mx-auto w-full max-w-xs">
            <img src={images.doctor} alt="Dr. Sumbleen Majid" className="aspect-[4/5] w-full rounded-2xl object-cover object-top shadow-lg" />
          </Reveal>
          <Reveal delay={100}>
            <p className="text-[10px] font-semibold uppercase tracking-[0.18em] text-[#CCA079]">Meet your dermatologist</p>
            <h2 className="mt-2 font-display text-3xl font-semibold leading-tight text-[#3A3029] sm:text-4xl">Dr. Sumbleen Majid</h2>
            <p className="mt-1 text-xs font-medium uppercase tracking-[0.12em] text-slate-500">Dermatologist</p>
            <p className="mt-4 text-sm leading-relaxed text-slate-600">
              Dr. Sumbleen Majid is a dermatologist dedicated to personalized care for skin, hair and aesthetic concerns. At La Esthetique, her approach combines clinical dermatology with aesthetic treatments to support healthy, refreshed and natural-looking results.
            </p>
            <div className="mt-5 grid gap-2 text-xs text-slate-700 sm:grid-cols-2">
              {["Dermatology & skin health", "Hair & scalp concerns", "Aesthetic treatments", "Personalized consultation"].map((item) => (
                <div key={item} className="flex gap-2"><Check className="mt-0.5 h-3.5 w-3.5 shrink-0 text-[#CCA079]" />{item}</div>
              ))}
            </div>
            <div className="mt-6 flex flex-col gap-2.5 sm:flex-row"><CallButton /><WhatsAppButton /></div>
          </Reveal>
        </div>
      </section>

      <section className="bg-white px-4 py-14 sm:px-6 sm:py-18">
        <SectionTitle eyebrow="Patient feedback" title="What our patients say on Google" copy="Selected feedback is shown below; you can also view the clinic's current Google reviews directly." />
        <div className="mx-auto mt-9 grid max-w-5xl gap-3 sm:grid-cols-2 lg:grid-cols-4">
          {reviews.map((review, i) => (
            <Reveal key={review.name} delay={i * 45} className="flex h-full flex-col rounded-2xl border border-[#E6D8C9] bg-[#FAFAF8] p-5 shadow-sm">
              <div className="flex items-center gap-1" aria-label="5 out of 5 stars">
                {Array.from({ length: 5 }).map((_, star) => <span key={star} className="text-lg leading-none text-[#CCA079]">★</span>)}
              </div>
              <p className="mt-4 flex-1 whitespace-pre-line text-xs leading-relaxed text-slate-600">“{review.text}”</p>
              <div className="mt-5 border-t border-[#E6D8C9] pt-4">
                <p className="text-sm font-semibold text-[#3A3029]">{review.name}</p>
                <p className="mt-1 text-[10px] text-slate-500">{review.date} · Google Review</p>
              </div>
            </Reveal>
          ))}
        </div>
        <div className="mt-8 text-center">
          <a href="https://g.page/r/CUEas5sPy0uPEAE/review" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 rounded-sm bg-[#CCA079] px-5 py-3 text-xs font-semibold text-[#3A3029] hover:bg-[#B98B5F]">
            View all Google reviews <ArrowRight className="h-3.5 w-3.5" />
          </a>
        </div>
      </section>

      <section className="bg-[#FAFAF8] px-4 py-14 sm:px-6 sm:py-18">
        <SectionTitle eyebrow="Skin, hair & aesthetics" title="What we treat" copy="Explore common areas of care available at La Esthetique." />
        <div className="mx-auto mt-9 grid max-w-5xl grid-cols-2 gap-2.5 sm:grid-cols-3 lg:grid-cols-4">
          {services.map(([name, copy], i) => (
            <Reveal key={name} delay={i * 30} className="rounded-xl border border-[#E6D8C9] bg-white p-4 text-center shadow-sm">
              <Sparkles className="mx-auto h-5 w-5 text-[#CCA079]" strokeWidth={1.8} />
              <p className="mt-2 text-[10px] font-semibold leading-tight text-[#3A3029] sm:text-xs">{name}</p>
              <p className="mt-1.5 text-[9px] leading-relaxed text-slate-500">{copy}</p>
            </Reveal>
          ))}
        </div>
        <div className="mt-7 text-center">
          <a href={whatsappLink} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-1 text-xs font-semibold text-[#3A3029] hover:underline">
            Not sure what you need? Talk to the clinic <ArrowRight className="h-3.5 w-3.5" />
          </a>
        </div>
      </section>

      <section className="bg-[#3A3029] px-4 py-14 text-white sm:px-6 sm:py-18">
        <SectionTitle dark eyebrow="Our approach" title="Care built around clarity, comfort and realistic expectations" copy="Start with your concern, understand your options and choose the next step that feels right for you." />
        <div className="mx-auto mt-9 grid max-w-5xl gap-3 md:grid-cols-3">
          {[
            ["01", "Understand your concern", "Start with a consultation so your skin, hair or aesthetic concern can be understood."],
            ["02", "Discuss your options", "Suitable treatment choices can be explained according to your needs and goals."],
            ["03", "Book your visit", "Call or WhatsApp the clinic to check available dates and times."],
          ].map(([number, heading, copy], i) => (
            <Reveal key={number} delay={i * 70} className="rounded-xl border border-white/15 bg-white/10 p-5">
              <span className="text-xs font-semibold tracking-[0.2em] text-[#CCA079]">{number}</span>
              <h3 className="mt-3 font-display text-xl font-semibold">{heading}</h3>
              <p className="mt-2 text-xs leading-relaxed text-white/70">{copy}</p>
            </Reveal>
          ))}
        </div>
      </section>

      <section className="bg-white px-4 py-14 sm:px-6 sm:py-18">
        <SectionTitle eyebrow="The questions everyone asks" title="Dermatology appointment FAQs" />
        <div className="mx-auto mt-8 max-w-3xl divide-y divide-[#E6D8C9] border-y border-[#E6D8C9]">
          {faqs.map((faq, i) => (
            <Reveal key={faq.q} delay={i * 35}>
              <details className="group py-4">
                <summary className="flex cursor-pointer list-none items-center justify-between gap-4 text-xs font-semibold text-[#3A3029] sm:text-sm">
                  <span>{faq.q}</span><ChevronDown className="h-4 w-4 shrink-0 text-[#CCA079] transition-transform group-open:rotate-180" />
                </summary>
                <p className="mt-3 max-w-2xl pr-6 text-xs leading-relaxed text-slate-500">{faq.a}</p>
              </details>
            </Reveal>
          ))}
        </div>
      </section>

      <section className="bg-[#F5EFE8] px-4 py-14 sm:px-6 sm:py-18">
        <SectionTitle eyebrow="Coming to see us" title="Find La Esthetique in F-11 Markaz" copy="Use the clinic address below when planning your visit." />
        <div className="mx-auto mt-8 grid max-w-4xl gap-3 sm:grid-cols-2">
          <div className="rounded-xl border border-[#E6D8C9] bg-white p-5 shadow-sm">
            <MapPin className="h-5 w-5 text-[#CCA079]" />
            <h3 className="mt-3 font-display text-lg font-semibold text-[#3A3029]">Clinic address</h3>
            <p className="mt-2 text-xs leading-relaxed text-slate-500">{clinic.address}</p>
          </div>
          <div className="rounded-xl border border-[#E6D8C9] bg-white p-5 shadow-sm">
            <Phone className="h-5 w-5 text-[#CCA079]" />
            <h3 className="mt-3 font-display text-lg font-semibold text-[#3A3029]">Book by phone or WhatsApp</h3>
            <p className="mt-2 text-xs leading-relaxed text-slate-500">Call {clinic.phoneDisplay} or send a WhatsApp appointment request.</p>
            <div className="mt-4 flex gap-2"><CallButton /><WhatsAppButton /></div>
          </div>
        </div>
      </section>

      <section className="bg-[#3A3029] px-4 py-14 text-white sm:px-6 sm:py-18">
        <Reveal className="mx-auto max-w-3xl text-center">
          <p className="text-[10px] font-semibold uppercase tracking-[0.2em] text-[#CCA079]">Ready to take the next step?</p>
          <h2 className="mt-3 font-display text-3xl font-semibold sm:text-4xl">Your skin deserves thoughtful care.</h2>
          <p className="mx-auto mt-3 max-w-xl text-sm leading-relaxed text-white/70">Request a consultation with Dr. Sumbleen Majid at La Esthetique, F-11 Markaz, Islamabad.</p>
          <div className="mt-6 flex flex-col justify-center gap-2.5 sm:flex-row"><CallButton /><WhatsAppButton /></div>
        </Reveal>
      </section>

      <div className="fixed inset-x-0 bottom-0 z-50 grid grid-cols-2 border-t border-[#E6D8C9] bg-white shadow-2xl lg:hidden">
        <a href={`tel:${clinic.phoneTel}`} className="flex items-center justify-center gap-2 bg-[#3A3029] px-4 py-3.5 text-xs font-semibold text-white"><Phone className="h-4 w-4" /> Call Now</a>
        <a href={whatsappLink} target="_blank" rel="noopener noreferrer" className="flex items-center justify-center gap-2 bg-[#19c86a] px-4 py-3.5 text-xs font-semibold text-white"><MessageCircle className="h-4 w-4" /> WhatsApp</a>
      </div>
    </main>
  );
}
