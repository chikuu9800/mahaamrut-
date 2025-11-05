import { motion } from "framer-motion";
import { Play } from "lucide-react";

const videos = [
  {
    title: "अमृतचे किशोर विकास उपक्रमातील युवा प्रशिक्षण",
    embedUrl: "https://www.youtube.com/embed/7VUVq0xZg90?si=Xo-JG2Nt5lR-rKcZ",
  },
  {
    title: "AMRUT Financial Literacy Course",
    embedUrl: "https://www.youtube.com/embed/9PL_p2BzaZU?si=KV0WAQp3qR08RDhV",
  },
  {
    title: "ड्रोन पायलट प्रशिक्षण व्यवसायासाठी उपयुक्त",
    embedUrl: "https://www.youtube.com/embed/9PL_p2BzaZU?si=KV0WAQp3qR08RDhV",
  },
  {
    title: "अमृत संस्था विनामूल्य प्रशिक्षण देते",
    embedUrl: "https://www.youtube.com/embed/9PL_p2BzaZU?si=KV0WAQp3qR08RDhV",
  },
  {
    title: "नि:शुल्क IGTR अभ्यासक्रम प्रशिक्षण",
    embedUrl: "https://www.youtube.com/embed/9PL_p2BzaZU?si=KV0WAQp3qR08RDhV",
  },
  {
    title: "अमृत योजनेचा लाभ घेण्यासाठी महत्वाची माहिती",
    embedUrl: "https://www.youtube.com/embed/9PL_p2BzaZU?si=KV0WAQp3qR08RDhV",
  },
];

export default function Gallery() {
  return (
    <section className="px-6 py-12 bg-gradient-to-b from-white via-blue-50 to-blue-100">
      <div className="text-center mb-10">
        <h2 className="text-4xl font-bold text-gray-800 mb-2">🎬 गॅलरी</h2>
        <p className="text-gray-500">अमृतच्या विविध उपक्रमांची झलक</p>
      </div>

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
        {videos.map((video, index) => (
          <motion.div
            key={index}
            whileHover={{ scale: 1.02 }}
            transition={{ type: "spring", stiffness: 200 }}
            className="relative rounded-2xl shadow-md hover:shadow-xl bg-white border border-blue-100 transition-all duration-300"
          >
            <div className="relative w-full h-0 pb-[56.25%] rounded-t-2xl overflow-hidden">
              <iframe
                src={video.embedUrl}
                title={video.title}
                className="absolute top-0 left-0 w-full h-full rounded-t-2xl"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                referrerPolicy="strict-origin-when-cross-origin"
                allowFullScreen
              ></iframe>
            </div>

            {/* Title */}
            <div className="p-4 text-center">
              <h3 className="text-blue-700 font-semibold text-lg hover:text-blue-900 transition-colors">
                {video.title}
              </h3>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
