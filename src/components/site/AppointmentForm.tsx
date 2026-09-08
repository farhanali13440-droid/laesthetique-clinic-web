import { useState, type FormEvent } from "react";
import { MessageCircle } from "lucide-react";
import { clinic } from "@/lib/site";
import { btnPrimary } from "@/components/site/ui";

const doctorOptions = [
  "Dr. Sumbleen Majid — Dermatology & Aesthetics",
  "Dr. Mehwish Zaman — Dentistry",
];

const fieldClass =
  "mt-2 w-full rounded-sm border border-border bg-background px-4 py-3 text-sm text-foreground outline-none transition-colors focus:border-primary";
const labelClass = "block text-xs uppercase tracking-[0.16em] text-muted-foreground";

/**
 * The request is composed into a WhatsApp message and opened for review.
 * Nothing is stored and nothing is sent automatically.
 */
export function AppointmentForm() {
  const [doctor, setDoctor] = useState(doctorOptions[0]);

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    const value = (key: string) => String(data.get(key) ?? "").trim();

    const lines = [
      "Hi La Esthetique, I would like to request an appointment.",
      "",
      `Name: ${value("name")}`,
      `Phone: ${value("phone")}`,
      `Doctor: ${value("doctor")}`,
      `Treatment / Concern: ${value("concern")}`,
      `Preferred Date: ${value("date")}`,
      `Preferred Time: ${value("time")}`,
    ];
    const message = value("message");
    if (message) lines.push(`Message: ${message}`);

    window.open(
      `https://wa.me/${clinic.whatsapp}?text=${encodeURIComponent(lines.join("\n"))}`,
      "_blank",
      "noopener,noreferrer",
    );
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-5">
      <div className="grid gap-5 sm:grid-cols-2">
        <div>
          <label className={labelClass} htmlFor="ap-name">
            Name
          </label>
          <input id="ap-name" name="name" required className={fieldClass} autoComplete="name" />
        </div>
        <div>
          <label className={labelClass} htmlFor="ap-phone">
            Phone Number
          </label>
          <input
            id="ap-phone"
            name="phone"
            type="tel"
            required
            className={fieldClass}
            autoComplete="tel"
          />
        </div>
      </div>

      <div>
        <label className={labelClass} htmlFor="ap-doctor">
          Doctor
        </label>
        <select
          id="ap-doctor"
          name="doctor"
          className={fieldClass}
          value={doctor}
          onChange={(e) => setDoctor(e.target.value)}
        >
          {doctorOptions.map((option) => (
            <option key={option} value={option}>
              {option}
            </option>
          ))}
        </select>
      </div>

      <div>
        <label className={labelClass} htmlFor="ap-concern">
          Treatment / Concern
        </label>
        <input id="ap-concern" name="concern" required className={fieldClass} />
      </div>

      <div className="grid gap-5 sm:grid-cols-2">
        <div>
          <label className={labelClass} htmlFor="ap-date">
            Preferred Date
          </label>
          <input id="ap-date" name="date" type="date" className={fieldClass} />
        </div>
        <div>
          <label className={labelClass} htmlFor="ap-time">
            Preferred Time
          </label>
          <input id="ap-time" name="time" type="time" className={fieldClass} />
        </div>
      </div>

      <div>
        <label className={labelClass} htmlFor="ap-message">
          Message
        </label>
        <textarea id="ap-message" name="message" rows={4} className={fieldClass} />
      </div>

      <button type="submit" className={btnPrimary}>
        <MessageCircle className="h-4 w-4" /> Request Appointment
      </button>
      <p className="text-xs leading-relaxed text-muted-foreground">
        Your request opens in WhatsApp so you can review it before sending. Nothing is sent
        automatically.
      </p>
    </form>
  );
}
