import React from "react";
import { motion } from "framer-motion";

function Hero() {
  return (
    <div className="bg-black flex flex-col md:flex-row justify-center items-center px-8 gap-10 gap-x-30 py-10 pt-30 top-0">
      <motion.div
        initial={{ x: -100, opacity: 0 }}
        whileInView={{ x: 0, opacity: 1 }}
        transition={{ duration: 1 }}
        className="flex flex-col justify-center items-start text-white max-w-2xl gap-1 text-center md:text-left"
      >
        <h1 className="text-4xl md:text-5xl font-bold">The Lowkeys</h1>
        <h2 className="text-2xl md:text-4xl mt-2">Amapiano DJ Duo</h2>
        <p className="text-lg md:text-2xl mt-4 leading-relaxed text-justify">
          From the heart of Mamelodi, Pretoria’s hood, rises The Lowkeys—Big Zee and Q-Unlimited—the dynamic Amapiano producer–DJ duo shaping the sound of a generation.

Discovered by the late DJ Sumbody, who became a mentor and father figure, they turned small-town hustle into nationwide fame. With different personalities but a shared vision, their music blends soulful log-drums, catchy melodies, and unstoppable energy that moves the people.

Since 2017, they’ve built a catalog of hits like Van Damme, dropped their 22-track album Don’t Press Play, and continue to pass the baton to new artists while cementing their place as pioneers of Amapiano.
        </p>
      </motion.div>

      <motion.img
        src="qnz.jpg"
        alt="QNZ"
        initial={{ x: 100, opacity: 0 }}
        whileInView={{ x: 0, opacity: 1 }}
        transition={{ duration: 1 }}
        className="h-64 w-64 md:h-126 md:w-126 rounded-full object-cover shadow-lg mt-8 md:mt-0"
      />
    </div>
  );
}

export default Hero;
