import { Link } from "@tanstack/react-router";
import { MessageCircle, ArrowRight } from "lucide-react";
import { Reveal } from "@/components/site/Reveal";
import { clinic, whatsappLink } from "@/lib/site";
import { cn } from "@/lib/utils";

export const btnPrimary =
  "inline-flex items-center justify-center gap-2 rounded-sm bg-primary px-7 py-3.5 text-sm uppercase tracking-[0.14em] text-primary-foreground transition-colors hover:bg-espresso";
export const btnGhost =
  "inline-flex items-center justify-center gap-2 rounded-sm border border-primary px-7 py-3.5 text-sm uppercase tracking-[0.14em] text-primary transition-colors hover:bg-primary hover:text-primary-foreground";

export function SectionHeading({
  eyebrow,
  title,
  copy,
  className,
  as: Tag = "h2",
}: {
  eyebrow?: string;
  title: string;
  copy?: string;
  className?: string;
  as?: "h1" | "h2";
}) {
  return (
    <Reveal className={cn("max-w-2xl", className)}>
      {eyebrow && <p className="eyebrow">{eyebrow}</p>}
      <Tag className="rule-gold mt-4 font-display text-3xl text-espresso sm:text-4xl">{title}</Tag>
      {copy && <p className="mt-6 leading-relaxed text-muted-foreground">{copy}</p>}
    </Reveal>
  );
}

export function PageHero({
  eyebrow,
  title,
  copy,
  image,
  imageAlt,
}: {
  eyebrow: string;
  title: string;
  copy: string;
  image: string;
  imageAlt: string;
}) {
  return (
    <section className="bg-sand/50 pt-28 pb-16 lg:pt-36 lg:pb-24">
      <div className="mx-auto grid max-w-7xl items-center gap-12 px-5 lg:grid-cols-[1.05fr_0.95fr] lg:px-8">
        <Reveal>
          <p className="eyebrow">{eyebrow}</p>
          <h1 className="mt-5 font-display text-4xl leading-[1.12] text-espresso sm:text-5xl">
            {title}
          </h1>
          <p className="mt-6 max-w-xl leading-relaxed text-muted-foreground">{copy}</p>
          <div className="mt-9 flex flex-wrap gap-3">
            <a href={whatsappLink} target="_blank" rel="noopener noreferrer" className={btnPrimary}>
              Book an Appointment
            </a>
            <a href={whatsappLink} target="_blank" rel="noopener noreferrer" className={btnGhost}>
              <MessageCircle className="h-4 w-4" /> WhatsApp Us
            </a>
          </div>
        </Reveal>
        <Reveal delay={120} className="relative mx-auto w-full max-w-md">
          <div className="absolute -inset-3 rounded-sm border border-primary/35" aria-hidden />
          <img
            src={image}
            alt={imageAlt}
            className="relative h-full w-full rounded-sm object-cover"
          />
        </Reveal>
      </div>
    </section>
  );
}

export function CtaBand({
  title = "Book Your Consultation",
  copy = `Speak with ${clinic.doctor} at La Esthetique, F-11 Markaz, Islamabad.`,
}: {
  title?: string;
  copy?: string;
}) {
  return (
    <section className="bg-espresso py-20 text-background lg:py-24">
      <div className="mx-auto max-w-3xl px-5 text-center">
        <Reveal>
          <h2 className="font-display text-3xl sm:text-4xl">{title}</h2>
          <p className="mt-5 leading-relaxed text-background/75">{copy}</p>
          <div className="mt-9 flex flex-wrap justify-center gap-3">
            <a
              href={whatsappLink}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 rounded-sm bg-gold px-7 py-3.5 text-sm uppercase tracking-[0.14em] text-espresso transition-opacity hover:opacity-90"
            >
              Book an Appointment
            </a>
            <a
              href={whatsappLink}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 rounded-sm border border-background/40 px-7 py-3.5 text-sm uppercase tracking-[0.14em] text-background transition-colors hover:bg-background/10"
            >
              <MessageCircle className="h-4 w-4" /> WhatsApp Us
            </a>
          </div>
        </Reveal>
      </div>
    </section>
  );
}

export function TreatmentCard({
  name,
  description,
  image,
  imageAlt,
  slug,
  delay = 0,
}: {
  name: string;
  description: string;
  image: string;
  imageAlt: string;
  slug: string;
  delay?: number;
}) {
  return (
    <Reveal as="article" delay={delay} className="group flex h-full flex-col">
      <Link to="/treatments/$slug" params={{ slug }} className="overflow-hidden rounded-sm bg-sand">
        <img
          src={image}
          alt={imageAlt}
          loading="lazy"
          width={960}
          height={720}
          className="h-72 w-full object-cover transition-transform duration-700 group-hover:scale-105"
        />
      </Link>
      <h3 className="mt-5 font-display text-2xl text-espresso">{name}</h3>
      <p className="mt-2 flex-1 text-sm leading-relaxed text-muted-foreground">{description}</p>
      <Link
        to="/treatments/$slug"
        params={{ slug }}
        className="mt-4 inline-flex items-center gap-2 text-xs uppercase tracking-[0.16em] text-primary"
      >
        Learn More <ArrowRight className="h-3.5 w-3.5 transition-transform group-hover:translate-x-1" />
      </Link>
    </Reveal>
  );
}
