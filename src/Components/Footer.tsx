import React, { useRef, useState } from "react";
import { motion, useInView } from "framer-motion";
import { Mail, Phone, Globe, MapPin, MessageSquare } from "lucide-react";
import { useLanguage } from "../Context/AuthContext";

const Footer = () => {
  const footerRef = useRef(null);
  const isInView = useInView(footerRef, { once: true, margin: "-50px" });
  const { isMarathi } = useLanguage();

  const [visitorCount] = useState({
    digits: [0, 4, 2, 0, 9, 2, 8],
  });

  const content = {
    marathi: {
      aboutTitle: "आमच्याबद्दल",
      aboutText:
        "अकॅडमी ऑफ महाराष्ट्र रिसर्च, उन्नती आणि प्रशिक्षण (अमृत) ही संस्था महाराष्ट्र शासनाने 22 ऑगस्ट 2019 रोजी संशोधन, उन्नती आणि प्रशिक्षण क्षेत्रात उत्कृष्टतेसाठी स्थापन केली आहे.",
      readMore: "अधिक वाचा",
      linksTitle: "महत्त्वपूर्ण दुवे",
      links: ["ई-बुक", "परिपत्रक", "अभिप्राय", "RTI", "शासन निर्णय"],
      contactTitle: "संपर्क माहिती",
      visitorTitle: "भेट देणारे",
      email: "ईमेल:",
      mobile: "मोबाइल:",
      website: "वेबसाइट:",
      location: "स्थान:",
      locationText:
        "अकॅडमी ऑफ महाराष्ट्र रिसर्च,\nउन्नती आणि प्रशिक्षण (अमृत),\nमहाराजा सयाजीराव गायकवाड उद्योग भवन,\nपाचवा मजला, औंध, पुणे 411067.",
    },
    english: {
      aboutTitle: "About Us",
      aboutText:
        "Academy of Maharashtra Research, Upliftment and Training (Amrut) is an institution established by the Government of Maharashtra on August 22, 2019, dedicated to research, development, and training in various fields for the betterment of the state.",
      readMore: "Read More",
      linksTitle: "Important Links",
      links: ["E-Book", "Circular", "Feedback", "RTI", "Govt. Resolutions"],
      contactTitle: "Contact Information",
      visitorTitle: "Visitor Count",
      email: "Email:",
      mobile: "Mobile:",
      website: "Website:",
      location: "Location:",
      locationText:
        "Academy of Maharashtra Research,\nUpliftment & Training (Amrut),\nMaharaja Sayajirao Gaikwad Udyog Bhavan,\nFifth Floor, Aundh, Pune 411067.",
    },
  };

  const currentContent = isMarathi ? content.marathi : content.english;

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.15, delayChildren: 0.1 },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } },
  };

  return (
    <footer
      style={{ fontFamily: 'baloo, serif' }}
      ref={footerRef}
      className="relative overflow-hidden bg-gradient-to-br from-blue-950 via-slate-900 to-blue-900 text-white mt-auto"
    >
      {/* Glowing floating orbs */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <motion.div
          className="absolute top-10 left-10 w-72 h-72 bg-blue-500/10 rounded-full blur-3xl"
          animate={{ x: [0, 40, 0], y: [0, 30, 0], scale: [1, 1.2, 1] }}
          transition={{ duration: 15, repeat: Infinity, ease: "easeInOut" }}
        />
        <motion.div
          className="absolute bottom-10 right-10 w-72 h-72 bg-orange-400/10 rounded-full blur-3xl"
          animate={{ x: [0, -50, 0], y: [0, -30, 0], scale: [1, 1.3, 1] }}
          transition={{ duration: 20, repeat: Infinity, ease: "easeInOut" }}
        />
      </div>

      <motion.div
        className="relative container mx-auto px-6 py-14 md:py-20"
        variants={containerVariants}
        initial="hidden"
        animate={isInView ? "visible" : "hidden"}
      >
        {/* Grid Content */}
        <div className="grid md:grid-cols-3 gap-10 md:gap-16">
          {/* Column 1 */}
          <motion.div variants={itemVariants}>
            <h3 className="text-2xl font-bold mb-4 bg-gradient-to-r from-orange-400 to-yellow-400 bg-clip-text text-transparent font-martel">
              {currentContent.aboutTitle}
            </h3>
            <p className="text-gray-300 text-sm leading-relaxed mb-4 font-martel">
              {currentContent.aboutText}
            </p>
            <motion.button
              className="px-5 py-2 bg-gradient-to-r from-orange-500 to-blue-500 rounded-full text-white font-medium text-sm hover:shadow-lg transition-all font-martel"
              whileHover={{ scale: 1.05 }}
            >
              {currentContent.readMore}
            </motion.button>
          </motion.div>

          {/* Column 2 */}
          <motion.div variants={itemVariants}>
            <h3 className="text-2xl font-bold mb-4 bg-gradient-to-r from-orange-400 to-yellow-400 bg-clip-text text-transparent font-martel">
              {currentContent.linksTitle}
            </h3>
            <ul className="space-y-2 font-martel">
              {currentContent.links.map((link, i) => (
                <motion.li
                  key={i}
                  whileHover={{ x: 6 }}
                  transition={{ type: "spring", stiffness: 300 }}
                >
                  <a href="#" className="text-gray-300 hover:text-orange-400 transition">
                    {link}
                  </a>
                </motion.li>
              ))}
            </ul>
          </motion.div>

          {/* Column 3 */}
          <motion.div variants={itemVariants}>
            <h3 className="text-2xl font-bold mb-4 bg-gradient-to-r from-orange-400 to-yellow-400 bg-clip-text text-transparent font-martel">
              {currentContent.contactTitle}
            </h3>
            <ul className="space-y-4 text-gray-300 text-sm font-martel">
              <li className="flex items-center gap-2">
                <Mail className="text-orange-400 w-4 h-4" /> {currentContent.email}{" "}
                <a href="mailto:info@mahaamrut.org.in" className="hover:text-orange-300">
                  info@mahaamrut.org.in
                </a>
              </li>
              <li className="flex items-center gap-2">
                <Phone className="text-orange-400 w-4 h-4" /> {currentContent.mobile}{" "}
                <a href="tel:9730151450" className="hover:text-orange-300">
                  9730151450
                </a>
              </li>
              <li className="flex items-center gap-2">
                <Globe className="text-orange-400 w-4 h-4" /> {currentContent.website}{" "}
                <a
                  href="https://www.mahaamrut.org.in"
                  target="_blank"
                  rel="noreferrer"
                  className="hover:text-orange-300"
                >
                  www.mahaamrut.org.in
                </a>
              </li>
              <li className="flex items-start gap-2">
                <MapPin className="text-orange-400 w-4 h-4 mt-1" />
                <span className="whitespace-pre-line">{currentContent.locationText}</span>
              </li>
            </ul>
          </motion.div>
        </div>

        {/* Visitor Count */}
        <motion.div variants={itemVariants} className="mt-12 border-t border-white/10 pt-6">
          <h3 className="text-xl font-semibold mb-3 text-orange-400 font-martel">
            {currentContent.visitorTitle}
          </h3>
          <div className="flex gap-2">
            {visitorCount.digits.map((digit, index) => (
              <motion.div
                key={index}
                className="w-10 h-12 bg-white/10 backdrop-blur-sm rounded-lg flex items-center justify-center text-xl font-bold text-orange-300 border border-white/20"
                whileHover={{ y: -5 }}
              >
                {digit}
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Bottom Bar */}
        <motion.div
          className="mt-10 pt-6 border-t border-white/10 flex flex-col md:flex-row justify-between items-center text-gray-400 text-sm font-martel"
          variants={itemVariants}
        >
          <p>© 2025 Academy of Maharashtra Research. All rights reserved.</p>
          <div className="flex gap-4">
            <a href="#" className="hover:text-orange-400 transition">
              Privacy Policy
            </a>
            <a href="#" className="hover:text-orange-400 transition">
              Terms of Service
            </a>
          </div>
        </motion.div>

        {/* WhatsApp Floating Button */}
        <motion.a
          href="https://wa.me/919730151450"
          target="_blank"
          rel="noopener noreferrer"
          className="fixed bottom-6 right-6 bg-green-500 text-white p-3 rounded-full shadow-lg z-50"
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.95 }}
        >
          <MessageSquare className="w-6 h-6" />
        </motion.a>
      </motion.div>
    </footer>
  );
};

export default Footer;
