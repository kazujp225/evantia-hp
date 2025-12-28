"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";
import { ArrowRight, ChevronRight } from "lucide-react";

const SLIDES = [
    {
        id: 1,
        image: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&q=80&w=2000",
        subtitle: "RECRUITMENT SUCCESS PARTNER",
        title: (
            <>
                挑戦の価値と<br />
                面白さを<br />
                <span className="text-primary">最大化する。</span>
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
                Design Your<br />
                Business Future.
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
                勝ち続ける<br />
                <span className="text-primary">「自走力」</span>を。
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
        <section className="relative w-full h-screen overflow-hidden bg-black text-white">
            <AnimatePresence mode="popLayout" initial={false}>
                {SLIDES.map((slide, index) => (
                    index === currentSlide && (
                        <motion.div
                            key={slide.id}
                            className="absolute inset-0 w-full h-full"
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            exit={{ opacity: 0 }}
                            transition={{ duration: 2.0, ease: "easeInOut" }} // Slower, softer fade
                        >
                            {/* Background Image with Continuous Ken Burns */}
                            <motion.div
                                className="absolute inset-0 bg-cover bg-center"
                                style={{ backgroundImage: `url(${slide.image})` }}
                                initial={{ scale: 1.05 }}
                                animate={{ scale: 1.0 }}
                                transition={{ duration: 8.0, ease: "linear" }} // Subtle continuous movement
                            />
                            {/* Overlay for readability */}
                            <div className="absolute inset-0 bg-black/40" />

                            {/* Content Container */}
                            <div className="absolute inset-0 container-custom flex flex-col justify-center h-full pointer-events-none">
                                <div
                                    className={`
                        relative z-10 max-w-4xl p-8 md:p-16 pointer-events-auto
                        ${slide.alignment === 'left-bottom' ? 'mt-auto text-left items-start' : ''}
                        ${slide.alignment === 'right-center' ? 'ml-auto text-right items-end' : ''}
                        ${slide.alignment === 'center-bottom' ? 'mx-auto mt-auto text-center items-center' : ''}
                        flex flex-col
                    `}
                                >
                                    <motion.div
                                        initial={{ opacity: 0, y: 20, filter: "blur(10px)" }}
                                        animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
                                        transition={{ delay: 0.5, duration: 1.0, ease: "easeOut" }}
                                    >
                                        <p className="text-sm md:text-base font-bold tracking-[0.3em] mb-6 text-primary uppercase">
                                            {slide.subtitle}
                                        </p>
                                    </motion.div>

                                    <motion.h1
                                        initial={{ opacity: 0, y: 30, filter: "blur(10px)" }}
                                        animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
                                        transition={{ delay: 0.7, duration: 1.0, ease: "easeOut" }}
                                        className="text-5xl md:text-7xl lg:text-8xl font-bold leading-[1.1] tracking-tighter mb-8"
                                    >
                                        {slide.title}
                                    </motion.h1>

                                    <motion.p
                                        initial={{ opacity: 0, y: 30, filter: "blur(10px)" }}
                                        animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
                                        transition={{ delay: 0.9, duration: 1.0, ease: "easeOut" }}
                                        className="text-lg md:text-xl text-gray-200 whitespace-pre-wrap leading-relaxed mb-10 font-medium"
                                    >
                                        {slide.description}
                                    </motion.p>

                                    <motion.div
                                        initial={{ opacity: 0, y: 30, filter: "blur(10px)" }}
                                        animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
                                        transition={{ delay: 1.1, duration: 1.0, ease: "easeOut" }}
                                    >
                                        <Link
                                            href={slide.btnLink}
                                            className="group inline-flex items-center gap-3 px-8 py-4 bg-white text-black rounded-full font-bold hover:bg-primary hover:text-white transition-all duration-500"
                                        >
                                            {slide.btnText}
                                            <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform" />
                                        </Link>
                                    </motion.div>
                                </div>
                            </div>
                        </motion.div>
                    )
                ))}
            </AnimatePresence>

            {/* Progress Line Indicator (More elegant than dots) */}
            <div className="absolute bottom-0 left-0 w-full h-1 bg-white/10 z-20">
                <motion.div
                    className="h-full bg-primary"
                    initial={{ width: "0%" }}
                    animate={{ width: "100%" }}
                    key={currentSlide}
                    transition={{ duration: 6.0, ease: "linear" }} // Synced with slide duration
                />
            </div>

            {/* Scroll Indicator */}
            <div className="absolute bottom-10 right-10 md:right-20 z-20 hidden md:flex items-center gap-4 text-xs font-bold tracking-widest text-white/70 writing-mode-vertical-rl">
                SCROLL
                <div className="w-[1px] h-12 bg-white/50" />
            </div>
        </section>
    );
}
