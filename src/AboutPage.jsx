import React from "react";
import Button from "./button";
import { Users, Target, Award, Globe, ArrowRight } from "lucide-react";

const AboutPage = () => {
  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-pink-100 via-amber-50 to-amber-100 text-slate-900 py-20 relative overflow-hidden">
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute top-0 left-0 w-72 h-72 bg-pink-300/30 rounded-full blur-3xl" />
          <div className="absolute bottom-0 right-0 w-96 h-96 bg-amber-200/40 rounded-full blur-3xl" />
        </div>
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-5xl md:text-6xl font-extrabold mb-6 bg-gradient-to-r from-pink-500 via-amber-500 to-orange-400 bg-clip-text text-transparent drop-shadow">
              About GlamPlaza
            </h1>
            <p className="text-xl md:text-2xl text-slate-700 mb-8">
              Redefining Indian fashion with a blend of tradition and trend.
              Discover our story, our values, and our passion for style.
            </p>
            <Button
              size="lg"
              className="bg-gradient-to-r from-pink-500 to-amber-400 hover:from-pink-600 hover:to-orange-500 text-white px-8 py-3 font-semibold shadow"
            >
              Learn Our Story
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
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

      {/* Mission & Vision */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-4xl font-extrabold text-pink-600 mb-6">
                Our Mission
              </h2>
              <p className="text-lg text-gray-700 mb-6">
                At GlamPlaza, our mission is to empower every individual to
                express their unique style. We curate the best of ethnic,
                western, and fusion wear, blending tradition with contemporary
                trends.
              </p>
              <p className="text-lg text-gray-700 mb-8">
                From handpicked fabrics to exclusive designs, we believe fashion
                is for everyone—celebrating diversity, confidence, and
                creativity.
              </p>
              <div className="grid grid-cols-2 gap-6">
                <div className="text-center">
                  <div className="text-3xl font-bold text-pink-500 mb-2">
                    10K+
                  </div>
                  <div className="text-gray-600">Happy Shoppers</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-pink-500 mb-2">
                    30+
                  </div>
                  <div className="text-gray-600">Fashion Designers</div>
                </div>
              </div>
            </div>
            <div className="bg-gradient-to-br from-pink-100 to-amber-100 rounded-2xl p-8">
              <div className="aspect-square bg-gradient-to-br from-pink-200 to-amber-200 rounded-xl flex items-center justify-center">
                <div className="text-center text-pink-700">
                  <Globe className="h-24 w-24 mx-auto mb-4" />
                  <h3 className="text-2xl font-bold">Pan-India Presence</h3>
                  <p className="text-lg">Delivering style nationwide</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="py-16 bg-pink-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-extrabold text-pink-600 mb-4">
              Our Core Values
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              The heart of GlamPlaza: what inspires our collections and our
              community
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center bg-white rounded-xl p-8 shadow-sm hover:shadow-lg transition-shadow">
              <div className="bg-pink-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <Award className="h-8 w-8 text-pink-500" />
              </div>
              <h3 className="text-xl font-semibold text-slate-800 mb-3">
                Quality
              </h3>
              <p className="text-gray-600">
                Only the finest fabrics and craftsmanship for every piece.
              </p>
            </div>
            <div className="text-center bg-white rounded-xl p-8 shadow-sm hover:shadow-lg transition-shadow">
              <div className="bg-yellow-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <Target className="h-8 w-8 text-yellow-500" />
              </div>
              <h3 className="text-xl font-semibold text-slate-800 mb-3">
                Trendsetting
              </h3>
              <p className="text-gray-600">
                Always ahead with the latest styles, colors, and silhouettes.
              </p>
            </div>
            <div className="text-center bg-white rounded-xl p-8 shadow-sm hover:shadow-lg transition-shadow">
              <div className="bg-green-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <Users className="h-8 w-8 text-green-500" />
              </div>
              <h3 className="text-xl font-semibold text-slate-800 mb-3">
                Inclusivity
              </h3>
              <p className="text-gray-600">
                Fashion for every body, every story, every celebration.
              </p>
            </div>
            <div className="text-center bg-white rounded-xl p-8 shadow-sm hover:shadow-lg transition-shadow">
              <div className="bg-amber-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <Globe className="h-8 w-8 text-amber-500" />
              </div>
              <h3 className="text-xl font-semibold text-slate-800 mb-3">
                Sustainability
              </h3>
              <p className="text-gray-600">
                Responsible sourcing and mindful production for a better world.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-extrabold text-pink-600 mb-4">
              Meet Our Creative Team
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Designers, stylists, and dreamers—united by a love for fashion
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto">
            <div className="text-center">
              <img
                src="https://randomuser.me/api/portraits/women/68.jpg"
                alt="Aanya Kapoor"
                className="w-32 h-32 object-cover rounded-full mx-auto mb-4 border-4 border-pink-200 shadow"
              />
              <h3 className="text-xl font-semibold text-slate-800 mb-2">
                Aanya Kapoor
              </h3>
              <p className="text-pink-500 font-medium mb-2">
                Creative Director
              </p>
              <p className="text-gray-600 text-sm">
                Curating collections that blend Indian heritage with global
                trends.
              </p>
            </div>
            <div className="text-center">
              <img
                src="https://randomuser.me/api/portraits/men/32.jpg"
                alt="Rohan Mehta"
                className="w-32 h-32 object-cover rounded-full mx-auto mb-4 border-4 border-pink-200 shadow"
              />
              <h3 className="text-xl font-semibold text-slate-800 mb-2">
                Rohan Mehta
              </h3>
              <p className="text-pink-500 font-medium mb-2">Head of Design</p>
              <p className="text-gray-600 text-sm">
                Leading the design team to create bold, beautiful, and wearable
                art.
              </p>
            </div>
            <div className="text-center">
              <img
                src="https://randomuser.me/api/portraits/women/65.jpg"
                alt="Simran Kaur"
                className="w-32 h-32 object-cover rounded-full mx-auto mb-4 border-4 border-pink-200 shadow"
              />
              <h3 className="text-xl font-semibold text-slate-800 mb-2">
                Simran Kaur
              </h3>
              <p className="text-pink-500 font-medium mb-2">Brand Stylist</p>
              <p className="text-gray-600 text-sm">
                Styling looks for every occasion, from festive to everyday chic.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-gradient-to-r from-pink-500 via-amber-400 to-orange-400 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-extrabold mb-4 drop-shadow">
            Join the GlamPlaza Family!
          </h2>
          <p className="text-xl mb-8 text-pink-50 max-w-2xl mx-auto">
            Be part of a vibrant community that celebrates style, confidence,
            and individuality.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button
              size="lg"
              className="bg-white text-pink-600 hover:bg-pink-50 font-bold px-8 py-3 shadow"
            >
              Shop Latest Collection
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="border-white text-white hover:bg-white hover:text-pink-600 px-8 py-3"
            >
              Contact Stylists
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default AboutPage;
