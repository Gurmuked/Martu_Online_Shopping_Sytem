import BeneficiariesSection from './BeneficiariesSection';
import { motion } from 'framer-motion';

const FeaturesSection = () => {
  const features = [
    {
      title: "Multi-Step Verification",
      points: [
        "OTP phone verification",
        "National ID validation",
        "Verified badge system",
      ],
    },
    {
      title: "Escrow-Based Payments",
      points: [
        "Secure payment via Telebirr or CBE Birr",
        "Funds held until delivery confirmed",
        "Digital receipts and tracking",
      ],
    },
    {
      title: "Real-Time Communication",
      points: [
        "Built-in chat system",
        "Order tracking updates",
        "24/7 support system",
      ],
    },
  ];

  return (
    <>
    <section id="features" className="py-4 px-6 mt-6 md:px-20 bg-green-50 text-center">
      <h2 className="text-3xl font-bold mb-4 text-gray-900">
        Powerful Features for Safe Trading
      </h2>
      <p className="text-gray-600 mb-10 max-w-2xl text-[14px] mx-auto">
        Built with security, transparency, and trust at its core.
      </p>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        {features.map((feature, i) => (
          <motion.div
            whileHover={{ scale: 1.05 }}
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            key={i}
            className="bg-white p-6 rounded-xl shadow hover:shadow-lg transition"
          >
            <h3 className="font-semibold text-green-900 text-lg mb-4">
              {feature.title}
            </h3>
            <ul className="text-gray-700 text-[14px] list-disc list-inside space-y-1 text-left">
              {feature.points.map((p, idx) => (
                <li key={idx}>{p}</li>
              ))}
            </ul>
         </motion.div>

        ))}
      </div>
    </section>
    <BeneficiariesSection />
    </>
  );
};

export default FeaturesSection;
