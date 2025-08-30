// src/app/page.tsx
"use client";

import { useState } from "react";
import dynamic from "next/dynamic";
import { motion } from "framer-motion";
import { Card } from "@/components/ui/card";
import BookingModal from "@/components/ui/bookingModal";
import Link from "next/link";

const Lightbox = dynamic(() => import("@/components/ui/lightbox"), { ssr: false });

export default function HomePage() {
  const [bookingOpen, setBookingOpen] = useState(false);
  const [lightboxIndex, setLightboxIndex] = useState<number | null>(null);

  const services = [
    {
      title: "Bridal Makeup",
      desc: "Full bridal package: trial, on-day makeup, hairstyling & touch-ups.",
    },
    {
      title: "Pre-Wedding Shoot",
      desc: "Camera-friendly soft glam for timeless photos.",
    },
    {
      title: "Party Glam",
      desc: "Elegant, photogenic looks for receptions and events.",
    },
  ];

  const images = [
    "/gallery/bride1.jpg",
    "/gallery/bride2.jpg",
    "/gallery/party1.jpg",
  ];

  return (
    <main className="min-h-screen bg-white text-gray-900">
      {/* HERO */}
      <section className="relative h-[72vh] flex flex-col items-center justify-center text-center bg-gradient-to-r from-pink-50 to-rose-100 px-6">
        <motion.h1
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-5xl sm:text-6xl font-extrabold text-rose-800 mb-4"
        >
          Bridal Glow Studio
        </motion.h1>

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.9, delay: 0.15 }}
          className="max-w-2xl text-lg sm:text-xl text-gray-700 mb-6"
        >
          Transforming brides into timeless beauties — premium products, calm
          on-day support, and looks that photograph beautifully.
        </motion.p>

        <div className="flex gap-3">
          <button
            onClick={() => setBookingOpen(true)}
            className="px-6 py-3 bg-rose-600 text-white rounded-md shadow hover:bg-rose-700"
          >
            Book an Appointment
          </button>
          <Link href="/gallery" className="px-6 py-3 border rounded-md text-rose-700 hover:bg-rose-100">
            View Gallery
          </Link>
        </div>

        <div className="absolute bottom-8 text-sm text-gray-600">
          <Link href="/services" className="underline hover:text-rose-600">
            See our services →
          </Link>
        </div>
      </section>

      {/* SERVICES PREVIEW */}
      <section className="py-16 bg-white">
        <div className="max-w-6xl mx-auto px-6">
          <h2 className="text-3xl font-semibold text-center text-rose-800 mb-8">
            Our Services
          </h2>

          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
            {services.map((s) => (
              <motion.div key={s.title} whileHover={{ scale: 1.03 }}>
                <Card title={s.title} description={s.desc}>
                  <div className="mt-4 flex justify-between items-center">
                    <Link href="/services" className="text-rose-600 font-medium">
                      Learn more
                    </Link>
                    <button
                      onClick={() => setBookingOpen(true)}
                      className="px-3 py-1 bg-rose-600 text-white rounded-md text-sm hover:bg-rose-700"
                    >
                      Book
                    </button>
                  </div>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Gallery preview */}
      <section className="py-12 bg-rose-50">
        <div className="max-w-5xl mx-auto px-6">
          <h3 className="text-2xl font-semibold text-rose-800 mb-6 text-center">Gallery Preview</h3>
          <div className="grid grid-cols-3 gap-4">
            {images.map((src, i) => (
              <button
                key={i}
                onClick={() => setLightboxIndex(i)}
                className="overflow-hidden rounded-lg shadow-md"
                aria-label={`Open image ${i + 1}`}
              >
                <img src={src} alt={`Preview ${i + 1}`} className="w-full h-44 object-cover" />
              </button>
            ))}
          </div>
          <div className="mt-6 text-center">
            <Link href="/gallery" className="text-rose-700 underline">
              View full gallery →
            </Link>
          </div>
        </div>
      </section>

      {/* Booking modal (controlled) */}
      <BookingModal controlled={true} open={bookingOpen} onClose={() => setBookingOpen(false)} />

      {/* Lightbox (client-only) */}
      {lightboxIndex !== null && (
        <Lightbox images={images} />
      )}
    </main>
  );
}
