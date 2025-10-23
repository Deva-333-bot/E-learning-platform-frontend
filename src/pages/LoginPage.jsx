 import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";


function LoginPage() {
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  // Handle input changes
  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  // Handle form submit
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Login form submitted:", formData);
    alert("✅ Login successful (frontend only)");
    navigate("/"); // Redirect to homepage after login
  };

  return (
    <div className="min-h-screen flex flex-col bg-gray-50">
      {/* Navbar */}
      

      {/* Main content */}
      <main className="flex-grow flex items-center justify-center px-6 py-20">
        <div className="w-full max-w-md bg-white p-8 rounded-xl shadow-lg">
          <h1 className="text-4xl font-bold text-green-700 mb-6 text-center">
            Login
          </h1>

          <form onSubmit={handleSubmit}>
            {/* Email Field */}
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

            {/* Password Field */}
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
              <div className="text-right mt-2">
                <Link
                  to="/forgot-password"
                  className="text-sm text-green-700 hover:underline"
                >
                  Forgot Password?
                </Link>
              </div>
            </div>

            {/* Login Button */}
            <button
              type="submit"
              className="bg-green-700 text-white px-6 py-3 rounded-lg hover:bg-green-800 transition w-full font-semibold"
            >
              Login
            </button>

            {/* Register Link */}
            <p className="text-gray-700 mt-6 text-center">
              Don’t have an account?{" "}
              <Link
                to="/register"
                className="text-green-700 font-semibold hover:underline"
              >
                Register
              </Link>
            </p>
          </form>
        </div>
      </main>

      {/* Footer */}
      
    </div>
  );
}

export default LoginPage;
