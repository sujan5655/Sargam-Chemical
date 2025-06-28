"use client";
import Image from "next/image";
import logo from "/public/images/logo.jpg"; // Adjust if needed
import LocationOnIcon from '@mui/icons-material/LocationOn';
import PhoneIcon from '@mui/icons-material/Phone';
import EmailIcon from '@mui/icons-material/Email';
import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-[#0f172a] text-white px-4 md:px-16 py-8">
      <div className="max-w-[1300px] mx-auto grid grid-cols-1 md:grid-cols-4 gap-8">

        {/* Company Info */}
        <div>
          <div className="flex items-center space-x-2 mb-4">
            <Image src={logo} alt="Sargam Chemical Logo" width={40} height={40} />
            <span className="text-xl font-bold">Sargam Chemical</span>
          </div>
          <p className="text-sm text-gray-300">
            Leading provider of high-quality chemical solutions for industrial applications.
            Committed to excellence and innovation in the chemical industry.
          </p>
        </div>

        {/* Quick Links */}
        <div>
          <h3 className="text-green-500 font-semibold mb-4">Quick Links</h3>
          <ul className="space-y-2 text-sm">
            <li><Link href="/" className="hover:text-green-400">Home</Link></li>
            <li><Link href="/products" className="hover:text-green-400">Products</Link></li>
            <li><Link href="/about" className="hover:text-green-400">About Us</Link></li>
            <li><Link href="/contact" className="hover:text-green-400">Contact</Link></li>
            <li><Link href="/faq" className="hover:text-green-400">FAQ</Link></li>
          </ul>
        </div>

        {/* Contact Info */}
        <div>
          <h3 className="text-green-500 font-semibold mb-4">Contact Info</h3>
          <ul className="space-y-2 text-sm text-gray-300">
            <li className="flex items-center space-x-2">
              <LocationOnIcon className="text-blue-500" />
              <span>Biratnagar-5, Morang, Nepal</span>
            </li>
            <li className="flex items-center space-x-2">
              <PhoneIcon className="text-blue-500" />
              <span>+977-21-123456</span>
            </li>
            <li className="flex items-center space-x-2">
              <EmailIcon className="text-blue-500" />
              <span>info@sargamchemical.com</span>
            </li>
          </ul>
        </div>

        {/* Location Map */}
        <div>
          <h3 className="text-green-500 font-semibold mb-4">Our Location</h3>
         <iframe
  src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d14132.434437730353!2d87.2664!3d26.4596!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39ef41e25b0d4cbd%3A0xf4dd407f61d11f98!2sBiratnagar%205%2C%20Biratnagar%2056600!5e0!3m2!1sen!2snp!4v1685875474067!5m2!1sen!2snp"
  width="100%"
  height="150"
  style={{ border: 0 }}
  allowFullScreen
  loading="lazy"
  referrerPolicy="no-referrer-when-downgrade"
  className="rounded-md"
/>

        </div>
      </div>

      {/* Copyright */}
      <div className="border-t border-gray-700 mt-8 pt-4 text-center text-sm text-gray-400">
        © 2025 Sargam Chemical. All rights reserved.
      </div>
    </footer>
  );
}
