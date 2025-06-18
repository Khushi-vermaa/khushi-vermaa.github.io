import React from "react";
import { useParams } from "react-router-dom";
// import { Button } from '@/components/ui/button';
import Button from "./button";
import { Star, ShoppingCart, Heart } from "lucide-react";

const ProductPage = () => {
  const { id } = useParams();

  // Sample product data
  const product = {
    id: 1,
    name: "Royal Silk Sherwani",
    price: 299.99,
    originalPrice: 399.99,
    rating: 4.8,
    description:
      "Elegant silk sherwani perfect for weddings and special occasions. Crafted with premium silk fabric and intricate embroidery work.",
    colors: ["Gold", "Maroon", "Navy"],
    sizes: ["S", "M", "L", "XL", "XXL"],
    images: [
      "/src/assets/images/p5HSTtxherMv.jpg",
      "/src/assets/images/XTepf1pNAuDy.jpg",
      "/src/assets/images/KVfOwBBrGzZg.jpeg",
    ],
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="container mx-auto px-4 py-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Product Images */}
          <div>
            <div className="aspect-[3/4] bg-gradient-to-br from-amber-100 to-orange-100 rounded-lg mb-4 overflow-hidden">
              <img
                src={product.images[0]}
                alt={product.name}
                className="w-full h-full object-cover"
              />
            </div>
            <div className="grid grid-cols-3 gap-4">
              {product.images.slice(1).map((image, index) => (
                <div
                  key={index}
                  className="aspect-square bg-gray-200 rounded-lg overflow-hidden"
                >
                  <img
                    src={image}
                    alt={`${product.name} ${index + 2}`}
                    className="w-full h-full object-cover"
                  />
                </div>
              ))}
            </div>
          </div>

          {/* Product Details */}
          <div>
            <h1 className="text-3xl font-bold text-slate-800 mb-4">
              {product.name}
            </h1>

            <div className="flex items-center mb-4">
              <div className="flex items-center">
                {[...Array(5)].map((_, i) => (
                  <Star
                    key={i}
                    className={`h-5 w-5 ${
                      i < Math.floor(product.rating)
                        ? "fill-yellow-400 text-yellow-400"
                        : "text-gray-300"
                    }`}
                  />
                ))}
              </div>
              <span className="ml-2 text-gray-600">
                ({product.rating}) 124 reviews
              </span>
            </div>

            <div className="flex items-center space-x-4 mb-6">
              <span className="text-3xl font-bold text-slate-800">
                ${product.price}
              </span>
              {product.originalPrice > product.price && (
                <span className="text-2xl text-gray-500 line-through">
                  ${product.originalPrice}
                </span>
              )}
              <span className="bg-red-100 text-red-800 px-2 py-1 rounded text-sm font-medium">
                Save ${(product.originalPrice - product.price).toFixed(2)}
              </span>
            </div>

            <p className="text-gray-700 mb-6">{product.description}</p>

            {/* Color Selection */}
            <div className="mb-6">
              <h3 className="font-medium text-slate-800 mb-3">Color</h3>
              <div className="flex space-x-3">
                {product.colors.map((color, index) => (
                  <button
                    key={index}
                    className="w-12 h-12 rounded-full border-2 border-gray-300 hover:border-amber-500 transition-colors"
                    style={{
                      backgroundColor:
                        color.toLowerCase() === "gold"
                          ? "#FFD700"
                          : color.toLowerCase() === "maroon"
                          ? "#800000"
                          : color.toLowerCase() === "navy"
                          ? "#000080"
                          : color.toLowerCase(),
                    }}
                    title={color}
                  ></button>
                ))}
              </div>
            </div>

            {/* Size Selection */}
            <div className="mb-6">
              <h3 className="font-medium text-slate-800 mb-3">Size</h3>
              <div className="grid grid-cols-5 gap-2">
                {product.sizes.map((size) => (
                  <button
                    key={size}
                    className="border border-gray-300 rounded-lg py-3 text-center hover:border-amber-500 hover:text-amber-600 transition-colors"
                  >
                    {size}
                  </button>
                ))}
              </div>
            </div>

            {/* Action Buttons */}
            <div className="flex space-x-4 mb-6">
              <Button className="flex-1 bg-amber-600 hover:bg-amber-700 text-white py-3">
                <ShoppingCart className="h-5 w-5 mr-2" />
                Add to Cart
              </Button>
              <Button variant="outline" size="icon" className="p-3">
                <Heart className="h-5 w-5" />
              </Button>
            </div>

            {/* Product Features */}
            <div className="border-t border-gray-200 pt-6">
              <h3 className="font-medium text-slate-800 mb-3">
                Product Features
              </h3>
              <ul className="space-y-2 text-gray-700">
                <li>• Premium silk fabric</li>
                <li>• Intricate embroidery work</li>
                <li>• Perfect for weddings and special occasions</li>
                <li>• Comfortable fit</li>
                <li>• Dry clean only</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductPage;
