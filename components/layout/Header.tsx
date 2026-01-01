"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
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
    { label: "導入事例", href: "/case", en: "CASE" },
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
                className={cn(
                    "fixed top-0 left-0 right-0 z-50 transition-all duration-500 ease-in-out px-4 md:px-8",
                    isScrolled
                        ? "bg-white/90 backdrop-blur-md py-4 border-b border-border/50"
                        : "bg-transparent py-6"
                )}
            >
                <div className="flex items-center justify-between">
                    <Logo />

                    <div className="flex items-center gap-4 md:gap-8">
                        <Link
                            href="/contact"
                            className="hidden md:flex relative overflow-hidden bg-black text-white px-8 py-3 rounded-full text-sm font-bold transition-all duration-300 hover:scale-105"
                        >
                            <span className="relative z-10 flex items-center gap-2">
                                CONTACT <ArrowUpRight size={16} />
                            </span>
                        </Link>

                        <button
                            className="w-12 h-12 rounded-full border border-black/10 bg-white/50 backdrop-blur hover:bg-black hover:text-white transition-all flex items-center justify-center relative z-50"
                            onClick={() => setIsOpen(!isOpen)}
                        >
                            {isOpen ? <X size={24} /> : <Menu size={24} />}
                        </button>
                    </div>
                </div>
            </header>

            {/* Full Screen Menu Overlay */}
            <AnimatePresence>
                {isOpen && (
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        transition={{ duration: 0.3 }}
                        className="fixed inset-0 bg-black text-white z-40"
                    >
                        <div className="h-full flex flex-col">
                            {/* Mobile Layout */}
                            <div className="flex-1 flex flex-col justify-center px-8 pt-24 pb-8 md:hidden">
                                <nav className="flex flex-col gap-6">
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
                                                <span className="text-2xl font-black">{item.label}</span>
                                                <ArrowUpRight size={20} className="text-white/40 group-hover:text-white transition-colors" />
                                            </Link>
                                        </motion.div>
                                    ))}
                                </nav>

                                <motion.div
                                    initial={{ opacity: 0, y: 20 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    transition={{ delay: 0.5 }}
                                    className="mt-10"
                                >
                                    <Link
                                        href="/contact"
                                        className="flex items-center justify-center w-full bg-white text-black py-5 rounded-full font-black text-xl hover:bg-white/90 transition-colors"
                                    >
                                        お問い合わせ
                                    </Link>
                                </motion.div>

                                <motion.div
                                    initial={{ opacity: 0 }}
                                    animate={{ opacity: 1 }}
                                    transition={{ delay: 0.6 }}
                                    className="mt-auto pt-8 text-center text-white/50 text-base"
                                >
                                    <p className="font-bold">株式会社エバンティア</p>
                                    <p className="mt-2">大阪府大阪市中央区</p>
                                </motion.div>
                            </div>

                            {/* Desktop Layout */}
                            <div className="hidden md:flex h-full items-center justify-center">
                                <div className="grid grid-cols-[1fr_300px] items-center gap-0 max-w-6xl w-full px-8">
                                    <nav className="flex flex-col gap-6">
                                        {NAV_ITEMS.map((item, i) => (
                                            <motion.div
                                                key={item.href}
                                                initial={{ opacity: 0, y: 20 }}
                                                animate={{ opacity: 1, y: 0 }}
                                                transition={{ delay: 0.1 + (i * 0.1) }}
                                            >
                                                <Link
                                                    href={item.href}
                                                    className="group flex items-baseline gap-4 text-5xl font-black tracking-tighter hover:text-white/50 transition-colors text-white py-1"
                                                >
                                                    {item.label}
                                                    <span className="text-sm font-bold tracking-widest text-gray-500 group-hover:text-white transition-colors">
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
                                        className="flex flex-col justify-center gap-8 text-gray-400 text-sm font-bold tracking-widest border-l border-white/20 pl-24 h-full"
                                    >
                                        <div className="flex flex-col gap-2">
                                            <span className="text-white">株式会社エバンティア</span>
                                            <span>TPR北浜ビル 6F</span>
                                            <span>大阪府大阪市</span>
                                        </div>
                                        <div className="flex flex-col gap-2">
                                            <span>jyunpei.arai@evantia-co.jp</span>
                                            <span>090-2393-2820</span>
                                        </div>
                                        <div className="flex gap-6 mt-8">
                                            <a href="#" className="hover:text-white transition-colors">X (Twitter)</a>
                                            <a href="#" className="hover:text-white transition-colors">LinkedIn</a>
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
