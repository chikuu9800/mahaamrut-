import React from "react"
import { motion, useScroll, useTransform } from "framer-motion";
import { useLanguage } from "../Context/AuthContext";

const Contactus = () => {
    const { isMarathi } = useLanguage();

    // 🌀 Scroll animation for map
    const { scrollYProgress } = useScroll();
    const floatY = useTransform(scrollYProgress, [0, 1], [0, -80]);
    const floatOpacity = useTransform(scrollYProgress, [0, 1], [0.5, 1]);

    return (
        <section className="w-full bg-gray-50 py-10 flex flex-col items-center">
            {/* Header */}
            <motion.h2
                className="text-2xl font-bold text-blue-800 mb-6 border-b-4 border-orange-500 pb-2 font-martel"
                initial={{ opacity: 0, y: -30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, ease: "easeOut" }}
            >
                {isMarathi ? "संपर्क" : "Contact"}
            </motion.h2>

            <div className="flex flex-col md:flex-row gap-6 w-[90%] md:w-[85%] lg:w-[80%] bg-white rounded-xl shadow-lg overflow-hidden">
                {/* Contact Form */}
                <motion.div
                    className="flex-1 p-6"
                    initial={{ opacity: 0, x: -50 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.8, ease: "easeOut" }}
                >
                    <h3 className="text-xl font-semibold text-gray-800 mb-4 font-martel">
                        {isMarathi ? "संपर्क माहिती" : "Contact Information"}
                    </h3>

                    <form className="space-y-3">
                        <div className="flex gap-3">
                            <input
                                type="text"
                                placeholder={isMarathi ? "तुमचे नाव" : "Your Name"}
                                className="w-1/2 border rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-orange-500"
                            />
                            <input
                                type="email"
                                placeholder={isMarathi ? "तुमचा ईमेल" : "Your Email"}
                                className="w-1/2 border rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-orange-500"
                            />
                        </div>

                        <input
                            type="text"
                            placeholder={isMarathi ? "विषय" : "Subject"}
                            className="w-full border rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-orange-500"
                        />

                        <textarea
                            placeholder={
                                isMarathi ? "तुमचा संदेश (ऐच्छिक)" : "Your Message (Optional)"
                            }
                            rows={4}
                            className="w-full border rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-orange-500"
                        ></textarea>

                        <motion.button
                            type="submit"
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.95 }}
                            className="bg-orange-500 text-white font-semibold px-5 py-2 rounded-md shadow-md hover:bg-orange-600 transition-all"
                        >
                            {isMarathi ? "पाठवा" : "Send"}
                        </motion.button>
                    </form>
                </motion.div>

                {/* Map Section */}
                
                    <motion.div
                        className="flex-1 relative"
                        style={{ y: floatY }}
                        whileHover={{ scale: 1.02 }}
                        transition={{ type: "spring", stiffness: 60 }}
                    >
                        <iframe
                            title="Amrut Map"
                            src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d3782.2413214807207!2d73.813008!3d18.563156!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bc2bf0066a39633%3A0x2b043f292a45e54b!2sAcademy%20of%20Maharashtra%20Research%2C%20Upliftment%20%26%20Training%20(AMRUT)%20Office!5e0!3m2!1sen!2sin!4v1762233033144!5m2!1sen!2sin"
                            className="w-full h-full border-0 rounded-r-xl"
                            allowFullScreen
                            loading="lazy"
                        ></iframe>
                    </motion.div>
            </div>
        </section>
    );
};

export default Contactus;
