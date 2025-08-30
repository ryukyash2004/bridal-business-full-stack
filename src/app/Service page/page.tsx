import { Card } from "@/components/ui/card";

const services = [
  {
    title: "Bridal Makeup",
    desc: "Luxurious packages tailored for brides, including HD makeup, hairstyling, and draping.",
  },
  {
    title: "Party Makeup",
    desc: "From subtle to glamorous, we help you look your best for any celebration.",
  },
  {
    title: "Pre-Wedding Shoot Makeup",
    desc: "Soft, camera-friendly makeup for timeless photoshoots.",
  },
  {
    title: "Hair Styling",
    desc: "Trendy and elegant hairstyles that complete your look.",
  },
  {
    title: "Skin Prep & Consultation",
    desc: "Personalized skincare routine before the big day.",
  },
];

export default function ServicesPage() {
  return (
    <main className="min-h-screen bg-white text-gray-900 px-6 py-16 max-w-5xl mx-auto">
      <h1 className="text-4xl font-bold mb-12 text-center">Our Services</h1>
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
        {services.map((s, i) => (
          <Card key={i} title={s.title} description={s.desc} />
        ))}
      </div>
    </main>
  );
}
