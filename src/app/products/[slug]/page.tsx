import Image from "next/image";
import Link from "next/link";
import type { Metadata } from "next";

const products = [
  {
    name: "Detergent",
    slug: "detergent",
    image: "/images/detergent3.jpg",
    description:
      "Innovative solutions for fabric treatment, dyeing, and finishing processes.",
  },
  {
      name: "washing machine powder",
      slug: "washing",
      image: "/images/washingpowder.jpg",
      description:
        "Innovative solutions for fabric treatment, dyeing, and finishing processes.",
    },
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
  }
  
  
];

interface PageProps {
  params: Promise<{ slug: string }>;
}

export async function generateMetadata({
  params,
}: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const product = products.find((p) => p.slug === slug);

  return {
    title: product ? product.name : "Product Not Found",
    description: product
      ? product.description
      : "No product found for this slug.",
  };
}

export default async function ProductPage({ params }: PageProps) {
  const { slug } = await params;
  const product = products.find((p) => p.slug === slug);

  if (!product) {
    return (
      <div className="p-10 text-center text-red-600 text-xl">
        Product not found.
      </div>
    );
  }

  return (
    <div className="mt-[60px] px-4 sm:px-6 md:px-8 lg:px-12 py-8 max-w-6xl mx-auto">
      {/* Back Button */}
      <Link
        href="/"
        className="text-blue-700 hover:text-blue-900 flex items-center gap-2 mb-8 transition duration-200"
      >
        <span className="text-2xl">←</span>
        <span className="text-lg font-medium">Back to Home</span>
      </Link>

      {/* Product Name */}
      <h1 className="text-3xl sm:text-4xl font-bold text-blue-900 text-center mb-8">
        {product.name}
      </h1>

      {/* Image and Description Layout */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
        {/* Product Image */}
        <div className="flex justify-center">
          <Image
            src={product.image}
            alt={product.name}
            width={450}
            height={350}
            className="rounded-2xl object-cover shadow-md max-w-full"
          />
        </div>

        {/* Product Description */}
        <div className="text-gray-800 text-justify text-base sm:text-lg leading-relaxed">
          <p>{product.description}</p>
        </div>
      </div>
    </div>
  );
}
