import checkupImage from "@/assets/dental/dental-checkup.jpg";
import fillingsImage from "@/assets/dental/dental-fillings.jpg";
import rootCanalImage from "@/assets/dental/root-canal.jpg";
import extractionImage from "@/assets/dental/dental-extraction.jpg";
import scalingImage from "@/assets/dental/scaling-polishing.jpg";
import badBreathImage from "@/assets/dental/bad-breath-treatment.jpg";
import gumBleedingImage from "@/assets/dental/gum-bleeding-treatment.jpg";
import whiteningImage from "@/assets/dental/teeth-whitening.jpg";
import aestheticsImage from "@/assets/dental/dental-aesthetics.jpg";
import crownImage from "@/assets/dental/crown-bridge-veneer.jpg";
import smileMakeoverImage from "@/assets/dental/complete-smile-makeover.jpg";
import implantsImage from "@/assets/dental/dental-implants.jpg";
import dentureImage from "@/assets/dental/denture-care.jpg";
import bracesImage from "@/assets/dental/braces.jpg";
import invisalignImage from "@/assets/dental/invisalign.jpg";

export type DentalDetail = {
  about: string;
  whoFor: string[];
  expect: { title: string; copy: string }[];
  faqs: { q: string; a: string }[];
};

export type DentalService = {
  name: string;
  slug: string;
  description: string;
  image: string;
  imageAlt: string;
  detail?: DentalDetail;
};

export type DentalCategory = {
  name: string;
  slug: string;
  blurb: string;
  items: DentalService[];
  /** Optional note used to cross-reference a service card shown elsewhere on the page. */
  note?: { copy: string; slug: string; label: string };
};

const genericExpect = [
  {
    title: "Consultation",
    copy: "Dr. Mehwish Zaman listens to your concern and examines your teeth and gums.",
  },
  {
    title: "Assessment",
    copy: "Findings are explained in plain language, along with the options available to you.",
  },
  {
    title: "Treatment",
    copy: "Treatment is carried out in planned appointments, with your comfort kept in mind.",
  },
  {
    title: "Aftercare",
    copy: "Home-care guidance and any review appointments are discussed with you.",
  },
];

const genericFaqs = (name: string): { q: string; a: string }[] => [
  {
    q: `Do I need a consultation before ${name.toLowerCase()}?`,
    a: "Yes. An examination allows your dental needs to be assessed so a suitable plan can be discussed with you.",
  },
  {
    q: "How many appointments will I need?",
    a: "This varies from person to person and is discussed with you after your examination.",
  },
  {
    q: "Will the treatment be uncomfortable?",
    a: "Comfort is a priority throughout. Any measures used to keep you comfortable are explained before treatment begins.",
  },
  {
    q: "How do I book?",
    a: "Call or WhatsApp La Esthetique at 0300 5013111 and ask for a dental appointment with Dr. Mehwish Zaman.",
  },
];

function s(
  name: string,
  slug: string,
  description: string,
  image: string,
  imageAlt: string,
  detail?: DentalDetail,
): DentalService {
  return detail
    ? { name, slug, description, image, imageAlt, detail }
    : { name, slug, description, image, imageAlt };
}

