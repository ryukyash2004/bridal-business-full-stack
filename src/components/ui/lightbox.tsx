"use client";

import { useState } from "react";

export default function Lightbox({ images }: { images: string[] }) {
  const [index, setIndex] = useState<number | null>(null);

  if (!images || images.length === 0) return null;

  return (
    <>
      <div className="grid grid-cols-2 md:grid-cols-3 gap-6">
        {images.map((src, i) => (
          <button
            key={i}
            onClick={() => setIndex(i)}
            className="overflow-hidden rounded-xl"
            aria-label={`Open image ${i + 1}`}
          >
            <img src={src} alt={`Gallery ${i + 1}`} className="w-full h-64 object-cover" />
          </button>
        ))}
      </div>

      {index !== null && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/70">
          <div className="relative max-w-4xl w-full">
            <button
              onClick={() => setIndex(null)}
              className="absolute right-2 top-2 text-white text-lg"
              aria-label="Close"
            >
              ✕
            </button>

            <div className="rounded-lg overflow-hidden">
              <img src={images[index]} alt={`Large ${index + 1}`} className="w-full h-[70vh] object-contain bg-black" />
            </div>

            <div className="flex justify-between items-center mt-3">
              <button
                onClick={() => setIndex((i) => (i === null ? null : (i - 1 + images.length) % images.length))}
                className="px-4 py-2 bg-white rounded shadow"
              >
                Prev
              </button>
              <div className="text-white">{index + 1} / {images.length}</div>
              <button
                onClick={() => setIndex((i) => (i === null ? null : (i + 1) % images.length))}
                className="px-4 py-2 bg-white rounded shadow"
              >
                Next
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
