import { images } from "@/lib/site";

export type TreatmentDetail = {
  about: string;
  whoFor: string[];
  expect: { title: string; copy: string }[];
  faqs: { q: string; a: string }[];
};

export type Treatment = {
  name: string;
  slug: string;
  description: string;
  image: string;
  categorySlug: string;
  detail?: TreatmentDetail | undefined;
};

export type TreatmentCategory = {
  name: string;
  slug: string;
  blurb: string;
  image: string;
  items: Treatment[];
};

const genericFaqs = (name: string) => [
  {
    q: `Do I need a consultation before ${name}?`,
    a: "Yes. A consultation with Dr. Sumbleen Majid allows your concern to be assessed so a suitable plan can be discussed with you.",
  },
  {
    q: "How many sessions will I need?",
    a: "This varies from person to person. The number of sessions is discussed during your consultation, based on your individual assessment.",
  },
  {
    q: "How do I book?",
    a: "Call or WhatsApp La Esthetique at 0300 5013111, or send a request through the contact page.",
  },
];

const genericExpect = [
  {
    title: "Consultation",
    copy: "Your concerns, medical history and goals are discussed with Dr. Sumbleen Majid.",
  },
  {
    title: "Assessment",
    copy: "Your skin, hair or scalp is assessed to determine whether the treatment is appropriate for you.",
  },
  {
    title: "Treatment",
    copy: "The session is carried out in a professional, comfortable clinical environment.",
  },
  {
    title: "Aftercare & follow-up",
    copy: "Aftercare guidance is provided and progress is reviewed at follow-up when needed.",
  },
];

const t = (
  name: string,
  slug: string,
  description: string,
  image: string,
  categorySlug: string,
  detail?: TreatmentDetail,
): Treatment => ({ name, slug, description, image, categorySlug, detail });

