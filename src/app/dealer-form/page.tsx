"use client";

import { useState } from "react";
import emailjs from "@emailjs/browser";

export default function DealerForm() {
  const [status, setStatus] = useState<"idle" | "success" | "error">("idle");
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setStatus("idle");

    emailjs
      .send(
        "service_ci00dzk",
        "template_jh9t4x6",
        {
          from_name: formData.name,
          from_email: formData.email,
          phone: formData.phone,
          message: formData.message,
        },
        "J6A1zUjbmaGL5OLeV"
      )
      .then(
        () => {
          setStatus("success");
          setFormData({ name: "", email: "", phone: "", message: "" });
          setTimeout(() => setStatus("idle"), 3000);
        },
        () => {
          setStatus("error");
        }
      );
  };

  return (
    <section className="mt-20 px-4 py-16 bg-gradient-to-br from-blue-50 via-white to-blue-100 rounded-xl shadow-xl">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-14">
          <h2 className="text-4xl xl:text-5xl font-extrabold text-blue-900 mb-4">
            Become Our Partner
          </h2>
          <p className="text-lg xl:text-xl text-gray-700 max-w-4xl mx-auto">
            Join hands with <strong>Sargam Chemicals</strong> and grow your business with us.
            As our partner, you get exclusive access to our industrial chemical solutions,
            competitive pricing, and dedicated support from our team.
          </p>
        </div>

        <div className="flex flex-col lg:flex-row lg:items-start justify-center lg:gap-12 xl:gap-20">
          {/* Benefits Section */}
          <div className="w-full lg:w-1/2 space-y-8">
            {[
              {
                icon: "💼",
                title: "Business Growth",
                desc: "Leverage our brand and products to expand your market reach.",
              },
              {
                icon: "📦",
                title: "Trusted Products",
                desc: "Offer high-quality cleaning, textile, and water treatment chemicals.",
              },
              {
                icon: "🤝",
                title: "Partner Support",
                desc: "Dedicated onboarding and operational support to ensure your success.",
              },
            ].map((item, idx) => (
              <div key={idx} className="flex items-start gap-4">
                <span className="text-3xl xl:text-4xl text-orange-500 bg-orange-100 p-3 rounded-full shadow-sm">
                  {item.icon}
                </span>
                <div>
                  <h4 className="text-lg xl:text-xl font-semibold text-blue-800">{item.title}</h4>
                  <p className="text-gray-600 text-sm xl:text-base">{item.desc}</p>
                </div>
              </div>
            ))}
          </div>

          {/* Form Section */}
          <div className="w-full lg:max-w-md bg-white rounded-3xl shadow-xl p-8 xl:p-10 mt-10 lg:mt-0">
            <h3 className="text-2xl font-bold text-blue-900 mb-6 text-center">
              Interested in Partnering?
            </h3>

            {/* Success & Error Messages at the Top */}
            {status === "success" && (
              <div className="bg-green-100 text-green-800 p-3 rounded text-center font-medium mb-4">
                ✅ Thank you! We will contact you soon.
              </div>
            )}
            {status === "error" && (
              <div className="bg-red-100 text-red-800 p-3 rounded text-center font-medium mb-4">
                ❌ Something went wrong. Please try again.
              </div>
            )}

            <form onSubmit={handleSubmit} className="space-y-5">
              <div>
                <label className="block text-sm font-medium text-gray-700">Name</label>
                <input
                  required
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  type="text"
                  placeholder="Your Full Name"
                  className="w-full px-4 py-3 mt-1 border rounded-md shadow-sm focus:ring-2 focus:ring-orange-400 focus:outline-none"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700">Email</label>
                <input
                  required
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  type="email"
                  placeholder="you@example.com"
                  className="w-full px-4 py-3 mt-1 border rounded-md shadow-sm focus:ring-2 focus:ring-orange-400 focus:outline-none"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700">Phone Number</label>
                <input
                  required
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  type="text"
                  placeholder="+977-XX-XXXXXXX"
                  className="w-full px-4 py-3 mt-1 border rounded-md shadow-sm focus:ring-2 focus:ring-orange-400 focus:outline-none"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700">Message</label>
                <textarea
                  required
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  rows={4}
                  placeholder="Tell us a bit about your business..."
                  className="w-full px-4 py-3 mt-1 border rounded-md shadow-sm resize-none focus:ring-2 focus:ring-orange-400 focus:outline-none"
                />
              </div>

              <button
                type="submit"
                className="w-full bg-orange-500 text-white font-semibold py-3 rounded-md hover:bg-orange-600 transition-all duration-300"
              >
                Submit
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
