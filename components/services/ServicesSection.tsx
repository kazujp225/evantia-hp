"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowRight } from "lucide-react";

const SERVICES = [
  {
    title: "採用戦略を設計する",
    en: "Strategy Design",
    sub: "採用を、事業の意思決定にする",
    image: "/assets/images/service-strategy.jpg"
  },
  {
    title: "実行を担う",
    en: "Execution",
    sub: "現場を止めずに回しきる",
    image: "/assets/images/service-execution.jpg"
  },
  {
    title: "仕組みにする",
    en: "Systematization",
    sub: "属人性を残さない",
    image: "/assets/images/service-marketing.jpg"
  }
];

export function ServicesSection() {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % SERVICES.length);
    }, 4000);
    return () => clearInterval(timer);
  }, []);

  return (
    <section className="relative py-20 px-6 border-b border-border/40 overflow-hidden min-h-[500px] md:min-h-[550px]">
      {/* Background Slideshow */}
      <div className="absolute inset-0">
        <AnimatePresence mode="wait">
          <motion.div
            key={currentIndex}
            initial={{ opacity: 0, scale: 1.05 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 1.2, ease: "easeInOut" }}
            className="absolute inset-0"
          >
            <Image
              src={SERVICES[currentIndex].image}
              alt="Background"
              fill
              className="object-cover"
            />
          </motion.div>
        </AnimatePresence>
        {/* Overlay - Slightly lighter to see image details, but text still readable */}
        <div className="absolute inset-0 bg-black/60" />
      </div>

      {/* Content */}
      <div className="max-w-screen-xl mx-auto relative z-10 h-full flex flex-col">
        <div className="mb-10 md:mb-16 flex justify-between items-start">
          <div>
            <span className="text-xs font-bold tracking-[0.2em] mb-4 text-white/60 block uppercase">Our Services</span>
            <p className="text-4xl md:text-5xl font-extrabold tracking-tight leading-none text-white">
              Our Work
            </p>
          </div>
          <div className="hidden md:block text-right">
            <span className="text-white/40 text-xs font-mono">0{currentIndex + 1} / 0{SERVICES.length}</span>
          </div>
        </div>

        {/* Current Service - Large Display */}
        <div className="flex-1 flex flex-col justify-center pl-0 md:pl-10">
          <AnimatePresence mode="wait">
            <motion.div
              key={currentIndex}
              initial={{ opacity: 0, x: -20, filter: "blur(10px)" }}
              animate={{ opacity: 1, x: 0, filter: "blur(0px)" }}
              exit={{ opacity: 0, x: 20, filter: "blur(10px)" }}
              transition={{ duration: 0.5, ease: "easeOut" }}
              className="text-white"
            >
              <h3 className="text-3xl md:text-6xl font-extrabold mb-6 leading-tight">
                {SERVICES[currentIndex].title}
              </h3>
              <p className="text-lg md:text-2xl font-medium text-white/80 mb-10 max-w-2xl border-l-2 border-white/20 pl-6 py-1">
                {SERVICES[currentIndex].sub}
              </p>
              <Link
                href="/service"
                className="inline-flex items-center gap-3 text-white text-sm font-bold tracking-widest hover:gap-5 transition-all group"
              >
                <span className="border-b border-transparent group-hover:border-white pb-1">詳しく見る</span> <ArrowRight className="w-4 h-4" />
              </Link>
            </motion.div>
          </AnimatePresence>
        </div>

        {/* Navigation Tabs - Refined Architectural List */}
        <div className="grid grid-cols-3 gap-0 mt-12 md:mt-20 border-t border-white/10">
          {SERVICES.map((service, i) => (
            <button
              key={i}
              onClick={() => setCurrentIndex(i)}
              className={`pt-6 pb-2 px-2 text-left transition-all duration-300 relative group`}
            >
              <div className={`absolute top-0 left-0 h-[2px] transition-all duration-500 ${currentIndex === i ? "w-full bg-white" : "w-0 bg-white/30 group-hover:w-full"
                }`} />

              <span className={`text-[10px] font-bold tracking-widest uppercase block mb-2 transition-colors ${currentIndex === i ? "text-white" : "text-white/40"
                }`}>
                0{i + 1} - {service.en}
              </span>
              <span className={`text-sm md:text-base font-bold block truncate transition-colors ${currentIndex === i ? "text-white" : "text-white/40 group-hover:text-white/70"
                }`}>
                {service.title}
              </span>
            </button>
          ))}
        </div>
      </div>
    </section>
  );
}
