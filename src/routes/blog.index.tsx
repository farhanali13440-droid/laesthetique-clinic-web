import { createFileRoute } from "@tanstack/react-router";
import { ArrowRight, Clock } from "lucide-react";
import { Reveal } from "@/components/site/Reveal";
import { btnPrimary } from "@/components/site/ui";
import { images, whatsappLink } from "@/lib/site";

const title = "La Esthetique Blog | Skin, Hair & Dental Care Guides";
const description =
  "Practical skin, hair, aesthetic and dental care guides from La Esthetique, Islamabad — written to help you prepare for your consultation.";

export const Route = createFileRoute("/blog/")({
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

type Post = {
  href: string;
  category: string;
  title: string;
  excerpt: string;
  image: string;
  alt: string;
  readTime: string;
};

// Add new published guides here (newest first). The first one is featured.
const posts: Post[] = [
  {
    href: "/blog/tips-for-taking-care-of-your-teeth-while-wearing-braces",
    category: "Dental Care",
    title: "Tips for Taking Care of Your Teeth While Wearing Braces",
    excerpt:
      "A practical guide to brushing around brackets, cleaning between teeth, choosing foods carefully and knowing when to contact your dental team during orthodontic treatment.",
    image: images.braces,
    alt: "Dental braces care",
    readTime: "5 min read",
  },
];

const categories = ["Skin & Aesthetics", "Hair Care", "Dental Care"];

function Blog() {
  const [featured, ...rest] = posts;
  return (
    <main className="bg-background pb-20 text-espresso lg:pb-0">
      <section className="bg-sand/50 px-5 pb-14 pt-32 lg:px-8 lg:pb-20 lg:pt-40">
        <div className="mx-auto max-w-6xl">
          <Reveal className="mx-auto max-w-2xl text-center">
            <p className="eyebrow">La Esthetique Journal</p>
            <h1 className="mt-5 font-display text-4xl leading-tight sm:text-5xl lg:text-6xl">
              Guides for Your Skin, Hair &amp; Smile
            </h1>
            <p className="mx-auto mt-5 max-w-xl text-base leading-relaxed text-muted-foreground">
              Clear, practical information to help you prepare for a more informed conversation
              with your doctor or dentist.
            </p>
            <div className="mt-7 flex flex-wrap justify-center gap-2">
              {categories.map((c) => (
                <span
                  key={c}
                  className="rounded-full border border-espresso/15 bg-background px-4 py-1.5 text-[11px] uppercase tracking-[0.14em] text-muted-foreground"
                >
                  {c}
                </span>
              ))}
            </div>
          </Reveal>

          {featured && (
            <Reveal delay={100} className="mt-12">
              <a
                href={featured.href}
                className="group grid overflow-hidden rounded-sm border border-espresso/10 bg-background lg:grid-cols-[1.1fr_0.9fr]"
              >
                <div className="overflow-hidden bg-sand">
                  <img
                    src={featured.image}
                    alt={featured.alt}
                    className="h-64 w-full object-cover transition-transform duration-700 group-hover:scale-105 sm:h-80 lg:h-full"
                  />
                </div>
                <div className="flex flex-col justify-center p-7 sm:p-10">
                  <p className="text-[10px] uppercase tracking-[0.2em] text-primary">
                    Featured · {featured.category}
                  </p>
                  <h2 className="mt-3 font-display text-3xl leading-tight group-hover:text-primary sm:text-4xl">
                    {featured.title}
                  </h2>
                  <p className="mt-4 text-sm leading-relaxed text-muted-foreground">{featured.excerpt}</p>
                  <div className="mt-6 flex items-center justify-between gap-4">
                    <span className="inline-flex items-center gap-1.5 text-xs text-muted-foreground">
                      <Clock className="h-3.5 w-3.5" /> {featured.readTime}
                    </span>
                    <span className="inline-flex items-center gap-2 text-xs uppercase tracking-[0.16em] text-primary">
                      Read Guide <ArrowRight className="h-3.5 w-3.5 transition-transform group-hover:translate-x-1" />
                    </span>
                  </div>
                </div>
              </a>
            </Reveal>
          )}
        </div>
      </section>

      {rest.length > 0 && (
        <section className="px-5 py-16 lg:px-8 lg:py-24">
          <div className="mx-auto grid max-w-6xl gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {rest.map((p) => (
              <a key={p.href} href={p.href} className="group overflow-hidden rounded-sm border border-espresso/10 bg-background">
                <img src={p.image} alt={p.alt} loading="lazy" className="h-52 w-full object-cover" />
                <div className="p-6">
                  <p className="text-[10px] uppercase tracking-[0.18em] text-primary">{p.category}</p>
                  <h3 className="mt-2 font-display text-xl group-hover:text-primary">{p.title}</h3>
                  <p className="mt-2 text-xs leading-relaxed text-muted-foreground">{p.excerpt}</p>
                </div>
              </a>
            ))}
          </div>
        </section>
      )}

      <section className="px-5 py-14 lg:px-8 lg:py-20">
        <Reveal className="mx-auto max-w-3xl text-center">
          <p className="text-sm leading-relaxed text-muted-foreground">
            More skin, hair and dental guides are on the way. Our articles are for general
            information and do not replace a personal consultation.
          </p>
        </Reveal>
      </section>

      <section className="bg-espresso py-16 text-background lg:py-20">
        <div className="mx-auto max-w-2xl px-5 text-center">
          <Reveal>
            <h2 className="font-display text-3xl sm:text-4xl">Have a concern you want to discuss?</h2>
            <p className="mt-4 leading-relaxed text-background/75">
              Speak with the La Esthetique team about skin, hair or dental care.
            </p>
            <a href={whatsappLink} target="_blank" rel="noopener noreferrer" className={btnPrimary + " mt-7"}>
              Book a Consultation
            </a>
          </Reveal>
        </div>
      </section>
    </main>
  );
}
