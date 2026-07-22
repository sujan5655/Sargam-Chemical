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
      image: "/images/laundrysoap6.jpg",
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
   {/* Hero Section */}
<section className="w-full bg-amber-50">
  {/* Hero Section */}
  
  

  <div
    className="
      w-full
      max-w-[98%]
      sm:max-w-[92%]
      md:max-w-[90%]
      lg:max-w-[95%]
      xl:max-w-[90%]
      mx-auto
    "
  >
    <Image
      src="/images/homepageimage.png"
      alt="Sargam Chemical Industries"
      width={1920}
      height={900}
      priority
      className="w-full h-auto rounded-2xl shadow-lg"
    />
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
