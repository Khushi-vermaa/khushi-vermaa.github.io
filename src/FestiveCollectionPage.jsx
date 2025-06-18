import React, { useState } from 'react';
// import { Button } from '@/components/ui/button';
import Button from './button'
import { Search, Filter, Grid, List, Star, ShoppingCart, Heart } from 'lucide-react';

const FestiveCollectionPage = () => {
  const [viewMode, setViewMode] = useState('grid');

  // Sample festive collection data
  const products = [
    {
      id: 1,
      name: "Festive Silk Kurta",
      category: "men",
      price: 149.99,
      originalPrice: 199.99,
      rating: 4.7,
      image: "/src/assets/images/XTepf1pNAuDy.jpg",
      description: "Elegant silk kurta perfect for festivals and celebrations",
      colors: ["Saffron", "White", "Gold"],
      sizes: ["S", "M", "L", "XL", "XXL"]
    },
    {
      id: 2,
      name: "Festival Anarkali Suit",
      category: "women",
      price: 229.99,
      originalPrice: 299.99,
      rating: 4.8,
      image: "/src/assets/images/ChuWUdUKnhpx.jpg",
      description: "Beautiful Anarkali suit for festive occasions",
      colors: ["Orange", "Yellow", "Red"],
      sizes: ["XS", "S", "M", "L", "XL"]
    },
    {
      id: 3,
      name: "Festive Saree Collection",
      category: "women",
      price: 189.99,
      originalPrice: 249.99,
      rating: 4.6,
      image: "/src/assets/images/gks6OnQkdC9c.jpg",
      description: "Traditional saree perfect for festivals",
      colors: ["Gold", "Orange", "Red"],
      sizes: ["Free Size"]
    },
    {
      id: 4,
      name: "Kids Festive Kurta",
      category: "kids",
      price: 79.99,
      originalPrice: 99.99,
      rating: 4.8,
      image: "/src/assets/images/csU0MlGm6Q00.jpg",
      description: "Comfortable festive kurta for little ones",
      colors: ["Yellow", "Orange", "White"],
      sizes: ["2Y", "3Y", "4Y", "5Y", "6Y"]
    },
    {
      id: 5,
      name: "Festival Lehenga for Girls",
      category: "kids",
      price: 119.99,
      originalPrice: 149.99,
      rating: 4.9,
      image: "/src/assets/images/J5kMA0zJJAOr.jpg",
      description: "Colorful lehenga perfect for festival celebrations",
      colors: ["Pink", "Yellow", "Green"],
      sizes: ["3Y", "4Y", "5Y", "6Y", "7Y"]
    },
    {
      id: 6,
      name: "Traditional Dhoti Kurta",
      category: "men",
      price: 199.99,
      originalPrice: 259.99,
      rating: 4.5,
      image: "/src/assets/images/RWqgLnIXSgdc.jpg",
      description: "Traditional dhoti kurta for religious festivals",
      colors: ["White", "Cream", "Saffron"],
      sizes: ["S", "M", "L", "XL", "XXL"]
    }
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <div className="bg-gradient-to-r from-orange-500 to-yellow-500 text-white">
        <div className="container mx-auto px-4 py-12">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Festive Collection</h1>
          <p className="text-orange-100 text-lg">Celebrate every festival in style with our vibrant collection</p>
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
                  placeholder="Search festive wear..."
                  className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-500 focus:border-transparent"
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
                variant={viewMode === 'grid' ? 'default' : 'outline'}
                size="sm"
                onClick={() => setViewMode('grid')}
              >
                <Grid className="h-4 w-4" />
              </Button>
              <Button
                variant={viewMode === 'list' ? 'default' : 'outline'}
                size="sm"
                onClick={() => setViewMode('list')}
              >
                <List className="h-4 w-4" />
              </Button>
            </div>
          </div>
        </div>

        {/* Products Grid */}
        <div className={`grid gap-6 ${
          viewMode === 'grid' 
            ? 'grid-cols-1 md:grid-cols-2 lg:grid-cols-3' 
            : 'grid-cols-1'
        }`}>
          {products.map(product => (
            <div key={product.id} className="bg-white rounded-lg shadow-sm hover:shadow-lg transition-shadow overflow-hidden group">
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
                  <div className="absolute top-3 left-3 bg-orange-500 text-white px-2 py-1 rounded-md text-xs font-medium">
                    SALE
                  </div>
                )}

                {/* Category Badge */}
                <div className="absolute bottom-3 left-3 bg-orange-500 text-white px-2 py-1 rounded-md text-xs font-medium capitalize">
                  {product.category}
                </div>
              </div>
              
              <div className="p-6">
                <h3 className="font-semibold text-slate-800 mb-2">{product.name}</h3>
                <p className="text-gray-600 text-sm mb-3">{product.description}</p>
                
                <div className="flex items-center mb-3">
                  <div className="flex items-center">
                    {[...Array(5)].map((_, i) => (
                      <Star 
                        key={i} 
                        className={`h-4 w-4 ${
                          i < Math.floor(product.rating) 
                            ? 'fill-yellow-400 text-yellow-400' 
                            : 'text-gray-300'
                        }`} 
                      />
                    ))}
                  </div>
                  <span className="ml-2 text-sm text-gray-600">({product.rating})</span>
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
                          backgroundColor: color.toLowerCase() === 'gold' ? '#FFD700' :
                                         color.toLowerCase() === 'saffron' ? '#F4C430' :
                                         color.toLowerCase() === 'orange' ? '#FFA500' :
                                         color.toLowerCase() === 'yellow' ? '#FFFF00' :
                                         color.toLowerCase()
                        }}
                        title={color}
                      ></div>
                    ))}
                  </div>
                </div>
                
                <div className="flex items-center justify-between">
                  <div className="flex items-center space-x-2">
                    <span className="text-2xl font-bold text-slate-800">${product.price}</span>
                    {product.originalPrice > product.price && (
                      <span className="text-lg text-gray-500 line-through">${product.originalPrice}</span>
                    )}
                  </div>
                  <Button className="bg-orange-600 hover:bg-orange-700 text-white">
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

export default FestiveCollectionPage;

