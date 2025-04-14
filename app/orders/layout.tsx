'use client';

import OrdersHeader from './_components/OrdersHeader';

export default function OrdersLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <div className="min-h-screen bg-gray-100 pb-20">
      <OrdersHeader />
      <div className="px-4 space-y-4 mt-4">
        {children}
      </div>
    </div>
  );
}