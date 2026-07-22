"use client";

import {
  Sparkles,
  Leaf,
  ShieldCheck,
  Users,
  Globe,
  Star,
  Link,
} from "lucide-react";

export default function About() {
  return (
    <section className="bg-gradient-to-br from-blue-50 via-white to-blue-100 py-20 px-6 md:px-12 lg:px-24">
      {/* Heading */}
      <div className="max-w-5xl mx-auto text-center mb-20">
        <h1 className="text-5xl font-extrabold text-blue-900 mt-10">
          About <span className="text-blue-600">Sargam Chemical Industries</span>
        </h1>

        <p className="mt-6 text-lg text-gray-700 leading-8">
          <strong>Sargam Chemical Industries Pvt. Ltd.</strong> was founded in
          <strong> 2025</strong> and is headquartered in
          <strong> Duhabi, Sunsari</strong>, in Nepal's eastern region. Today,
          the company is recognized as one of Nepal's leading manufacturers of
          soaps and detergents, with products distributed across all
          <strong> 77 districts</strong> of the country.
        </p>
      </div>

      {/* Company Story */}
      <div className="max-w-6xl mx-auto grid lg:grid-cols-2 gap-16 mb-24">
        <div>
          <h2 className="text-3xl font-bold text-blue-800 mb-5">
            Our Story
          </h2>

          <p className="text-gray-700 leading-8 mb-5">
            Since its establishment, Sargam Chemical Industries has focused on
            delivering premium-quality cleaning products that meet the everyday
            needs of Nepali households. Through continuous innovation,
            responsible manufacturing, and customer-focused service, we have
            built a reputation for quality and trust within a short period.
          </p>

          <p className="text-gray-700 leading-8">
            Our modern manufacturing processes and commitment to excellence have
            enabled us to achieve large-scale annual production while
            consistently maintaining product quality and customer satisfaction.
          </p>
        </div>

        <div>
          <h2 className="text-3xl font-bold text-blue-800 mb-5">
            Our Commitment
          </h2>

          <p className="text-gray-700 leading-8 mb-5">
            We are committed to producing high-quality, eco-friendly products
            that earn lasting customer trust. Our soaps, detergents, dishwash
            products, and home care solutions are designed to provide effective
            cleaning while remaining safe for everyday use.
          </p>

          <p className="text-gray-700 leading-8">
            Every product is manufactured using responsibly sourced raw
            materials and modern production standards to ensure consistent
            performance, environmental responsibility, and maximum customer
            satisfaction.
          </p>
        </div>
      </div>

      {/* Mission & Vision */}
      <div className="grid lg:grid-cols-2 gap-12 max-w-6xl mx-auto mb-24">
        <div className="bg-white rounded-2xl shadow-lg p-8">
          <h3 className="text-3xl font-bold text-blue-800 mb-4 flex items-center gap-3">
            <Leaf className="text-green-600" />
            Our Mission
          </h3>

          <p className="text-gray-700 leading-8">
            To manufacture safe, innovative, and environmentally responsible
            cleaning products that improve everyday life while delivering
            exceptional quality, reliability, and customer satisfaction.
          </p>
        </div>

        <div className="bg-white rounded-2xl shadow-lg p-8">
          <h3 className="text-3xl font-bold text-blue-800 mb-4 flex items-center gap-3">
            <Sparkles className="text-yellow-500" />
            Our Vision
          </h3>

          <p className="text-gray-700 leading-8">
            To become Nepal's most trusted chemical manufacturing company by
            continuously innovating and providing sustainable cleaning
            solutions for homes and industries.
          </p>
        </div>
      </div>

      {/* Why Choose Us */}
      <div className="text-center mb-20">
        <h2 className="text-4xl font-bold text-blue-900 mb-10">
          Why Choose Sargam
        </h2>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {[
            {
              icon: <ShieldCheck className="text-blue-600" />,
              title: "High Quality Products",
            },
            {
              icon: <Leaf className="text-green-600" />,
              title: "Eco-Friendly Manufacturing",
            },
            {
              icon: <Sparkles className="text-yellow-500" />,
              title: "Innovative Formulations",
            },
            {
              icon: <Users className="text-green-600" />,
              title: "Customer Satisfaction",
            },
            {
              icon: <Globe className="text-blue-500" />,
              title: "Available Across Nepal",
            },
            {
              icon: <Star className="text-orange-500" />,
              title: "Trusted Nepali Brand",
            },
          ].map((item, index) => (
            <div
              key={index}
              className="bg-white rounded-xl shadow-lg p-6 hover:shadow-xl transition"
            >
              <div className="flex items-center gap-4">
                <div>{item.icon}</div>
                <h3 className="text-lg font-semibold text-gray-800">
                  {item.title}
                </h3>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Closing */}
      <div className="max-w-4xl mx-auto text-center">
        <p className="text-lg text-gray-700 leading-8">
          At Sargam Chemical Industries, our dedication to innovation,
          sustainability, and customer satisfaction drives every product we
          manufacture. We continue to grow with one goal in mind—to provide
          reliable cleaning solutions that every Nepali household can trust.
        </p>

      <Link
  href="/"
  className="mt-10 inline-block bg-blue-800 hover:bg-blue-900 text-white px-10 py-4 rounded-full font-semibold shadow-lg transition duration-300 hover:scale-105"
>
  Sargam — For a Cleaner Nepal
</Link>
      </div>
    </section>
  );
}