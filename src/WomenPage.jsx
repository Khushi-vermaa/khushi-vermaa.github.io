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

const WomenPage = () => {
  const [viewMode, setViewMode] = useState("grid");
  const [selectedCategory, setSelectedCategory] = useState("all");

  // Sample women's clothing data
  const products = [
    {
      id: 1,
      name: "Bridal Lehenga Choli",
      category: "lehenga",
      price: 599.99,
      originalPrice: 799.99,
      rating: 4.9,
      image: "/src/assets/images/ebsntiaYlsG9.jpg",
      description:
        "Stunning bridal lehenga with intricate embroidery and beadwork",
      colors: ["Red", "Maroon", "Pink"],
      sizes: ["XS", "S", "M", "L", "XL"],
    },
    {
      id: 2,
      name: "Silk Saree with Blouse",
      category: "saree",
      price: 249.99,
      originalPrice: 329.99,
      rating: 4.7,
      image: "/src/assets/images/gks6OnQkdC9c.jpg",
      description: "Elegant silk saree perfect for weddings and festivals",
      colors: ["Gold", "Navy", "Emerald"],
      sizes: ["Free Size"],
    },
    {
      id: 3,
      name: "Anarkali Suit Set",
      category: "anarkali",
      price: 189.99,
      originalPrice: 249.99,
      rating: 4.6,
      image: "/src/assets/images/ChuWUdUKnhpx.jpg",
      description: "Graceful Anarkali suit with dupatta and churidar",
      colors: ["Peach", "Mint", "Lavender"],
      sizes: ["XS", "S", "M", "L", "XL"],
    },
    {
      id: 4,
      name: "Designer Sharara Set",
      category: "sharara",
      price: 299.99,
      originalPrice: 399.99,
      rating: 4.8,
      image: "/src/assets/images/gzN9SEQFzYco.webp",
      description: "Contemporary sharara set with modern embellishments",
      colors: ["Ivory", "Rose Gold", "Dusty Pink"],
      sizes: ["XS", "S", "M", "L", "XL"],
    },
    {
      id: 5,
      name: "Festive Kurti Set",
      category: "kurti",
      price: 129.99,
      originalPrice: 169.99,
      rating: 4.5,
      image: "/src/assets/images/yFcLceZi0xGJ.jpg",
      description: "Comfortable kurti set for daily wear and festivals",
      colors: ["White", "Yellow", "Orange"],
      sizes: ["XS", "S", "M", "L", "XL"],
    },
    {
      id: 6,
      name: "Wedding Gharara",
      category: "gharara",
      price: 449.99,
      originalPrice: 599.99,
      rating: 4.8,
      image: "/src/assets/images/gdhMHzz34FeN.jpg",
      description: "Traditional gharara with heavy embroidery work",
      colors: ["Red", "Green", "Purple"],
      sizes: ["XS", "S", "M", "L", "XL"],
    },
  ];

  const categories = [
    { id: "all", name: "All Items" },
    { id: "lehenga", name: "Lehengas" },
    { id: "saree", name: "Sarees" },
    { id: "anarkali", name: "Anarkali Suits" },
    { id: "sharara", name: "Sharara Sets" },
    { id: "kurti", name: "Kurti Sets" },
    { id: "gharara", name: "Gharara Sets" },
  ];

  const filteredProducts =
    selectedCategory === "all"
      ? products
      : products.filter((product) => product.category === selectedCategory);

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <div className="bg-gradient-to-r from-pink-500 to-rose-600 text-white">
        <div className="container mx-auto px-4 py-12">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">
            Women's Collection
          </h1>
          <p className="text-pink-100 text-lg">
            Discover our exquisite range of traditional Indian wear for women
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
                        ? "bg-pink-100 text-pink-800 font-medium"
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
                    <span className="text-gray-600">Under $150</span>
                  </label>
                  <label className="flex items-center">
                    <input type="checkbox" className="mr-2" />
                    <span className="text-gray-600">$150 - $300</span>
                  </label>
                  <label className="flex items-center">
                    <input type="checkbox" className="mr-2" />
                    <span className="text-gray-600">$300 - $500</span>
                  </label>
                  <label className="flex items-center">
                    <input type="checkbox" className="mr-2" />
                    <span className="text-gray-600">Over $500</span>
                  </label>
                </div>
              </div>

              <div className="mt-8">
                <h3 className="font-semibold text-slate-800 mb-4">Size</h3>
                <div className="grid grid-cols-3 gap-2">
                  {["XS", "S", "M", "L", "XL"].map((size) => (
                    <button
                      key={size}
                      className="border border-gray-300 rounded-lg py-2 text-sm hover:border-pink-500 hover:text-pink-600 transition-colors"
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
                    "Red",
                    "Pink",
                    "Gold",
                    "Navy",
                    "Green",
                    "Purple",
                    "White",
                    "Peach",
                  ].map((color) => (
                    <div
                      key={color}
                      className="w-8 h-8 rounded-full border-2 border-gray-300 cursor-pointer hover:border-pink-500 transition-colors"
                      style={{
                        backgroundColor:
                          color.toLowerCase() === "gold"
                            ? "#FFD700"
                            : color.toLowerCase() === "navy"
                            ? "#000080"
                            : color.toLowerCase() === "peach"
                            ? "#FFCBA4"
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
                      placeholder="Search lehengas, sarees..."
                      className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-pink-500 focus:border-transparent"
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
                                  : color.toLowerCase() === "navy"
                                  ? "#000080"
                                  : color.toLowerCase() === "peach"
                                  ? "#FFCBA4"
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
                      <Button className="bg-pink-600 hover:bg-pink-700 text-white">
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

export default WomenPage;
