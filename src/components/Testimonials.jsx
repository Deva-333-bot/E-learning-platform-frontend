 import React from "react";
import { motion } from "framer-motion";

function Testimonials() {
  const testimonials = [
    {
      name: "Jane Doe",
      feedback:
        "TechRica’s courses helped me land my first developer job! Highly recommend.",
    },
    {
      name: "John Smith",
      feedback:
        "The interactive exercises make learning programming so much easier and fun.",
    },
    {
      name: "Mary Johnson",
      feedback:
        "I love the flexible schedule and the quality of the instructors.",
    },
  ];

  return (
    <section className="bg-green-50 py-20">
      <div className="max-w-6xl mx-auto px-6 text-center">
        <h2 className="text-3xl md:text-4xl font-bold text-green-700 mb-12">
          What Our Students Say
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
          {testimonials.map((testi, index) => (
            <motion.div
              key={index}
              className="p-6 bg-white rounded-2xl shadow-md hover:shadow-xl transition"
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
            >
              <p className="text-gray-700 italic mb-4 leading-relaxed">
                “{testi.feedback}”
              </p>
              <h3 className="text-lg font-semibold text-green-700">
                — {testi.name}
              </h3>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Testimonials;
