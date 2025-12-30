"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";
import { ArrowRight, ArrowUpRight } from "lucide-react";

const SERVICES = [
    {
        id: "01",
        en: "Strategy Building",
        jp: "採用戦略の構築",
        desc: "自走を見据えた採用ブランド構築と\nPDCAサイクルの仕組みづくりを実施。",
        link: "/service/strategy",
        image: "https://images.unsplash.com/photo-1454165833767-027ffea9e7a7?auto=format&fit=crop&q=80&w=1200" // Strategic Workspace
    },
    {
        id: "02",
        en: "Population Formation",
        jp: "母集団形成支援",
        desc: "ナビサイト、スカウト、イベントなど\n幅広いチャネルから最適な手法を提案。",
        link: "/service/population",
        image: "https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?auto=format&fit=crop&q=80&w=1200" // Professional Interview
    },
    {
        id: "03",
        en: "RPO (Execution)",
        jp: "採用実務アウトソーシング",
        desc: "説明会や面接を代行。\n単なる代行ではなく、自走用マニュアル作成をゴールに。",
        link: "/service/rpo",
        image: "/assets/images/service-execution.jpg"
    },
    {
        id: "04",
        en: "RPO (Admin)",
        jp: "採用事務アウトソーシング",
        desc: "ATS構築や運用を専任チームが代行し、成果最大化を支援。",
        link: "/service/admin",
        image: "https://images.unsplash.com/photo-1497215728101-856f4ea42174?auto=format&fit=crop&q=80&w=1200" // Corporate Lounge
    }
];

export function InteractiveServiceList() {
    const [hoveredService, setHoveredService] = useState<number | null>(null);

    return (
        <section className="relative py-40 md:py-60 bg-black text-white overflow-hidden">
            {/* Cinematic Background Layer */}
            <AnimatePresence>
                {hoveredService !== null && (
                    <motion.div
                        key={hoveredService}
                        initial={{ opacity: 0, scale: 1.1 }}
                        animate={{ opacity: 0.6, scale: 1.05 }} // subtle zoom
                        exit={{ opacity: 0 }}
                        transition={{ duration: 0.8 }}
                        className="absolute inset-0 z-0 bg-cover bg-center pointer-events-none"
                        style={{ backgroundImage: `url(${SERVICES[hoveredService].image})` }}
                    >
                        <div className="absolute inset-0 bg-black/50" />
                    </motion.div>
                )}
            </AnimatePresence>

            {/* Default Background */}
            {hoveredService === null && (
                <div className="absolute inset-0 z-0 bg-black pointer-events-none transition-colors duration-500" />
            )}

            <div className="container-custom relative z-10">
                <div className="mb-24 flex flex-col md:flex-row items-end justify-between border-b border-white/20 pb-8">
                    <div>
                        <span className="text-primary font-bold tracking-widest text-xs mb-4 block">OUR EXPERTISE</span>
                        <h2 className="text-4xl md:text-6xl font-bold leading-tight">Our Services</h2>
                    </div>
                    <p className="text-gray-400 font-medium mt-6 md:mt-0 max-w-md text-right md:text-left">
                        一時的な成功より、勝ち続ける「自走力」を。<br />
                        表面ではなく本質から、貴社の採用を強くします。
                    </p>
                </div>

                <div className="flex flex-col">
                    {SERVICES.map((service, index) => (
                        <Link
                            href={service.link}
                            key={service.id}
                            className="group relative border-b border-white/10 py-12 md:py-16 transition-all"
                            onMouseEnter={() => setHoveredService(index)}
                            onMouseLeave={() => setHoveredService(null)}
                        >
                            <div className="flex flex-col md:flex-row md:items-baseline justify-between gap-6 group-hover:translate-x-4 transition-transform duration-500">
                                <div className="flex items-baseline gap-6 md:gap-12">
                                    <span className="text-sm md:text-lg font-bold tracking-widest text-primary/80">
                                        {service.id}
                                    </span>
                                    <h3 className="text-3xl md:text-5xl lg:text-6xl font-black text-white transition-colors duration-300">
                                        {service.jp}
                                    </h3>
                                </div>

                                <div className="flex items-center gap-4 opacity-0 group-hover:opacity-100 transition-all duration-300 transform translate-x-4 group-hover:translate-x-0">
                                    <span className="text-sm font-bold uppercase tracking-wider hidden md:block">{service.en}</span>
                                    <div className="w-12 h-12 rounded-full border border-white/30 flex items-center justify-center group-hover:bg-white group-hover:text-black transition-colors">
                                        <ArrowUpRight size={20} />
                                    </div>
                                </div>
                            </div>

                            <div className="mt-6 md:pl-[120px] max-w-xl overflow-hidden transition-all duration-500 max-h-0 group-hover:max-h-40 opacity-0 group-hover:opacity-100">
                                <p className="text-gray-300 text-lg leading-relaxed">{service.desc}</p>
                            </div>
                        </Link>
                    ))}
                </div>
            </div>
        </section>
    );
}
