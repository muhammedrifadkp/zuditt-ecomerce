// app/offers/page.tsx
export default function OffersPage() {
    return (
      <div className="min-h-screen bg-gray-100 pb-20">
        {/* Header */}
        <header className="bg-green-500 px-4 pt-10 pb-6 text-white">
          <h1 className="text-2xl font-bold">My voucher</h1>
        </header>
  
        <div className="px-4 space-y-4">
          {/* Voucher Code Input */}
          <div className="bg-white rounded-lg p-4">
            <h3 className="font-bold text-lg mb-3">Type voucher code</h3>
            <div className="flex space-x-2">
              <input
                type="text"
                placeholder="Enter voucher code"
                className="flex-1 border rounded-lg px-3 py-2"
              />
              <button className="bg-green-500 text-white px-4 py-2 rounded-lg font-medium">
                Apply
              </button>
            </div>
          </div>
  
          {/* Voucher List */}
          <div className="space-y-4">
            {/* Voucher 1 */}
            <div className="bg-white rounded-lg p-4">
              <div className="flex justify-between items-start mb-3">
                <div>
                  <span className="text-2xl font-bold">¥10</span>
                  <p className="text-sm text-gray-500 mt-1">
                    Discount ¥10 for all bill from ¥50, only online shopping
                  </p>
                  <p className="text-xs text-gray-400 mt-1">
                    Expired date : 10 Sep, 2020
                  </p>
                </div>
                <button className="text-green-500 border border-green-500 px-3 py-1 rounded-lg">
                  Copy
                </button>
              </div>
            </div>
  
            {/* Voucher 2 */}
            <div className="bg-white rounded-lg p-4">
              <div className="flex justify-between items-start mb-3">
                <div>
                  <span className="text-2xl font-bold">-10%</span>
                  <p className="text-sm text-gray-500 mt-1">
                    Discount ¥10 for all bill from ¥500, only online shopping
                  </p>
                  <p className="text-xs text-gray-400 mt-1">
                    Expired date : 10 Sep, 2020
                  </p>
                </div>
                <button className="text-green-500 border border-green-500 px-3 py-1 rounded-lg">
                  Copy
                </button>
              </div>
            </div>
  
            {/* Voucher 3 */}
            <div className="bg-white rounded-lg p-4">
              <div className="flex justify-between items-start mb-3">
                <div>
                  <span className="text-2xl font-bold">30</span>
                  <p className="text-sm text-gray-500 mt-1">
                    Discount ¥10 for all bill from ¥500, only online shopping
                  </p>
                  <p className="text-xs text-gray-400 mt-1">
                    Expired date : 10 Sep, 2020
                  </p>
                </div>
                <button className="text-green-500 border border-green-500 px-3 py-1 rounded-lg">
                  Copy
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }