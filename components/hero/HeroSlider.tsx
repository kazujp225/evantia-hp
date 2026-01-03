"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight, ChevronRight, Minus } from "lucide-react";
import { cn } from "@/lib/utils";

// Mock Data for News Ticker
const NEWS_TICKER = [
    { date: "2026.01.05", category: "PRESS", title: "株式会社エバンティア、本社オフィスを移転しました。" },
    { date: "2026.01.03", category: "INFO", title: "年末年始の営業についてのお知らせ" },
    { date: "2026.01.01", category: "MEDIA", title: "代表取締役のインタビューが『Business Insider』に掲載されました。" },
];

const SLIDES = [
    {
        id: 1,
        image: "/assets/images/hero-philosophy.jpg",
        imageAlt: "ビジネスミーティングの様子 - チームが戦略について議論している",
        label: "OUR PHILOSOPHY",
        title: (
            <>
                挑戦の価値と面白さを<br />
                <span className="text-zinc-400">最大化する</span>
            </>
        ),
        titleText: "挑戦の価値と面白さを最大化する",
        description: "人も企業も「より良い未来」を実現できる場として。\n挑戦する人の潜在力を\n最大限に引き出す場所でありたい。",
        btnText: "私たちについて",
        btnLink: "/about"
    },
    {
        id: 2,
        image: "/assets/images/hero-selfdriving.jpg",
        imageAlt: "モダンなオフィスビル - 企業の成長と自立を象徴",
        label: "SELF-DRIVING",
        title: (
            <>
                一時的な成功より、<br />
                <span className="text-zinc-400">持続的な「自走力」を。</span>
            </>
        ),
        titleText: "一時的な成功より、持続的な自走力を",
        description: "本質的な課題解決で、貴社の採用力を強化。\n「自走体制の構築」を最終目標に\n採用課題の解決を支援します。",
        btnText: "サービスを見る",
        btnLink: "/service"
    },
    {
        id: 3,
        image: "/assets/images/hero-team.jpg",
        imageAlt: "プロフェッショナルチームの協働 - 少数精鋭による高品質なサービス",
        label: "ELITE TEAM",
        title: (
            <>
                豊富な経験と<br />
                <span className="text-zinc-400">少数精鋭の機動力。</span>
            </>
        ),
        titleText: "豊富な経験と少数精鋭の機動力",
        description: "採用支援の豊富な実績を持つ\n経験豊かなメンバーで構成されたチーム。\n「顔の見えるサービス」で成果を追求します。",
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
        <section
            className="relative w-full h-[100dvh] md:h-screen overflow-hidden bg-white text-zinc-900 border-b border-zinc-200"
            aria-label="ヒーロースライダー"
            aria-roledescription="カルーセル"
        >
            {/* --- MEGA BRAND WATERMARK --- */}
            <div className="absolute top-[15%] left-[-5%] z-0 select-none pointer-events-none opacity-[0.03]" aria-hidden="true">
                <span className="text-[25vw] font-black leading-none tracking-tighter text-primary">
                    EVANTIA
                </span>
            </div>

            {/* --- LOGO WATERMARK --- */}
            <div className="absolute bottom-[10%] right-[5%] z-0 select-none pointer-events-none opacity-[0.04]" aria-hidden="true">
                <Image
                    src="/logo.png"
                    alt=""
                    width={300}
                    height={300}
                />
            </div>

            <AnimatePresence mode="wait">
                {SLIDES.map((slide, index) => (
                    index === currentSlide && (
                        <div
                            key={slide.id}
                            className="absolute inset-0 w-full h-full flex flex-col lg:flex-row"
                            role="group"
                            aria-roledescription="スライド"
                            aria-label={`${index + 1}/${SLIDES.length}: ${slide.titleText}`}
                        >

                            {/* --- LEFT: CONTENT AREA (Corporate/Info) --- */}
                            <div className="relative w-full h-[60%] lg:h-full lg:w-[45%] bg-zinc-50 md:bg-zinc-50/50 md:backdrop-blur-sm flex flex-col justify-start lg:justify-center px-6 md:px-12 lg:px-20 z-10 lg:border-r border-zinc-200/50 border-b lg:border-b-0 pt-40 pb-16 md:py-0 transition-all duration-300">
                                {/* Grid Texture Overlay */}
                                <div className="absolute inset-0 bg-[url('/grid.svg')] opacity-[0.4] pointer-events-none mix-blend-multiply" style={{ backgroundSize: '40px 40px' }} />

                                {/* Slide Content Wrapper */}
                                <div className="relative z-10 mt-0 lg:mt-0">
                                    <motion.div
                                        initial={{ opacity: 0, x: -20 }}
                                        animate={{ opacity: 1, x: 0 }}
                                        transition={{ delay: 0.3, duration: 0.8 }}
                                        className="flex items-center gap-3 mb-6 md:mb-10"
                                    >
                                        <div className="w-8 h-[1px] bg-[var(--color-brand-accent)]" />
                                        <span className="text-sm md:text-xs font-black tracking-[0.2em] uppercase text-[var(--color-brand-accent)]">
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
                                            aria-label={`${slide.btnText}ページへ`}
                                        >
                                            <div className="w-14 h-14 border-2 border-[var(--color-primary)] rounded-full flex items-center justify-center group-hover:bg-[var(--color-primary)] group-hover:text-white group-hover:shadow-lg transition-all duration-300" aria-hidden="true">
                                                <ArrowRight className="w-5 h-5 transition-colors" />
                                            </div>
                                            <span className="group-hover:translate-x-2 transition-transform duration-300">{slide.btnText}</span>
                                        </Link>
                                    </motion.div>
                                </div>

                                {/* --- NEWS TICKER (Bottom Left) --- */}
                                <div className="absolute bottom-0 left-0 w-full border-t border-zinc-200 bg-white/80 backdrop-blur-md py-3 px-6 md:py-4 md:px-10 flex flex-col md:flex-row items-start md:items-center gap-2 md:gap-8 overflow-hidden z-20">
                                    <span className="text-[10px] md:text-xs font-black tracking-widest text-zinc-400 uppercase flex-shrink-0">Latest News</span>
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
                                                <span className="text-sm md:text-xs font-mono font-bold text-zinc-500">{NEWS_TICKER[index % NEWS_TICKER.length].date}</span>
                                                <span className="text-sm md:text-xs font-bold px-2 py-1 border border-[var(--color-brand-accent)]/30 rounded text-[var(--color-brand-accent)] bg-[var(--color-brand-accent)]/5">{NEWS_TICKER[index % NEWS_TICKER.length].category}</span>
                                                <span className="text-sm md:text-xs font-bold text-zinc-800 truncate hover:text-[var(--color-brand-accent)] hover:underline cursor-pointer transition-colors">
                                                    {NEWS_TICKER[index % NEWS_TICKER.length].title}
                                                </span>
                                            </motion.div>
                                        </AnimatePresence>
                                    </div>
                                    <Link href="/news" className="hidden md:flex items-center text-xs font-black text-zinc-400 hover:text-zinc-900 transition-colors uppercase gap-1 shrink-0" aria-label="すべてのニュースを見る">
                                        View All <ChevronRight className="w-3 h-3" aria-hidden="true" />
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
                                        alt={slide.imageAlt}
                                        fill
                                        className="object-cover"
                                        priority
                                    />
                                    {/* Brand Tint Overlay */}
                                    <div className="absolute inset-0 bg-primary/10 mix-blend-overlay" />
                                </motion.div>

                                {/* Slide Progress / Navigation (Right Side) */}
                                <div className="absolute bottom-10 right-10 flex gap-1 z-20" role="tablist" aria-label="スライド選択">
                                    {SLIDES.map((s, i) => (
                                        <button
                                            key={i}
                                            onClick={() => setCurrentSlide(i)}
                                            role="tab"
                                            aria-selected={currentSlide === i}
                                            aria-label={`スライド${i + 1}: ${s.titleText}`}
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
