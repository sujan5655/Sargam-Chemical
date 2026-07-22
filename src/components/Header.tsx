"use client";
import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import logo from "../../public/images/logo.png";

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    document.body.style.overflow = menuOpen ? "hidden" : "auto";
  }, [menuOpen]);

  return (
    <header className="fixed top-0 left-0 w-full font-sans flex justify-between items-center px-4 lg:px-8 py-4 shadow-md bg-white  z-50 md:h-[100px] ">
      {/* Logo Section */}
      <div className="flex items-center space-x-3">
        <Image src={logo} alt="Sargam Chemicals Logo" width={80} height={80} />
        <span className="text-xl font-bold">Sargam Chemical</span>
      </div>

      {/* Desktop Nav */}
      <nav className="hidden md:flex space-x-10 items-center font-bold">
        {[
          { href: "/", label: "Home" },
          { href: "/products", label: "Products" },
          { href: "/about", label: "About Us" },
          { href: "/contact", label: "Contact" },
          { href: "/frequently-asked-question", label: "FAQ" },
        ].map((item) => (
          <Link
            key={item.href}
            href={item.href}
            className="relative text-gray-800 hover:text-blue-700 transition-all duration-300 ease-in-out group"
          >
            <span className="group-hover:tracking-wide transition-all duration-300">
              {item.label}
            </span>
            <span className="absolute left-0 -bottom-1 w-0 h-0.5 bg-blue-700 transition-all duration-300 group-hover:w-full"></span>
          </Link>
        ))}
      </nav>

      {/* Mobile Menu Toggle */}
      <button
        className="md:hidden text-2xl focus:outline-none"
        onClick={() => setMenuOpen(!menuOpen)}
      >
        {menuOpen ? "✖" : "☰"}
      </button>

      {/* Mobile Dropdown Menu */}
      {menuOpen && (
        <div className="absolute top-full left-0 w-full bg-white shadow-md flex flex-col items-start p-4 space-y-2 md:hidden z-50 transition-all font-bold font-sans">
          {[
            { href: "/", label: "Home" },
            { href: "/products", label: "Products" },
            { href: "/about", label: "About Us" },
            { href: "/contact", label: "Contact" },
            { href: "/frequently-asked-question", label: "FAQ" },
          ].map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="relative w-full text-gray-800 hover:text-blue-700 transition-all duration-300 ease-in-out group"
            >
              <span className="group-hover:tracking-wide transition-all duration-300">
                {item.label}
              </span>
              <span className="absolute left-0 -bottom-1 w-0 h-0.5 bg-blue-700 transition-all duration-300 group-hover:w-full"></span>
            </Link>
          ))}
        </div>
      )}
    </header>
  );
}
