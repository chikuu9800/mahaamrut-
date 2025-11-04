import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronDown } from "lucide-react";
import Slider from "../Components/Slider";
import AboutUs from "../Components/Aboutus";
import InspirationCarousel from "../Components/InspirationCarousel";
import Contactus from "../Components/Contactus";

const Home = () => {
  const [activeIndex, setActiveIndex] = useState(null);
  const [activeSubIndex, setActiveSubIndex] = useState(null);

  const toggleAccordion = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
    setActiveSubIndex(null);
  };

  const toggleSubAccordion = (index) => {
    setActiveSubIndex(activeSubIndex === index ? null : index);
  };

  const accordionData = [
    "अमृत – MCED लघुउद्योजक, स्वयंरोजगार प्रोत्साहन व प्रशिक्षण योजना",
    "अमृत – विविध स्पर्धा परीक्षा पायाभूत प्रशिक्षण कार्यक्रम",
    "AIIMS, IIT, IIM, IIIT संस्थांमध्ये प्रवेश घेतलेल्या विद्यार्थ्यांना अर्थसहाय्य योजना",
    {
      title: "UPSC स्पर्धा परीक्षा",
      submenu: [
        {
          title: "अभियांत्रिकी सेवा",
          subdetails: ["पूर्व परीक्षा उत्तीर्ण", "मुख्य परीक्षा उत्तीर्ण"],
        },
        {
          title: "नागरी सेवा",
          subdetails: ["पूर्व परीक्षा उत्तीर्ण", "मुख्य परीक्षा उत्तीर्ण"],
        },
        {
          title: "वन सेवा",
          subdetails: ["पूर्व परीक्षा उत्तीर्ण", "मुख्य परीक्षा उत्तीर्ण"],
        },
      ],
    },
    {
      title: "MPSC च्या मुख्य परीक्षा",
      submenu: [
        "अन्न व औषध प्रशासकीय सेवा मुख्य परीक्षा",
        "दिवाणी न्यायाधीश कनिष्ठ स्तर व न्याय दंडाधिकारी",
        "निरीक्षक वैधमापन शास्त्र मुख्य परीक्षा",
        "महाराष्ट्र अराजपत्रित गट-ब",
        "महाराष्ट्र कृषी सेवा मुख्य परीक्षा",
        "महाराष्ट्र तांत्रिक अभियंता सेवा मुख्य परीक्षा",
        "महाराष्ट्र राज्यपत्रित नागरी सेवा संयुक्त पूर्व परीक्षा",
        "महाराष्ट्र वन सेवा मुख्य परीक्षा",
        "महाराष्ट्र विद्युत अभियांत्रिकी सेवा मुख्य परीक्षा",
        "महाराष्ट्र विद्युत व यांत्रिकी अभियांत्रिकी सेवा मुख्य परीक्षा",
        "महाराष्ट्र स्थापत्य अभियांत्रिकी सेवा मुख्य परीक्षा",
        "राज्य सेवा मुख्य परीक्षा",
      ],
    },
    "शासकीय संगणक टंकलेखन व लघुलेखन परीक्षा (GCC-TBC)",
    "कृषि उद्योग प्रशिक्षण योजना",
    "स्वरोजगार प्रोत्साहन व प्रशिक्षण योजना",
    "ड्रोन पायलट प्रशिक्षण योजना",
    "अमृत - CIPET कौशल्य विकास प्रशिक्षण",
    "अमृत - NIELIT कौशल्य विकास प्रशिक्षण",
    "आर्थिक साक्षरता प्रशिक्षण योजना",
    "अमृत सुवर्णिम प्रशिक्षण योजना",
    "अमृत आयात-निर्यात प्रशिक्षण योजना",
    "अमृत - बेकरी प्रशिक्षण योजना",
    "तांत्रिक रोजगार प्रशिक्षण (IGTR) योजना",
    "माहिती तंत्रज्ञान आणि इलेक्ट्रॉनिक्स तसेच उच्च कार्यक्षमता संगणक प्रशिक्षण (C-DAC)",
    "अमृत - BHAU Incubation Program",
    "अमृत - MSSU Incubation Program",
    "अमृत - कलश (MKCL) अमृत सॉफ्ट स्किल व संगणक कौशल्य विकास योजना",
    "वैक्तिक कर्ज व्याज परतावा योजना",
    "अमृत - स्वयं शिक्षण प्रोत्साहन योजना",
  ];

  const containerVariants = {
    hidden: { opacity: 0, y: 25 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { staggerChildren: 0.05, duration: 0.8, ease: "easeOut" },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 15 },
    visible: { opacity: 1, y: 0 },
  };

  return (
    <div className="bg-gradient-to-br from-blue-50 via-white to-blue-100 font-martel" style={{fontFamily: 'baloo, serif' }}>
    

      {/* Animated background */}
      <motion.div
        className="absolute inset-0 -z-10 "
        animate={{
          backgroundPosition: ["0% 0%", "100% 100%"],
        }}
        transition={{
          duration: 20,
          ease: "linear",
          repeat: Infinity,
          repeatType: "reverse",
        }}
      />

      <motion.div
        className="flex flex-col md:flex-row justify-center items-start gap-8 p-5  relative "
        initial="hidden"
        animate="visible"
        variants={containerVariants}
        overflow-hidden
      >
        {/* LEFT SIDE - Accordion */}
        <motion.div
          className="w-full md:w-2/3"
          variants={itemVariants}
          whileHover={{ y: -3 }}
          transition={{ type: "spring", stiffness: 120 }}
        >
          <motion.div
            className="overflow-y-auto h-[300px] border rounded-xl shadow-lg p-4 bg-white font-martel"
            whileHover={{ scale: 1.01, boxShadow: "0px 8px 24px rgba(0,0,0,0.08)" }}
            transition={{ duration: 0.3 }}
          >
            <motion.h2
              className="text-2xl font-bold text-blue-800 mb-4 font-martel"
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
            >
              योजना
            </motion.h2>

            <motion.div variants={containerVariants} className="font-martel">
              {accordionData.map((item, index) => (
                <motion.div
                  key={index}
                  className="mb-2 border-b"
                  variants={itemVariants}
                >
                  <motion.button
                    onClick={() => toggleAccordion(index)}
                    whileHover={{ x: 3 }}
                    whileTap={{ scale: 0.97 }}
                    className="font-martel w-full flex justify-between items-center py-2 text-left font-semibold hover:text-blue-700 transition-colors duration-200"
                  >
                    <span>{typeof item === "string" ? item : item.title}</span>
                    {typeof item !== "string" && item.submenu && (
                      <motion.div
                        animate={{ rotate: activeIndex === index ? 180 : 0 }}
                        transition={{ duration: 0.25 }}
                      >
                        <ChevronDown size={18} />
                      </motion.div>
                    )}
                  </motion.button>

                  <AnimatePresence initial={false}>
                    {activeIndex === index && typeof item !== "string" && (
                      <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: "auto", opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.5, ease: "easeOut" }}
                        className="pl-4 pb-2 bg-gray-50 text-sm text-gray-700 rounded font-martel"
                      >
                        {item.submenu.map((sub, subIndex) => (
                          <div key={subIndex} className="mb-1">
                            {typeof sub === "object" ? (
                              <>
                                <motion.button
                                  onClick={() => toggleSubAccordion(subIndex)}
                                  whileHover={{ x: 2 }}
                                  className="w-full flex justify-between items-center py-1 font-medium text-blue-700 font-martel"
                                >
                                  {sub.title}
                                  <motion.div
                                    animate={{
                                      rotate:
                                        activeSubIndex === subIndex ? 180 : 0,
                                    }}
                                    transition={{ duration: 0.25 }}
                                  >
                                    <ChevronDown size={14} />
                                  </motion.div>
                                </motion.button>

                                <AnimatePresence initial={false}>
                                  {activeSubIndex === subIndex && (
                                    <motion.ul
                                      initial={{ height: 0, opacity: 0 }}
                                      animate={{ height: "auto", opacity: 1 }}
                                      exit={{ height: 0, opacity: 0 }}
                                      transition={{ duration: 0.4 }}
                                      className="pl-4 list-disc text-gray-600 font-martel"
                                    >
                                      {sub.subdetails.map((detail, i) => (
                                        <motion.li
                                          key={i}
                                          initial={{ opacity: 0, x: -10 }}
                                          animate={{ opacity: 1, x: 0 }}
                                          transition={{
                                            delay: i * 0.05,
                                            duration: 0.3,
                                          }}
                                        >
                                          {detail}
                                        </motion.li>
                                      ))}
                                    </motion.ul>
                                  )}
                                </AnimatePresence>
                              </>
                            ) : (
                              <motion.div
                                className="pl-2 py-1 text-gray-700 font-martel"
                                whileHover={{ x: 5 }}
                              >
                                {sub}
                              </motion.div>
                            )}
                          </div>
                        ))}
                      </motion.div>
                    )}
                  </AnimatePresence>
                </motion.div>
              ))}
            </motion.div>
          </motion.div>
        </motion.div>

        {/* RIGHT SIDE - Options */}
        <motion.div
          className="w-full md:w-1/3"
          variants={itemVariants}
          whileHover={{ y: -3 }}
        >
          <motion.div
            className="overflow-y-auto h-[300px] border rounded-xl shadow-lg p-4 bg-white font-martel"
            whileHover={{ scale: 1.01, boxShadow: "0px 8px 24px rgba(0,0,0,0.08)" }}
            transition={{ duration: 0.3 }}
          >
            {/* <h2 className="text-2xl font-bold text-blue-800 mb-4">योजना</h2> */}

            {[
              "ई-बुक",
              "परिपत्रक",
              "Feedback / अभिप्राय",
              "RTI",
              "Govt. Resolutions",
            ].map((option, index) => (
              <motion.div
                key={index}
                whileHover={{
                  scale: 1.05,
                  backgroundColor: "#f0f9ff",
                  x: 5,
                }}
                whileTap={{ scale: 0.97 }}
                className="mb-2 border-b py-2 font-semibold text-gray-800 cursor-pointer rounded px-2 font-martel"
                transition={{ duration: 0.2 }}
              >
                {option}
              </motion.div>
            ))}
          </motion.div>
        </motion.div>
      </motion.div>
      <Slider />
      <AboutUs/>
      <InspirationCarousel />
      <Contactus />

    </div>
  );
};

export default Home;
