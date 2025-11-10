import React from "react";

const Contact = () => {
  return (
    <section className="w-full min-h-[90vh] bg-gradient-to-b from-orange-50 via-white to-orange-100 flex flex-col md:flex-row items-center justify-center gap-10 px-6 sm:px-10 md:px-20 py-16 overflow-hidden">
      
      {/* === Left: Contact Form === */}
      <div className="flex-1 bg-white shadow-lg rounded-2xl p-6 sm:p-8 border border-orange-200 w-full max-w-lg">
        <h2
          className="text-3xl sm:text-4xl font-bold text-orange-600 mb-6"
          style={{ fontFamily: "baloo, sans-serif" }}
        >
          संपर्क साधा
        </h2>

        <form className="space-y-5">
          {/* Name */}
          <div>
            <label className="block text-gray-700 font-medium mb-2">
              नाव
            </label>
            <input
              type="text"
              placeholder="आपले नाव टाका"
              className="w-full border border-orange-300 rounded-md px-4 py-2 focus:outline-none focus:ring-2 focus:ring-orange-400"
            />
          </div>

          {/* Email */}
          <div>
            <label className="block text-gray-700 font-medium mb-2">
              ईमेल
            </label>
            <input
              type="email"
              placeholder="आपला ईमेल टाका"
              className="w-full border border-orange-300 rounded-md px-4 py-2 focus:outline-none focus:ring-2 focus:ring-orange-400"
            />
          </div>

          {/* Message */}
          <div>
            <label className="block text-gray-700 font-medium mb-2">
              संदेश
            </label>
            <textarea
              placeholder="आपला संदेश लिहा..."
              rows="4"
              className="w-full border border-orange-300 rounded-md px-4 py-2 focus:outline-none focus:ring-2 focus:ring-orange-400"
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

      {/* === Right: Map === */}
      <div className="flex-1 w-full flex items-center justify-center">
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

    </section>
  );
};

export default Contact;
