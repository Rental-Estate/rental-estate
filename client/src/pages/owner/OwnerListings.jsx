import React from "react";

const mockListings = [
  {
    id: 1,
    name: "Green Apartments",
    address: "123 Palm St, Mumbai",
    status: "Active",
    inquiries: 5,
  },
  {
    id: 2,
    name: "Sunrise Villa",
    address: "44 Ocean Rd, Pune",
    status: "Inactive",
    inquiries: 2,
  },
];

const OwnerListings = () => {
  return (
    <div className="p-6 max-w-2xl mx-auto">
      <h1 className="text-2xl font-bold mb-4">Your Listings</h1>
      <p className="text-gray-600 dark:text-gray-300 mb-8">
        Manage all your listed properties here.
      </p>
      {/* Listings Table */}
      <div className="bg-white dark:bg-gray-800 rounded-lg shadow">
        <table className="min-w-full divide-y divide-gray-200 dark:divide-gray-700">
          <thead>
            <tr>
              <th className="px-4 py-2 text-left text-sm font-semibold text-gray-700 dark:text-gray-200">
                Name
              </th>
              <th className="px-4 py-2 text-left text-sm font-semibold text-gray-700 dark:text-gray-200">
                Address
              </th>
              <th className="px-4 py-2 text-center text-sm font-semibold text-gray-700 dark:text-gray-200">
                Status
              </th>
              <th className="px-4 py-2 text-center text-sm font-semibold text-gray-700 dark:text-gray-200">
                Inquiries
              </th>
              <th className="px-4 py-2 text-center text-sm font-semibold text-gray-700 dark:text-gray-200">
                Actions
              </th>
            </tr>
          </thead>
          <tbody>
            {mockListings.map((listing) => (
              <tr key={listing.id} className="hover:bg-gray-50 dark:hover:bg-gray-700 transition">
                <td className="px-4 py-2">{listing.name}</td>
                <td className="px-4 py-2">{listing.address}</td>
                <td className="px-4 py-2 text-center">
                  <span
                    className={`px-2 py-1 rounded text-xs font-bold
                      ${listing.status === "Active"
                        ? "bg-green-100 text-green-700 dark:bg-green-900 dark:text-green-100"
                        : "bg-red-100 text-red-700 dark:bg-red-900 dark:text-red-100"
                    }`}
                  >
                    {listing.status}
                  </span>
                </td>
                <td className="px-4 py-2 text-center">{listing.inquiries}</td>
                <td className="px-4 py-2 text-center">
                  <button className="text-blue-600 hover:text-blue-800 font-semibold mr-2">
                    Edit
                  </button>
                  <button className="text-red-600 hover:text-red-800 font-semibold">
                    Delete
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
        {mockListings.length === 0 && (
          <div className="text-center text-gray-500 dark:text-gray-400 py-6">
            No properties found.
          </div>
        )}
      </div>
    </div>
  );
};

export default OwnerListings;
