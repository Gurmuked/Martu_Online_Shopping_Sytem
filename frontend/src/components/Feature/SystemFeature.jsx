import { motion } from "framer-motion";

const SystemFeature = () => {
  const sections = [
    {
      icon: "🧍‍♂️",
      title: "User Management & Verification",
      features: [
        "OTP phone verification",
        "Upload National ID / Kebele Letter",
        "Optional selfie match verification",
        "Manual admin approval",
        "Verified badge for approved users",
      ],
    },
    {
      icon: "💰",
      title: "Escrow-Based Payment System",
      features: [
        "Buyer → pays to platform wallet",
        "Seller → delivers goods",
        "Buyer → confirms receipt",
        "Platform → releases payment",
        "Dispute case → admin investigates",
      ],
    },
    {
      icon: "📜",
      title: "Transaction & Transparency Tools",
      features: [
        "Digital receipts (PDF + SMS + Email)",
        "Order history & tracking",
        "Trust Score / Verified Badge System",
      ],
    },
    {
      icon: "🗣️",
      title: "Communication & Complaint Handling",
      features: [
        "Real-time chat (Socket.io)",
        "Complaint form & admin review system",
      ],
    },
    {
      icon: "🚚",
      title: "Delivery Partner Integration",
      features: [
        "Verified local logistics agents",
        "Delivery confirmation before fund release",
      ],
    },
    {
      icon: "🧭",
      title: "User Education",
      features: [
        "“Trust & Safety” page explaining processes",
        "Local-language video tutorials",
        "Offline support agents",
      ],
    },
    {
      icon: "🔒",
      title: "Security & Safety",
      features: [
        "Passwords hashed (bcrypt)",
        "HTTPS + JWT Auth + 2FA",
        "Daily DB backups",
        "Anti-fraud detection",
        "Escrow wallet logs",
      ],
    },
  ];

  // Inner card component (local to SystemFeature)
  const FeatureCard = ({ icon, title, features }) => (
    <motion.div
      whileHover={{ scale: 1.05 }}
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      viewport={{ once: true }}
      className="bg-white shadow-md rounded-xl p-6 hover:shadow-lg"
    >
      <div className="flex items-center mb-4">
        <span className="text-3xl mr-2">{icon}</span>
        <h2 className="text-xl font-semibold text-gray-800">{title}</h2>
      </div>
      <ul className="list-disc ml-6 text-gray-700 space-y-1">
        {features.map((f, i) => (
          <li key={i}>{f}</li>
        ))}
      </ul>
    </motion.div>
  );

  return (
    <div className="w-full">
      {/* Banner */}
      <div>
        <img
          src="../.././src/assets/security.jpg"
          alt="security banner"
          className="w-full h-[60vh]"
        />
      </div>

      {/* Feature Section */}
      <div className="min-h-screen pb-16 pt-8 bg-gray-50 px-6 md:px-20">
        <h1 className="text-4xl font-bold text-center mb-10 text-red-600">
          System Features
        </h1>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {sections.map((section, i) => (
            <FeatureCard
              key={i}
              icon={section.icon}
              title={section.title}
              features={section.features}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default SystemFeature;
