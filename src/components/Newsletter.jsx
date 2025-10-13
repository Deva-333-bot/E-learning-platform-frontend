 import React, { useState } from "react";
import { motion } from "framer-motion";

function Newsletter() {
  const [email, setEmail] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    alert(`Thank you for subscribing: ${email}`);
    setEmail("");
  };

  return (
    <motion.div
      className="bg-green-50 py-16 px-6 mt-20"
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.8 }}
    >
      <div className="max-w-3xl mx-auto text-center">
        <h2 className="text-3xl md:text-4xl font-bold text-green-800 mb-4">
          Subscribe to Our Newsletter
        </h2>
        <p className="text-gray-700 mb-8">
          Stay updated with the latest courses, tutorials, and tech news.
        </p>
        <form onSubmit={handleSubmit} className="flex flex-col md:flex-row gap-4 justify-center">
          <input
            type="email"
            placeholder="Enter your email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500 w-full md:w-2/3"
            required
          />
          <button
            type="submit"
            className="bg-green-700 text-white px-6 py-2 rounded-lg hover:bg-green-800 transition"
          >
            Subscribe
          </button>
        </form>
      </div>
    </motion.div>
  );
}

export default Newsletter;
