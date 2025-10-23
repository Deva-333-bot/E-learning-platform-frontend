 import React from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import Courses from "../components/Courses";
import Features from "../components/Features";
import Newsletter from "../components/Newsletter";

function HomePage() {
  return (
    <div className="min-h-screen bg-green-50 relative overflow-hidden">
      {/* ✅ Hero Section */}
      <motion.section
        className="flex flex-col items-center justify-center text-center py-32 px-6"
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
      >
        <h1 className="text-5xl md:text-6xl font-extrabold text-green-700 mb-6">
          Welcome to <span className="text-green-800">TechRica</span>
        </h1>

        <p className="text-lg md:text-xl text-green-900 max-w-2xl mb-8">
          Your all-in-one e-learning platform for mastering programming and technology.
          Learn, practice, and grow your career with world-class instructors.
        </p>

        {/* ✅ "Get Started" Button with Routing */}
        <Link to="/courses">
          <motion.button
            className="mt-4 bg-green-700 text-white px-8 py-3 rounded-lg font-semibold hover:bg-green-800 hover:shadow-lg transition-transform"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            Get Started
          </motion.button>
        </Link>
      </motion.section>

      {/* ✅ Courses Section */}
      <Courses />

      {/* ✅ Features Section */}
      <Features />

      {/* ✅ Newsletter Section */}
      <Newsletter />
    </div>
  );
}

export default HomePage;