export const treatmentCategories: TreatmentCategory[] = [
  {
    name: "Skin & Dermatology",
    slug: "skin-dermatology",
    blurb:
      "Clinical dermatology and advanced skin treatments for acne, scarring, pigmentation, texture and overall skin health.",
    image: images.skin,
    items: [
      t(
        "Advanced Skincare Treatments",
        "advanced-skincare",
        "Personalized treatments using advanced techniques to improve skin health, texture, tone and overall appearance.",
        images.skin,
        "skin-dermatology",
      ),
      t(
        "Acne Scars Customized Treatments",
        "acne-scar-treatment",
        "Customized protocols that target different types of acne scarring to refine skin texture and tone.",
        images.skin,
        "skin-dermatology",
        {
          about:
            "Acne scarring differs from person to person — some scars are shallow and textural, others are deeper or accompanied by discolouration. At La Esthetique, Dr. Sumbleen Majid assesses your scar type and skin condition first, then discusses a customized plan that may combine treatments such as microneedling, resurfacing, peels or laser-based options.",
          whoFor: [
            "Adults with textural changes or marks following acne",
            "Patients whose active acne is under control or being managed",
            "Anyone wanting a professional assessment of their scarring before choosing a treatment",
          ],
          expect: genericExpect,
          faqs: genericFaqs("acne scar treatment"),
        },
      ),
      t(
        "Chemical Peel",
        "chemical-peel",
        "A controlled exfoliation treatment designed to refresh the skin, improve texture and brighten the complexion.",
        images.care,
        "skin-dermatology",
      ),
      t(
        "LED Light Therapy",
        "led-light-therapy",
        "A gentle, non-invasive treatment using targeted LED light to support healthier, clearer-looking skin.",
        images.care,
        "skin-dermatology",
      ),
      t(
        "HydraFacial",
        "hydrafacial",
        "Cleanse, exfoliate, extract and hydrate in one refreshing session with no downtime.",
        images.care,
        "skin-dermatology",
        {
          about:
            "HydraFacial is a multi-step facial treatment that cleanses, gently exfoliates, extracts impurities and delivers hydrating serums to the skin. It is a comfortable, non-invasive treatment often chosen for a refreshed appearance, and it can be adapted to different skin types after assessment.",
          whoFor: [
            "Patients looking for a gentle, no-downtime facial treatment",
            "Congested, dull or dehydrated-looking skin",
            "Anyone wanting a professionally performed facial as part of ongoing skin care",
          ],
          expect: genericExpect,
          faqs: genericFaqs("HydraFacial"),
        },
      ),
      t(
        "HydraFacial with Q-Switched Laser",
        "hydrafacial-q-switched",
        "A combined treatment to cleanse and hydrate the skin while targeting pigmentation and uneven tone.",
        images.care,
        "skin-dermatology",
      ),
      t(
        "HydraFacial with OxyGeneo",
        "hydrafacial-oxygeneo",
        "A combination treatment that cleanses, exfoliates and hydrates while refreshing the complexion.",
        images.care,
        "skin-dermatology",
      ),
      t(
        "Carbon Hollywood Facial",
        "carbon-hollywood-facial",
        "A non-invasive laser facial designed to deep-clean pores and improve overall brightness and texture.",
        images.glow,
        "skin-dermatology",
      ),
      t(
        "Skin Tag Removal",
        "skin-tag-removal",
        "A targeted in-clinic treatment to remove unwanted skin tags and restore a smoother skin surface.",
        images.skin,
        "skin-dermatology",
      ),
      t(
        "Laser Tattoo Removal",
        "laser-tattoo-removal",
        "Advanced laser treatment designed to gradually break down unwanted tattoo pigment.",
        images.treatmentRoom,
        "skin-dermatology",
      ),
    ],
  },
  {
    name: "Hair & Scalp",
    slug: "hair-scalp",
    blurb:
      "Assessment-led treatments for hair thinning, scalp health, hair rejuvenation and unwanted hair.",
    image: images.hair,
    items: [
      t(
        "PRP Scalp Treatment",
        "prp-scalp",
        "Platelet-rich plasma therapy to support scalp health and healthier-looking hair.",
        images.hair,
        "hair-scalp",
        {
          about:
            "PRP (platelet-rich plasma) scalp treatment uses a small sample of your own blood, processed to concentrate the platelet-rich portion, which is then introduced into the scalp. It is used as part of a wider plan to support scalp health and hair rejuvenation, following an assessment of your hair and scalp condition.",
          whoFor: [
            "Adults noticing hair thinning or reduced hair density",
            "Patients seeking scalp-focused care alongside medical assessment",
            "Anyone wanting their hair concern assessed before starting treatment",
          ],
          expect: genericExpect,
          faqs: genericFaqs("PRP scalp treatment"),
        },
      ),
      t(
        "Hair Exosomes",
        "hair-exosomes",
        "An advanced hair rejuvenation treatment using exosome-based therapy to support scalp and follicle health.",
        images.hair,
        "hair-scalp",
      ),
      t(
        "Laser Hair Removal",
        "laser-hair-removal",
        "Advanced laser sessions to reduce unwanted hair and keep skin feeling smoother for longer.",
        images.treatmentRoom,
        "hair-scalp",
        {
          about:
            "Laser hair removal uses targeted light energy to treat hair follicles in the area being addressed. Treatment is carried out as a course of sessions, and suitability depends on your skin and hair type — this is assessed during your consultation at La Esthetique.",
          whoFor: [
            "Adults looking to reduce unwanted hair on the face or body",
            "Patients who prefer an in-clinic, medically supervised approach",
            "Anyone wanting to understand whether laser treatment suits their skin and hair type",
          ],
          expect: genericExpect,
          faqs: genericFaqs("laser hair removal"),
        },
      ),
    ],
  },
  {
    name: "Aesthetic Treatments",
    slug: "aesthetic-treatments",
    blurb:
      "Restrained, natural-looking aesthetic treatments including injectables, threads and anti-aging care.",
    image: images.glow,
    items: [
      t(
        "Botox Treatments",
        "botox",
        "Precise, restrained treatment to soften the appearance of fine lines while keeping expression natural.",
        images.glow,
        "aesthetic-treatments",
        {
          about:
            "Botox is an injectable treatment used to soften the appearance of expression lines. At La Esthetique the emphasis is on a conservative, natural-looking approach: facial assessment first, then a plan discussed with you before any treatment is carried out.",
          whoFor: [
            "Adults wanting to soften the appearance of expression lines",
            "Patients who prefer a subtle, natural-looking result",
            "Anyone seeking a medical assessment before considering injectables",
          ],
          expect: genericExpect,
          faqs: genericFaqs("Botox"),
        },
      ),
      t(
        "Under-Eye Fillers",
        "under-eye-fillers",
        "A minimally invasive treatment designed to address under-eye hollows and restore subtle volume.",
        images.glow,
        "aesthetic-treatments",
      ),
      t(
        "Threads Lifting",
        "threads-lifting",
        "A non-surgical treatment designed to lift sagging skin and refine facial contours.",
        images.glow,
        "aesthetic-treatments",
      ),
      t(
        "PRP Microneedling with Thread Lift",
        "prp-microneedling-thread-lift",
        "A combination treatment to improve skin texture, support collagen and provide a subtle lifting effect.",
        images.care,
        "aesthetic-treatments",
      ),
      t(
        "Anti-Aging Treatments",
        "anti-aging",
        "Biostimulators, RF microneedling, threads, Botox and fillers — selected around your individual needs.",
        images.glow,
        "aesthetic-treatments",
        {
          about:
            "Anti-aging care at La Esthetique is planned rather than packaged. After assessing your skin quality, facial structure and priorities, Dr. Sumbleen Majid discusses which combination of treatments — such as biostimulators, RF microneedling, threads, Botox or fillers — may be appropriate for you.",
          whoFor: [
            "Adults noticing changes in skin firmness, texture or facial volume",
            "Patients who prefer a gradual, natural-looking approach",
            "Anyone wanting a personalized plan rather than a fixed package",
          ],
          expect: genericExpect,
          faqs: genericFaqs("anti-aging treatment"),
        },
      ),
    ],
  },
  {
    name: "Wellness & Glow",
    slug: "wellness-glow",
    blurb: "Wellness-focused treatments that complement your skin and aesthetic care.",
    image: images.care,
    items: [
      t(
        "IV Glow Drip",
        "iv-glow-drip",
        "A wellness-focused IV infusion designed to support hydration and deliver selected vitamins and nutrients.",
        images.care,
        "wellness-glow",
      ),
      t(
        "Vampire Facial",
        "vampire-facial",
        "A PRP-based rejuvenation treatment to support collagen and improve skin texture and tone.",
        images.skin,
        "wellness-glow",
      ),
    ],
  },
];

export const allTreatments: Treatment[] = treatmentCategories.flatMap((c) => c.items);

export function getTreatment(slug: string) {
  return allTreatments.find((x) => x.slug === slug);
}

export function getCategory(slug: string) {
  return treatmentCategories.find((c) => c.slug === slug);
}

export function treatmentDetail(tr: Treatment): TreatmentDetail {
  return (
    tr.detail ?? {
      about: `${tr.description} At La Esthetique, ${tr.name.toLowerCase()} begins with a consultation so your concern can be assessed and a suitable plan discussed with you.`,
      whoFor: [
        "Adults seeking professional assessment of their concern",
        "Patients who prefer treatment carried out in a clinical setting",
        "Anyone wanting to understand whether this treatment is suitable for them",
      ],
      expect: genericExpect,
      faqs: genericFaqs(tr.name.toLowerCase()),
    }
  );
}

export const featuredSlugs = [
  "acne-scar-treatment",
  "laser-hair-removal",
  "hydrafacial",
  "botox",
  "prp-scalp",
  "anti-aging",
];

export const featuredTreatments = featuredSlugs
  .map((s) => getTreatment(s))
  .filter(Boolean) as Treatment[];
