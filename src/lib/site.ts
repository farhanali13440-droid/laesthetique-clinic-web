import logo from "@/assets/logo.png.asset.json";
import doctor from "@/assets/doctor.jpg.asset.json";
import reception from "@/assets/reception.jpg.asset.json";
import treatmentRoom from "@/assets/treatment-room.jpg.asset.json";
import signage from "@/assets/clinic-signage.jpg.asset.json";

/**
 * Central place for clinic details and imagery.
 * Swap any image by replacing the corresponding file in src/assets.
 */
export const clinic = {
  name: "La Esthetique",
  doctor: "Dr. Sumbleen Majid",
  address:
    "Office No. 12 & 13, Lord Trade Center, Above Najeeb Pharmacy, F-11 Markaz, Islamabad, 44000",
  phoneDisplay: "0300 5013111",
  phoneTel: "+923005013111",
  whatsapp: "923005013111",
  whatsappMessage:
    "Hello La Esthetique, I would like to book an appointment with Dr. Sumbleen Majid.",
  facebook: "https://www.facebook.com/laesthetiqueisb",
  instagram: "https://www.instagram.com/laesthetique.isb",
};

export const whatsappLink = `https://wa.me/${clinic.whatsapp}?text=${encodeURIComponent(
  clinic.whatsappMessage,
)}`;

export const images = {
  logo: logo.url,
  doctor: doctor.url,
  reception: reception.url,
  treatmentRoom: treatmentRoom.url,
  signage: signage.url,
};

export const navLinks = [
  { label: "Home", href: "#home" },
  { label: "About Dr. Sumbleen", href: "#about" },
  { label: "Treatments", href: "#treatments" },
  { label: "Why La Esthetique", href: "#why" },
  { label: "FAQs", href: "#faqs" },
  { label: "Contact", href: "#contact" },
];

export type Treatment = { name: string; description: string };

export const treatmentCategories: {
  category: string;
  items: Treatment[];
}[] = [
  {
    category: "Skin & Dermatology",
    items: [
      {
        name: "Advanced Skincare Treatments",
        description:
          "Personalized treatments using advanced techniques to improve skin health, texture, tone and overall appearance.",
      },
      {
        name: "Acne Scars Customized Treatments",
        description:
          "Personalized treatments designed to target different types of acne scars and improve skin texture and tone.",
      },
      {
        name: "Chemical Peel",
        description:
          "A controlled exfoliation treatment designed to refresh the skin, improve texture and brighten the complexion.",
      },
      {
        name: "LED Light Therapy",
        description:
          "A gentle, non-invasive treatment using targeted LED light to support healthier, clearer and more radiant-looking skin.",
      },
      {
        name: "HydraFacial",
        description:
          "A multi-step facial that cleanses, exfoliates, extracts impurities and hydrates the skin.",
      },
      {
        name: "HydraFacial with Q-Switched Laser",
        description:
          "A combined treatment designed to cleanse and hydrate the skin while targeting pigmentation and uneven skin tone.",
      },
      {
        name: "HydraFacial with OxyGeneo",
        description:
          "A combination treatment that cleanses, exfoliates and hydrates while refreshing and brightening the complexion.",
      },
      {
        name: "Carbon Hollywood Facial",
        description:
          "A non-invasive laser facial designed to deep-clean pores, exfoliate the skin and improve its overall brightness and texture.",
      },
      {
        name: "Skin Tag Removal",
        description:
          "A targeted treatment to safely remove unwanted skin tags and restore a smoother-looking skin surface.",
      },
      {
        name: "Laser Tattoo Removal",
        description:
          "Advanced laser treatment designed to gradually break down unwanted tattoo pigment.",
      },
    ],
  },
  {
    category: "Hair & Scalp",
    items: [
      {
        name: "PRP Scalp Treatment",
        description:
          "A platelet-rich plasma treatment designed to support scalp health and healthier-looking hair.",
      },
      {
        name: "Hair Exosomes",
        description:
          "An advanced hair rejuvenation treatment using exosome-based therapy to support scalp and follicle health.",
      },
      {
        name: "Laser Hair Removal",
        description:
          "An advanced treatment designed to reduce unwanted hair and leave the skin smoother for longer.",
      },
    ],
  },
  {
    category: "Aesthetic & Anti-Aging",
    items: [
      {
        name: "Botox Treatments",
        description:
          "A targeted aesthetic treatment designed to soften the appearance of fine lines and wrinkles for a smoother, refreshed look.",
      },
      {
        name: "Under-Eye Fillers",
        description:
          "A minimally invasive treatment designed to address under-eye hollows and restore subtle facial volume.",
      },
      {
        name: "Threads Lifting",
        description:
          "A non-surgical treatment designed to lift sagging skin and enhance facial contours.",
      },
      {
        name: "PRP Microneedling with Thread Lift",
        description:
          "A combination treatment designed to improve skin texture, support collagen production and provide a subtle lifting effect.",
      },
      {
        name: "Anti-Aging Treatments",
        description:
          "Personalized aesthetic treatments including biostimulators, RF microneedling, threads, Botox and fillers based on individual needs.",
      },
    ],
  },
  {
    category: "Wellness / Glow",
    items: [
      {
        name: "IV Glow Drip",
        description:
          "A wellness-focused IV infusion designed to support hydration and deliver selected vitamins and nutrients.",
      },
      {
        name: "Vampire Facial",
        description:
          "A PRP-based rejuvenation treatment designed to support collagen production and improve skin texture and tone.",
      },
    ],
  },
];
