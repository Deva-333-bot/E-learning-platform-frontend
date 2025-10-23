 import React from "react";
import { motion } from "framer-motion";
import { BookOpen, UserCheck, Clock } from "lucide-react";

const features = [
  { icon: BookOpen, title: "Interactive Lessons", description: "Engage with hands-on exercises." },
  { icon: UserCheck, title: "Expert Instructors", description: "Learn from industry professionals." },
  { icon: Clock, title: "Flexible Learning", description: "Study at your own pace." },
];

function Features() {
  return (
    <div className="bg-green-50 py-20">
      <div className="max-w-6xl mx-auto px-6">
        <h2 className="text-3xl font-bold text-green-700 mb-10 text-center">
          Why Choose Us?
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <motion.div
              key={index}
              className="p-6 bg-white rounded-lg shadow-md hover:shadow-2xl transition cursor-pointer"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.98 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
            >
              <feature.icon className="w-10 h-10 text-green-600 mb-4" />
              <h3 className="text-xl font-semibold text-green-700 mb-2">
                {feature.title}
              </h3>
              <p className="text-gray-700">{feature.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Features;
