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
    <nav className="bg-black text-white fixed top-0 left-0 z-50 w-full shadow-md overflow-x-hidden">
      <div className="max-w-screen-xl mx-auto px-4 md:px-8">
        <div className="flex items-center justify-between py-3">
          <img
            src="Logo.jpeg"
            className="h-6 w-auto hover:scale-150 transition-transform duration-300"
            alt="Lowkeys"
          />

          {/* Desktop Links */}
          <div className="hidden md:flex items-center gap-6 text-base font-medium">
            <button onClick={() => scrollToSection("Home")} className="hover:text-amber-300">Home</button>
            <button onClick={() => scrollToSection("Apperal")} className="hover:text-amber-300">Apperal</button>
            <button onClick={() => scrollToSection("Music")} className="hover:text-amber-300">Music</button>
            <button onClick={() => scrollToSection("Videos")} className="hover:text-amber-300">Videos</button>
            <button onClick={() => scrollToSection("Events")} className="hover:text-amber-300">Events</button>
            <button onClick={() => scrollToSection("Bookings")} className="hover:text-amber-300">Bookings</button>
            <button onClick={() => scrollToSection("Blog")} className="hover:text-amber-300">Blog</button>
          </div>

          {/* Desktop Button */}
          <div className="hidden md:flex">
            <button className="flex items-center gap-2 bg-gradient-to-r from-amber-300 to-purple-800 text-white px-4 py-2 rounded-full hover:scale-105 transition">
              Book now! <FaArrowRight />
            </button>
          </div>

          {/* Mobile Toggle Button */}
          <div className="md:hidden">
            <button onClick={() => setIsOpen(!isOpen)}>
              {isOpen ? <FaTimes size={24} /> : <FaBars size={24} />}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isOpen && (
          <div className="md:hidden flex flex-col gap-4 text-base font-medium px-4 pb-6 pt-2 bg-black rounded-b-lg transition-all duration-300 w-full">
            <button onClick={() => scrollToSection("Home")} className="hover:text-amber-300">Home</button>
            <button onClick={() => scrollToSection("Apperal")} className="hover:text-amber-300">Apperal</button>
            <button onClick={() => scrollToSection("Music")} className="hover:text-amber-300">Music</button>
            <button onClick={() => scrollToSection("Videos")} className="hover:text-amber-300">Videos</button>
            <button onClick={() => scrollToSection("Events")} className="hover:text-amber-300">Events</button>
            <button onClick={() => scrollToSection("Bookings")} className="hover:text-amber-300">Bookings</button>
            <button onClick={() => scrollToSection("Blog")} className="hover:text-amber-300">Blog</button>
            <button className="flex items-center justify-center gap-2 bg-gradient-to-r from-amber-300 to-purple-800 text-white px-4 py-2 rounded-full hover:scale-105 transition">
              Book now! <FaArrowRight />
            </button>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
