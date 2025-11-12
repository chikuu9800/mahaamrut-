import React from "react";
import { FileText } from "lucide-react"; // optional icon instead of emoji

const Contact = () => {
  return (
    <section className="w-full bg-gradient-to-b from-orange-50 via-white to-orange-100 py-16">
      {/* === Header === */}
      <div className="text-center mb-12">
        <h2
          className="text-3xl sm:text-4xl font-bold text-orange-700 mb-3"
          style={{ fontFamily: "baloo, sans-serif" }}
        >
          अभिप्राय
        </h2>
        <p
          className="text-gray-600 text-base sm:text-lg"
          style={{ fontFamily: "poppins, sans-serif" }}
        >
          आपला अभिप्राय येथे नोंदवा, आमच्या कार्यालयाकडून लवकरच आपल्याशी संपर्क साधण्यात येईल.
        </p>
      </div>

      {/* === Main Container === */}
      <div className="md:w-[90%] mx-auto flex flex-col md:flex-row items-center justify-center gap-10 px-6 sm:px-10 md:px-20">
        
        {/* === Left: Contact Form === */}
        <div className="flex-1 bg-white shadow-lg rounded-2xl p-6 sm:p-8 border border-orange-200 w-full max-w-lg">
          <h2
            className="text-3xl sm:text-4xl font-bold text-orange-700 mb-6"
            style={{ fontFamily: "baloo, sans-serif" }}
          >
            संपर्क साधा
          </h2>

          <form className="space-y-5">
            {/* Name */}
            <div>
              <label className="block text-gray-700 font-medium mb-2" style={{fontFamily:"poppins , serif"}}>नाव</label>
              <input
                type="text"
                placeholder="आपले नाव टाका"
                className="w-full border border-orange-300 rounded-md px-4 py-2 focus:outline-none focus:ring-2 focus:ring-orange-400 text-gray-700 "
                style={{fontFamily:"poppins , serif"}}
              />
            </div>

            {/* Email */}
            <div>
              <label className="block text-gray-700 font-medium mb-2" style={{fontFamily:"poppins , serif"}}>ईमेल</label>
              <input
                type="email"
                placeholder="आपला ईमेल टाका"
                className="w-full border border-orange-300 rounded-md px-4 py-2 focus:outline-none focus:ring-2 focus:ring-orange-400 text-gray-700"
                style={{fontFamily:"poppins , serif"}}
              />
            </div>

            {/* Subject */}
            <div>
              <label className="block text-gray-700 font-medium mb-2" style={{fontFamily:"poppins , serif"}}>विषय</label>
              <input
                type="text"
                placeholder="विषय टाका"
                className="w-full border border-orange-300 rounded-md px-4 py-2 focus:outline-none focus:ring-2 focus:ring-orange-400 text-gray-700"
                style={{fontFamily:"poppins , serif"}}
              />
            </div>

            {/* Message */}
            <div>
              <label className="block text-gray-700 font-medium mb-2" style={{fontFamily:"poppins , serif"}}>संदेश</label>
              <textarea
                placeholder="आपला संदेश लिहा..."
                rows="4"
                className="w-full border border-orange-300 rounded-md px-4 py-2 focus:outline-none focus:ring-2 focus:ring-orange-400 text-gray-700"
                style={{fontFamily:"poppins , serif"}}
              ></textarea>
            </div>

            {/* Submit Button */}
            <button
              type="submit"
              className="w-full bg-orange-500 hover:bg-orange-600 text-white font-semibold py-2 rounded-md transition-all duration-300"
            >
              पाठवा
            </button>
          </form>
        </div>

        {/* === Right: Info + Map === */}
        <div className="flex-1 w-full flex flex-col items-center justify-center space-y-8">
          
          {/* Chips Section */}
          <div className="flex flex-wrap justify-center gap-4">
            {/* Chip 1 */}
            <a
              href="https://mahaamrut.org.in/wp-content/uploads/2025/07/%E0%A4%85%E0%A4%AE%E0%A5%83%E0%A4%A4-%E0%A4%B5%E0%A5%8D%E0%A4%AF%E0%A4%B5%E0%A4%B8%E0%A5%8D%E0%A4%A5%E0%A4%BE%E0%A4%AA%E0%A4%95-%E0%A4%B8%E0%A4%82%E0%A4%AA%E0%A4%B0%E0%A5%8D%E0%A4%95-%E0%A4%95%E0%A5%8D%E0%A4%B0.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 bg-orange-100 border border-orange-300 text-orange-700 px-5 py-2 rounded-full shadow-md text-sm font-medium hover:bg-orange-200 hover:scale-105 transition-transform duration-300"
            >
              <FileText className="w-4 h-4" />
              समन्वयक संपर्क क्रमांक (PDF)
            </a>

            {/* Chip 2 */}
            <a
              href="https://mahaamrut.org.in/wp-content/uploads/2025/07/%E0%A4%95%E0%A4%BE%E0%A4%B0%E0%A5%8D%E0%A4%AF%E0%A4%BE%E0%A4%B2%E0%A4%AF%E0%A5%80%E0%A4%A8%20%E0%A4%85%E0%A4%A7%E0%A4%BF%E0%A4%95%E0%A4%BE%E0%A4%B0%E0%A5%80.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 bg-orange-100 border border-orange-300 text-orange-700 px-5 py-2 rounded-full shadow-md text-sm font-medium hover:bg-orange-200 hover:scale-105 transition-transform duration-300"
            >
              <FileText className="w-4 h-4" />
              कार्यालयीन अधिकारी (PDF)
            </a>
          </div>

          {/* Google Map */}
          <div className="w-[80%] h-[350px] sm:h-[400px] md:h-[450px] rounded-2xl overflow-hidden shadow-lg border border-orange-200">
            <iframe
              title="AMRUT Contact Location"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3782.6620155465077!2d73.84733827460526!3d18.547435882557624!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bc2c06a4b6b5b3b%3A0x7711d62fcb47f9!2sMaharashtra%20Knowledge%20Corporation%20Limited%20(MKCL)!5e0!3m2!1sen!2sin!4v1699543521597!5m2!1sen!2sin"
              width="100%"
              height="100%"
              allowFullScreen=""
              loading="lazy"
              className="border-0"
            ></iframe>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
