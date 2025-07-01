"use client";
import { useRef } from "react";
import emailjs from "@emailjs/browser";

export default function Contact() {
  const form = useRef<HTMLFormElement>(null);

  const sendEmail = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (!form.current) return;

    emailjs
      .sendForm(
        "service_ci00dzk",
        "template_jh9t4x6",
        form.current,
        "J6A1zUjbmaGL5OLeV"
      )
      .then(
        (result) => {
          alert("Message sent successfully!");
          form.current?.reset();
          console.log(result);
        },
        (error) => {
          alert("Failed to send message. Try again.");
          console.error(error);
        }
      );
  };

  return (
    <section className="w-full px-4 sm:px-6 md:px-12 lg:px-20 xl:px-32 py-16 bg-gradient-to-br from-white to-blue-50">
      <h2 className="text-4xl font-bold text-center text-blue-900 mb-14">
        Get in Touch
      </h2>

      <div className="grid gap-10 lg:grid-cols-2 items-start">
        {/* Left - Form */}
        <div className="bg-white rounded-3xl shadow-2xl p-8 md:p-10 border border-blue-100">
          <h3 className="text-2xl font-bold mb-3 text-blue-800">
            Send us a Message
          </h3>
          <p className="text-gray-600 mb-6">
            We’d love to hear from you. Please fill out the form below.
          </p>

          <form ref={form} onSubmit={sendEmail} className="space-y-5">
            <div className="flex flex-col sm:flex-row gap-4">
              <div className="flex-1">
                <label className="text-sm font-medium text-gray-700">
                  Full Name *
                </label>
                <input
                  type="text"
                  name="from_name"
                  required
                  placeholder="Your full name"
                  className="border border-gray-300 p-3 w-full rounded-xl focus:ring-2 focus:ring-blue-500 outline-none"
                />
              </div>
              <div className="flex-1">
                <label className="text-sm font-medium text-gray-700">
                  Phone Number
                </label>
                <input
                  type="text"
                  name="phone"
                  placeholder="+977-XX-XXXXXXX"
                  className="border border-gray-300 p-3 w-full rounded-xl focus:ring-2 focus:ring-blue-500 outline-none"
                />
              </div>
            </div>

            <div>
              <label className="text-sm font-medium text-gray-700">
                Email Address *
              </label>
              <input
                type="email"
                name="from_email"
                required
                placeholder="your.email@example.com"
                className="border border-gray-300 p-3 w-full rounded-xl focus:ring-2 focus:ring-blue-500 outline-none"
              />
            </div>

            <div>
              <label className="text-sm font-medium text-gray-700">
                Message *
              </label>
              <textarea
                name="message"
                required
                rows={5}
                placeholder="Tell us how we can help you..."
                className="border border-gray-300 p-3 w-full rounded-xl focus:ring-2 focus:ring-blue-500 outline-none resize-none"
              ></textarea>
            </div>

            <button
              type="submit"
              className="w-full bg-gradient-to-r from-blue-700 to-blue-900 text-white py-3 rounded-xl hover:opacity-90 transition font-semibold"
            >
              ✉️ Send Message
            </button>
          </form>
        </div>

        {/* Right - Map */}
        <div className="overflow-hidden rounded-3xl shadow-2xl border border-blue-100 h-full">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d3531.938778220182!2d87.2731922149812!3d26.45313498331602!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39ef755afbf71dcf%3A0xf78e1f577416132a!2sISMT%20College%20Biratnagar!5e0!3m2!1sen!2snp!4v1719401761481!5m2!1sen!2snp"
            allowFullScreen
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            className="w-full h-[450px] border-0 rounded-2xl"
          ></iframe>
        </div>
      </div>
    </section>
  );
}
