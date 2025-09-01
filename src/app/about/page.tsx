// server component (no Navbar/Footer here — layout.tsx already includes them)
export default function AboutPage() {
  return (
    <main className="min-h-screen bg-white text-gray-900 px-6 py-16 max-w-4xl mx-auto">
      <h1 className="text-4xl font-bold mb-6 text-center">About Us</h1>
      <p className="text-lg mb-4">
        At <span className="font-semibold">Bridal Glow Studio</span>, we believe every bride
        deserves to shine on her special day. With over <strong>10 years of professional
        experience</strong>, our team of certified makeup artists has transformed countless
        brides into the most confident versions of themselves.
      </p>
      <p className="text-lg mb-4">
        We specialize in <em>bridal, party, and pre-wedding shoot makeup</em>, combining the
        latest beauty trends with timeless elegance.
      </p>
    </main>
  );
}
