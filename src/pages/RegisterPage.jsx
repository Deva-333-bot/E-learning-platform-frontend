 import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";



function RegisterPage() {
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
    confirmPassword: "",
  });

  // Handle input field changes
  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  // Handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();
    if (formData.password !== formData.confirmPassword) {
      alert("❌ Passwords do not match");
      return;
    }
    console.log("Register form submitted:", formData);
    alert("✅ Registration successful (frontend only)");
    navigate("/login");
  };

  return (
    <div className="min-h-screen flex flex-col bg-gray-50">
      {/* Navbar */}
      

      {/* Main content */}
      <main className="flex-grow flex items-center justify-center px-6 py-20">
        <div className="w-full max-w-md bg-white p-8 rounded-xl shadow-lg">
          <h1 className="text-4xl font-bold text-green-700 mb-6 text-center">
            Create Account
          </h1>

          <form onSubmit={handleSubmit}>
            {/* Name */}
            <div className="mb-6">
              <label
                htmlFor="name"
                className="block text-gray-700 font-semibold mb-2"
              >
                Full Name
              </label>
              <input
                id="name"
                type="text"
                name="name"
                value={formData.name}
                onChange={handleChange}
                placeholder="Enter your full name"
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-600"
                required
              />
            </div>

            {/* Email */}
            <div className="mb-6">
              <label
                htmlFor="email"
                className="block text-gray-700 font-semibold mb-2"
              >
                Email
              </label>
              <input
                id="email"
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                placeholder="you@example.com"
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-600"
                required
              />
            </div>

            {/* Password */}
            <div className="mb-6">
              <label
                htmlFor="password"
                className="block text-gray-700 font-semibold mb-2"
              >
                Password
              </label>
              <input
                id="password"
                type="password"
                name="password"
                value={formData.password}
                onChange={handleChange}
                placeholder="Enter your password"
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-600"
                required
              />
              <p className="text-xs text-gray-500 mt-1">
                Must be at least 6 characters long.
              </p>
            </div>

            {/* Confirm Password */}
            <div className="mb-6">
              <label
                htmlFor="confirmPassword"
                className="block text-gray-700 font-semibold mb-2"
              >
                Confirm Password
              </label>
              <input
                id="confirmPassword"
                type="password"
                name="confirmPassword"
                value={formData.confirmPassword}
                onChange={handleChange}
                placeholder="Re-enter your password"
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-600"
                required
              />
            </div>

            {/* Register Button */}
            <button
              type="submit"
              className="bg-green-700 text-white px-6 py-3 rounded-lg hover:bg-green-800 transition w-full font-semibold"
            >
              Register
            </button>

            {/* Login Link */}
            <p className="text-gray-700 mt-6 text-center">
              Already have an account?{" "}
              <Link
                to="/login"
                className="text-green-700 font-semibold hover:underline"
              >
                Login
              </Link>
            </p>
          </form>
        </div>
      </main>

      {/* Footer */}
      
    </div>
  );
}

export default RegisterPage;
