 import React, { useState } from "react";
import Navbar from "../components/Navbar";


function InstructorDashboardPage() {
  // Sample courses created by the instructor
  const [courses, setCourses] = useState([
    { title: "React.js Complete Guide", students: 25 },
    { title: "Node.js & Express", students: 18 },
    { title: "Python Programming", students: 30 },
  ]);

  // Form state for adding a new course
  const [newCourse, setNewCourse] = useState("");

  const handleAddCourse = (e) => {
    e.preventDefault();
    if (newCourse.trim() === "") return;
    setCourses([...courses, { title: newCourse, students: 0 }]);
    setNewCourse("");
  };

  // ✅ Delete course handler
  const handleDeleteCourse = (index) => {
    const updatedCourses = courses.filter((_, i) => i !== index);
    setCourses(updatedCourses);
  };

  return (
    <div className="min-h-screen bg-gray-50 flex flex-col">
      <Navbar />

      <main className="flex-grow max-w-6xl mx-auto px-6 py-20">
        <h1 className="text-4xl font-bold text-green-700 mb-6 text-center">
          Instructor Dashboard
        </h1>
        <p className="text-gray-700 mb-12 text-center">
          Manage your courses and track student enrollments easily.
        </p>

        {/* ✅ Add New Course */}
        <form
          onSubmit={handleAddCourse}
          className="mb-12 flex flex-col md:flex-row gap-4 justify-center"
        >
          <input
            type="text"
            placeholder="Enter new course title"
            value={newCourse}
            onChange={(e) => setNewCourse(e.target.value)}
            className="px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500 w-full md:w-1/3"
            required
          />
          <button
            type="submit"
            className="bg-green-700 text-white px-6 py-2 rounded-lg hover:bg-green-800 transition"
          >
            Add Course
          </button>
        </form>

        {/* ✅ Courses List */}
        {courses.length === 0 ? (
          <p className="text-center text-gray-500 text-lg">No courses added yet.</p>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {courses.map((course, index) => (
              <div
                key={index}
                className="p-6 bg-white rounded-xl shadow-md hover:shadow-xl transition transform hover:scale-105"
              >
                <h3 className="text-xl font-semibold text-green-700 mb-2">
                  {course.title}
                </h3>
                <p className="text-gray-700 mb-4">
                  Enrolled Students: <strong>{course.students}</strong>
                </p>

                <div className="flex gap-3">
                  <button className="bg-green-600 text-white px-4 py-2 rounded-lg hover:bg-green-700 transition">
                    View Students
                  </button>
                  <button
                    onClick={() => handleDeleteCourse(index)}
                    className="bg-red-500 text-white px-4 py-2 rounded-lg hover:bg-red-700 transition"
                  >
                    Delete
                  </button>
                </div>
              </div>
            ))}
          </div>
        )}
      </main>

      {/* ✅ Footer */}
      
    </div>
  );
}

export default InstructorDashboardPage;
