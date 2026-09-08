import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowRight } from "lucide-react";
import { Reveal } from "@/components/site/Reveal";
import { btnGhost, btnPrimary, CtaBand } from "@/components/site/ui";
import { images } from "@/lib/site";
import { getTreatment } from "@/lib/treatments";

const title = "Aesthetic Treatments | Botox & Fillers in Islamabad | La Esthetique";
const description =
  "Subtle, natural-looking aesthetic treatments — Botox, fillers, threads, PRP microneedling and skin rejuvenation with Dr. Sumbleen Majid, Islamabad.";

export const Route = createFileRoute("/aesthetics")({
  component: Aesthetics,
  head: () => ({
    meta: [
      { title },
      { name: "description", content: description },
      { property: "og:title", content: title },
      { property: "og:description", content: description },
      { property: "og:type", content: "website" },
      { property: "og:url", content: "/aesthetics" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
    links: [{ rel: "canonical", href: "/aesthetics" }],
  }),
});

const slugs = [
  "botox",
  "under-eye-fillers",
  "threads-lifting",
  "anti-aging",
  "prp-microneedling-thread-lift",
  "advanced-skincare",
  "hydrafacial",
  "carbon-hollywood-facial",
];

const items = slugs.map((s) => getTreatment(s)).filter(Boolean) as NonNullable<
  ReturnType<typeof getTreatment>
>[];

function Aesthetics() {
  return (
    <>
      <section className="relative bg-espresso pt-28 pb-20 text-background lg:pt-36 lg:pb-28">
        <div className="mx-auto grid max-w-7xl items-center gap-12 px-5 lg:grid-cols-[1.05fr_0.95fr] lg:px-8">
          <Reveal>
            <p className="text-[0.72rem] uppercase tracking-[0.24em] text-gold">Aesthetics</p>
            <h1 className="mt-5 font-display text-4xl leading-[1.12] sm:text-5xl">
              Subtle Enhancements. Natural-Looking Results.
            </h1>
            <p className="mt-7 max-w-xl leading-relaxed text-background/75">
              Aesthetic treatments at La Esthetique are planned conservatively — assessed first,
              discussed openly, and carried out with a preference for restraint over transformation.
            </p>
            <div className="mt-9 flex flex-wrap gap-3">
              <Link
                to="/contact"
                className="inline-flex items-center justify-center gap-2 rounded-sm bg-gold px-7 py-3.5 text-sm uppercase tracking-[0.14em] text-espresso transition-opacity hover:opacity-90"
              >
                Book a Consultation
              </Link>
              <Link
                to="/treatments"
                className="inline-flex items-center justify-center gap-2 rounded-sm border border-background/40 px-7 py-3.5 text-sm uppercase tracking-[0.14em] text-background transition-colors hover:bg-background/10"
              >
                All Treatments
              </Link>
            </div>
          </Reveal>
          <Reveal delay={120}>
            <img
              src={images.glow}
              alt="Soft ivory textures reflecting the calm aesthetic of La Esthetique"
              className="h-[24rem] w-full rounded-sm object-cover lg:h-[32rem]"
            />
          </Reveal>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-5 py-20 lg:px-8 lg:py-28">
        <div className="grid gap-x-10 gap-y-14 sm:grid-cols-2 lg:grid-cols-4">
          {items.map((t, i) => (
            <Reveal as="article" key={t.slug} delay={(i % 4) * 60} className="group">
              <Link
                to="/treatments/$slug"
                params={{ slug: t.slug }}
                className="block overflow-hidden rounded-sm bg-sand"
              >
                <img
                  src={t.image}
                  alt={t.name}
                  loading="lazy"
                  className="h-64 w-full object-cover transition-transform duration-700 group-hover:scale-105"
                />
              </Link>
              <h2 className="mt-5 font-display text-xl text-espresso">{t.name}</h2>
              <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{t.description}</p>
              <Link
                to="/treatments/$slug"
                params={{ slug: t.slug }}
                className="mt-4 inline-flex items-center gap-2 text-xs uppercase tracking-[0.16em] text-primary"
              >
                Learn More <ArrowRight className="h-3.5 w-3.5" />
              </Link>
            </Reveal>
          ))}
        </div>
      </section>

      <section className="bg-sand/40 py-20 lg:py-24">
        <div className="mx-auto max-w-3xl px-5 text-center">
          <Reveal>
            <p className="eyebrow">Our Approach</p>
            <h2 className="mt-4 font-display text-3xl text-espresso sm:text-4xl">
              Considered, Not Overdone
            </h2>
            <p className="mt-6 leading-relaxed text-muted-foreground">
              Facial assessment comes before any treatment. Options are explained clearly, including
              what a treatment can and cannot address, so decisions are made with realistic
              expectations and no pressure.
            </p>
            <Link to="/about" className={`${btnGhost} mt-9`}>
              Meet Dr. Sumbleen
            </Link>
            <Link to="/contact" className={`${btnPrimary} mt-9 ml-3`}>
              Book a Consultation
            </Link>
          </Reveal>
        </div>
      </section>

      <CtaBand />
    </>
  );
}
