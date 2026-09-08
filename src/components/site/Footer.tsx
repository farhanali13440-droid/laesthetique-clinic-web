import { Link } from "@tanstack/react-router";
import { Facebook, Instagram } from "lucide-react";
import { clinic, images, navLinks, whatsappLink } from "@/lib/site";
import { treatmentCategories } from "@/lib/treatments";

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
            La Esthetique is a dermatology and medical aesthetics clinic in F-11 Markaz, Islamabad,
            led by {clinic.doctor}.
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
          <ul className="mt-5 space-y-2.5 text-sm">
            {treatmentCategories.map((c) => (
              <li key={c.slug}>
                <Link
                  to="/treatments/category/$category"
                  params={{ category: c.slug }}
                  className="text-background/70 hover:text-background"
                >
                  {c.name}
                </Link>
              </li>
            ))}
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
