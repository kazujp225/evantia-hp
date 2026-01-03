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
    sub: "採用を経営戦略と連動させる",
    image: "/assets/images/service-strategy.jpg",
    imageAlt: "採用戦略設計 - ビジネス戦略と採用の連携を表すイメージ"
  },
  {
    title: "実行を担う",
    en: "Execution",
    sub: "現場の負担を軽減しながら推進する",
    image: "/assets/images/service-execution.jpg",
    imageAlt: "採用実行支援 - チームによる効率的な採用活動を表すイメージ"
  },
  {
    title: "仕組みにする",
    en: "Systematization",
    sub: "持続可能な採用体制を構築する",
    image: "/assets/images/service-marketing.jpg",
    imageAlt: "採用の仕組み化 - 持続可能な採用体制の構築を表すイメージ"
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
    <section
      className="relative py-20 px-6 border-b border-border/40 overflow-hidden min-h-[500px] md:min-h-[550px]"
      aria-label="サービス紹介"
      aria-roledescription="カルーセル"
    >
      {/* Background Slideshow */}
      <div className="absolute inset-0" aria-hidden="true">
        <AnimatePresence mode="wait">
          <motion.div
            key={currentIndex}
            initial={{ opacity: 0, scale: 1.1 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 1.5, ease: "easeOut" }}
            className="absolute inset-0"
          >
            <Image
              src={SERVICES[currentIndex].image}
              alt={SERVICES[currentIndex].imageAlt}
              fill
              className="object-cover"
            />
          </motion.div>
        </AnimatePresence>
        {/* Overlay - Radial for depth */}
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(0,0,0,0.3)_0%,rgba(0,0,0,0.8)_100%)] mix-blend-multiply" />
        <div className="absolute inset-0 bg-black/40" />
      </div>

      {/* Content */}
      <div className="max-w-screen-xl mx-auto relative z-10 h-full flex flex-col">
        <div className="mb-10 md:mb-16 flex justify-between items-start">
          <div>
            <span className="text-sm md:text-xs font-black tracking-[0.2em] mb-4 text-[var(--color-brand-accent)] block uppercase flex items-center gap-2">
              <span className="w-8 h-[1px] bg-[var(--color-brand-accent)] inline-block"></span>
              Our Services
            </span>
            <p className="text-4xl md:text-5xl font-extrabold tracking-tight leading-none text-white">
              Our Work
            </p>
          </div>
          <div className="hidden md:block text-right">
            <span className="text-white/40 text-sm md:text-xs font-mono font-bold">0{currentIndex + 1} / 0{SERVICES.length}</span>
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
              <p className="text-lg md:text-2xl font-medium text-white/80 mb-10 max-w-2xl border-l-2 border-[var(--color-brand-accent)] pl-6 py-1">
                {SERVICES[currentIndex].sub}
              </p>
              <Link
                href="/service"
                className="inline-flex items-center gap-3 text-white text-base md:text-sm font-black tracking-widest hover:gap-5 transition-all group hover:text-[var(--color-brand-accent)]"
                aria-label="サービス詳細ページへ"
              >
                <span className="border-b border-transparent group-hover:border-[var(--color-brand-accent)] pb-1">詳しく見る</span> <ArrowRight className="w-4 h-4" aria-hidden="true" />
              </Link>
            </motion.div>
          </AnimatePresence>
        </div>

        {/* Navigation Tabs - Refined Architectural List */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-0 mt-12 md:mt-20 border-t border-white/10" role="tablist" aria-label="サービス選択">
          {SERVICES.map((service, i) => (
            <button
              key={i}
              onClick={() => setCurrentIndex(i)}
              role="tab"
              aria-selected={currentIndex === i}
              aria-label={`${service.title}を表示`}
              className={`pt-6 pb-2 px-2 text-left transition-all duration-300 relative group`}
            >
              <div className={`absolute top-0 left-0 h-[3px] transition-all duration-500 ${currentIndex === i ? "w-full bg-[var(--color-brand-accent)] shadow-[0_0_15px_rgba(var(--color-brand-accent),0.6)]" : "w-0 bg-white/30 group-hover:w-full"
                }`} aria-hidden="true" />

              <span className={`text-sm md:text-xs font-black tracking-widest uppercase block mb-2 transition-colors ${currentIndex === i ? "text-[var(--color-brand-accent)]" : "text-white/40 group-hover:text-[var(--color-brand-accent)]"
                }`}>
                0{i + 1} - {service.en}
              </span>
              <span className={`text-sm md:text-lg font-black block truncate transition-colors ${currentIndex === i ? "text-white scale-105 origin-left" : "text-white/40 group-hover:text-white"
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
