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
    <section className="relative py-20 md:py-32 px-6 border-b border-border/40 overflow-hidden min-h-[500px] md:min-h-[600px]">
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
        {/* Overlay */}
        <div className="absolute inset-0 bg-black/70" />
      </div>

      {/* Content */}
      <div className="max-w-screen-xl mx-auto relative z-10 h-full flex flex-col">
        <div className="mb-8 md:mb-12">
          <h2 className="text-lg md:text-xl font-black tracking-wider mb-4 text-white/70">サービス</h2>
          <p className="text-4xl md:text-6xl font-black tracking-tight leading-[0.9] text-white">
            私たちの仕事。
          </p>
        </div>

        {/* Current Service - Large Display */}
        <div className="flex-1 flex flex-col justify-center">
          <AnimatePresence mode="wait">
            <motion.div
              key={currentIndex}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -30 }}
              transition={{ duration: 0.6, ease: "easeOut" }}
              className="text-white"
            >
              <span className="text-sm md:text-base font-black tracking-widest uppercase text-white/50 block mb-4">
                {SERVICES[currentIndex].en}
              </span>
              <h3 className="text-4xl md:text-7xl font-black mb-4 leading-tight">
                {SERVICES[currentIndex].title}
              </h3>
              <p className="text-xl md:text-2xl font-medium text-white/80 mb-8">
                {SERVICES[currentIndex].sub}
              </p>
              <Link
                href="/service"
                className="inline-flex items-center gap-3 text-white text-lg font-bold hover:gap-5 transition-all"
              >
                詳しく見る <ArrowRight size={20} />
              </Link>
            </motion.div>
          </AnimatePresence>
        </div>

        {/* Navigation Tabs */}
        <div className="flex gap-2 md:gap-4 mt-8">
          {SERVICES.map((service, i) => (
            <button
              key={i}
              onClick={() => setCurrentIndex(i)}
              className={`flex-1 py-4 px-4 rounded-lg text-left transition-all duration-500 ${
                currentIndex === i
                  ? "bg-white text-black"
                  : "bg-white/10 text-white/60 hover:bg-white/20"
              }`}
            >
              <span className="text-[10px] md:text-xs font-black tracking-wider uppercase block mb-1 opacity-60">
                {service.en}
              </span>
              <span className="text-sm md:text-base font-black block truncate">
                {service.title}
              </span>
            </button>
          ))}
        </div>
      </div>
    </section>
  );
}
