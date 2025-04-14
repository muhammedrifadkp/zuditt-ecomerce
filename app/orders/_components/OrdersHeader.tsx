// app/orders/_components/OrdersHeader.tsx
'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';

export default function OrdersHeader() {
  const pathname = usePathname();
  
  return (
    <>
      <div className="bg-green-500 px-4 pt-10 pb-6 text-white">
        {/* <div className="flex justify-between items-center mb-2">
          <span className="text-sm">9:41</span>
        </div> */}
        <h1 className="text-2xl font-bold">My Orders</h1>
      </div>

      <div className="flex border-b bg-white">
        <Link 
          href="/orders" 
          className={`flex-1 py-3 font-medium text-center ${
            pathname === '/orders' ? 'border-b-2 border-green-500 text-green-500' : 'text-gray-500'
          }`}
        >
          All
        </Link>
        <Link 
          href="/orders/ongoing" 
          className={`flex-1 py-3 font-medium text-center ${
            pathname === '/orders/ongoing' ? 'border-b-2 border-green-500 text-green-500' : 'text-gray-500'
          }`}
        >
          Ongoing
        </Link>
        <Link 
          href="/orders/delivered" 
          className={`flex-1 py-3 font-medium text-center ${
            pathname === '/orders/delivered' ? 'border-b-2 border-green-500 text-green-500' : 'text-gray-500'
          }`}
        >
          Delivered
        </Link>
      </div>
    </>
  );
}