import { createFileRoute, notFound, Link } from "@tanstack/react-router";
import { Check, MessageCircle } from "lucide-react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Reveal } from "@/components/site/Reveal";
import { btnGhost, btnPrimary, CtaBand } from "@/components/site/ui";
import { clinic, whatsappFor } from "@/lib/site";
import { getTreatment, treatmentDetail } from "@/lib/treatments";

export const Route = createFileRoute("/treatments/$slug")({
  loader: ({ params }) => {
    const treatment = getTreatment(params.slug);
    if (!treatment) throw notFound();
    return { name: treatment.name, description: treatment.description, slug: treatment.slug };
  },
  head: ({ loaderData }) => {
    if (!loaderData) {
      return {
        meta: [{ title: "Treatment | La Esthetique" }, { name: "robots", content: "noindex" }],
      };
    }
    const title = `${loaderData.name} in Islamabad | La Esthetique`;
    const description = `${loaderData.description} Consult Dr. Sumbleen Majid at La Esthetique, F-11 Markaz, Islamabad.`;
    return {
      meta: [
        { title },
        { name: "description", content: description },
        { property: "og:title", content: title },
        { property: "og:description", content: description },
        { property: "og:type", content: "website" },
        { property: "og:url", content: `/treatments/${loaderData.slug}` },
        { name: "twitter:card", content: "summary_large_image" },
      ],
      links: [{ rel: "canonical", href: `/treatments/${loaderData.slug}` }],
    };
  },
  component: TreatmentPage,
});

const whyPoints = [
  "Assessment-led care by a dermatologist before any treatment begins",
  "A restrained, natural-looking approach to results",
  "Modern equipment in a calm, professional clinical setting",
  "Follow-up so your plan can be reviewed and adjusted",
];

function TreatmentPage() {
  const { slug } = Route.useParams();
  const treatment = getTreatment(slug)!;
  const detail = treatmentDetail(treatment);

  return (
    <>
      {/* HERO */}
      <section className="bg-sand/50 pt-28 pb-16 lg:pt-36 lg:pb-24">
        <div className="mx-auto grid max-w-7xl items-center gap-12 px-5 lg:grid-cols-2 lg:px-8">
          <Reveal>
            <p className="eyebrow">Treatment</p>
            <h1 className="rule-gold mt-4 font-display text-4xl text-espresso sm:text-5xl">
              {treatment.name}
            </h1>
            <p className="mt-7 leading-relaxed text-muted-foreground">{treatment.description}</p>
            <div className="mt-9 flex flex-wrap gap-3">
              <Link to="/contact" className={btnPrimary}>
                Book a Consultation
              </Link>
              <a
                href={whatsappFor(treatment.name)}
                target="_blank"
                rel="noopener noreferrer"
                className={btnGhost}
              >
                <MessageCircle className="h-4 w-4" /> WhatsApp Us
              </a>
            </div>
          </Reveal>
          <Reveal delay={120} className="relative">
            <img
              src={treatment.image}
              alt={`${treatment.name} at La Esthetique, Islamabad`}
              className="h-[24rem] w-full rounded-sm object-cover lg:h-[30rem]"
            />
          </Reveal>
        </div>
      </section>

      {/* ABOUT + WHO FOR */}
      <section className="mx-auto max-w-7xl px-5 py-20 lg:px-8 lg:py-24">
        <div className="grid gap-14 lg:grid-cols-[1.2fr_0.8fr]">
          <Reveal>
            <h2 className="font-display text-3xl text-espresso">About the Treatment</h2>
            <p className="mt-5 leading-relaxed text-muted-foreground">{detail.about}</p>
          </Reveal>
          <Reveal delay={100} className="rounded-sm border border-border bg-card p-8">
            <h2 className="font-display text-2xl text-espresso">Who It May Be For</h2>
            <ul className="mt-5 space-y-4">
              {detail.whoFor.map((w) => (
                <li key={w} className="flex gap-3 text-sm leading-relaxed text-muted-foreground">
                  <Check className="mt-0.5 h-4 w-4 shrink-0 text-primary" />
                  {w}
                </li>
              ))}
            </ul>
            <p className="mt-6 text-xs leading-relaxed text-muted-foreground/80">
              Suitability is confirmed only after an individual consultation.
            </p>
          </Reveal>
        </div>
      </section>

      {/* WHAT TO EXPECT */}
      <section className="bg-sand/40 py-20 lg:py-24">
        <div className="mx-auto max-w-7xl px-5 lg:px-8">
          <Reveal>
            <h2 className="rule-gold font-display text-3xl text-espresso">What to Expect</h2>
          </Reveal>
          <ol className="mt-12 grid gap-10 sm:grid-cols-2 lg:grid-cols-4">
            {detail.expect.map((s, i) => (
              <Reveal as="li" key={s.title} delay={i * 70}>
                <p className="font-display text-3xl text-gold">
                  {String(i + 1).padStart(2, "0")}
                </p>
                <h3 className="mt-3 font-display text-xl text-espresso">{s.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{s.copy}</p>
              </Reveal>
            ))}
          </ol>
        </div>
      </section>

      {/* WHY LA ESTHETIQUE */}
      <section className="mx-auto max-w-7xl px-5 py-20 lg:px-8 lg:py-24">
        <div className="grid gap-12 lg:grid-cols-2">
          <Reveal>
            <h2 className="rule-gold font-display text-3xl text-espresso">
              Why Choose La Esthetique
            </h2>
            <p className="mt-6 leading-relaxed text-muted-foreground">
              {treatment.name} is carried out at La Esthetique by {clinic.doctor}, in F-11 Markaz,
              Islamabad.
            </p>
          </Reveal>
          <Reveal delay={100}>
            <ul className="space-y-4">
              {whyPoints.map((p) => (
                <li key={p} className="flex gap-3 leading-relaxed text-muted-foreground">
                  <Check className="mt-1 h-4 w-4 shrink-0 text-primary" />
                  {p}
                </li>
              ))}
            </ul>
          </Reveal>
        </div>
      </section>

      {/* FAQ */}
      <section className="mx-auto max-w-4xl px-5 pb-20 lg:pb-24">
        <Reveal>
          <h2 className="rule-gold font-display text-3xl text-espresso">
            Frequently Asked Questions
          </h2>
        </Reveal>
        <Reveal className="mt-10">
          <Accordion type="single" collapsible className="w-full">
            {detail.faqs.map((f, i) => (
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

      <CtaBand
        title="Book a Consultation"
        copy={`Discuss ${treatment.name.toLowerCase()} with ${clinic.doctor} at La Esthetique, Islamabad.`}
      />
    </>
  );
}
