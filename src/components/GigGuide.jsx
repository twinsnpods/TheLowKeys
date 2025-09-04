import React from "react";
import { motion } from "framer-motion";

function GigGuide() {
  return (
    <div
      id="Events"
      className="bg-black text-white flex flex-col justify-center items-center gap-6 px-6 md:px-20 py-16 w-full mx-auto"
    >
      <motion.h1
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="text-3xl md:text-5xl font-bold tracking-wide"
      >
        Gig Guide
      </motion.h1>

      {/* Loading placeholder */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ repeat: Infinity, duration: 1.5, repeatType: "reverse" }}
        className="flex flex-col items-center justify-center gap-3"
      >
        <div className="w-16 h-16 border-4 border-gray-600 border-t-white rounded-full animate-spin"></div>
        <p className="text-gray-400 text-lg md:text-xl font-medium">
          Loading events...
        </p>
      </motion.div>
    </div>
  );
}

export default GigGuide;
