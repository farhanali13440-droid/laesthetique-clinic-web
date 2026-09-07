import { useState } from "react";
import { Dialog, DialogContent, DialogTitle } from "@/components/ui/dialog";

export type GalleryItem = { src: string; alt: string; caption: string };

export function Gallery({ items }: { items: GalleryItem[] }) {
  const [active, setActive] = useState<GalleryItem | null>(null);

  return (
    <>
      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
        {items.map((item) => (
          <button
            key={item.src + item.caption}
            type="button"
            onClick={() => setActive(item)}
            className="group relative overflow-hidden rounded-sm bg-sand"
          >
            <img
              src={item.src}
              alt={item.alt}
              loading="lazy"
              className="h-72 w-full object-cover transition-transform duration-700 group-hover:scale-105"
            />
            <span className="absolute inset-x-0 bottom-0 bg-espresso/55 px-4 py-3 text-left text-xs uppercase tracking-[0.18em] text-background opacity-0 transition-opacity duration-300 group-hover:opacity-100">
              {item.caption}
            </span>
          </button>
        ))}
      </div>

      <Dialog open={!!active} onOpenChange={(o) => !o && setActive(null)}>
        <DialogContent className="max-w-4xl border-none bg-transparent p-0 shadow-none">
          <DialogTitle className="sr-only">{active?.caption ?? "Clinic image"}</DialogTitle>
          {active && (
            <figure>
              <img
                src={active.src}
                alt={active.alt}
                className="max-h-[80vh] w-full rounded-sm object-contain"
              />
              <figcaption className="mt-3 text-center text-xs uppercase tracking-[0.2em] text-background">
                {active.caption}
              </figcaption>
            </figure>
          )}
        </DialogContent>
      </Dialog>
    </>
  );
}
