import React from 'react';
import { motion } from 'framer-motion';
import { FaEnvelope, FaTiktok, FaFacebookF, FaInstagram, FaYoutube } from 'react-icons/fa';


function Footer() {
    return (
        <div id="more" className="bg-black">
            <div className="flex flex-col md:flex-row w-full">
                
                {/* Address Section */}
                <div className="flex flex-col m-6 md:m-10 flex-1">
                    <motion.h1
                        initial={{ y: 100, opacity: 0 }}
                        whileInView={{ y: 0, opacity: 1 }}
                        transition={{ duration: 1 }}
                        className="text-2xl sm:text-3xl md:text-5xl font-bold pb-2 text-center md:text-left text-white"
                    >
                        The LowKeys
                    </motion.h1>
                    <motion.p
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        transition={{ duration: 2 }}
                        className="text-base sm:text-lg md:text-2xl pb-2 text-center md:text-left text-white"
                    >
                        From the hood of Mamelodi to the national stage
                    </motion.p>
                    <motion.p
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        transition={{ duration: 2 }}
                        className="text-base sm:text-lg md:text-2xl pb-2 text-center md:text-left text-white"
                    >
                        Phone: 0794935799 / 0799004214 .
                    </motion.p>
                    <motion.p
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        transition={{ duration: 2 }}
                        className="text-base sm:text-lg md:text-2xl pb-2 text-center md:text-left text-white"
                    >
                        Email: TheLowKeys012@gmail.com
                    </motion.p>
                </div>

                {/* Links Section */}
                <div className="flex flex-col m-6 md:m-10 flex-1">
                    <motion.h1
                        initial={{ y: 100, opacity: 0 }}
                        whileInView={{ y: 0, opacity: 1 }}
                        transition={{ duration: 1 }}
                        className="text-2xl sm:text-3xl md:text-5xl font-bold pb-2 text-center md:text-left text-white"
                    >
                        LINKS
                    </motion.h1>
                    {['Home', 'Apperal', 'Music', 'Videos', 'Events', 'Bookings', 'Blog'].map((link, i) => (
                        <motion.p
                            key={i}
                            initial={{ opacity: 0 }}
                            whileInView={{ opacity: 1 }}
                            transition={{ duration: 2 }}
                            className="text-base sm:text-lg md:text-2xl pb-2 text-center md:text-left text-white hover:text-amber-300"
                        >
                            {link}
                        </motion.p>
                    ))}
                </div>

                {/* Social Media Section */}
                <div className="flex flex-col m-6 md:m-10 flex-1">
                    <motion.h1
                        initial={{ y: 100, opacity: 0 }}
                        whileInView={{ y: 0, opacity: 1 }}
                        transition={{ duration: 1 }}
                        className="text-2xl sm:text-3xl md:text-5xl font-bold pb-2 text-center md:text-left text-white"
                    >
                        SOCIAL MEDIA
                    </motion.h1>
                    <motion.div
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        transition={{ duration: 2 }}
                        className="flex justify-center md:justify-start gap-6 md:gap-10 pt-4 pb-6 text-white"
                    >
                        <FaEnvelope className="text-2xl sm:text-3xl hover:scale-150 transition-transform duration-300" />
                        <FaTiktok className="text-2xl sm:text-3xl hover:scale-150 transition-transform duration-300" />
                        <FaFacebookF className="text-2xl sm:text-3xl hover:scale-150 transition-transform duration-300" />
                        <FaInstagram className="text-2xl sm:text-3xl hover:scale-150 transition-transform duration-300" />
                        <FaYoutube className="text-2xl sm:text-3xl hover:scale-150 transition-transform duration-300" />
                    </motion.div>

                    {/* Google Map */}
                    <div className="w-full">
                        <iframe
                            title="Google Maps"
                            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d28757.690316414337!2d28.39464628473574!3d-25.713981402411623!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x1e9558c1f6a5bb69%3A0x831017ba520c79a!2sMamelodi%2C%20Pretoria%2C%200122!5e0!3m2!1sen!2sza!4v1756704480719!5m2!1sen!2sza"
                            width="100%"
                            height="250"
                            style={{ border: 0 }}
                            allowFullScreen=""
                            loading="lazy"
                        ></iframe>
                    </div>
                </div>
            </div>

            {/* Copyright Section */}
            <div className="w-full border-t border-gray-800">
                <div className="container mx-auto px-4 py-6">
                    <motion.div
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        transition={{ duration: 1 }}
                        className="text-center text-gray-400 text-sm"
                    >
                        <p>&copy; {new Date().getFullYear()} The LowKeys. All Rights Reserved.</p>
                        <p className="mt-2">
                            <span className="hover:text-amber-300 cursor-pointer">Privacy Policy</span>
                            {' '}&bull;{' '}
                            <span className="hover:text-amber-300 cursor-pointer">Terms of Service</span>
                        </p>
                    </motion.div>
                </div>
            </div>
        </div>
    );
}

export default Footer;
