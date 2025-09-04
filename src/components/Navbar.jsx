import React, { useState } from "react";
import { FaArrowRight, FaBars, FaTimes } from "react-icons/fa";
import { useNavigate } from "react-router-dom";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const navigate = useNavigate();

  const scrollToSection = (id) => {
    if (window.location.pathname !== "/") {
      navigate("/", { replace: false });
      setTimeout(() => {
        const el = document.getElementById(id);
        if (el) el.scrollIntoView({ behavior: "smooth" });
      }, 100);
    } else {
      const el = document.getElementById(id);
      if (el) el.scrollIntoView({ behavior: "smooth" });
    }
    setIsOpen(false);
  };

  return (
    <nav className="bg-black text-white fixed top-0 left-0 w-full z-50 shadow-md overflow-x-hidden">
      <div className="w-full mx-auto px-2 sm:px-4 lg:px-6">
        <div className="flex items-center justify-between h-16">
          <img
            src="Logo.jpeg"
            className="h-6 w-auto hover:scale-105 transition-transform duration-300"
            alt="Lowkeys"
          />

          {/* Desktop Links */}
          <div className="hidden md:flex items-center space-x-4">
            <button onClick={() => scrollToSection("Home")} className="hover:text-amber-300">Home</button>
            <button onClick={() => scrollToSection("Apperal")} className="hover:text-amber-300">Apperal</button>
            <button onClick={() => scrollToSection("Music")} className="hover:text-amber-300">Music</button>
            <button onClick={() => scrollToSection("Videos")} className="hover:text-amber-300">Videos</button>
            <button onClick={() => scrollToSection("Events")} className="hover:text-amber-300">Events</button>
            <button onClick={() => scrollToSection("Booking")} className="hover:text-amber-300">Bookings</button>
            <button onClick={() => scrollToSection("Blog")} className="hover:text-amber-300">Blog</button>
          </div>

          {/* Desktop Button */}
          <div className="hidden md:flex">
            <button className="flex items-center gap-2 bg-gradient-to-r from-amber-300 to-purple-800 text-white px-3 py-2 rounded-full hover:scale-105 transition text-sm">
              Book now! <FaArrowRight />
            </button>
          </div>

          {/* Mobile Toggle Button */}
          <div className="md:hidden">
            <button 
              onClick={() => setIsOpen(!isOpen)}
              className="p-1"
            >
              {isOpen ? <FaTimes size={20} /> : <FaBars size={20} />}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isOpen && (
          <div className="md:hidden flex flex-col w-full bg-black border-t border-zinc-800">
            <div className="px-2 pt-2 pb-3 space-y-1">
              <button onClick={() => scrollToSection("Home")} 
                className="w-full text-left px-3 py-2 hover:text-amber-300">
                Home
              </button>
              <button onClick={() => scrollToSection("Apperal")} className="w-full text-left px-3 py-2 hover:text-amber-300">Apperal</button>
              <button onClick={() => scrollToSection("Music")} className="w-full text-left px-3 py-2 hover:text-amber-300">Music</button>
              <button onClick={() => scrollToSection("Videos")} className="w-full text-left px-3 py-2 hover:text-amber-300">Videos</button>
              <button onClick={() => scrollToSection("Events")} className="w-full text-left px-3 py-2 hover:text-amber-300">Events</button>
              <button onClick={() => scrollToSection("Booking")} className="w-full text-left px-3 py-2 hover:text-amber-300">Bookings</button>
              <button onClick={() => scrollToSection("Blog")} className="w-full text-left px-3 py-2 hover:text-amber-300">Blog</button>
              <button className="w-full flex items-center justify-center gap-2 bg-gradient-to-r from-amber-300 to-purple-800 text-white px-4 py-2 rounded-full hover:scale-105 transition mt-4">
                Book now! <FaArrowRight />
              </button>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
