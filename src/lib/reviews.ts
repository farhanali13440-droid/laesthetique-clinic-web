/**
 * Google reviews for La Esthetique.
 * Add new genuine Google reviews by appending entries to `googleReviews`.
 * Only include reviews whose full text is available — never paraphrase.
 */
export interface GoogleReview {
  name: string;
  text: string;
  date?: string;
}

export const googleReviews: GoogleReview[] = [
  {
    name: "Areeba Saleem",
    text: "Dr. Sumbleen is warm, kind, and professional. She creates a comfortable environment and takes the time to explain things clearly. I've had a great experience and would happily recommend her to others.",
  },
  {
    name: "Nabeele Khan",
    text: "I had done my Botox treatment 100% satisfied thank u Dr Sumbleen",
  },
  {
    name: "Danial Safdar",
    text: "I visited LA esthetique and I found it best clinic. Consultant Dr sumbleen and staff Neelo and Afia greeted me so well .experience was good over all",
  },
];

/** Link to the clinic's Google listing — used for both review CTAs. */
export const googleReviewsUrl =
  "https://www.google.com/maps/search/La+Esthetique+Islamabad";
