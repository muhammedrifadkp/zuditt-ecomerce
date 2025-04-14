// app/account/page.tsx
export default function AccountPage() {
  return (
    <div className="min-h-screen bg-gray-100 pb-20">
      {/* Header */}
      <header className="bg-green-500 px-4 pt-10 pb-6 text-white">
        <h1 className="text-2xl font-bold">My Profile</h1>
      </header>

      {/* User Info Section */}
      <div className="bg-white p-4 mb-4">
        <div className="flex items-center space-x-3 mb-4">
          <div className="w-12 h-12 bg-gray-300 rounded-full"></div>
          <div>
            <h2 className="font-bold">User Name</h2>
            <p className="text-gray-500">91999999999</p>
          </div>
        </div>
      </div>

      {/* Main Sections */}
      <div className="px-4 space-y-4">

        {/* General Section */}
        <div className="bg-white rounded-lg p-4">
          <h3 className="font-bold text-lg mb-3">General</h3>
          <div className="space-y-3">
            <div className="flex justify-between items-center border-b pb-2">
              <span>Account Information</span>
              <span className="text-gray-400">Change your Account information</span>
            </div>
            <div className="flex justify-between items-center border-b pb-2">
              <span>Change your Password</span>
              <span className="text-gray-400">Update password</span>
            </div>
          </div>
        </div>

        {/* My Orders Section */}
        <div className="bg-white rounded-lg p-4">
          <h3 className="font-bold text-lg mb-3">My Orders</h3>
          <div className="flex justify-between items-center">
            <span>View your orders</span>
            <span className="text-gray-400">History</span>
          </div>
        </div>

        {/* Wallet Section */}
        <div className="bg-white rounded-lg p-4">
          <h3 className="font-bold text-lg mb-3">Wallet</h3>
          <div className="flex justify-between items-center">
            <span>Add your Credit & Debit cards</span>
            <span className="text-gray-400">Payment methods</span>
          </div>
        </div>

        {/* Delivery Locations */}
        <div className="bg-white rounded-lg p-4">
          <h3 className="font-bold text-lg mb-3">Delivery Locations</h3>
          <div className="flex justify-between items-center">
            <span>Change your Delivery Locations</span>
            <span className="text-gray-400">Manage</span>
          </div>
        </div>

        {/* Invite Friends */}
        <div className="bg-white rounded-lg p-4">
          <h3 className="font-bold text-lg mb-3">Invite your friends</h3>
          <div className="flex justify-between items-center">
            <span>Get $25 for each invitation!</span>
            <span className="text-gray-400">Share</span>
          </div>
        </div>

        {/* More Section */}
        <div className="bg-white rounded-lg p-4">
          <h3 className="font-bold text-lg mb-3">More</h3>
          <div className="space-y-3">
            <div className="flex justify-between items-center border-b pb-2">
              <span>Rate Us</span>
              <span className="text-gray-400">Feedback</span>
            </div>
            <div className="flex justify-between items-center">
              <span>Subscription</span>
              <span className="text-gray-400">Choose your plan</span>
            </div>
          </div>
        </div>

        {/* Logout */}
        <div className="bg-white rounded-lg p-4">
          <div className="flex justify-between items-center text-red-500">
            <span>Logout</span>
            <span>Logout from this account</span>
          </div>
        </div>

        {/* Balance Section */}
        <div className="bg-white rounded-lg p-4">
          <div className="flex justify-between items-center mb-2">
            <span className="text-gray-500">Your Balance</span>
            <span className="font-bold">$2.398</span>
          </div>
          <button className="w-full bg-green-500 text-white py-2 rounded-lg">
            Request for Top Up
          </button>
        </div>

        {/* Transactions Section */}
        <div className="bg-white rounded-lg p-4">
          <h3 className="font-bold text-lg mb-3">Latest Transaction</h3>
          <div className="space-y-4">
            <div>
              <div className="flex justify-between">
                <span className="font-medium">Top Up</span>
                <span className="text-green-500">+$117 Success</span>
              </div>
              <p className="text-gray-500 text-sm">From Kaming Store</p>
            </div>
            <div>
              <div className="flex justify-between">
                <span className="font-medium">Transfer</span>
                <span className="text-red-500">-$35 Success</span>
              </div>
              <p className="text-gray-500 text-sm">To Siverns Smra</p>
            </div>
            <div>
              <div className="flex justify-between">
                <span className="font-medium">Payment</span>
                <span className="text-red-500">-$4129 Success</span>
              </div>
              <p className="text-gray-500 text-sm">To ID 35370K</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}