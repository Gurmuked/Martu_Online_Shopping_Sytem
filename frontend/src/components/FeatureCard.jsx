import { motion } from "framer-motion";

const FeatureCard = ({ icon, title, features }) => {
  return (
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
}

export default FeatureCard;