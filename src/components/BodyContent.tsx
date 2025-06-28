import Image from "next/image";

export default function BodyContent() {
  const products = [
    {
      name: "Industrial Cleaning Agents",
      image: "/images/washingmachine.jpg",
      description:
        "High-performance cleaning solutions for factories, plants, and heavy industries.",
    },
    {
      name: "Water Treatment Chemicals",
      image: "/images/logo.jpg",
      description:
        "Advanced chemicals to ensure safe, efficient, and eco-friendly water treatment.",
    },
    {
      name: "Textile Processing Chemicals",
      image: "/images/logo.jpg",
      description:
        "Innovative solutions for fabric treatment, dyeing, and finishing processes.",
    },
  ];

  return (
    <section className="p-8 max-w-7xl mx-auto">
      <div className="sm:flex sm:h-auto sm:w-full mb-[50px]">
        <div className="text-blue-800 w-full sm:w-1/2 sm:pr-8">
          <h2 className="text-4xl font-bold text-blue-900 mb-4">
            Driving Innovation in the Chemical Industry
          </h2>
          <p className="text-gray-700 mb-4 md:text-3xl">
            At Sargam Chemicals, we develop reliable and sustainable chemical
            solutions to empower industries — from cleaning and sanitation to
            water treatment and textile processing.
          </p>
          <div className="flex gap-4 mt-6">
            <button className="bg-blue-800 text-white px-6 py-2 rounded-full shadow-md hover:bg-blue-900 transition">
              Get Started
            </button>
            <button className="border border-blue-800 text-blue-800 px-6 py-2 rounded-full hover:bg-blue-50 transition">
              Learn More
            </button>
          </div>
        </div>

       <div className="w-full sm:w-[350px] md:w-[300px] lg:w-[400px] mx-auto">
  <Image
    src="/images/products.png"
    alt="products image"
    width={400}
    height={250}
    className="rounded-2xl w-full h-auto object-contain"
  />
</div>

      </div>

      <div className="grid gap-6 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 mt-[25px]">
        {products.map((product, index) => (
  <div
    key={index}
    className="relative max-w-sm bg-gradient-to-br from-blue-50 via-white to-blue-100 border border-blue-200 rounded-xl overflow-hidden shadow-md hover:shadow-2xl transform transition duration-300 hover:-translate-y-2 hover:scale-[1.03]"
  >
    <div className="overflow-hidden">
      <Image
        className="object-cover rounded-t-xl hover:scale-110 transition duration-500"
        src={product.image}
        alt={product.name}
        width={500}
        height={300}
        layout="responsive"
      />
    </div>
    <div className="p-5">
      <h5 className="mb-2 text-xl font-bold text-blue-900 tracking-wide uppercase">
        {product.name}
      </h5>
      <p className="mb-4 text-sm text-gray-700 leading-relaxed">
        {product.description}
      </p>
      <a
        href="#"
        className="inline-flex items-center px-4 py-2 text-sm font-medium text-white bg-blue-700 rounded-full shadow hover:bg-blue-800 transition-all duration-300"
      >
        Read More
        <svg
          className="w-4 h-4 ml-2"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M17 8l4 4m0 0l-4 4m4-4H3"
          />
        </svg>
      </a>
    </div>

    {/* Decorative glow border */}
    <div className="absolute top-0 left-0 w-full h-full rounded-xl border-2 border-transparent hover:border-blue-400 transition-all duration-300 pointer-events-none" />
  </div>
))}

      </div>
    </section>
  );
}
