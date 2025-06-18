import React from "react";
import { Link } from "react-router-dom";
import {
  Facebook,
  Twitter,
  Instagram,
  Linkedin,
  Mail,
  Phone,
  MapPin,
} from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-gradient-to-tr from-slate-900 via-slate-950 to-slate-900 text-white relative overflow-hidden">
      {/* Newsletter Section */}
      <div className="relative py-10 px-4 sm:px-0">
        <div className="absolute inset-0 bg-gradient-to-r from-amber-400/20 via-orange-500/10 to-transparent blur-2xl opacity-60 pointer-events-none" />
        <div className="container mx-auto relative z-10">
          <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-6">
            <div>
              <h3 className="text-2xl font-bold mb-1">Stay in the Loop</h3>
              <p className="text-gray-200 mb-2 text-sm">
                Get exclusive offers & updates in your inbox
              </p>
            </div>
            <form className="flex flex-col sm:flex-row items-center gap-2 w-full max-w-md">
              <input
                type="email"
                placeholder="Your email address"
                className="flex-1 px-4 py-2 rounded-lg bg-white/90 text-slate-900 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-amber-500 transition"
              />
              <button
                type="submit"
                className="bg-amber-500 hover:bg-amber-600 text-white px-6 py-2 rounded-lg font-semibold shadow transition"
              >
                Subscribe
              </button>
            </form>
          </div>
        </div>
      </div>

      {/* Main Footer Content */}
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
          {/* Brand */}
          <div>
            <div className="flex items-center space-x-2 mb-4">
              <div className="bg-gradient-to-r from-amber-500 to-orange-600 text-white px-3 py-1 rounded font-bold text-lg shadow">
                GP
              </div>
              <span className="text-lg font-semibold tracking-wide">
                International
              </span>
            </div>
            <p className="text-gray-300 mb-4 text-sm">
              Premium products & solutions for modern businesses. <br />
              Quality. Innovation. Trust.
            </p>
            <div className="flex space-x-3 mt-4">
              <a href="#" aria-label="Facebook">
                <Facebook className="h-5 w-5 text-gray-400 hover:text-amber-500 transition" />
              </a>
              <a href="#" aria-label="Twitter">
                <Twitter className="h-5 w-5 text-gray-400 hover:text-amber-500 transition" />
              </a>
              <a href="#" aria-label="Instagram">
                <Instagram className="h-5 w-5 text-gray-400 hover:text-amber-500 transition" />
              </a>
              <a href="#" aria-label="LinkedIn">
                <Linkedin className="h-5 w-5 text-gray-400 hover:text-amber-500 transition" />
              </a>
            </div>
          </div>

          {/* Categories */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Categories</h4>
            <ul className="space-y-2 text-sm">
              <li>
                <Link
                  to="/products"
                  className="text-gray-300 hover:text-amber-400 transition"
                >
                  Premium Products
                </Link>
              </li>
              <li>
                <Link
                  to="/products"
                  className="text-gray-300 hover:text-amber-400 transition"
                >
                  Industrial Solutions
                </Link>
              </li>
              <li>
                <Link
                  to="/products"
                  className="text-gray-300 hover:text-amber-400 transition"
                >
                  Technology
                </Link>
              </li>
              <li>
                <Link
                  to="/products"
                  className="text-gray-300 hover:text-amber-400 transition"
                >
                  Accessories
                </Link>
              </li>
              <li>
                <Link
                  to="/products"
                  className="text-gray-300 hover:text-amber-400 transition"
                >
                  Services
                </Link>
              </li>
            </ul>
          </div>

          {/* Support */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Support</h4>
            <ul className="space-y-2 text-sm">
              <li>
                <Link
                  to="/contact"
                  className="text-gray-300 hover:text-amber-400 transition"
                >
                  Contact Us
                </Link>
              </li>
              <li>
                <Link
                  to="/about"
                  className="text-gray-300 hover:text-amber-400 transition"
                >
                  About Us
                </Link>
              </li>
              <li>
                <a
                  href="#"
                  className="text-gray-300 hover:text-amber-400 transition"
                >
                  FAQs
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-gray-300 hover:text-amber-400 transition"
                >
                  Shipping Details
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-gray-300 hover:text-amber-400 transition"
                >
                  Returns & Exchanges
                </a>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Contact</h4>
            <div className="space-y-3 text-sm">
              <div className="flex items-center space-x-2">
                <Mail className="h-4 w-4 text-amber-500" />
                <span className="text-gray-300">info@gpinternational.com</span>
              </div>
              <div className="flex items-center space-x-2">
                <Phone className="h-4 w-4 text-amber-500" />
                <span className="text-gray-300">+1 (555) 123-4567</span>
              </div>
              <div className="flex items-center space-x-2">
                <MapPin className="h-4 w-4 text-amber-500" />
                <span className="text-gray-300">
                  123 Business Ave, Suite 100
                  <br />
                  New York, NY 10001
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Footer */}
      <div className="border-t border-slate-800/80 py-6 bg-slate-950/60 backdrop-blur">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-gray-400 text-xs">
              © 2024 GP International. All rights reserved.
            </p>
            <div className="flex space-x-6">
              <a
                href="#"
                className="text-gray-400 hover:text-amber-400 text-xs transition"
              >
                Privacy Policy
              </a>
              <a
                href="#"
                className="text-gray-400 hover:text-amber-400 text-xs transition"
              >
                Terms of Use
              </a>
              <a
                href="#"
                className="text-gray-400 hover:text-amber-400 text-xs transition"
              >
                Cookie Policy
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
