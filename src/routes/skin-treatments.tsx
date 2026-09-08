import { createFileRoute } from "@tanstack/react-router";
import { Reveal } from "@/components/site/Reveal";
import { btnPrimary, CtaBand, SectionHeading, TreatmentCard } from "@/components/site/ui";
import { images, whatsappLink } from "@/lib/site";
import { getTreatment, type Treatment } from "@/lib/treatments";

const title = "Skin Treatments in Islamabad | La Esthetique";
const description = "Explore dermatology, facial, laser and aesthetic skin treatments with Dr. Sumbleen Majid at La Esthetique, F-11 Markaz, Islamabad.";

export const Route = createFileRoute("/skin-treatments")({
  component: SkinTreatments,
  head: () => ({
    meta: [
      { title }, { name: "description", content: description },
      { property: "og:title", content: title }, { property: "og:description", content: description },
      { property: "og:type", content: "website" }, { property: "og:url", content: "/skin-treatments" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
    links: [{ rel: "canonical", href: "/skin-treatments" }],
  }),
});

const sections = [
  { eyebrow: "Dermatology", title: "Skin Concerns", copy: "Assessment-led care for acne scarring, skin texture, tags and overall skin health.", slugs: ["advanced-skincare", "acne-scar-treatment", "skin-tag-removal"] },
  { eyebrow: "Facial Care", title: "Skin Rejuvenation", copy: "Facial and glow-focused options selected around your skin type and individual goals.", slugs: ["chemical-peel", "led-light-therapy", "hydrafacial", "vampire-facial", "carbon-hollywood-facial", "hydrafacial-q-switched", "hydrafacial-oxygeneo", "iv-glow-drip"] },
  { eyebrow: "Natural-Looking Approach", title: "Aesthetic Treatments", copy: "Conservative aesthetic care planned around facial assessment and realistic expectations.", slugs: ["botox", "under-eye-fillers", "threads-lifting", "prp-microneedling-thread-lift", "anti-aging"] },
  { eyebrow: "Technology-Led Care", title: "Laser Treatments", copy: "Laser-based treatments for unwanted hair, tattoo pigment and selected skin concerns.", slugs: ["painless-laser-treatments", "laser-tattoo-removal", "laser-hair-removal"] },
];

function resolveTreatments(slugs: string[]): Treatment[] {
  return slugs.flatMap((slug) => {
    const treatment = getTreatment(slug);
    return treatment ? [treatment] : [];
  });
}

function SkinTreatments() {
  return (
    <>
      <section className="bg-sand/50 pt-28 pb-16 lg:pt-36 lg:pb-24">
        <div className="mx-auto grid max-w-7xl items-center gap-12 px-5 lg:grid-cols-[1.05fr_0.95fr] lg:px-8">
          <Reveal>
            <p className="eyebrow">Skin, Facial &amp; Aesthetic Care</p>
            <h1 className="rule-gold mt-4 font-display text-4xl text-espresso sm:text-5xl">Skin Treatments</h1>
            <p className="mt-7 max-w-xl leading-relaxed text-muted-foreground">Explore advanced dermatology, skin rejuvenation, laser and aesthetic treatments, organized to help you find the care most relevant to your concern.</p>
            <a href={whatsappLink} target="_blank" rel="noopener noreferrer" className={`${btnPrimary} mt-9`}>Book a Skin Consultation</a>
          </Reveal>
          <Reveal delay={120}><img src={images.skin} alt="Skin treatment consultation at La Esthetique" className="h-[24rem] w-full rounded-sm object-cover lg:h-[30rem]" /></Reveal>
        </div>
      </section>
      {sections.map((section, sectionIndex) => (
        <section key={section.title} className={sectionIndex % 2 === 1 ? "bg-sand/40 py-20 lg:py-24" : "py-20 lg:py-24"}>
          <div className="mx-auto max-w-7xl px-5 lg:px-8">
            <SectionHeading eyebrow={section.eyebrow} title={section.title} copy={section.copy} />
            <div className="mt-12 grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
              {resolveTreatments(section.slugs).map((treatment, index) => <TreatmentCard key={treatment.slug} {...treatment} delay={(index % 3) * 60} />)}
            </div>
          </div>
        </section>
      ))}
      <CtaBand title="Discuss Your Skin Concern With Dr. Sumbleen" />
    </>
  );
}