export const dentalCategories: DentalCategory[] = [
  {
    name: "General Dentistry",
    slug: "general-dentistry",
    blurb:
      "Preventive and everyday dental care to keep teeth and gums healthy and to address problems early.",
    items: [
      s(
        "Dental Checkup",
        "dental-checkup",
        "Comprehensive dental examinations to assess oral health and identify potential problems early.",
        checkupImage,
        "Dentist examining a patient's teeth during a routine dental checkup",
        {
          about:
            "A dental checkup is a complete examination of your teeth, gums and overall oral health. Dr. Mehwish Zaman looks at each tooth, checks your gums, and discusses anything you have noticed yourself, so that concerns can be identified early and explained clearly.",
          whoFor: [
            "Anyone due for a routine dental examination",
            "Patients who have noticed sensitivity, discomfort or a change in a tooth",
            "Patients who want a clear picture of their current oral health",
            "Patients planning cosmetic or restorative dental treatment",
          ],
          expect: [
            {
              title: "Discussion",
              copy: "You describe any symptoms, dental history and concerns you have.",
            },
            {
              title: "Examination",
              copy: "Your teeth, gums and soft tissues are examined carefully.",
            },
            {
              title: "Findings",
              copy: "What was found is explained to you in simple language.",
            },
            {
              title: "Plan",
              copy: "Any recommended care is discussed, along with the options available.",
            },
          ],
          faqs: [
            {
              q: "How often should I have a dental checkup?",
              a: "This depends on your individual oral health. A suitable interval is suggested to you after your examination.",
            },
            {
              q: "Does a checkup include cleaning?",
              a: "A checkup is an examination. If professional cleaning would help, scaling and polishing is discussed with you as a separate treatment.",
            },
            {
              q: "What if a problem is found?",
              a: "The finding is explained along with the treatment options, so you can decide how you would like to proceed.",
            },
            {
              q: "How do I book?",
              a: "Call or WhatsApp La Esthetique at 0300 5013111 and ask for a dental appointment with Dr. Mehwish Zaman.",
            },
          ],
        },
      ),
      s(
        "Dental Fillings",
        "dental-fillings",
        "Treat cavities and restore damaged teeth with tooth-colored fillings designed to blend naturally with your smile.",
        fillingsImage,
        "Dentist placing a tooth-colored composite filling in a modern dental clinic",
      ),
      s(
        "Root Canal Treatment",
        "root-canal",
        "Treatment for infected or damaged teeth designed to relieve discomfort and preserve the natural tooth where appropriate.",
        rootCanalImage,
        "Dentist performing endodontic root canal treatment using magnification loupes",
        {
          about:
            "Root canal treatment addresses infection or damage inside a tooth. The affected tissue is removed, the inside of the tooth is cleaned and sealed, and the tooth is restored — with the aim of relieving discomfort and keeping your natural tooth where that is appropriate.",
          whoFor: [
            "Patients with persistent toothache or sensitivity that lingers",
            "Patients with an infected or deeply damaged tooth",
            "Patients advised after examination that the inside of a tooth is affected",
            "Patients who would prefer to keep a natural tooth where possible",
          ],
          expect: [
            {
              title: "Assessment",
              copy: "The tooth is examined and the cause of your symptoms discussed.",
            },
            {
              title: "Treatment",
              copy: "The affected tissue is removed and the canals cleaned and shaped.",
            },
            { title: "Sealing", copy: "The tooth is sealed to protect it from further infection." },
            {
              title: "Restoration",
              copy: "A suitable filling or crown is discussed to restore the tooth.",
            },
          ],
          faqs: genericFaqs("Root Canal Treatment"),
        },
      ),
      s(
        "Dental Extraction",
        "dental-extraction",
        "Professional tooth extraction for teeth that are severely damaged, infected or causing oral health problems.",
        extractionImage,
        "Sterile dental extraction instruments arranged on a tray in a modern dental clinic",
      ),
      s(
        "Scaling & Polishing",
        "scaling-polishing",
        "Professional cleaning to remove plaque, tartar and surface stains while supporting healthier gums and fresher breath.",
        scalingImage,
        "Dental professional performing scaling and polishing cleaning on a patient",
        {
          about:
            "Scaling and polishing is a professional cleaning that removes plaque, hardened tartar and surface staining that everyday brushing cannot reach. It supports healthier gums, a cleaner feeling mouth and fresher breath.",
          whoFor: [
            "Patients with visible tartar build-up or surface staining",
            "Patients who notice bleeding or tender gums when brushing",
            "Patients who want to maintain gum health between checkups",
            "Patients preparing for cosmetic or restorative dental treatment",
          ],
          expect: [
            { title: "Examination", copy: "Your teeth and gums are checked before cleaning." },
            { title: "Scaling", copy: "Plaque and tartar are removed from the teeth and gumline." },
            { title: "Polishing", copy: "Surfaces are polished to reduce staining and roughness." },
            { title: "Guidance", copy: "Home-care advice is discussed to help maintain results." },
          ],
          faqs: genericFaqs("Scaling & Polishing"),
        },
      ),
      s(
        "Bad Breath Treatment",
        "bad-breath-treatment",
        "Professional dental assessment and personalized care to identify and address common causes of persistent bad breath.",
        badBreathImage,
        "Dentist discussing oral health and fresh breath with a patient in consultation",
      ),
      s(
        "Gum Bleeding Treatment",
        "gum-bleeding-treatment",
        "Dental care focused on improving gum health, reducing inflammation and addressing the causes of bleeding gums.",
        gumBleedingImage,
        "Dentist gently examining a patient's gums with a periodontal probe",
      ),
    ],
  },
  {
    name: "Cosmetic Dentistry",
    slug: "cosmetic-dentistry",
    blurb:
      "Treatments focused on the appearance of your teeth and smile, planned around your dental health.",
    items: [
      s(
        "Teeth Whitening",
        "teeth-whitening",
        "Professional teeth whitening designed to brighten stained or discolored teeth for a cleaner, more confident smile.",
        whiteningImage,
        "Professional teeth whitening tray and gel prepared in a modern dental clinic",
        {
          about:
            "Professional teeth whitening is used to lighten staining and discoloration on natural teeth. Your teeth and gums are assessed first, and the approach and expectations are discussed with you before any whitening begins.",
          whoFor: [
            "Patients with staining or discoloration on natural teeth",
            "Patients who have completed any required dental treatment first",
            "Patients preparing for an occasion who would like a brighter smile",
            "Patients looking for a professionally supervised alternative to home products",
          ],
          expect: [
            {
              title: "Assessment",
              copy: "Your teeth and gums are examined and the cause of staining discussed.",
            },
            { title: "Preparation", copy: "Your gums and lips are protected before treatment." },
            { title: "Whitening", copy: "The whitening treatment is carried out in the clinic." },
            {
              title: "Aftercare",
              copy: "Guidance is given on food, drink and habits that affect staining.",
            },
          ],
          faqs: [
            {
              q: "How long do the results last?",
              a: "This varies between individuals and depends on diet and habits such as tea, coffee and smoking. No specific duration can be promised.",
            },
            {
              q: "Does whitening work on crowns or fillings?",
              a: "Whitening acts on natural tooth structure. Existing crowns, veneers and fillings are discussed with you during the assessment.",
            },
            {
              q: "Is whitening suitable for everyone?",
              a: "Not always. Suitability is confirmed only after an individual dental examination.",
            },
            {
              q: "How do I book?",
              a: "Call or WhatsApp La Esthetique at 0300 5013111 and ask for a dental appointment with Dr. Mehwish Zaman.",
            },
          ],
        },
      ),
      s(
        "Dental Aesthetics",
        "dental-aesthetics",
        "Customized aesthetic dental treatments designed to improve tooth shape, color, alignment and overall smile appearance.",
        aestheticsImage,
        "Dentist reviewing a smile design plan with a patient on a tablet",
        {
          about:
            "Dental aesthetics brings together treatments that influence how your smile looks — tooth shape, color, proportion and alignment. Dr. Mehwish Zaman discusses what you would like to change and which combination of treatments may suit your teeth and dental health.",
          whoFor: [
            "Patients who are unhappy with the shape, color or proportion of their teeth",
            "Patients considering more than one cosmetic dental treatment",
            "Patients who would like the options explained before deciding",
            "Patients whose dental health has been assessed as suitable",
          ],
          expect: genericExpect,
          faqs: genericFaqs("Dental Aesthetics"),
        },
      ),
      s(
        "Crown, Bridge & Veneer",
        "crown-bridge-veneer",
        "Customized restorative and cosmetic solutions designed to restore teeth and create a natural, balanced smile.",
        crownImage,
        "Porcelain dental crowns, bridge and veneers on a clean neutral surface",
      ),
      s(
        "Complete Smile Makeover",
        "complete-smile-makeover",
        "A personalized combination of cosmetic and restorative dental treatments designed around the patient's smile goals and dental needs.",
        smileMakeoverImage,
        "Dental study models used to plan a complete smile makeover",
        {
          about:
            "A smile makeover is not a single treatment. It is a plan that combines cosmetic and restorative dental treatments, chosen around your dental health, your concerns and what you would like your smile to look like.",
          whoFor: [
            "Patients with several dental concerns they would like addressed together",
            "Patients considering a combination of restorative and cosmetic treatment",
            "Patients who would like a staged plan rather than separate decisions",
            "Patients whose dental health has been assessed as suitable",
          ],
          expect: [
            {
              title: "Consultation",
              copy: "Your concerns and what you would like to change are discussed in detail.",
            },
            {
              title: "Examination",
              copy: "Teeth, gums and bite are assessed to see what is possible.",
            },
            { title: "Plan", copy: "A staged treatment plan is prepared and explained to you." },
            {
              title: "Treatment",
              copy: "Treatment is carried out across planned appointments, with reviews.",
            },
          ],
          faqs: genericFaqs("a Complete Smile Makeover"),
        },
      ),
    ],
  },
  {
    name: "Restorative Dentistry",
    slug: "restorative-dentistry",
    blurb:
      "Replacing and restoring missing or damaged teeth to support chewing, comfort and appearance.",
    note: {
      copy: "Crowns, bridges and veneers are also used in restorative treatment. See the Crown, Bridge & Veneer card in Cosmetic Dentistry above.",
      slug: "crown-bridge-veneer",
      label: "View Crown, Bridge & Veneer",
    },
    items: [
      s(
        "Dental Implants",
        "dental-implants",
        "Dental implants designed to replace missing teeth and restore chewing function, comfort and smile appearance.",
        implantsImage,
        "Dental implant model showing a titanium implant and crown in a clinical setting",
        {
          about:
            "A dental implant is a fixture placed in the jawbone to support a replacement tooth. It is used to restore a missing tooth so that chewing, comfort and the appearance of your smile can be addressed. Suitability depends on an individual assessment.",
          whoFor: [
            "Patients with one or more missing teeth",
            "Patients looking for a fixed alternative to a removable denture",
            "Patients whose gum health and bone support have been assessed",
            "Patients who would like the treatment stages explained before deciding",
          ],
          expect: [
            {
              title: "Assessment",
              copy: "Your teeth, gums and supporting bone are examined and discussed.",
            },
            { title: "Planning", copy: "The stages, timeline and options are explained to you." },
            { title: "Placement", copy: "The implant is placed during a planned appointment." },
            {
              title: "Restoration",
              copy: "After healing, the replacement tooth is fitted and reviewed.",
            },
          ],
          faqs: genericFaqs("Dental Implants"),
        },
      ),
      s(
        "Complete Denture & Prosthetic Care",
        "denture-care",
        "Personalized solutions for missing teeth, including complete dentures, partial dentures, flexible dentures, implant-supported dentures, and denture repair or replacement.",
        dentureImage,
        "Dentist discussing a complete denture with a patient during a consultation",
      ),
    ],
  },
  {
    name: "Orthodontics",
    slug: "orthodontics",
    blurb: "Treatment focused on tooth alignment, bite and long-term dental health.",
    items: [
      s(
        "Braces",
        "braces",
        "Customized orthodontic treatment designed to improve tooth alignment, bite and overall dental health.",
        bracesImage,
        "Orthodontist adjusting fixed braces on a patient's teeth",
        {
          about:
            "Braces are fixed orthodontic appliances used to move teeth gradually into a better position. Treatment is planned around your bite and alignment, and progress is reviewed at regular appointments.",
          whoFor: [
            "Patients with crowded, spaced or misaligned teeth",
            "Patients with a bite concern identified during examination",
            "Patients able to attend regular review appointments",
            "Patients who would like the treatment length and stages explained first",
          ],
          expect: [
            {
              title: "Assessment",
              copy: "Alignment, bite and dental health are examined and discussed.",
            },
            { title: "Planning", copy: "A treatment approach and expected stages are explained." },
            { title: "Fitting", copy: "The appliance is fitted and care guidance is given." },
            { title: "Reviews", copy: "Regular adjustments and reviews follow your progress." },
          ],
          faqs: genericFaqs("Braces"),
        },
      ),
      s(
        "Invisalign",
        "invisalign",
        "Clear, removable aligners designed to straighten teeth discreetly while supporting a more confident smile.",
        invisalignImage,
        "Clear removable orthodontic aligners in a case in a modern dental clinic",
        {
          about:
            "Clear aligners are removable orthodontic appliances worn in a planned sequence to move teeth gradually. They are a discreet alternative to fixed braces for suitable cases, and suitability is confirmed after examination.",
          whoFor: [
            "Patients looking for a discreet orthodontic option",
            "Patients able to wear aligners consistently as advised",
            "Patients whose alignment concern has been assessed as suitable",
            "Patients who prefer a removable appliance",
          ],
          expect: [
            { title: "Assessment", copy: "Your alignment and bite are examined and discussed." },
            { title: "Planning", copy: "A sequence of aligners is planned for your teeth." },
            { title: "Wear", copy: "Aligners are changed in stages as advised by your dentist." },
            { title: "Reviews", copy: "Progress is reviewed at planned appointments." },
          ],
          faqs: genericFaqs("Clear Aligners"),
        },
      ),
    ],
  },
];

export const dentalServices: DentalService[] = dentalCategories.flatMap((c) => c.items);

export function getDentalService(slug: string): DentalService | undefined {
  return dentalServices.find((service) => service.slug === slug);
}

export function dentalDetail(service: DentalService): DentalDetail {
  return (
    service.detail ?? {
      about: `${service.description} Dr. Mehwish Zaman assesses your teeth and gums first, explains what she finds in plain language, and discusses the options that may suit you at La Esthetique in F-11 Markaz, Islamabad.`,
      whoFor: [
        "Patients who have noticed a concern and would like it assessed",
        "Patients who want the available options explained clearly",
        "Patients seeking care planned around their own dental needs",
        "Patients whose suitability is confirmed after an examination",
      ],
      expect: genericExpect,
      faqs: genericFaqs(service.name),
    }
  );
}

export const featuredDentalSlugs = [
  "dental-checkup",
  "teeth-whitening",
  "dental-implants",
  "invisalign",
];
