import dynamic from "next/dynamic";

// client component; dynamic import disabled SSR to avoid hydration mismatch
const Lightbox = dynamic(() => import("@/components/ui/lightbox"), { ssr: false });

const images = [
  "/gallery/bride1.jpg",
  "/gallery/bride2.jpg",
  "/gallery/party1.jpg",
  "/gallery/shoot1.jpg",
  "/gallery/shoot2.jpg",
  "/gallery/hairstyle1.jpg",
];

export default function GalleryPage() {
  return (
    <main className="min-h-screen bg-white text-gray-900 px-6 py-16 max-w-6xl mx-auto">
      <h1 className="text-4xl font-bold mb-12 text-center">Gallery</h1>
      <Lightbox images={images} />
    </main>
  );
}
