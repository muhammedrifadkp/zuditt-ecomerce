// app/orders/_components/OrderCard.tsx
'use client';

export default function OrderCard({
  status,
  restaurant,
  time,
  statusText,
  estimateTime,
  items,
  total,
  action
}: {
  status: 'ongoing' | 'delivered';
  restaurant: string;
  time: string;
  statusText?: string;
  estimateTime?: string;
  items: { name: string; price: string }[];
  total: string;
  action: 'track' | 'review';
}) {
  return (
    <div className="bg-white rounded-lg p-4 shadow-sm mb-4">
      <div className="flex justify-between items-center mb-2">
        <span className="font-bold">{restaurant}</span>
        <span className="text-sm text-gray-500">{time}</span>
      </div>

      {status === 'ongoing' && (
        <div className="mb-3">
          <p className="font-medium">{statusText}</p>
          <p className="text-sm text-gray-500">Estimate Time {estimateTime}</p>
        </div>
      )}

      <div className="border-t pt-3 space-y-2">
        {items.map((item, index) => (
          <div key={index} className="flex justify-between">
            <span className="text-gray-600">{item.name}</span>
            <span>{item.price}</span>
          </div>
        ))}
      </div>

      <div className="border-t pt-3 mt-2 flex justify-between font-medium">
        <span>Total</span>
        <span>{total}</span>
      </div>

      {status === 'ongoing' ? (
        <button className="w-full border border-green-500 text-green-500 py-2 rounded-lg mt-3 font-medium">
          Track My Order
        </button>
      ) : (
        <div className="flex space-x-2 mt-3">
          <button className="flex-1 border border-green-500 text-green-500 py-2 rounded-lg font-medium">
            Reorder
          </button>
          <button className="flex-1 bg-green-500 text-white py-2 rounded-lg font-medium">
            Review
          </button>
        </div>
      )}
    </div>
  );
}