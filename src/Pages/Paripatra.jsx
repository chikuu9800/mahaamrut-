"use client";
import React from "react";
import { motion } from "framer-motion";
import { ScrollText } from "lucide-react";

const notices = [
  { title: "EOI Expression of Interest", link: "https://mahaamrut.org.in/wp-content/uploads/2025/11/EOI-Expression-of-Interest.pdf" },
  { title: "शासकीय-संगणक-टंकलेखन-व-लघुलेखन-अर्थसहाय्य-योजना-प्रसिद्धीपत्रक", link: "https://mahaamrut.org.in/wp-content/uploads/2025/09/%E0%A4%B6%E0%A4%BE%E0%A4%B8%E0%A4%95%E0%A5%80%E0%A4%AF-%E0%A4%B8%E0%A4%82%E0%A4%97%E0%A4%A3%E0%A4%95-%E0%A4%9F%E0%A4%82%E0%A4%95%E0%A4%B2%E0%A5%87%E0%A4%96%E0%A4%A8-%E0%A4%B5-%E0%A4%B2%E0%A4%98%E0%A5%81%E0%A4%B2%E0%A5%87%E0%A4%96%E0%A4%A8-%E0%A4%85%E0%A4%B0%E0%A5%8D%E0%A4%A5%E0%A4%B8%E0%A4%B9%E0%A4%BE%E0%A4%AF%E0%A5%8D%E0%A4%AF-%E0%A4%AF%E0%A5%8B%E0%A4%9C%E0%A4%A8%E0%A4%BE-%E0%A4%AA%E0%A5%8D%E0%A4%B0%E0%A4%B8%E0%A4%BF%E0%A4%A6%E0%A5%8D%E0%A4%A7%E0%A5%80%E0%A4%AA%E0%A4%A4%E0%A5%8D%E0%A4%B0%E0%A4%95.pdf" },
  { title: "GCC -TBC मुदतवाढ प्रसिद्धीपत्रक", link: "https://mahaamrut.org.in/wp-content/uploads/2025/10/GCC-TBC-%E0%A4%AE%E0%A5%81%E0%A4%A6%E0%A4%A4%E0%A4%B5%E0%A4%BE%E0%A4%A2-%E0%A4%AA%E0%A5%8D%E0%A4%B0%E0%A4%B8%E0%A4%BF%E0%A4%A6%E0%A5%8D%E0%A4%A7%E0%A5%80%E0%A4%AA%E0%A4%A4%E0%A5%8D%E0%A4%B0%E0%A4%95.pdf" },
  { title: "जाहीर-प्रगटन", link: "https://mahaamrut.org.in/wp-content/uploads/2025/09/%E0%A4%9C%E0%A4%BE%E0%A4%B9%E0%A5%80%E0%A4%B0-%E0%A4%AA%E0%A5%8D%E0%A4%B0%E0%A4%97%E0%A4%9F%E0%A4%A8.pdf" },
  { title: "ड्रोन पायलट प्रशिक्षण योजना प्रसिद्धीपत्रक", link: "https://mahaamrut.org.in/wp-content/uploads/2025/10/%E0%A4%A1%E0%A5%8D%E0%A4%B0%E0%A5%8B%E0%A4%A8-%E0%A4%AA%E0%A4%BE%E0%A4%AF%E0%A4%B2%E0%A4%9F-%E0%A4%AA%E0%A5%8D%E0%A4%B0%E0%A4%B6%E0%A4%BF%E0%A4%95%E0%A5%8D%E0%A4%B7%E0%A4%A3-%E0%A4%AF%E0%A5%8B%E0%A4%9C%E0%A4%A8%E0%A4%BE-%E0%A4%AA%E0%A5%8D%E0%A4%B0%E0%A4%B8%E0%A4%BF%E0%A4%A6%E0%A5%8D%E0%A4%A7%E0%A5%80%E0%A4%AA%E0%A4%A4%E0%A5%8D%E0%A4%B0%E0%A4%95.pdf" },
  { title: "MPSC संयुक्त नागरी सेवा मुख्य परीक्षा-2024 (राज्य सेवा)", link: "https://mahaamrut.org.in/wp-content/uploads/2025/09/MPSC-%E0%A4%B8%E0%A4%82%E0%A4%AF%E0%A5%81%E0%A4%95%E0%A5%8D%E0%A4%A4-%E0%A4%A8%E0%A4%BE%E0%A4%97%E0%A4%B0%E0%A5%80-%E0%A4%B8%E0%A5%87%E0%A4%B5%E0%A4%BE-%E0%A4%AE%E0%A5%81%E0%A4%96%E0%A5%8D%E0%A4%AF-%E0%A4%AA%E0%A4%B0%E0%A5%80%E0%A4%95%E0%A5%8D%E0%A4%B7%E0%A4%BE-2024-%E0%A4%B0%E0%A4%BE%E0%A4%9C%E0%A5%8D%E0%A4%AF-%E0%A4%B8%E0%A5%87%E0%A4%B5%E0%A4%BE.pdf" },
  { title: "UPSC नागरी सेवा पूर्व परीक्षा 2025 उत्तीर्ण उमेदवारांना मुख्य परीक्षेच्या पूर्वतयारीसाठी अर्थसहाय्य", link: "https://mahaamrut.org.in/wp-content/uploads/2025/06/%E0%A4%B8%E0%A4%82%E0%A4%98-%E0%A4%B2%E0%A5%8B%E0%A4%95%E0%A4%B8%E0%A5%87%E0%A4%B5%E0%A4%BE-%E0%A4%86%E0%A4%AF%E0%A5%8B%E0%A4%97-%E0%A4%A8%E0%A4%BE%E0%A4%97%E0%A4%B0%E0%A5%80-%E0%A4%B8%E0%A5%87%E0%A4%B5%E0%A4%BE-%E0%A4%AA%E0%A5%82%E0%A4%B0%E0%A5%8D%E0%A4%B5-%E0%A4%AA%E0%A4%B0%E0%A5%80%E0%A4%95%E0%A5%8D%E0%A4%B7%E0%A4%BE-2025.pdf" },
  { title: "UPSC वन सेवा पूर्व परीक्षा – 2025 उत्तीर्ण उमेदवारांना मुख्य परीक्षेच्या पूर्वतयारीसाठी अर्थसहाय्य", link: "https://mahaamrut.org.in/wp-content/uploads/2025/06/%E0%A4%B8%E0%A4%82%E0%A4%98-%E0%A4%B2%E0%A5%8B%E0%A4%95%E0%A4%B8%E0%A5%87%E0%A4%B5%E0%A4%BE-%E0%A4%86%E0%A4%AF%E0%A5%8B%E0%A4%97-%E0%A4%B5%E0%A4%A8-%E0%A4%B8%E0%A5%87%E0%A4%B5%E0%A4%BE-%E0%A4%AA%E0%A5%82%E0%A4%B0%E0%A5%8D%E0%A4%B5-%E0%A4%AA%E0%A4%B0%E0%A5%80%E0%A4%95%E0%A5%8D%E0%A4%B7%E0%A4%BE-2025.pdf" },
  { title: "C-DAC प्रसिद्धी पत्रक", link: "https://mahaamrut.org.in/wp-content/uploads/2025/05/C-DAC-%E0%A4%AA%E0%A5%8D%E0%A4%B0%E0%A4%B8%E0%A4%BF%E0%A4%A6%E0%A5%8D%E0%A4%A7%E0%A5%80-%E0%A4%AA%E0%A4%A4%E0%A5%8D%E0%A4%B0%E0%A4%95.pdf" },
  { title: "MPSC अराजपत्रित (गट ब) मुख्य परीक्षेच्या पूर्व तयारीसाठी अर्थसहाय्य", link: "https://mahaamrut.org.in/wp-content/uploads/2025/05/%E0%A4%85%E0%A4%B0%E0%A4%BE%E0%A4%9C%E0%A4%AA%E0%A4%A4%E0%A5%8D%E0%A4%B0%E0%A5%80%E0%A4%A4-%E0%A4%97%E0%A4%9F-%E0%A4%AC-%E0%A4%B8%E0%A4%82%E0%A4%AF%E0%A5%81%E0%A4%95%E0%A5%8D%E0%A4%A4-%E0%A4%AA%E0%A5%82%E0%A4%B0%E0%A5%8D%E0%A4%B5-%E0%A4%AA%E0%A4%B0%E0%A5%80%E0%A4%95%E0%A5%8D%E0%A4%B7%E0%A4%BE-%E0%A5%A8%E0%A5%A6%E0%A5%A8%E0%A5%AA.pdf" },
  { title: "NIELIT प्रसिद्धीपत्रक", link: "https://mahaamrut.org.in/wp-content/uploads/2025/05/NIELIT-%E0%A4%AA%E0%A5%8D%E0%A4%B0%E0%A4%B8%E0%A4%BF%E0%A4%A6%E0%A5%8D%E0%A4%A7%E0%A5%80%E0%A4%AA%E0%A4%A4%E0%A5%8D%E0%A4%B0%E0%A4%95-.pdf" },
  { title: "कृषी सेवा मुख्य परीक्षेच्या पूर्व तयारीसाठी अर्थ सहाय्य", link: "https://mahaamrut.org.in/wp-content/uploads/2025/04/%E0%A4%95%E0%A5%83%E0%A4%B7%E0%A5%80-%E0%A4%B8%E0%A5%87%E0%A4%B5%E0%A4%BE-%E0%A4%AE%E0%A5%81%E0%A4%96%E0%A5%8D%E0%A4%AF-%E0%A4%AA%E0%A4%B0%E0%A5%80%E0%A4%95%E0%A5%8D%E0%A4%B7%E0%A5%87%E0%A4%9A%E0%A5%8D%E0%A4%AF%E0%A4%BE-%E0%A4%AA%E0%A5%82%E0%A4%B0%E0%A5%8D%E0%A4%B5-%E0%A4%A4%E0%A4%AF%E0%A4%BE%E0%A4%B0%E0%A5%80%E0%A4%B8%E0%A4%BE%E0%A4%A0%E0%A5%80-%E0%A4%85%E0%A4%B0%E0%A5%8D%E0%A4%A5-%E0%A4%B8%E0%A4%B9%E0%A4%BE%E0%A4%AF%E0%A5%8D%E0%A4%AF-2.pdf" },
  { title: "निविदा सूचना", link: "https://mahaamrut.org.in/wp-content/uploads/2025/05/%E0%A4%A8%E0%A4%BF%E0%A4%B5%E0%A4%BF%E0%A4%A6%E0%A4%BE-%E0%A4%B8%E0%A5%82%E0%A4%9A%E0%A4%A8%E0%A4%BE.pdf" },
  { title: "वनसेवा मुख्यपरीक्षेच्या पूर्व तयारीसाठी अर्थसहाय्य", link: "https://mahaamrut.org.in/wp-content/uploads/2025/04/%E0%A4%B5%E0%A4%A8%E0%A4%B8%E0%A5%87%E0%A4%B5%E0%A4%BE-%E0%A4%AE%E0%A5%81%E0%A4%96%E0%A5%8D%E0%A4%AF%E0%A4%AA%E0%A4%B0%E0%A5%80%E0%A4%95%E0%A5%8D%E0%A4%B7%E0%A5%87%E0%A4%9A%E0%A5%8D%E0%A4%AF%E0%A4%BE-%E0%A4%AA%E0%A5%82%E0%A4%B0%E0%A5%8D%E0%A4%B5-%E0%A4%A4%E0%A4%AF%E0%A4%BE%E0%A4%B0%E0%A5%80%E0%A4%B8%E0%A4%BE%E0%A4%A0%E0%A5%80-%E0%A4%85%E0%A4%B0%E0%A5%8D%E0%A4%A5%E0%A4%B8%E0%A4%B9%E0%A4%BE%E0%A4%AF%E0%A5%8D%E0%A4%AF-2.pdf" }
]
;

