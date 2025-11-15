// import { useEffect, useState } from "react";
// import axios from "../services/axiosInstance";

// export default function AdminDashboard() {
//   const [tab, setTab] = useState("users");
//   const [users, setUsers] = useState([]);
//   const [complaints, setComplaints] = useState([]);
//   const [orders, setOrders] = useState([]);

//   // Fetch all data
//   useEffect(() => {
//     fetchUsers();
//     fetchComplaints();
//     fetchOrders();
//   }, []);

//   const fetchUsers = async () => {
//     const res = await axios.get("/admin/users");
//     setUsers(res.data);
//   };

//   const fetchComplaints = async () => {
//     const res = await axios.get("/admin/complaints");
//     setComplaints(res.data);
//   };

//   const fetchOrders = async () => {
//     const res = await axios.get("/admin/orders");
//     setOrders(res.data);
//   };

//   const verifyUser = async (id) => {
//     await axios.patch(`/admin/verify/${id}`);
//     fetchUsers();
//   };

//   const rejectUser = async (id) => {
//     await axios.patch(`/admin/reject/${id}`);
//     fetchUsers();
//   };

//   //backend 
//   router.get("/users", getAllUsers);
// router.patch("/verify/:id", verifyUser);
// router.patch("/reject/:id", rejectUser);

// router.get("/complaints", getAllComplaints);
// router.get("/orders", getAllOrders);


//   return (
//     <div className="min-h-screen bg-gray-100 p-6">
//       {/* Header */}
//       <div className="bg-white p-5 shadow rounded-xl flex justify-between items-center">
//         <h1 className="text-2xl font-bold text-green-700">
//           AgroLink Ethiopia – Admin Dashboard
//         </h1>
//         <button className="px-4 py-2 bg-red-500 text-white rounded-lg">
//           Logout
//         </button>
//       </div>

//       {/* Tabs */}
//       <div className="flex gap-3 mt-6">
//         {["users", "complaints", "orders"].map((t) => (
//           <button
//             key={t}
//             onClick={() => setTab(t)}
//             className={`px-4 py-2 rounded-lg ${
//               tab === t ? "bg-green-600 text-white" : "bg-white shadow"
//             }`}
//           >
//             {t === "users" ? "User Verification" : null}
//             {t === "complaints" ? "Complaints" : null}
//             {t === "orders" ? "Orders" : null}
//           </button>
//         ))}
//       </div>

//       {/* USERS TAB */}
//       {tab === "users" && (
//         <div className="bg-white p-5 mt-4 rounded-xl shadow">
//           <h2 className="text-xl font-semibold mb-4">Pending User Verification</h2>

//           <div className="overflow-x-auto">
//             <table className="w-full table-auto">
//               <thead>
//                 <tr className="bg-gray-200 text-left">
//                   <th className="p-2">Name</th>
//                   <th className="p-2">Role</th>
//                   <th className="p-2">Phone</th>
//                   <th className="p-2">ID File</th>
//                   <th className="p-2">Status</th>
//                   <th className="p-2">Actions</th>
//                 </tr>
//               </thead>

//               <tbody>
//                 {users.map((u) => (
//                   <tr key={u._id} className="border-b">
//                     <td className="p-2">{u.name}</td>
//                     <td className="p-2 capitalize">{u.role}</td>
//                     <td className="p-2">{u.phone}</td>

//                     <td className="p-2">
//                       {u.idFile ? (
//                         <a
//                           href={u.idFile}
//                           target="_blank"
//                           className="text-blue-600 underline"
//                         >
//                           View File
//                         </a>
//                       ) : (
//                         <span className="text-gray-500">No Document</span>
//                       )}
//                     </td>

//                     <td className="p-2">
//                       {u.verified ? (
//                         <span className="text-green-600 font-bold">Verified</span>
//                       ) : (
//                         <span className="text-red-500 font-bold">Pending</span>
//                       )}
//                     </td>

//                     <td className="p-2">
//                       {!u.verified && (
//                         <>
//                           <button
//                             onClick={() => verifyUser(u._id)}
//                             className="px-3 py-1 bg-green-600 text-white rounded-lg mr-2"
//                           >
//                             Approve
//                           </button>
//                           <button
//                             onClick={() => rejectUser(u._id)}
//                             className="px-3 py-1 bg-red-600 text-white rounded-lg"
//                           >
//                             Reject
//                           </button>
//                         </>
//                       )}
//                     </td>
//                   </tr>
//                 ))}
//               </tbody>
//             </table>
//           </div>
//         </div>
//       )}

//       {/* COMPLAINTS TAB */}
//       {tab === "complaints" && (
//         <div className="bg-white p-5 mt-4 rounded-xl shadow">
//           <h2 className="text-xl font-semibold mb-4">User Complaints</h2>

//           {complaints.map((c) => (
//             <div
//               key={c._id}
//               className="border p-4 rounded-lg mb-3 bg-gray-50 shadow-sm"
//             >
//               <p><strong>Order ID:</strong> {c.orderId}</p>
//               <p><strong>From:</strong> {c.complainantName}</p>
//               <p><strong>Issue:</strong> {c.details}</p>

//               <span
//                 className={`px-3 py-1 mt-2 inline-block rounded-full ${
//                   c.status === "open"
//                     ? "bg-red-500 text-white"
//                     : "bg-green-500 text-white"
//                 }`}
//               >
//                 {c.status}
//               </span>
//             </div>
//           ))}
//         </div>
//       )}

