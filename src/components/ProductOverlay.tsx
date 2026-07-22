"use client";

import { useState } from "react";
import Image from "next/image";
import { X } from "lucide-react";

export default function ProductOverlay() {
  const [open, setOpen] = useState(true);

  const products = [
    {
      name: "Detergent Powder",
      image: "/images/detergent3.jpg",
    },
    {
      name: "Cloth Soap",
      image: "/images/laundrysoap5.jpg",
    },
    {
      name: "Utensil Soap",
      image: "/images/detergent1.jpg",
    },
    {
      name: "Dishwash",
      image: "/images/dishwash.jpg",
    },
    {
      name: "Home Care",
      image: "/images/homecare.jpg",
    },
    {
      name: "Laundry Product",
      image: "/images/washingpowder.jpg",
    },
    {
      name: "Toilet Soap",
      image: "/images/toiletsoap.jpg",
    },
    {
      name: "Machine",
      image: "/images/otherproduct/machine1.jpg",
    },
  ];

  if (!open) return null;

  return (
    <div className="fixed inset-0 z-[9999] bg-black/60 flex items-center justify-center p-4">
      <div className="bg-white w-full max-w-7xl rounded-xl shadow-2xl relative max-h-[90vh] overflow-y-auto">

        {/* Close Button */}
        <button
          onClick={() => setOpen(false)}
          className="absolute top-4 right-4 z-20 bg-red-500 hover:bg-red-600 text-white rounded-full p-2"
        >
          <X size={22} />
        </button>

        <div className="p-8">
          <h2 className="text-3xl font-bold text-center text-blue-900 mb-8">
            Our Products
          </h2>

          <div className="grid gap-6 grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
            {products.map((item, index) => (
              <div
                key={index}
                className="rounded-xl overflow-hidden shadow-md hover:shadow-xl transition"
              >
                <div className="relative h-56">
                  <Image
                    src={item.image}
                    alt={item.name}
                    fill
                    className="object-cover"
                  />
                </div>

                <div className="p-4">
                  <h3 className="text-center font-bold text-blue-900 uppercase">
                    {item.name}
                  </h3>
                </div>
              </div>
            ))}
          </div>

        </div>
      </div>
    </div>
  );
}