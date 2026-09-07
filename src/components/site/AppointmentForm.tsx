import { useState } from "react";
import { z } from "zod";
import { toast } from "sonner";
import { clinic } from "@/lib/site";

const schema = z.object({
  name: z.string().trim().min(2, "Please enter your name").max(80),
  phone: z.string().trim().min(7, "Please enter a valid phone number").max(20),
  treatment: z.string().trim().max(120).optional(),
  date: z.string().trim().max(20).optional(),
  time: z.string().trim().max(20).optional(),
  message: z.string().trim().max(600).optional(),
});

const field =
  "w-full rounded-sm border border-border bg-background px-4 py-3 text-sm outline-none transition-colors placeholder:text-muted-foreground/70 focus:border-primary";

export function AppointmentForm() {
  const [errors, setErrors] = useState<Record<string, string>>({});

  function onSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const fd = new FormData(e.currentTarget);
    const parsed = schema.safeParse(Object.fromEntries(fd.entries()));
    if (!parsed.success) {
      const next: Record<string, string> = {};
      for (const issue of parsed.error.issues) next[String(issue.path[0])] = issue.message;
      setErrors(next);
      return;
    }
    setErrors({});
    const d = parsed.data;
    const text = [
      `Hello La Esthetique, I would like to request an appointment with ${clinic.doctor}.`,
      `Name: ${d.name}`,
      `Phone: ${d.phone}`,
      d.treatment ? `Treatment / Concern: ${d.treatment}` : "",
      d.date ? `Preferred date: ${d.date}` : "",
      d.time ? `Preferred time: ${d.time}` : "",
      d.message ? `Message: ${d.message}` : "",
    ]
      .filter(Boolean)
      .join("\n");

    window.open(
      `https://wa.me/${clinic.whatsapp}?text=${encodeURIComponent(text)}`,
      "_blank",
      "noopener,noreferrer",
    );
    toast.success("Your request is ready to send on WhatsApp.");
    e.currentTarget.reset();
  }

  return (
    <form onSubmit={onSubmit} className="grid gap-4 sm:grid-cols-2">
      <div className="sm:col-span-1">
        <label htmlFor="name" className="mb-1.5 block text-xs uppercase tracking-[0.16em]">
          Name
        </label>
        <input id="name" name="name" className={field} placeholder="Your full name" />
        {errors.name && <p className="mt-1 text-xs text-destructive">{errors.name}</p>}
      </div>
      <div>
        <label htmlFor="phone" className="mb-1.5 block text-xs uppercase tracking-[0.16em]">
          Phone Number
        </label>
        <input id="phone" name="phone" className={field} placeholder="03XX XXXXXXX" />
        {errors.phone && <p className="mt-1 text-xs text-destructive">{errors.phone}</p>}
      </div>
      <div className="sm:col-span-2">
        <label htmlFor="treatment" className="mb-1.5 block text-xs uppercase tracking-[0.16em]">
          Treatment / Concern
        </label>
        <input
          id="treatment"
          name="treatment"
          className={field}
          placeholder="e.g. Acne scars, HydraFacial, hair loss"
        />
      </div>
      <div>
        <label htmlFor="date" className="mb-1.5 block text-xs uppercase tracking-[0.16em]">
          Preferred Date
        </label>
        <input id="date" name="date" type="date" className={field} />
      </div>
      <div>
        <label htmlFor="time" className="mb-1.5 block text-xs uppercase tracking-[0.16em]">
          Preferred Time
        </label>
        <input id="time" name="time" type="time" className={field} />
      </div>
      <div className="sm:col-span-2">
        <label htmlFor="message" className="mb-1.5 block text-xs uppercase tracking-[0.16em]">
          Message
        </label>
        <textarea
          id="message"
          name="message"
          rows={4}
          className={field}
          placeholder="Anything you would like the clinic to know"
        />
      </div>
      <button
        type="submit"
        className="sm:col-span-2 rounded-sm bg-primary px-6 py-3.5 text-sm uppercase tracking-[0.16em] text-primary-foreground transition-colors hover:bg-espresso"
      >
        Request Appointment
      </button>
    </form>
  );
}
