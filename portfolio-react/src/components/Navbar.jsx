import React from "react";
import { NavLink } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className="fixed top-4 left-1/2 transform -translate-x-1/2 z-50 bg-black/30 backdrop-blur-md text-white px-8 py-3 rounded-full shadow-xl flex gap-10 items-center text-sm sm:text-base font-medium">
      <NavLink
        to="/"
        className={({ isActive }) =>
          `transition-all duration-200 ease-in-out px-3 py-1 rounded-full ${
            isActive
              ? "bg-black text-white"
              : "hover:scale-110 hover:bg-black/40 hover:text-white"
          }`
        }
      >
        Home
      </NavLink>
      <NavLink
        to="/about"
        className={({ isActive }) =>
          `transition-all duration-200 ease-in-out px-3 py-1 rounded-full ${
            isActive
              ? "bg-black text-white"
              : "hover:scale-110 hover:bg-black/40 hover:text-white"
          }`
        }
      >
        About
      </NavLink>
      <NavLink
        to="/projects"
        className={({ isActive }) =>
          `transition-all duration-200 ease-in-out px-3 py-1 rounded-full ${
            isActive
              ? "bg-black text-white"
              : "hover:scale-110 hover:bg-black/40 hover:text-white"
          }`
        }
      >
        Projects
      </NavLink>
      <NavLink
        to="/contact"
        className={({ isActive }) =>
          `transition-all duration-200 ease-in-out px-3 py-1 rounded-full ${
            isActive
              ? "bg-black text-white"
              : "hover:scale-110 hover:bg-black/40 hover:text-white"
          }`
        }
      >
        Contact
      </NavLink>
    </nav>
  );
};

export default Navbar;
