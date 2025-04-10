import React, { useState } from "react";
import ActiveLink from "../Components/ActiveLink";
import { Link } from "react-router-dom";
import { AiOutlineMenu, AiOutlineClose } from "react-icons/ai";



const Header = () => {
  const [isOpen, setIsOpen] = useState(false);

  // Toggle Sidebar
  const handleToggle = () => {
    setIsOpen(!isOpen);
  };
  const closeToggle = () => {
    setIsOpen(false);
  };

  return (
    <div className="mb-16">
      {/* Sticky Navbar */}
      <div className="fixed top-0 w-full z-50 bg-[rgba(255,255,255,0.86)] backdrop-blur-sm shadow-sm">
        <nav className="lg:mx-8">
          <div className="navbar container flex justify-between items-center">
            {/* Logo */}
            <Link to="/" 
            className="font-bold text-primary"
            onClick={() => {
              if (window.location.pathname === "/") {
                window.scrollTo({ top: 0, behavior: "smooth" }); // Smooth scroll to top
              }
            }}
            >
              <span className="navbar-brand">GoClova</span>
            </Link>

            {/* Desktop Navigation */}
            <div className="hidden lg:flex">
              <ul className="menu menu-horizontal px-1 space-x-6">
                <li className="nav-item"><ActiveLink to="/services" className="font-medium">Services</ActiveLink></li>
                <li className="nav-item"><ActiveLink to="/case-studies" className="font-medium">Case Studies</ActiveLink></li>
                <li className="nav-item"><ActiveLink to="/about" className="font-medium">About</ActiveLink></li>
                <li className="nav-item"><ActiveLink to="/blogs" className="font-medium">Blogs</ActiveLink></li>
              </ul>
            </div>

            {/* Contact Button (Desktop) */}
            <div className="hidden lg:flex nav-item">
              <ActiveLink to="/contact" className="btn btn-primary">
                Contact Us
              </ActiveLink>
            </div>

            {/* Mobile Menu Button */}
            <button onClick={handleToggle} className="btn btn-ghost lg:hidden ml-auto">
              <AiOutlineMenu className="text-primary" size={24} />
            </button>
          </div>
        </nav>
      </div>

      {/* Sidebar Menu (Mobile) */}
      <div
        className={`fixed top-0 left-0 w-64 h-full bg-gray-900 text-white transform ${
          isOpen ? "translate-x-0" : "-translate-x-full"
        } transition-transform duration-300 ease-in-out z-[999] shadow-lg`}
      >
        {/* Sidebar Header */}
        <div className="flex justify-between items-center p-4 border-b border-gray-700">
          <Link to="/"> <h1 className="text-2xl font-bold text-third">GoClova</h1> </Link>
          <button onClick={handleToggle} className="text-white">
            <AiOutlineClose size={24} />
          </button>
        </div>

        {/* Sidebar Navigation */}
        <ul className="flex flex-col p-4 space-y-4">
          <li onClick={closeToggle}><ActiveLink to="/services" className="text-lg">Services</ActiveLink></li>
          <li onClick={closeToggle}><ActiveLink to="/case-studies" className="text-lg">Case Studies</ActiveLink></li>
          <li onClick={closeToggle}><ActiveLink to="/about" className="text-lg">About</ActiveLink></li>
          <li onClick={closeToggle}><ActiveLink to="/blogs" className="text-lg">Blogs</ActiveLink></li>
          <li onClick={closeToggle}>
            <ActiveLink to="/contact" className="btn btn-primary w-full">
              Contact Us
            </ActiveLink>
          </li>
        </ul>
      </div>

      {/* Overlay Background (Closes Sidebar on Click) */}
      {isOpen && (
        <div
          className="fixed inset-0 bg-black bg-opacity-50 z-[998] lg:hidden"
          onClick={handleToggle}
        ></div>
      )}
    </div>
  );
};

export default Header;
