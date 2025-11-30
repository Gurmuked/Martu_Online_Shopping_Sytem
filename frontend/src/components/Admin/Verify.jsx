import React from "react";

export default function UsersTab() {
  // Dynamic users array
  const users = [
    {
      name: "Abebe Bekele",
      role: "farmer",
      phone: "+251912345678",
      file: "View File",
      status: "Pending",
    },
    {
      name: "Fikirte Mulu",
      role: "trader",
      phone: "+251900112233",
      file: null,
      status: "Pending",
    },
    // You can add more users here
  ];

  return (
    <div className="bg-white p-5 mt-4 rounded-xl shadow">
      <h2 className="text-xl font-semibold mb-4">Pending User Verification</h2>

      <div className="overflow-x-auto">
        <table className="w-full table-auto">
          <thead>
            <tr className="bg-gray-200 text-left">
              <th className="p-2">Name</th>
              <th className="p-2">Role</th>
              <th className="p-2">Phone</th>
              <th className="p-2">ID File</th>
              <th className="p-2">Status</th>
              <th className="p-2">Actions</th>
            </tr>
          </thead>

          <tbody>
            {users.map((user, index) => (
              <tr key={index} className="border-b">
                <td className="p-2">{user.name}</td>
                <td className="p-2 capitalize">{user.role}</td>
                <td className="p-2">{user.phone}</td>

                <td className="p-2">
                  {user.file ? (
                    <span className="text-blue-600 underline cursor-pointer">
                      {user.file}
                    </span>
                  ) : (
                    <span className="text-gray-500">No Document</span>
                  )}
                </td>

                <td className="p-2">
                  <span className="text-red-500 font-bold">{user.status}</span>
                </td>

                <td className="p-2 space-x-2">
                  <button className="px-3 py-1 bg-green-600 text-white rounded-lg">
                    Approve
                  </button>
                  <button className="px-3 py-1 bg-red-600 text-white rounded-lg">
                    Reject
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
