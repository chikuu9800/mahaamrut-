import React, { useState, useEffect } from 'react';

export default function CircularSlider() {
  const [currentIndex, setCurrentIndex] = useState(0);

  const slides = [
    {
      image: '/images/HeaderSlider/1.png',
      title: 'श्री आचार्य देवव्रत',
      description: 'मा. राज्यपाल, महाराष्ट्र राज्य'
    },
    {
      image: '/images/HeaderSlider/2.png',
      title: 'श्री. देवेंद्र फडणवीस',
      description: 'मा. मुख्यमंत्री, महाराष्ट्र राज्य'
    },
    {
      image: '/images/HeaderSlider/3.png',
      title: 'श्री. एकनाथ शिंदे',
      description: 'मा. उपमुख्यमंत्री, महाराष्ट्र राज्य'
    },
    {
      image: '/images/HeaderSlider/4.png',
      title: 'श्री. अजित पवार',
      description: 'मा. उपमुख्यमंत्री, महाराष्ट्र राज्य'
    },
    {
      image: '/images/HeaderSlider/5.jpg',
      title: 'श्री.अतुल सावे',
      description: 'मा. मंत्री , इतर मागास बहुजन कल्याण, महाराष्ट्र राज्य'
    }
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % slides.length);
    }, 2000);

    return () => clearInterval(interval);
  }, []);

  const currentSlide = slides[currentIndex];

  return (
    <div className="flex flex-col items-center justify-center text-center space-y-2 w-[20%]">
      {/* Circular Image */}
      <div className="relative w-[80px] h-[80px] rounded-full overflow-hidden shadow-md">
        {slides.map((slide, index) => (
          <img
            key={index}
            src={slide.image}
            alt={slide.title}
            className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-500 ${
              index === currentIndex ? 'opacity-100' : 'opacity-0'
            }`}
          />
        ))}
      </div>

      {/* Title & Description (below circle) */}
      <div>
        <h3 className="text-[10px] font-semibold text-orange-600 font-martel">{currentSlide.title}</h3>
        <p className="text-[9px] text-gray-600 dark:text-gray-300 font-martel">{currentSlide.description}</p>
      </div>
    </div>
  );
}
