"use client";
import Image from "next/image";
import logo from "/public/images/logo.jpg";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import PhoneIcon from "@mui/icons-material/Phone";
import EmailIcon from "@mui/icons-material/Email";
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
              width={40}
              height={40}
            />
            <span className="text-xl font-bold">Sargam Chemical</span>
          </div>
          <p className="text-sm text-gray-300 leading-relaxed">
            Leading provider of high-quality chemical solutions for industrial
            applications. Committed to excellence and innovation in the chemical
            industry.
          </p>
        </div>

        {/* Quick Links */}
        <div>
          <h3 className="text-green-500 font-semibold mb-4">Quick Links</h3>
          <ul className="space-y-2 text-sm">
            <li>
              <Link href="/" className="hover:text-green-400 transition">
                Home
              </Link>
            </li>
            <li>
              <Link
                href="/products"
                className="hover:text-green-400 transition"
              >
                Products
              </Link>
            </li>
            <li>
              <Link href="/about" className="hover:text-green-400 transition">
                About Us
              </Link>
            </li>
            <li>
              <Link href="/contact" className="hover:text-green-400 transition">
                Contact
              </Link>
            </li>
            <li>
              <Link href="/faq" className="hover:text-green-400 transition">
                FAQ
              </Link>
            </li>
          </ul>
        </div>

        {/* Contact Info */}
        <div>
          <h3 className="text-green-500 font-semibold mb-4">Contact Info</h3>
          <ul className="space-y-2 text-sm text-gray-300">
            <li className="flex items-start gap-2">
              <LocationOnIcon className="text-blue-500" />
              <span>Duhabi-1, Sunsari, Nepal</span>
            </li>
            <li className="flex items-start gap-2">
              <PhoneIcon className="text-blue-500" />
              <span>9842185602</span> <span>9842185602</span>
            </li>
            <li className="flex items-start gap-2">
              <EmailIcon className="text-blue-500" />
              <span>sargamchemical@gmail.com</span>
            </li>
          </ul>
        </div>

        {/* Location Map */}
        <div>
          <h3 className="text-green-500 font-semibold mb-4">Our Location</h3>
          <div className="w-full sm:max-w-[100%] md:w-[100%] lg:w-[300px] h-[200px] sm:h-[250px] md:h-[200px] rounded-md overflow-hidden">
           <iframe
  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d14150.26024844944!2d87.2839635!3d26.6636886!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39ef4d58f7b8e281%3A0xe26958dbe155b391!2sDuhabi%201%2C%20Sunsari%2C%20Nepal!5e0!3m2!1sen!2snp!4v1720950785561!5m2!1sen!2snp"
  className="w-full h-full border-0"
  allowFullScreen
  loading="lazy"
  referrerPolicy="no-referrer-when-downgrade"
></iframe>

          </div>
        </div>
      </div>

      {/* Bottom Line */}
      <div className="border-t border-gray-700 mt-10 pt-4 text-center text-sm text-gray-400">
        © 2025 Sargam Chemical. All rights reserved.
      </div>
    </footer>
  );
}
