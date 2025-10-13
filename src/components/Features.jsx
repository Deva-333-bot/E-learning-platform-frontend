 import React from "react";
import { motion } from "framer-motion";

const features = [
  { title: "Interactive Lessons", description: "Engage with hands-on exercises." },
  { title: "Expert Instructors", description: "Learn from industry professionals." },
  { title: "Flexible Learning", description: "Study at your own pace." },
];

function Features() {
  return (
    <div className="bg-green-50 py-20">
      <div className="max-w-6xl mx-auto px-6">
        <h2 className="text-3xl font-bold text-green-700 mb-10 text-center">Why Choose Us?</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <motion.div
              key={index}
              className="p-6 bg-white rounded-lg shadow-md hover:shadow-xl transition"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
            >
              <h3 className="text-xl font-semibold text-green-700 mb-2">{feature.title}</h3>
              <p className="text-gray-700">{feature.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Features;
