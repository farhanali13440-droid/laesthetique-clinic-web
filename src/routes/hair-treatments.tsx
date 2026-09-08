import { createFileRoute } from "@tanstack/react-router";
import { Reveal } from "@/components/site/Reveal";
import { btnPrimary, CtaBand, TreatmentCard } from "@/components/site/ui";
import { images, whatsappLink } from "@/lib/site";
import { getTreatment, type Treatment } from "@/lib/treatments";

const title = "Hair Treatments in Islamabad | La Esthetique";
const description = "Explore personalized treatments for hair loss, thinning and scalp health with Dr. Sumbleen Majid at La Esthetique, Islamabad.";

export const Route = createFileRoute("/hair-treatments")({
  component: HairTreatments,
  head: () => ({
    meta: [
      { title }, { name: "description", content: description },
      { property: "og:title", content: title }, { property: "og:description", content: description },
      { property: "og:type", content: "website" }, { property: "og:url", content: "/hair-treatments" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
    links: [{ rel: "canonical", href: "/hair-treatments" }],
  }),
});

const items: Treatment[] = ["prp-scalp", "hair-exosomes"].flatMap((slug) => {
  const treatment = getTreatment(slug);
  return treatment ? [treatment] : [];
});

function HairTreatments() {
  return (
    <>
      <section className="bg-sand/50 pt-28 pb-20 lg:pt-36 lg:pb-28">
        <div className="mx-auto grid max-w-7xl items-center gap-12 px-5 lg:grid-cols-[1.05fr_0.95fr] lg:px-8">
          <Reveal>
            <p className="eyebrow">Hair &amp; Scalp Care</p>
            <h1 className="rule-gold mt-5 font-display text-4xl leading-[1.12] text-espresso sm:text-5xl">Personalized Hair Treatments</h1>
            <p className="mt-7 max-w-xl leading-relaxed text-muted-foreground">Hair thinning, hair loss and scalp concerns are assessed individually before a personalized treatment plan is discussed with you.</p>
            <a href={whatsappLink} target="_blank" rel="noopener noreferrer" className={`${btnPrimary} mt-9`}>Book a Consultation</a>
          </Reveal>
          <Reveal delay={120}><img src={images.hair} alt="Hair and scalp treatment at La Esthetique" className="h-[24rem] w-full rounded-sm object-cover lg:h-[32rem]" /></Reveal>
        </div>
      </section>
      <section className="mx-auto max-w-7xl px-5 py-20 lg:px-8 lg:py-28">
        <div className="mb-14 grid gap-8 border-b border-border pb-14 sm:grid-cols-2 lg:grid-cols-4">
          {["Hair Thinning", "Hair Loss", "Scalp Health", "Hair Rejuvenation"].map((concern, index) => (
            <Reveal key={concern} delay={index * 60}>
              <p className="text-xs uppercase tracking-[0.16em] text-primary">0{index + 1}</p>
              <h2 className="mt-3 font-display text-2xl text-espresso">{concern}</h2>
              <p className="mt-3 text-sm leading-relaxed text-muted-foreground">Assessment helps identify a suitable, personalized approach for your hair and scalp concern.</p>
            </Reveal>
          ))}
        </div>
        <div className="grid gap-10 sm:grid-cols-2">{items.map((t, i) => <TreatmentCard key={t.slug} {...t} delay={i * 70} />)}</div>
      </section>
      <section className="bg-sand/40 py-20 lg:py-24">
        <div className="mx-auto max-w-3xl px-5 text-center">
          <Reveal>
            <p className="eyebrow">Assessment First</p>
            <h2 className="mt-4 font-display text-3xl text-espresso sm:text-4xl">Hair &amp; Scalp Care Built Around You</h2>
            <p className="mt-6 leading-relaxed text-muted-foreground">Hair and scalp concerns can have different causes. Dr. Sumbleen begins with an individual consultation before discussing whether PRP, exosome-based care or another approach may be suitable.</p>
            <a href={whatsappLink} target="_blank" rel="noopener noreferrer" className={`${btnPrimary} mt-9`}>Discuss Your Hair Concern</a>
          </Reveal>
        </div>
      </section>
      <CtaBand />
    </>
  );
}