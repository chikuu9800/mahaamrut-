import React from "react";

const beneficiaries = [
  {
    id: 1,
    name: "श्री संदीप पाटील",
    location: "सातारा, महाराष्ट्र",
    scheme: "उद्योग प्रोत्साहन योजना",
    image: "/images/beneficiaries/1.jpg",
    description:
      "AMRUT च्या प्रशिक्षण कार्यक्रमामुळे स्वतःचा उद्योग सुरू करण्यासाठी मला आत्मविश्वास आणि मार्गदर्शन मिळाले.",
  },
  {
    id: 2,
    name: "सौ. कविता देशमुख",
    location: "नाशिक, महाराष्ट्र",
    scheme: "महिला सक्षमीकरण योजना",
    image: "/images/beneficiaries/2.jpg",
    description:
      "महिलांसाठी घेतलेल्या उद्यम कार्यशाळेमुळे मला रोजगाराचे उत्तम पर्याय मिळाले आणि आर्थिक स्वावलंबन साधता आले.",
  },
  {
    id: 3,
    name: "श्री विजय पवार",
    location: "कोल्हापूर, महाराष्ट्र",
    scheme: "कौशल्य विकास उपक्रम",
    image: "/images/beneficiaries/3.jpg",
    description:
      "AMRUT च्या कौशल्य विकास कोर्समुळे मला औद्योगिक क्षेत्रात नोकरीची संधी मिळाली.",
  },
  {
    id: 4,
    name: "सौ. प्रिया शिंदे",
    location: "औरंगाबाद, महाराष्ट्र",
    scheme: "स्वरोजगार प्रोत्साहन योजना",
    image: "/images/beneficiaries/4.jpg",
    description:
      "संस्थेच्या सहाय्याने मी माझा छोटा व्यवसाय सुरू करून स्वावलंबन मिळवले.",
  },
];

const Beneficiaries = () => {
  return (
    <section className="w-full min-h-[90vh] bg-gradient-to-b from-orange-50 via-white to-orange-100 py-16 px-6 sm:px-10 md:px-20">
      {/* === Page Header === */}
      <div className="text-center mb-12">
        <h2
          className="text-3xl sm:text-4xl font-bold text-orange-600 mb-3"
          style={{ fontFamily: "baloo, sans-serif" }}
        >
          लाभार्थी अनुभव
        </h2>
        <p className="text-gray-600 text-base sm:text-lg">
          AMRUT च्या विविध योजनांमधून लाभ घेतलेल्या नागरिकांच्या कथा.
        </p>
      </div>

      {/* === Beneficiary Cards Grid === */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
        {beneficiaries.map((person) => (
          <div
            key={person.id}
            className="bg-white rounded-2xl shadow-md hover:shadow-lg border border-orange-200 overflow-hidden transition-all duration-300 flex flex-col"
          >
            {/* Image */}
            <div className="w-full h-56 bg-gray-100">
              <img
                src={person.image}
                alt={person.name}
                className="w-full h-full object-cover"
              />
            </div>

            {/* Content */}
            <div className="p-5 flex flex-col flex-grow">
              <h3 className="text-orange-600 text-lg font-semibold">
                {person.name}
              </h3>
              <p className="text-gray-500 text-sm mb-1">{person.location}</p>
              <p className="text-gray-700 text-sm flex-grow">
                {person.description}
              </p>
              <div className="mt-4">
                <span className="inline-block bg-orange-100 text-orange-700 text-xs font-medium px-3 py-1 rounded-full">
                  {person.scheme}
                </span>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Beneficiaries;
