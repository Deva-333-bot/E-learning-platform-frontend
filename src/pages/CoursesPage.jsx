 
 import React, { useState } from "react";
import { Link } from "react-router-dom";

function CoursesPage() {
  const [search, setSearch] = useState("");

  const courses = [
    { title: "JavaScript for Beginners", description: "Learn the fundamentals of JavaScript programming." },
    { title: "React.js Complete Guide", description: "Build modern web applications using React." },
    { title: "Python Programming", description: "Start coding in Python with hands-on projects." },
    { title: "Web Development Bootcamp", description: "Become a full-stack web developer step by step." },
    { title: "Data Structures & Algorithms", description: "Master DSA concepts for coding interviews." },
    { title: "Node.js & Express", description: "Backend development with Node.js and Express." },
  ];

  // ✅ Filter logic
  const filteredCourses = courses.filter((course) =>
    course.title.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div className="min-h-screen bg-gray-50 flex flex-col">
      {/* ✅ Page Content */}
      <div className="flex-grow max-w-6xl mx-auto px-6 py-12">
        <h1 className="text-4xl font-bold text-primary mb-6">All Courses</h1>

        {/* ✅ Search Bar */}
        <input
          type="text"
          placeholder="Search courses..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          className="w-full md:w-1/3 mb-10 px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500"
        />

        {/* ✅ Courses Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredCourses.map((course, index) => (
            <div
              key={index}
              className="p-6 bg-white rounded-lg shadow-md hover:shadow-xl transition"
            >
              <h3 className="text-xl font-semibold text-primary mb-4">
                {course.title}
              </h3>
              <p className="text-gray-700">{course.description}</p>

              {/* ✅ Correct Link */}
              <Link
                to={`/courses/${course.title
                  .toLowerCase()
                  .replace(/\s+/g, "-")}`}
                className="mt-4 inline-block bg-primary text-white px-4 py-2 rounded-lg hover:bg-green-700 transition"
              >
                View Course
              </Link>
            </div>
          ))}
        </div>

        {/* ✅ No Results */}
        {filteredCourses.length === 0 && (
          <p className="text-center text-gray-500 mt-10">No courses found.</p>
        )}
      </div>

      {/* ✅ Footer */}
      
    </div>
  );
}

export default CoursesPage;
