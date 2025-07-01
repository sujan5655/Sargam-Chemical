"use client";

import Image from "next/image";
import Link from "next/link";

export default function BodyContent() {
  const products = [
    {
      name: "Laundry Soap",
      slug: "laundry-soap",
      image: "/images/laundrysoap2.jpg",
      description:
        "High-performance cleaning solutions for factories, plants, and heavy industries.",
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

  const otherproducts = [
    {
      name: "Machine1",
      slug: "machine1",
      image: "/images/otherproduct/machine1.jpg",
      description:
        "Innovative solutions for fabric treatment, dyeing, and finishing processes.",
    },
    {
      name: "Machine2",
      slug: "machine2",
      image: "/images/otherproduct/machine2.jpg",
      description:
        "Innovative solutions for fabric treatment, dyeing, and finishing processes.",
    },
    {
      name: "Machine3",
      slug: "machine3",
      image: "/images/otherproduct/machine3.jpg",
      description:
        "Innovative solutions for fabric treatment, dyeing, and finishing processes.",
    },
  ];

  return (
    <section className="w-full">
      {/* Hero Section (Full WiEFdth) */}
      <div className="bg-[#578FCA] text-white p-10 flex flex-col-reverse md:flex-row items-center justify-between gap-10 mb-0">
        <div className="flex-1 max-w-xl">
          <div className="lg:ml-[50px]">
              <h1 className="text-4xl md:text-5xl font-bold mb-4">
            Driving Innovation in the Chemical Industry
          </h1>
          <p className="text-lg mb-6 text-justify">
            Sargam Chemical Industries Pvt Ltd was founded in 2025 and is headquartered in Duhabi Sunsari, Nepal eastern region. 
            It is a top soap and detergent manufacturer in Nepal. Our products are offered in more than 77 districts in Nepal. 
            The company has been producing environmentally friendly and high-quality items, which has helped us earn the trust 
            and loyalty of customers.
          </p>
         
        
          <Link href="/products">
            <button className="px-6 py-3 bg-white text-blue-800 font-semibold rounded-full shadow-md hover:bg-gray-100 transition">
              Shop All Products
            </button>
          </Link>
           </div>
        </div>
        <div className="flex-1 text-center">
          <Image
            src="/images/product.png"
            alt="Smart Device Image"
            width={400}
            height={400}
            className="object-contain mx-auto"
          />
        </div>
      </div>

      {/* Content with Padding */}
      <div className="px-4 sm:px-6 md:px-8 lg:px-10 xl:px-12 2xl:px-16">
        {/* Products Section */}
        <h2 className="text-3xl font-bold text-blue-900 mt-16 mb-6">Products</h2>
        <div className="grid gap-6 grid-cols-1 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-4">
          {products.map((product, index) => (
            <Link
              href={`/products/${product.slug}`}
              key={index}
              className="group bg-white rounded-xl overflow-hidden shadow-md hover:shadow-lg border border-transparent hover:border-blue-600 transition-all"
            >
              <Image
                className="object-cover w-full h-48 rounded-t-xl transition-transform duration-500 group-hover:scale-110"
                src={product.image}
                alt={product.name}
                width={500}
                height={300}
              />
              <div className="p-5">
                <h5 className="mb-2 text-xl font-bold text-blue-900 uppercase">
                  {product.name}
                </h5>
                <p className="text-sm text-gray-700">{product.description}</p>
              </div>
            </Link>
          ))}
        </div>

        <div className="mt-10 text-right">
          <Link
            href="/products"
            className=" inline-block px-6 py-3 text-white bg-orange-600 font-semibold rounded-full shadow-md hover:bg-orange-700 hover:scale-105 transition"
          >
            View More →
          </Link>
        </div>

        {/* Machinery Section */}
        <h2 className="text-3xl font-bold text-blue-900 mt-16 mb-6">Machinery</h2>
        <div className="grid gap-6 grid-cols-1 sm:grid-cols-2 lg:grid-cols-4">
          {otherproducts.map((otherproduct, index) => (
            <div
              key={index}
              className="group bg-white rounded-xl overflow-hidden shadow-md hover:shadow-lg border border-transparent hover:border-blue-600 transition-all"
            >
              <Link href={`/machinery/${otherproduct.slug}`}>
                <Image
                  className="object-contain rounded-t-xl h-48 w-full transition-transform duration-500 group-hover:scale-110"
                  src={otherproduct.image}
                  alt={otherproduct.name}
                  width={300}
                  height={200}
                />
              </Link>
              <div className="p-5">
                <h5 className="mb-2 text-xl font-bold text-blue-900 uppercase">
                  {otherproduct.name}
                </h5>
                <p className="text-sm text-gray-700">{otherproduct.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
