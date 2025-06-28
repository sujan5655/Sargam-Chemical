export default function About() {
  return (
    <section className="p-8 max-w-7xl mx-auto">
      <div className="text-center mb-12">
        <h2 className="text-4xl font-bold text-blue-900 mb-4">
          About Sargam Chemicals
        </h2>
        <p className="text-gray-600 max-w-2xl mx-auto">
          We are committed to providing high-quality chemical products that
          power industries, improve daily life, and protect the environment.
          With a legacy of trust and innovation, Sargam Chemicals has become a
          reliable name in the chemical manufacturing sector.
        </p>
      </div>

      {/* Grid Section */}
      <div className="grid md:grid-cols-2 gap-12 items-center">
        {/* Left - Image or Illustration */}
        <div className="w-full h-64 bg-blue-100 rounded-2xl flex items-center justify-center">
          {/* Replace with actual image */}
          <span className="text-2xl text-blue-700 font-semibold">
            Company Image
          </span>
        </div>

        {/* Right - Text Content */}
        <div>
          <h3 className="text-2xl font-bold text-blue-800 mb-4">Our Mission</h3>
          <p className="text-gray-700 mb-4">
            To deliver innovative, eco-friendly, and reliable chemical solutions
            that meet the needs of our customers while upholding the highest
            standards of safety and sustainability.
          </p>

          <h3 className="text-2xl font-bold text-blue-800 mb-4 mt-6">
            Why Choose Us
          </h3>
          <ul className="list-disc list-inside text-gray-700 space-y-2">
            <li>Certified and high-quality products</li>
            <li>Dedicated customer support</li>
            <li>Continuous innovation and research</li>
            <li>Environmentally conscious manufacturing</li>
            <li>Trusted by dealers and industries across the region</li>
          </ul>
        </div>
      </div>
    </section>
  );
}
