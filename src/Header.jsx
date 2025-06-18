import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import Button from "./button";
import { Menu, X, Search, ShoppingCart, User } from "lucide-react";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [searchTerm, setSearchTerm] = useState("");
  const navigate = useNavigate();

  const handleSearch = (e) => {
    e.preventDefault();
    if (searchTerm.trim()) {
      navigate(`/products?search=${encodeURIComponent(searchTerm.trim())}`);
      setIsMenuOpen(false);
    }
  };

  return (
    <header className="bg-white/80 backdrop-blur shadow-lg sticky top-0 z-50 border-b border-amber-100">
      {/* Top banner */}
      <div className="bg-gradient-to-r from-pink-500 via-amber-400 to-orange-400 text-white py-2">
        <div className="container mx-auto px-4 text-center text-xs md:text-sm tracking-wide font-semibold">
          Free Shipping On All Orders Above ₹1000 | Trendy Styles, Fast
          Delivery!
        </div>
      </div>

      {/* Main header */}
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <Link to="/" className="flex items-center space-x-3">
            <div className="bg-gradient-to-tr from-pink-500 via-amber-400 to-orange-400 text-white rounded-full w-14 h-14 flex items-center justify-center shadow-lg border-4 border-white">
              <span className="font-extrabold text-2xl tracking-widest drop-shadow">
                GP
              </span>
            </div>
            <span className="text-2xl font-extrabold text-slate-900 tracking-tight drop-shadow-sm">
              GP International
            </span>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            <Link
              to="/products"
              className="text-slate-700 hover:text-pink-500 font-semibold transition-colors"
            >
              Shop
            </Link>
            <Link
              to="/about"
              className="text-slate-700 hover:text-pink-500 font-semibold transition-colors"
            >
              About
            </Link>
            <Link
              to="/contact"
              className="text-slate-700 hover:text-pink-500 font-semibold transition-colors"
            >
              Contact
            </Link>
          </nav>

          {/* Search and Actions */}
          <div className="hidden md:flex items-center space-x-4">
            <form onSubmit={handleSearch} className="relative">
              <input
                type="text"
                placeholder="Search for trends, brands, styles..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="pl-10 pr-4 py-2 border border-pink-200 rounded-full bg-white/80 text-slate-900 placeholder-pink-400 focus:outline-none focus:ring-2 focus:ring-pink-400 focus:border-transparent transition"
              />
              <button type="submit" className="absolute left-3 top-2.5">
                <Search className="h-5 w-5 text-pink-400" />
              </button>
            </form>
            <Button variant="ghost" size="icon">
              <User className="h-5 w-5 text-pink-500" />
            </Button>
            <Button variant="ghost" size="icon" className="relative">
              <ShoppingCart className="h-5 w-5 text-pink-500" />
              <span className="absolute -top-2 -right-2 bg-pink-500 text-white text-xs rounded-full h-5 w-5 flex items-center justify-center shadow">
                0
              </span>
            </Button>
          </div>

          {/* Mobile menu button */}
          <Button
            variant="ghost"
            size="icon"
            className="md:hidden"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? (
              <X className="h-7 w-7 text-pink-500" />
            ) : (
              <Menu className="h-7 w-7 text-pink-500" />
            )}
          </Button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden mt-4 pb-4 border-t border-pink-100 bg-white/95 rounded-xl shadow-lg">
            <nav className="flex flex-col space-y-4 mt-4">
              <Link
                to="/products"
                className="text-slate-700 hover:text-pink-500 font-semibold transition-colors"
                onClick={() => setIsMenuOpen(false)}
              >
                Shop
              </Link>
              <Link
                to="/about"
                className="text-slate-700 hover:text-pink-500 font-semibold transition-colors"
                onClick={() => setIsMenuOpen(false)}
              >
                About
              </Link>
              <Link
                to="/contact"
                className="text-slate-700 hover:text-pink-500 font-semibold transition-colors"
                onClick={() => setIsMenuOpen(false)}
              >
                Contact
              </Link>
              <form
                onSubmit={handleSearch}
                className="pt-4 border-t border-pink-100"
              >
                <input
                  type="text"
                  placeholder="Search for trends, brands, styles..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="w-full pl-10 pr-4 py-2 border border-pink-200 rounded-full bg-white/80 text-slate-900 placeholder-pink-400 focus:outline-none focus:ring-2 focus:ring-pink-400 focus:border-transparent transition"
                />
                <button type="submit" className="absolute left-3 top-2.5">
                  <Search className="h-5 w-5 text-pink-400" />
                </button>
              </form>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;
