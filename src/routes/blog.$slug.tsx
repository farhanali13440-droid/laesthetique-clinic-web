import { createFileRoute } from "@tanstack/react-router";
import { ArrowLeft, ArrowRight, Check, MessageCircle, Phone } from "lucide-react";
import { Reveal } from "@/components/site/Reveal";
import { clinic, images, whatsappLink } from "@/lib/site";

const title = "Tips for Taking Care of Your Teeth While Wearing Braces | La Esthetique";
const description =
  "A complete guide to caring for your teeth while wearing braces, including brushing, cleaning between teeth, food choices, dental visits and what to do when something feels wrong.";

export const Route = createFileRoute("/blog/$slug")({
  component: BracesCareBlog,
  head: () => ({
    meta: [
      { title },
      { name: "description", content: description },
      { property: "og:title", content: title },
      { property: "og:description", content: description },
      { property: "og:type", content: "article" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
    links: [
      {
        rel: "canonical",
        href: "/blog/tips-for-taking-care-of-your-teeth-while-wearing-braces",
      },
    ],
  }),
});

const tips = [
  {
    number: "01",
    heading: "Brush carefully around every bracket",
    copy:
      "Braces create extra surfaces where plaque and food can collect. Use a soft-bristled toothbrush and fluoride toothpaste, and brush gently around the front, top and bottom of each bracket. Angle the brush so you can reach around the brackets, then clean along the gumline and the chewing surfaces of your teeth.",
  },
  {
    number: "02",
    heading: "Clean between your teeth",
    copy:
      "A toothbrush cannot clean every space between your teeth or around orthodontic wires. Floss, an interdental brush or another cleaning aid recommended by your dental professional can help reach these areas. Take your time and avoid forcing anything between the teeth or around the appliance.",
  },
  {
    number: "03",
    heading: "Be mindful of hard and sticky foods",
    copy:
      "Hard, sticky and very chewy foods can place unnecessary pressure on brackets and wires. Depending on your orthodontic appliance, your dental team may recommend avoiding or modifying certain foods. If you are unsure about a food, ask your dentist or orthodontic professional rather than guessing.",
  },
  {
    number: "04",
    heading: "Rinse after meals when brushing is not possible",
    copy:
      "You may not always be able to brush immediately after eating. When that happens, rinsing your mouth with water can help loosen and remove food particles until you can clean your teeth properly. When possible, return to your normal brushing and between-teeth cleaning routine.",
  },
  {
    number: "05",
    heading: "Keep your dental appointments",
    copy:
      "Regular dental and orthodontic appointments are an important part of care while wearing braces. These visits give your dental team an opportunity to monitor your teeth and gums, review your progress and address problems such as damaged brackets, loose wires or areas that are difficult to clean.",
  },
  {
    number: "06",
    heading: "Do not ignore a damaged bracket or wire",
    copy:
      "If a bracket breaks, a wire becomes loose or an orthodontic component is causing persistent irritation, contact your dental or orthodontic team. Do not attempt to repair, cut or reposition the appliance yourself unless your dental professional specifically tells you how to manage the situation.",
  },
] as const;

const checklist = [
  "Brush carefully around brackets and along the gumline.",
  "Clean between your teeth and around orthodontic wires.",
  "Be careful with foods that can damage braces.",
  "Rinse with water after meals when brushing is not possible.",
  "Follow the cleaning and appliance-care instructions from your dental team.",
  "Keep your scheduled dental or orthodontic visits.",
];

const foodGuidance = [
  "Very hard foods that may put pressure on brackets or wires.",
  "Sticky foods that can cling around the appliance and become difficult to clean.",
  "Very chewy foods that may pull on orthodontic components.",
  "Foods you have specifically been told to avoid by your dental or orthodontic team.",
];

const faqs = [
  [
    "How often should I brush my teeth with braces?",
    "Follow the brushing schedule recommended by your dental professional. The important point is to clean thoroughly and consistently, paying attention to the areas around brackets, wires and the gumline.",
  ],
  [
    "Can I still floss while wearing braces?",
    "Yes. Cleaning between the teeth remains important during orthodontic treatment. Your dental professional can demonstrate the technique or recommend an interdental cleaning aid that works with your particular appliance.",
  ],
  [
    "What should I do if a bracket breaks?",
    "Contact your dental or orthodontic team and follow their instructions. Avoid trying to repair or reposition the bracket yourself.",
  ],
  [
    "Should I use mouthwash?",
    "A fluoride mouthwash may be recommended in some situations, but mouthwash should complement rather than replace brushing and cleaning between the teeth. Ask your dental professional whether a mouthwash is appropriate for you.",
  ],
  [
    "Can I eat normally while wearing braces?",
    "You can usually continue eating a wide range of foods, but your dental team may recommend avoiding or modifying foods that are hard, sticky or very chewy. Follow the specific dietary guidance provided for your appliance.",
  ],
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
              Wearing braces means giving a little extra attention to your daily
              oral-care routine. Brackets and wires can make some areas harder
              to clean, so a consistent routine is important for keeping your
              teeth and gums healthy throughout orthodontic treatment.
            </p>
          </Reveal>

          <Reveal
            delay={100}
            className="mt-10 overflow-hidden rounded-sm bg-sand"
          >
            <img
              src={images.dentalRoom}
              alt="Dental care at La Esthetique"
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
                Braces can help improve the position and alignment of teeth,
                but they also change the way you clean your mouth. Brackets,
                wires and other orthodontic components create additional
                surfaces where plaque and food particles can collect. This
                means your usual oral-care routine may need a little more time
                and attention.
              </p>
              <p className="mt-5 text-base leading-8 text-muted-foreground">
                The goal is not to make your routine complicated. It is to make
                it thorough and consistent. With careful brushing, cleaning
                between the teeth, sensible food choices and regular
                professional care, you can support your oral health while your
                orthodontic treatment progresses.
              </p>
              <p className="mt-5 text-base leading-8 text-muted-foreground">
                Your own dentist or orthodontic professional should always take
                priority when their instructions differ from general
                information. Your appliance, treatment plan and oral-health
                needs may require specific recommendations.
              </p>
            </Reveal>

            <Reveal className="mt-12">
              <h2 className="font-display text-3xl sm:text-4xl">
                Why oral hygiene matters more with braces
              </h2>
              <p className="mt-4 text-sm leading-7 text-muted-foreground">
                When brackets are attached to your teeth, some areas become
                harder to reach with a normal toothbrush. Plaque can collect
                around brackets, along the gumline and between teeth if these
                areas are not cleaned carefully. Keeping the mouth clean can
                help reduce the buildup that may contribute to gum irritation
                and other oral-health concerns.
              </p>
              <p className="mt-4 text-sm leading-7 text-muted-foreground">
                A good braces-care routine therefore focuses on the whole
                mouth—not just the visible front surfaces of the teeth. Give
                attention to the gumline, the spaces between teeth, the areas
                around brackets and the surfaces that sit beneath or around
                wires.
              </p>
            </Reveal>

            <Reveal className="mt-12">
              <p className="eyebrow">Your Braces Care Routine</p>
              <h2 className="mt-3 font-display text-3xl sm:text-4xl">
                6 practical tips for healthier teeth during treatment
              </h2>
            </Reveal>

            <div className="mt-8 space-y-5">
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
                      <h2 className="font-display text-2xl leading-tight sm:text-3xl">
                        {tip.heading}
                      </h2>
                      <p className="mt-3 text-sm leading-7 text-muted-foreground">
                        {tip.copy}
                      </p>
                    </div>
                  </div>
                </Reveal>
              ))}
            </div>

            <Reveal className="mt-10 rounded-sm border border-espresso/10 bg-background p-6 sm:p-8">
              <p className="eyebrow">Daily Checklist</p>
              <h2 className="mt-3 font-display text-2xl sm:text-3xl">
                A simple routine to remember
              </h2>
              <div className="mt-5 grid gap-3 sm:grid-cols-2">
                {checklist.map((item) => (
                  <div
                    key={item}
                    className="flex gap-2.5 text-sm leading-6 text-muted-foreground"
                  >
                    <Check className="mt-1 h-4 w-4 shrink-0 text-primary" />
                    {item}
                  </div>
                ))}
              </div>
            </Reveal>

            <Reveal className="mt-12">
              <p className="eyebrow">Food & Braces</p>
              <h2 className="mt-3 font-display text-3xl sm:text-4xl">
                Foods to be careful with
              </h2>
              <p className="mt-4 text-sm leading-7 text-muted-foreground">
                Food choices can matter when you are wearing braces. Some
                foods can put stress on brackets and wires, while others may
                become trapped around the appliance and be difficult to remove.
                Your dental or orthodontic team may give you a specific list
                based on your appliance.
              </p>

              <div className="mt-6 space-y-3">
                {foodGuidance.map((item) => (
                  <div
                    key={item}
                    className="flex gap-3 rounded-sm bg-sand/50 p-4 text-sm leading-6 text-muted-foreground"
                  >
                    <Check className="mt-1 h-4 w-4 shrink-0 text-primary" />
                    {item}
                  </div>
                ))}
              </div>

              <p className="mt-5 text-sm leading-7 text-muted-foreground">
                If you are unsure whether a particular food is suitable, ask
                your dental professional. Their advice should take priority
                because recommendations can vary depending on your appliance
                and treatment plan.
              </p>
            </Reveal>

            <Reveal className="mt-12">
              <h2 className="font-display text-3xl sm:text-4xl">
                Do not forget your gums
              </h2>
              <p className="mt-4 text-sm leading-7 text-muted-foreground">
                Braces care is not only about protecting the brackets. Your
                gums also need regular attention. Clean gently along the
                gumline and pay attention to areas that are difficult to reach.
                If your gums repeatedly bleed, become very swollen or remain
                uncomfortable, discuss this with your dental professional
                rather than ignoring it.
              </p>
              <p className="mt-4 text-sm leading-7 text-muted-foreground">
                Professional dental visits can also help identify areas where
                your home-care routine may need improvement.
              </p>
            </Reveal>

            <Reveal className="mt-12">
              <h2 className="font-display text-3xl sm:text-4xl">
                Common questions about caring for braces
              </h2>
              <div className="mt-7 space-y-6">
                {faqs.map(([question, answer]) => (
                  <div
                    key={question}
                    className="border-b border-espresso/10 pb-6"
                  >
                    <h3 className="font-display text-xl sm:text-2xl">
                      {question}
                    </h3>
                    <p className="mt-2 text-sm leading-7 text-muted-foreground">
                      {answer}
                    </p>
                  </div>
                ))}
              </div>
            </Reveal>

            <Reveal className="mt-12">
              <h2 className="font-display text-3xl sm:text-4xl">
                What if your braces start causing a problem?
              </h2>
              <p className="mt-4 text-sm leading-7 text-muted-foreground">
                Contact your dental or orthodontic team if you have persistent
                pain, significant swelling, a broken bracket, a loose wire or
                another appliance problem that concerns you. They can advise
                you on what to do next and whether you need an appointment.
              </p>
              <p className="mt-4 text-sm leading-7 text-muted-foreground">
                Avoid trying to repair orthodontic appliances yourself unless
                your dental professional specifically gives you instructions
                for temporary care.
              </p>
            </Reveal>

            <Reveal className="mt-12 rounded-sm bg-sand/60 p-6 sm:p-8">
              <h2 className="font-display text-2xl sm:text-3xl">
                When should you contact your dental team?
              </h2>
              <p className="mt-3 text-sm leading-7 text-muted-foreground">
                Seek professional advice for persistent or worsening symptoms,
                significant swelling, damage to your braces or any concern that
                does not settle. If you are unsure whether something requires
                attention, it is reasonable to contact your dental professional
                and ask.
              </p>
            </Reveal>

            <Reveal className="mt-10 border-l-2 border-primary pl-5">
              <p className="text-sm leading-7 text-muted-foreground">
                <strong className="text-espresso">Important:</strong> This
                article provides general educational information and does not
                replace an individual dental or orthodontic assessment. Follow
                the instructions provided by your own dental professional if
                they differ from general advice.
              </p>
            </Reveal>
          </div>

          <aside className="lg:pt-2">
            <div className="sticky top-28 rounded-sm bg-espresso p-6 text-background">
              <p className="text-[10px] uppercase tracking-[0.18em] text-gold">
                Need dental advice?
              </p>
              <h2 className="mt-3 font-display text-2xl">
                Talk to La Esthetique
              </h2>
              <p className="mt-3 text-xs leading-relaxed text-background/70">
                Have a dental concern or need professional guidance? Request a
                consultation with the La Esthetique team.
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
              Keep your routine consistent and speak with your dental
              professional whenever you have questions or concerns during
              orthodontic treatment.
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
