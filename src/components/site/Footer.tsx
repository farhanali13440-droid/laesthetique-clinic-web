import { Link } from "@tanstack/react-router";
import { Facebook, Instagram } from "lucide-react";
import { clinic, images, navLinks, whatsappLink } from "@/lib/site";

export function Footer() {
  return (
    <footer className="bg-espresso py-16 text-background/85">
      <div className="mx-auto grid max-w-7xl gap-12 px-5 lg:grid-cols-4 lg:px-8">
        <div>
          <img
            src={images.logo}
            alt="La Esthetique logo"
            loading="lazy"
            className="h-16 w-16 rounded-full bg-background/90 object-contain p-1"
          />
          <p className="mt-5 text-sm leading-relaxed text-background/70">
            La Esthetique is a dermatology, medical aesthetics and dental clinic in F-11 Markaz,
            Islamabad — dermatology and aesthetics with {clinic.doctor}, dentistry with Dr. Mehwish
            Zaman.
          </p>
        </div>
        <div>
          <h3 className="text-xs uppercase tracking-[0.2em] text-gold">Navigation</h3>
          <ul className="mt-5 space-y-2.5 text-sm">
            {navLinks.map((l) => (
              <li key={l.to}>
                <Link to={l.to} className="text-background/70 hover:text-background">
                  {l.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>
        <div>
          <h3 className="text-xs uppercase tracking-[0.2em] text-gold">Treatments</h3>
          <p className="mt-5 text-[0.68rem] uppercase tracking-[0.18em] text-background/50">
            Dermatology &amp; Aesthetics · Dr. Sumbleen Majid
          </p>
          <ul className="mt-2.5 space-y-2.5 text-sm">
            <li>
              <Link to="/skin-treatments" className="text-background/70 hover:text-background">
                Skin Treatments
              </Link>
            </li>
            <li>
              <Link to="/hair-treatments" className="text-background/70 hover:text-background">
                Hair Treatments
              </Link>
            </li>
          </ul>
          <p className="mt-6 text-[0.68rem] uppercase tracking-[0.18em] text-background/50">
            Dentistry · Dr. Mehwish Zaman
          </p>
          <ul className="mt-2.5 space-y-2.5 text-sm">
            <li>
              <Link to="/dental-services" className="text-background/70 hover:text-background">
                Dental Services
              </Link>
            </li>
            <li>
              <Link to="/dr-mehwish-zaman" className="text-background/70 hover:text-background">
                Meet Dr. Mehwish
              </Link>
            </li>
          </ul>
        </div>
        <div>
          <h3 className="text-xs uppercase tracking-[0.2em] text-gold">Contact</h3>
          <ul className="mt-5 space-y-2.5 text-sm text-background/70">
            <li>{clinic.address}</li>
            <li>
              <a href={`tel:${clinic.phoneTel}`} className="hover:text-background">
                Call {clinic.phoneDisplay}
              </a>
            </li>
            <li>
              <a
                href={whatsappLink}
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-background"
              >
                WhatsApp {clinic.phoneDisplay}
              </a>
            </li>
            <li className="flex gap-4 pt-2">
              <a
                href={clinic.facebook}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Facebook"
              >
                <Facebook className="h-4 w-4" />
              </a>
              <a
                href={clinic.instagram}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Instagram"
              >
                <Instagram className="h-4 w-4" />
              </a>
            </li>
          </ul>
        </div>
      </div>
      <p className="mx-auto mt-14 max-w-7xl border-t border-background/15 px-5 pt-6 text-xs text-background/55 lg:px-8">
        © 2026 La Esthetique. All rights reserved.
      </p>
    </footer>
  );
}
