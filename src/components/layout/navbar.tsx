"use client";

import Link from "next/link";
import { useState } from "react";

const links = [
  { href: "/", label: "Home" },
  { href: "/about", label: "About" },
  { href: "/Service page", label: "Services" },
  { href: "/Gallery", label: "Gallery" },
  { href: "/Testimonials", label: "Testimonials" },
  { href: "/Contact page", label: "Contact" },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <nav className="w-full shadow-md bg-white fixed top-0 left-0 z-50">
      <div className="max-w-6xl mx-auto px-4 flex justify-between items-center h-16">
        <Link href="/" className="text-2xl font-bold text-pink-500">
          Bridal Glow
        </Link>

        {/* Desktop Links */}
        <div className="hidden md:flex space-x-6">
          {links.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="hover:text-pink-500 transition"
            >
              {link.label}
            </Link>
          ))}
        </div>

        {/* Mobile Menu Button */}
        <button
          onClick={() => setOpen(!open)}
          className="md:hidden text-2xl"
        >
          ☰
        </button>
      </div>

      {/* Mobile Links */}
      {open && (
        <div className="md:hidden bg-white shadow-md flex flex-col items-center space-y-4 py-4">
          {links.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="hover:text-pink-500 transition"
              onClick={() => setOpen(false)}
            >
              {link.label}
            </Link>
          ))}
        </div>
      )}
    </nav>
  );
}
