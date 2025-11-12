import React from "react";

const newsItems = [
  {
    id: 1,
    date: "2025-11-10",
    title: "अमृत संस्थेचा उद्या साताऱ्यात मेळावा",
    excerpt: "खुल्या प्रवर्गातील युवकांसाठी AMRUT ने नवीन ६ महिन्यांची प्रशिक्षण मोहीम सुरू केली आहे.",
    link: "/news/1",
  },
  {
    id: 2,
    date: "2025-10-25",
    title: "उद्योग व ऊर्जा क्षेत्रातील संधी",
    excerpt: "महाराष्ट्रातील उद्योग व ऊर्जा क्षेत्रात खुल्या प्रवर्गातील युवकांसाठी मोठ्या संधी उपलब्ध.",
    link: "/news/2",
  },
  {
    id: 3,
    date: "2025-10-05",
    title: "स्वरोजगार प्रोत्साहन योजनेची घोषणा",
    excerpt: "AMRUT ने स्वरोजगार प्रोत्साहन योजने अंतर्गत आर्थिक सहाय्य घोषित केले आहे.",
    link: "/news/3",
  },
];

const News = () => {
  return (
    <section className="w-full bg-gradient-to-b from-orange-50 via-white to-orange-100 py-16 px-6 sm:px-10 md:px-20">
      <div className="text-center mb-12">
        <h2
          className="text-3xl sm:text-4xl font-bold text-orange-700 mb-3"
          style={{ fontFamily: "baloo, sans-serif" }}
        >
          बातम्या व अपडेट्स
        </h2>
        <p className="text-gray-600 text-base sm:text-lg"  style={{ fontFamily: "poppins, sans-serif" }}>
          संस्था संबंधित ताज्या बातम्या व घोषणांसह.
        </p>
      </div>

      <div className="space-y-8">
        {newsItems.map(item => (
          <div key={item.id} className="bg-white rounded-2xl shadow-lg border border-orange-200 p-6 hover:shadow-xl transition-all">
            <div className="text-sm text-gray-500 mb-1"  style={{ fontFamily: "poppins, sans-serif" }}>{item.date}</div>
            <h3 className="text-xl font-semibold text-orange-600 mb-2"  style={{ fontFamily: "poppins, sans-serif" }}>{item.title}</h3>
            <p className="text-gray-700 mb-4"  style={{ fontFamily: "poppins, sans-serif" }}>{item.excerpt} </p>
            <a
              href={item.link} style={{ fontFamily: "poppins, sans-serif" }}
              className="inline-block bg-orange-500 hover:bg-orange-600 text-white text-sm font-medium px-4 py-2 rounded-md transition-colors"
            >
              अधिक वाचा
            </a>
          </div>
        ))}
      </div>
    </section>
  );
};

export default News;
