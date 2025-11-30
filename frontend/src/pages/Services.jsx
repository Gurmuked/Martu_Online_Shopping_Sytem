import React from "react";
import { Leaf, Truck, ShoppingCart, ShieldCheck, Users, BarChart } from "lucide-react";

const ServicePage = () => {
  const services = [
    {
      title: "Farm Products Trading",
      description: "Buy and sell crops, livestock, seeds, and agro-products with verified users.",
      icon: <ShoppingCart className="w-10 h-10 text-green-700" />,
    },
    {
      title: "Fast Delivery & Logistics",
      description: "Connect with delivery agents for safe and fast transportation of goods.",
      icon: <Truck className="w-10 h-10 text-green-700" />,
    },
    {
      title: "Digital Marketplace",
      description: "A secure online place where farmers and buyers trade with confidence.",
      icon: <Leaf className="w-10 h-10 text-green-700" />,
    },
    {
      title: "User Verification (KYC)",
      description: "Build trust through verified accounts using ID, phone, and location checks.",
      icon: <ShieldCheck className="w-10 h-10 text-green-700" />,
    },
    {
      title: "Community Support",
      description: "A community space for farmers to learn, share experiences, and get updates.",
      icon: <Users className="w-10 h-10 text-green-700" />,
    },
    {
      title: "Business Analytics",
      description: "Track your sales, orders, and market trends with easy-to-read insights.",
      icon: <BarChart className="w-10 h-10 text-green-700" />,
    },
  ];

  return (
    <div className="w-full min-h-screen bg-gray-50 text-gray-800 pt-16">
      {/* Header */}
      <div className="w-full bg-green-700 text-white py-16 px-6 text-center">
        <h1 className="text-4xl font-bold">Our Services</h1>
        <p className="mt-3 text-lg max-w-2xl mx-auto">
          AgroLink Ethiopia provides trusted digital services to support farmers, traders, and businesses.
        </p>
      </div>

      {/* Main Services */}
      <div className="max-w-6xl mx-auto px-6 py-14 grid md:grid-cols-3 gap-8">
        {services.map((service, i) => (
          <div
            key={i}
            className="bg-white p-8 rounded-2xl shadow hover:shadow-xl transition-all border border-gray-100"
          >
            <div className="mb-4 flex justify-center">{service.icon}</div>
            <h2 className="text-2xl font-semibold text-green-700 text-center mb-3">
              {service.title}
            </h2>
            <p className="text-center text-gray-600">{service.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
export default ServicePage;