"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { Menu, X, ArrowUpRight } from "lucide-react";
import { Logo } from "@/components/ui/Logo";
import { cn } from "@/lib/utils";
import { motion, AnimatePresence } from "framer-motion";

const NAV_ITEMS = [
    { label: "事業内容", href: "/service", en: "SERVICE" },
    { label: "私たちについて", href: "/about", en: "ABOUT" },
    { label: "採用情報", href: "/recruit", en: "RECRUIT" },
    { label: "コラム", href: "/column", en: "COLUMN" },
];

export const Header = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [isScrolled, setIsScrolled] = useState(false);
    const pathname = usePathname();

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 20);
        };
        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    useEffect(() => {
        setIsOpen(false);
    }, [pathname]);

    return (
        <>
            <header
                role="banner"
                className={cn(
                    "fixed top-0 left-0 right-0 z-50 transition-all duration-500 ease-in-out px-4 md:px-8",
                    isScrolled
                        ? "bg-white/90 backdrop-blur-md py-3 border-b border-border/50"
                        : "bg-transparent py-4"
                )}
            >
                <div className="flex items-center justify-between">
                    <Logo />

                    <div className="flex items-center gap-4 md:gap-8">
                        <Link
                            href="/contact"
                            className="btn-shine glow-accent hidden md:flex relative overflow-hidden bg-primary text-white px-8 py-3 rounded-full text-sm font-bold transition-all duration-300 hover:scale-105 hover:shadow-[0_0_20px_rgba(46,125,85,0.4)]"
                            aria-label="お問い合わせページへ"
                        >
                            <span className="relative z-10 flex items-center gap-2">
                                CONTACT <ArrowUpRight size={16} className="group-hover:rotate-45 transition-transform duration-300" aria-hidden="true" />
                            </span>
                        </Link>

                        <button
                            className="w-12 h-12 rounded-full border border-primary/20 bg-white/50 backdrop-blur hover:bg-primary hover:text-white transition-all flex items-center justify-center relative z-50"
                            onClick={() => setIsOpen(!isOpen)}
                            aria-expanded={isOpen}
                            aria-controls="main-navigation"
                            aria-label={isOpen ? "メニューを閉じる" : "メニューを開く"}
                        >
                            {isOpen ? <X size={24} aria-hidden="true" /> : <Menu size={24} aria-hidden="true" />}
                        </button>
                    </div>
                </div>
            </header>

            {/* Full Screen Menu Overlay */}
            <AnimatePresence>
                {isOpen && (
                    <motion.div
                        id="main-navigation"
                        role="dialog"
                        aria-modal="true"
                        aria-label="メインナビゲーション"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        transition={{ duration: 0.3 }}
                        className="fixed inset-0 bg-[hsl(145_45%_12%)] text-white z-40"
                    >
                        {/* Background Logo Watermark */}
                        <div className="absolute bottom-0 right-0 opacity-[0.03] pointer-events-none">
                            <Image
                                src="/logo.png"
                                alt=""
                                width={600}
                                height={600}
                                className="translate-x-1/4 translate-y-1/4"
                            />
                        </div>

                        <div className="h-full flex flex-col">
                            {/* Mobile Layout */}
                            <div className="flex-1 flex flex-col px-8 pt-28 pb-8 md:hidden">
                                <nav role="navigation" aria-label="モバイルメニュー" className="flex flex-col gap-4">
                                    {NAV_ITEMS.map((item, i) => (
                                        <motion.div
                                            key={item.href}
                                            initial={{ opacity: 0, x: -20 }}
                                            animate={{ opacity: 1, x: 0 }}
                                            transition={{ delay: 0.1 + (i * 0.08) }}
                                        >
                                            <Link
                                                href={item.href}
                                                className="flex items-center justify-between py-4 border-b border-white/10 group"
                                            >
                                                <div>
                                                    <span className="text-2xl font-black block">{item.label}</span>
                                                    <span className="text-xs font-bold tracking-widest text-white/40">{item.en}</span>
                                                </div>
                                                <ArrowUpRight size={20} className="text-white/40 group-hover:text-[hsl(150_50%_50%)] transition-colors" aria-hidden="true" />
                                            </Link>
                                        </motion.div>
                                    ))}
                                </nav>

                                <motion.div
                                    initial={{ opacity: 0, y: 20 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    transition={{ delay: 0.5 }}
                                    className="mt-8"
                                >
                                    <Link
                                        href="/contact"
                                        className="flex items-center justify-center w-full bg-white text-[hsl(145_45%_16%)] py-4 rounded-full font-black text-lg hover:bg-[hsl(150_50%_50%)] hover:text-white transition-colors"
                                    >
                                        お問い合わせ
                                    </Link>
                                </motion.div>

                                <motion.div
                                    initial={{ opacity: 0 }}
                                    animate={{ opacity: 1 }}
                                    transition={{ delay: 0.6 }}
                                    className="mt-auto pt-6 text-white/40 text-sm space-y-1"
                                >
                                    <p>info@evantia-co.jp</p>
                                    <p>大阪府大阪市中央区淡路町1-4-9</p>
                                </motion.div>
                            </div>

                            {/* Desktop Layout */}
                            <div className="hidden md:flex h-full items-center justify-center">
                                <div className="grid grid-cols-[1fr_300px] items-center gap-0 max-w-6xl w-full px-8">
                                    <nav role="navigation" aria-label="メインメニュー" className="flex flex-col gap-6">
                                        {NAV_ITEMS.map((item, i) => (
                                            <motion.div
                                                key={item.href}
                                                initial={{ opacity: 0, y: 20 }}
                                                animate={{ opacity: 1, y: 0 }}
                                                transition={{ delay: 0.1 + (i * 0.1) }}
                                            >
                                                <Link
                                                    href={item.href}
                                                    className="group flex items-baseline gap-4 text-5xl font-black tracking-tighter hover:text-[hsl(150_50%_50%)] transition-colors text-white py-1"
                                                >
                                                    {item.label}
                                                    <span className="text-sm font-bold tracking-widest text-[hsl(150_30%_50%)] group-hover:text-white transition-colors">
                                                        {item.en}
                                                    </span>
                                                </Link>
                                            </motion.div>
                                        ))}
                                    </nav>

                                    <motion.div
                                        initial={{ opacity: 0 }}
                                        animate={{ opacity: 1 }}
                                        transition={{ delay: 0.6 }}
                                        className="flex flex-col justify-center gap-8 text-[hsl(150_20%_60%)] text-sm font-bold tracking-widest border-l border-white/20 pl-24 h-full"
                                    >
                                        {/* Logo in sidebar */}
                                        <div className="flex items-center gap-3 mb-4">
                                            <Image
                                                src="/logo.png"
                                                alt="EVANTIA"
                                                width={48}
                                                height={48}
                                            />
                                            <span className="text-xl font-extrabold tracking-tight text-white">EVANTIA</span>
                                        </div>
                                        <div className="flex flex-col gap-2">
                                            <span className="text-white">株式会社エバンティア</span>
                                            <span>TPR北浜ビル 6F</span>
                                            <span>大阪府大阪市</span>
                                        </div>
                                        <div className="flex flex-col gap-2">
                                            <span>info@evantia-co.jp</span>
                                            <span>090-2393-2820</span>
                                        </div>
                                        <div className="flex gap-6 mt-8">
                                            <Link href="/contact" className="hover:text-[hsl(150_50%_50%)] transition-colors">お問い合わせ</Link>
                                            <Link href="/news" className="hover:text-[hsl(150_50%_50%)] transition-colors">ニュース</Link>
                                        </div>
                                    </motion.div>
                                </div>
                            </div>
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </>
    );
};
