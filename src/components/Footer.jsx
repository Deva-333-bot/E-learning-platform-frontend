 import React from "react";
import { Link } from "react-router-dom";
import { FaFacebook, FaTwitter, FaInstagram, FaLinkedin } from "react-icons/fa";

function Footer() {
  return (
    <footer className="bg-green-700 text-white py-10 mt-10">
      <div className="max-w-6xl mx-auto px-6 grid grid-cols-1 md:grid-cols-3 gap-8">
        {/* Brand Info */}
        <div>
          <h2 className="text-2xl font-bold mb-4">TechRica</h2>
          <p className="text-gray-200">
            Empowering learners through high-quality tech and programming courses.  
            Learn, grow, and transform your future with us.
          </p>
        </div>

        {/* Quick Links */}
        <div>
          <h3 className="text-xl font-semibold mb-4">Quick Links</h3>
          <ul className="space-y-2">
            <li><Link to="/" className="hover:underline">Home</Link></li>
            <li><Link to="/login" className="hover:underline">Login</Link></li>
            <li><Link to="/register" className="hover:underline">Register</Link></li>
            <li><a href="#courses" className="hover:underline">Courses</a></li>
            <li><a href="#contact" className="hover:underline">Contact Us</a></li>
          </ul>
        </div>

        {/* Social Media */}
        <div>
          <h3 className="text-xl font-semibold mb-4">Follow Us</h3>
          <div className="flex space-x-4">
            <a href="#" className="hover:text-gray-300">
              <FaFacebook size={24} />
            </a>
            <a href="#" className="hover:text-gray-300">
              <FaTwitter size={24} />
            </a>
            <a href="#" className="hover:text-gray-300">
              <FaInstagram size={24} />
            </a>
            <a href="#" className="hover:text-gray-300">
              <FaLinkedin size={24} />
            </a>
          </div>
        </div>
      </div>

      {/* Bottom line */}
      <div className="border-t border-green-500 mt-8 pt-4 text-center text-gray-200 text-sm">
        © {new Date().getFullYear()} TechRica. All rights reserved.
      </div>
    </footer>
  );
}

export default Footer;
