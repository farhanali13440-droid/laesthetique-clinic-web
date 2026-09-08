import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowRight } from "lucide-react";
import { Reveal } from "@/components/site/Reveal";
import { btnGhost, CtaBand } from "@/components/site/ui";
import { treatmentCategories } from "@/lib/treatments";

const title = "Treatments | Skin, Hair & Aesthetics | La Esthetique Islamabad";
const description =
  "Explore dermatology, hair, aesthetic and wellness treatments offered by Dr. Sumbleen Majid at La Esthetique, F-11 Markaz, Islamabad.";

export const Route = createFileRoute("/treatments/")({
  component: Treatments,
  head: () => ({
    meta: [
      { title },
      { name: "description", content: description },
      { property: "og:title", content: title },
      { property: "og:description", content: description },
      { property: "og:type", content: "website" },
      { property: "og:url", content: "/treatments" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
    links: [{ rel: "canonical", href: "/treatments" }],
  }),
});

function Treatments() {
  return (
    <>
      <section className="bg-sand/50 pt-28 pb-14 lg:pt-36 lg:pb-20">
        <div className="mx-auto max-w-3xl px-5 text-center">
          <Reveal>
            <p className="eyebrow">Our Treatments</p>
            <h1 className="mt-4 font-display text-4xl text-espresso sm:text-5xl">
              Personalized Skin, Hair &amp; Aesthetic Treatments
            </h1>
            <p className="mt-6 leading-relaxed text-muted-foreground">
              Choose a category to explore the treatments available at La Esthetique, Islamabad.
            </p>
          </Reveal>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-5 py-20 lg:px-8 lg:py-24">
        <div className="grid gap-8 sm:grid-cols-2">
          {treatmentCategories.map((c, i) => (
            <Reveal
              as="article"
              key={c.slug}
              delay={i * 70}
              className="group flex h-full flex-col overflow-hidden rounded-sm border border-border bg-card"
            >
              <Link to="/treatments/category/$category" params={{ category: c.slug }}>
                <img
                  src={c.image}
                  alt={c.name}
                  loading="lazy"
                  className="h-64 w-full object-cover transition-transform duration-700 group-hover:scale-105"
                />
              </Link>
              <div className="flex flex-1 flex-col p-8">
                <h2 className="font-display text-2xl text-espresso">{c.name}</h2>
                <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{c.blurb}</p>
                <ul className="mt-6 flex flex-wrap gap-2">
                  {c.items.slice(0, 4).map((t) => (
                    <li
                      key={t.slug}
                      className="rounded-sm border border-border px-3 py-1.5 text-xs text-muted-foreground"
                    >
                      {t.name}
                    </li>
                  ))}
                  {c.items.length > 4 && (
                    <li className="px-2 py-1.5 text-xs text-primary">
                      +{c.items.length - 4} more
                    </li>
                  )}
                </ul>
                <Link
                  to="/treatments/category/$category"
                  params={{ category: c.slug }}
                  className="mt-auto inline-flex items-center gap-2 pt-7 text-xs uppercase tracking-[0.16em] text-primary"
                >
                  Explore {c.name} <ArrowRight className="h-3.5 w-3.5" />
                </Link>
              </div>
            </Reveal>
          ))}
        </div>

        <div className="mt-14 flex flex-wrap justify-center gap-3">
          <Link to="/skin-hair" className={btnGhost}>
            Skin &amp; Hair Concerns
          </Link>
          <Link to="/aesthetics" className={btnGhost}>
            Aesthetic Treatments
          </Link>
        </div>
      </section>

      <CtaBand />
    </>
  );
}
