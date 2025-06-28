"use client";
import { useState } from "react";
import Image from "next/image";

export default function Products() {
  const allProducts = [
    {
      name: "Utensil Soap",
      category: "Utensil Soap",
      image: "/images/detergent.jpg",
      description: "Removes tough grease and stains, leaves utensils shining.",
    },
    {
      name: "Utensil Soap",
      category: "Utensil Soap",
      image: "/images/dishwash.jpg",
      description: "Removes tough grease and stains, leaves utensils shining.",
    },
      {
      name: "Laundry Soap",
      category: "Laundry Soap",
      image: "/images/laundrysoap1.jpg",
      description: "Removes tough grease and stains, leaves utensils shining.",
    },
        {
      name: "Home care product",
      category: "Home Care",
      image: "/images/homecare.jpg",
      description: "Removes tough grease and stains, leaves utensils shining.",
    },
     {
      name: "Laundry Product",
      category: "Laundry Soap",
      image: "/images/laundrysoap1.jpg",
      description: "Removes tough grease and stains, leaves utensils shining.",
    },
      {
      name: "Laundry Product",
      category: "Laundry Soap",
      image: "/images/laundrysoap2.jpg",
      description: "Removes tough grease and stains, leaves utensils shining.",
    },
      {
      name: "Laundry Product",
      category: "Laundry Soap",
      image: "/images/laundrysoap3.jpg",
      description: "Removes tough grease and stains, leaves utensils shining.",
    },
      {
      name: "Laundry Product",
      category: "Laundry Soap",
      image: "/images/laundrysoap4.jpg",
      description: "Removes tough grease and stains, leaves utensils shining.",
    },

    {
      name: "Toilet Soap",
      category: "Toilet Soap",
      image: "/images/detergent1.jpg",
      description: "Gentle on skin with long-lasting fragrance.",
    },
    {
      name: "Cloth Soap",
      category: "Cloth Soap",
      image: "/images/cloth.jpg",
      description: "Strong on stains, gentle on fabrics.",
    },
    {
      name: "Multipurpose Cleaner",
      category: "Other",
      image: "/images/cleaner.jpg",
      description: "Effective cleaner for multiple household uses.",
    },
  ];

  const [selectedCategory, setSelectedCategory] = useState("All");

  const filteredProducts =
    selectedCategory === "All"
      ? allProducts
      : allProducts.filter((p) => p.category === selectedCategory);

  return (
    <section className="p-8 max-w-7xl mx-auto">
      <h2 className="text-3xl font-bold text-center text-blue-900 mb-8">
        Explore Our Products
      </h2>

      {/* Filter Buttons */}
      <div className="flex flex-wrap justify-center gap-4 mb-10">
        {["All", "Utensil Soap","Home Care", "Laundry Soap","Toilet Soap", "Cloth Soap", "Other"].map(
          (category) => (
            <button
              key={category}
              onClick={() => setSelectedCategory(category)}
              className={`px-4 py-2 rounded-full border transition ${
                selectedCategory === category
                  ? "bg-blue-800 text-white"
                  : "border-blue-800 text-blue-800 hover:bg-blue-50"
              }`}
            >
              {category}
            </button>
          )
        )}
      </div>

      {/* Product Grid */}
      <div className="grid gap-8 grid-cols-1 sm:grid-cols-2 md:grid-cols-3">
        {filteredProducts.map((product, index) => (
          <div
            key={index}
            className="bg-white rounded-2xl shadow-md hover:shadow-xl transition overflow-hidden flex flex-col"
          >
            <div className="relative h-48 w-full">
              <Image
                src={product.image}
                alt={product.name}
                fill
                className="object-cover"
              />
            </div>
            <div className="p-4 flex flex-col flex-1">
              <h3 className="text-lg font-bold text-blue-800 mb-2">
                {product.name}
              </h3>
              <p className="text-gray-600 flex-1">{product.description}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
