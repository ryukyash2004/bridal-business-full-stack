"use client";

import { useEffect, useState } from "react";
import { Button } from "@/components/ui/button";

type BookingForm = {
  name: string;
  phone: string;
  date: string;
  time: string;
  notes: string;
};

type BookingModalProps =
  | { controlled?: false } // internal control; renders its own trigger button
  | {
      controlled: true;
      open: boolean;
      onClose: () => void;
    };

export default function BookingModal(props: BookingModalProps) {
  const internal = !props || (props as any).controlled !== true;
  const [open, setOpen] = useState<boolean>(internal ? false : (props as any).open);
  const [form, setForm] = useState<BookingForm>({ name: "", phone: "", date: "", time: "", notes: "" });
  const [submitting, setSubmitting] = useState(false);
  const [message, setMessage] = useState<string | null>(null);

  // if parent controls modal, sync open state with prop
  useEffect(() => {
    if (!internal) {
      setOpen((props as any).open);
    }
  }, [props]);

  function close() {
    if (internal) setOpen(false);
    else (props as any).onClose();
  }

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setSubmitting(true);
    setMessage(null);
    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          type: "booking",
          ...form,
        }),
      });
      if (res.ok) {
        setMessage("Booking request sent! We'll contact you soon.");
        setForm({ name: "", phone: "", date: "", time: "", notes: "" });
        close();
      } else {
        setMessage("Something went wrong. Try again later.");
      }
    } catch (err) {
      setMessage("Network error. Try again later.");
    } finally {
      setSubmitting(false);
    }
  }

  return (
    <>
      {internal && (
        <Button onClick={() => setOpen(true)}>Book Your Appointment</Button>
      )}

      {open && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
          <div
            className="absolute inset-0 bg-black/40"
            onClick={close}
            aria-hidden
          />
          <div className="relative w-full max-w-md bg-white rounded-xl shadow-lg p-6 z-10">
            <h3 className="text-xl font-semibold mb-4">Book an Appointment</h3>

            <form onSubmit={handleSubmit} className="space-y-3">
              <input
                required
                className="w-full p-3 border rounded"
                placeholder="Your name"
                value={form.name}
                onChange={(e) => setForm({ ...form, name: e.target.value })}
              />
              <input
                required
                className="w-full p-3 border rounded"
                placeholder="Phone / WhatsApp"
                value={form.phone}
                onChange={(e) => setForm({ ...form, phone: e.target.value })}
              />
              <div className="grid grid-cols-2 gap-3">
                <input
                  required
                  type="date"
                  className="p-3 border rounded"
                  value={form.date}
                  onChange={(e) => setForm({ ...form, date: e.target.value })}
                />
                <input
                  required
                  type="time"
                  className="p-3 border rounded"
                  value={form.time}
                  onChange={(e) => setForm({ ...form, time: e.target.value })}
                />
              </div>

              <textarea
                className="w-full p-3 border rounded"
                placeholder="Notes (optional)"
                value={form.notes}
                onChange={(e) => setForm({ ...form, notes: e.target.value })}
              />

              <div className="flex gap-3 justify-end">
                <Button type="button" variant="outline" onClick={close}>
                  Cancel
                </Button>
                <Button type="submit" disabled={submitting}>
                  {submitting ? "Sending..." : "Send Booking"}
                </Button>
              </div>
            </form>

            {message && <p className="mt-3 text-sm text-gray-700">{message}</p>}
          </div>
        </div>
      )}
    </>
  );
}
