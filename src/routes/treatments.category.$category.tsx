import { createFileRoute, notFound, Link } from "@tanstack/react-router";
import { Reveal } from "@/components/site/Reveal";
import { btnGhost, CtaBand, TreatmentCard } from "@/components/site/ui";
import { getCategory } from "@/lib/treatments";

export const Route = createFileRoute("/treatments/category/$category")({
  loader: ({ params }) => {
    const category = getCategory(params.category);
    if (!category) throw notFound();
    return { name: category.name, blurb: category.blurb, slug: category.slug };
  },
  head: ({ loaderData }) => {
    if (!loaderData) {
      return {
        meta: [{ title: "Treatments | La Esthetique" }, { name: "robots", content: "noindex" }],
      };
    }
    const title = `${loaderData.name} | La Esthetique, Islamabad`;
    return {
      meta: [
        { title },
        { name: "description", content: loaderData.blurb },
        { property: "og:title", content: title },
        { property: "og:description", content: loaderData.blurb },
        { property: "og:type", content: "website" },
        { property: "og:url", content: `/treatments/category/${loaderData.slug}` },
        { name: "twitter:card", content: "summary_large_image" },
      ],
      links: [{ rel: "canonical", href: `/treatments/category/${loaderData.slug}` }],
    };
  },
  component: CategoryPage,
});

function CategoryPage() {
  const { category: slug } = Route.useParams();
  const category = getCategory(slug)!;

  return (
    <>
      <section className="bg-sand/50 pt-28 pb-14 lg:pt-36 lg:pb-20">
        <div className="mx-auto max-w-3xl px-5 text-center">
          <Reveal>
            <p className="eyebrow">Treatments</p>
            <h1 className="mt-4 font-display text-4xl text-espresso sm:text-5xl">
              {category.name}
            </h1>
            <p className="mt-6 leading-relaxed text-muted-foreground">{category.blurb}</p>
          </Reveal>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-5 py-20 lg:px-8 lg:py-24">
        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {category.items.map((t, i) => (
            <TreatmentCard key={t.slug} {...t} delay={(i % 3) * 70} />
          ))}
        </div>
        <div className="mt-14 text-center">
          <Link to="/treatments" className={btnGhost}>
            View All Treatments
          </Link>
        </div>
      </section>

      <CtaBand />
    </>
  );
}
