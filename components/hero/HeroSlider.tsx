"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";
import { ArrowRight, ChevronRight } from "lucide-react";
import { cn } from "@/lib/utils";

const SLIDES = [
    {
        id: 1,
        image: "https://images.unsplash.com/photo-1517048676732-d65bc937f952?auto=format&fit=crop&q=80&w=2000",
        subtitle: "採用成功パートナー",
        title: (
            <>
                挑戦の価値を<br />
                <span className="text-primary max-lg:text-white">デザインする。</span>
            </>
        ),
        description: "エバンティアは、人も企業も「より良い未来」を実現できる場所。\n「自走体制」の構築をゴールに、あらゆる採用課題を突破します。",
        alignment: "left-bottom",
        btnText: "私たちのミッション",
        btnLink: "/about"
    },
    {
        id: 2,
        image: "https://images.unsplash.com/photo-1493976040374-85c8e12f0c0e?auto=format&fit=crop&q=80&w=2000",
        subtitle: "戦略的コンサルティング",
        title: (
            <>
                未来のシナジーを<br />
                <span className="text-primary max-lg:text-white">設計する。</span>
            </>
        ),
        description: "経営層はトップセールス出身。\n人の心の機微を突くシナリオ構築力で、\n確固たる動機形成を実現します。",
        alignment: "right-center",
        btnText: "サービスを見る",
        btnLink: "/service"
    },
    {
        id: 3,
        image: "https://images.unsplash.com/photo-1573496359142-8a8d5f309088?auto=format&fit=crop&q=80&w=2000",
        subtitle: "自走できる仕組み",
        title: (
            <>
                持続可能な<br />
                <span className="text-primary max-lg:text-white">自立を獲得する。</span>
            </>
        ),
        description: "一時的な成功ではなく、\n貴社だけで勝ち続けられる「仕組み」を構築します。",
        alignment: "center-bottom",
        btnText: "お問い合わせ",
        btnLink: "/contact"
    }
];

