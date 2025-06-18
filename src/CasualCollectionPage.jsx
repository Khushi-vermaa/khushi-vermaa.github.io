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

const CasualCollectionPage = () => {
  const [viewMode, setViewMode] = useState("grid");

  // Sample casual collection data
  const products = [
    {
      id: 1,
      name: "Casual Cotton Kurta",
      category: "men",
      price: 79.99,
      originalPrice: 99.99,
      rating: 4.5,
      image: "/src/assets/images/KVfOwBBrGzZg.jpeg",
      description: "Comfortable cotton kurta for everyday wear",
      colors: ["White", "Blue", "Grey"],
      sizes: ["S", "M", "L", "XL", "XXL"],
    },
    {
      id: 2,
      name: "Casual Kurti Set",
      category: "women",
      price: 99.99,
      originalPrice: 129.99,
      rating: 4.6,
      image: "/src/assets/images/yFcLceZi0xGJ.jpg",
      description: "Stylish kurti set perfect for daily wear",
      colors: ["White", "Pink", "Blue"],
      sizes: ["XS", "S", "M", "L", "XL"],
    },
    {
      id: 3,
      name: "Everyday Palazzo Set",
      category: "women",
      price: 89.99,
      originalPrice: 119.99,
      rating: 4.4,
      image: "/src/assets/images/gdhMHzz34FeN.jpg",
      description: "Comfortable palazzo set for casual outings",
      colors: ["Navy", "Black", "Beige"],
      sizes: ["XS", "S", "M", "L", "XL"],
    },
    {
      id: 4,
      name: "Kids Casual Kurta",
      category: "kids",
      price: 49.99,
      originalPrice: 69.99,
      rating: 4.7,
      image: "/src/assets/images/D5OF2iLCz9xP.jpg",
      description: "Soft and comfortable kurta for everyday play",
      colors: ["White", "Blue", "Green"],
      sizes: ["2Y", "3Y", "4Y", "5Y", "6Y"],
    },
    {
      id: 5,
      name: "Girls Casual Dress",
      category: "kids",
      price: 59.99,
      originalPrice: 79.99,
      rating: 4.8,
      image: "/src/assets/images/Kdd1taG6FcaF.jpg",
      description: "Pretty casual dress for little girls",
      colors: ["Pink", "Yellow", "Purple"],
      sizes: ["2Y", "3Y", "4Y", "5Y", "6Y"],
    },
    {
      id: 6,
      name: "Linen Casual Shirt",
      category: "men",
      price: 69.99,
      originalPrice: 89.99,
      rating: 4.3,
      image: "/src/assets/images/Tdwk9yMOEmTx.jpg",
      description: "Breathable linen shirt for casual occasions",
      colors: ["White", "Beige", "Light Blue"],
      sizes: ["S", "M", "L", "XL", "XXL"],
    },
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <div className="bg-gradient-to-r from-blue-500 to-teal-500 text-white">
        <div className="container mx-auto px-4 py-12">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">
            Casual Collection
          </h1>
          <p className="text-blue-100 text-lg">
            Comfortable and stylish everyday wear for the whole family
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
                  placeholder="Search casual wear..."
                  className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
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
                  <div className="absolute top-3 left-3 bg-blue-500 text-white px-2 py-1 rounded-md text-xs font-medium">
                    SALE
                  </div>
                )}

                {/* Category Badge */}
                <div className="absolute bottom-3 left-3 bg-blue-500 text-white px-2 py-1 rounded-md text-xs font-medium capitalize">
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
                            color.toLowerCase() === "navy"
                              ? "#000080"
                              : color.toLowerCase() === "beige"
                              ? "#F5F5DC"
                              : color.toLowerCase() === "grey"
                              ? "#808080"
                              : color.toLowerCase() === "light blue"
                              ? "#ADD8E6"
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
                  <Button className="bg-blue-600 hover:bg-blue-700 text-white">
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

export default CasualCollectionPage;
