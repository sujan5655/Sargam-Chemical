

export default function Contact() {
  return (
    <section className="p-8 max-w-7xl mx-auto">
      <h2 className="text-3xl font-bold text-center text-blue-900 mb-8">
        Get in Touch
      </h2>

      <div className="grid md:grid-cols-2 gap-12">
        {/* Left - Contact Form */}
        <div className="bg-white shadow-lg rounded-lg p-6">
          <h3 className="text-xl font-bold mb-2">Send us a Message</h3>
          <p className="text-gray-600 mb-6">
            Wel respond to your inquiry promptly
          </p>

          <form className="space-y-4">
            <div className="flex gap-4">
              <div className="flex-1">
                <label className="block text-sm font-medium mb-1">
                  Full Name *
                </label>
                <input
                  type="text"
                  placeholder="Your full name"
                  className="border p-2 w-full rounded"
                />
              </div>
              <div className="flex-1">
                <label className="block text-sm font-medium mb-1">
                  Phone Number
                </label>
                <input
                  type="text"
                  placeholder="+977-XX-XXXXXXX"
                  className="border p-2 w-full rounded"
                />
              </div>
            </div>
            <div>
              <label className="block text-sm font-medium mb-1">
                Email Address *
              </label>
              <input
                type="email"
                placeholder="your.email@example.com"
                className="border p-2 w-full rounded"
              />
            </div>
            <div>
              <label className="block text-sm font-medium mb-1">
                Message *
              </label>
              <textarea
                placeholder="Tell us about your requirements, questions, or how we can help you..."
                rows={4}
                className="border p-2 w-full rounded"
              ></textarea>
            </div>
            <button className="bg-blue-700 text-white w-full py-2 rounded hover:bg-blue-800 transition flex items-center justify-center gap-2">
              <span>✉️</span> Send Message
            </button>
          </form>
        </div>

        {/* Right - Map & Contact Info */}
   <div className="bg-white shadow-lg rounded-lg overflow-hidden">
  <h3 className="text-lg font-bold p-4 border-b">Find Us Here</h3>
  
  <div className="w-full h-64 md:h-80">
    <iframe
      src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d3531.938778220182!2d87.2731922149812!3d26.45313498331602!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39ef755afbf71dcf%3A0xf78e1f577416132a!2sISMT%20College%20Biratnagar!5e0!3m2!1sen!2snp!4v1719401761481!5m2!1sen!2snp&z=13"
      allowFullScreen
      loading="lazy"
      referrerPolicy="no-referrer-when-downgrade"
      className="w-full h-full border-0 rounded-b-lg"
    ></iframe>
  </div>

  <div className="bg-gradient-to-r from-blue-700 to-green-500 text-white rounded-lg p-6 space-y-4 shadow-lg">
    <h3 className="text-lg font-bold">Quick Contact</h3>
    <p>📞 +977-21-123456</p>
    <p>✉️ info@sargamchemical.com</p>
    <p>📍 Biratnagar-5, Morang, Nepal</p>
    <hr className="border-white" />
    <p>
      <span className="font-semibold">Emergency Contact:</span> For urgent chemical supply needs or emergency situations, call our 24/7 hotline:
      <br />
      +977-21-999999
    </p>
  </div>
</div>
</div>

    </section>
  );
}
