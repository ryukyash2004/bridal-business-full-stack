import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-pink-100 text-gray-700 py-8 mt-12">
      <div className="max-w-6xl mx-auto px-6 grid md:grid-cols-3 gap-8">
        
        {/* Brand Info */}
        <div>
          <h3 className="text-2xl font-bold text-pink-500">Bridal Glow</h3>
          <p className="mt-2">Where elegance meets perfection ✨</p>
          <p suppressHydrationWarning>
          © {new Date().getFullYear()} Bridal Glow Studio
          </p>

        </div>

        {/* Quick Links */}
        <div>
          <h4 className="font-semibold mb-2">Quick Links</h4>
          <ul className="space-y-2">
            <li><Link href="/about">About</Link></li>
            <li><Link href="/services">Services</Link></li>
            <li><Link href="/gallery">Gallery</Link></li>
            <li><Link href="/contact">Contact</Link></li>
          </ul>
        </div>

        {/* Contact Info */}
        <div>
          <h4 className="font-semibold mb-2">Contact</h4>
          <p>📍 Your City, India</p>
          <p>📞 +91 9876543210</p>
          <p>📧 hello@bridalglow.com</p>
        </div>
      </div>
    </footer>
  );
}
