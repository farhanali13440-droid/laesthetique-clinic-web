import { createFileRoute } from "@tanstack/react-router";
import { MapPin } from "lucide-react";
import { Reveal } from "@/components/site/Reveal";
import { Gallery } from "@/components/site/Gallery";
import { CtaBand, SectionHeading } from "@/components/site/ui";
import { clinic, images } from "@/lib/site";

const title = "Experience La Esthetique | Dermatology Clinic in F-11 Markaz, Islamabad";
const description =
  "Take a look inside La Esthetique — reception, treatment rooms and equipment at our dermatology and aesthetic clinic in F-11 Markaz, Islamabad.";

export const Route = createFileRoute("/clinic")({
  component: Clinic,
  head: () => ({
    meta: [
      { title },
      { name: "description", content: description },
      { property: "og:title", content: title },
      { property: "og:description", content: description },
      { property: "og:type", content: "website" },
      { property: "og:url", content: "/clinic" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
    links: [{ rel: "canonical", href: "/clinic" }],
  }),
});

function Clinic() {
  return (
    <>
      <section className="bg-sand/50 pt-28 pb-14 lg:pt-36 lg:pb-20">
        <div className="mx-auto max-w-3xl px-5 text-center">
          <Reveal>
            <p className="eyebrow">The Clinic</p>
            <h1 className="mt-4 font-display text-4xl text-espresso sm:text-5xl">
              Experience La Esthetique
            </h1>
            <p className="mt-6 leading-relaxed text-muted-foreground">
              A dermatology and medical aesthetics clinic in F-11 Markaz, Islamabad.
            </p>
          </Reveal>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-5 py-20 lg:px-8 lg:py-24">
        <Reveal>
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
              {
                src: images.doctor,
                alt: "Dr. Sumbleen Majid at La Esthetique, Islamabad",
                caption: "Doctor at Work",
              },
              {
                src: images.care,
                alt: "Skincare products used during treatments at La Esthetique",
                caption: "Clinic Environment",
              },
            ]}
          />
        </Reveal>
      </section>

      <section className="bg-sand/40 py-20 lg:py-24">
        <div className="mx-auto grid max-w-7xl items-center gap-12 px-5 lg:grid-cols-2 lg:px-8">
          <Reveal>
            <SectionHeading
              eyebrow="Comfort"
              title="A Comfortable Space for Personalized Care"
              copy="The clinic is arranged so consultations feel unhurried and treatments feel calm — private treatment rooms, modern equipment and a quiet reception area, with your care handled personally by Dr. Sumbleen Majid."
            />
          </Reveal>
          <Reveal delay={100} className="rounded-sm border border-border bg-card p-8">
            <p className="eyebrow">Visit Us</p>
            <p className="mt-4 flex gap-3 leading-relaxed text-muted-foreground">
              <MapPin className="mt-1 h-5 w-5 shrink-0 text-primary" />
              {clinic.address}
            </p>
            <div className="mt-7 overflow-hidden rounded-sm border border-border">
              <iframe
                title="Map showing La Esthetique in F-11 Markaz, Islamabad"
                src="https://www.google.com/maps?q=Lord%20Trade%20Center%20F-11%20Markaz%20Islamabad&output=embed"
                className="h-72 w-full"
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
            </div>
          </Reveal>
        </div>
      </section>

      <CtaBand />
    </>
  );
}
