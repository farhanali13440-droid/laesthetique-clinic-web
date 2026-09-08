import logo from "@/assets/logo.png.asset.json";
import doctor from "@/assets/doctor.jpg.asset.json";
import reception from "@/assets/reception.jpg.asset.json";
import treatmentRoom from "@/assets/treatment-room.jpg.asset.json";
import signage from "@/assets/clinic-signage.jpg.asset.json";
import featureSkin from "@/assets/feature-skin.jpg";
import featureCare from "@/assets/feature-care.jpg";
import featureHair from "@/assets/feature-hair.jpg";
import featureGlow from "@/assets/feature-glow.jpg";

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
};

export const navLinks = [
  { label: "Home", to: "/" },
  { label: "About Dr. Sumbleen", to: "/about" },
  { label: "Skin Treatments", to: "/skin-treatments" },
  { label: "Hair Treatments", to: "/hair-treatments" },
  { label: "Clinic", to: "/clinic" },
  { label: "Contact", to: "/contact" },
] as const;
