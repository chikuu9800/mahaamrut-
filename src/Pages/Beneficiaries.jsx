"use client";
import React from "react";
import { motion } from "framer-motion";
import { ExternalLink } from "lucide-react";

const beneficiaries = [
  {
    id: 1,
    name: "श्री संदीप पाटील",
    location: "सातारा, महाराष्ट्र",
    scheme: "उद्योग प्रोत्साहन योजना",
    image: "/images/download__4_-removebg-preview.png",
    description:
      "AMRUT च्या प्रशिक्षण कार्यक्रमामुळे स्वतःचा उद्योग सुरू करण्यासाठी मला आत्मविश्वास आणि मार्गदर्शन मिळाले.",
  },
  {
    id: 2,
    name: "सौ. कविता देशमुख",
    location: "नाशिक, महाराष्ट्र",
    scheme: "महिला सक्षमीकरण योजना",
    image: "/images/download__4_-removebg-preview.png",
    description:
      "महिलांसाठी घेतलेल्या उद्यम कार्यशाळेमुळे मला रोजगाराचे उत्तम पर्याय मिळाले आणि आर्थिक स्वावलंबन साधता आले.",
  },
  {
    id: 3,
    name: "श्री विजय पवार",
    location: "कोल्हापूर, महाराष्ट्र",
    scheme: "कौशल्य विकास उपक्रम",
    image: "/images/download__4_-removebg-preview.png",
    description:
      "AMRUT च्या कौशल्य विकास कोर्समुळे मला औद्योगिक क्षेत्रात नोकरीची संधी मिळाली.",
  },
  {
    id: 4,
    name: "सौ. प्रिया शिंदे",
    location: "औरंगाबाद, महाराष्ट्र",
    scheme: "स्वरोजगार प्रोत्साहन योजना",
    image: "/images/download__4_-removebg-preview.png",
    description:
      "संस्थेच्या सहाय्याने मी माझा छोटा व्यवसाय सुरू करून स्वावलंबन मिळवले.",
  },
];

const beneficiaryLists = [
  { title: "स्वयं रोजगार प्रोत्साहन व प्रशिक्षण योजना लाभार्थी यादी क्र. ६",icon:"/images/Icons/1-removebg-preview.png", link: "https://mahaamrut.org.in/" },
  { title: "कृषी उत्पन्न आधारित उद्योगाचे प्रशिक्षण लाभार्थी यादी क्र. ६",icon:"/images/Icons/2-removebg-preview.png", link: "https://mahaamrut.org.in/" },
  { title: "महाराष्ट्र लोकसेवा आयोग वित्त वर्ष २०२५-२०२६ लाभार्थी यादी",icon:"/images/Icons/3-removebg-preview.png", link: "https://mahaamrut.org.in/" },
  { title: "अमृत बिझनेस इनक्यूबेशन योजना लाभार्थी",icon:"/images/Icons/4-removebg-preview.png", link: "https://mahaamrut.org.in/" },
  { title: "अमृत पेठ लाभार्थी",icon:"/images/Icons/5-removebg-preview.png", link: "https://mahaamrut.org.in/" },
  { title: "अमृत-महाराष्ट्र राज्य परीक्षा परिषद (GCC-TBC) अंतरिम लाभार्थी यादी",icon:"/images/Icons/6-removebg-preview.png", link: "https://mahaamrut.org.in/" },
  { title: "स्वयंरोजगार व कृषी लाभार्थी यादी",icon:"/images/Icons/7-removebg-preview.png", link: "https://mahaamrut.org.in/" },
  { title: "वैयक्तिक कर्ज व्याज परतावा योजना लाभार्थी यादी",icon:"/images/Icons/8-removebg-preview.png", link: "https://mahaamrut.org.in/" },
  { title: "इंडो जर्मन टूल रूम शॉर्ट टर्म लाभार्थी यादी",icon:"/images/Icons/9-removebg-preview.png", link: "https://mahaamrut.org.in/" },
  { title: "AIIMS, IIT, IIM, IIIT लाभार्थी यादी",icon:"/images/Icons/10-removebg-preview.png", link: "https://mahaamrut.org.in/" },
  { title: "UPSC लाभार्थी यादी",icon:"/images/Icons/11-removebg-preview.png", link: "https://mahaamrut.org.in/" },
  { title: "MPSC लाभार्थी यादी",icon:"/images/Icons/12-removebg-preview.png", link: "https://mahaamrut.org.in/" },
  { title: "वैयक्तिक व्याज परतावा प्रत्यक्ष लाभ मिळत असलेल्या लाभार्थींची यादी",icon:"/images/Icons/13-removebg-preview.png", link: "https://mahaamrut.org.in/" },
  { title: "अमृत आयात निर्यात प्रशिक्षण कार्यक्रम लाभार्थी यादी",icon:"/images/Icons/14-removebg-preview.png", link: "https://mahaamrut.org.in/" },
  { title: "अमृत सूर्यमित्र प्रशिक्षण कार्यक्रम लाभार्थी यादी",icon:"/images/Icons/15-removebg-preview.png", link: "https://mahaamrut.org.in/" },
  { title: "अमृत बेकरी प्रशिक्षण कार्यक्रम नागपूर विभाग लाभार्थी यादी",icon:"/images/Icons/16-removebg-preview.png", link: "https://mahaamrut.org.in/" },
  { title: "संगणक टंकलेखन व डिसेंबर २०२४ लाभार्थी यादी",icon:"/images/Icons/17-removebg-preview.png", link: "https://mahaamrut.org.in/" },
  { title: "ऑनलाइन लघुलेखन डिसेंबर २०२४ लाभार्थी यादी",icon:"/images/Icons/18-removebg-preview.png", link: "https://mahaamrut.org.in/" },
];

