import React, { useState } from "react";
// import { Button } from '@/components/ui/button';
import Button from "./button";
import { Search, Filter, Grid, List, Star, ShoppingCart } from "lucide-react";
import { useLocation } from "react-router-dom";
const products = [
  {
    id: 1,
    name: "Embroidered Anarkali Kurta Set",
    category: "ethnic",
    price: 2499,
    rating: 4.8,
    image:
      "https://i.pinimg.com/736x/21/ee/b7/21eeb76cb8f6d871bfea9cc3b14c8692.jpg",
    description:
      "Elegant full-length Anarkali with rich embroidery and dupatta.",
  },
  {
    id: 2,
    name: "Chikankari Straight Kurta",
    category: "ethnic",
    price: 1599,
    rating: 4.7,
    image:
      "https://i.pinimg.com/736x/90/62/af/9062afc4e2372caef9ac688669f3e2c9.jpg",
    description: "Elegant white Chikankari hand-embroidered kurta.",
  },
  {
    id: 3,
    name: "Denim Jacket with Crop Top",
    category: "western",
    price: 1599,
    rating: 4.5,
    image:
      "https://i.pinimg.com/736x/55/e6/82/55e68235818acb5b415d77732cdd7ece.jpg",
    description: "Trendy denim jacket styled with a casual crop top and jeans.",
  },
  {
    id: 4,
    name: "Banarasi Lehenga Choli",
    category: "ethnic",
    price: 4999,
    rating: 4.9,
    image:
      "https://i.pinimg.com/736x/9b/1e/4e/9b1e4e410d69b2b4caf3069018d0bf9b.jpg",
    description: "Luxurious Banarasi lehenga for weddings and festivals.",
  },
  {
    id: 5,
    name: "Phulkari Dupatta",
    category: "ethnic",
    price: 799,
    rating: 4.5,
    image:
      "https://i.pinimg.com/736x/8c/88/c3/8c88c35589cacc72108241dd5097f90f.jpg",
    description: "Colorful Punjabi dupatta with vibrant threadwork.",
  },
  {
    id: 6,
    name: "Handcrafted Jhumka Earrings",
    category: "accessories",
    price: 499,
    rating: 4.9,
    image:
      "https://i.pinimg.com/736x/03/db/c0/03dbc0514eaa6080f9e617f2f06956d4.jpg",
    description: "Traditional jhumkas with intricate kundan work.",
  },
  {
    id: 7,
    name: "Kolhapuri Leather Sandals",
    category: "footwear",
    price: 999,
    rating: 4.6,
    image:
      "https://i.pinimg.com/736x/15/47/03/1547039291462bebfdd36b575c1c4142.jpg",
    description:
      "Comfortable and stylish traditional leather kolhapuri chappals.",
  },
  {
    id: 8,
    name: "Silk Saree with Zari Border",
    category: "ethnic",
    price: 3499,
    rating: 4.9,
    image:
      "https://i.pinimg.com/736x/d0/9a/b7/d09ab7d60c728b5b94e18e6148b5c34a.jpg",
    description: "Elegant silk saree with golden zari work and blouse piece.",
  },
  {
    id: 9,
    name: "Ribbed Knit Bodycon Dress",
    category: "western",
    price: 1399,
    rating: 4.6,
    image:
      "https://i.pinimg.com/736x/5f/f2/55/5ff2558aac0b8fa31411d693f8d05ed8.jpg",
    description: "Chic bodycon dress in pastel rib-knit design.",
  },
  {
    id: 10,
    name: "Boho Printed Maxi Dress",
    category: "western",
    price: 1799,
    rating: 4.7,
    image:
      "https://i.pinimg.com/736x/0c/14/d7/0c14d735799866fd5ede6368af04f5c9.jpg",
    description: "Casual and comfy bohemian print dress perfect for outings.",
  },
  {
    id: 11,
    name: "Oxidized Silver Necklace Set",
    category: "accessories",
    price: 999,
    rating: 4.6,
    image:
      "https://i.pinimg.com/736x/f9/3e/1b/f93e1bbd76e51c9b1088e483e05b687d.jpg",
    description: "Statement tribal jewelry for ethnic outfits.",
  },
  {
    id: 12,
    name: "Crop Blazer Co-ord Set",
    category: "western",
    price: 2499,
    rating: 4.8,
    image:
      "https://i.pinimg.com/736x/ad/51/95/ad519582433f7c56be83a643be7738d6.jpg",
    description: "Elegant blazer co-ord set for a power look.",
  },
  {
    id: 13,
    name: "Block Heels with Straps",
    category: "footwear",
    price: 1499,
    rating: 4.5,
    image:
      "https://i.pinimg.com/736x/38/bf/62/38bf629bb887c368a4435801d004a6de.jpg",
    description: "Trendy block heels for evening parties.",
  },
];
const categories = [
  { id: "all", name: "All Products" },
  { id: "ethnic", name: "Ethnic Wear" },
  { id: "western", name: "Western Wear" },
  { id: "accessories", name: "Accessories" },
  { id: "footwear", name: "Footwear" },
];
const priceRanges = [
  { id: 1, label: "Under ₹200", min: 0, max: 200 },
  { id: 2, label: "₹200 - ₹500", min: 200, max: 500 },
  { id: 3, label: "₹500 - ₹1000", min: 500, max: 1000 },
  { id: 4, label: "Over ₹1000", min: 1000, max: Infinity },
];
const PRODUCTS_PER_PAGE = 9;
const ProductsPage = () => {
  const [viewMode, setViewMode] = useState("grid");
  const [selectedCategory, setSelectedCategory] = useState("all");
  const [currentPage, setCurrentPage] = useState(1);
  const [selectedPriceRange, setSelectedPriceRange] = useState(null);
  // Filtering logic
  let filteredProducts =
    selectedCategory === "all"
      ? products
      : products.filter((product) => product.category === selectedCategory);
  if (selectedPriceRange) {
    const range = priceRanges.find((r) => r.id === selectedPriceRange);
    filteredProducts = filteredProducts.filter(
      (product) => product.price >= range.min && product.price < range.max
    );
  }
  // Pagination
  const totalPages = Math.ceil(filteredProducts.length / PRODUCTS_PER_PAGE);
  const startIndex = (currentPage - 1) * PRODUCTS_PER_PAGE;
  const currentProducts = filteredProducts.slice(
    startIndex,
    startIndex + PRODUCTS_PER_PAGE
  );
  const goToPage = (page) => {
    if (page >= 1 && page <= totalPages) setCurrentPage(page);
  };
  // Reset page to 1 when filter/search changes
  React.useEffect(() => {
    setCurrentPage(1);
  }, [selectedCategory, selectedPriceRange]);

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <div className="bg-white shadow-sm">
        <div className="container mx-auto px-4 py-8">
          <h1 className="text-4xl font-bold text-slate-800 mb-4">
            Our Products
          </h1>
          <p className="text-gray-600 text-lg">
            Discover our comprehensive range of premium products and solutions
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
                  {priceRanges.map((range) => (
                    <label key={range.id} className="flex items-center">
                      <input
                        type="radio"
                        className="mr-2"
                        checked={selectedPriceRange === range.id}
                        onChange={() => setSelectedPriceRange(range.id)}
                      />
                      <span className="text-gray-600">{range.label}</span>
                    </label>
                  ))}
                </div>
                <button
                  className="mt-2 px-3 py-1 rounded bg-blue-50 hover:bg-blue-100 text-blue-600 font-medium transition-colors duration-200 shadow-sm border border-blue-200"
                  onClick={() => setSelectedPriceRange(null)}
                >
                  Clear Price Filter
                </button>
              </div>

              <div className="mt-8">
                <h3 className="font-semibold text-slate-800 mb-4">Rating</h3>
                <div className="space-y-2">
                  {[5, 4, 3, 2, 1].map((rating) => (
                    <label key={rating} className="flex items-center">
                      <input type="checkbox" className="mr-2" />
                      <div className="flex items-center">
                        {[...Array(rating)].map((_, i) => (
                          <Star
                            key={i}
                            className="h-4 w-4 fill-yellow-400 text-yellow-400"
                          />
                        ))}
                        {[...Array(5 - rating)].map((_, i) => (
                          <Star key={i} className="h-4 w-4 text-gray-300" />
                        ))}
                        <span className="ml-2 text-gray-600">& up</span>
                      </div>
                    </label>
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
                      placeholder="Search products..."
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
                  className="bg-white rounded-lg shadow-sm hover:shadow-lg transition-shadow overflow-hidden"
                >
                  <div className="aspect-square bg-gray-200 relative overflow-hidden">
                    <div className="absolute inset-0 bg-gradient-to-br from-gray-100 to-gray-300 flex items-center justify-center">
                      <div className="text-gray-500 text-center">
                        <div className="w-16 h-16 bg-gray-400 rounded-lg mx-auto mb-2"></div>
                        {/* <p className="text-sm">Product Image</p> */}
                        <img
                          src={product.image}
                          alt={product.name}
                          className="object-cover w-full h-full"
                        />
                      </div>
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

                    <div className="flex items-center justify-between">
                      <span className="text-2xl font-bold text-slate-800">
                        ₹{product.price}
                      </span>
                      <div className="flex items-center space-x-2 mt-2">
                        <ShoppingCart className="h-5 w-5 text-amber-500" />
                        <span className="font-medium text-gray-700">
                          {product.category}
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* Pagination */}
            <div className="mt-12 flex justify-center">
              <div className="flex items-center space-x-2">
                <button
                  className="px-3 py-1 bg-gray-200 rounded disabled:opacity-50"
                  onClick={() => goToPage(currentPage - 1)}
                  disabled={currentPage === 1}
                >
                  Prev
                </button>
                {[...Array(totalPages)].map((_, idx) => (
                  <button
                    key={idx + 1}
                    className={`px-3 py-1 rounded ${
                      currentPage === idx + 1
                        ? "bg-blue-500 text-white"
                        : "bg-gray-200"
                    }`}
                    onClick={() => goToPage(idx + 1)}
                  >
                    {idx + 1}
                  </button>
                ))}
                <button
                  className="px-3 py-1 bg-gray-200 rounded disabled:opacity-50"
                  onClick={() => goToPage(currentPage + 1)}
                  disabled={currentPage === totalPages}
                >
                  Next
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductsPage;
