"use client";
import React from "react";
import { motion } from "framer-motion";

const yojanas = [
  {
    id: 1,
    title: "अमृत – MCED लघुउद्योजक, स्वयंरोजगार प्रोत्साहन व प्रशिक्षण योजना",
    details: `या योजनेचा उद्देश युवकांना लघुउद्योजक म्हणून तयार करणे आहे. प्रशिक्षणाद्वारे व्यवसाय नियोजन, वित्तीय व्यवस्थापन, विपणन कौशल्ये व शासनाच्या विविध योजनांची माहिती दिली जाते.`,
    benefits: "लघुउद्योजकांना व्यवसाय कौशल्य वाढविण्यासाठी प्रशिक्षण आणि सल्ला.",
    deadline: "31 डिसेंबर 2025",
  },
  {
    id: 2,
    title: "स्पर्धा परीक्षा मार्गदर्शन व प्रशिक्षण योजना",
    details: `या योजनेअंतर्गत विद्यार्थ्यांना MPSC, UPSC आणि इतर स्पर्धा परीक्षांसाठी गुणवत्तापूर्ण मार्गदर्शन आणि मोफत प्रशिक्षण दिले जाते.`,
    benefits: "मोफत प्रशिक्षण, मॉक टेस्ट आणि अनुभवी मार्गदर्शकांचे सत्र.",
    deadline: "30 एप्रिल 2025",
  },
  {
    id: 3,
    title: "कौशल्य विकास व रोजगार संधी योजना",
    details: `उद्योगजगताशी सुसंगत कौशल्य विकसित करून युवकांना रोजगार संधी उपलब्ध करून देणे.`,
    benefits: "नवीन तंत्रज्ञानाचे प्रशिक्षण व रोजगार मेळावे.",
    deadline: "15 जून 2025",
  },
  {
    id: 4,
    title: "महिला आर्थिक सक्षमीकरण योजना",
    details: `महिलांना उद्योग स्थापनेसाठी मार्गदर्शन, प्रशिक्षण व आर्थिक सहाय्य देऊन स्वावलंबन प्रोत्साहन.`,
    benefits: "महिला उद्योजकांना प्रशिक्षण, निधी आणि विपणन सहाय्य.",
    deadline: "30 सप्टेंबर 2025",
  },
  {
    id: 5,
    title: "संशोधन व नवोन्मेष प्रोत्साहन योजना",
    details: `संशोधन आणि नवकल्पनांना प्रोत्साहन देऊन विद्यार्थ्यांना आणि संशोधकांना आर्थिक व तांत्रिक सहाय्य.`,
    benefits: "संशोधन निधी, प्रयोगशाळा सुविधा आणि तांत्रिक सल्ला.",
    deadline: "31 मार्च 2026",
  },
  {
    id: 6,
    title: "ग्रामीण विकास व प्रशिक्षण योजना",
    details: `ग्रामीण भागातील युवकांना कृषी-आधारित उद्योग व शेतीपूरक व्यवसायांसाठी प्रशिक्षण देणे.`,
    benefits: "शेतीपूरक व्यवसायांसाठी प्रशिक्षण आणि सहकार्य.",
    deadline: "31 जुलै 2025",
  },
];

const cardVariants = {
  hidden: { opacity: 0, y: 50 },
  visible: (index) => ({
    opacity: 1,
    y: 0,
    transition: {
      delay: index * 0.2,
      duration: 0.6,
      ease: "easeOut",
    },
  }),
};

export default function YojanaSection() {
  return (
    <section className="w-[100%] md:w-[80%] m-auto bg-white py-16 px-4 md:px-10">
      {/* Section Title */}
      <div className="text-center mb-12">
        <h2
          className="text-3xl md:text-4xl font-bold text-orange-700 mb-2"
          style={{ fontFamily: "Baloo, serif" }}
        >
          अमृत योजना विभाग
        </h2>
        <p className="text-gray-600 text-base md:text-lg max-w-3xl mx-auto" style={{fontFamily: 'poppins, sans-serif'}}>
          अमृत संस्थेद्वारे राबवल्या जाणाऱ्या विविध प्रशिक्षण व विकास योजनांची माहिती.
        </p>
      </div>

      {/* Yojana Cards */}
      <div className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {yojanas.map((yojana, index) => (
          <motion.div
            key={yojana.id}
            variants={cardVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
            custom={index}
            whileHover={{
              y: -8,
              boxShadow: "0 10px 25px rgba(0, 0, 0, 0.15)",
            }}
            transition={{ type: "spring", stiffness: 300, damping: 20 }}
            className="relative bg-white border border-orange-200 rounded-2xl shadow-md p-6 pb-16 transition-all duration-500 ease-out cursor-pointer"
          >
            <h3
              className="text-lg md:text-xl font-semibold text-orange-800 mb-3"
              style={{ fontFamily: "Baloo, serif" }}
            >
              {yojana.title}
            </h3>

            <p className="text-gray-700 text-sm md:text-base mb-3 leading-relaxed" style={{fontFamily: 'poppins, sans-serif'}}>
              {yojana.details}
            </p>

            <p className="text-gray-800 font-medium mb-2" style={{fontFamily: 'poppins, sans-serif'}}>
              <span className="text-orange-700 font-semibold" >फायदे: </span>
              {yojana.benefits}
            </p>

            <p className="text-gray-700 text-sm mb-2" style={{fontFamily: 'poppins, sans-serif'}}>
              <span className="text-orange-600 font-semibold" >अंतिम दिनांक: </span>
              {yojana.deadline}
            </p>

            {/* Fixed Bottom Right Button */}
            <a
              href="https://mahaamrut.org.in/"
              target="_blank"
              rel="noopener noreferrer"
              style={{fontFamily: 'poppins, sans-serif'}}
              className="absolute bottom-4 right-4 px-4 py-2 bg-orange-600 text-white rounded-lg font-medium hover:bg-orange-700 shadow-md transition-all duration-300"
            >
              अधिक वाचा →
            </a>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
