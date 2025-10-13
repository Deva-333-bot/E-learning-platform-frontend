 import React from "react";
import { motion } from "framer-motion";

const courses = [
  { title: "React.js Complete Guide", description: "Build dynamic web apps with React." },
  { title: "Node.js & Express", description: "Create backend APIs and servers." },
  { title: "Python Programming", description: "Learn Python from scratch." },
];

function Courses() {
  return (
    <div className="max-w-6xl mx-auto px-6 py-20">
      <h2 className="text-3xl font-bold text-green-700 mb-10 text-center">Our Courses</h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {courses.map((course, index) => (
          <motion.div
            key={index}
            className="p-6 bg-white rounded-lg shadow-md hover:shadow-xl transition"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: index * 0.2 }}
          >
            <h3 className="text-xl font-semibold text-green-700 mb-2">{course.title}</h3>
            <p className="text-gray-700">{course.description}</p>
            <button className="mt-4 bg-green-700 text-white px-4 py-2 rounded-lg hover:bg-green-800 transition">
              Learn More
            </button>
          </motion.div>
        ))}
      </div>
    </div>
  );
}

export default Courses;
