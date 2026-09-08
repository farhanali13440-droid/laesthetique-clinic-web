import { useEffect, useState } from "react";
import { Link } from "@tanstack/react-router";
import { Menu, Phone, MessageCircle, CalendarDays, ChevronDown } from "lucide-react";
import { Sheet, SheetContent, SheetTrigger, SheetTitle } from "@/components/ui/sheet";
import { cn } from "@/lib/utils";
import { clinic, images, navLinks, whatsappLink } from "@/lib/site";

const treatmentMenu = [
  { label: "Skin & Dermatology", slug: "skin-dermatology" },
  { label: "Hair & Scalp", slug: "hair-scalp" },
  { label: "Aesthetic Treatments", slug: "aesthetic-treatments" },
];

export function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={cn(
        "fixed inset-x-0 top-0 z-50 transition-all duration-300",
        scrolled
          ? "border-b border-border/70 bg-background/92 backdrop-blur-md"
          : "border-b border-transparent bg-background/70 backdrop-blur-sm",
      )}
    >
      <div className="mx-auto grid max-w-7xl grid-cols-[minmax(0,1fr)_auto] items-center gap-4 px-5 py-3 lg:px-8">
        <Link to="/" className="flex min-w-0 items-center gap-3">
          <img
            src={images.logo}
            alt="La Esthetique clinic logo"
            className="h-11 w-11 shrink-0 rounded-full object-contain"
            width={44}
            height={44}
          />
          <span className="min-w-0">
            <span className="block truncate font-display text-lg leading-tight tracking-wide text-espresso">
              LA ESTHETIQUE
            </span>
            <span className="block truncate text-[0.62rem] uppercase tracking-[0.22em] text-muted-foreground">
              Dermatology · Skin · Aesthetics
            </span>
          </span>
        </Link>

        <nav className="hidden items-center gap-6 xl:flex">
          {navLinks.map((l) =>
            l.to === "/treatments" ? (
              <div key={l.to} className="group relative">
                <Link
                  to="/treatments"
                  className="inline-flex items-center gap-1 py-2 text-sm text-foreground/80 transition-colors hover:text-primary [&.active]:text-primary"
                  activeProps={{ className: "text-primary" }}
                >
                  {l.label} <ChevronDown className="h-3.5 w-3.5" />
                </Link>
                <div className="invisible absolute left-1/2 top-full z-50 w-60 -translate-x-1/2 translate-y-1 rounded-sm border border-border bg-background p-2 opacity-0 shadow-sm transition-all duration-200 group-hover:visible group-hover:translate-y-0 group-hover:opacity-100 group-focus-within:visible group-focus-within:opacity-100">
                  {treatmentMenu.map((m) => (
                    <Link
                      key={m.slug}
                      to="/treatments/category/$category"
                      params={{ category: m.slug }}
                      className="block rounded-sm px-3 py-2.5 text-sm text-foreground/80 transition-colors hover:bg-sand hover:text-primary"
                    >
                      {m.label}
                    </Link>
                  ))}
                  <Link
                    to="/treatments"
                    className="mt-1 block border-t border-border px-3 pt-3 pb-2 text-xs uppercase tracking-[0.16em] text-primary"
                  >
                    View All Treatments
                  </Link>
                </div>
              </div>
            ) : (
              <Link
                key={l.to}
                to={l.to}
                activeOptions={{ exact: l.to === "/" }}
                activeProps={{ className: "text-primary" }}
                className="text-sm text-foreground/80 transition-colors hover:text-primary"
              >
                {l.label}
              </Link>
            ),
          )}
          <Link
            to="/contact"
            className="rounded-sm bg-primary px-5 py-2.5 text-sm text-primary-foreground transition-colors hover:bg-espresso"
          >
            Book Appointment
          </Link>
        </nav>

        <div className="flex items-center gap-2 xl:hidden">
          <Link
            to="/contact"
            className="hidden rounded-sm bg-primary px-4 py-2 text-sm text-primary-foreground sm:inline-block"
          >
            Book Appointment
          </Link>
          <Sheet open={open} onOpenChange={setOpen}>
            <SheetTrigger
              aria-label="Open menu"
              className="rounded-sm border border-border p-2.5 text-espresso"
            >
              <Menu className="h-5 w-5" />
            </SheetTrigger>
            <SheetContent side="right" className="w-[86vw] max-w-sm overflow-y-auto bg-background">
              <SheetTitle className="font-display text-xl">Menu</SheetTitle>
              <nav className="mt-8 flex flex-col gap-1">
                {navLinks.map((l) => (
                  <Link
                    key={l.to}
                    to={l.to}
                    onClick={() => setOpen(false)}
                    className="border-b border-border/60 py-3 text-base text-foreground/85"
                  >
                    {l.label}
                  </Link>
                ))}
                <div className="mt-4 space-y-1">
                  <p className="eyebrow">Treatment Categories</p>
                  {treatmentMenu.map((m) => (
                    <Link
                      key={m.slug}
                      to="/treatments/category/$category"
                      params={{ category: m.slug }}
                      onClick={() => setOpen(false)}
                      className="block py-2 text-sm text-muted-foreground"
                    >
                      {m.label}
                    </Link>
                  ))}
                </div>
                <Link
                  to="/contact"
                  onClick={() => setOpen(false)}
                  className="mt-6 rounded-sm bg-primary px-5 py-3 text-center text-sm text-primary-foreground"
                >
                  Book Appointment
                </Link>
                <a
                  href={whatsappLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-2 rounded-sm border border-primary px-5 py-3 text-center text-sm text-primary"
                >
                  WhatsApp Us
                </a>
              </nav>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </header>
  );
}

export function MobileCtaBar() {
  return (
    <div className="fixed inset-x-0 bottom-0 z-40 grid grid-cols-3 border-t border-border bg-background/95 backdrop-blur-md lg:hidden">
      <a
        href={`tel:${clinic.phoneTel}`}
        className="flex flex-col items-center gap-1 py-3 text-[0.68rem] uppercase tracking-[0.12em] text-espresso"
      >
        <Phone className="h-4 w-4 text-primary" /> Call
      </a>
      <a
        href={whatsappLink}
        target="_blank"
        rel="noopener noreferrer"
        className="flex flex-col items-center gap-1 border-x border-border py-3 text-[0.68rem] uppercase tracking-[0.12em] text-espresso"
      >
        <MessageCircle className="h-4 w-4 text-primary" /> WhatsApp
      </a>
      <Link
        to="/contact"
        className="flex flex-col items-center gap-1 bg-primary py-3 text-[0.68rem] uppercase tracking-[0.12em] text-primary-foreground"
      >
        <CalendarDays className="h-4 w-4" /> Book
      </Link>
    </div>
  );
}
