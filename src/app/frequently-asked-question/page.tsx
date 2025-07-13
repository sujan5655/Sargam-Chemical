"use client";
import { useState } from "react";
import Link from "next/link";
const faqData = [
  {
    category: "Partnership & Dealership",
    questions: [
      { q: "How can I become a dealer for Sargam Chemical?", a: "You can become a dealer by contacting our sales team and fulfilling our partnership requirements." },
      { q: "What support do you provide to dealers?", a: "We provide marketing support, training, and exclusive dealer benefits." },
      { q: "What are the requirements to become a dealer?", a: "Requirements include business registration, financial stability, and market reach." },
      { q: "Do you provide training for dealer staff?", a: "Yes, we offer regular training sessions to dealer teams." }
    ],
  },
];

export default function FAQSection() {
  const [openIndex, setOpenIndex] = useState<string | null>(null);

  const toggle = (idx: string) => {
    setOpenIndex(openIndex === idx ? null : idx);
  };

  return (
    <section className="w-full px-4 py-16 bg-[#f8f9fb] mt-8">
      <div className="max-w-4xl mx-auto">
        {/* FAQ */}
        {faqData.map((section, sectionIdx) => (
          <div key={sectionIdx}>
            <h2 className="text-2xl font-bold mb-6">{section.category}</h2>
            <div className="space-y-4">
              {section.questions.map((item, idx) => {
                const index = `${sectionIdx}-${idx}`;
                const isOpen = openIndex === index;
                return (
                  <div key={index} className="border rounded-lg">
                    <button
                      className="flex justify-between items-center w-full p-4 text-left text-gray-800 font-medium"
                      onClick={() => toggle(index)}
                    >
                      {item.q}
                      <span
                        className={`transform transition-transform text-xl ${
                          isOpen ? "rotate-180" : "rotate-0"
                        }`}
                      >
                        ▼
                      </span>
                    </button>
                    {isOpen && (
                      <div className="p-4 pt-0 text-sm text-gray-700">
                        {item.a}
                      </div>
                    )}
                  </div>
                );
              })}
            </div>
          </div>
        ))}
      </div>

      {/* Still Have Questions */}
      <div className="max-w-6xl mx-auto mt-20 text-center">
        <h3 className="text-2xl font-bold mb-4">Still Have Questions?</h3>
        <p className="text-gray-600 mb-10">
          Our expert team is ready to help you with any questions or concerns you may have.
          Choose the most convenient way to reach us.
        </p>
        <div className="grid md:grid-cols-3 gap-6 mb-8">
          <div className="bg-white rounded-xl shadow p-6">
            <p className="font-semibold mb-2">Live Chat</p>
            <p className="text-sm text-gray-600">Get instant answers from our support team</p>
          </div>
          <div className="bg-white rounded-xl shadow p-6">
            <p className="font-semibold mb-2">Call Us</p>
            <p className="text-sm text-gray-600">9842185602</p>
            <p className="text-sm text-gray-600">9852054741</p>

          </div>
          <div className="bg-white rounded-xl shadow p-6">
            <p className="font-semibold mb-2">Email Us</p>
            <p className="text-sm text-gray-600">sargamchemical@gmail.com</p>
          </div>
        </div>
        <div className="flex justify-center gap-4">
          <Link href="/contact"><button className="px-6 py-2 rounded-full bg-blue-800 text-white font-medium">Contact Support</button></Link>
          
         
        </div>
      </div>
    </section>
  );
}
