import { createFileRoute } from "@tanstack/react-router";
import { ArrowLeft, ArrowRight, Check, MessageCircle, Phone } from "lucide-react";
import { Reveal } from "@/components/site/Reveal";
import { clinic, images, whatsappLink } from "@/lib/site";

const title = "Tips for Taking Care of Your Teeth While Wearing Braces | La Esthetique";
const description = "Practical tips for brushing, cleaning between teeth, choosing foods and caring for your teeth while wearing braces.";

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
    links: [{ rel: "canonical", href: "/blog/tips-for-taking-care-of-your-teeth-while-wearing-braces" }],
  }),
});

const tips = [
  ["01", "Brush carefully around every bracket", "Brush gently around brackets, wires and the gumline. Take your time so food particles and plaque are not left around the appliance."],
  ["02", "Clean between your teeth", "Food can become trapped between teeth and around orthodontic wires. Use an interdental brush or another cleaning method recommended by your dental professional."],
  ["03", "Be mindful of hard and sticky foods", "Hard, sticky and very chewy foods can put unnecessary pressure on brackets and wires. Follow the food guidance provided by your dental or orthodontic team."],
  ["04", "Rinse after meals when brushing is not possible", "If you cannot brush immediately after eating, rinse with water to help remove loose food particles until you can clean your teeth properly."],
  ["05", "Keep your dental appointments", "Regular appointments allow your oral health and orthodontic progress to be checked and give you an opportunity to discuss questions or problems."],
  ["06", "Do not ignore a damaged bracket or wire", "If a bracket breaks, a wire becomes loose or you have persistent discomfort, contact your dental professional instead of trying to repair the appliance yourself."],
] as const;

const checklist = [
  "Brush around brackets and along the gumline.",
  "Clean between your teeth and around the wires.",
  "Be careful with foods that can damage braces.",
  "Rinse after meals when brushing is not possible.",
  "Follow the instructions from your dental team.",
  "Keep your scheduled dental or orthodontic visits.",
];

