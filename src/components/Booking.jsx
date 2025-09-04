import React from "react";
import { motion } from "framer-motion";
import { Typewriter } from "react-simple-typewriter";
import { FaEnvelope, FaPhone } from "react-icons/fa";

const Booking = () => {
  return (
    <section id="Booking" className="w-full min-h-screen bg-black py-16 px-4 sm:px-6 lg:px-8 flex items-center justify-center">
      <div className="container mx-auto max-w-4xl">
        <motion.div
          initial={{ y: -20, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.5 }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            <Typewriter
              words={[
                "Ready to Rock Your Event?",
                "Book The Lowkeys Now!",
                "Let's Make Music Together!",
                "Your Event, Our Sound!",
              ]}
              loop={true}
              cursor
              cursorStyle="|"
              typeSpeed={70}
              deleteSpeed={50}
              delaySpeed={2000}
            />
          </h2>
          <p className="text-gray-400 text-lg">
            Get in touch for bookings, collaborations, or just to say hi!
          </p>
        </motion.div>

        <div className="flex justify-center">
          <motion.form
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.8 }}
            className="w-full max-w-2xl flex flex-col gap-6 bg-zinc-900 p-8 rounded-2xl shadow-lg mx-auto"
          >
            <input
              type="text"
              placeholder="Your Name"
              className="w-full p-3 rounded-xl bg-zinc-800 text-white outline-none focus:ring-2 focus:ring-yellow-400"
            />
            <input
              type="email"
              placeholder="Your Email"
              className="w-full p-3 rounded-xl bg-zinc-800 text-white outline-none focus:ring-2 focus:ring-yellow-400"
            />
            <input
              type="text"
              placeholder="Event / Venue / Date"
              className="w-full p-3 rounded-xl bg-zinc-800 text-white outline-none focus:ring-2 focus:ring-yellow-400"
            />
            <textarea
              placeholder="Tell us more about your event..."
              rows="5"
              className="w-full p-3 rounded-xl bg-zinc-800 text-white outline-none focus:ring-2 focus:ring-yellow-400"
            ></textarea>

            <button
              type="submit"
              className="bg-yellow-400 text-black font-bold py-3 rounded-xl hover:bg-yellow-300 transition-all"
            >
              Send Booking Request
            </button>
          </motion.form>
        </div>
      </div>
    </section>
  );
};

export default Booking;
