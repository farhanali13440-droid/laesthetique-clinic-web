import logo from "@/assets/logo.png.asset.json";
import doctor from "@/assets/doctor.jpg.asset.json";
import reception from "@/assets/reception.jpg.asset.json";
import treatmentRoom from "@/assets/treatment-room.jpg.asset.json";
import signage from "@/assets/clinic-signage.jpg.asset.json";
import featureSkin from "@/assets/feature-skin.jpg";
import featureCare from "@/assets/feature-care.jpg";
import featureHair from "@/assets/feature-hair.jpg";
import featureGlow from "@/assets/feature-glow.jpg";
import drMehwish from "@/assets/dental/dr-mehwish-placeholder.jpg";
import dentalHero from "@/assets/dental/dental-hero.jpg";

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
    "Hi, I would like to request an appointment. Please let me know the available date and time.",
  facebook: "https://www.facebook.com/laesthetiqueisb",
  instagram: "https://www.instagram.com/laesthetique.isb",
};

export const whatsappLink = `https://wa.me/${clinic.whatsapp}?text=${encodeURIComponent(
  clinic.whatsappMessage,
)}`;

export function whatsappFor(topic: string) {
  return `https://wa.me/${clinic.whatsapp}?text=${encodeURIComponent(
    `Hello La Esthetique, I would like to book a consultation for ${topic} with ${clinic.doctor}.`,
  )}`;
}

export const images = {
  logo: logo.url,
  doctor: doctor.url,
  reception: reception.url,
  treatmentRoom: treatmentRoom.url,
  signage: signage.url,
  skin: featureSkin,
  care: featureCare,
  hair: featureHair,
  glow: featureGlow,
  /** Placeholder portrait — replace with Dr. Mehwish Zaman's actual photo. */
  drMehwish,
  dentalRoom: dentalHero,
};

export const navLinks = [
  { label: "Home", to: "/" },
  { label: "Dr. Sumbleen", to: "/about" },
  { label: "Dr. Mehwish", to: "/dr-mehwish-zaman" },
  { label: "Skin Treatments", to: "/skin-treatments" },
  { label: "Hair Treatments", to: "/hair-treatments" },
  { label: "Dental Services", to: "/dental-services" },
  { label: "Clinic", to: "/clinic" },
  { label: "Contact", to: "/contact" },
] as const;

/** The two areas of expertise under the La Esthetique brand. */
export const doctors = [
  {
    name: "Dr. Sumbleen Majid",
    role: "Dermatologist",
    focus: "Skin • Hair • Dermatology • Aesthetics",
    to: "/about",
    image: doctor.url,
    imageAlt: "Dr. Sumbleen Majid, dermatologist at La Esthetique, Islamabad",
  },
  {
    name: "Dr. Mehwish Zaman",
    role: "Dentist",
    focus: "General Dentistry • Cosmetic Dentistry • Orthodontics",
    to: "/dr-mehwish-zaman",
    image: drMehwish,
    imageAlt: "Professional photo placeholder for Dr. Mehwish Zaman, dentist at La Esthetique",
  },
] as const;

/**
 * Editable placeholders for Dr. Mehwish Zaman.
 * Leave an entry empty until the real detail is confirmed — empty entries are not rendered.
 */
export const mehwishProfile = {
  qualifications: "",
  certifications: "",
  experience: "",
  specializations: "",
  memberships: "",
};

export function whatsappForDental(topic: string) {
  return `https://wa.me/${clinic.whatsapp}?text=${encodeURIComponent(
    `Hello La Esthetique, I would like to book a dental appointment for ${topic} with Dr. Mehwish Zaman.`,
  )}`;
}

export const dentalWhatsappLink = `https://wa.me/${clinic.whatsapp}?text=${encodeURIComponent(
  "Hi, I would like to request a dental appointment with Dr. Mehwish Zaman. Please let me know the available date and time.",
)}`;
