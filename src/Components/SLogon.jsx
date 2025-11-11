"use client";
import React from "react";
import { motion } from "framer-motion";

export default function SLogon() {
  return (
    <section className="relative w-[80%] m-auto min-h-[50vh]  px-4 flex items-center justify-center overflow-hidden">
      {/* === Main Card Animation === */}
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        viewport={{ once: true, amount: 0.3 }}
        className="relative max-w-6xl w-full bg-white/95 backdrop-blur-sm rounded-2xl shadow-xl flex flex-col md:flex-row items-center justify-between text-center md:text-left z-10 overflow-hidden"
        style={{ fontFamily: "Baloo, sans-serif" }}
      >
        {/* === Soft background monuments image (anchored to bottom) === */}
        <div className="absolute inset-x-0 bottom-0 flex items-end justify-center opacity-10 pointer-events-none">
          <img
            src="/images/Indian_Monuments_PNG-removebg-preview.png"
            alt="Indian Monuments"
            className="w-full md:w-[100%] object-contain grayscale"
          />
        </div>

        {/* === Left: Maharashtra Map === */}
        <motion.div
          className="md:w-1/3 flex items-center justify-center p-6 md:p-10"
          initial={{ opacity: 0, x: -60 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{
            delay: 0.6,
            duration: 0.8,
            ease: "easeOut",
          }}
          viewport={{ once: true, amount: 0.3 }}
        >
          <img
            src="/images/_-removebg-preview.png"
            alt="Maharashtra Map"
            className="w-[220px] md:w-[280px] object-contain drop-shadow-lg"
          />
        </motion.div>

        {/* === Right: Text Content === */}
        <motion.div
          className="w-full p-8 md:p-12 flex flex-col justify-center"
          initial={{ opacity: 0, x: 60 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{
            delay: 0.8,
            duration: 0.8,
            ease: "easeOut",
          }}
          viewport={{ once: true, amount: 0.3 }}
        >
          <h1 className="text-2xl md:text-3xl font-bold text-orange-700 leading-snug relative z-10" style={{fontFamily: 'baloo, sans-serif'}}>
            महाराष्ट्र संशोधन, उन्नती व प्रशिक्षण प्रवोधिनी (अमृत)
          </h1>
          <p className="text-gray-900 mt-4 text-lg max-w-3xl relative z-10" style={{fontFamily: 'poppins, sans-serif'}}>
            महाराष्ट्र राज्याच्या सर्वांगीण विकासासाठी नवोन्मेष, प्रशिक्षण आणि संशोधनाचे
            एकत्रिकरण करणारी योजना.
          </p>
          <p className="text-gray-900 mt-2 max-w-2xl relative z-10" style={{fontFamily: 'poppins, sans-serif'}}>
            शिक्षण, उद्योजकता आणि कौशल्य विकासासाठी राज्यभर उपक्रम.
          </p>
        </motion.div>
      </motion.div>
    </section>
  );
}
