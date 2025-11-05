import { motion } from "framer-motion";
import { FileText } from "lucide-react";

const Circularsdata = [
  { title: "ड्रोन पायलट प्रशिक्षण योजना प्रसिद्धीपत्रक", link: "https://mahaamrut.org.in/wp-content/uploads/2025/10/%E0%A4%A1%E0%A5%8D%E0%A4%B0%E0%A5%8B%E0%A4%A8-%E0%A4%AA%E0%A4%BE%E0%A4%AF%E0%A4%B2%E0%A4%9F-%E0%A4%AA%E0%A5%8D%E0%A4%B0%E0%A4%B6%E0%A4%BF%E0%A4%95%E0%A5%8D%E0%A4%B7%E0%A4%A3-%E0%A4%AF%E0%A5%8B%E0%A4%9C%E0%A4%A8%E0%A4%BE-%E0%A4%AA%E0%A5%8D%E0%A4%B0%E0%A4%B8%E0%A4%BF%E0%A4%A6%E0%A5%8D%E0%A4%A7%E0%A5%80%E0%A4%AA%E0%A4%A4%E0%A5%8D%E0%A4%B0%E0%A4%95.pdf" },
  { title: "शासकीय-संगणक-टंकलेखन-व-लघुलेखन-अर्थसहाय्य-योजना-प्रसिद्धीपत्रक", link: "https://mahaamrut.org.in/wp-content/uploads/2025/09/%E0%A4%B6%E0%A4%BE%E0%A4%B8%E0%A4%95%E0%A5%80%E0%A4%AF-%E0%A4%B8%E0%A4%82%E0%A4%97%E0%A4%A3%E0%A4%95-%E0%A4%9F%E0%A4%82%E0%A4%95%E0%A4%B2%E0%A5%87%E0%A4%96%E0%A4%A8-%E0%A4%B5-%E0%A4%B2%E0%A4%98%E0%A5%81%E0%A4%B2%E0%A5%87%E0%A4%96%E0%A4%A8-%E0%A4%85%E0%A4%B0%E0%A5%8D%E0%A4%A5%E0%A4%B8%E0%A4%B9%E0%A4%BE%E0%A4%AF%E0%A5%8D%E0%A4%AF-%E0%A4%AF%E0%A5%8B%E0%A4%9C%E0%A4%A8%E0%A4%BE-%E0%A4%AA%E0%A5%8D%E0%A4%B0%E0%A4%B8%E0%A4%BF%E0%A4%A6%E0%A5%8D%E0%A4%A7%E0%A5%80%E0%A4%AA%E0%A4%A4%E0%A5%8D%E0%A4%B0%E0%A4%95.pdf" },
  { title: "GCC -TBC मुदतवाढ प्रसिद्धीपत्रक", link: "https://mahaamrut.org.in/wp-content/uploads/2025/10/GCC-TBC-%E0%A4%AE%E0%A5%81%E0%A4%A6%E0%A4%A4%E0%A4%B5%E0%A4%BE%E0%A4%A2-%E0%A4%AA%E0%A5%8D%E0%A4%B0%E0%A4%B8%E0%A4%BF%E0%A4%A6%E0%A5%8D%E0%A4%A7%E0%A5%80%E0%A4%AA%E0%A4%A4%E0%A5%8D%E0%A4%B0%E0%A4%95.pdf" },
  { title: "जाहीर-प्रगटन", link: "https://mahaamrut.org.in/wp-content/uploads/2025/09/%E0%A4%9C%E0%A4%BE%E0%A4%B9%E0%A5%80%E0%A4%B0-%E0%A4%AA%E0%A5%8D%E0%A4%B0%E0%A4%97%E0%A4%9F%E0%A4%A8.pdf" },
  { title: "वनसेवा मुख्यपरीक्षेच्या पूर्व तयारीसाठी अर्थसहाय्य", link: "https://mahaamrut.org.in/wp-content/uploads/2025/04/%E0%A4%B5%E0%A4%A8%E0%A4%B8%E0%A5%87%E0%A4%B5%E0%A4%BE-%E0%A4%AE%E0%A5%81%E0%A4%96%E0%A5%8D%E0%A4%AF%E0%A4%AA%E0%A4%B0%E0%A5%80%E0%A4%95%E0%A5%8D%E0%A4%B7%E0%A5%87%E0%A4%9A%E0%A5%8D%E0%A4%AF%E0%A4%BE-%E0%A4%AA%E0%A5%82%E0%A4%B0%E0%A5%8D%E0%A4%B5-%E0%A4%A4%E0%A4%AF%E0%A4%BE%E0%A4%B0%E0%A5%80%E0%A4%B8%E0%A4%BE%E0%A4%A0%E0%A5%80-%E0%A4%85%E0%A4%B0%E0%A5%8D%E0%A4%A5%E0%A4%B8%E0%A4%B9%E0%A4%BE%E0%A4%AF%E0%A5%8D%E0%A4%AF-2.pdf" },
  { title: "MPSC संयुक्त नागरी सेवा मुख्य परीक्षा-2024 (राज्य सेवा)", link: "https://mahaamrut.org.in/wp-content/uploads/2025/09/MPSC-%E0%A4%B8%E0%A4%82%E0%A4%AF%E0%A5%81%E0%A4%95%E0%A5%8D%E0%A4%A4-%E0%A4%A8%E0%A4%BE%E0%A4%97%E0%A4%B0%E0%A5%80-%E0%A4%B8%E0%A5%87%E0%A4%B5%E0%A4%BE-%E0%A4%AE%E0%A5%81%E0%A4%96%E0%A5%8D%E0%A4%AF-%E0%A4%AA%E0%A4%B0%E0%A5%80%E0%A4%95%E0%A5%8D%E0%A4%B7%E0%A4%BE-2024-%E0%A4%B0%E0%A4%BE%E0%A4%9C%E0%A5%8D%E0%A4%AF-%E0%A4%B8%E0%A5%87%E0%A4%B5%E0%A4%BE.pdf" },
  {
    title:
      "UPSC नागरी सेवा पूर्व परीक्षा 2025 उत्तीर्ण उमेदवारांना मुख्य परीक्षेच्या पूर्वतयारीसाठी अर्थसहाय्य",
    link: "https://mahaamrut.org.in/wp-content/uploads/2025/06/%E0%A4%B8%E0%A4%82%E0%A4%98-%E0%A4%B2%E0%A5%8B%E0%A4%95%E0%A4%B8%E0%A5%87%E0%A4%B5%E0%A4%BE-%E0%A4%86%E0%A4%AF%E0%A5%8B%E0%A4%97-%E0%A4%A8%E0%A4%BE%E0%A4%97%E0%A4%B0%E0%A5%80-%E0%A4%B8%E0%A5%87%E0%A4%B5%E0%A4%BE-%E0%A4%AA%E0%A5%82%E0%A4%B0%E0%A5%8D%E0%A4%B5-%E0%A4%AA%E0%A4%B0%E0%A5%80%E0%A4%95%E0%A5%8D%E0%A4%B7%E0%A4%BE-2025.pdf",
  },
  {
    title:
      "UPSC वन सेवा पूर्व परीक्षा – 2025 उत्तीर्ण उमेदवारांना मुख्य परीक्षेच्या पूर्वतयारीसाठी अर्थसहाय्य",
    link: "https://mahaamrut.org.in/wp-content/uploads/2025/06/%E0%A4%B8%E0%A4%82%E0%A4%98-%E0%A4%B2%E0%A5%8B%E0%A4%95%E0%A4%B8%E0%A5%87%E0%A4%B5%E0%A4%BE-%E0%A4%86%E0%A4%AF%E0%A5%8B%E0%A4%97-%E0%A4%B5%E0%A4%A8-%E0%A4%B8%E0%A5%87%E0%A4%B5%E0%A4%BE-%E0%A4%AA%E0%A5%82%E0%A4%B0%E0%A5%8D%E0%A4%B5-%E0%A4%AA%E0%A4%B0%E0%A5%80%E0%A4%95%E0%A5%8D%E0%A4%B7%E0%A4%BE-2025.pdf",
  },
  { title: "C-DAC प्रसिद्धीपत्रक", link: "https://mahaamrut.org.in/wp-content/uploads/2025/05/C-DAC-%E0%A4%AA%E0%A5%8D%E0%A4%B0%E0%A4%B8%E0%A4%BF%E0%A4%A6%E0%A5%8D%E0%A4%A7%E0%A5%80-%E0%A4%AA%E0%A4%A4%E0%A5%8D%E0%A4%B0%E0%A4%95.pdf" },
  {
    title: "MPSC अराजपत्रित (गट ब) मुख्य परीक्षेच्या पूर्व तयारीसाठी अर्थसहाय्य",
    link: "https://mahaamrut.org.in/wp-content/uploads/2025/05/%E0%A4%85%E0%A4%B0%E0%A4%BE%E0%A4%9C%E0%A4%AA%E0%A4%A4%E0%A5%8D%E0%A4%B0%E0%A5%80%E0%A4%A4-%E0%A4%97%E0%A4%9F-%E0%A4%AC-%E0%A4%B8%E0%A4%82%E0%A4%AF%E0%A5%81%E0%A4%95%E0%A5%8D%E0%A4%A4-%E0%A4%AA%E0%A5%82%E0%A4%B0%E0%A5%8D%E0%A4%B5-%E0%A4%AA%E0%A4%B0%E0%A5%80%E0%A4%95%E0%A5%8D%E0%A4%B7%E0%A4%BE-%E0%A5%A8%E0%A5%A6%E0%A5%A8%E0%A5%AA.pdf",
  },
  { title: "NIELIT प्रसिद्धीपत्रक", link: "https://mahaamrut.org.in/wp-content/uploads/2025/05/NIELIT-%E0%A4%AA%E0%A5%8D%E0%A4%B0%E0%A4%B8%E0%A4%BF%E0%A4%A6%E0%A5%8D%E0%A4%A7%E0%A5%80%E0%A4%AA%E0%A4%A4%E0%A5%8D%E0%A4%B0%E0%A4%95-.pdf" },
  { title: "कृषी सेवा मुख्य परीक्षेच्या पूर्व तयारीसाठी अर्थ सहाय्य", link: "https://mahaamrut.org.in/wp-content/uploads/2025/04/%E0%A4%95%E0%A5%83%E0%A4%B7%E0%A5%80-%E0%A4%B8%E0%A5%87%E0%A4%B5%E0%A4%BE-%E0%A4%AE%E0%A5%81%E0%A4%96%E0%A5%8D%E0%A4%AF-%E0%A4%AA%E0%A4%B0%E0%A5%80%E0%A4%95%E0%A5%8D%E0%A4%B7%E0%A5%87%E0%A4%9A%E0%A5%8D%E0%A4%AF%E0%A4%BE-%E0%A4%AA%E0%A5%82%E0%A4%B0%E0%A5%8D%E0%A4%B5-%E0%A4%A4%E0%A4%AF%E0%A4%BE%E0%A4%B0%E0%A5%80%E0%A4%B8%E0%A4%BE%E0%A4%A0%E0%A5%80-%E0%A4%85%E0%A4%B0%E0%A5%8D%E0%A4%A5-%E0%A4%B8%E0%A4%B9%E0%A4%BE%E0%A4%AF%E0%A5%8D%E0%A4%AF-2.pdf" },
  { title: "निविदा सूचना", link: "https://mahaamrut.org.in/wp-content/uploads/2025/05/%E0%A4%A8%E0%A4%BF%E0%A4%B5%E0%A4%BF%E0%A4%A6%E0%A4%BE-%E0%A4%B8%E0%A5%82%E0%A4%9A%E0%A4%A8%E0%A4%BE.pdf" },
];


export default function Circulars() {
  return (
    <section className="px-6 py-10 bg-gradient-to-b from-blue-50 to-white min-h-screen">
      <h2 className="text-3xl font-bold text-gray-800 mb-8 border-b-4 border-blue-500 inline-block">
        परिपत्रक
      </h2>

      <div className="grid md:grid-cols-2 gap-6">
        {Circularsdata.map((item, index) => (
          <motion.a
            key={index}
            href={item.link}
            target="_blank"
            whileHover={{ scale: 1.03, backgroundColor: "#f0f8ff" }}
            whileTap={{ scale: 0.98 }}
            className="flex items-center gap-4 p-5 bg-white rounded-2xl shadow-md hover:shadow-lg transition-all duration-300 border border-blue-100"
          >
            <div className="bg-blue-100 text-blue-600 p-3 rounded-full">
              <FileText size={22} />
            </div>
            <span className="text-blue-700 font-medium text-lg leading-snug">
              {item.title}
            </span>
          </motion.a>
        ))}
      </div>
    </section>
  );
}
