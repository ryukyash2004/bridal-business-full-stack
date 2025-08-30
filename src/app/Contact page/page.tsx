"use client";

import BookingModal from "@/components/ui/bookingModal";
import WhatsAppButton from "@/components/ui/whatsappButton";
import MapEmbed from "@/components/widgets/mapEmbed";

export default function ContactPage() {
  return (
    <main className="min-h-screen bg-white text-gray-900 px-6 py-16 max-w-5xl mx-auto">
      <h1 className="text-4xl font-bold mb-6 text-center">Contact & Booking</h1>

      <div className="grid md:grid-cols-2 gap-8">
        <div>
          <p className="mb-4">Have questions or want to book your bridal makeup? Use the booking button below or message us on WhatsApp.</p>

          <div className="space-y-4">
            <BookingModal />
            <a className="inline-block text-sm underline" href="mailto:info@bridalglowstudio.com">info@bridalglowstudio.com</a>
            <p className="text-sm">Phone: +91 98765 43210</p>
          </div>

          <div className="mt-8">
            <h3 className="font-semibold mb-2">Studio Location</h3>
            <MapEmbed />
          </div>
        </div>

        <div>
          <h3 className="font-semibold mb-2">Quick message</h3>
          <form
            onSubmit={async (e) => {
              e.preventDefault();
              const form = new FormData(e.currentTarget as HTMLFormElement);
              const payload = {
                type: "message",
                name: String(form.get("name") || ""),
                email: String(form.get("email") || ""),
                message: String(form.get("message") || ""),
              };
              await fetch("/api/contact", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify(payload),
              });
              alert("Message sent (demo).");
              (e.currentTarget as HTMLFormElement).reset();
            }}
            className="space-y-4"
          >
            <input name="name" required className="w-full p-3 border rounded" placeholder="Your name" />
            <input name="email" required className="w-full p-3 border rounded" placeholder="Your email" />
            <textarea name="message" required className="w-full p-3 border rounded h-32" placeholder="Your message" />
            <button className="px-6 py-3 bg-pink-500 text-white rounded-xl">Send</button>
          </form>
        </div>
      </div>

      <WhatsAppButton />
    </main>
  );
}
