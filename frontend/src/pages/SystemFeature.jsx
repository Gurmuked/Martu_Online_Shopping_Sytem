// src/pages/SystemFeatures.jsx
import FeatureCard from "../components/FeatureCard";

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
  ];

  return (
    <div className="min-h-screen py-16 bg-gray-50 px-6 md:px-20">
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
  );
}
export default SystemFeature;