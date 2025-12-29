"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";
import { ArrowRight, ChevronRight } from "lucide-react";
import { cn } from "@/lib/utils";

const SLIDES = [
    {
        id: 1,
        image: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&q=80&w=2000",
        subtitle: "RECRUITMENT SUCCESS PARTNER",
        title: (
            <>
                DESIGNING THE<br />
                VALUE OF<br />
                <span className="text-primary">CHALLENGE.</span>
            </>
        ),
        description: "エバンティアは、人も企業も“より良い未来”を実現できる場所。\n「自走体制」の構築をゴールに、あらゆる採用課題を突破します。",
        alignment: "left-bottom", // Text Align
        btnText: "Our Mission",
        btnLink: "/about"
    },
    {
        id: 2,
        image: "https://images.unsplash.com/photo-1600880292203-757bb62b4baf?auto=format&fit=crop&q=80&w=2000",
        subtitle: "STRATEGIC CONSULTING",
        title: (
            <>
                DESIGN THE<br />
                FUTURE SYNERGY.
            </>
        ),
        description: "経営層はトップセールス出身。\n人の心の機微を突くシナリオ構築力で、\n確固たる動機形成を実現します。",
        alignment: "right-center",
        btnText: "View Services",
        btnLink: "/service"
    },
    {
        id: 3,
        image: "https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&q=80&w=2000",
        subtitle: "SELF-RUNNING SYSTEM",
        title: (
            <>
                GAIN SUSTAINABLE<br />
                <span className="text-primary">AUTONOMY.</span>
            </>
        ),
        description: "一時的な成功ではなく、\n貴社だけで勝ち続けられる「仕組み」を構築します。",
        alignment: "center-bottom",
        btnText: "Contact Us",
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
                            className="absolute inset-0 w-full h-full flex flex-col lg:flex-row pb-20 lg:pb-0"
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            exit={{ opacity: 0 }}
                            transition={{ duration: 1.5, ease: [0.19, 1, 0.22, 1] }}
                        >
                            {/* Left Text Column (40%) - Architectural Breathing Room */}
                            <div className="lg:w-[45%] h-full flex flex-col justify-center px-10 lg:px-20 z-10 pt-32 lg:pt-0">
                                <motion.div
                                    initial={{ opacity: 0, y: 10 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    transition={{ delay: 0.4, duration: 1.2, ease: [0.19, 1, 0.22, 1] }}
                                    className="mb-12"
                                >
                                    <span className="text-[10px] font-black tracking-[0.6em] text-primary uppercase block mb-4 border-l-2 border-primary pl-4">
                                        {slide.subtitle}
                                    </span>
                                </motion.div>

                                <div className="space-y-10">
                                    <motion.h1
                                        initial={{ opacity: 0, y: 30 }}
                                        animate={{ opacity: 1, y: 0 }}
                                        transition={{ delay: 0.6, duration: 1.5, ease: [0.19, 1, 0.22, 1] }}
                                        className="text-6xl md:text-7xl lg:text-8xl font-black leading-[0.95] tracking-tighter uppercase font-serif"
                                    >
                                        {slide.title}
                                    </motion.h1>

                                    <motion.p
                                        initial={{ opacity: 0, y: 20 }}
                                        animate={{ opacity: 1, y: 0 }}
                                        transition={{ delay: 0.8, duration: 1.2, ease: [0.19, 1, 0.22, 1] }}
                                        className="text-lg text-muted-foreground leading-loose max-w-sm whitespace-pre-wrap font-medium"
                                    >
                                        {slide.description}
                                    </motion.p>
                                </div>

                                <motion.div
                                    initial={{ opacity: 0, x: -10 }}
                                    animate={{ opacity: 1, x: 0 }}
                                    transition={{ delay: 1.0, duration: 0.8, ease: [0.19, 1, 0.22, 1] }}
                                    className="mt-16"
                                >
                                    <Link
                                        href={slide.btnLink}
                                        className="inline-flex items-center gap-6 group"
                                    >
                                        <span className="text-xs font-black tracking-[0.4em] uppercase border-b-2 border-black pb-2 group-hover:border-primary transition-all">
                                            {slide.btnText}
                                        </span>
                                        <ArrowRight className="group-hover:translate-x-2 transition-transform text-primary" size={20} />
                                    </Link>
                                </motion.div>
                            </div>

                            {/* Right Image Column (55%) - Atmospheric Background */}
                            <div className="flex-1 relative h-full overflow-hidden">
                                <motion.div
                                    className="absolute inset-0 bg-cover bg-center"
                                    style={{ backgroundImage: `url(${slide.image})` }}
                                    initial={{ scale: 1.1, x: 40, opacity: 0 }}
                                    animate={{ scale: 1, x: 0, opacity: 1 }}
                                    transition={{ duration: 3, ease: [0.19, 1, 0.22, 1] }}
                                />
                                {/* Clean White Overlay to blend edges on desktop if needed, otherwise just let it breath */}
                                <div className="absolute inset-0 bg-black/5" />

                                {/* Structural Chapter Indicator overlay on image area */}
                                <div className="absolute bottom-10 left-10 text-white/40 flex items-center gap-6 text-[10px] font-black tracking-widest hidden lg:flex">
                                    <span className="text-white">0{index + 1}</span>
                                    <div className="w-12 h-[1px] bg-white/20" />
                                    <span>0{SLIDES.length}</span>
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

            {/* Subtle Bottom Scroll Prompt */}
            <div className="absolute bottom-10 left-10 md:left-20 z-20 flex items-center gap-6 text-[10px] font-black tracking-[0.4em] text-black/30">
                <div className="w-px h-16 bg-black/10 relative overflow-hidden">
                    <motion.div
                        className="absolute top-0 left-0 w-full h-1/2 bg-primary"
                        animate={{ y: ["0%", "200%"] }}
                        transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
                    />
                </div>
                <span className="uppercase [writing-mode:vertical-rl] h-16">Explore</span>
            </div>
        </section>
    );
}
