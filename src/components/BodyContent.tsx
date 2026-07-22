"use client";

import Image from "next/image";
import Link from "next/link";
import React from "react";
import ProductOverlay from "./ProductOverlay";
export default function BodyContent() {
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
      name: "Detergent",
      slug: "detergent",
      image: "/images/detergent6.jpg",
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
      name: "Washing Machine Powder",
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
    {
      name: "detergent",
      slug: "detergent",
      image: "/images/detergent5.jpg",
      description:
        "Innovative solutions for fabric treatment, dyeing, and finishing processes.",
    },
  ];

  const otherproducts = [
    {
      name: "Machine1",
      slug: "machine1",
      image: "/images/otherproduct/machine1.jpg",
      description: " make the work easy and available at best price",
    },
    {
      name: "Machine2",
      slug: "machine2",
      image: "/images/otherproduct/machine2.jpg",
      description: "make the work easy and available at best price",
    },
    {
      name: "Machine3",
      slug: "machine3",
      image: "/images/otherproduct/machine3.jpg",
      description: " make the work easy and available at best price",
    },
  ];

  return (
    <>
    <ProductOverlay/>
    <section className="w-full">
      {/* Hero Section (Full WiEFdth) */}

      <div className="bg-gradient-to-r from-[#E0F2FE] via-[#C7E0F4] to-[#A5C9E8] py-3 px-4 md:px-12">
        <div className="max-w-5xl mx-auto text-center text-gray-800">
          <h1 className="text-4xl md:text-5xl font-bold mb-2 leading-tight text-blue-900">
            Driving Innovation in the <br />
            <span className="text-blue-700">Chemical Industry</span>
          </h1>

          <div className="text-lg leading-relaxed max-w-4xl mx-auto">
            <p>
              Sargam Chemical Industries Pvt Ltd was founded in 2025 and is
              headquartered in Duhabi Sunsari, in Nepal’s eastern region. It is
              a leading manufacturer of soap and detergent, distributing
              products across more than 77 districts.
            </p>

            {/* Show only on medium and up */}
            <p className="hidden md:block mt-4">
              We are committed to producing high-quality, eco-friendly products
              that earn lasting customer trust. Our high-quality products and
              services have made our brand well-known and beloved by all
              Nepalese households. In a short amount of time, the company has
              attained an annual production at large quantity. We are dedicated
              to producing high-quality products with the highest levels of
              customer satisfaction, based on our fundamental principles, and
              using raw materials supplied responsibly.
            </p>
             {
        React.createElement("marquee", { behavior: "scroll", direction: "left", scrollAmount: 5 },
          <span style={{ color: 'green', fontSize: '20px', fontWeight: 'bold' }}>
            All kinds of raw materials and machine equipment available.....
          </span>
        )
      }

          </div>

          <Link href="/products">
            <button className="mt-8 px-8 py-3 bg-blue-800 text-white font-semibold rounded-full shadow-lg hover:bg-blue-900 transition duration-300">
              See All Products
            </button>
          </Link>
        </div>
      </div>

      {/* Content with Padding */}
      <div className="px-4 sm:px-6 md:px-8 lg:px-10 xl:px-12 2xl:px-16 ">
        {/* Products Section */}
        <h2 className="text-3xl font-bold text-blue-900 mt-16 mb-6">
          Products
        </h2>
        <div className="grid gap-6 grid-cols-1 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-4 ">
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
        <h2 className="text-3xl font-bold text-blue-900 mt-16 mb-6">
          Machinery
        </h2>
        <div className="grid gap-6 grid-cols-1 sm:grid-cols-2 lg:grid-cols-4">
          {otherproducts.map((otherproduct, index) => (
            <div
              key={index}
              className="group bg-orange-50 rounded-xl overflow-hidden shadow-md hover:shadow-lg border border-transparent hover:border-blue-600 transition-all"
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
                <p className="text-sm text-gray-700">
                  {otherproduct.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
    </>
  );
}
