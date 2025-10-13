 import React from "react";

function AboutPage() {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* ✅ Navbar removed */}

      {/* Hero Section */}
      <div className="max-w-6xl mx-auto px-6 py-20 text-center">
        <h1 className="text-4xl md:text-5xl font-bold text-primary mb-6">About TechRica</h1>
        <p className="text-gray-700 text-lg md:text-xl mb-12">
          TechRica is a modern e-learning platform focused on teaching programming and tech skills. Our mission is to provide accessible, high-quality education to help learners excel in the tech industry.
        </p>

        {/* Mission & Vision */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 mb-12">
          <div className="p-6 bg-white rounded-lg shadow-md">
            <h2 className="text-2xl font-semibold text-primary mb-4">Our Mission</h2>
            <p className="text-gray-700">
              To empower individuals with tech skills through interactive learning and hands-on practice.
            </p>
          </div>
          <div className="p-6 bg-white rounded-lg shadow-md">
            <h2 className="text-2xl font-semibold text-primary mb-4">Our Vision</h2>
            <p className="text-gray-700">
              To be the leading e-learning hub for programming and technology education globally.
            </p>
          </div>
        </div>

        {/* Team Section */}
        <div className="mb-12">
          <h2 className="text-3xl font-bold text-primary mb-8">Meet Our Instructors</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
            <div className="p-6 bg-white rounded-lg shadow-md hover:shadow-xl transition">
              <h3 className="text-xl font-semibold text-primary mb-2">Jane Doe</h3>
              <p className="text-gray-700">Full Stack Developer & React Instructor</p>
            </div>
            <div className="p-6 bg-white rounded-lg shadow-md hover:shadow-xl transition">
              <h3 className="text-xl font-semibold text-primary mb-2">John Smith</h3>
              <p className="text-gray-700">Python Developer & Backend Instructor</p>
            </div>
            <div className="p-6 bg-white rounded-lg shadow-md hover:shadow-xl transition">
              <h3 className="text-xl font-semibold text-primary mb-2">Mary Johnson</h3>
              <p className="text-gray-700">Front-end Developer & UI/UX Expert</p>
            </div>
          </div>
        </div>

        <p className="text-gray-700 text-lg">
          At TechRica, we believe learning should be accessible, engaging, and practical. Join us and start your tech journey today!
        </p>
      </div>
    </div>
  );
}

export default AboutPage;
