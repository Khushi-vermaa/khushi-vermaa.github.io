import React, { useState } from "react";
// import { Button } from '@/components/ui/button';
import Button from "./button";
import {
  Search,
  Filter,
  Grid,
  List,
  Star,
  ShoppingCart,
  Heart,
} from "lucide-react";

const MenPage = () => {
  const [viewMode, setViewMode] = useState("grid");
  const [selectedCategory, setSelectedCategory] = useState("all");

  // Sample men's clothing data
  const products = [
    {
      id: 1,
      name: "Royal Silk Sherwani",
      category: "sherwani",
      price: 299.99,
      originalPrice: 399.99,
      rating: 4.8,
      image: "/src/assets/images/p5HSTtxherMv.jpg",
      description:
        "Elegant silk sherwani perfect for weddings and special occasions",
      colors: ["Gold", "Maroon", "Navy"],
      sizes: ["S", "M", "L", "XL", "XXL"],
    },
    {
      id: 2,
      name: "Premium Cotton Kurta",
      category: "kurta",
      price: 89.99,
      originalPrice: 119.99,
      rating: 4.6,
      image: "/src/assets/images/XTepf1pNAuDy.jpg",
      description: "Comfortable cotton kurta for daily wear and festivals",
      colors: ["White", "Cream", "Light Blue"],
      sizes: ["S", "M", "L", "XL", "XXL"],
    },
    {
      id: 3,
      name: "Designer Nehru Jacket",
      category: "jacket",
      price: 159.99,
      originalPrice: 199.99,
      rating: 4.7,
      image: "/src/assets/images/KVfOwBBrGzZg.jpeg",
      description: "Stylish Nehru jacket to complement your ethnic wear",
      colors: ["Black", "Navy", "Maroon"],
      sizes: ["S", "M", "L", "XL", "XXL"],
    },
    {
      id: 4,
      name: "Embroidered Kurta Set",
      category: "kurta-set",
      price: 199.99,
      originalPrice: 249.99,
      rating: 4.9,
      image: "/src/assets/images/aEizCFM2y5om.jpg",
      description: "Complete kurta set with matching pajama and dupatta",
      colors: ["Ivory", "Peach", "Mint Green"],
      sizes: ["S", "M", "L", "XL", "XXL"],
    },
    {
      id: 5,
      name: "Festive Dhoti Kurta",
      category: "dhoti",
      price: 179.99,
      originalPrice: 229.99,
      rating: 4.5,
      image: "/src/assets/images/RWqgLnIXSgdc.jpg",
      description: "Traditional dhoti kurta for religious ceremonies",
      colors: ["White", "Saffron", "Yellow"],
      sizes: ["S", "M", "L", "XL", "XXL"],
    },
    {
      id: 6,
      name: "Wedding Sherwani Set",
      category: "sherwani",
      price: 449.99,
      originalPrice: 599.99,
      rating: 4.8,
      image: "/src/assets/images/ycoYoM9vOvtJ.webp",
      description: "Complete wedding sherwani with churidar and dupatta",
      colors: ["Gold", "Red", "Cream"],
      sizes: ["S", "M", "L", "XL", "XXL"],
    },
  ];

  const categories = [
    { id: "all", name: "All Items" },
    { id: "sherwani", name: "Sherwanis" },
    { id: "kurta", name: "Kurtas" },
    { id: "kurta-set", name: "Kurta Sets" },
    { id: "jacket", name: "Nehru Jackets" },
    { id: "dhoti", name: "Dhoti Kurtas" },
  ];

  const filteredProducts =
    selectedCategory === "all"
      ? products
      : products.filter((product) => product.category === selectedCategory);

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <div className="bg-gradient-to-r from-amber-600 to-orange-600 text-white">
        <div className="container mx-auto px-4 py-12">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">
            Men's Collection
          </h1>
          <p className="text-amber-100 text-lg">
            Discover our exquisite range of traditional Indian wear for men
          </p>
        </div>
      </div>

      <div className="container mx-auto px-4 py-8">
        <div className="flex flex-col lg:flex-row gap-8">
          {/* Sidebar Filters */}
          <div className="lg:w-1/4">
            <div className="bg-white rounded-lg shadow-sm p-6 sticky top-24">
              <h3 className="font-semibold text-slate-800 mb-4">Categories</h3>
              <div className="space-y-2">
                {categories.map((category) => (
                  <button
                    key={category.id}
                    onClick={() => setSelectedCategory(category.id)}
                    className={`w-full text-left px-3 py-2 rounded-lg transition-colors ${
                      selectedCategory === category.id
                        ? "bg-amber-100 text-amber-800 font-medium"
                        : "text-gray-600 hover:bg-gray-100"
                    }`}
                  >
                    {category.name}
                  </button>
                ))}
              </div>

              <div className="mt-8">
                <h3 className="font-semibold text-slate-800 mb-4">
                  Price Range
                </h3>
                <div className="space-y-2">
                  <label className="flex items-center">
                    <input type="checkbox" className="mr-2" />
                    <span className="text-gray-600">Under $100</span>
                  </label>
                  <label className="flex items-center">
                    <input type="checkbox" className="mr-2" />
                    <span className="text-gray-600">$100 - $200</span>
                  </label>
                  <label className="flex items-center">
                    <input type="checkbox" className="mr-2" />
                    <span className="text-gray-600">$200 - $300</span>
                  </label>
                  <label className="flex items-center">
                    <input type="checkbox" className="mr-2" />
                    <span className="text-gray-600">Over $300</span>
                  </label>
                </div>
              </div>

              <div className="mt-8">
                <h3 className="font-semibold text-slate-800 mb-4">Size</h3>
                <div className="grid grid-cols-3 gap-2">
                  {["S", "M", "L", "XL", "XXL"].map((size) => (
                    <button
                      key={size}
                      className="border border-gray-300 rounded-lg py-2 text-sm hover:border-amber-500 hover:text-amber-600 transition-colors"
                    >
                      {size}
                    </button>
                  ))}
                </div>
              </div>

              <div className="mt-8">
                <h3 className="font-semibold text-slate-800 mb-4">Color</h3>
                <div className="grid grid-cols-4 gap-2">
                  {[
                    "Gold",
                    "Maroon",
                    "Navy",
                    "White",
                    "Cream",
                    "Black",
                    "Red",
                    "Blue",
                  ].map((color) => (
                    <div
                      key={color}
                      className="w-8 h-8 rounded-full border-2 border-gray-300 cursor-pointer hover:border-amber-500 transition-colors"
                      style={{
                        backgroundColor:
                          color.toLowerCase() === "gold"
                            ? "#FFD700"
                            : color.toLowerCase() === "maroon"
                            ? "#800000"
                            : color.toLowerCase() === "navy"
                            ? "#000080"
                            : color.toLowerCase() === "cream"
                            ? "#F5F5DC"
                            : color.toLowerCase(),
                      }}
                      title={color}
                    ></div>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* Main Content */}
          <div className="lg:w-3/4">
            {/* Search and View Controls */}
            <div className="bg-white rounded-lg shadow-sm p-4 mb-6">
              <div className="flex flex-col md:flex-row justify-between items-center gap-4">
                <div className="flex items-center space-x-4 flex-1">
                  <div className="relative flex-1 max-w-md">
                    <input
                      type="text"
                      placeholder="Search sherwanis, kurtas..."
                      className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-amber-500 focus:border-transparent"
                    />
                    <Search className="absolute left-3 top-2.5 h-5 w-5 text-gray-400" />
                  </div>
                  <Button variant="outline" size="sm">
                    <Filter className="h-4 w-4 mr-2" />
                    Filter
                  </Button>
                </div>

                <div className="flex items-center space-x-2">
                  <span className="text-gray-600 text-sm">View:</span>
                  <Button
                    variant={viewMode === "grid" ? "default" : "outline"}
                    size="sm"
                    onClick={() => setViewMode("grid")}
                  >
                    <Grid className="h-4 w-4" />
                  </Button>
                  <Button
                    variant={viewMode === "list" ? "default" : "outline"}
                    size="sm"
                    onClick={() => setViewMode("list")}
                  >
                    <List className="h-4 w-4" />
                  </Button>
                </div>
              </div>
            </div>

            {/* Products Grid */}
            <div
              className={`grid gap-6 ${
                viewMode === "grid"
                  ? "grid-cols-1 md:grid-cols-2 xl:grid-cols-3"
                  : "grid-cols-1"
              }`}
            >
              {filteredProducts.map((product) => (
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
                      <span className="text-sm text-gray-600 mr-2">
                        Colors:
                      </span>
                      <div className="flex space-x-1">
                        {product.colors.slice(0, 3).map((color, index) => (
                          <div
                            key={index}
                            className="w-4 h-4 rounded-full border border-gray-300"
                            style={{
                              backgroundColor:
                                color.toLowerCase() === "gold"
                                  ? "#FFD700"
                                  : color.toLowerCase() === "maroon"
                                  ? "#800000"
                                  : color.toLowerCase() === "navy"
                                  ? "#000080"
                                  : color.toLowerCase() === "cream"
                                  ? "#F5F5DC"
                                  : color.toLowerCase(),
                            }}
                            title={color}
                          ></div>
                        ))}
                        {product.colors.length > 3 && (
                          <span className="text-xs text-gray-500">
                            +{product.colors.length - 3}
                          </span>
                        )}
                      </div>
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
                      <Button className="bg-amber-600 hover:bg-amber-700 text-white">
                        <ShoppingCart className="h-4 w-4 mr-2" />
                        Add to Cart
                      </Button>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* Pagination */}
            <div className="mt-12 flex justify-center">
              <div className="flex items-center space-x-2">
                <Button variant="outline" disabled>
                  Previous
                </Button>
                <Button variant="default">1</Button>
                <Button variant="outline">2</Button>
                <Button variant="outline">3</Button>
                <Button variant="outline">Next</Button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MenPage;