const Paripatra = () => {
  return (
    <section
      className="relative w-[90%] md:w-[85%] mx-auto my-12 px-6 sm:px-10 md:px-14 py-10 md:py-20 rounded-[40px] shadow-2xl overflow-hidden"
    >
      {/* === FIXED PARCHMENT BACKGROUND === */}
      <div className="absolute inset-0 rounded-[40px] z-0">
        <div
          className="absolute inset-0 rounded-[40px]"
          style={{
            background:
              "radial-gradient(circle at center, #f8e7c0 0%, #f0d9a1 60%, #c59a63 100%)",
            boxShadow:
              "inset 0 0 120px rgba(120,60,10,0.45), inset 0 0 50px rgba(80,40,0,0.35)",
          }}
        ></div>
        <div
          className="absolute inset-0 rounded-[40px] opacity-80 mix-blend-multiply"
          style={{
            backgroundImage: "url('/images/parchment-texture.png')",
            backgroundSize: "100% 100%",
            backgroundAttachment: "fixed",
            backgroundPosition: "center",
            backgroundRepeat: "no-repeat",
          }}
        ></div>
        <motion.div
          className="absolute inset-0 rounded-[40px] pointer-events-none"
          animate={{
            opacity: [0.75, 0.9, 0.8, 0.95, 0.75],
            scale: [1, 1.02, 1, 1.01, 1],
          }}
          transition={{
            duration: 10,
            repeat: Infinity,
            ease: "easeInOut",
          }}
          style={{
            background:
              "radial-gradient(circle at center, rgba(0,0,0,0) 60%, rgba(80,40,10,0.35) 100%)",
            mixBlendMode: "multiply",
          }}
        />
      </div>

      {/* Decorative Character */}
      <img
        src="/images/Gemini_Generated_Image_romgggromgggromg-removebg-preview.png"
        alt="Maratha Warrior"
        className="absolute bottom-0 right-6 md:right-16 w-28 sm:w-40 md:w-52 lg:w-64 object-contain opacity-95 drop-shadow-[0_8px_25px_rgba(0,0,0,0.3)] pointer-events-none select-none z-10"
      />

      {/* Title */}
      <div className="relative text-center z-20 py-8">
        <h1
          className="text-5xl md:text-6xl lg:text-7xl font-bold text-[#4A1D09] drop-shadow-[2px_2px_6px_rgba(0,0,0,0.3)] tracking-tight"
          style={{
            fontFamily: "'baloo', serif",
            letterSpacing: "-1px",  
          }}
        >
          परिपत्रक
        </h1>
        <div className="mt-3 w-40 h-[3px] bg-[#4A1D09] mx-auto rounded-full shadow-md"></div>
      </div>

      {/* Notice Cards */}
      <div className="relative z-20 grid sm:grid-cols-2 lg:grid-cols-3 gap-8 mt-12 pb-28">
        {notices.map((item, i) => (
          <motion.a
            key={i}
            href={item.link}
            target="_blank"
            rel="noopener noreferrer"
            initial={{ opacity: 0, y: 80 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: i * 0.1 }}
            viewport={{ once: true }}
            className="bg-[#fff9f0]/95 backdrop-blur-sm border border-[#c59a63]/50 hover:border-[#8b5e34] hover:shadow-[0_8px_20px_rgba(120,60,10,0.35)] transition-all rounded-xl p-6 flex items-center gap-4 text-left group relative overflow-hidden"
          >
            {/* Uniform Icon */}
            <div className="flex-shrink-0 w-8 h-8 flex items-center justify-center">
              <ScrollText className="w-6 h-6 text-[#a24a13] group-hover:rotate-12 transition-transform duration-300" />
            </div>

            {/* Text */}
            <h3
              className="text-[17px] md:text-[18px] font-khand-medium text-[#4A1D09] group-hover:text-[#a24a13] transition-colors leading-snug"
              style={{ fontFamily: "'poppins', serif" }}
            >
              {item.title}
            </h3>

            {/* Bottom border animation */}
            <motion.div
              className="absolute bottom-0 left-0 w-full h-[3px] bg-[#a24a13] rounded-t-lg"
              initial={{ scaleX: 0 }}
              whileHover={{ scaleX: 1 }}
              transition={{ duration: 0.3 }}
            />
          </motion.a>
        ))}
      </div>
    </section>
  );
};

export default Paripatra;
