 import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import logo from "../assets/company-logo-2.jpeg";

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();

  const activeLink = (path) =>
    location.pathname === path
      ? "text-yellow-300 font-semibold"
      : "hover:text-gray-200";

  return (
    <nav className="bg-primary text-white px-6 py-4 flex justify-between items-center shadow-lg sticky top-0 z-50">
      {/* Logo Section */}
      <div className="flex items-center space-x-3">
        <img src={logo} alt="TechRica Logo" className="w-10 h-10 object-cover rounded-full" />
        <h1 className="text-2xl font-bold tracking-wide">TechRica</h1>
      </div>

      {/* Desktop Menu */}
      <ul className="hidden md:flex space-x-8 text-lg">
        <li><Link to="/" className={activeLink("/")}>Home</Link></li>
        <li><Link to="/courses" className={activeLink("/courses")}>Courses</Link></li>
        <li><Link to="/about" className={activeLink("/about")}>About</Link></li>
        <li><Link to="/contact" className={activeLink("/contact")}>Contact</Link></li>
      </ul>

      {/* Desktop Login/Register */}
      <div className="hidden md:flex space-x-4">
        <Link to="/login" className="bg-white text-primary px-4 py-2 rounded-lg font-semibold hover:bg-gray-100 transition">Login</Link>
        <Link to="/register" className="bg-yellow-400 text-primary px-4 py-2 rounded-lg font-semibold hover:bg-yellow-300 transition">Register</Link>
      </div>

      {/* Mobile Menu Button */}
      <button
        className="md:hidden block text-3xl focus:outline-none"
        onClick={() => setIsOpen(!isOpen)}
      >
        {isOpen ? "✖" : "☰"}
      </button>

      {/* Mobile Menu */}
      {isOpen && (
        <ul className="absolute top-16 left-0 w-full bg-primary text-white flex flex-col space-y-4 p-6 md:hidden shadow-lg">
          <li><Link to="/" onClick={() => setIsOpen(false)}>Home</Link></li>
          <li><Link to="/courses" onClick={() => setIsOpen(false)}>Courses</Link></li>
          <li><Link to="/about" onClick={() => setIsOpen(false)}>About</Link></li>
          <li><Link to="/contact" onClick={() => setIsOpen(false)}>Contact</Link></li>
          <li><Link to="/login" onClick={() => setIsOpen(false)} className="bg-white text-primary px-4 py-2 rounded-lg">Login</Link></li>
          <li><Link to="/register" onClick={() => setIsOpen(false)} className="bg-yellow-400 text-primary px-4 py-2 rounded-lg">Register</Link></li>
        </ul>
      )}
    </nav>
  );
}

export default Navbar;
