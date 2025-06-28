"use client";
import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import logo from "/public/images/logo.jpg";

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    document.body.style.overflow = menuOpen ? "hidden" : "auto";
  }, [menuOpen]);

  return (
    <header className="relative flex justify-between items-center max-w-full mx-auto px-4 lg:px-8 py-4 shadow-md bg-white border-b-2 border-blue-700 z-50 md:h-[100px]">
      {/* Left: Logo + Company Name */}
      <div className="flex items-center space-x-3">
        <Image src={logo} alt="Sargam Chemicals Logo" width={80} height={80} />
        <span className="text-xl font-bold">Sargam Chemical</span>
      </div>

      <nav className="hidden md:flex space-x-10 items-center">
        <Link href="/" className="hover:text-blue-700">
          Home
        </Link>
        <Link href="/products" className="hover:text-blue-700">
          Products
        </Link>
        <Link href="/about" className="hover:text-blue-700">
          About Us
        </Link>
        <Link href="/contact" className="hover:text-blue-700">
          Contact
        </Link>
        <Link href="/frequently-asked-question" className="hover:text-blue-700">
          FAQ
        </Link>
      </nav>

      <button
        className="md:hidden text-2xl focus:outline-none"
        onClick={() => setMenuOpen(!menuOpen)}
      >
        {menuOpen ? "✖" : "☰"}
      </button>

      {/* Dropdown Menu for small screens */}
      {menuOpen && (
        <div className="absolute top-full left-0 w-full bg-white shadow-md flex flex-col items-start p-4 space-y-2 md:hidden z-50 transition-all">
          <Link href="/" className="w-full hover:text-blue-700">
            Home
          </Link>
          <Link href="/products" className="w-full hover:text-blue-700">
            Products
          </Link>
          <Link href="/about" className="w-full hover:text-blue-700">
            About Us
          </Link>
          <Link href="/contact" className="w-full hover:text-blue-700">
            Contact
          </Link>
          <Link href="/faq" className="w-full hover:text-blue-700">
            FAQ
          </Link>
        </div>
      )}
    </header>
  );
}
