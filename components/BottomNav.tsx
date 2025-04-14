// components/BottomNav.tsx
'use client';

import React from 'react';
import { usePathname } from 'next/navigation';
import Link from 'next/link';

const BottomNav = () => {
  const pathname = usePathname();

  const navItems = [
    { label: 'Home', icon: '🏠', href: '/' },
    { label: 'Orders', icon: '📄', href: '/orders' },
    { label: 'Offers', icon: '⚡', href: '/offers' },
    { label: 'Cart', icon: '🛒', href: '/cart' },
    { label: 'Account', icon: '👤', href: '/account' },
  ];

  return (
    <footer className="fixed bottom-0 left-0 right-0 bg-white shadow-md flex justify-around py-2 text-gray-700 z-50">
      {navItems.map((item) => (
        <Link
          key={item.label}
          href={item.href}
          className={`flex flex-col items-center ${
            pathname === item.href ? 'text-green-500' : 'text-gray-500'
          }`}
        >
          <span className="text-lg">{item.icon}</span>
          <span className="text-xs">{item.label}</span>
        </Link>
      ))}
    </footer>
  );
};

export default BottomNav;