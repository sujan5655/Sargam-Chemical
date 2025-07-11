import { Sparkles, Leaf, ShieldCheck, Users, Globe, Star } from "lucide-react"; // optional icon set

export default function About() {
  return (
    <section className="bg-gradient-to-br from-blue-50 via-white to-blue-100 text-gray-800 py-20 px-6 md:px-12 lg:px-24">
      {/* Intro */}
      <div className="max-w-5xl mx-auto text-center mb-20">
        <h2 className="text-5xl font-extrabold text-blue-900 mb-6 tracking-tight leading-tight md:mt-[40px]">
          About <span className="text-blue-600">Sargam Chemicals</span>
        </h2>
        <p className="text-lg text-gray-700 leading-relaxed max-w-3xl mx-auto">
          Since 2025, <strong>Sargam Chemical Industries Pvt. Ltd.</strong> has become a trusted name in every Nepali household. Based in Duhabi Sunsari, we produce high-performance, eco-friendly soaps and detergents available in all 77 districts of Nepal.
        </p>
      </div>

      {/* Divider Line */}
      <div className="border-t border-blue-200 mb-16 w-32 mx-auto" />

      {/* Mission + Products Section */}
      <div className="grid md:grid-cols-2 gap-16 max-w-6xl mx-auto">
        <div>
          <h3 className="text-3xl font-bold text-blue-800 mb-4 flex items-center gap-2">
            <Leaf className="text-green-600" /> Our Mission
          </h3>
          <p className="text-gray-700 text-lg leading-relaxed">
            We aim to deliver safe, sustainable, and superior cleaning solutions for all. Every bar of soap and scoop of detergent reflects our promise of environmental care, performance, and customer-first values.
          </p>
        </div>

        <div>
          <h3 className="text-3xl font-bold text-blue-800 mb-4 flex items-center gap-2">
            <Sparkles className="text-yellow-500" /> Why Our Products Shine
          </h3>
          <p className="text-gray-700 text-lg leading-relaxed">
            Sargam products remove stubborn stains with a single wash. Whether It&apos;s greasy kitchenware or tough laundry marks, our formulas are machine-friendly, gentle on colors, and derived from vegan ingredients.
          </p>
        </div>
      </div>

      {/* Features */}
      <div className="mt-24 text-center">
        <h3 className="text-3xl font-bold text-blue-800 mb-10">Why Choose Sargam</h3>
        <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-8 max-w-5xl mx-auto text-left">
          {[
            { icon: <ShieldCheck className="text-blue-600" />, title: "Certified & Reliable" },
            { icon: <Users className="text-green-600" />, title: "Dedicated Support" },
            { icon: <Sparkles className="text-yellow-500" />, title: "Innovative Formulas" },
            { icon: <Leaf className="text-green-500" />, title: "Eco-friendly Production" },
            { icon: <Globe className="text-blue-400" />, title: "Nationwide Reach" },
            { icon: <Star className="text-orange-500" />, title: "Trusted by Households" },
          ].map(({ icon, title }, idx) => (
            <div
              key={idx}
              className="bg-white rounded-xl shadow-md p-6 border border-gray-100 hover:shadow-xl transition duration-300 flex items-center gap-4"
            >
              <div className="text-3xl">{icon}</div>
              <p className="text-gray-800 font-medium text-lg">{title}</p>
            </div>
          ))}
        </div>
      </div>

      {/* CTA Message */}
      <div className="mt-24 text-center">
        <p className="text-xl font-semibold text-blue-900 mb-4">
          From homes to industries — we clean with care.
        </p>
        <div className="inline-block bg-blue-800 text-white px-8 py-3 rounded-full shadow-lg font-semibold cursor-default">
          Sargam — For a Cleaner Nepal
        </div>
      </div>
    </section>
  );
}
