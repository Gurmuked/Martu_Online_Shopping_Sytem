import React from "react";
import Sidebar from "../components/seller/Sidebar";
import StatCard from "../components/seller/StatCard";
import RevenueChart from "../components/seller/RevenueChart";
import TopProducts from "../components/seller/TopProducts";
import RecentOrders from "../components/seller/RecentOrders";
import QuickActions from "../components/seller/QuickActions";
import { GiShoppingBag } from "react-icons/gi";
import { FaUser } from "react-icons/fa";
import { GoClock } from "react-icons/go";
import { BiDollar } from "react-icons/bi";

export default function SellerDashboard() {
  return (
    <div className="flex min-h-screen bg-gray-50">
      {/* 🧭 Sidebar on the left */}
      <Sidebar />

      {/* 🧠 Dashboard content */}
      <main className="flex-1 p-6 overflow-y-auto">
        <h1 className="text-2xl font-bold mb-4">Dashboard</h1>

        {/* Top Stats */}
        <div className="grid md:grid-cols-4 gap-4 mb-6">
          <StatCard title="Total Sales" value="₦2,450,000" icon={BiDollar} change="+12.5%" positive />
          <StatCard title="Active Products" value="127" icon={GiShoppingBag} change="+8 this week" positive />
          <StatCard title="Pending Orders" value="24" icon={GoClock} change="Requires attention" positive={false} />
          <StatCard title="Monthly Earnings" value="₦485,200" icon={FaUser} change="+18.2%" positive />
        </div>

        {/* Middle Section */}
        <div className="grid md:grid-cols-2 gap-4 mb-6">
          <RevenueChart />
          <TopProducts />
        </div>

        {/* Bottom Section */}
        <div className="grid md:grid-cols-3 gap-4">
          <div className="md:col-span-2">
            <RecentOrders />
          </div>
          <QuickActions />
        </div>
      </main>
    </div>
  );
}

