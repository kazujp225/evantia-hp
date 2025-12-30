"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu, X, ArrowUpRight } from "lucide-react";
import { Logo } from "@/components/ui/Logo";
import { cn } from "@/lib/utils";
import { motion, AnimatePresence } from "framer-motion";

const NAV_ITEMS = [
    { label: "SERVICE", href: "/service", jp: "事業内容" },
    { label: "ABOUT", href: "/about", jp: "私たちについて" },
    { label: "RECRUIT", href: "/recruit", jp: "採用情報" },
    { label: "COLUMN", href: "/column", jp: "コラム" },
    { label: "CASE", href: "/case", jp: "導入事例" },
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
                        initial={{ opacity: 0, y: "-100%" }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: "-100%" }}
                        transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
                        className="fixed inset-0 bg-black text-white z-40 flex flex-col justify-center items-center"
                    >
                        <div className="container-custom grid md:grid-cols-[1fr_300px] items-center gap-16 md:gap-0 h-full max-h-[800px]">

                            {/* Main Nav Links */}
                            <nav className="flex flex-col gap-8 md:gap-12">
                                {NAV_ITEMS.map((item, i) => (
                                    <motion.div
                                        key={item.href}
                                        initial={{ opacity: 0, y: 50 }}
                                        animate={{ opacity: 1, y: 0 }}
                                        transition={{ delay: 0.1 + (i * 0.1) }}
                                    >
                                        <Link
                                            href={item.href}
                                            className="group flex items-baseline gap-6 text-5xl md:text-8xl font-black tracking-tighter hover:text-white/50 transition-colors text-white py-2"
                                        >
                                            {item.label}
                                            <span className="text-sm md:text-lg font-bold tracking-widest text-gray-500 group-hover:text-white transition-colors">
                                                {item.jp}
                                            </span>
                                        </Link>
                                    </motion.div>
                                ))}
                            </nav>

                            {/* Sidebar Info */}
                            <motion.div
                                initial={{ opacity: 0 }}
                                animate={{ opacity: 1 }}
                                transition={{ delay: 0.6 }}
                                className="hidden md:flex flex-col gap-8 text-gray-400 text-sm font-bold tracking-widest border-l border-white/20 pl-24 h-full justify-center"
                            >
                                <div className="flex flex-col gap-2">
                                    <span className="text-white">EVANTIA Inc.</span>
                                    <span>TPR Kitahama Bldg 6F</span>
                                    <span>Osaka, Japan</span>
                                </div>
                                <div className="flex flex-col gap-2">
                                    <span>jyunpei.arai@evantia-co.jp</span>
                                    <span>090-2393-2820</span>
                                </div>
                                <div className="flex gap-4 mt-8">
                                    <a href="#" className="hover:text-white transition-colors">TWITTER</a>
                                    <a href="#" className="hover:text-white transition-colors">LINKEDIN</a>
                                </div>
                            </motion.div>
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </>
    );
};
