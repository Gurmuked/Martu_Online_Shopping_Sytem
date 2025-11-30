import React from "react";
import { motion } from "framer-motion";

const AboutPage =() => {
  return (
    <div className="w-full min-h-screen bg-gray-50 text-gray-800 pt-16">
      {/* Header Section */}
      <div className="w-full bg-green-700 text-white py-16 px-6 text-center">
        <motion.h1
          className="text-4xl font-bold"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
        >
          About AgroLink Ethiopia
        </motion.h1>

        <motion.p
          className="mt-4 text-lg max-w-2xl mx-auto"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.3, duration: 0.7 }}
        >
          Empowering Ethiopian farmers and buyers through trusted, digital, and
          affordable agricultural trading solutions.
        </motion.p>
      </div>

      {/* Mission + Pole + Vision */}
      <div className="max-w-6xl mx-auto px-6 py-16 grid md:grid-cols-3 gap-10 relative">

        {/* Left Frame - Mission */}
        <motion.div
          className="bg-white shadow-md rounded-2xl p-8 h-full"
          initial={{ opacity: 0, x: -80 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-2xl font-semibold text-green-700 mb-4">
            Our Mission
          </h2>
          <p className="leading-relaxed">
            Our mission is to bridge the gap between farmers and buyers by
            providing a reliable marketplace that supports transparency,
            fair pricing, fast delivery, and high-quality agricultural products.
          </p>
        </motion.div>

        {/* Center Pole */}
        <div className="flex flex-col items-center relative">
          {/* Vertical Pole */}
          <div className="w-2 h-full bg-green-600 rounded-full" />

          {/* Top Node */}
          <div className="absolute top-0 w-6 h-6 bg-green-700 rounded-full shadow-md" />

          {/* Middle Node */}
          <div className="absolute top-1/2 w-5 h-5 bg-yellow-500 rounded-full shadow-md" />

          {/* Bottom Node */}
          <div className="absolute bottom-0 w-6 h-6 bg-green-700 rounded-full shadow-md" />
        </div>

        {/* Right Frame - Vision */}
        <motion.div
          className="bg-white shadow-md rounded-2xl p-8 h-full"
          initial={{ opacity: 0, x: 80 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-2xl font-semibold text-green-700 mb-4">
            Our Vision
          </h2>
          <p className="leading-relaxed">
            To become Ethiopia's most trusted digital agriculture platform,
            empowering farmers, traders, and businesses to grow together through
            innovation and transparency.
          </p>
        </motion.div>
      </div>

      {/* Who We Are */}
      <motion.div
        className="max-w-5xl mx-auto px-6 py-12 bg-white rounded-2xl shadow-md"
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.9 }}
      >
        <h2 className="text-2xl font-semibold text-green-700 mb-4">Who We Are</h2>
        <p className="leading-relaxed mb-4">
          AgroLink Ethiopia is a modern digital platform designed to support
          agricultural trade. We connect farmers, traders, shop owners, and suppliers
          in one trusted and secure marketplace.
        </p>
        <p className="leading-relaxed">
          Whether you are searching for buyers or suppliers, AgroLink offers fast,
          transparent, and secure transactions that save time, increase revenue,
          and build trust.
        </p>
      </motion.div>

      {/* Values Section */}
      <div className="w-full bg-green-50 py-14 px-6">
        <div className="max-w-6xl mx-auto grid md:grid-cols-3 gap-8">
          {[
            { title: "Transparency", text: "We promote fair, open, and honest communication for all users." },
            { title: "Quality", text: "Every product goes through verification to ensure standards." },
            { title: "Trust", text: "We build confidence through KYC, escrow, and verified users." }
          ].map((item, index) => (
            <motion.div
              key={index}
              className="bg-white p-6 rounded-2xl shadow text-center"
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.2, duration: 0.8 }}
            >
              <h3 className="text-xl font-semibold text-green-700 mb-2">{item.title}</h3>
              <p>{item.text}</p>
            </motion.div>
          ))}
        </div>
      </div>

      {/* CTA Footer */}
      <motion.div
        className="text-center py-12"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.7 }}
      >
        <h2 className="text-2xl font-bold mb-4 text-green-700">Join AgroLink Ethiopia Today</h2>
        <p className="mb-6 text-gray-600">Be part of Ethiopia’s growing digital agriculture movement.</p>
        <button className="px-6 py-3 bg-green-700 text-white rounded-xl shadow hover:bg-green-800 transition-all">
          Get Started
        </button>
      </motion.div>
    </div>
  );
}
export default AboutPage;