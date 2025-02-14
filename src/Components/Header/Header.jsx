import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import AccountBoxIcon from "@mui/icons-material/AccountBox";
import { useAuth } from "../../Context/AuthProvidor";

const Header = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  const { isAuthenticated } = useAuth();

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
        </ul>
        {isAuthenticated && (
          <NavLink
            className={({ isActive }) =>
              isActive ? "text-blue-600" : "text-gray-700"
            }
            to="/profile"
          >
            <div className="hidden md:flex items-center cursor-pointer hover:text-blue-600 transition duration-300 ease-in-out transform hover:scale-110">
              <AccountBoxIcon />
              <p>Profile</p>
            </div>
          </NavLink>
        )}
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
          {isAuthenticated && (
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
          )}
        </ul>
      </div>
    </header>
  );
};

export default Header;
