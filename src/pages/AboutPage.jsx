 import React from "react";
import { motion } from "framer-motion";

function AboutPage() {
  const instructors = [
    {
      name: "Jane Doe",
      title: "Full Stack Developer & React Instructor",
    },
    {
      name: "John Smith",
      title: "Python Developer & Backend Instructor",
    },
    {
      name: "Mary Johnson",
      title: "Front-end Developer & UI/UX Expert",
    },
  ];

  return (
    <div className="min-h-screen bg-green-50">
      {/* Hero Section */}
      <div className="max-w-6xl mx-auto px-6 py-20 text-center">
        <motion.h1
          className="text-4xl md:text-5xl font-bold text-green-700 mb-6"
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
        >
          About TechRica
        </motion.h1>

        <motion.p
          className="text-gray-700 text-lg md:text-xl mb-12 leading-relaxed"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.3, duration: 0.7 }}
        >
          TechRica is a modern e-learning platform focused on teaching programming and
          tech skills. Our mission is to provide accessible, high-quality education to
          help learners excel in the tech industry.
        </motion.p>

        {/* Mission & Vision */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 mb-16">
          <motion.div
            className="p-6 bg-white rounded-lg shadow-md"
            whileHover={{ scale: 1.03 }}
            transition={{ type: "spring", stiffness: 300 }}
          >
            <h2 className="text-2xl font-semibold text-green-700 mb-4">Our Mission</h2>
            <p className="text-gray-700 leading-relaxed">
              To empower individuals with tech skills through interactive learning and
              hands-on practice.
            </p>
          </motion.div>

          <motion.div
            className="p-6 bg-white rounded-lg shadow-md"
            whileHover={{ scale: 1.03 }}
            transition={{ type: "spring", stiffness: 300 }}
          >
            <h2 className="text-2xl font-semibold text-green-700 mb-4">Our Vision</h2>
            <p className="text-gray-700 leading-relaxed">
              To be the leading e-learning hub for programming and technology education
              globally.
            </p>
          </motion.div>
        </div>

        {/* Team Section */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold text-green-700 mb-10">
            Meet Our Instructors
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
            {instructors.map((inst, index) => (
              <motion.div
                key={index}
                className="p-6 bg-white rounded-lg shadow-md hover:shadow-xl transition"
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
              >
                <h3 className="text-xl font-semibold text-green-700 mb-2">
                  {inst.name}
                </h3>
                <p className="text-gray-700">{inst.title}</p>
              </motion.div>
            ))}
          </div>
        </div>

        <motion.p
          className="text-gray-700 text-lg leading-relaxed max-w-3xl mx-auto"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2, duration: 0.8 }}
        >
          At <span className="font-semibold text-green-700">TechRica</span>, we believe
          learning should be accessible, engaging, and practical. Join us and start your
          tech journey today!
        </motion.p>
      </div>
    </div>
  );
}

export default AboutPage;
