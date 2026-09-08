import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowRight } from "lucide-react";
import { Reveal } from "@/components/site/Reveal";
import { btnPrimary, CtaBand, SectionHeading } from "@/components/site/ui";
import { images } from "@/lib/site";

const title = "Skin & Hair Concerns | Skin Specialist in Islamabad | La Esthetique";
const description =
  "Acne, acne scars, pigmentation, skin texture, hair thinning and scalp health — assessed and treated by Dr. Sumbleen Majid in F-11 Markaz, Islamabad.";

export const Route = createFileRoute("/skin-treatments")({
  component: SkinHair,
  head: () => ({
    meta: [
      { title },
      { name: "description", content: description },
      { property: "og:title", content: title },
      { property: "og:description", content: description },
      { property: "og:type", content: "website" },
      { property: "og:url", content: "/skin-hair" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
    links: [{ rel: "canonical", href: "/skin-hair" }],
  }),
});

type Concern = { name: string; copy: string; slug: string; link: string };

const skinConcerns: Concern[] = [
  {
    name: "Acne",
    copy: "Breakouts and congestion vary in cause and severity. Assessment guides which in-clinic treatments and skincare may be appropriate.",
    slug: "advanced-skincare",
    link: "Advanced Skincare Treatments",
  },
  {
    name: "Acne Scars",
    copy: "Marks and textural changes left after acne can be addressed with customized treatment plans.",
    slug: "acne-scar-treatment",
    link: "Acne Scar Treatments",
  },
  {
    name: "Pigmentation",
    copy: "Dark patches and uneven pigmentation are assessed before selecting suitable options.",
    slug: "hydrafacial-q-switched",
    link: "HydraFacial with Q-Switched Laser",
  },
  {
    name: "Uneven Skin Tone",
    copy: "Dullness and uneven tone may be supported by exfoliating and brightening in-clinic treatments.",
    slug: "chemical-peel",
    link: "Chemical Peel",
  },
  {
    name: "Skin Texture",
    copy: "Rough or congested texture can be addressed with resurfacing and hydrating treatments.",
    slug: "hydrafacial",
    link: "HydraFacial",
  },
  {
    name: "Signs of Aging",
    copy: "Changes in firmness, fine lines and volume are reviewed as part of a personalized plan.",
    slug: "anti-aging",
    link: "Anti-Aging Treatments",
  },
  {
    name: "Skin Tags",
    copy: "Skin tags can be assessed and removed in clinic where appropriate.",
    slug: "skin-tag-removal",
    link: "Skin Tag Removal",
  },
];

const hairConcerns: Concern[] = [
  {
    name: "Hair Thinning",
    copy: "Reduced density is assessed before discussing scalp-focused treatment options.",
    slug: "prp-scalp",
    link: "PRP Scalp Treatment",
  },
  {
    name: "Hair Loss",
    copy: "Hair loss has many possible causes; a consultation helps identify an appropriate approach.",
    slug: "hair-exosomes",
    link: "Hair Exosomes",
  },
  {
    name: "Scalp Health",
    copy: "Scalp condition is reviewed as part of any hair-focused treatment plan.",
    slug: "prp-scalp",
    link: "PRP Scalp Treatment",
  },
  {
    name: "Hair Rejuvenation",
    copy: "Advanced treatments may be used to support follicle and scalp health over a course of sessions.",
    slug: "hair-exosomes",
    link: "Hair Exosomes",
  },
];

function ConcernGrid({ items }: { items: Concern[] }) {
  return (
    <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
      {items.map((c, i) => (
        <Reveal
          as="article"
          key={c.name}
          delay={(i % 3) * 60}
          className="flex h-full flex-col rounded-sm border border-border bg-card p-7 transition-colors hover:border-primary/50"
        >
          <h3 className="font-display text-xl text-espresso">{c.name}</h3>
          <p className="mt-3 flex-1 text-sm leading-relaxed text-muted-foreground">{c.copy}</p>
          <Link
            to="/treatments/$slug"
            params={{ slug: c.slug }}
            className="mt-6 inline-flex items-center gap-2 text-xs uppercase tracking-[0.14em] text-primary"
          >
            {c.link} <ArrowRight className="h-3.5 w-3.5" />
          </Link>
        </Reveal>
      ))}
    </div>
  );
}

function SkinHair() {
  return (
    <>
      <section className="bg-sand/50 pt-28 pb-16 lg:pt-36 lg:pb-24">
        <div className="mx-auto grid max-w-7xl items-center gap-12 px-5 lg:grid-cols-[1.05fr_0.95fr] lg:px-8">
          <Reveal>
            <p className="eyebrow">Dermatology</p>
            <h1 className="rule-gold mt-4 font-display text-4xl text-espresso sm:text-5xl">
              Skin &amp; Hair Concerns
            </h1>
            <p className="mt-7 max-w-xl leading-relaxed text-muted-foreground">
              Every concern is assessed individually before any treatment is recommended. Below are
              the skin, hair and scalp concerns most often discussed at La Esthetique.
            </p>
            <Link to="/contact" className={`${btnPrimary} mt-9`}>
              Discuss Your Concern With Dr. Sumbleen
            </Link>
          </Reveal>
          <Reveal delay={120}>
            <img
              src={images.skin}
              alt="Close-up of healthy, well-cared-for skin"
              className="h-[24rem] w-full rounded-sm object-cover lg:h-[30rem]"
            />
          </Reveal>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-5 py-20 lg:px-8 lg:py-24">
        <SectionHeading eyebrow="Skin" title="Skin Concerns" />
        <ConcernGrid items={skinConcerns} />
      </section>

      <section className="bg-sand/40 py-20 lg:py-24">
        <div className="mx-auto max-w-7xl px-5 lg:px-8">
          <SectionHeading eyebrow="Hair & Scalp" title="Hair & Scalp Concerns" />
          <ConcernGrid items={hairConcerns} />
        </div>
      </section>

      <CtaBand title="Discuss Your Concern With Dr. Sumbleen" />
    </>
  );
}
