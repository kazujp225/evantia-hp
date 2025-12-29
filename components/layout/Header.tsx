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
                    "fixed top-0 left-0 w-full z-50 transition-all duration-500 ease-in-out px-10 lg:px-20 border-b border-transparent bg-white/0",
                    isScrolled ? "bg-white/90 backdrop-blur-md border-border py-6" : "py-12 lg:py-20"
                )}
            >
                <div className="w-full flex items-center justify-between">
                    <motion.div
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 1.2, ease: [0.19, 1, 0.22, 1] }}
                        className="scale-125 origin-left transition-transform duration-500"
                    >
                        <Logo />
                    </motion.div>

                    <div className="flex items-center gap-16">
                        <nav className="hidden lg:flex items-center gap-12">
                            {NAV_ITEMS.map((item, i) => (
                                <motion.div
                                    key={item.href}
                                    initial={{ opacity: 0, y: 10 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    transition={{ duration: 1.2, delay: 0.1 * i, ease: [0.19, 1, 0.22, 1] }}
                                >
                                    <Link
                                        href={item.href}
                                        className="text-[12px] font-black tracking-[0.5em] hover:text-primary transition-all duration-300 text-foreground/50 hover:text-foreground uppercase"
                                    >
                                        {item.label}
                                    </Link>
                                </motion.div>
                            ))}
                        </nav>

                        <div className="flex items-center gap-12">
                            <motion.div
                                initial={{ opacity: 0, y: 10 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ duration: 1.2, delay: 0.6, ease: [0.19, 1, 0.22, 1] }}
                            >
                                <Link
                                    href="/contact"
                                    className="hidden md:block text-[12px] font-black tracking-[0.5em] text-foreground hover:text-primary transition-colors uppercase border-b-2 border-primary pb-1"
                                >
                                    Contact
                                </Link>
                            </motion.div>

                            <motion.button
                                initial={{ opacity: 0, scale: 0.9 }}
                                animate={{ opacity: 1, scale: 1 }}
                                transition={{ duration: 1.2, delay: 0.8, ease: [0.19, 1, 0.22, 1] }}
                                className="flex flex-col gap-2 group cursor-pointer relative z-50 p-2"
                                onClick={() => setIsOpen(!isOpen)}
                            >
                                <span className={cn("w-8 h-[1.5px] bg-foreground transition-all duration-500", isOpen ? "rotate-45 translate-y-[5.25px]" : "")} />
                                <span className={cn("w-8 h-[1.5px] bg-foreground transition-all duration-500", isOpen ? "opacity-0" : "")} />
                                <span className={cn("w-8 h-[1.5px] bg-foreground transition-all duration-500", isOpen ? "-rotate-45 -translate-y-[5.25px]" : "")} />
                            </motion.button>
                        </div>
                    </div>
                </div>
            </header>

            <AnimatePresence>
                {isOpen && (
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        className="fixed inset-0 bg-white z-40 flex flex-col pt-32 px-10"
                    >
                        <div className="container-custom grid lg:grid-cols-2 gap-20 h-full">
                            <nav className="flex flex-col gap-8">
                                {NAV_ITEMS.map((item, i) => (
                                    <motion.div
                                        key={item.href}
                                        initial={{ opacity: 0, y: 20 }}
                                        animate={{ opacity: 1, y: 0 }}
                                        transition={{ delay: i * 0.1 }}
                                    >
                                        <Link
                                            href={item.href}
                                            className="group flex items-baseline gap-6"
                                        >
                                            <span className="text-[10px] font-black text-primary/30 tracking-widest uppercase">{`0${i + 1}`}</span>
                                            <span className="text-6xl md:text-8xl font-black tracking-tighter hover:text-primary transition-colors uppercase font-sans">
                                                {item.label}
                                            </span>
                                        </Link>
                                    </motion.div>
                                ))}
                            </nav>

                            <div className="flex flex-col justify-between py-10 border-l border-border pl-20 hidden lg:flex">
                                <div className="space-y-12">
                                    <div className="space-y-4">
                                        <h4 className="text-[10px] font-black tracking-[0.5em] text-primary uppercase">Office</h4>
                                        <p className="text-sm font-medium leading-loose text-muted-foreground">
                                            TPR Kitahama Bldg 6F,<br />
                                            1-1-20 Kitahama, Chuo-ku,<br />
                                            Osaka, Japan
                                        </p>
                                    </div>
                                    <div className="space-y-4">
                                        <h4 className="text-[10px] font-black tracking-[0.5em] text-primary uppercase">Connect</h4>
                                        <div className="flex flex-col gap-2 text-sm font-medium">
                                            <a href="#" className="hover:text-primary transition-colors italic font-serif">LinkedIn</a>
                                            <a href="#" className="hover:text-primary transition-colors italic font-serif">Twitter (X)</a>
                                        </div>
                                    </div>
                                </div>
                                <div className="text-[10px] font-black tracking-[0.5em] text-muted-foreground uppercase">
                                    © 2025 Evantia Inc.
                                </div>
                            </div>
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </>
    );
};
