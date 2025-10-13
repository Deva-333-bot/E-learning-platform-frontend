import React from "react";

import { Link } from "react-router-dom";

function DashboardPage() {
  // Sample data for student dashboard
  const enrolledCourses = [
    { title: "JavaScript for Beginners", progress: 70 },
    { title: "React.js Complete Guide", progress: 40 },
    { title: "Python Programming", progress: 90 },
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      

      <div className="max-w-6xl mx-auto px-6 py-20">
        <h1 className="text-4xl font-bold text-primary mb-6 text-center">Dashboard</h1>
        <p className="text-gray-700 mb-12 text-center">Welcome back! Here’s a summary of your courses and progress.</p>

        {/* Enrolled Courses */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {enrolledCourses.map((course, index) => (
            <div key={index} className="p-6 bg-white rounded-lg shadow-md hover:shadow-xl transition">
              <h3 className="text-xl font-semibold text-primary mb-4">{course.title}</h3>
              <div className="w-full bg-gray-200 h-4 rounded-full mb-2">
                <div
                  className="bg-primary h-4 rounded-full"
                  style={{ width: `${course.progress}%` }}
                ></div>
              </div>
              <p className="text-gray-700 mb-4">{course.progress}% completed</p>
              <Link
                to={`/courses/${course.title.toLowerCase().replace(/\s+/g, "-")}`}
                className="inline-block bg-primary text-white px-4 py-2 rounded-lg hover:bg-green-700 transition"
              >
                Continue Learning
              </Link>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default DashboardPage;
