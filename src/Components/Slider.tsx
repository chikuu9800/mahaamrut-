// import React, { useState, useEffect } from 'react';
// import { motion, AnimatePresence } from 'framer-motion';
// import { ChevronLeft, ChevronRight, Pause, Play } from 'lucide-react';

// const Slider = () => {
//   const [currentIndex, setCurrentIndex] = useState(0);
//   const [isAutoPlay, setIsAutoPlay] = useState(true);

//   const slides = [
//     {
//       id: 1,
//       title: "",
//       image: "/images/SliderImg/WhatsApp-Image-2025-02-14-at-13.36.10-700x340.jpeg"
//     },
//     {
//       id: 2,
//       title: "",
//       image: "/images/SliderImg/IMG_2757-700x340.jpg"
//     },
//     {
//       id: 3,
//       title: "",
//       image: "/images/SliderImg/IMG_1944-700x340.jpg"
//     },
//     {
//       id: 4,
//       title: "",
//       image: "/images/SliderImg/IMG_2479-700x340.jpg"
//     },
//     {
//       id: 5,
//       title: "Amravati-Div",
//       image: "/images/SliderImg/Amravati-Div-700x340.jpg"
//     },
//     {
//       id: 6,
//       title: "Konkan-Div",
//       image: "/images/SliderImg/Konkan-Div-700x340.jpg"
//     },
//     {
//       id: 7,
//       title: "Nashik-Div",
//       image: "/images/SliderImg/Nashik-Div-700x340.jpg"
//     },
//     {
//       id: 8,
//       title: "Pune-Div",
//       image: "/images/SliderImg/Pune-Div-700x340.jpg"
//     }
//   ];

//   const nextSlide = () => {
//     setCurrentIndex((prev) => (prev + 1) % slides.length);
//   };

//   const prevSlide = () => {
//     setCurrentIndex((prev) => (prev - 1 + slides.length) % slides.length);
//   };

//   const goToSlide = (index) => {
//     setCurrentIndex(index);
//   };

//   // Auto-play functionality
//   useEffect(() => {
//     if (!isAutoPlay) return;

//     const interval = setInterval(() => {
//       nextSlide();
//     }, 3500);

//     return () => clearInterval(interval);
//   }, [currentIndex, isAutoPlay]);

//   return (
//     <div className="min-h-screen flex items-center justify-center p-4 bg-gray-50">
//       <div className="w-full max-w-5xl">
//         <div className="relative bg-white rounded-2xl shadow-2xl overflow-hidden">
//           {/* Slider Container */}
//           <div className="relative h-96 md:h-[500px] overflow-hidden">
//             <AnimatePresence mode="wait">
//               <motion.div
//                 key={currentIndex}
//                 initial={{ opacity: 0, x: 100 }}
//                 animate={{ opacity: 1, x: 0 }}
//                 exit={{ opacity: 0, x: -100 }}
//                 transition={{ duration: 0.5, ease: "easeInOut" }}
//                 className="absolute inset-0"
//               >
//                 <img
//                   src={slides[currentIndex].image}
//                   alt={slides[currentIndex].title}
//                   className="w-full h-full object-cover"
//                 />
                
//                 {/* Title Overlay */}
//                 <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 to-transparent p-6">
//                   <motion.h2
//                     initial={{ opacity: 0, y: 20 }}
//                     animate={{ opacity: 1, y: 0 }}
//                     transition={{ delay: 0.2 }}
//                     className="text-white text-3xl md:text-4xl font-bold"
//                   >
//                     {slides[currentIndex].title}
//                   </motion.h2>
//                 </div>
//               </motion.div>
//             </AnimatePresence>
//           </div>

//           {/* Previous Button */}
//           <button
//             onClick={prevSlide}
//             className="absolute left-4 top-1/2 -translate-y-1/2 bg-white/90 hover:bg-white rounded-full p-3 shadow-lg transition-all duration-200 hover:scale-110 z-10"
//           >
//             <ChevronLeft className="w-6 h-6 text-gray-800" />
//           </button>

//           {/* Next Button */}
//           <button
//             onClick={nextSlide}
//             className="absolute right-4 top-1/2 -translate-y-1/2 bg-white/90 hover:bg-white rounded-full p-3 shadow-lg transition-all duration-200 hover:scale-110 z-10"
//           >
//             <ChevronRight className="w-6 h-6 text-gray-800" />
//           </button>

//           {/* Play/Pause Button */}
//           <button
//             onClick={() => setIsAutoPlay(!isAutoPlay)}
//             className="absolute top-4 right-4 bg-white/90 hover:bg-white rounded-full p-3 shadow-lg transition-all duration-200 hover:scale-110 z-10"
//           >
//             {isAutoPlay ? (
//               <Pause className="w-5 h-5 text-gray-800" />
//             ) : (
//               <Play className="w-5 h-5 text-gray-800" />
//             )}
//           </button>

//           {/* Dots Indicator */}
//           <div className="absolute bottom-6 left-1/2 -translate-x-1/2 flex gap-2 z-10">
//             {slides.map((_, idx) => (
//               <button
//                 key={idx}
//                 onClick={() => goToSlide(idx)}
//                 className={`transition-all duration-300 rounded-full ${
//                   idx === currentIndex
//                     ? 'bg-white w-8 h-3'
//                     : 'bg-white/50 hover:bg-white/75 w-3 h-3'
//                 }`}
//               />
//             ))}
//           </div>
//         </div>

