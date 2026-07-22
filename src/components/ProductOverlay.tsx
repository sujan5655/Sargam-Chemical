"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import { X } from "lucide-react";

import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";

import "swiper/css";

export default function ProductSliderOverlay() {
  const [show, setShow] = useState(false);

  // Show overlay only once per browser session
  useEffect(() => {
    if (typeof window === "undefined") return;

    const hasSeenOverlay = sessionStorage.getItem("product-overlay-seen");

    if (!hasSeenOverlay) {
      setShow(true);
      sessionStorage.setItem("product-overlay-seen", "true");
    }
  }, []);

  // Disable background scrolling while overlay is open
  useEffect(() => {
    document.body.style.overflow = show ? "hidden" : "";

    return () => {
      document.body.style.overflow = "";
    };
  }, [show]);

  const allProducts = [
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
      name: "Detergent Powder",
      image: "/images/detergent6.jpg",
    },
    {
      name: "Detergent Powder",
      image: "/images/detergent7.jpg",
    },
    {
      name: "Dishwash",
      image: "/images/utensilsoap.jpg",
    },
    {
      name: "Utensil Soap",
      image: "/images/dishwash.jpg",
    },
    {
      name: "Home Care",
      image: "/images/homecare.jpg",
    },
    {
      name: "Cloth Soap",
      image: "/images/laundrysoap2.jpg",
    },
    {
      name: "Cloth Soap",
      image: "/images/laundrysoap6.jpg",
    },
    {
      name: "Cloth Soap",
      image: "/images/laundrysoap3.jpg",
    },
    {
      name: "Cloth Soap",
      image: "/images/laundrysoap4.jpg",
    },
    {
      name: "Detergent Powder",
      image: "/images/detergent4.jpg",
    },
    {
      name: "Faru Powerwash",
      image: "/images/detergent8.jpeg",
    },
    {
      name: "Toilet Soap",
      image: "/images/toiletsoap.jpg",
    },
    {
      name: "Cloth Soap",
      image: "/images/laundrysoap7.jpg",
    },
    {
      name: "Laundry Product",
      image: "/images/washingpowder.jpg",
    },
    {
      name: "Machine",
      image: "/images/otherproduct/machine1.jpg",
    },
    {
      name: "Detergent Powder",
      image: "/images/detergent5.jpg",
    },
    {
      name: "Machine",
      image: "/images/otherproduct/machine2.jpg",
    },
    {
      name: "Machine",
      image: "/images/otherproduct/machine3.jpg",
    },
    {
      name: "Machine",
      image: "/images/otherproduct/machine4.jpg",
    },
  ];

  if (!show) return null;

  return (
    <div
      className="fixed inset-0 z-[9999] bg-black/30 backdrop-blur-[2px] flex items-center justify-center"
      onClick={() => setShow(false)}
    >
      <div
        className="relative w-full max-w-6xl mx-6 bg-white rounded-2xl shadow-2xl border border-gray-200 p-6"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Close Button */}
        <button
          onClick={() => setShow(false)}
          className="absolute top-4 right-4 z-20 bg-red-500 hover:bg-red-600 text-white rounded-full p-2 transition"
        >
          <X size={18} />
        </button>

        <h2 className="text-2xl font-bold text-center text-blue-900 mb-6">
          Our Products
        </h2>

        <Swiper
          modules={[Autoplay]}
          slidesPerView={"auto"}
          spaceBetween={20}
          loop={true}
          allowTouchMove={false}
          speed={700}
          autoplay={{
            delay: 500,
            disableOnInteraction: false,
            pauseOnMouseEnter: true,
          }}
        >
          {allProducts.map((product, index) => (
            <SwiperSlide
              key={index}
              style={{ width: "220px" }}
            >
              <div className="bg-white rounded-xl shadow-md border overflow-hidden hover:shadow-xl transition">
                <div className="relative h-48">
                  <Image
                    src={product.image}
                    alt={product.name}
                    fill
                    className="object-cover"
                  />
                </div>

                <div className="p-3 text-center">
                  <h3 className="font-semibold text-blue-900">
                    {product.name}
                  </h3>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  );
}