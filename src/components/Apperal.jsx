import React from "react";
import { motion } from "framer-motion";
import { Typewriter } from 'react-simple-typewriter';

function Apparel() {
  const items = [
    {
      id: 1,
      name: "Classic Graphic Tee",
      image: "apl1.jpg",
      link: "#",
    },
    {
      id: 2,
      name: "Streetwear Tee",
      image: "apl2.jpg",
      link: "#",
    },
    {
      id: 3,
      name: "Classic sweater",
      image: "apl3.jpg",
      link: "#",
    },
    {
      id: 4, // Fixed duplicate ID
      name: "Classic Graphic Tee",
      image: "apl4.jpg",
      link: "#",
    },
  ];

  return (
    <section
      id="apparel"
      className="w-full bg-black min-h-screen"
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <motion.h1
          initial={{ y: 40, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.6 }}
          className="text-3xl md:text-4xl font-bold mb-10 text-center text-white"
        >
          <Typewriter
            words={['Your Drip Check Starts Here']}
            loop={0}
            cursor
            cursorStyle="|"
            typeSpeed={80}
            deleteSpeed={50}
            delaySpeed={1000}
          />
        </motion.h1>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6 lg:gap-8">
          {items.map((item) => (
            <motion.div
              key={item.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="bg-gray-900 rounded-2xl shadow-xl overflow-hidden flex flex-col items-center transform hover:scale-105 transition-transform duration-300"
            >
              <div className="relative w-full pt-[100%]">
                <img
                  src={item.image}
                  alt={item.name}
                  className="absolute top-0 left-0 w-full h-full object-cover"
                />
              </div>
              <div className="p-4 text-center w-full">
                <h2 className="text-xl font-semibold mb-4 text-white">{item.name}</h2>
                <a
                  href={item.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-block px-6 py-2 bg-gradient-to-r from-amber-300 to-purple-800 text-white rounded-full shadow-md hover:opacity-90 transition-opacity"
                >
                  Shop Now
                </a>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Apparel;
