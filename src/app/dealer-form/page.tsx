"use client";

import { useState } from "react";

export default function DealerForm() {
  const [status, setStatus] = useState<"idle" | "success" | "error">("idle");

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setStatus("success");
    setTimeout(() => setStatus("idle"), 3000);
  };

  return (
    <section className="mt-16 bg-gradient-to-br from-blue-100 via-white to-blue-50 rounded-xl p-10 shadow-lg">
      <div className="text-center mb-10">
        <h2 className="text-4xl font-extrabold text-blue-900 mb-4">
          Become Our Partner
        </h2>
        <p className="text-lg text-gray-700 max-w-3xl mx-auto">
          Join hands with <strong>Sargam Chemicals</strong> and grow your business with us.
          As our partner, you get exclusive access to our industrial chemical solutions,
          competitive pricing, and dedicated support from our team.
        </p>
      </div>

      <div className="flex flex-col lg:flex-row lg:items-start justify-center lg:space-x-8 space-y-6 lg:space-y-0">
        {/* Left Side: Benefits */}
        <div className="w-full lg:w-1/2 space-y-5">
          <div className="flex items-start gap-3">
            <span className="text-blue-700 bg-blue-200 p-2 rounded-full">💼</span>
            <div>
              <h4 className="font-semibold text-blue-800">Business Growth</h4>
              <p className="text-gray-600 text-sm">
                Leverage our brand and products to expand your market reach.
              </p>
            </div>
          </div>

          <div className="flex items-start gap-3">
            <span className="text-blue-700 bg-blue-200 p-2 rounded-full">📦</span>
            <div>
              <h4 className="font-semibold text-blue-800">Trusted Products</h4>
              <p className="text-gray-600 text-sm">
                Offer high-quality cleaning, textile, and water treatment chemicals.
              </p>
            </div>
          </div>

          <div className="flex items-start gap-3">
            <span className="text-blue-700 bg-blue-200 p-2 rounded-full">🤝</span>
            <div>
              <h4 className="font-semibold text-blue-800">Partner Support</h4>
              <p className="text-gray-600 text-sm">
                Dedicated onboarding and operational support to ensure your success.
              </p>
            </div>
          </div>
        </div>

       
        <div className="w-full lg:max-w-md bg-white rounded-2xl shadow-md p-8">
          <h3 className="text-xl font-bold text-blue-900 mb-4 text-center">
            Interested in Partnering?
          </h3>
          <form onSubmit={handleSubmit} className="space-y-4">
            <div>
              <label className="block text-sm font-medium text-gray-700">Name</label>
              <input
                required
                type="text"
                placeholder="Your Full Name"
                className="w-full px-4 py-2 mt-1 border rounded-md shadow-sm focus:ring-2 focus:ring-blue-300 focus:outline-none"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700">Email</label>
              <input
                required
                type="email"
                placeholder="you@example.com"
                className="w-full px-4 py-2 mt-1 border rounded-md shadow-sm focus:ring-2 focus:ring-blue-300 focus:outline-none"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700">Message</label>
              <textarea
                required
                rows={4}
                placeholder="Tell us a bit about your business..."
                className="w-full px-4 py-2 mt-1 border rounded-md shadow-sm resize-none focus:ring-2 focus:ring-blue-300 focus:outline-none"
              />
            </div>

            <button
              type="submit"
              className="w-full bg-blue-700 text-white font-medium py-2 rounded-md hover:bg-blue-800 transition-all duration-300"
            >
              Submit
            </button>

            {status === "success" && (
              <p className="text-green-600 text-sm mt-2 text-center">
                ✅ Thank you! We will contact you soon.
              </p>
            )}
          </form>
        </div>
      </div>
    </section>
  );
}
