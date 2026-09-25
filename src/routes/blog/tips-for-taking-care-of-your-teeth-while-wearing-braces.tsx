import { createFileRoute } from "@tanstack/react-router";
import { ArrowLeft, ArrowRight, Check, MessageCircle, Phone } from "lucide-react";
import { Reveal } from "@/components/site/Reveal";
import { clinic, images, whatsappLink } from "@/lib/site";

const title = "Tips for Taking Care of Your Teeth While Wearing Braces | La Esthetique";
const description =
  "Learn practical tips for brushing, cleaning between teeth, choosing foods and caring for your teeth while wearing braces.";

export const Route = createFileRoute("/blog/tips-for-taking-care-of-your-teeth-while-wearing-braces")({
  component: BracesCareBlog,
  head: () => ({
    meta: [
      { title },
      { name: "description", content: description },
      { property: "og:title", content: title },
      { property: "og:description", content: description },
      { property: "og:type", content: "article" },
      { property: "og:url", content: "/blog/tips-for-taking-care-of-your-teeth-while-wearing-braces" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
    links: [{ rel: "canonical", href: "/blog/tips-for-taking-care-of-your-teeth-while-wearing-braces" }],
  }),
});

const tools = [
  "A soft-bristled toothbrush",
  "Fluoride toothpaste",
  "An interdental brush for cleaning around brackets and wires",
  "Dental floss or a flossing aid recommended by your dental professional",
  "A fluoride mouthwash if your dental professional recommends one",
];

const tips = [
  {
    number: "01",
    title: "Brush carefully around every bracket",
    copy: "Brush your teeth gently and take time to clean around the brackets, wires and gumline. Paying attention to these areas helps remove food particles and plaque that can collect around braces.",
  },
  {
    number: "02",
    title: "Clean between your teeth",
    copy: "Food can become trapped between teeth and around orthodontic wires. Use an interdental brush or another cleaning method recommended by your dental professional to reach areas a regular toothbrush may miss.",
  },
  {
    number: "03",
    title: "Be mindful of hard and sticky foods",
    copy: "Hard, sticky or very chewy foods can put unnecessary pressure on brackets and wires. Follow the food guidance provided by your orthodontic or dental team to help protect your braces.",
  },
  {
    number: "04",
    title: "Rinse after meals when brushing is not possible",
    copy: "If you cannot brush after eating, rinsing your mouth with water can help remove loose food particles until you are able to clean your teeth properly.",
  },
  {
    number: "05",
    title: "Keep your dental appointments",
    copy: "Regular dental and orthodontic appointments allow your progress and oral health to be checked and give you an opportunity to discuss any problems with your braces.",
  },
  {
    number: "06",
    title: "Do not ignore discomfort or a damaged bracket",
    copy: "If a wire becomes loose, a bracket breaks, or you have persistent discomfort, contact your dental professional for advice rather than trying to repair the appliance yourself.",
  },
];

function BracesCareBlog() {
  return (
    <main className="bg-background pb-20 text-espresso lg:pb-0">
      <section className="bg-sand/50 px-5 pb-14 pt-28 lg:px-8 lg:pb-20 lg:pt-36">
        <div className="mx-auto max-w-5xl">
          <a
            href="/blog"
            className="inline-flex items-center gap-2 text-xs uppercase tracking-[0.16em] text-primary hover:underline"
          >
            <ArrowLeft className="h-3.5 w-3.5" /> Back to Blog
          </a>

          <Reveal className="mt-8">
            <p className="eyebrow">Dental Care · La Esthetique Journal</p>
            <h1 className="mt-5 max-w-4xl font-display text-4xl leading-[1.08] sm:text-5xl lg:text-6xl">
              Tips for Taking Care of Your Teeth While Wearing Braces
            </h1>
            <p className="mt-6 max-w-3xl text-base leading-relaxed text-muted-foreground sm:text-lg">
              Braces require a little extra attention to oral hygiene. A consistent cleaning routine
              and careful food choices can help you look after your teeth while your smile is being
              aligned.
            </p>
          </Reveal>

          <Reveal delay={100} className="mt-10 overflow-hidden rounded-sm bg-sand">
            <img
              src={images.braces}
              alt="Dental braces care"
              className="h-72 w-full object-cover sm:h-96 lg:h-[30rem]"
            />
          </Reveal>
        </div>
      </section>

      <article className="px-5 py-16 lg:px-8 lg:py-24">
        <div className="mx-auto grid max-w-5xl gap-12 lg:grid-cols-[1fr_280px] lg:gap-16">
          <div>
            <Reveal>
              <p className="text-base leading-8 text-muted-foreground">
                Wearing braces can make everyday dental care feel more detailed, but a good routine
                can make it much easier. The goal is to keep your teeth, gums and orthodontic
                appliances clean throughout treatment.
              </p>
            </Reveal>

            <Reveal className="mt-10">
              <h2 className="font-display text-3xl sm:text-4xl">Why oral care matters more with braces</h2>
              <p className="mt-4 text-sm leading-7 text-muted-foreground">
                Brackets and wires create additional areas where plaque and food particles can collect.
                If these areas are not cleaned regularly, it can become harder to keep the teeth and
                gums healthy during orthodontic treatment. A careful routine helps you clean around
                the appliance without putting unnecessary pressure on it.
              </p>
              <p className="mt-4 text-sm leading-7 text-muted-foreground">
                Good oral hygiene is not only about the braces themselves. Your natural teeth and gums
                still need daily care throughout treatment, so make brushing and interdental cleaning
                part of your normal routine.
              </p>
            </Reveal>

            <Reveal className="mt-10 rounded-sm border border-espresso/10 bg-background p-6 sm:p-8">
              <h2 className="font-display text-2xl sm:text-3xl">Keep these oral-care tools handy</h2>
              <p className="mt-3 text-sm leading-7 text-muted-foreground">
                Your exact routine may vary depending on your braces and your dental professional's
                recommendations. Commonly useful tools include:
              </p>
              <div className="mt-5 grid gap-3 sm:grid-cols-2">
                {tools.map((item) => (
                  <div key={item} className="flex gap-2.5 text-sm text-muted-foreground">
                    <Check className="mt-0.5 h-4 w-4 shrink-0 text-primary" />
                    {item}
                  </div>
                ))}
              </div>
            </Reveal>

            <div className="mt-10 space-y-5">
              {tips.map((tip, i) => (
                <Reveal
                  key={tip.number}
                  delay={i * 35}
                  className="rounded-sm border border-espresso/10 bg-background p-6 sm:p-7"
                >
                  <div className="flex gap-4">
                    <span className="shrink-0 text-xs font-semibold tracking-[0.18em] text-primary">
                      {tip.number}
                    </span>
                    <div>
                      <h2 className="font-display text-2xl leading-tight sm:text-3xl">{tip.title}</h2>
                      <p className="mt-3 text-sm leading-7 text-muted-foreground">{tip.copy}</p>
                    </div>
                  </div>
                </Reveal>
              ))}
            </div>

            <Reveal className="mt-10 rounded-sm bg-sand/60 p-6 sm:p-8">
              <h2 className="font-display text-2xl sm:text-3xl">A simple daily checklist</h2>
              <div className="mt-5 grid gap-3 sm:grid-cols-2">
                {[
                  "Brush around brackets and along the gumline.",
                  "Clean between your teeth and around the wires.",
                  "Be careful with foods that can damage braces.",
                  "Rinse after meals when brushing is not possible.",
                  "Follow the instructions from your dental team.",
                  "Keep your scheduled dental or orthodontic visits.",
                ].map((item) => (
                  <div key={item} className="flex gap-2.5 text-sm text-muted-foreground">
                    <Check className="mt-0.5 h-4 w-4 shrink-0 text-primary" />
                    {item}
                  </div>
                ))}
              </div>
            </Reveal>

            <Reveal className="mt-10">
              <h2 className="font-display text-3xl sm:text-4xl">Foods to be careful with</h2>
              <p className="mt-4 text-sm leading-7 text-muted-foreground">
                During orthodontic treatment, your dental team may recommend avoiding foods that are
                very hard, sticky or difficult to bite. These foods can put stress on brackets and
                wires or become difficult to remove from around the appliance.
              </p>
              <p className="mt-4 text-sm leading-7 text-muted-foreground">
                Instead of biting directly into hard foods, follow your orthodontic team's instructions
                about safer alternatives and preparation. If you are unsure whether a particular food
                is suitable, ask at your next appointment.
              </p>
            </Reveal>

            <Reveal className="mt-10">
              <h2 className="font-display text-3xl sm:text-4xl">A simple routine after eating</h2>
              <div className="mt-5 space-y-3">
                {[
                  ["1", "Remove any food that is visibly trapped around the braces."],
                  ["2", "Rinse with water if you cannot brush immediately."],
                  ["3", "Brush carefully when you are able to clean your teeth."],
                  ["4", "Use an interdental brush or recommended flossing aid to clean between teeth and around wires."],
                ].map(([number, item]) => (
                  <div key={number} className="flex gap-4 rounded-sm bg-sand/50 p-4">
                    <span className="text-xs font-semibold tracking-[0.18em] text-primary">{number}</span>
                    <p className="text-sm leading-6 text-muted-foreground">{item}</p>
                  </div>
                ))}
              </div>
            </Reveal>

            <Reveal className="mt-10 border-l-2 border-primary pl-5">
              <p className="text-sm leading-7 text-muted-foreground">
                <strong className="text-espresso">Important:</strong> Your dental professional may
                give you instructions specific to your braces, teeth and treatment plan. Follow their
                guidance if it differs from general advice.
              </p>
            </Reveal>
            <Reveal className="mt-10">
              <h2 className="font-display text-3xl sm:text-4xl">Common questions about braces care</h2>
              <div className="mt-6 space-y-6">
                {[
                  ["How often should I clean my teeth with braces?", "Follow the brushing schedule recommended by your dental professional. Cleaning thoroughly and consistently is especially important when brackets and wires are present."],
                  ["Can I still floss while wearing braces?", "Yes, cleaning between the teeth remains important. Your dental professional can show you the flossing method or cleaning aid that works with your particular appliance."],
                  ["What should I do if a bracket breaks?", "Contact your dental or orthodontic team and follow their instructions. Avoid attempting to repair or reposition the bracket yourself."],
                  ["Should I use mouthwash?", "A fluoride mouthwash may be recommended in some situations, but it should complement—not replace—brushing and cleaning between the teeth. Ask your dental professional what is appropriate for you."],
                ].map(([question, answer]) => (
                  <div key={question} className="border-b border-espresso/10 pb-5">
                    <h3 className="font-display text-xl">{question}</h3>
                    <p className="mt-2 text-sm leading-7 text-muted-foreground">{answer}</p>
                  </div>
                ))}
              </div>
            </Reveal>

            <Reveal className="mt-10 border-l-2 border-primary pl-5">
              <p className="text-sm leading-7 text-muted-foreground">
                <strong className="text-espresso">When to contact your dental team:</strong> Seek
                professional advice if you have persistent pain, significant swelling, a damaged or
                loose appliance, or another concern that does not settle. Your dental professional
                can advise you on the appropriate next step.
              </p>
            </Reveal>
          </div>

          <aside className="lg:pt-2">
            <div className="sticky top-28 rounded-sm bg-espresso p-6 text-background">
              <p className="text-[10px] uppercase tracking-[0.18em] text-gold">Need dental advice?</p>
              <h2 className="mt-3 font-display text-2xl">Talk to La Esthetique</h2>
              <p className="mt-3 text-xs leading-relaxed text-background/70">
                If you have a dental concern or need guidance about your oral health, request a
                consultation with the clinic.
              </p>
              <div className="mt-6 space-y-2.5">
                <a
                  href={`tel:${clinic.phoneTel}`}
                  className="inline-flex w-full items-center justify-center gap-2 bg-gold px-4 py-3 text-xs font-semibold text-espresso"
                >
                  <Phone className="h-3.5 w-3.5" /> Call {clinic.phoneDisplay}
                </a>
                <a
                  href={whatsappLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex w-full items-center justify-center gap-2 bg-[#19c86a] px-4 py-3 text-xs font-semibold text-white"
                >
                  <MessageCircle className="h-3.5 w-3.5" /> WhatsApp the Clinic
                </a>
              </div>
            </div>
          </aside>
        </div>
      </article>

      <section className="bg-sand/40 px-5 py-16 lg:px-8 lg:py-20">
        <div className="mx-auto max-w-3xl text-center">
          <Reveal>
            <p className="eyebrow">La Esthetique Journal</p>
            <h2 className="mt-4 font-display text-3xl sm:text-4xl">
              Looking after your smile starts with the daily basics.
            </h2>
            <p className="mt-4 text-sm leading-relaxed text-muted-foreground">
              Keep your routine consistent and speak with your dental professional whenever you have
              questions or concerns during orthodontic treatment.
            </p>
            <a
              href="/blog"
              className="mt-7 inline-flex items-center gap-2 text-xs uppercase tracking-[0.16em] text-primary"
            >
              Explore More Guides <ArrowRight className="h-3.5 w-3.5" />
            </a>
          </Reveal>
        </div>
      </section>
    </main>
  );
}
