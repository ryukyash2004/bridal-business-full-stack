// server component
export default function MapEmbed({ placeIdOrEmbedUrl }: { placeIdOrEmbedUrl?: string }) {
  // You can replace the src below with your Google Maps embed link
  const src =
    placeIdOrEmbedUrl ||
    "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1885.123456789!2d72.0!3d19.0!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMTjCsDAuMCJOIDcywrAwMC4wIlc!5e0!3m2!1sen!2sin!4v0000000000000";
  return (
    <div className="w-full h-80 rounded-xl overflow-hidden shadow-md">
      <iframe
        title="Bridal Glow Studio Location"
        src={src}
        width="100%"
        height="100%"
        style={{ border: 0 }}
        loading="lazy"
      />
    </div>
  );
}
