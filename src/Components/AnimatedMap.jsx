import React, { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import {
  Factory,
  Train,
  Wind,
  Globe2,
  Plane,
  IndianRupee,
  Landmark,
  Ship,
  Wallet,
  Building2,
  Lightbulb,
  BarChart3,
  Cog,
  Bus,
  Recycle,
  Wheat,
  HeartPulse,
} from "lucide-react";
import mapImg from "/images/_-removebg-preview.png";

gsap.registerPlugin(ScrollTrigger);

const icons = [
  Factory,
  Train,
  Wind,
  Globe2,
  Plane,
  IndianRupee,
  Landmark,
  Ship,
  Wallet,
  Building2,
  Lightbulb,
  BarChart3,
  Cog,
  Bus,
  Recycle,
  Wheat,
  HeartPulse,
];

const AnimatedMapCircle = () => {
  const mapRef = useRef(null);
  const innerIconsRef = useRef([]);
  const outerIconsRef = useRef([]);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Map fade-in
      gsap.fromTo(
        mapRef.current,
        { opacity: 0, scale: 0.8 },
        {
          opacity: 1,
          scale: 1,
          duration: 1.2,
          ease: "power2.out",
          scrollTrigger: {
            trigger: mapRef.current,
            start: "top 90%",
          },
        }
      );

      // Icons pop-in
      gsap.fromTo(
        [...innerIconsRef.current, ...outerIconsRef.current],
        { opacity: 0, scale: 0 },
        {
          opacity: 1,
          scale: 1,
          stagger: 0.1,
          duration: 0.8,
          ease: "back.out(1.7)",
          scrollTrigger: {
            trigger: mapRef.current,
            start: "top 80%",
          },
        }
      );

      // Continuous rotation
      gsap.to(".outer-ring", {
        rotate: 360,
        duration: 60,
        repeat: -1,
        ease: "linear",
      });

      gsap.to(".inner-ring", {
        rotate: -360,
        duration: 80,
        repeat: -1,
        ease: "linear",
      });
    });

    return () => ctx.revert();
  }, []);

  const innerRadius = 90;
  const outerRadius = 140;
  const innerIcons = icons.slice(0, 8);
  const outerIcons = icons.slice(8);

  return (
    <section className="relative w-full min-h-[90vh] flex flex-col md:flex-row items-center justify-center gap-10 md:gap-16 px-4 sm:px-8 md:px-20 py-12 sm:py-16 bg-gradient-to-b from-orange-100 via-orange-50 to-white bg-[length:100%_200%] overflow-hidden">

    {/* === Left Section: Text (top on mobile) === */}
    <div className="flex-1 text-center md:mt-10 md:text-left max-w-xl space-y-4 mt-8 md:mt-0">
      <h2
        className="text-2xl sm:text-3xl md:text-5xl font-bold text-orange-700 leading-tight"
        style={{ fontFamily: "baloo, sans-serif" }}
      >
        महाराष्ट्र संशोधन, उन्नती आणि प्रशिक्षण प्रबोधनी
      </h2>
      <p className="text-gray-700 text-sm sm:text-base md:text-lg leading-relaxed font-medium">
        राज्यातील युवक, युवती आणि इतर उमेदवारांच्या सर्वांगीण विकासासाठी विविध
        उद्योग, रोजगार, ऊर्जा, शिक्षण व प्रशिक्षण क्षेत्रात प्रोत्साहन देणारी
        संस्था — “अमृत प्रबोधनी”.
      </p>
      <p className="text-gray-600 text-xs sm:text-sm md:text-base">
        महाराष्ट्राच्या सर्वांगीण विकासासाठी नवोन्मेष, प्रशिक्षण आणि संशोधनाचे
        एकत्रिकरण.
      </p>
    </div>
  
    {/* === Right Section: Animated Map Circle === */}
    <div
      className="flex-1 relative flex items-center justify-center w-full 
      h-[45vh] sm:h-[50vh] md:h-[70vh] 
      scale-[0.85] md:scale-[1] transition-none"
      style={{
        transform: "translateZ(0)",
        willChange: "transform",
        backfaceVisibility: "hidden",
      }}
    >
      {/* Outer Circle */}
      <div className="outer-ring absolute 
        w-[260px] sm:w-[320px] md:w-[460px] 
        h-[260px] sm:h-[320px] md:h-[460px] 
        border border-orange-300 rounded-full flex items-center justify-center">
        {outerIcons.map((Icon, index) => {
          const angle = (index / outerIcons.length) * 2 * Math.PI;
          const x = Math.cos(angle) * (outerRadius + 25);
          const y = Math.sin(angle) * (outerRadius + 25);
          return (
            <div
              key={index}
              ref={(el) => (outerIconsRef.current[index] = el)}
              className="absolute text-orange-500 opacity-0 hover:scale-125 transition-transform duration-300"
              style={{ transform: `translate(${x}px, ${y}px)` }}
            >
              <Icon size={20} className="sm:size-[24px]" />
            </div>
          );
        })}
      </div>
  
      {/* Inner Circle */}
      <div className="inner-ring absolute 
        w-[180px] sm:w-[220px] md:w-[320px] 
        h-[180px] sm:h-[220px] md:h-[320px] 
        border border-orange-200 rounded-full flex items-center justify-center">
        {innerIcons.map((Icon, index) => {
          const angle = (index / innerIcons.length) * 2 * Math.PI;
          const x = Math.cos(angle) * (innerRadius + 18);
          const y = Math.sin(angle) * (innerRadius + 18);
          return (
            <div
              key={index}
              ref={(el) => (innerIconsRef.current[index] = el)}
              className="absolute text-orange-500 opacity-0 hover:scale-125 transition-transform duration-300"
              style={{ transform: `translate(${x}px, ${y}px)` }}
            >
              <Icon size={16} className="sm:size-[20px]" />
            </div>
          );
        })}
      </div>
  
      {/* Maharashtra Map */}
      <div
        ref={mapRef}
        className="relative w-[90px] sm:w-[120px] md:w-[200px] h-[90px] sm:h-[120px] md:h-[200px] z-10"
      >
        <img
          src={mapImg}
          alt="Maharashtra Map"
          className="w-full h-full object-contain drop-shadow-[0_0_30px_rgba(255,140,0,0.4)]"
        />
      </div>
    </div>
  
  </section>
  
  );
};

export default AnimatedMapCircle;
