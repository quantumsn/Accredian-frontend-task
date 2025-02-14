import React, { useState } from "react";
import { NavLink } from "react-router-dom";

const Header = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  return (
    <header className="sticky top-0 bg-white shadow-md z-50">
      <nav className="max-w-6xl mx-auto p-4 flex justify-between items-center">
        <div className="text-center">
          <h1 className="text-2xl font-bold text-blue-600">
            <NavLink to="/">accredian</NavLink>
          </h1>
          <p className="text-gray-400 text-xs">Credentials that matter</p>
        </div>
        <ul className="hidden md:flex space-x-6">
          <li className="text-gray-700 hover:text-blue-600 cursor-pointer">
            <NavLink
              to="/"
              end
              className={({ isActive }) =>
                isActive ? "text-blue-600" : "text-gray-700"
              }
            >
              Refer
            </NavLink>
          </li>
          <li className="text-gray-700 hover:text-blue-600 cursor-pointer">
            <NavLink
              to="/programs"
              className={({ isActive }) =>
                isActive ? "text-blue-600" : "text-gray-700"
              }
            >
              Programs
            </NavLink>
          </li>
          <li className="text-gray-700 hover:text-blue-600 cursor-pointer">
            <NavLink
              to="/profile"
              className={({ isActive }) =>
                isActive ? "text-blue-600" : "text-gray-700"
              }
            >
              Profile
            </NavLink>
          </li>
        </ul>
        <div className="hidden md:flex gap-4">
          <button className="hidden md:block bg-blue-500 hover:bg-blue-600 text-white py-2 px-4 rounded">
            <NavLink to="/signup">Sign Up</NavLink>
          </button>
          <button className="hidden md:block text-gray-900 hover:bg-blue-200 py-2 px-4 rounded">
            <NavLink to="/login">Login</NavLink>
          </button>
        </div>
        <div className="md:hidden">
          <button
            className="text-gray-700 hover:text-blue-600"
            onClick={toggleSidebar}
          >
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h16m-7 6h7"
              ></path>
            </svg>
          </button>
        </div>
      </nav>
      <div
        className={`fixed inset-0 bg-gray-800 bg-opacity-75 z-40 transition-opacity duration-300 ${
          isSidebarOpen ? "opacity-100" : "opacity-0 pointer-events-none"
        }`}
        onClick={toggleSidebar}
      ></div>
      <div
        className={`fixed top-0 left-0 w-64 h-full bg-white shadow-lg z-50 p-4 transform transition-transform duration-300 ${
          isSidebarOpen ? "translate-x-0" : "-translate-x-full"
        }`}
      >
        <button
          className="text-gray-700 hover:text-blue-600 mb-4"
          onClick={toggleSidebar}
        >
          <svg
            className="w-6 h-6"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M6 18L18 6M6 6l12 12"
            ></path>
          </svg>
        </button>
        <ul className="space-y-4">
          <li className="text-gray-700 hover:text-blue-600 cursor-pointer">
            <NavLink
              to="/"
              end
              className={({ isActive }) =>
                isActive ? "text-blue-600" : "text-gray-700"
              }
            >
              Refer
            </NavLink>
          </li>
          <li className="text-gray-700 hover:text-blue-600 cursor-pointer">
            <NavLink
              to="/programs"
              className={({ isActive }) =>
                isActive ? "text-blue-600" : "text-gray-700"
              }
            >
              Programs
            </NavLink>
          </li>
          <li className="text-gray-700 hover:text-blue-600 cursor-pointer">
            <NavLink
              to="/profile"
              className={({ isActive }) =>
                isActive ? "text-blue-600" : "text-gray-700"
              }
            >
              Profile
            </NavLink>
          </li>
          <li>
            <button className="bg-blue-500 hover:bg-blue-600 text-white py-2 px-4 rounded w-full">
              <NavLink to="/signup">Sign Up</NavLink>
            </button>
          </li>
          <li>
            <button className="bg-blue-500 hover:bg-blue-600 text-white py-2 px-4 rounded w-full">
              <NavLink to="/login">Login</NavLink>
            </button>
          </li>
        </ul>
      </div>
    </header>
  );
};

export default Header;
