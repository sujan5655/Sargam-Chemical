"use client";
import { useState } from "react";

export default function FrequentlyAskedQuestion() {
  const faqs = [
    {
      question: "What is Sargam Chemical?",
      answer:
        "Sargam Chemical is a chemical manufacturing company based in Biratnagar, Nepal, producing industrial and household chemical products.",
    },
    {
      question: "What products does Sargam Chemical produce?",
      answer:
        "We produce detergents, disinfectants, sanitizers, toilet cleaners, floor cleaners, and various industrial-grade chemicals.",
    },
    {
      question: "Where is Sargam Chemical located?",
      answer: "We are located in Biratnagar-5, Morang, Nepal.",
    },
    {
      question: "Do you provide custom chemical solutions?",
      answer:
        "Yes, we provide customized formulations and chemical solutions tailored to specific industry requirements.",
    },
    {
      question: "Is delivery available across Nepal?",
      answer:
        "Yes, we offer delivery services across Nepal depending on the order size and location.",
    },
    {
      question: "Are your products eco-friendly?",
      answer:
        "We are committed to sustainability and use environmentally friendly practices and materials where possible.",
    },
  ];

  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="max-w-4xl mx-auto p-8">
      <h1 className="text-3xl font-bold text-center text-blue-900 mb-10">
        Frequently Asked Questions
      </h1>
      <div className="space-y-4">
        {faqs.map((faq, index) => (
          <div
            key={index}
            className="border border-gray-200 rounded-lg overflow-hidden"
          >
            <button
              className="w-full text-left px-6 py-4 bg-blue-50 hover:bg-blue-100 transition flex justify-between items-center"
              onClick={() => toggleFAQ(index)}
            >
              <span className="font-medium text-blue-900">{faq.question}</span>
              <span
                className={`text-xl text-blue-700 transform transition-transform duration-300 ${
                  openIndex === index ? "rotate-180" : ""
                }`}
              >
                ▼
              </span>
            </button>
            {openIndex === index && (
              <div className="px-6 py-4 bg-white text-gray-700">
                {faq.answer}
              </div>
            )}
          </div>
        ))}
      </div>
    </section>
  );
}
