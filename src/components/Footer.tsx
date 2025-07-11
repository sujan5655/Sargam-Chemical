"use client";
import Image from "next/image";
import logo from "/public/images/logo.jpg";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import PhoneIcon from "@mui/icons-material/Phone";
import EmailIcon from "@mui/icons-material/Email";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faSquareFacebook,
  faInstagram,
  faTiktok,
} from "@fortawesome/free-brands-svg-icons";
import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-[#0f172a] text-white px-4 md:px-12 py-10 font-sans">
      <div className="max-w-[1300px] mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-10">
        {/* Company Info */}
        <div>
          <div className="flex items-center space-x-3 mb-4">
            <Image
              src={logo}
              alt="Sargam Chemical Logo"
              width={50}
              height={50}
              className="rounded-full"
            />
            <span className="text-xl md:text-2xl font-bold tracking-wide">
              Sargam Chemical
            </span>
          </div>
          <p className="text-sm text-gray-300 leading-relaxed">
            Leading provider of high-quality chemical solutions for industrial
            applications. Committed to excellence and innovation in the chemical
            industry.
          </p>
        </div>

        {/* Quick Links */}
        <div>
          <h3 className="text-green-500 font-semibold mb-4 text-lg">
            Quick Links
          </h3>
          <ul className="space-y-2 text-sm">
            {[
              { label: "Home", path: "/" },
              { label: "Products", path: "/products" },
              { label: "About Us", path: "/about" },
              { label: "Contact", path: "/contact" },
              { label: "FAQ", path: "/faq" },
            ].map((link) => (
              <li key={link.label}>
                <Link
                  href={link.path}
                  className="hover:text-green-400 transition duration-200"
                >
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        {/* Contact Info */}
        <div>
          <h3 className="text-green-500 font-semibold mb-4 text-lg">
            Contact Info
          </h3>
          <ul className="space-y-3 text-sm text-gray-300">
            <li className="flex items-start gap-2">
              <LocationOnIcon className="text-blue-500 mt-1" />
              <span>Duhabi-1, Sunsari, Nepal</span>
            </li>
            <li className="flex items-start gap-2">
              <PhoneIcon className="text-blue-500 mt-1" />
              <span>+977 9842185602</span>
            </li>
            <li className="flex items-start gap-2">
              <EmailIcon className="text-blue-500 mt-1" />
              <span>sargamchemical@gmail.com</span>
            </li>
          </ul>
        </div>

        {/* Social Media Links */}
        <div>
          <h3 className="text-green-500 font-semibold mb-4 text-lg">
            Follow Us
          </h3>
          <div className="flex gap-6 text-2xl">
            <a
              href="https://www.facebook.com/reel/721528377399437/?mibextid=rS40aB7S9Ucbxw6v"
              aria-label="Facebook"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-blue-500 transition"
            >
              <FontAwesomeIcon icon={faSquareFacebook} />
            </a>
            <a
              href="https://www.instagram.com/sargamchemical?utm_source=qr&igsh=MWYwMHQ1NmNxOG1jZA=="
              aria-label="Instagram"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-pink-500 transition"
            >
              <FontAwesomeIcon icon={faInstagram} />
            </a>
            <a
              href="https://vt.tiktok.com/ZSBPBu3RJ/"
              aria-label="TikTok"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-violet-400 transition"
            >
              <FontAwesomeIcon icon={faTiktok} />
            </a>
          </div>
        </div>
      </div>

      {/* Bottom Line */}
      <div className="border-t border-gray-700 mt-10 pt-4 text-center text-xs sm:text-sm text-gray-400">
        © {new Date().getFullYear()} Sargam Chemical. All rights reserved.
      </div>
    </footer>
  );
}