function BracesCareBlog() {
  return (
    <main className="bg-background pb-20 text-espresso lg:pb-0">
      <section className="bg-sand/50 px-5 pb-14 pt-28 lg:px-8 lg:pb-20 lg:pt-36">
        <div className="mx-auto max-w-5xl">
          <a href="/blog" className="inline-flex items-center gap-2 text-xs uppercase tracking-[0.16em] text-primary hover:underline"><ArrowLeft className="h-3.5 w-3.5" /> Back to Blog</a>
          <Reveal className="mt-8">
            <p className="eyebrow">Dental Care · La Esthetique Journal</p>
            <h1 className="mt-5 max-w-4xl font-display text-4xl leading-[1.08] sm:text-5xl lg:text-6xl">Tips for Taking Care of Your Teeth While Wearing Braces</h1>
            <p className="mt-6 max-w-3xl text-base leading-relaxed text-muted-foreground sm:text-lg">Wearing braces means giving a little extra attention to your daily oral-care routine. With consistent cleaning, sensible food choices and regular dental care, you can help keep your teeth and gums healthy throughout orthodontic treatment.</p>
          </Reveal>
          <Reveal delay={100} className="mt-10 overflow-hidden rounded-sm bg-sand">
            <img src={images.dentalRoom} alt="Dental care at La Esthetique" className="h-72 w-full object-cover sm:h-96 lg:h-[30rem]" />
          </Reveal>
        </div>
      </section>

      <article className="px-5 py-16 lg:px-8 lg:py-24">
        <div className="mx-auto grid max-w-5xl gap-12 lg:grid-cols-[1fr_280px] lg:gap-16">
          <div>
            <Reveal>
              <p className="text-base leading-8 text-muted-foreground">Brackets and wires create additional areas where plaque and food particles can collect. That makes careful brushing and cleaning between the teeth particularly important. Your teeth and gums still need daily attention throughout treatment, with a little more care around the orthodontic appliance.</p>
              <p className="mt-5 text-base leading-8 text-muted-foreground">The best routine is one you can follow consistently. Your dentist or orthodontic team can also recommend cleaning products and techniques based on your individual appliance and oral-health needs.</p>
            </Reveal>

            <Reveal className="mt-12">
              <h2 className="font-display text-3xl sm:text-4xl">Why oral hygiene matters more with braces</h2>
              <p className="mt-4 text-sm leading-7 text-muted-foreground">Brackets and wires can make some surfaces harder to reach with a toothbrush. If plaque remains around these areas, it can contribute to gum irritation and other oral-health problems. A thorough routine helps you clean around the appliance while protecting your natural teeth.</p>
            </Reveal>

            <div className="mt-10 space-y-5">
              {tips.map(([number, heading, copy], i) => (
                <Reveal key={number} delay={i * 35} className="rounded-sm border border-espresso/10 bg-background p-6 sm:p-7">
                  <div className="flex gap-4"><span className="shrink-0 text-xs font-semibold tracking-[0.18em] text-primary">{number}</span><div><h2 className="font-display text-2xl leading-tight sm:text-3xl">{heading}</h2><p className="mt-3 text-sm leading-7 text-muted-foreground">{copy}</p></div></div>
                </Reveal>
              ))}
            </div>

            <Reveal className="mt-10 rounded-sm border border-espresso/10 bg-background p-6 sm:p-8">
              <h2 className="font-display text-2xl sm:text-3xl">A simple daily checklist</h2>
              <div className="mt-5 grid gap-3 sm:grid-cols-2">{checklist.map((item) => <div key={item} className="flex gap-2.5 text-sm text-muted-foreground"><Check className="mt-0.5 h-4 w-4 shrink-0 text-primary" />{item}</div>)}</div>
            </Reveal>

            <Reveal className="mt-10">
              <h2 className="font-display text-3xl sm:text-4xl">Foods to be careful with</h2>
              <p className="mt-4 text-sm leading-7 text-muted-foreground">During orthodontic treatment, your dental team may recommend limiting foods that are very hard, sticky or difficult to bite. These foods can put stress on brackets and wires or become difficult to remove from around the appliance.</p>
              <p className="mt-4 text-sm leading-7 text-muted-foreground">If you are unsure whether a particular food is suitable, ask your dental professional. Their advice should take priority because recommendations can vary depending on your appliance and treatment plan.</p>
            </Reveal>

            <Reveal className="mt-10">
              <h2 className="font-display text-3xl sm:text-4xl">Common questions about braces care</h2>
              <div className="mt-6 space-y-6">
                {[
                  ["How often should I clean my teeth with braces?", "Follow the brushing schedule recommended by your dental professional. Cleaning thoroughly and consistently is especially important when brackets and wires are present."],
                  ["Can I still floss while wearing braces?", "Yes. Cleaning between the teeth remains important. Your dental professional can show you the flossing method or cleaning aid that works with your particular appliance."],
                  ["What should I do if a bracket breaks?", "Contact your dental or orthodontic team and follow their instructions. Avoid attempting to repair or reposition the bracket yourself."],
                  ["Should I use mouthwash?", "A fluoride mouthwash may be recommended in some situations, but it should complement—not replace—brushing and cleaning between the teeth. Ask your dental professional what is appropriate for you."],
                ].map(([question, answer]) => <div key={question} className="border-b border-espresso/10 pb-5"><h3 className="font-display text-xl">{question}</h3><p className="mt-2 text-sm leading-7 text-muted-foreground">{answer}</p></div>)}
              </div>
            </Reveal>

            <Reveal className="mt-10 rounded-sm bg-sand/60 p-6 sm:p-8">
              <h2 className="font-display text-2xl sm:text-3xl">When should you contact your dental team?</h2>
              <p className="mt-3 text-sm leading-7 text-muted-foreground">Contact your dental professional if you have persistent pain, significant swelling, a damaged or loose appliance, or another concern that does not settle. Do not try to repair orthodontic appliances yourself unless your dental professional specifically instructs you to do so.</p>
            </Reveal>

            <Reveal className="mt-10 border-l-2 border-primary pl-5"><p className="text-sm leading-7 text-muted-foreground"><strong className="text-espresso">Important:</strong> This article is general educational information and does not replace an individual dental or orthodontic assessment. Follow the instructions provided by your own dental professional if they differ from general advice.</p></Reveal>
          </div>

          <aside className="lg:pt-2">
            <div className="sticky top-28 rounded-sm bg-espresso p-6 text-background">
              <p className="text-[10px] uppercase tracking-[0.18em] text-gold">Need dental advice?</p>
              <h2 className="mt-3 font-display text-2xl">Talk to La Esthetique</h2>
              <p className="mt-3 text-xs leading-relaxed text-background/70">Have a dental concern or need professional guidance? Request a consultation with the La Esthetique team.</p>
              <div className="mt-6 space-y-2.5">
                <a href={`tel:${clinic.phoneTel}`} className="inline-flex w-full items-center justify-center gap-2 bg-gold px-4 py-3 text-xs font-semibold text-espresso"><Phone className="h-3.5 w-3.5" /> Call {clinic.phoneDisplay}</a>
                <a href={whatsappLink} target="_blank" rel="noopener noreferrer" className="inline-flex w-full items-center justify-center gap-2 bg-[#19c86a] px-4 py-3 text-xs font-semibold text-white"><MessageCircle className="h-3.5 w-3.5" /> WhatsApp the Clinic</a>
              </div>
            </div>
          </aside>
        </div>
      </article>

      <section className="bg-sand/40 px-5 py-16 lg:px-8 lg:py-20">
        <div className="mx-auto max-w-3xl text-center"><Reveal><p className="eyebrow">La Esthetique Journal</p><h2 className="mt-4 font-display text-3xl sm:text-4xl">Looking after your smile starts with the daily basics.</h2><p className="mt-4 text-sm leading-relaxed text-muted-foreground">Keep your routine consistent and speak with your dental professional whenever you have questions or concerns during orthodontic treatment.</p><a href="/blog" className="mt-7 inline-flex items-center gap-2 text-xs uppercase tracking-[0.16em] text-primary">Explore More Guides <ArrowRight className="h-3.5 w-3.5" /></a></Reveal></div>
      </section>
    </main>
  );
}
