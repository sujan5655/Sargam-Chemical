// src/app/machinery/[slug]/page.tsx
import Image from "next/image";

const otherproducts = [
  {
    name: "Machine1",
    slug: "machine1",
    image: "/images/otherproduct/machine1.jpg",
    description: "Innovative solutions for fabric treatment, dyeing, and finishing processes.",
  },
  {
    name: "Machine2",
    slug: "machine2",
    image: "/images/otherproduct/machine2.jpg",
    description: "Innovative solutions for fabric treatment, dyeing, and finishing processes.",
  },
  {
    name: "Machine3",
    slug: "machine3",
    image: "/images/otherproduct/machine3.jpg",
    description: "Innovative solutions for fabric treatment, dyeing, and finishing processes.",
  },
];

export default function MachineryPage({ params }) {
  const { slug } = params;
  const selectedProduct = otherproducts.find((product) => product.slug === slug);

  if (!selectedProduct) {
    return (
      <div className="p-10 text-center text-red-600 text-xl">
        Machinery not found.
      </div>
    );
  }

  return (
    <div className="mt-[50px] container mx-auto px-4 py-12 max-w-5xl">
      <h1 className="text-4xl font-bold text-blue-900 mb-10 text-center">
        {selectedProduct.name}
      </h1>

      <div className="flex flex-col md:flex-row items-center gap-8">
        <div className="flex-1 flex justify-center">
          <Image
            src={selectedProduct.image}
            alt={selectedProduct.name}
            width={400}
            height={300}
            className="rounded-xl object-contain w-full max-w-xs sm:max-w-sm md:max-w-md"
          />
        </div>
        <div className="flex-1">
          <p className="text-lg text-gray-700 leading-relaxed text-justify">
            {selectedProduct.description}
          </p>
        </div>
      </div>
    </div>
  );
}
