const testimonials = [
  { name: "Ananya Sharma", text: "I felt like a princess on my wedding day! The team was professional and kind." },
  { name: "Ritika Verma", text: "Best bridal makeup studio in town. My photoshoot makeup was natural and camera-ready." },
  { name: "Neha Kapoor", text: "They listened to what I wanted and gave me the perfect look." },
];

export default function TestimonialsPage() {
  return (
    <main className="min-h-screen bg-white text-gray-900 px-6 py-16 max-w-4xl mx-auto">
      <h1 className="text-4xl font-bold mb-12 text-center">What Our Brides Say</h1>
      <div className="space-y-8">
        {testimonials.map((t, i) => (
          <div key={i} className="p-6 bg-pink-50 rounded-xl shadow">
            <p className="italic mb-3">“{t.text}”</p>
            <p className="font-semibold text-pink-600">– {t.name}</p>
          </div>
        ))}
      </div>
    </main>
  );
}
