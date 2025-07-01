import Image from "next/image";

// Sample product data (same as in BodyContent)
const products = [
  {
    name: "Laundry Soap",
    slug: "laundry-soap",
    image: "/images/laundrysoap2.jpg",
    description:
      "High-performance cleaning solutions for factories, plants, and heavy industries.",
  },
  {
    name: "Detergent",
    slug: "detergent",
    image: "/images/detergent2.jpg",
    description:
      "High-performance cleaning solutions for factories, plants, and heavy industries. Choice of every cleaner.",
  },
  {
    name: "Industrial Cleaning Agents",
    slug: "industrial-cleaning-agents",
    image: "/images/detergent1.jpg",
    description:
      "High-performance cleaning solutions for factories, plants, and heavy industries.",
  },
  {
    name: "Homecare",
    slug: "homecare",
    image: "/images/homecare.jpg",
    description:
      "High-performance cleaning solutions for factories, plants, and heavy industries.",
  },
  {
    name: "Cloth Soap",
    slug: "cloth-soap",
    image: "/images/laundrysoap1.jpg",
    description:
      "Advanced chemicals to ensure safe, efficient, and eco-friendly water treatment.",
  },
  {
    name: "Dishwash",
    slug: "dishwash",
    image: "/images/dishwash.jpg",
    description:
      "Innovative solutions for fabric treatment, dyeing, and finishing processes.",
  },
];

export default function ProductPage({ params }: { params: { slug: string } }) {
  const product = products.find((p) => p.slug === params.slug);

  if (!product) {
    return (
      <div className="p-10 text-center text-red-600 text-xl">
        Product not found.
      </div>
    );
  }

  return (
   <div className="mt-[50px] container mx-auto px-4 py-12 max-w-5xl">
    <h1 className="text-4xl font-bold text-blue-900 mb-10 text-center">
      {product.name}
    </h1>

    <div className="flex flex-col md:flex-row items-center gap-8">
      {/* Image */}
      <div className="flex-1 flex justify-center">
        <Image
          src={product.image}
          alt={product.name}
          width={400}
          height={300}
          className="rounded-xl object-contain w-full max-w-xs sm:max-w-sm md:max-w-md"
        />
      </div>

      {/* Description */}
      <div className="flex-1">
        <p className="text-lg text-gray-700 leading-relaxed text-justify">
          {product.description}
        </p>
      </div>
    </div>
  </div>
  );
}
