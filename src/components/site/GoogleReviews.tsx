import { Star } from "lucide-react";
import { Reveal } from "@/components/site/Reveal";
import { googleReviews, googleReviewsUrl } from "@/lib/reviews";

function GoogleMark({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" className={className} aria-hidden="true">
      <path
        fill="#4285F4"
        d="M23.5 12.3c0-.9-.1-1.5-.3-2.2H12v4.1h6.5c-.1 1.1-.8 2.7-2.4 3.8l-.02.15 3.5 2.7.24.02c2.2-2 3.5-4.9 3.5-8.6Z"
      />
      <path
        fill="#34A853"
        d="M12 24c3.2 0 5.9-1 7.9-2.9l-3.7-2.9c-1 .7-2.4 1.2-4.2 1.2a7.2 7.2 0 0 1-6.8-5l-.14.01-3.6 2.8-.05.13A12 12 0 0 0 12 24Z"
      />
      <path
        fill="#FBBC05"
        d="M5.2 14.4A7.4 7.4 0 0 1 4.8 12c0-.8.1-1.6.3-2.4l-.01-.16-3.6-2.8-.12.06A12 12 0 0 0 0 12c0 1.9.5 3.8 1.3 5.3l3.9-2.9Z"
      />
      <path
        fill="#EA4335"
        d="M12 4.6c2.3 0 3.8 1 4.7 1.8l3.4-3.3C17.9 1.2 15.2 0 12 0 7.3 0 3 2.8 1.3 6.7l3.9 2.9A7.2 7.2 0 0 1 12 4.6Z"
      />
    </svg>
  );
}

function Stars() {
  return (
    <div className="flex gap-0.5" aria-label="5 out of 5 stars">
      {Array.from({ length: 5 }).map((_, i) => (
        <Star key={i} className="h-4 w-4 fill-[#FBBC05] text-[#FBBC05]" strokeWidth={0} />
      ))}
    </div>
  );
}

export function GoogleReviews() {
  return (
    <section className="bg-sand/40 py-20 lg:py-28" aria-labelledby="reviews-heading">
      <div className="mx-auto max-w-7xl px-5 lg:px-8">
        <Reveal className="mx-auto max-w-3xl text-center">
          <p className="eyebrow">Google Reviews</p>
          <h2 id="reviews-heading" className="rule-gold mt-4 font-display text-3xl text-espresso sm:text-4xl">
            What Our Patients Say
          </h2>
          <p className="mt-7 text-sm leading-relaxed text-muted-foreground">
            Real experiences from patients who visited La Esthetique.
          </p>
        </Reveal>

        <div className="mt-14 grid gap-6 md:grid-cols-3">
          {googleReviews.map((r, i) => (
            <Reveal
              key={r.name}
              delay={i * 80}
              className="flex flex-col rounded-sm border border-border bg-card p-8 transition-all duration-300 hover:-translate-y-1 hover:border-primary/40 hover:shadow-[0_16px_40px_-18px_rgba(0,0,0,0.25)]"
            >
              <div className="flex items-center justify-between">
                <Stars />
                <GoogleMark className="h-5 w-5" />
              </div>
              <p className="mt-6 flex-1 leading-relaxed text-muted-foreground">
                &ldquo;{r.text}&rdquo;
              </p>
              <div className="mt-7 border-t border-border pt-5">
                <p className="text-sm font-medium tracking-wide text-espresso">{r.name}</p>
                {r.date ? (
                  <p className="mt-1 text-xs text-muted-foreground">{r.date}</p>
                ) : null}
                <p className="mt-1 text-xs text-muted-foreground">Posted on Google</p>
              </div>
            </Reveal>
          ))}
        </div>

        <Reveal delay={160} className="mt-14 flex flex-wrap justify-center gap-3">
          <a
            href={googleReviewsUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 rounded-sm border border-primary bg-primary px-7 py-3.5 text-xs font-medium uppercase tracking-[0.18em] text-primary-foreground transition-colors hover:bg-primary/90"
          >
            <GoogleMark className="h-4 w-4" /> View All Google Reviews
          </a>
          <a
            href={googleReviewsUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 rounded-sm border border-primary/60 px-7 py-3.5 text-xs font-medium uppercase tracking-[0.18em] text-primary transition-colors hover:bg-primary/5"
          >
            Leave a Google Review
          </a>
        </Reveal>
      </div>
    </section>
  );
}
