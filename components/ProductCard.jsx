'use client';

import Image from 'next/image';
import Link from 'next/link';
import { ShoppingCart } from 'lucide-react';

export default function ProductCard({ product }) {
  return (
    <div className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow duration-300">
      <Link href={`/product/${product.id}`}>
        <div className="relative h-48 w-full">
          <Image
            src={product.image}
            alt={product.name}
            fill
            className="object-cover"
          />
        </div>
      </Link>
      <div className="p-4">
        <Link href={`/product/${product.id}`}>
          <h3 className="text-lg font-semibold text-gray-800 mb-2">{product.name}</h3>
        </Link>
        <div className="flex items-center justify-between mb-2">
          <span className="text-green-600 font-bold">£{product.price.toFixed(2)}</span>
          {product.oldPrice && (
            <span className="text-gray-400 line-through text-sm">
              £{product.oldPrice.toFixed(2)}
            </span>
          )}
        </div>
        <button
          className="w-full bg-green-600 text-white py-2 px-4 rounded-full flex items-center justify-center space-x-2 hover:bg-green-700 transition-colors duration-300"
          onClick={() => {/* Add to cart logic */}}
        >
          <ShoppingCart className="h-5 w-5" />
          <span>Add to Cart</span>
        </button>
      </div>
    </div>
  );
}