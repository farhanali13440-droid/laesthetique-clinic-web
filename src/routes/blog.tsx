import { createFileRoute } from "@tanstack/react-router";
import { ArrowRight, BookOpen, CheckCircle2, Sparkles } from "lucide-react";
import { Reveal } from "@/components/site/Reveal";
import { SectionHeading, btnPrimary } from "@/components/site/ui";
import { images, whatsappLink } from "@/lib/site";

const title = "La Esthetique Blog | Skin, Hair & Dental Care Guides";
const description =
  "Helpful skin, hair, aesthetic and dental care guides from La Esthetique, Islamabad.";

export const Route = createFileRoute("/blog")({
  component: Blog,
  head: () => ({
    meta: [
      { title },
      { name: "description", content: description },
      { property: "og:title", content: title },
      { property: "og:description", content: description },
      { property: "og:type", content: "website" },
      { property: "og:url", content: "/blog" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
    links: [{ rel: "canonical", href: "/blog" }],
  }),
});

const posts = [
  {
    id: "skin-treatment-consultation",
    category: "Skin & Aesthetics",
    title: "What to Know Before Choosing a Skin Treatment",
    excerpt:
      "A consultation can help you understand your skin concern, discuss suitable options and decide on a care plan that fits your needs.",
    image: images.skin,
    alt: "Skin and aesthetic treatment at La Esthetique",
    points: ["Understand your concern", "Discuss suitable options", "Plan your next step"],
  },
  {
    id: "hair-fall",
    category: "Hair Care",
    title: "Common Causes of Hair Fall: When to Seek Advice",
    excerpt:
      "Hair fall can have different contributing factors. Understanding your concern is an important first step before choosing a treatment.",
    image: images.hair,
    alt: "Hair care at La Esthetique",
    points: ["Look at the pattern", "Consider possible causes", "Seek professional assessment"],
  },
  {
    id: "dental-checkups",
    category: "Dental Care",
    title: "How Regular Dental Checkups Support Your Smile",
    excerpt:
      "Routine dental visits can help you stay informed about your oral health and address concerns before they become more complicated.",
    image: images.dentalRoom,
    alt: "Dental treatment room at La Esthetique",
    points: ["Routine assessment", "Professional cleaning", "Personalized dental guidance"],
  },
  {
    id: "acne-care",
    category: "Dermatology",
    title: "A Simple Guide to Managing Acne Concerns",
    excerpt:
      "Acne can look different from person to person. A consistent routine and professional guidance can help you understand your options.",
    image: images.glow,
    alt: "Skin care at La Esthetique",
    points: ["Understand your skin", "Keep your routine consistent", "Ask about suitable treatment"],
  },
  {
    id: "laser-hair-removal",
    category: "Aesthetic Care",
    title: "Questions to Ask Before Laser Hair Removal",
    excerpt:
      "Before starting a laser hair removal plan, it is useful to understand your treatment area, expectations and recommended schedule.",
    image: images.skin,
    alt: "Aesthetic treatment at La Esthetique",
    points: ["Discuss your skin and hair type", "Understand the treatment plan", "Ask about aftercare"],
  },
  {
    id: "smile-care",
    category: "Dental Care",
    title: "Everyday Habits That Help Support a Healthy Smile",
    excerpt:
      "Small daily habits can make a meaningful part of your oral-care routine alongside professional dental checkups.",
    image: images.dentalRoom,
    alt: "Dental care at La Esthetique",
    points: ["Brush consistently", "Clean between teeth", "Keep regular checkups"],
  },
] as const;

function Blog() {
  return (
    <main className="bg-background pb-20 text-espresso lg:pb-0">
      <section className="bg-sand/50 px-5 pb-16 pt-32 lg:px-8 lg:pb-24 lg:pt-40">
        <div className="mx-auto max-w-7xl">
          <Reveal className="mx-auto max-w-3xl text-center">
            <p className="eyebrow">La Esthetique Journal</p>
            <h1 className="mt-5 font-display text-4xl leading-tight sm:text-5xl lg:text-6xl">
              Helpful Guides for Your Skin, Hair &amp; Smile
            </h1>
            <p className="mx-auto mt-6 max-w-2xl text-base leading-relaxed text-muted-foreground">
              Clear, practical information to help you understand common concerns and prepare for a
              more informed conversation with your doctor or dentist.
            </p>
          </Reveal>

          <Reveal delay={100} className="mx-auto mt-12 max-w-5xl overflow-hidden rounded-sm bg-espresso">
            <div className="grid items-stretch lg:grid-cols-[1.15fr_0.85fr]">
              <div className="relative min-h-72">
                <img
                  src={images.skin}
                  alt="Skin and aesthetic care at La Esthetique"
                  className="absolute inset-0 h-full w-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-espresso/85 via-espresso/25 to-transparent" />
                <div className="absolute bottom-6 left-6 text-background sm:bottom-8 sm:left-8">
                  <p className="text-xs uppercase tracking-[0.2em] text-gold">Featured Guide</p>
                  <h2 className="mt-2 max-w-lg font-display text-3xl sm:text-4xl">
                    Start with the right questions before your treatment
                  </h2>
                </div>
              </div>
              <div className="flex flex-col justify-center p-7 text-background sm:p-10">
                <BookOpen className="h-6 w-6 text-gold" strokeWidth={1.5} />
                <p className="mt-5 text-sm leading-relaxed text-background/75">
                  Our journal is designed to make clinic conversations easier — without replacing
                  personalized medical or dental advice.
                </p>
                <a href="#latest-guides" className="mt-7 inline-flex w-fit items-center gap-2 text-xs uppercase tracking-[0.16em] text-gold">
                  Browse the guides <ArrowRight className="h-3.5 w-3.5" />
                </a>
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      <section id="latest-guides" className="px-5 py-20 lg:px-8 lg:py-28">
        <div className="mx-auto max-w-7xl">
          <SectionHeading
            eyebrow="Latest Guides"
            title="Explore our patient education"
            copy="Browse practical guides across dermatology, hair care, aesthetics and dentistry."
          />

          <div className="mt-12 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {posts.map((post, i) => (
              <Reveal
                as="article"
                key={post.id}
                delay={i * 50}
                className="group flex h-full flex-col overflow-hidden rounded-sm border border-espresso/10 bg-background"
              >
                <div className="overflow-hidden bg-sand">
                  <img
                    src={post.image}
                    alt={post.alt}
                    loading="lazy"
                    className="h-56 w-full object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                </div>
                <div className="flex flex-1 flex-col p-6">
                  <p className="text-[10px] font-medium uppercase tracking-[0.18em] text-primary">
                    {post.category}
                  </p>
                  <h2 className="mt-3 font-display text-2xl leading-tight text-espresso">
                    {post.title}
                  </h2>
                  <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{post.excerpt}</p>
                  <div className="mt-5 space-y-2">
                    {post.points.map((point) => (
                      <div key={point} className="flex items-center gap-2 text-xs text-muted-foreground">
                        <CheckCircle2 className="h-3.5 w-3.5 shrink-0 text-primary" />
                        {point}
                      </div>
                    ))}
                  </div>
                  <a
                    href={`#${post.id}`}
                    className="mt-6 inline-flex w-fit items-center gap-2 text-xs uppercase tracking-[0.16em] text-primary"
                  >
                    Read Guide <ArrowRight className="h-3.5 w-3.5 transition-transform group-hover:translate-x-1" />
                  </a>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-sand/40 py-20 lg:py-28">
        <div className="mx-auto max-w-5xl px-5 lg:px-8">
          <SectionHeading
            eyebrow="Why our journal exists"
            title="Information that helps you ask better questions"
            copy="Online information can help you prepare, but treatment decisions should always be personalized to your individual needs."
          />
          <div className="mt-10 grid gap-4 sm:grid-cols-3">
            {[
              ["01", "Understand", "Learn the basics of a concern before your consultation."],
              ["02", "Discuss", "Use what you learn to have a clearer conversation with your doctor or dentist."],
              ["03", "Decide", "Explore appropriate next steps based on professional guidance."],
            ].map(([number, heading, copy], i) => (
              <Reveal key={number} delay={i * 60} className="rounded-sm border border-espresso/10 bg-background p-6">
                <span className="text-xs tracking-[0.2em] text-primary">{number}</span>
                <h3 className="mt-3 font-display text-xl">{heading}</h3>
                <p className="mt-2 text-xs leading-relaxed text-muted-foreground">{copy}</p>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-espresso py-20 text-background lg:py-24">
        <div className="mx-auto max-w-3xl px-5 text-center">
          <Reveal>
            <Sparkles className="mx-auto h-7 w-7 text-gold" strokeWidth={1.3} />
            <h2 className="mt-5 font-display text-3xl sm:text-4xl">Have a concern you want to discuss?</h2>
            <p className="mt-5 leading-relaxed text-background/75">
              If you are unsure what care is right for you, speak with the La Esthetique team about
              your concern and available consultation options.
            </p>
            <a
              href={whatsappLink}
              target="_blank"
              rel="noopener noreferrer"
              className={`${btnPrimary} mt-8`}
            >
              Book a Consultation
            </a>
          </Reveal>
        </div>
      </section>
    </main>
  );
}
