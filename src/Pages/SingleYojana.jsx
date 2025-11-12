import React from "react";
import { useParams } from "react-router-dom";

// 🧩 Mock Data — Replace this with your actual mock data or API call
const mockYojanas = [
  {
    id: 1,
    title: "उद्योग प्रोत्साहन योजना",
    description:
      "ही योजना उद्योजकांना त्यांच्या व्यवसायाची सुरुवात करण्यासाठी वित्तीय सहाय्य आणि मार्गदर्शन पुरवते.",
    image: "/images/yojana/1.jpg",
    department: "उद्योग विभाग, महाराष्ट्र शासन",
  },
  {
    id: 2,
    title: "महिला उद्योजक विकास योजना",
    description:
      "महिलांना स्वावलंबी बनविण्यासाठी प्रशिक्षण, कर्ज आणि सल्लामसलत यासाठी ही योजना आहे.",
    image: "/images/yojana/2.jpg",
    department: "महिला व बालकल्याण विभाग",
  },
  {
    id: 3,
    title: "कृषी सहाय योजना",
    description:
      "शेतकऱ्यांना आधुनिक शेतीसाठी आवश्यक उपकरणे आणि आर्थिक मदत देण्यासाठी ही योजना कार्यरत आहे.",
    image: "/images/yojana/3.jpg",
    department: "कृषी विभाग, महाराष्ट्र शासन",
  },
];

const SingleYojana = () => {
  // Get the ID from the URL
  const { id } = useParams();

  // Find matching Yojana
  const yojana = mockYojanas.find((item) => item.id === parseInt(id));

  if (!yojana) {
    return (
      <div className="w-full h-[60vh] flex items-center justify-center">
        <h2 className="text-2xl font-semibold text-gray-600">
          योजना सापडली नाही 🙁
        </h2>
      </div>
    );
  }

  return (
    <section className="w-[90%] m-auto py-16">
      {/* === Image Section === */}
      <div className="rounded-2xl overflow-hidden shadow-lg mb-8">
        <img
          src={yojana.image}
          alt={yojana.title}
          className="w-full h-[300px] sm:h-[400px] object-cover"
        />
      </div>

      {/* === Content Section === */}
      <div className="text-center">
        <h2
          className="text-3xl sm:text-4xl font-bold text-orange-600 mb-4"
          style={{ fontFamily: "baloo, sans-serif" }}
        >
          {yojana.title}
        </h2>
        <p
          className="text-gray-700 text-base sm:text-lg leading-relaxed mb-6"
          style={{ fontFamily: "poppins, sans-serif" }}
        >
          {yojana.description}
        </p>
        <p className="text-orange-500 font-medium">
          विभाग: {yojana.department}
        </p>
      </div>
    </section>
  );
};

export default SingleYojana;
