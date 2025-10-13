 import React from "react";
import { motion } from "framer-motion";
import Courses from "../components/Courses";
import Features from "../components/Features";
import Newsletter from "../components/Newsletter";

function HomePage() {
  return (
    <div className="min-h-screen bg-green-50 relative overflow-hidden">
      {/* Hero Section */}
      <motion.div
        className="flex flex-col items-center justify-center py-32"
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
      >
        <h1 className="text-5xl font-bold text-green-700 mb-6 text-center">
          Welcome to TechRica
        </h1>
        <p className="text-lg text-green-800 text-center max-w-xl">
          Your e-learning platform for programming & tech courses. Learn, practice, and grow your skills.
        </p>
        <motion.button
          className="mt-10 bg-green-700 text-white px-6 py-3 rounded-lg font-semibold hover:bg-green-800 hover:scale-105 transition-transform"
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.95 }}
        >
          Get Started
        </motion.button>
      </motion.div>

      {/* Courses Section */}
      <Courses />

      {/* Features Section */}
      <Features />

      {/* Newsletter Section */}
      <Newsletter />
    </div>
  );
}

export default HomePage;
