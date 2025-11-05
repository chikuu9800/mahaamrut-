import { motion } from "framer-motion";

const newsData = [
  {
    id: 1,
    title: "अमृत संस्थेचा उड्डा साताऱ्यात मेळावा",
    image: "/images/NewsImages/1.png",
    link: "/NewsDetails/1",
  },
  {
    id: 2,
    title: "लातूरला अमृत मेळावा उत्साहात संपन्न",
    image: "/images/NewsImages/2.png",
    link: "#",
  },
  {
    id: 3,
    title: "नांदेडच्या अमृत मेळाव्याला उत्स्फूर्त प्रतिसाद",
    image: "/images/NewsImages/3.png",
    link: "#",
  },
  {
    id: 4,
    title: "कृषी सेवा मुख्य परीक्षेच्या पूर्व तयारीसाठी अर्थ सहाय्य",
    image: "/images/NewsImages/4.png",
    link: "#",
  },
  {
    id: 5,
    title: "NIELIT प्रसिद्धीपत्रक",
    image: "/images/NewsImages/5.png",
    link: "#",
  },
  {
    id: 6,
    title: "C-DAC प्रसिद्धी पत्रक",
    image: "/images/NewsImages/6.png",
    link: "#",
  },
];

export default function NewsSection() {
  return (
    <section className="py-16 bg-gradient-to-b from-white to-blue-50">
      <div className="max-w-6xl mx-auto px-6">
        {/* Heading */}
        <motion.h2
          className="text-4xl font-bold text-gray-800 mb-12 border-b-4 border-blue-500 inline-block"
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
           वर्ता
        </motion.h2>

        {/* News Cards */}
        <motion.div
          className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8"
          variants={{
            hidden: {},
            show: { transition: { staggerChildren: 0.15 } },
          }}
          initial="hidden"
          whileInView="show"
        >
          {newsData.map((item) => (
            <motion.div
              key={item.id}
              variants={{
                hidden: { opacity: 0, y: 30 },
                show: { opacity: 1, y: 0 },
              }}
              transition={{ duration: 0.5 }}
              whileHover={{ scale: 1.03, y: -5 }}
              className="bg-white rounded-2xl shadow-md overflow-hidden hover:shadow-xl transition-all duration-300"
            >
              {/* Image */}
              <div className="relative w-full h-56 overflow-hidden">
                <img
                  src={item.image}
                  alt={item.title}
                  className="w-full h-full object-cover hover:scale-110 transition-transform duration-500"
                />
              </div>

              {/* Content */}
              <div className="p-5 flex flex-col justify-between h-36">
                <h3 className="text-lg font-semibold text-gray-800 mb-4 line-clamp-2">
                  {item.title}
                </h3>
                <a
                  href={item.link}
                  className="inline-block px-4 py-2 bg-blue-600 text-white rounded-full text-sm font-medium hover:bg-blue-700 transition-all duration-300 w-fit"
                >
                  Read More
                </a>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
