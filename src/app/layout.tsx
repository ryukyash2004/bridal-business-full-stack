import type { Metadata } from "next";
import { Inter, Playfair_Display } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/layout/navbar";
import Footer from "@/components/layout/footer";

const inter = Inter({ subsets: ["latin"], variable: "--font-inter" });
const playfair = Playfair_Display({ subsets: ["latin"], variable: "--font-playfair" });

export const metadata: Metadata = {
  title: "Bridal Glow Studio",
  description: "Elegant bridal makeup services for your big day.",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className={`${inter.variable} ${playfair.variable} antialiased`}>
        {/* Navbar is a client component (uses useState) — render it once here */}
        <Navbar />

        {/* main content — padded to account for fixed navbar */}
        <main className="pt-16">
          {children}
        </main>

        {/* Footer (server component) */}
        <Footer />
      </body>
    </html>
  );
}
