'use client';

import { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { FiMapPin, FiShoppingCart } from 'react-icons/fi';
import { HiOutlineUser } from 'react-icons/hi';
import { MdSearch } from 'react-icons/md';
import BottomNav from '../components/BottomNav';

const categories = [
  { id: 1, name: 'Vegetables', image: '/home/categories/vegetables.png' },
  { id: 2, name: 'Fruits', image: '/home/categories/fruits.png' },
  { id: 3, name: 'Meat', image: '/home/categories/meat.png' },
  { id: 4, name: 'Fish', image: '/home/categories/fish.png' },
  { id: 5, name: 'Bread', image: '/home/categories/bread.png' },
  { id: 6, name: 'Nuts', image: '/home/categories/nuts.png' },
  { id: 7, name: 'Coffee Beans', image: '/home/categories/coffee.png' },
  { id: 8, name: 'Honey', image: '/home/categories/honey.png' },
];

const quickCategories = [
  { id: 1, name: 'Vegetable', image: '/home/quick/vegetable.png' },
  { id: 2, name: 'Meat', image: '/home/quick/meat.png' },
  { id: 3, name: 'Fruits', image: '/home/quick/fruits.png' }, // Changed from Seafood to Fruits
];

const popularProducts = [
  {
    id: 1,
    name: 'Celeriac',
    price: 5.22,
    unit: '/ kg',
    image: '/home/products/celeriac.png',
  },
  {
    id: 2,
    name: 'Radishes',
    price: 5.22,
    unit: '/ kg',
    image: '/home/products/radishes.png',
  },
  {
    id: 3,
    name: 'Asian Pear',
    price: 5.22,
    unit: '/ kg',
    image: '/home/products/asian-pear.png',
  },
];

export default function Home() {
  return (
    <div className="bg-white min-h-screen">
      {/* Header */}
      <header className="bg-green-500 px-4 pt-10 pb-6 text-white relative">
        <div className="flex items-center justify-between mb-4">
          <h1 className="text-2xl font-bold">CUTS</h1>
          <div className="flex items-center space-x-4">
            <FiShoppingCart className="text-2xl" />
            <HiOutlineUser className="text-2xl" />
          </div>
        </div>
        <div className="flex items-center mb-3 text-sm">
          <FiMapPin className="mr-1" />
          <span>204 Lorem Ipsum, MI 48423</span>
        </div>
        <div className="flex items-center bg-white rounded-md overflow-hidden px-2 py-1">
          <MdSearch className="text-gray-500 mr-2" />
          <input
            type="text"
            placeholder="Type something..."
            className="w-full outline-none text-gray-800"
          />
        </div>
      </header>

      {/* Promo Banner */}
      <section className="p-4">
        <Image
          src="/home/banner.png"
          alt="Grocery Sale"
          width={500}
          height={300}
          className="rounded-lg w-full"
        />
      </section>

      {/* Quick Categories */}
      <section className="mb-6">
        <div
          className="grid gap-3 text-center text-xs px-4"
          style={{
            gridTemplateColumns: 'repeat(auto-fit, minmax(80px, 1fr))',
          }}
        >
          {quickCategories.map((item) => (
            <div key={item.id} className="p-2 bg-gray-100 rounded-lg">
              <div className="w-12 h-12 bg-white mx-auto rounded-full mb-1 shadow overflow-hidden">
                <Image
                  src={item.image}
                  alt={item.name}
                  width={48}
                  height={48}
                  className="object-cover"
                />
              </div>
              <p>{item.name}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Popular Products */}
      <section className="px-4 mb-6">
        <h2 className="text-lg font-semibold mb-2">Popular</h2>
        <div className="grid grid-cols-3 gap-3">
          {popularProducts.map((product) => (
            <div key={product.id} className="bg-white p-2 rounded-lg shadow-sm text-center">
              <div className="w-full h-20 rounded mb-2 overflow-hidden relative">
                <Image src={product.image} alt={product.name} fill className="object-cover" />
              </div>
              <p className="text-sm font-semibold">{product.name}</p>
              <p className="text-green-600 text-xs">${product.price.toFixed(2)} {product.unit}</p>
              <button className="mt-1 w-full text-xs bg-green-500 text-white rounded py-1">Add to Cart</button>
            </div>
          ))}
        </div>
      </section>

      {/* Best Offers Banner */}
      <section className="px-4 mb-6">
        <h2 className="text-lg font-semibold mb-4">See our best offers</h2>
        <Image
          src="/home/best-offer.png"
          alt="Best Offers"
          width={500}
          height={300}
          className="rounded-lg w-full"
        />
      </section>

      {/* Categories Grid */}
      <section className="px-4 pb-20">
        <h2 className="text-lg font-semibold mb-4">Categories</h2>
        <div className="grid grid-cols-4 gap-4 text-center text-xs">
          {categories.map((cat) => (
            <div key={cat.id} className="flex flex-col items-center space-y-2">
              <div className="w-16 h-16 bg-gray-100 rounded-full overflow-hidden relative">
                <Image src={cat.image} alt={cat.name} fill className="object-cover rounded-full" />
              </div>
              <p>{cat.name}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Bottom Nav */}
      <BottomNav />
    </div>
  );
}