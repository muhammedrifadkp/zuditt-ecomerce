// app/cart/page.tsx
import Image from 'next/image';

export default function CartPage() {
  return (
    <div className="min-h-screen bg-gray-100 pb-20">
      {/* Header */}
      <header className="bg-green-500 px-4 pt-10 pb-6 text-white">
        <h1 className="text-2xl font-bold">My cart</h1>
      </header>

      <div className="px-4 space-y-4">
        {/* Delivery Address */}
        <div className="bg-white rounded-lg p-4">
          <div className="flex justify-between items-center">
            <div>
              <p className="font-medium">204 Foxrun St.</p>
              <p className="text-gray-500">Davison, MI 48423</p>
            </div>
            <button className="text-green-500 font-medium">Change</button>
          </div>
        </div>

        {/* Cart Items */}
        <div className="bg-white rounded-lg p-4">
          {/* Crab */}
          <div className="flex items-center py-3 border-b">
            <div className="relative w-16 h-16 mr-3">
              <Image 
                src="\home\products\carb.png" 
                alt="Crab" 
                fill
                className="object-cover rounded-lg"
              />
            </div>
            <div className="flex-1">
              <div className="flex justify-between">
                <p className="font-medium">Crab (2kg)</p>
                <p className="font-bold">¥150</p>
              </div>
              <div className="flex items-center space-x-2 mt-1">
                <button className="w-6 h-6 flex items-center justify-center border rounded-full">-</button>
                <span>1</span>
                <button className="w-6 h-6 flex items-center justify-center border rounded-full">+</button>
              </div>
            </div>
          </div>

          {/* Avocado */}
          <div className="flex items-center py-3 border-b">
            <div className="relative w-16 h-16 mr-3">
              <Image 
                src="\home\products\avocado.png" 
                alt="Avocado" 
                fill
                className="object-cover rounded-lg"
              />
            </div>
            <div className="flex-1">
              <div className="flex justify-between">
                <p className="font-medium">Avocado (1kg)</p>
                <p className="font-bold">¥20</p>
              </div>
              <div className="flex items-center space-x-2 mt-1">
                <button className="w-6 h-6 flex items-center justify-center border rounded-full">-</button>
                <span>3</span>
                <button className="w-6 h-6 flex items-center justify-center border rounded-full">+</button>
              </div>
            </div>
          </div>

          {/* Egg */}
          <div className="flex items-center py-3">
            <div className="relative w-16 h-16 mr-3">
              <Image 
                src="\home\products\egg.png" 
                alt="Eggs" 
                fill
                className="object-cover rounded-lg"
              />
            </div>
            <div className="flex-1">
              <div className="flex justify-between">
                <p className="font-medium">Egg (1 pack)</p>
                <p className="font-bold">¥12</p>
              </div>
              <div className="flex items-center space-x-2 mt-1">
                <button className="w-6 h-6 flex items-center justify-center border rounded-full">-</button>
                <span>2</span>
                <button className="w-6 h-6 flex items-center justify-center border rounded-full">+</button>
              </div>
            </div>
          </div>
        </div>

        {/* Delivery Tip Section */}
        <div className="bg-white rounded-lg p-4">
          <h3 className="font-bold text-lg mb-3">Delivery Tip</h3>
          <div className="flex space-x-2">
            <button className="px-3 py-1 border rounded-full">¥5</button>
            <button className="px-3 py-1 border rounded-full">¥10</button>
            <button className="px-3 py-1 border rounded-full">¥15</button>
            <button className="px-3 py-1 border rounded-full">Other</button>
          </div>
        </div>

        {/* Order Summary */}
        <div className="bg-white rounded-lg p-4">
          <h3 className="font-bold text-lg mb-3">Order Summary</h3>
          <div className="space-y-2">
            <div className="flex justify-between">
              <span className="text-gray-500">Subtotal</span>
              <span>¥18.02</span>
            </div>
            <div className="flex justify-between">
              <span className="text-gray-500">Delivery</span>
              <span>¥3.99</span>
            </div>
            <div className="flex justify-between">
              <span className="text-gray-500">Service Fee</span>
              <span>¥10</span>
            </div>
            <div className="flex justify-between">
              <span className="text-gray-500">Sale Tax</span>
              <span>¥7.88</span>
            </div>
            <div className="flex justify-between">
              <span className="text-gray-500">Total Discount</span>
              <span className="text-green-500">-¥17.88</span>
            </div>
          </div>

          <div className="border-t mt-3 pt-3 flex justify-between font-bold">
            <span>Total</span>
            <span>¥117.88</span>
          </div>
        </div>

        {/* Discount Section */}
        <div className="bg-white rounded-lg p-4">
          <div className="flex justify-between items-center">
            <div>
              <p className="font-medium">Discount</p>
              <p className="text-gray-500 text-sm">¥2.00 applied</p>
            </div>
            <span className="text-gray-400"></span>
          </div>
        </div>
        
        <br /><br /><br /><br /><br /><br />

        {/* Checkout Section */}
        <div className="fixed bottom-16 left-0 right-0 px-4">
          <div className="bg-white rounded-lg p-4 shadow-lg">
            <div className="flex justify-between items-center mb-2">
              <span className="text-gray-500">Total (Inc shipping fee)</span>
              <span className="font-bold text-lg">¥190.00</span>
            </div>
            <button className="w-full bg-green-500 text-white py-3 rounded-lg font-bold">
              Check out
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}