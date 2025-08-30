// Note: update /public/gallery/*.jpg images accordingly
import Image from "next/image";

const gallery = [
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
      <div className="grid grid-cols-2 md:grid-cols-3 gap-6">
        {gallery.map((src, i) => (
          <div key={i} className="overflow-hidden rounded-xl shadow hover:scale-105 transition">
            <Image
              src={src}
              alt={`Gallery ${i + 1}`}
              className="w-full h-64 object-cover"
              width={400}
              height={256}
              style={{ width: "100%", height: "16rem", objectFit: "cover" }}
            />
          </div>
        ))}
      </div>
    </main>
  );
}

