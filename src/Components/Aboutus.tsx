import React from "react";
import { motion } from "framer-motion";
// Replace with your image path

const AboutUs = () => {
  return (
    <motion.div
      className="flex flex-col items-center justify-center py-8 bg-[#FFF7F0] relative overflow-hidden"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1, ease: "easeOut" }}
    >
      {/* Animated Background Glow */}
      <motion.div
        className="absolute inset-0 bg-gradient-to-br from-orange-50 via-white to-blue-50 -z-10"
        animate={{
          backgroundPosition: ["0% 0%", "100% 100%"],
        }}
        transition={{
          duration: 15,
          ease: "linear",
          repeat: Infinity,
          repeatType: "reverse",
        }}
      />

      {/* Header */}
      <motion.div
        className="bg-orange-600 text-white text-center w-full py-3 text-2xl font-semibold shadow-md"
        initial={{ y: -30, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
      >
        आमच्याबद्दल
      </motion.div>

      {/* Main Content Card */}
      <motion.div
        className="flex flex-col md:flex-row bg-white shadow-lg border border-orange-200 rounded-b-md w-[90%] md:w-[85%] lg:w-[80%] mt-2 overflow-hidden hover:shadow-2xl transition-shadow duration-300"
        initial={{ scale: 0.95, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        whileHover={{ y: -4 }}
      >
        {/* Left Image Section */}
        <motion.div
          className="md:w-1/3 w-full flex items-center justify-center bg-gradient-to-br from-orange-100 to-orange-200"
          whileHover={{ scale: 1.03 }}
          transition={{ type: "spring", stiffness: 120 }}
        >
          <img
            src="images/maharashtramap.jpg"
            alt="About Amrut"
            className="w-full h-full object-contain p-6 md:p-4"
          />
        </motion.div>

        {/* Right Text Section */}
        <motion.div
          className="md:w-2/3 w-full p-6 md:p-8 text-gray-800 leading-relaxed text-justify text-[15px] bg-white"
          initial={{ x: 40, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ duration: 1, ease: "easeOut" }}
        >
          <p className="mb-4">
            राज्यातील खालच्या प्रवर्गातील आर्थिकदृष्ट्या दुर्बल घटकातील विद्यार्थी, युवक – युवती व इतर उमेदवार यांच्या
            उन्नती व विकासासाठी तसेच प्रशिक्षणासाठी{" "}
            <strong className="text-[#0C4DA2]">
              Academy of Maharashtra Research, Upliftment and Training (Amrut)
            </strong>{" "}
            ‘अमृत’ अर्थात महाराष्ट्र संशोधन, उन्नती व प्रशिक्षण संस्थेची स्थापना महाराष्ट्र शासनाने दिनांक २२ ऑगस्ट २०१९ च्या
            शासन निर्णयाद्वारे केली आहे.
          </p>

          <p className="mb-4">
            अमृत या संस्थेची नोंदणी समाज नोंदणी अधिनियम १८६० आणि सार्वजनिक विश्वस्त अधिनियम १९५० अंतर्गत करण्यात आलेली आहे.
            सदर संस्थेचे मुख्यालय पुणे येथे आहे. अमृत या संस्थेच्या योजना{" "}
            <span className="text-orange-600 font-medium">Board of Governance</span> च्या मार्गदर्शनाखाली कार्यान्वित होतात.
          </p>

          <p>
            अमृत संस्थेच्या नियामक मंडळाचे अध्यक्ष{" "}
            <span className="text-orange-600 font-medium">माननीय प्रधान सचिव</span>, इतर मागास बहुउद्देशीय विभाग, मंत्रालय, मुंबई हे आहेत.
            नियामक मंडळाच्या मान्यतेने राबवल्या जाणाऱ्या योजना तसेच मान्यताप्राप्त अधिकाराच्या कार्यकक्षेत विविध कार्यक्रमांची
            अंमलबजावणी करण्याचे काम अमृत या संस्थेमार्फत केले जाते.
          </p>
        </motion.div>
      </motion.div>
    </motion.div>
  );
};

export default AboutUs;
