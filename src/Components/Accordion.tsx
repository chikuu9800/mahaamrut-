import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import type { Variants, Easing } from "framer-motion";
import { ChevronDown } from "lucide-react";
import { useNavigate } from 'react-router-dom';

interface SubDetail {
  name: string;
  id: number;
}

interface SubMenu {
  title: string;
  subdetails: SubDetail[];
}

interface AccordionItem {
  id?: number;
  name?: string;
  title?: string;
  submenu?: SubMenu[];
}

export default function Accordion() {
  const navigate = useNavigate();
  const [activeIndex, setActiveIndex] = useState<number | null>(null);
  const [activeSubIndex, setActiveSubIndex] = useState<number | null>(null);

  const toggleAccordion = (index: number) => {
    setActiveIndex(activeIndex === index ? null : index);
    setActiveSubIndex(null);
  };

  const handleSchemeClick = (item: AccordionItem | SubDetail) => {
    if ('id' in item && item.id) {
      navigate(`/scheme/${item.id}`);
    }
  };

  const accordionData: AccordionItem[] = [
    { id: 1, name: "अमृत – MCED लघुउद्योजक, स्वयंरोजगार प्रोत्साहन व प्रशिक्षण योजना" },
    { id: 2, name: "अमृत – विविध स्पर्धा परीक्षा पायाभूत प्रशिक्षण कार्यक्रम" },
    { id: 3, name: "AIIMS, IIT, IIM, IIIT संस्थांमध्ये प्रवेश घेतलेल्या विद्यार्थ्यांना अर्थसहाय्य योजना" },
    {
      id: 4,
      title: "UPSC स्पर्धा परीक्षा",
      submenu: [
        {
          title: "अभियांत्रिकी सेवा",
          subdetails: [
            { name: "पूर्व परीक्षा उत्तीर्ण", id: 4 },
            { name: "मुख्य परीक्षा उत्तीर्ण", id: 5 }
          ]
        },
        {
          title: "नागरी सेवा",
          subdetails: [
            { name: "पूर्व परीक्षा उत्तीर्ण", id: 6 },
            { name: "मुख्य परीक्षा उत्तीर्ण", id: 7 }
          ]
        },
        {
          title: "वन सेवा",
          subdetails: [
            { name: "पूर्व परीक्षा उत्तीर्ण", id: 8 },
            { name: "मुख्य परीक्षा उत्तीर्ण", id: 9 }
          ]
        }
      ]
    },
    {
      id: 5,
      title: "MPSC च्या मुख्य परीक्षा",
      submenu: [
        {
          title: "MPSC परीक्षा",
          subdetails: [
            { name: "अन्न व औषध प्रशासकीय सेवा मुख्य परीक्षा", id: 10 },
            { name: "दिवाणी न्यायाधीश कनिष्ठ स्तर व न्याय दंडाधिकारी", id: 11 },
            { name: "निरीक्षक वैधमापन शास्त्र मुख्य परीक्षा", id: 12 },
            { name: "महाराष्ट्र अराजपत्रित गट-ब", id: 13 },
            { name: "महाराष्ट्र कृषी सेवा मुख्य परीक्षा", id: 14 },
            { name: "महाराष्ट्र तांत्रिक अभियंता सेवा मुख्य परीक्षा", id: 15 },
            { name: "महाराष्ट्र राज्यपत्रित नागरी सेवा संयुक्त पूर्व परीक्षा", id: 16 },
            { name: "महाराष्ट्र वन सेवा मुख्य परीक्षा", id: 17 },
            { name: "महाराष्ट्र विद्युत अभियांत्रिकी सेवा मुख्य परीक्षा", id: 18 },
            { name: "महाराष्ट्र विद्युत व यांत्रिकी अभियांत्रिकी सेवा मुख्य परीक्षा", id: 19 },
            { name: "महाराष्ट्र स्थापत्य अभियांत्रिकी सेवा मुख्य परीक्षा", id: 20 },
            { name: "राज्य सेवा मुख्य परीक्षा", id: 21 }
          ]
        }
      ]
    },
    { id: 6, name: "शासकीय संगणक टंकलेखन व लघुलेखन परीक्षा (GCC-TBC)" },
    { id: 7, name: "कृषि उद्योग प्रशिक्षण योजना" },
    { id: 8, name: "स्वरोजगार प्रोत्साहन व प्रशिक्षण योजना" },
    { id: 9, name: "ड्रोन पायलट प्रशिक्षण योजना" },
    { id: 10, name: "अमृत - CIPET कौशल्य विकास प्रशिक्षण" },
    { id: 11, name: "अमृत - NIELIT कौशल्य विकास प्रशिक्षण" },
    { id: 12, name: "आर्थिक साक्षरता प्रशिक्षण योजना" },
    { id: 13, name: "अमृत सुवर्णिम प्रशिक्षण योजना" },
    { id: 14, name: "अमृत आयात-निर्यात प्रशिक्षण योजना" },
    { id: 15, name: "अमृत - बेकरी प्रशिक्षण योजना" },
    { id: 16, name: "तांत्रिक रोजगार प्रशिक्षण (IGTR) योजना" },
    { id: 17, name: "माहिती तंत्रज्ञान आणि इलेक्ट्रॉनिक्स तसेच उच्च कार्यक्षमता संगणक प्रशिक्षण (C-DAC)" },
    { id: 18, name: "अमृत - BHAU Incubation Program" },
    { id: 19, name: "अमृत - MSSU Incubation Program" },
    { id: 20, name: "अमृत - कलश (MKCL) अमृत सॉफ्ट स्किल व संगणक कौशल्य विकास योजना" },
    { id: 21, name: "वैक्तिक कर्ज व्याज परतावा योजना" },
    { id: 22, name: "अमृत - स्वयं शिक्षण प्रोत्साहन योजना" },
  ];

  const containerVariants: Variants = {
    hidden: { opacity: 0, y: 25 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { 
        staggerChildren: 0.05, 
        duration: 0.8, 
        ease: "easeOut" as Easing 
      },
    },
  };

  const itemVariants: Variants = {
    hidden: { opacity: 0, y: 15 },
    visible: { opacity: 1, y: 0 },
  };

  return (<>
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
                  onClick={() => item.submenu ? toggleAccordion(index) : handleSchemeClick(item)}
                  whileHover={{ x: 3 }}
                  whileTap={{ scale: 0.97 }}
                  className="font-martel w-full flex justify-between items-center py-2 text-left font-semibold hover:text-blue-700 transition-colors duration:200"
                >
                  <span>{item.name || item.title}</span>
                  {item.submenu && (
                    <motion.div
                      animate={{ rotate: activeIndex === index ? 180 : 0 }}
                      transition={{ duration: 0.25 }}
                    >
                      <ChevronDown size={18} />
                    </motion.div>
                  )}
                </motion.button>

                <AnimatePresence initial={false}>
                  {activeIndex === index && item.submenu && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.5, ease: "easeOut" }}
                      className="pl-4 pb-2 bg-gray-50 text-sm text-gray-700 rounded font-martel"
                    >
                      {item.submenu?.map((sub, subIndex) => (
                        <div key={subIndex} className="mb-1">
                          {typeof sub === "object" ? (
                            <>
                              <motion.button
                                onClick={() => setActiveSubIndex(activeSubIndex === subIndex ? null : subIndex)}
                                whileHover={{ x: 2 }}
                                className="w-full flex justify-between items-center py-1 font-medium text-blue-700 font-martel"
                              >
                                {sub.title}
                                <motion.div
                                  animate={{
                                    rotate: activeSubIndex === subIndex ? 180 : 0,
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
                                        onClick={() => handleSchemeClick(detail)}
                                        className="cursor-pointer hover:text-blue-600"
                                      >
                                        {detail.name}
                                      </motion.li>
                                    ))}
                                  </motion.ul>
                                )}
                              </AnimatePresence>
                            </>
                          ) : null}
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
  </>)
}