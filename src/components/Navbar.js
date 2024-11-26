import React, { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { FaBars, FaTimes } from "react-icons/fa";
import img from "../assests/images/amazonlogo.webp";

function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation();

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const navLinks = [
    { name: "Predict", path: "/predict" },
    { name: "Analysis", path: "/analysis" },
    { name: "Dashboard", path: "/dashboard" },
  ];

  return (
    <nav className="bg-gradient-to-r from-blue-500 to-indigo-600 text-white py-4 shadow-lg">
      <div className="container mx-auto flex justify-between items-center px-4 md:px-8">
        {/* Brand Logo */}
        <div className="flex items-center space-x-2">
          <Link to="/" className="flex items-center space-x-2 hover:text-gray-200">
            <img src={img} alt="Amazon Logo" className="w-10 h-10 object-contain" />
            <span className="text-xl font-bold text-yellow-300">Stock Prediction App</span>
          </Link>
        </div>

        {/* Desktop Links */}
        <div className="hidden md:flex space-x-6">
          {navLinks.map((link) => (
            <Link
              key={link.path}
              to={link.path}
              className={`hover:text-gray-200 ${
                location.pathname === link.path ? "text-gray-200 font-semibold" : ""
              }`}
              aria-label={link.name}
            >
              {link.name}
            </Link>
          ))}
        </div>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden focus:outline-none"
          onClick={toggleMenu}
          aria-label="Toggle Menu"
        >
          {isMenuOpen ? (
            <FaTimes className="w-6 h-6" />
          ) : (
            <FaBars className="w-6 h-6" />
          )}
        </button>
      </div>

      {/* Mobile Links */}
      {isMenuOpen && (
        <div className="md:hidden bg-blue-500 text-white shadow-lg">
          <div className="flex flex-col items-center space-y-4 py-4">
            {navLinks.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                className={`hover:text-gray-200 ${
                  location.pathname === link.path ? "text-gray-200 font-semibold" : ""
                }`}
                onClick={() => setIsMenuOpen(false)}
                aria-label={link.name}
              >
                {link.name}
              </Link>
            ))}
          </div>
        </div>
      )}
    </nav>
  );
}

export default Navbar;
