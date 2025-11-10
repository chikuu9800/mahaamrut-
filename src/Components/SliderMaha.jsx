"use client";
import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import orangeCircle from "/images/Red_dot__Japanese_art_Drawing_Ink_wash_painting__sushi_takeaway__watercolor_Painting__sphere__chinese_Painting_png-removebg-preview (1).png";

const leftImages = [
  "/images/Mahapurush/1.png",
  "/images/Mahapurush/2.png",
  "/images/Mahapurush/3.png",
];

const data = [
  {
    title: "छत्रपती शिवाजी महाराज",
    details: `"जोपर्यंत तुमच्या मनात आत्मविश्वास आहे, तोपर्यंत तुम्हाला कोणीही पराभूत करू शकत नाही."`,
  },
  {
    title: "लोकमान्य बाळ गंगाधर टिळक",
    details: `"शिकवण्याचा आणि शिकण्याचा हक्क हा प्रत्येकाचा आहे. तो कोणत्याही परिस्थितीत हिरावून घेतला जाऊ शकत नाही."`,
  },
  {
    title: "स्वामी विवेकानंद",
    details: `"आपल्या जीवनात शंभर टक्के यश मिळवायचं असेल तर पिळवणुकीला नकार द्या, आणि मनाच्या शुद्धतेवर विश्वास ठेवा."`,
  },
];

const MaharashtraShowcase = () => {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setIndex((prev) => (prev + 1) % data.length);
    }, 4000);
    return () => clearInterval(timer);
  }, []);

  return (
    <div className="bg-gradient-to-b from-orange-100 via-orange-50 to-white bg-[length:100%_200%]">
      <section className="relative w-full flex flex-col justify-center items-center py-12 md:py-16 overflow-hidden min-h-[80vh]">
        {/* === Section Header === */}
        <motion.h1
          initial={{ opacity: 0, y: -30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-3xl md:text-5xl font-extrabold text-orange-700 mb-10 tracking-wide text-center px-4"
          style={{ fontFamily: "Baloo, sans-serif" }}
        >
          महापुरुषांचे प्रेरणादायी विचार
        </motion.h1>

        {/* === Inner Container (Darker Gradient + Shadowed) === */}
        <div className="relative z-20 w-[90%] md:w-[80%] rounded-3xl flex flex-col md:flex-row 
          bg-gradient-to-br from-orange-300 via-orange-200 to-orange-100 
          shadow-[0_20px_60px_rgba(0,0,0,0.25)] border border-orange-300/40
          overflow-hidden md:h-[60vh] backdrop-blur-md transition-all duration-500">

          {/* === LEFT SIDE IMAGE === */}
          <div className="md:w-1/2 w-full flex justify-center items-center 
            bg-gradient-to-b from-orange-100 via-orange-50 to-orange-100 
            p-8 sm:p-10 md:h-full h-[300px]">
            <AnimatePresence mode="wait">
              <motion.img
                key={index}
                src={leftImages[index]}
                alt={data[index].title}
                initial={{ opacity: 0, y: 40 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -40 }}
                transition={{ duration: 0.8 }}
                className="object-contain w-[250px] sm:w-[300px] md:w-[350px] h-[250px] sm:h-[300px] md:h-[350px] drop-shadow-[0_15px_20px_rgba(255,102,0,0.35)]"
              />
            </AnimatePresence>
          </div>

          {/* === RIGHT SIDE TEXT === */}
          <div
            className="md:w-1/2 w-full relative flex flex-col justify-center items-center text-center 
            p-6 sm:p-10 bg-gradient-to-b from-orange-50 via-orange-100 to-orange-200 md:h-full h-auto"
          >
            {/* === Subtle Animated Orange Circle === */}
            <motion.div
              className="absolute inset-0 bg-center bg-no-repeat bg-contain opacity-70"
              style={{
                backgroundImage: `url(${orangeCircle})`,
              }}
              animate={{
                scale: [1, 1.05, 1],
                opacity: [0.55, 0.8, 0.55],
              }}
              transition={{
                duration: 6,
                repeat: Infinity,
                ease: "easeInOut",
              }}
            ></motion.div>

            <AnimatePresence mode="wait">
              <motion.div
                key={index}
                initial={{ opacity: 0, x: 100 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -100 }}
                transition={{ duration: 0.8 }}
                className="relative z-10"
              >
                <h2
                  className="text-2xl md:text-4xl font-bold text-orange-800 mb-4 drop-shadow-[0_2px_2px_rgba(0,0,0,0.15)]"
                  style={{ fontFamily: "Baloo, sans-serif" }}
                >
                  {data[index].title}
                </h2>
                <p
                  className="text-gray-800 text-base md:text-xl leading-relaxed italic max-w-md mx-auto"
                  style={{ fontFamily: "Poppins, serif" }}
                >
                  {data[index].details}
                </p>
              </motion.div>
            </AnimatePresence>
          </div>
        </div>
      </section>
    </div>
  );
};

export default MaharashtraShowcase;