export function HeroSlider() {
    const [currentSlide, setCurrentSlide] = useState(0);

    // Auto-play
    useEffect(() => {
        const timer = setInterval(() => {
            setCurrentSlide((prev) => (prev + 1) % SLIDES.length);
        }, 6000); // 6 Sec per slide
        return () => clearInterval(timer);
    }, []);

    return (
        <section className="relative w-full h-screen overflow-hidden bg-white text-black">
            <AnimatePresence mode="wait">
                {SLIDES.map((slide, index) => (
                    index === currentSlide && (
                        <motion.div
                            key={slide.id}
                            className="absolute inset-0 w-full h-full"
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            exit={{ opacity: 0 }}
                            transition={{ duration: 1.5, ease: [0.19, 1, 0.22, 1] }}
                        >
                            {/* Mobile: Full screen background image */}
                            <div className="absolute inset-0 lg:hidden">
                                <motion.div
                                    className="absolute inset-0 bg-cover bg-center"
                                    style={{ backgroundImage: `url(${slide.image})` }}
                                    initial={{ scale: 1.1, opacity: 0 }}
                                    animate={{ scale: 1, opacity: 1 }}
                                    transition={{ duration: 3, ease: [0.19, 1, 0.22, 1] }}
                                />
                                <div className="absolute inset-0 bg-black/70" />
                            </div>

                            <div className="relative h-full flex flex-col lg:flex-row">
                                {/* Text Column */}
                                <div className="lg:w-[45%] h-full flex flex-col justify-center items-center lg:items-start text-center lg:text-left px-8 lg:px-20 z-10">
                                    <motion.div
                                        initial={{ opacity: 0, y: 10 }}
                                        animate={{ opacity: 1, y: 0 }}
                                        transition={{ delay: 0.4, duration: 1.2, ease: [0.19, 1, 0.22, 1] }}
                                        className="mb-8 lg:mb-12 hidden lg:block"
                                    >
                                        <span className="text-2xl font-black tracking-wide text-primary block mb-6 border-l-4 border-primary pl-6">
                                            {slide.subtitle}
                                        </span>
                                    </motion.div>

                                    <div className="space-y-6 lg:space-y-10">
                                        <motion.h1
                                            initial={{ opacity: 0, y: 30 }}
                                            animate={{ opacity: 1, y: 0 }}
                                            transition={{ delay: 0.6, duration: 1.5, ease: [0.19, 1, 0.22, 1] }}
                                            className="text-4xl md:text-6xl lg:text-8xl font-black leading-[0.95] tracking-tighter font-serif text-white lg:text-black"
                                        >
                                            {slide.title}
                                        </motion.h1>

                                        <motion.p
                                            initial={{ opacity: 0, y: 20 }}
                                            animate={{ opacity: 1, y: 0 }}
                                            transition={{ delay: 0.8, duration: 1.2, ease: [0.19, 1, 0.22, 1] }}
                                            className="text-lg lg:text-xl leading-relaxed lg:leading-relaxed max-w-lg whitespace-pre-wrap font-medium text-white lg:text-muted-foreground"
                                        >
                                            {slide.description}
                                        </motion.p>
                                    </div>

                                    <motion.div
                                        initial={{ opacity: 0, y: 10 }}
                                        animate={{ opacity: 1, y: 0 }}
                                        transition={{ delay: 1.0, duration: 0.8, ease: [0.19, 1, 0.22, 1] }}
                                        className="mt-10 lg:mt-16"
                                    >
                                        <Link
                                            href={slide.btnLink}
                                            className="inline-flex items-center gap-4 group bg-white/20 lg:bg-transparent backdrop-blur-sm lg:backdrop-blur-none px-8 py-4 lg:px-0 lg:py-0 rounded-full lg:rounded-none"
                                        >
                                            <span className="text-lg lg:text-base font-black tracking-wide lg:tracking-widest lg:border-b-2 border-black pb-0 lg:pb-2 group-hover:border-primary transition-all text-white lg:text-black">
                                                {slide.btnText}
                                            </span>
                                            <ArrowRight className="group-hover:translate-x-2 transition-transform text-white lg:text-primary" size={24} />
                                        </Link>
                                    </motion.div>
                                </div>

                                {/* Right Image Column (Desktop only) */}
                                <div className="hidden lg:block flex-1 relative h-full overflow-hidden">
                                    <motion.div
                                        className="absolute inset-0 bg-cover bg-center"
                                        style={{ backgroundImage: `url(${slide.image})` }}
                                        initial={{ scale: 1.1, x: 40, opacity: 0 }}
                                        animate={{ scale: 1, x: 0, opacity: 1 }}
                                        transition={{ duration: 3, ease: [0.19, 1, 0.22, 1] }}
                                    />
                                    <div className="absolute inset-0 bg-black/5" />

                                    {/* Structural Chapter Indicator */}
                                    <div className="absolute bottom-10 left-10 text-white/40 flex items-center gap-6 text-[10px] font-black tracking-widest">
                                        <span className="text-white">0{index + 1}</span>
                                        <div className="w-12 h-[1px] bg-white/20" />
                                        <span>0{SLIDES.length}</span>
                                    </div>
                                </div>
                            </div>

                        </motion.div>
                    )
                ))}
            </AnimatePresence>

            {/* Vertical Chapter Navigation - Architectural Sidebar */}
            <div className="absolute right-10 top-1/2 -translate-y-1/2 z-30 flex flex-col gap-10 items-center hidden lg:flex">
                {SLIDES.map((slide, index) => (
                    <button
                        key={slide.id}
                        onClick={() => setCurrentSlide(index)}
                        className="group flex flex-col items-center gap-3"
                    >
                        <span className={cn(
                            "text-[10px] font-black transition-all rotate-90 mb-4",
                            currentSlide === index ? "text-primary scale-125" : "text-black/20 opacity-0 group-hover:opacity-100"
                        )}>
                            0{slide.id}
                        </span>
                        <div className={cn(
                            "w-[1.5px] h-10 transition-all duration-700",
                            currentSlide === index ? "bg-primary h-20" : "bg-black/10 group-hover:bg-black/30"
                        )} />
                    </button>
                ))}
            </div>

            {/* Subtle Bottom Scroll Prompt - Desktop only */}
            <div className="absolute bottom-10 left-20 z-20 hidden lg:flex items-center gap-6 text-[10px] font-black tracking-[0.4em] text-black/30">
                <div className="w-px h-16 bg-black/10 relative overflow-hidden">
                    <motion.div
                        className="absolute top-0 left-0 w-full h-1/2 bg-primary"
                        animate={{ y: ["0%", "200%"] }}
                        transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
                    />
                </div>
                <span className="[writing-mode:vertical-rl] h-16">スクロール</span>
            </div>
        </section>
    );
}
