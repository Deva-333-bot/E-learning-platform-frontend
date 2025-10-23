 import React from "react";
import { useParams } from "react-router-dom";


function CourseDetailPage() {
  const { courseId } = useParams();

  // ✅ Placeholder course data
  const courses = {
    "javascript-for-beginners": {
      title: "JavaScript for Beginners",
      description: "Learn the fundamentals of JavaScript programming.",
      lessons: [
        "Variables & Data Types",
        "Functions & Scope",
        "DOM Manipulation",
        "Events & Listeners",
      ],
    },
    "reactjs-complete-guide": {
      title: "React.js Complete Guide",
      description: "Build modern web applications using React.",
      lessons: [
        "JSX & Components",
        "State & Props",
        "Routing with React Router",
        "Hooks & Context API",
      ],
    },
    "python-programming": {
      title: "Python Programming",
      description: "Start coding in Python with hands-on projects.",
      lessons: [
        "Python Basics",
        "Loops & Conditionals",
        "Functions & Modules",
        "File Handling",
      ],
    },
  };

  const course = courses[courseId];

  // ✅ Handle invalid course URLs
  if (!course) {
    return (
      <div className="min-h-screen bg-gray-50 flex items-center justify-center text-center">
        <div>
          <h1 className="text-3xl font-bold text-primary mb-4">Course Not Found</h1>
          <p className="text-gray-600">Please check the course link or browse our available courses.</p>
          <a
            href="/courses"
            className="inline-block mt-6 bg-primary text-white px-6 py-3 rounded-lg hover:bg-green-700 transition"
          >
            Browse Courses
          </a>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50 flex flex-col">
      {/* ✅ Page Content */}
      <div className="flex-grow max-w-4xl mx-auto px-6 py-20">
        <h1 className="text-4xl font-bold text-primary mb-6">{course.title}</h1>
        <p className="text-gray-700 mb-8">{course.description}</p>

        <h2 className="text-2xl font-semibold text-primary mb-4">Lessons</h2>
        <ul className="list-disc list-inside mb-8">
          {course.lessons.map((lesson, index) => (
            <li key={index} className="text-gray-700 mb-2">
              {lesson}
            </li>
          ))}
        </ul>

        <button className="bg-primary text-white px-6 py-3 rounded-lg hover:bg-green-700 transition">
          Enroll / Start Course
        </button>
      </div>

      {/* ✅ Footer at the bottom */}
      
    </div>
  );
}

export default CourseDetailPage;
