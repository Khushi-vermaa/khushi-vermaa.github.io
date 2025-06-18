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

const WeddingCollectionPage = () => {
  const [viewMode, setViewMode] = useState("grid");

  // Sample wedding collection data
  const products = [
    {
      id: 1,
      name: "Royal Wedding Sherwani",
      category: "men",
      price: 599.99,
      originalPrice: 799.99,
      rating: 4.9,
      image: "/src/assets/images/p5HSTtxherMv.jpg",
      description: "Luxurious wedding sherwani with gold embroidery",
      colors: ["Gold", "Maroon", "Cream"],
      sizes: ["S", "M", "L", "XL", "XXL"],
    },
    {
      id: 2,
      name: "Bridal Lehenga Choli",
      category: "women",
      price: 899.99,
      originalPrice: 1199.99,
      rating: 4.8,
      image: "/src/assets/images/ebsntiaYlsG9.jpg",
      description: "Stunning bridal lehenga with intricate beadwork",
      colors: ["Red", "Maroon", "Pink"],
      sizes: ["XS", "S", "M", "L", "XL"],
    },
    {
      id: 3,
      name: "Wedding Gharara Set",
      category: "women",
      price: 549.99,
      originalPrice: 699.99,
      rating: 4.7,
      image: "/src/assets/images/gzN9SEQFzYco.webp",
      description: "Traditional gharara perfect for wedding ceremonies",
      colors: ["Red", "Green", "Gold"],
      sizes: ["XS", "S", "M", "L", "XL"],
    },
    {
      id: 4,
      name: "Little Prince Wedding Sherwani",
      category: "kids",
      price: 149.99,
      originalPrice: 199.99,
      rating: 4.8,
      image: "/src/assets/images/hnm05yPxleQF.jpg",
      description: "Adorable wedding sherwani for little boys",
      colors: ["Cream", "Gold", "Navy"],
      sizes: ["2Y", "3Y", "4Y", "5Y", "6Y", "7Y", "8Y"],
    },
    {
      id: 5,
      name: "Princess Wedding Lehenga",
      category: "kids",
      price: 179.99,
      originalPrice: 229.99,
      rating: 4.9,
      image: "/src/assets/images/LljeypPj5XrE.jpg",
      description: "Beautiful wedding lehenga for little princesses",
      colors: ["Pink", "Red", "Gold"],
      sizes: ["3Y", "4Y", "5Y", "6Y", "7Y", "8Y"],
    },
    {
      id: 6,
      name: "Groom's Father Kurta Set",
      category: "men",
      price: 299.99,
      originalPrice: 399.99,
      rating: 4.6,
      image: "/src/assets/images/aEizCFM2y5om.jpg",
      description: "Elegant kurta set for wedding ceremonies",
      colors: ["Ivory", "Gold", "Peach"],
      sizes: ["S", "M", "L", "XL", "XXL"],
    },
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <div className="bg-gradient-to-r from-red-600 to-pink-600 text-white">
        <div className="container mx-auto px-4 py-12">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">
            Wedding Collection
          </h1>
          <p className="text-red-100 text-lg">
            Make your special day unforgettable with our exquisite wedding wear
          </p>
        </div>
      </div>

      <div className="container mx-auto px-4 py-8">
        {/* Search and View Controls */}
        <div className="bg-white rounded-lg shadow-sm p-4 mb-6">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <div className="flex items-center space-x-4 flex-1">
              <div className="relative flex-1 max-w-md">
                <input
                  type="text"
                  placeholder="Search wedding wear..."
                  className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-red-500 focus:border-transparent"
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
              ? "grid-cols-1 md:grid-cols-2 lg:grid-cols-3"
              : "grid-cols-1"
          }`}
        >
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

                {/* Category Badge */}
                <div className="absolute bottom-3 left-3 bg-red-500 text-white px-2 py-1 rounded-md text-xs font-medium capitalize">
                  {product.category}
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
                  <Button className="bg-red-600 hover:bg-red-700 text-white">
                    <ShoppingCart className="h-4 w-4 mr-2" />
                    Add to Cart
                  </Button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default WeddingCollectionPage;
