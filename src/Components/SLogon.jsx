import React from "react";
import { motion } from "framer-motion";

export default function SLogon() {
  return (
    <section
      className="relative w-full min-h-[60vh] py-10 px-4 flex items-center justify-center overflow-hidden bg-gradient-to-b from-white to-orange-100 "
    >
      {/* === Background Skyline Image (Smaller + Faded) === */}
      <div
        className="absolute inset-0 flex items-end justify-center -z-10"
      >
        <img
          src="/images/Indian_Monuments_PNG-removebg-preview.png"
          alt="Indian Monuments"
          className="w-[80%] md:w-[60%] opacity-30 object-contain my-[80px]"
        />
      </div>

      {/* === Inner Card === */}
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        viewport={{ once: true, amount: 0.3 }}
        className="relative max-w-6xl w-full bg-white rounded-2xl shadow-xl flex flex-col md:flex-row items-center gap-6 md:gap-10 p-6 md:p-10 z-10 overflow-visible my-[50px]"
      >
        {/* --- Maharashtra Map (Hidden on Mobile) --- */}
        <motion.div
          initial={{ opacity: 0, x: -80 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 1 }}
          viewport={{ once: true, amount: 0.4 }}
          className="absolute hidden md:flex -left-0 top-0 -translate-y-1/2 flex-shrink-0"
        >
          <div className="absolute inset-0 bg-orange-400 opacity-30 blur-2xl rounded-full w-64 h-64 -z-10 left-1/2 -translate-x-1/2 top-1/2 -translate-y-1/2" />
          <img
            src="/images/_-removebg-preview.png"
            alt="Maharashtra Map"
            className="w-56 md:w-72 opacity-100 drop-shadow-[0_0_25px_rgba(255,140,0,0.5)] hover:scale-105 transition-transform duration-300"
          />
        </motion.div>

        {/* --- Text Content --- */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.2 }}
          viewport={{ once: true, amount: 0.4 }}
          className="flex-1 text-center md:text-left md:ml-[40%]"
          style={{ fontFamily: "baloo, sans-serif" }}
        >
          <h1 className="text-2xl md:text-3xl font-bold font-bold text-orange-700 leading-snug">
            महाराष्ट्र संशोधन, उन्नती व प्रशिक्षण प्रवोधिनी (अमृत)
          </h1>
          <p className="text-gray-700 mt-4 text-lg">
            महाराष्ट्र राज्याच्या सर्वांगीण विकासासाठी नवोन्मेष, प्रशिक्षण आणि संशोधनाचे
            एकत्रिकरण करणारी योजना.
          </p>
          <p className="text-gray-600 mt-1">
            शिक्षण, उद्योजकता आणि कौशल्य विकासासाठी राज्यभर उपक्रम.
          </p>
        </motion.div>
      </motion.div>
    </section>
  );
}
