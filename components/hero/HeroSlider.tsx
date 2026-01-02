"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight, ChevronRight, Minus } from "lucide-react";
import { cn } from "@/lib/utils";

// Mock Data for News Ticker
const NEWS_TICKER = [
    { date: "2025.12.15", category: "PRESS", title: "株式会社エバンティア、本社オフィスを移転しました。" },
    { date: "2025.12.01", category: "INFO", title: "年末年始の営業についてのお知らせ" },
    { date: "2025.11.20", category: "MEDIA", title: "代表取締役のインタビューが『Business Insider』に掲載されました。" },
];

const SLIDES = [
    {
        id: 1,
        image: "https://images.unsplash.com/photo-1542744173-8e7e53415bb0?auto=format&fit=crop&q=80&w=2000",
        label: "OUR PHILOSOPHY",
        title: (
            <>
                挑戦の価値と面白さを<br />
                <span className="text-zinc-400">最大化する</span>
            </>
        ),
        description: "人も企業も「より良い未来」を実現できる場として。\n挑戦する人の潜在力を\n最大限に引き出す場所でありたい。",
        btnText: "私たちについて",
        btnLink: "/about"
    },
    {
        id: 2,
        image: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&q=80&w=2000",
        label: "SELF-DRIVING",
        title: (
            <>
                一時的な成功より、<br />
                <span className="text-zinc-400">勝ち続ける「自走力」を。</span>
            </>
        ),
        description: "表面ではなく本質から、貴社の採用を強くする。\n「自走体制を構築すること」を最終ミッションに\nあらゆる採用課題を突破します。",
        btnText: "サービスを見る",
        btnLink: "/service"
    },
    {
        id: 3,
        image: "https://images.unsplash.com/photo-1556761175-4b46a572b786?auto=format&fit=crop&q=80&w=2000",
        label: "ELITE TEAM",
        title: (
            <>
                大手のノウハウと<br />
                <span className="text-zinc-400">少数精鋭の機動力。</span>
            </>
        ),
        description: "業界トップクラスの支援実績を誇る\nトップランナーが設立した少数精鋭チーム。\n「顔の見えるサービス」を武器に成果を最大化。",
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
        }, 8000); // 8 Sec per slide (slower for corporate feel)
        return () => clearInterval(timer);
    }, []);

    return (
        <section className="relative w-full h-[100dvh] md:h-screen overflow-hidden bg-white text-zinc-900 border-b border-zinc-200">
            {/* --- MEGA BRAND WATERMARK --- */}
            <div className="absolute top-[15%] left-[-5%] z-0 select-none pointer-events-none opacity-[0.03]">
                <span className="text-[25vw] font-black leading-none tracking-tighter text-black">
                    EVANTIA
                </span>
            </div>

            <AnimatePresence mode="wait">
                {SLIDES.map((slide, index) => (
                    index === currentSlide && (
                        <div key={slide.id} className="absolute inset-0 w-full h-full flex flex-col lg:flex-row">

                            {/* --- LEFT: CONTENT AREA (Corporate/Info) --- */}
                            <div className="relative w-full h-auto min-h-[55%] lg:h-full lg:w-[45%] bg-zinc-50 md:bg-zinc-50/50 md:backdrop-blur-sm flex flex-col justify-center px-6 md:px-12 lg:px-20 z-10 lg:border-r border-zinc-200/50 border-b lg:border-b-0 pb-24 md:pb-0 transition-all duration-300">
                                {/* Grid Texture Overlay */}
                                <div className="absolute inset-0 bg-[url('/grid.svg')] opacity-[0.4] pointer-events-none mix-blend-multiply" style={{ backgroundSize: '40px 40px' }} />

                                {/* Slide Content Wrapper */}
                                <div className="relative z-10 mt-0 pt-16 md:pt-0 lg:mt-0">
                                    <motion.div
                                        initial={{ opacity: 0, x: -20 }}
                                        animate={{ opacity: 1, x: 0 }}
                                        transition={{ delay: 0.3, duration: 0.8 }}
                                        className="flex items-center gap-3 mb-6 md:mb-10"
                                    >
                                        <div className="w-8 h-[1px] bg-[var(--color-brand-accent)]" />
                                        <span className="text-[10px] md:text-xs font-bold tracking-[0.2em] uppercase text-[var(--color-brand-accent)]">
                                            0{slide.id} — {slide.label}
                                        </span>
                                    </motion.div>

                                    <div className="overflow-hidden pb-1">
                                        <motion.h2
                                            initial={{ y: "100%" }}
                                            animate={{ y: 0 }}
                                            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1], delay: 0.1 }}
                                            className="text-4xl md:text-6xl lg:text-7xl font-black tracking-tight leading-[1.1] text-zinc-900 mb-6 md:mb-8 font-feature-settings-palt"
                                        >
                                            {slide.title}
                                        </motion.h2>
                                    </div>

                                    <motion.p
                                        initial={{ opacity: 0 }}
                                        animate={{ opacity: 1 }}
                                        transition={{ delay: 0.6, duration: 1 }}
                                        className="text-base md:text-lg text-[var(--color-primary)] font-bold leading-loose mb-10 md:mb-14 max-w-md"
                                    >
                                        {slide.description}
                                    </motion.p>

                                    <motion.div
                                        initial={{ opacity: 0, y: 10 }}
                                        animate={{ opacity: 1, y: 0 }}
                                        transition={{ delay: 0.8 }}
                                    >
                                        <Link
                                            href={slide.btnLink}
                                            className="group inline-flex items-center gap-4 text-sm font-black tracking-[0.2em] text-[var(--color-primary)] uppercase"
                                        >
                                            <div className="w-14 h-14 border-2 border-[var(--color-primary)] rounded-full flex items-center justify-center group-hover:bg-[var(--color-primary)] group-hover:text-white group-hover:shadow-lg transition-all duration-300">
                                                <ArrowRight className="w-5 h-5 transition-colors" />
                                            </div>
                                            <span className="group-hover:translate-x-2 transition-transform duration-300">{slide.btnText}</span>
                                        </Link>
                                    </motion.div>
                                </div>

                                {/* --- NEWS TICKER (Bottom Left) --- */}
                                <div className="absolute bottom-0 left-0 w-full border-t border-zinc-200 bg-white/80 backdrop-blur-md py-4 px-6 md:px-10 flex flex-col md:flex-row items-start md:items-center gap-4 md:gap-8 overflow-hidden z-20">
                                    <span className="text-[10px] font-bold tracking-widest text-zinc-400 uppercase flex-shrink-0">Latest News</span>
                                    <div className="flex-1 overflow-hidden relative h-6 w-full">
                                        <AnimatePresence mode="popLayout">
                                            <motion.div
                                                key={currentSlide} // Rotate news with slides for demonstration (or independent timer)
                                                initial={{ y: 20, opacity: 0 }}
                                                animate={{ y: 0, opacity: 1 }}
                                                exit={{ y: -20, opacity: 0 }}
                                                transition={{ duration: 0.5 }}
                                                className="absolute top-0 left-0 w-full flex items-center gap-3 truncate"
                                            >
                                                <span className="text-xs font-mono text-zinc-500">{NEWS_TICKER[index % NEWS_TICKER.length].date}</span>
                                                <span className="text-[10px] px-1.5 py-0.5 border border-[var(--color-brand-accent)]/30 rounded text-[var(--color-brand-accent)] bg-[var(--color-brand-accent)]/5">{NEWS_TICKER[index % NEWS_TICKER.length].category}</span>
                                                <span className="text-xs font-medium text-zinc-800 truncate hover:text-[var(--color-brand-accent)] hover:underline cursor-pointer transition-colors">
                                                    {NEWS_TICKER[index % NEWS_TICKER.length].title}
                                                </span>
                                            </motion.div>
                                        </AnimatePresence>
                                    </div>
                                    <Link href="/news" className="hidden md:flex items-center text-[10px] font-bold text-zinc-400 hover:text-zinc-900 transition-colors uppercase gap-1 shrink-0">
                                        View All <ChevronRight className="w-3 h-3" />
                                    </Link>
                                </div>
                            </div>

                            {/* --- RIGHT: VISUAL AREA (Cinematic) --- */}
                            <div className="relative flex-1 h-full overflow-hidden bg-zinc-100">
                                <motion.div
                                    className="absolute inset-0"
                                    initial={{ scale: 1.15, filter: "blur(10px)" }}
                                    animate={{ scale: 1, filter: "blur(0px)" }}
                                    transition={{ duration: 2.5, ease: "easeOut" }}
                                >
                                    <Image
                                        src={slide.image}
                                        alt={slide.label}
                                        fill
                                        className="object-cover"
                                        priority
                                    />
                                    {/* Brand Tint Overlay */}
                                    <div className="absolute inset-0 bg-zinc-900/10 mix-blend-overlay" />
                                </motion.div>

                                {/* Slide Progress / Navigation (Right Side) */}
                                <div className="absolute bottom-10 right-10 flex gap-1 z-20">
                                    {SLIDES.map((_, i) => (
                                        <button
                                            key={i}
                                            onClick={() => setCurrentSlide(i)}
                                            className={cn(
                                                "h-1 transition-all duration-500",
                                                currentSlide === i ? "w-12 bg-white" : "w-3 bg-white/40 hover:bg-white/60"
                                            )}
                                        />
                                    ))}
                                </div>
                            </div>

                        </div>
                    )
                ))}
            </AnimatePresence>
        </section>
    );
}
