import React from "react";
import { Link } from "react-router-dom";
import Button from "./button";
import { ArrowRight, Star, Shield, Truck, Award } from "lucide-react";

const HomePage = () => {
  return (
    <div>
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-pink-100 via-rose-50 to-amber-100 text-slate-900 py-24 overflow-hidden">
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute top-0 left-0 w-72 h-72 bg-pink-300/30 rounded-full blur-3xl" />
          <div className="absolute bottom-0 right-0 w-96 h-96 bg-amber-200/40 rounded-full blur-3xl" />
        </div>
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-5xl md:text-7xl font-extrabold mb-6 bg-gradient-to-r from-pink-500 via-amber-500 to-orange-400 bg-clip-text text-transparent drop-shadow">
              Elevate Your Style
            </h1>
            <p className="text-xl md:text-2xl mb-8 text-slate-700">
              Discover the latest in ethnic, western, and fusion fashion for
              every vibe.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <Button
                size="lg"
                className="bg-gradient-to-r from-pink-500 to-amber-400 hover:from-pink-600 hover:to-orange-500 text-white px-8 py-3 text-lg shadow-lg"
              >
                <Link to="/products" className="flex items-center">
                  Shop New Arrivals
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Link>
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="border-pink-400 text-pink-600 hover:bg-pink-50 hover:text-pink-800 px-8 py-3 text-lg"
              >
                <Link to="/contact">Get Style Advice</Link>
              </Button>
            </div>
          </div>
        </div>
        {/* Decorative images */}
        <img
          src="https://i.pinimg.com/736x/21/ee/b7/21eeb76cb8f6d871bfea9cc3b14c8692.jpg"
          alt="fashion"
          className="hidden md:block absolute left-10 bottom-0 w-56 rounded-3xl shadow-2xl object-cover border-4 border-white"
          style={{ zIndex: 2 }}
        />
        <img
          src="https://i.pinimg.com/736x/0c/14/d7/0c14d735799866fd5ede6368af04f5c9.jpg"
          alt="fashion"
          className="hidden md:block absolute right-10 top-10 w-44 rounded-2xl shadow-2xl object-cover border-4 border-white"
          style={{ zIndex: 2 }}
        />
      </section>

      {/* Shop By Vibe Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-extrabold text-slate-900 mb-4 tracking-tight">
              Shop By Vibe
            </h2>
            <p className="text-gray-600 text-lg">
              Find your perfect look for every mood and moment
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {/* Ethnic */}
            <div className="group relative overflow-hidden rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 bg-gradient-to-br from-pink-100 to-amber-100">
              <img
                src="https://i.pinimg.com/736x/9b/1e/4e/9b1e4e410d69b2b4caf3069018d0bf9b.jpg"
                alt="Ethnic"
                className="w-full h-72 object-cover object-top group-hover:scale-105 transition"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-pink-400/40 to-transparent" />
              <div className="absolute bottom-0 left-0 right-0 p-6 z-10">
                <h3 className="text-2xl font-bold text-white mb-2 drop-shadow">
                  Ethnic Elegance
                </h3>
                <p className="text-pink-50 mb-4">
                  Timeless sarees, kurtas & more
                </p>
                <Button className="w-full bg-pink-500 hover:bg-pink-600 text-white font-semibold">
                  <Link to="/products?category=ethnic">Shop Ethnic</Link>
                </Button>
              </div>
            </div>
            {/* Western */}
            <div className="group relative overflow-hidden rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 bg-gradient-to-br from-blue-100 to-indigo-100">
              <img
                src="https://i.pinimg.com/736x/5f/f2/55/5ff2558aac0b8fa31411d693f8d05ed8.jpg"
                alt="Western"
                className="w-full h-72 object-cover object-top group-hover:scale-105 transition"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-blue-400/40 to-transparent" />
              <div className="absolute bottom-0 left-0 right-0 p-6 z-10">
                <h3 className="text-2xl font-bold text-white mb-2 drop-shadow">
                  Western Chic
                </h3>
                <p className="text-blue-50 mb-4">Trendy dresses, tops & more</p>
                <Button className="w-full bg-blue-500 hover:bg-blue-600 text-white font-semibold">
                  <Link to="/products?category=western">Shop Western</Link>
                </Button>
              </div>
            </div>
            {/* Accessories */}
            <div className="group relative overflow-hidden rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 bg-gradient-to-br from-yellow-100 to-amber-100">
              <img
                src="https://i.pinimg.com/736x/03/db/c0/03dbc0514eaa6080f9e617f2f06956d4.jpg"
                alt="Accessories"
                className="w-full h-72 object-cover object-top group-hover:scale-105 transition"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-yellow-400/40 to-transparent" />
              <div className="absolute bottom-0 left-0 right-0 p-6 z-10">
                <h3 className="text-2xl font-bold text-white mb-2 drop-shadow">
                  Accessories
                </h3>
                <p className="text-yellow-50 mb-4">Statement jewelry & more</p>
                <Button className="w-full bg-amber-500 hover:bg-amber-600 text-white font-semibold">
                  <Link to="/products?category=accessories">
                    Shop Accessories
                  </Link>
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-16 bg-gradient-to-br from-white via-pink-50 to-amber-50">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="bg-pink-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4 shadow">
                <Award className="h-8 w-8 text-pink-500" />
              </div>
              <h3 className="font-semibold text-slate-800 mb-2">
                PREMIUM FABRICS
              </h3>
              <p className="text-gray-600 text-sm">
                Handpicked, luxurious materials
              </p>
            </div>
            <div className="text-center">
              <div className="bg-blue-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4 shadow">
                <Star className="h-8 w-8 text-blue-500" />
              </div>
              <h3 className="font-semibold text-slate-800 mb-2">
                TRENDING STYLES
              </h3>
              <p className="text-gray-600 text-sm">
                Curated by fashion experts
              </p>
            </div>
            <div className="text-center">
              <div className="bg-green-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4 shadow">
                <Shield className="h-8 w-8 text-green-500" />
              </div>
              <h3 className="font-semibold text-slate-800 mb-2">
                SECURE SHOPPING
              </h3>
              <p className="text-gray-600 text-sm">
                Safe payments & easy returns
              </p>
            </div>
            <div className="text-center">
              <div className="bg-yellow-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4 shadow">
                <Truck className="h-8 w-8 text-yellow-500" />
              </div>
              <h3 className="font-semibold text-slate-800 mb-2">
                FAST DELIVERY
              </h3>
              <p className="text-gray-600 text-sm">
                Pan-India & global shipping
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-gradient-to-r from-pink-500 via-amber-400 to-orange-400 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-extrabold mb-4 drop-shadow">
            Ready to Refresh Your Wardrobe?
          </h2>
          <p className="text-xl mb-8 text-pink-50">
            Shop the latest collections and express your unique style!
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button
              size="lg"
              className="bg-white text-pink-600 hover:bg-pink-50 font-bold px-8 py-3 shadow"
            >
              <Link to="/products">Explore All Products</Link>
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="border-white text-white hover:bg-white hover:text-pink-600 px-8 py-3"
            >
              <Link to="/contact">Contact Stylists</Link>
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default HomePage;