//         {/* Counter */}
//         <div className="text-center mt-6 text-gray-600 text-lg font-medium">
//           {currentIndex + 1} / {slides.length}
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Slider;



import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronLeft, ChevronRight, Pause, Play } from 'lucide-react';

const ImageSlider = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isAutoPlay, setIsAutoPlay] = useState(true);

  const slides = [
        {
          id: 1,
          title: "",
          image: "/images/SliderImg/WhatsApp-Image-2025-02-14-at-13.36.10-700x340.jpeg"
        },
        {
          id: 2,
          title: "",
          image: "/images/SliderImg/IMG_2757-700x340.jpg"
        },
        {
          id: 3,
          title: "",
          image: "/images/SliderImg/IMG_1944-700x340.jpg"
        },
        {
          id: 4,
          title: "",
          image: "/images/SliderImg/IMG_2479-700x340.jpg"
        },
        {
          id: 5,
          title: "Amravati-Div",
          image: "/images/SliderImg/Amravati-Div-700x340.jpg"
        },
        {
          id: 6,
          title: "Konkan-Div",
          image: "/images/SliderImg/Konkan-Div-700x340.jpg"
        },
        {
          id: 7,
          title: "Nashik-Div",
          image: "/images/SliderImg/Nashik-Div-700x340.jpg"
        },
        {
          id: 8,
          title: "Pune-Div",
          image: "/images/SliderImg/Pune-Div-700x340.jpg"
        }
      ];

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev + 1) % slides.length);
  };

  const prevSlide = () => {
    setCurrentIndex((prev) => (prev - 1 + slides.length) % slides.length);
  };

  const goToSlide = (index) => {
    setCurrentIndex(index);
  };

  // Auto-play functionality
  useEffect(() => {
    if (!isAutoPlay) return;

    const interval = setInterval(() => {
      nextSlide();
    }, 3500);

    return () => clearInterval(interval);
  }, [currentIndex, isAutoPlay]);

  return (
    <div className=" flex items-center justify-center sm:p-4 ">
      <div className="w-full max-w-5xl">
        <div className="relative bg-white rounded-xl sm:rounded-2xl shadow-2xl overflow-hidden">
          {/* Slider Container */}
          <div className="relative h-64 sm:h-80 md:h-96 lg:h-[500px] overflow-hidden">
            <AnimatePresence mode="wait">
              <motion.div
                key={currentIndex}
                initial={{ opacity: 0, x: 100 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -100 }}
                transition={{ duration: 0.5, ease: "easeInOut" }}
                className="absolute inset-0"
              >
                <img
                  src={slides[currentIndex].image}
                  alt={slides[currentIndex].title}
                  className="w-full h-full object-cover"
                />
                
                {/* Title Overlay */}
                <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 to-transparent p-3 sm:p-4 md:p-6">
                  <motion.h2
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.2 }}
                    className="text-white text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold"
                  >
                    {slides[currentIndex].title}
                  </motion.h2>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>

          {/* Previous Button */}
          <button
            onClick={prevSlide}
            className="absolute left-2 sm:left-4 top-1/2 -translate-y-1/2 bg-white/90 hover:bg-white rounded-full p-2 sm:p-3 shadow-lg transition-all duration-200 hover:scale-110 z-10"
          >
            <ChevronLeft className="w-5 h-5 sm:w-6 sm:h-6 text-gray-800" />
          </button>

          {/* Next Button */}
          <button
            onClick={nextSlide}
            className="absolute right-2 sm:right-4 top-1/2 -translate-y-1/2 bg-white/90 hover:bg-white rounded-full p-2 sm:p-3 shadow-lg transition-all duration-200 hover:scale-110 z-10"
          >
            <ChevronRight className="w-5 h-5 sm:w-6 sm:h-6 text-gray-800" />
          </button>

          {/* Play/Pause Button */}
          <button
            onClick={() => setIsAutoPlay(!isAutoPlay)}
            className="absolute top-2 sm:top-4 right-2 sm:right-4 bg-white/90 hover:bg-white rounded-full p-2 sm:p-3 shadow-lg transition-all duration-200 hover:scale-110 z-10"
          >
            {isAutoPlay ? (
              <Pause className="w-4 h-4 sm:w-5 sm:h-5 text-gray-800" />
            ) : (
              <Play className="w-4 h-4 sm:w-5 sm:h-5 text-gray-800" />
            )}
          </button>

          {/* Dots Indicator */}
          <div className="absolute bottom-4 sm:bottom-6 left-1/2 -translate-x-1/2 flex gap-1.5 sm:gap-2 z-10">
            {slides.map((_, idx) => (
              <button
                key={idx}
                onClick={() => goToSlide(idx)}
                className={`transition-all duration-300 rounded-full ${
                  idx === currentIndex
                    ? 'bg-white w-6 sm:w-8 h-2.5 sm:h-3'
                    : 'bg-white/50 hover:bg-white/75 w-2.5 sm:w-3 h-2.5 sm:h-3'
                }`}
              />
            ))}
          </div>
        </div>

        {/* Counter */}
        <div className="text-center mt-4 sm:mt-6 text-gray-600 text-base sm:text-lg font-medium">
          {currentIndex + 1} / {slides.length}
        </div>
      </div>
    </div>
  );
};

export default ImageSlider;