// === Animation Variants ===
const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.15, delayChildren: 0.2 },
  },
};

const cardVariants = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } },
};

export default function Beneficiaries() {
  return (
    <section className="w-full py-16 px-6 sm:px-10 md:px-20">

      {/* === Section 2: Beneficiary Lists (Zoom Effect) === */}
      <div className="text-center mb-20">
        <h2
          className="text-3xl sm:text-4xl font-bold text-orange-700 mb-3"
          style={{ fontFamily: "baloo, sans-serif", fontWeight: 700 }}
        >
          लाभार्थी यादी
        </h2>
        <p
          className="text-gray-600 text-base sm:text-lg"
          style={{ fontFamily: "poppins, sans-serif" }}
        >
          विविध प्रशिक्षण व योजनांअंतर्गत लाभार्थ्यांची यादी खालीलप्रमाणे आहे.
        </p>
      </div>

      <motion.div
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 mb-20"
      >
        {beneficiaryLists.map((item, index) => (
          <motion.div
            key={index}
            variants={cardVariants}
            whileHover={{
              scale: 1.05,
              transition: { duration: 0.3, ease: "easeOut" },
            }}
            className="bg-white border border-orange-200 rounded-2xl p-5 shadow-sm hover:shadow-lg transition-all duration-300 flex flex-col justify-between"
          >
            <div>
              <img
                src={item.icon}
                alt="File Icon"
                className="w-[50%] m-auto mb-3"
              />
              <h3
                className="text-orange-700 text-base font-semibold mb-3 leading-snug"
                style={{ fontFamily: "poppins, sans-serif", fontWeight: 500 }}
              >
                {item.title}
              </h3>
            </div>
            <a
              href={item.link}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center text-sm text-orange-600 hover:text-orange-800 mt-auto font-medium transition-colors"
              style={{ fontFamily: "poppins, sans-serif" }}
            >
              यादी पहा <ExternalLink size={16} className="ml-2" />
            </a>
          </motion.div>
        ))}
      </motion.div>

      {/* === Section 1: Beneficiary Stories (Floating Effect) === */}
      <div className="text-center mb-12">
        <h2
          className="text-3xl sm:text-4xl font-bold text-orange-700 mb-3"
          style={{ fontFamily: "baloo, sans-serif", fontWeight: 700 }}
        >
          लाभार्थी अनुभव
        </h2>
        <p
          className="text-gray-600 text-base sm:text-lg"
          style={{ fontFamily: "poppins, sans-serif" }}
        >
          AMRUT च्या विविध योजनांमधून लाभ घेतलेल्या नागरिकांच्या कथा.
        </p>
      </div>

      <motion.div
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8"
      >
        {beneficiaries.map((person) => (
          <motion.div
            key={person.id}
            variants={cardVariants}
            whileHover={{
              y: -10,
              boxShadow: "0 15px 25px rgba(0,0,0,0.15)",
              transition: { duration: 0.3, ease: "easeOut" },
            }}
            className="bg-white rounded-2xl shadow-md hover:shadow-lg border border-orange-200 overflow-hidden transition-all duration-300 flex flex-col"
          >
            <div className="w-full bg-gray-100 bg-gradient-to-b from-orange-50 via-white to-orange-100">
              <img
                src={person.image}
                alt={person.name}
                className="w-[50%] m-auto"
              />
            </div>
            <div className="p-5 flex flex-col flex-grow">
              <h3
                className="text-orange-700 text-lg font-semibold"
                style={{ fontFamily: "baloo, sans-serif", fontWeight: 700 }}
              >
                {person.name}
              </h3>
              <p
                className="text-gray-500 text-sm mb-1"
                style={{ fontFamily: "poppins, sans-serif" }}
              >
                {person.location}
              </p>
              <p
                className="text-gray-700 text-sm flex-grow"
                style={{ fontFamily: "poppins, sans-serif" }}
              >
                {person.description}
              </p>
              <div className="mt-4">
                <span
                  className="inline-block bg-orange-100 text-orange-700 text-xs font-medium px-3 py-1 rounded-full"
                  style={{ fontFamily: "poppins, sans-serif" }}
                >
                  {person.scheme}
                </span>
              </div>
            </div>
          </motion.div>
        ))}
      </motion.div>
    </section>
  );
}
