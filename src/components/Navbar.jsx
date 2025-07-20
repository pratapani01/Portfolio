import React from "react";
import { NavLink } from "react-router-dom";

const Navbar = () => {
  return (
    <div className="fixed top-4 left-1/2 transform -translate-x-1/2 z-50 w-[95vw] sm:w-auto px-2 sm:px-0">
      
      {/* 🔵 Left Gradient (only on small screens) */}
      <div className="absolute top-0 left-0 h-full w-6 bg-gradient-to-r from-blue-300/50 to-transparent z-50 pointer-events-none rounded-l-full sm:hidden" />

      {/* 🔵 Right Gradient (only on small screens) */}
      <div className="absolute top-0 right-0 h-full w-6 bg-gradient-to-l from-blue-300/50 to-transparent z-50 pointer-events-none rounded-r-full sm:hidden" />

      {/* 🌐 Navbar Scrollable Container */}
      <nav
        className="relative bg-black/30 backdrop-blur-md text-white py-3 px-4 sm:px-8 rounded-full shadow-xl 
        overflow-x-auto sm:overflow-visible scrollbar-thin scrollbar-thumb-blue-200 scrollbar-track-transparent"
      >
        <div className="flex gap-6 sm:gap-10 items-center text-sm sm:text-base font-medium whitespace-nowrap min-w-max">
          {[
            { name: "Home", path: "/" },
            { name: "About", path: "/about" },
            { name: "Skills", path: "/skills" },
            { name: "Projects", path: "/projects" },
            { name: "Contact", path: "/contact" },
          ].map((link) => (
            <NavLink
              key={link.path}
              to={link.path}
              className={({ isActive }) =>
                `transition-all duration-200 ease-in-out px-3 py-1 rounded-full font-semibold ${
                  isActive
                    ? "bg-white text-black shadow-md scale-105"
                    : "hover:scale-110 hover:bg-white/20 hover:text-white"
                }`
              }
            >
              {link.name}
            </NavLink>
          ))}
        </div>
      </nav>

      {/* 💡 Custom Scrollbar Styling */}
      <style jsx="true">{`
        nav::-webkit-scrollbar {
          height: 4px;
        }
        nav::-webkit-scrollbar-thumb {
          background-color: #bfdbfe; /* blue-200 */
          border-radius: 9999px;
        }
        nav::-webkit-scrollbar-track {
          background: transparent;
        }
      `}</style>
    </div>
  );
};

export default Navbar;
