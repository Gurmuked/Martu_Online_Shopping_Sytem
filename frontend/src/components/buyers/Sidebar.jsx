import { CiHome } from "react-icons/ci";
import { GiShoppingCart } from "react-icons/gi";
import { FaRegCreditCard } from "react-icons/fa";
import { IoIosSettings, IoIosLogOut } from "react-icons/io";
import { MdOutlineStarBorderPurple500 } from "react-icons/md";
import {CreditCard, User} from 'lucide-react';


const Sidebar = () => {
  const menu = [
    { name: "Dashboard", icon: <CiHome size={18} />, link: "/buyer-dashboard" },
    { name: "Browse Products", icon: <GiShoppingCart size={18} />, link: "/products" },
    { name: "My Orders", icon: <FaRegCreditCard size={18} />, link: "/orders" },
    { name: "Reviews", icon: <MdOutlineStarBorderPurple500 size={18} />, link: "/reviews" },
    { name: "Transactions", icon: <CreditCard size={18} />, path: "/seller/transactions" },
    { name: "Profile", icon: <User size={18} />, path: "/seller/profile" },
    { name: "Settings", icon: <IoIosSettings size={18} />, link: "/settings" },
  ];

  return (
    <aside className="w-72 bg-white border-r border-gray-200 h-[90vh] p-5 flex flex-col fixed">
        <div className="mb-6 flex items-center gap-3">
          <div className="w-10 h-10 rounded-lg bg-green-700 flex items-center justify-center text-white font-bold">
            AG
          </div>
          <div>
            <h1 className="text-lg font-semibold text-gray-800">AgriMarket</h1>
            <p className="text-xs text-gray-500">Buyer Portal</p>
          </div>
        </div>
        <ul className="space-y-3">
          {menu.map((item) => (
            <li
              key={item.name}
              className="flex items-center gap-3 p-2 rounded-lg hover:bg-green-100 cursor-pointer"
            >
              {item.icon}
              <span>{item.name}</span>
            </li>
          ))}
        </ul>

      <button className="flex items-center gap-3 text-red-600 mt-auto px-3 py-2 rounded-md hover:text-red-700 hover:bg-red-50">
        <IoIosLogOut size={18} /> Logout
      </button>
    </aside>
  );
};

export default Sidebar;
