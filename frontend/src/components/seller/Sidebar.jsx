import {
  LayoutDashboard,
  Package,
  PlusCircle,
  ShoppingCart,
  BarChart2,
  CreditCard,
  User,
  Settings,
  LogOut,
} from "lucide-react";

const SellerSidebar = () => {
  const menu = [
    { name: "Dashboard", icon: <LayoutDashboard size={18} />, path: "/seller/dashboard" },
    { name: "Manage Products", icon: <Package size={18} />, path: "/seller/products" },
    { name: "Add Product", icon: <PlusCircle size={18} />, path: "/seller/add-product" },
    { name: "Orders", icon: <ShoppingCart size={18} />, path: "/seller/orders" },
    { name: "Transactions", icon: <CreditCard size={18} />, path: "/seller/transactions" },
    { name: "Analytics", icon: <BarChart2 size={18} />, path: "/seller/analytics" },
    { name: "Profile", icon: <User size={18} />, path: "/seller/profile" },
    { name: "Settings", icon: <Settings size={18} />, path: "/seller/settings" },
  ];

  return (
    <aside className="w-72 bg-white border-r border-gray-200 min-h-screen p-5 flex flex-col">
      <div className="mb-6 flex items-center gap-3">
        <div className="w-10 h-10 rounded-lg bg-green-700 flex items-center justify-center text-white font-bold">
          AG
        </div>
        <div>
          <h1 className="text-lg font-semibold text-gray-800">AgriMarket</h1>
          <p className="text-xs text-gray-500">Seller Portal</p>
        </div>
      </div>

        <ul className="space-y-3">
          {menu.map((item) => (
            <li
              key={item.name}
              className= "flex items-center gap-3 p-2 rounded-lg hover:bg-green-100 cursor-pointer"
            >
              {item.icon}
              <span>{item.name}</span>
            </li>
          ))}
        </ul>

      <button className="flex items-center gap-3 text-red-600 mt-auto px-3 py-2 rounded-md hover:bg-red-50">
        <LogOut size={18} /> Logout
      </button>
    </aside>
  );
};

export default SellerSidebar;
