"use client";
import { motion, useInView } from "framer-motion";
import { useRef, useEffect, useState } from "react";
import { Users, Handshake, MapPin } from "lucide-react";

export default function AmrutStats() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const stats = [
    {
      id: 1,
      icon: <Handshake className="w-10 h-10 text-orange-600" />,
      title: "योजना सुरू",
      value: 42,
      suffix: "+",
    },
    {
      id: 2,
      icon: <Users className="w-10 h-10 text-orange-600" />,
      title: "लाभार्थी लाभले",
      value: 12500,
      suffix: "+",
    },
    {
      id: 3,
      icon: <MapPin className="w-10 h-10 text-orange-600" />,
      title: "जिल्ह्यांमध्ये पोहोच",
      value: 36,
      suffix: "",
    },
  ];

  return (
    // === Outer Background (same as AnimatedMapCircle) ===
    <motion.section
      ref={ref}
      initial={{ backgroundPosition: "0% 0%" }}
      animate={{ backgroundPosition: ["0% 0%", "0% 100%", "0% 0%"] }}
      transition={{ duration: 25, repeat: Infinity, ease: "linear" }}
      className="relative py-16bg-gradient-to-b from-orange-100 to-white text-center overflow-hidden py-10"
    >
      {/* Subtle gradient overlay for depth */}
      <div className="absolute inset-0 bg-white  pointer-events-none"></div>

      <motion.h2
        className="text-3xl md:text-4xl font-bold text-orange-800 mb-10 relative z-10"
        style={{ fontFamily: "Baloo, serif" }}
        initial={{ opacity: 0, y: 40 }}
        animate={isInView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.6 }}
      >
        अमृतचा प्रभाव
      </motion.h2>

      {/* === Stats Cards === */}
      <div className="relative z-10 max-w-6xl mx-auto grid grid-cols-1 sm:grid-cols-3 gap-8 px-6 ">
        {stats.map((stat, index) => (
          <motion.div
            key={stat.id}
            className="bg-gradient-to-b from-transparent to-orange-500/40 rounded-2xl shadow-md p-6 flex flex-col items-center justify-center border border-orange-200 transition-all duration-300 ease-out hover:shadow-lg"
            initial={{ opacity: 0, y: 40 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0, delay: index * 0.2 }}
            whileHover={{
              y: -8,
              backgroundColor: "rgba(255, 235, 210, 1)",
              boxShadow: "0 10px 25px rgba(255, 140, 0, 0.25)",
            }}
          >
            <div className="mb-3">{stat.icon}</div>
            <Counter target={stat.value} suffix={stat.suffix} start={isInView} />
            <p
              className="text-lg font-medium text-orange-800 mt-2"
              style={{ fontFamily: "Poppins, sans-serif" }}
            >
              {stat.title}
            </p>
          </motion.div>
        ))}
      </div>
    </motion.section>
  );
}

// 🔢 Counter Animation (only when visible)
function Counter({ target, suffix, start }) {
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (!start) return;

    let current = 0;
    const duration = 2000;
    const stepTime = 20;
    const increment = target / (duration / stepTime);

    const timer = setInterval(() => {
      current += increment;
      if (current >= target) {
        setCount(target);
        clearInterval(timer);
      } else {
        setCount(Math.floor(current));
      }
    }, stepTime);

    return () => clearInterval(timer);
  }, [start, target]);

  return (
    <motion.h3
      className="text-4xl md:text-5xl font-bold text-orange-700 drop-shadow-sm"
      style={{ fontFamily: "Baloo, serif" }}
    >
      {count.toLocaleString("mr-IN")}
      {suffix}
    </motion.h3>
  );
}
