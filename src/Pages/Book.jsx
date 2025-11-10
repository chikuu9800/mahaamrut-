import React from "react";
import { BookOpen, Download } from "lucide-react";

const books = [
  {
    id: 1,
    title: "अमृत प्रबोधनी वार्षिक अहवाल 2024",
    description:
      "या अहवालात संस्थेच्या मागील वर्षातील कार्यप्रगती, योजना आणि उपक्रमांचा सविस्तर आढावा दिला आहे.",
    cover: "/images/books/book1.jpg",
    link: "/files/Amrut-Annual-Report-2024.pdf",
  },
  {
    id: 2,
    title: "कौशल्य विकास पुस्तिका",
    description:
      "राज्यातील युवकांसाठी कौशल्य विकास आणि प्रशिक्षण संधींबाबत माहिती देणारी पुस्तिका.",
    cover: "/images/books/book2.jpg",
    link: "/files/Skill-Development-Booklet.pdf",
  },
  {
    id: 3,
    title: "महिला सक्षमीकरण मार्गदर्शिका",
    description:
      "महिला उद्यम, स्वावलंबन आणि शिक्षण क्षेत्रातील संधींबाबत मार्गदर्शन करणारी पुस्तिका.",
    cover: "/images/books/book3.jpg",
    link: "/files/Women-Empowerment-Guide.pdf",
  },
  {
    id: 4,
    title: "उद्योग प्रोत्साहन योजना अहवाल",
    description:
      "राज्यातील उद्योग प्रोत्साहन आणि रोजगार निर्मितीवर आधारित संशोधन अहवाल.",
    cover: "/images/books/book4.jpg",
    link: "/files/Industry-Report.pdf",
  },
];

const Book = () => {
  return (
    <section className="w-full min-h-[90vh] bg-gradient-to-b from-orange-50 via-white to-orange-100 py-16 px-6 sm:px-10 md:px-20">
      {/* === Page Header === */}
      <div className="text-center mb-12">
        <h2
          className="text-3xl sm:text-4xl font-bold text-orange-600 mb-3"
          style={{ fontFamily: "baloo, sans-serif" }}
        >
          प्रकाशन व पुस्तिका
        </h2>
        <p className="text-gray-600 text-base sm:text-lg">
          AMRUT संस्थेच्या विविध अहवाल व माहिती पुस्तिकांचे संग्रह.
        </p>
      </div>

      {/* === Book Cards Grid === */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
        {books.map((book) => (
          <div
            key={book.id}
            className="bg-white rounded-2xl shadow-md hover:shadow-lg border border-orange-200 overflow-hidden transition-all duration-300 flex flex-col"
          >
            {/* Book Cover */}
            <div className="w-full h-64 bg-gray-100">
              <img
                src={book.cover}
                alt={book.title}
                className="w-full h-full object-cover"
              />
            </div>

            {/* Content */}
            <div className="p-5 flex flex-col flex-grow">
              <h3 className="text-orange-600 text-lg font-semibold mb-2">
                {book.title}
              </h3>
              <p className="text-gray-700 text-sm flex-grow mb-4">
                {book.description}
              </p>

              {/* Download Button */}
              <a
                href={book.link}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-auto inline-flex items-center gap-2 bg-orange-500 hover:bg-orange-600 text-white text-sm font-medium px-4 py-2 rounded-md transition-colors"
              >
                <Download size={16} />
                डाउनलोड करा
              </a>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Book;
