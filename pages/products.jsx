'use client';

import { useState } from 'react';
// import Header from '../components/Header';
import ProductCard from '../components/ProductCard';
import { Sliders as Slider, ChevronDown } from 'lucide-react';

const products = [
  {
    id: 1,
    name: 'Fresh Organic Spinach',
    price: 2.99,
    oldPrice: 3.99,
    image: '/images/products/spinach.jpg',
    category: 'Vegetables',
    rating: 4.5,
  },
  // Add more products
];

const categories = ['All', 'Vegetables', 'Fruits', 'Meat', 'Fish', 'Dairy', 'Bakery'];

export default function Products() {
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [priceRange, setPriceRange] = useState([0, 100]);
  const [sortBy, setSortBy] = useState('featured');
  const [showFilters, setShowFilters] = useState(false);

  return (
    <div className="min-h-screen bg-gray-50">
      {/* <Header /> */}
      
      <div className="container mx-auto px-4 py-8">
        <div className="flex flex-col md:flex-row gap-8">
          {/* Filters - Desktop */}
          <div className="hidden md:block w-64 bg-white p-6 rounded-lg shadow-sm h-fit">
            <div className="mb-6">
              <h3 className="font-semibold text-gray-800 mb-4">Categories</h3>
              <div className="space-y-2">
                {categories.map((category) => (
                  <button
                    key={category}
                    className={`block w-full text-left px-2 py-1.5 rounded ${
                      selectedCategory === category
                        ? 'bg-green-600 text-white'
                        : 'text-gray-600 hover:bg-gray-100'
                    }`}
                    onClick={() => setSelectedCategory(category)}
                  >
                    {category}
                  </button>
                ))}
              </div>
            </div>

            <div className="mb-6">
              <h3 className="font-semibold text-gray-800 mb-4">Price Range</h3>
              <div className="px-2">
                <div className="mb-4">
                  <input
                    type="range"
                    min="0"
                    max="100"
                    value={priceRange[1]}
                    onChange={(e) => setPriceRange([priceRange[0], parseInt(e.target.value)])}
                    className="w-full"
                  />
                </div>
                <div className="flex justify-between text-sm text-gray-600">
                  <span>£{priceRange[0]}</span>
                  <span>£{priceRange[1]}</span>
                </div>
              </div>
            </div>
          </div>

          {/* Mobile Filters Button */}
          <button
            className="md:hidden w-full bg-white p-4 rounded-lg shadow-sm flex items-center justify-between"
            onClick={() => setShowFilters(!showFilters)}
          >
            <span className="flex items-center gap-2">
              <Slider className="h-5 w-5" />
              Filters
            </span>
            <ChevronDown className={`h-5 w-5 transform transition-transform ${showFilters ? 'rotate-180' : ''}`} />
          </button>

          {/* Mobile Filters */}
          {showFilters && (
            <div className="md:hidden bg-white p-6 rounded-lg shadow-sm">
              {/* Add mobile filters content */}
            </div>
          )}

          {/* Products Grid */}
          <div className="flex-1">
            <div className="flex justify-between items-center mb-6">
              <h1 className="text-2xl font-bold text-gray-800">All Products</h1>
              <select
                value={sortBy}
                onChange={(e) => setSortBy(e.target.value)}
                className="border rounded-lg px-4 py-2"
              >
                <option value="featured">Featured</option>
                <option value="price-low">Price: Low to High</option>
                <option value="price-high">Price: High to Low</option>
                <option value="rating">Highest Rated</option>
              </select>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
              {products.map((product) => (
                <ProductCard key={product.id} product={product} />
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}