//       {/* ORDERS TAB */}
//       {tab === "orders" && (
//         <div className="bg-white p-5 mt-4 rounded-xl shadow">
//           <h2 className="text-xl font-semibold mb-4">Order Overview</h2>

//           <div className="overflow-x-auto">
//             <table className="w-full table-auto">
//               <thead>
//                 <tr className="bg-gray-200 text-left">
//                   <th className="p-2">Order ID</th>
//                   <th className="p-2">Buyer</th>
//                   <th className="p-2">Seller</th>
//                   <th className="p-2">Total</th>
//                   <th className="p-2">Escrow Status</th>
//                 </tr>
//               </thead>

//               <tbody>
//                 {orders.map((o) => (
//                   <tr key={o._id} className="border-b">
//                     <td className="p-2">{o._id}</td>
//                     <td className="p-2">{o.buyerName}</td>
//                     <td className="p-2">{o.sellerName}</td>
//                     <td className="p-2">{o.totalPrice} ETB</td>
//                     <td className="p-2 capitalize">{o.escrowStatus}</td>
//                   </tr>
//                 ))}
//               </tbody>
//             </table>
//           </div>
//         </div>
//       )}
//     </div>
//   );
// }



export default function AdminDashboard() {
  return (
    <div className="min-h-screen bg-gray-100 p-6">

      {/* Header */}
      <div className="bg-white p-5 shadow rounded-xl flex justify-between items-center">
        <h1 className="text-2xl font-bold text-green-700">
          AgroLink Ethiopia – Admin Dashboard
        </h1>
        <button className="px-4 py-2 bg-red-500 text-white rounded-lg">
          Logout
        </button>
      </div>

      {/* Tabs */}
      <div className="flex gap-3 mt-6">
        <button className="px-4 py-2 rounded-lg bg-green-600 text-white">User Verification</button>
        <button className="px-4 py-2 rounded-lg bg-white shadow">Complaints</button>
        <button className="px-4 py-2 rounded-lg bg-white shadow">Orders</button>
      </div>

      {/* USERS TAB (DESIGN ONLY) */}
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
              {/* Sample Row */}
              <tr className="border-b">
                <td className="p-2">Abebe Bekele</td>
                <td className="p-2 capitalize">farmer</td>
                <td className="p-2">+251912345678</td>
                <td className="p-2">
                  <span className="text-blue-600 underline cursor-pointer">View File</span>
                </td>
                <td className="p-2">
                  <span className="text-red-500 font-bold">Pending</span>
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

              <tr className="border-b">
                <td className="p-2">Fikirte Mulu</td>
                <td className="p-2 capitalize">trader</td>
                <td className="p-2">+251900112233</td>
                <td className="p-2 text-gray-500">No Document</td>
                <td className="p-2">
                  <span className="text-red-500 font-bold">Pending</span>
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

            </tbody>
          </table>
        </div>
      </div>

      {/* COMPLAINTS TAB (DESIGN ONLY) */}
      <div className="bg-white p-5 mt-6 rounded-xl shadow">
        <h2 className="text-xl font-semibold mb-4">User Complaints</h2>

        {/* Sample Complaint Card */}
        <div className="border p-4 rounded-lg mb-3 bg-gray-50 shadow-sm">
          <p><strong>Order ID:</strong> ORD12345</p>
          <p><strong>From:</strong> Abebe Bekele</p>
          <p><strong>Issue:</strong> Wrong product delivered</p>

          <span className="px-3 py-1 mt-2 inline-block rounded-full bg-red-500 text-white">
            open
          </span>
        </div>

        <div className="border p-4 rounded-lg mb-3 bg-gray-50 shadow-sm">
          <p><strong>Order ID:</strong> ORD98765</p>
          <p><strong>From:</strong> Selamawit Kassa</p>
          <p><strong>Issue:</strong> Delivery delay</p>

          <span className="px-3 py-1 mt-2 inline-block rounded-full bg-green-500 text-white">
            resolved
          </span>
        </div>
      </div>

      {/* ORDERS TAB (DESIGN ONLY) */}
      <div className="bg-white p-5 mt-6 rounded-xl shadow">
        <h2 className="text-xl font-semibold mb-4">Order Overview</h2>

        <div className="overflow-x-auto">
          <table className="w-full table-auto">
            <thead>
              <tr className="bg-gray-200 text-left">
                <th className="p-2">Order ID</th>
                <th className="p-2">Buyer</th>
                <th className="p-2">Seller</th>
                <th className="p-2">Total</th>
                <th className="p-2">Escrow Status</th>
              </tr>
            </thead>

            <tbody>
              <tr className="border-b">
                <td className="p-2">ORD12345</td>
                <td className="p-2">Abebe</td>
                <td className="p-2">Mekdes</td>
                <td className="p-2">5000 ETB</td>
                <td className="p-2 capitalize">holding</td>
              </tr>

              <tr className="border-b">
                <td className="p-2">ORD67890</td>
                <td className="p-2">Teshome</td>
                <td className="p-2">Alemu</td>
                <td className="p-2">3200 ETB</td>
                <td className="p-2 capitalize">released</td>
              </tr>

            </tbody>
          </table>
        </div>
      </div>

    </div>
  );
}
