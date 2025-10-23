 import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

// ✅ Import Pages
import HomePage from "../pages/HomePage";
import LoginPage from "../pages/LoginPage";
import RegisterPage from "../pages/RegisterPage";
import DashboardPage from "../pages/DashboardPage";
import InstructorDashboardPage from "../pages/InstructorDashboardPage";
import CourseDetailPage from "../pages/CourseDetailPage";
import AboutPage from "../pages/AboutPage";


// ✅ Import Components as Standalone Pages
import Courses from "../components/Courses";
import Features from "../components/Features";
import Newsletter from "../components/Newsletter";
import Testimonials from "../components/Testimonials";
import ContactPage from "../pages/ContactPage";


// ✅ Shared Layout Components
import Navbar from "../components/Navbar";
 import Footer from "../components/Footer";

function AppRoutes() {
  return (
    <Router>
      {/* Navbar appears on all pages */}
      <Navbar />

      <Routes>
        {/* 🔹 Main Pages */}
        <Route path="/" element={<HomePage />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/register" element={<RegisterPage />} />
        <Route path="/contact" element={<ContactPage />} />
        <Route path="/aboutpage" element={<AboutPage />} />
        {/* 🔹 Dashboards */}
        <Route path="/dashboard" element={<DashboardPage />} />
        <Route path="/instructor-dashboard" element={<InstructorDashboardPage />} />

        {/* 🔹 Courses */}
        <Route path="/courses" element={<Courses />} />
        <Route path="/courses/:courseId" element={<CourseDetailPage />} />

        {/* 🔹 Additional Sections */}
        <Route path="/features" element={<Features />} />
        <Route path="/newsletter" element={<Newsletter />} />
        <Route path="/testimonials" element={<Testimonials />} />

        {/* 🔹 404 Fallback */}
        <Route
          path="*"
          element={
            <div className="min-h-screen flex items-center justify-center text-2xl text-gray-700">
              404 — Page Not Found
            </div>
          }
        />
      </Routes>

      {/* Footer visibl;e on all pages */}
      <Footer />
    </Router>
  );
}

export default AppRoutes;
