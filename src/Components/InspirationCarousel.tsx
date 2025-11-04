import React, { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

// 🧠 Inspirational quotes data
const quotes = [
  {
    image: "/images/Carousel/f31e57ee847fc7496a0196f86867a177-150x150.jpg",
    name: "लोकमान्य बाळ गंगाधर टिळक",
    quote:
      "स्वतंत्रता संग्रामाचे अग्रणी.",
  },
  {
    image: "/images/Carousel/images-1-150x150.jpg",
    name: "छत्रपती शिवाजी महाराज",
    quote:
      " हिंदवी स्वराज्याचे संस्थापक.",
  },
  {
    image: "/images/Carousel/images-150x150.jpg",
    name: "स्वामी विवेकानंद",
    quote: "आध्यात्मिक गुरू, समाजसुधारक.",
  },
];

const InspirationCarousel = () => {
  const [index, setIndex] = useState(0);

  // Auto-slide every 5 seconds
  useEffect(() => {
    const timer = setInterval(() => {
      setIndex((prev) => (prev + 1) % quotes.length);
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  // 🎞️ Animation Variants
  const containerVariants = {
    hidden: { opacity: 0, x: 100 },
    visible: {
      opacity: 1,
      x: 0,
      transition: { staggerChildren: 0.2, duration: 0.6, ease: "easeOut" },
    },
    exit: { opacity: 0, x: -100, transition: { duration: 0.5 } },
  };

  const childVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { type: "spring", stiffness: 120 } },
  };

  return (
    <div className="w-full flex flex-col items-center justify-center bg-gradient-to-b from-orange-50 to-white py-10 overflow-hidden">
      {/* Header */}
      <motion.h2
        className="text-2xl md:text-3xl font-bold text-white bg-orange-600 w-full text-center py-3 shadow-md rounded-t-md font-martel"
        initial={{ y: -30, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.6 }}
      >
        महापुरुषांचे प्रेरणादायी विचार
      </motion.h2>

      {/* Carousel Container */}
      <div className="relative w-[90%] md:w-[70%] lg:w-[60%] mt-8">
        <AnimatePresence mode="wait">
          <motion.div
            key={index}
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            exit="exit"
            className="flex flex-col items-center bg-gradient-to-br from-orange-100 to-orange-50 border border-orange-200 rounded-xl p-8 shadow-lg"
          >
            {/* Image */}
            <motion.img
              variants={childVariants}
              src={quotes[index].image}
              alt={quotes[index].name}
              className="w-28 h-28 rounded-full border-4 border-blue-400 mb-4 object-cover shadow-lg"
            />

            {/* Name */}
            <motion.h3
              variants={childVariants}
              className="text-lg md:text-xl font-semibold text-orange-800 mb-3 text-center font-martel"
            >
              {quotes[index].name}
            </motion.h3>

            {/* Quote */}
            <motion.p
              variants={childVariants}
              className="text-gray-700 text-center italic leading-relaxed text-[16px] max-w-2xl font-martel"
            >
              “{quotes[index].quote}”
            </motion.p>
          </motion.div>
        </AnimatePresence>

        {/* Dots Navigation */}
        <div className="flex justify-center mt-6 space-x-2">
          {quotes.map((_, i) => (
            <motion.button
              key={i}
              onClick={() => setIndex(i)}
              className={`w-3 h-3 rounded-full transition-all duration-300 ${
                i === index ? "bg-blue-500 w-6" : "bg-orange-300"
              }`}
              whileHover={{ scale: 1.2 }}
              whileTap={{ scale: 0.9 }}
            ></motion.button>
          ))}
        </div>
      </div>
    </div>
  );
};

export default InspirationCarousel;
