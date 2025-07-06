"use client";
import { useState } from "react";
import Image from "next/image";

export default function Products() {
  const allProducts = [
     {
      name: "Detergent Powder",
      category: "Detergent Powder",
      image: "/images/detergent3.jpg",
      description: "Removes tough grease and stains, leaves utensils shining.",
    },
    {
      name: "Laundry Product",
      category: "Laundry Soap",
      image: "/images/laundrysoap5.jpg",
      description: "Brightens and refreshes clothes effectively.",
    },
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
      description:
        "Removes tough grease and stains, keeps fabric fresh and soft.",
    },
    {
      name: "Home care product",
      category: "Home Care",
      image: "/images/homecare.jpg",
      description: "Effective solutions for clean, healthy living spaces.",
    },
    {
      name: "Laundry Product",
      category: "Laundry Soap",
      image: "/images/laundrysoap1.jpg",
      description: "Strong on stains, gentle on fabric.",
    },
    {
      name: "Laundry Product",
      category: "Laundry Soap",
      image: "/images/laundrysoap2.jpg",
      description: "Powerful cleaning with fresh fragrance.",
    },
     {
      name: "Laundry Product",
      category: "Laundry Soap",
      image: "/images/laundrysoap6.jpg",
      description: "Brightens and refreshes clothes effectively.",
    },
    {
      name: "Laundry Product",
      category: "Laundry Soap",
      image: "/images/laundrysoap3.jpg",
      description: "Long-lasting freshness and softness.",
    },
    {
      name: "Laundry Product",
      category: "Laundry Soap",
      image: "/images/laundrysoap4.jpg",
      description: "Brightens and refreshes clothes effectively.",
    },
    {
      name: "Detergent Powder",
      category: "Detergent Powder",
      image: "/images/detergent4.jpg",
      description: "Removes tough grease and stains, leaves utensils shining.",
    },
    {
      name: "Toilet Soap",
      category: "Toilet Soap",
      image: "/images/detergent1.jpg",
      description: "Gentle on skin with long-lasting fragrance.",
    },
     {
      name: "Laundry Product",
      category: "Laundry Soap",
      image: "/images/laundrysoap7.jpg",
      description: "Brightens and refreshes clothes effectively.",
    },
    {
      name: "Cloth Soap",
      category: "Cloth Soap",
      image: "/images/toiletsoap.jpg",
      description: "Strong on stains, gentle on fabrics.",
    },
    {
      name: "Multipurpose Cleaner",
      category: "Machinery",
      image: "/images/otherproduct/machine1.jpg",
      description: "Effective cleaner for multiple household uses.",
    },
    {
      name: "Detergent Powder",
      category: "Detergent Powder",
      image: "/images/detergent5.jpg",
      description: "Removes tough grease and stains, leaves utensils shining.",
    },

        {
      name: "Multipurpose Cleaner",
      category: "Machinery",
      image: "/images/otherproduct/machine2.jpg",
      description: "Effective cleaner for multiple household uses.",
    },    {
      name: "Multipurpose Cleaner",
      category: "Machinery",
      image: "/images/otherproduct/machine3.jpg",
      description: "Effective cleaner for multiple household uses.",
    },    {
      name: "Multipurpose Cleaner",
      category: "Machinery",
      image: "/images/otherproduct/machine4.jpg",
      description: "Effective cleaner for multiple household uses.",
    },
  ];

  const categories = [
    "All",
    "Utensil Soap",
    "Detergent Powder",
    "Home Care",
    "Laundry Soap",
    "Toilet Soap",
    "Cloth Soap",
    "Machinery",
  ];
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [currentPage, setCurrentPage] = useState(1);
  const productsPerPage = 6;

  const filteredProducts =
    selectedCategory === "All"
      ? allProducts
      : allProducts.filter((p) => p.category === selectedCategory);

  const totalPages = Math.ceil(filteredProducts.length / productsPerPage);
  const indexOfLast = currentPage * productsPerPage;
  const indexOfFirst = indexOfLast - productsPerPage;
  const currentProducts = filteredProducts.slice(indexOfFirst, indexOfLast);

  const changePage = (page: number) => {
    if (page >= 1 && page <= totalPages) setCurrentPage(page);
  };

  return (
    <section className="flex max-w-7xl mx-auto mt-[100px] p-4 md:space-x-6">
      <aside className="w-56 bg-white border rounded-xl shadow-sm p-4 hidden md:block">
        <h3 className="text-lg font-semibold text-blue-800 mb-4">Categories</h3>
        <ul className="space-y-2">
          {categories.map((category) => (
            <li key={category}>
              <button
                onClick={() => {
                  setSelectedCategory(category);
                  setCurrentPage(1);
                }}
                className={`w-full text-left px-3 py-2 rounded-md text-sm transition ${
                  selectedCategory === category
                    ? "bg-blue-800 text-white"
                    : "hover:bg-blue-100 text-blue-800"
                }`}
              >
                {category}
              </button>
            </li>
          ))}
        </ul>
      </aside>

      {/* Main content */}
      <div className="flex-1">
        <h2 className="text-2xl font-bold text-blue-900 mb-6">
          Explore Our Products
        </h2>

        <div className="grid gap-6 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3">
          {currentProducts.map((product, index) => (
            <div
              key={index}
              className="bg-white rounded-xl border border-gray-200 shadow-sm hover:shadow-lg transition duration-300 overflow-hidden flex flex-col"
            >
              <div className="relative w-full h-48 overflow-hidden">
                <Image
                  src={product.image}
                  alt={product.name}
                  fill
                  className="object-contain p-4 transition-transform duration-300 hover:scale-105"
                />
              </div>
              <div className="p-4 flex flex-col flex-1">
                <h3 className="text-base font-semibold text-blue-800 uppercase mb-1">
                  {product.name}
                </h3>
                <p className="text-gray-600 text-sm flex-1">
                  {product.description}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Pagination */}
        {totalPages > 1 && (
          <div className="flex justify-center mt-8 gap-2 flex-wrap">
            <button
              onClick={() => changePage(currentPage - 1)}
              disabled={currentPage === 1}
              className="px-3 py-1 border rounded text-sm hover:bg-blue-50 disabled:opacity-40"
            >
              Prev
            </button>
            {Array.from({ length: totalPages }, (_, i) => (
              <button
                key={i + 1}
                onClick={() => changePage(i + 1)}
                className={`px-3 py-1 border rounded text-sm ${
                  currentPage === i + 1
                    ? "bg-blue-800 text-white"
                    : "hover:bg-blue-50"
                }`}
              >
                {i + 1}
              </button>
            ))}
            <button
              onClick={() => changePage(currentPage + 1)}
              disabled={currentPage === totalPages}
              className="px-3 py-1 border rounded text-sm hover:bg-blue-50 disabled:opacity-40"
            >
              Next
            </button>
          </div>
        )}
      </div>
    </section>
  );
}
