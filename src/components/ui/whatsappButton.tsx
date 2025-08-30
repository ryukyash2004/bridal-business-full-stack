"use client";

export default function WhatsAppButton() {
  // Replace with your WhatsApp number (international format without +, e.g. 919876543210)
  const phone = "919876543210";
  const text = encodeURIComponent("Hello! I want to book bridal makeup.");
  const href = `https://wa.me/${phone}?text=${text}`;

  return (
    <a
      href={href}
      target="_blank"
      rel="noreferrer"
      aria-label="Contact on WhatsApp"
      className="fixed right-5 bottom-5 z-50 flex items-center gap-3 px-4 py-3 rounded-full shadow-lg bg-green-500 text-white hover:scale-105 transition"
    >
      <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 24 24" fill="currentColor">
        <path d="M20.52 3.48A11.89 11.89 0 0 0 12 0C5.373 0 .02 5.353.02 12c0 2.11.55 4.18 1.6 5.99L0 24l6.19-1.58A11.92 11.92 0 0 0 12 24c6.627 0 12-5.373 12-12 0-3.2-1.25-6.2-3.48-8.52zM12 21.5c-1.2 0-2.36-.32-3.4-.92l-.25-.14-3.68.98.98-3.6-.16-.28A9.5 9.5 0 1 1 21.5 12 9.5 9.5 0 0 1 12 21.5z"/>
        <path d="M17.16 14.27c-.29-.15-1.7-.84-1.97-.94-.27-.1-.47-.15-.67.15-.2.29-.78.94-.95 1.14-.17.2-.33.22-.62.07-.29-.15-1.22-.45-2.33-1.44-.86-.75-1.44-1.67-1.61-1.96-.17-.29-.02-.45.13-.6.13-.13.29-.33.44-.5.15-.17.2-.29.3-.49.1-.2.05-.36-.02-.51-.07-.15-.67-1.6-.92-2.19-.24-.58-.49-.5-.67-.51l-.57-.01c-.2 0-.52.07-.8.36-.28.29-1.08 1.05-1.08 2.56 0 1.51 1.11 2.98 1.27 3.19.16.2 2.19 3.36 5.3 4.71 3.11 1.36 3.11.91 3.67.86.56-.04 1.77-.72 2.02-1.41.25-.7.25-1.3.17-1.41-.08-.13-.29-.2-.58-.35z"/>
      </svg>
      <span className="hidden sm:inline text-sm font-semibold">WhatsApp</span>
    </a>
  );
}
