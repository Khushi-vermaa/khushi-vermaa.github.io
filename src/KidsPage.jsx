import React from "react";
// import { Button } from '@/components/ui/button';
import Button from "./button";
import { Star, ShoppingCart, Heart, Sparkles } from "lucide-react";

const KidsPage = () => {
  // Sample kids clothing data
  const products = [
    {
      id: 1,
      name: "Little Prince Sherwani",
      category: "sherwani",
      price: 89.99,
      originalPrice: 119.99,
      rating: 4.8,
      age: "2-8 years",
      description: "Adorable sherwani set perfect for weddings and festivals",
      colors: ["Cream", "Gold", "Navy"],
      sizes: ["2Y", "3Y", "4Y", "5Y", "6Y", "7Y", "8Y"],
      image: "/src/assets/images/hnm05yPxleQF.jpg",
    },
    {
      id: 2,
      name: "Princess Lehenga Choli",
      category: "lehenga",
      price: 129.99,
      originalPrice: 169.99,
      rating: 4.9,
      age: "3-10 years",
      description: "Beautiful lehenga choli with delicate embroidery",
      colors: ["Pink", "Purple", "Red"],
      sizes: ["3Y", "4Y", "5Y", "6Y", "7Y", "8Y", "9Y", "10Y"],
      image: "/src/assets/images/LljeypPj5XrE.jpg",
    },
    {
      id: 3,
      name: "Festive Kurta Pajama",
      category: "kurta",
      price: 59.99,
      originalPrice: 79.99,
      rating: 4.6,
      age: "1-6 years",
      description: "Comfortable kurta pajama set for everyday festivities",
      colors: ["White", "Yellow", "Orange"],
      sizes: ["1Y", "2Y", "3Y", "4Y", "5Y", "6Y"],
      image: "/src/assets/images/csU0MlGm6Q00.jpg",
    },
    {
      id: 4,
      name: "Baby Girl Anarkali",
      category: "anarkali",
      price: 79.99,
      originalPrice: 99.99,
      rating: 4.7,
      age: "6M-3Y",
      description: "Cute Anarkali dress for little princesses",
      colors: ["Peach", "Mint", "Lavender"],
      sizes: ["6M", "12M", "18M", "2Y", "3Y"],
      image: "/src/assets/images/Kdd1taG6FcaF.jpg",
    },
    {
      id: 5,
      name: "Traditional Dhoti Set",
      category: "dhoti",
      price: 69.99,
      originalPrice: 89.99,
      rating: 4.5,
      age: "2-8 years",
      description: "Traditional dhoti kurta for cultural events",
      colors: ["White", "Cream", "Saffron"],
      sizes: ["2Y", "3Y", "4Y", "5Y", "6Y", "7Y", "8Y"],
      image: "/src/assets/images/D5OF2iLCz9xP.jpg",
    },
    {
      id: 6,
      name: "Designer Sharara Set",
      category: "sharara",
      price: 109.99,
      originalPrice: 139.99,
      rating: 4.8,
      age: "4-12 years",
      description: "Stylish sharara set for special occasions",
      colors: ["Rose Gold", "Dusty Pink", "Ivory"],
      sizes: ["4Y", "5Y", "6Y", "7Y", "8Y", "9Y", "10Y", "11Y", "12Y"],
      image: "/src/assets/images/vmZ98a8oYkDd.jpg",
    },
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <div className="bg-gradient-to-r from-emerald-500 to-teal-600 text-white">
        <div className="container mx-auto px-4 py-12">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">
            Kids Collection
          </h1>
          <p className="text-emerald-100 text-lg">
            Adorable traditional wear for your little ones
          </p>
        </div>
      </div>

      {/* Age Categories */}
      <div className="container mx-auto px-4 py-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mb-8">
          <Button
            variant="outline"
            className="border-emerald-500 text-emerald-600 hover:bg-emerald-50"
          >
            Infants (0-2Y)
          </Button>
          <Button
            variant="outline"
            className="border-emerald-500 text-emerald-600 hover:bg-emerald-50"
          >
            Toddlers (2-4Y)
          </Button>
          <Button
            variant="outline"
            className="border-emerald-500 text-emerald-600 hover:bg-emerald-50"
          >
            Kids (4-8Y)
          </Button>
          <Button
            variant="outline"
            className="border-emerald-500 text-emerald-600 hover:bg-emerald-50"
          >
            Tweens (8-12Y)
          </Button>
        </div>

        {/* Products Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {products.map((product) => (
            <div
              key={product.id}
              className="bg-white rounded-lg shadow-sm hover:shadow-lg transition-shadow overflow-hidden group"
            >
              <div className="aspect-[3/4] bg-gray-200 relative overflow-hidden">
                <img
                  src={product.image}
                  alt={product.name}
                  className="w-full h-full object-cover"
                />

                {/* Wishlist Button */}
                <button className="absolute top-3 right-3 p-2 bg-white rounded-full shadow-md opacity-0 group-hover:opacity-100 transition-opacity">
                  <Heart className="h-4 w-4 text-gray-600 hover:text-red-500" />
                </button>

                {/* Sale Badge */}
                {product.originalPrice > product.price && (
                  <div className="absolute top-3 left-3 bg-red-500 text-white px-2 py-1 rounded-md text-xs font-medium">
                    SALE
                  </div>
                )}

                {/* Age Badge */}
                <div className="absolute bottom-3 left-3 bg-emerald-500 text-white px-2 py-1 rounded-md text-xs font-medium">
                  {product.age}
                </div>
              </div>

              <div className="p-6">
                <h3 className="font-semibold text-slate-800 mb-2">
                  {product.name}
                </h3>
                <p className="text-gray-600 text-sm mb-3">
                  {product.description}
                </p>

                <div className="flex items-center mb-3">
                  <div className="flex items-center">
                    {[...Array(5)].map((_, i) => (
                      <Star
                        key={i}
                        className={`h-4 w-4 ${
                          i < Math.floor(product.rating)
                            ? "fill-yellow-400 text-yellow-400"
                            : "text-gray-300"
                        }`}
                      />
                    ))}
                  </div>
                  <span className="ml-2 text-sm text-gray-600">
                    ({product.rating})
                  </span>
                </div>

                {/* Colors */}
                <div className="flex items-center mb-3">
                  <span className="text-sm text-gray-600 mr-2">Colors:</span>
                  <div className="flex space-x-1">
                    {product.colors.slice(0, 3).map((color, index) => (
                      <div
                        key={index}
                        className="w-4 h-4 rounded-full border border-gray-300"
                        style={{
                          backgroundColor:
                            color.toLowerCase() === "gold"
                              ? "#FFD700"
                              : color.toLowerCase() === "navy"
                              ? "#000080"
                              : color.toLowerCase() === "peach"
                              ? "#FFCBA4"
                              : color.toLowerCase() === "mint"
                              ? "#98FB98"
                              : color.toLowerCase() === "lavender"
                              ? "#E6E6FA"
                              : color.toLowerCase() === "saffron"
                              ? "#F4C430"
                              : color.toLowerCase(),
                        }}
                        title={color}
                      ></div>
                    ))}
                  </div>
                </div>

                {/* Size Range */}
                <div className="flex items-center mb-4">
                  <span className="text-sm text-gray-600 mr-2">Sizes:</span>
                  <span className="text-sm text-emerald-600 font-medium">
                    {product.sizes[0]} -{" "}
                    {product.sizes[product.sizes.length - 1]}
                  </span>
                </div>

                <div className="flex items-center justify-between">
                  <div className="flex items-center space-x-2">
                    <span className="text-2xl font-bold text-slate-800">
                      ${product.price}
                    </span>
                    {product.originalPrice > product.price && (
                      <span className="text-lg text-gray-500 line-through">
                        ${product.originalPrice}
                      </span>
                    )}
                  </div>
                  <Button className="bg-emerald-600 hover:bg-emerald-700 text-white">
                    <ShoppingCart className="h-4 w-4 mr-2" />
                    Add to Cart
                  </Button>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Size Guide Section */}
        <div className="mt-16 bg-white rounded-lg shadow-sm p-8">
          <h2 className="text-2xl font-bold text-slate-800 mb-6 text-center">
            Kids Size Guide
          </h2>
          <div className="overflow-x-auto">
            <table className="w-full text-sm">
              <thead>
                <tr className="border-b border-gray-200">
                  <th className="text-left py-3 px-4">Size</th>
                  <th className="text-left py-3 px-4">Age</th>
                  <th className="text-left py-3 px-4">Height (cm)</th>
                  <th className="text-left py-3 px-4">Chest (cm)</th>
                  <th className="text-left py-3 px-4">Waist (cm)</th>
                </tr>
              </thead>
              <tbody>
                <tr className="border-b border-gray-100">
                  <td className="py-3 px-4 font-medium">6M</td>
                  <td className="py-3 px-4">6 Months</td>
                  <td className="py-3 px-4">61-67</td>
                  <td className="py-3 px-4">43-45</td>
                  <td className="py-3 px-4">43-45</td>
                </tr>
                <tr className="border-b border-gray-100">
                  <td className="py-3 px-4 font-medium">12M</td>
                  <td className="py-3 px-4">12 Months</td>
                  <td className="py-3 px-4">67-74</td>
                  <td className="py-3 px-4">45-47</td>
                  <td className="py-3 px-4">45-47</td>
                </tr>
                <tr className="border-b border-gray-100">
                  <td className="py-3 px-4 font-medium">2Y</td>
                  <td className="py-3 px-4">2 Years</td>
                  <td className="py-3 px-4">81-86</td>
                  <td className="py-3 px-4">49-51</td>
                  <td className="py-3 px-4">47-49</td>
                </tr>
                <tr className="border-b border-gray-100">
                  <td className="py-3 px-4 font-medium">4Y</td>
                  <td className="py-3 px-4">4 Years</td>
                  <td className="py-3 px-4">96-104</td>
                  <td className="py-3 px-4">53-55</td>
                  <td className="py-3 px-4">51-53</td>
                </tr>
                <tr className="border-b border-gray-100">
                  <td className="py-3 px-4 font-medium">6Y</td>
                  <td className="py-3 px-4">6 Years</td>
                  <td className="py-3 px-4">104-112</td>
                  <td className="py-3 px-4">55-58</td>
                  <td className="py-3 px-4">53-55</td>
                </tr>
                <tr>
                  <td className="py-3 px-4 font-medium">8Y</td>
                  <td className="py-3 px-4">8 Years</td>
                  <td className="py-3 px-4">112-122</td>
                  <td className="py-3 px-4">58-61</td>
                  <td className="py-3 px-4">55-58</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
};

export default KidsPage;
