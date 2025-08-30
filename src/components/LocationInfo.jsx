import React from "react";
import { FaLocationPin } from "react-icons/fa6";
import { FaSmile } from "react-icons/fa";
import { motion } from "framer-motion";

const LocationInfo = () => {
    return (
        <section className="relative w-full min-h-screen bg-black">
            {/* Background Image */}
            <img 
                src="Mamelodiwest.jpg" 
                alt="Mamelodi" 
                className="absolute inset-0 w-full h-full object-cover z-0" 
            />
            
            {/* Black + blur overlay - full width and height */}
            <div className="absolute inset-0 w-full h-full bg-black/15 z-10 flex flex-col items-center justify-center gap-6 px-4 py-8 md:px-8 md:py-16 text-center">
                
                <motion.h1 
                initial={{ y: -100, opacity: 0 }}
                whileInView={{ y: 0, opacity: 1 }}
                transition={{ duration: 1 }}
                className="text-white text-3xl sm:text-4xl md:text-5xl font-bold max-w-[800px]">
                    From the hood of Mamelodi to the national stage
                </motion.h1>
                <motion.p 
                initial={{ y: +100, opacity: 0 }}
                whileInView={{ y: 0, opacity: 1 }}
                transition={{ duration: 1 }}
                className="text-white text-1xl sm:text-2xl md:text-3xl max-[800px]">
                    Rooted in the heart of Pretoria’s township culture, Lowkeys bring an authentic sound that speaks to both the streets and the spotlight. Their journey reflects resilience, creativity, and a deep connection to Amapiano’s raw energy—transforming local rhythms into a national movement that resonates across South Africa and beyond.

                </motion.p>
            </div>
        </section>
    );
};

export default LocationInfo;




