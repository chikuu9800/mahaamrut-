import React from "react";

const videos = [
  {
    id: 1,
    title: "अमृत प्रबोधनी परिचय व्हिडिओ",
    description: "संस्थेचा उद्देश आणि कार्ये जाणून घ्या.",
    link: "https://www.youtube.com/embed/7VUVq0xZg90",
  },
  {
    id: 2,
    title: "अमृत प्रबोधनी परिचय व्हिडिओ",
    description: "संस्थेचा उद्देश आणि कार्ये जाणून घ्या.",
    link: "https://www.youtube.com/embed/7VUVq0xZg90",
  },
  {
    id: 3,
    title: "अमृत प्रबोधनी परिचय व्हिडिओ",
    description: "संस्थेचा उद्देश आणि कार्ये जाणून घ्या.",
    link: "https://www.youtube.com/embed/7VUVq0xZg90",
  },
  {
    id: 4,
    title: "अमृत प्रबोधनी परिचय व्हिडिओ",
    description: "संस्थेचा उद्देश आणि कार्ये जाणून घ्या.",
    link: "https://www.youtube.com/embed/7VUVq0xZg90",
  },
 
];

const Gallery = () => {
  return (
    <section className="w-full min-h-[90vh] bg-gradient-to-b from-orange-50 via-white to-orange-100 py-16 px-6 sm:px-10 md:px-20">
      {/* === Page Title === */}
      <div className="text-center mb-12">
        <h2
          className="text-3xl sm:text-4xl font-bold text-orange-700 mb-3"
          style={{ fontFamily: "baloo, sans-serif" }}
        >
          आमची गॅलरी
        </h2>
        <p className="text-gray-600 text-base sm:text-lg" style={{ fontFamily: "poppins, sans-serif" }}>
          संस्थेच्या कार्यक्रमांची काही विशेष झलक.
        </p>
      </div>

      {/* === Gallery Grid === */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
        {videos.map((video) => (
          <div
            key={video.id}
            className="bg-white rounded-2xl shadow-md hover:shadow-lg border border-orange-200 overflow-hidden transition-all duration-300 flex flex-col"
          >
            {/* Embedded Video */}
            <div className="relative w-full h-52 sm:h-56 md:h-60 overflow-hidden">
              <iframe
                className="w-full h-full rounded-t-2xl"
                src={`${video.link}?rel=0&showinfo=0`}
                title={video.title}
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                referrerPolicy="strict-origin-when-cross-origin"
                allowFullScreen
              ></iframe>
            </div>

            {/* Card Content */}
            <div className="p-5 flex flex-col flex-grow">
              <h3 className="text-orange-600 text-lg font-semibold mb-2"  style={{ fontFamily: "poppins, sans-serif" }}>
                {video.title}
              </h3>
              <p className="text-gray-600 text-sm flex-grow"  style={{ fontFamily: "poppins, sans-serif" }}>
                {video.description}
              </p>
              <a
                href={video.link.replace("embed/", "watch?v=")}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-4 inline-block bg-orange-500 hover:bg-orange-600 text-white text-sm font-medium px-4 py-2 rounded-md transition-colors self-start"
              >
                पाहा 
              </a>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Gallery;
