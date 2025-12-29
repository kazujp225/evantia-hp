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
        image: "https://images.unsplash.com/photo-1552664730-d307ca884978?auto=format&fit=crop&q=80&w=2000"
    },
    {
        id: "02",
        en: "Population Formation",
        jp: "母集団形成支援",
        desc: "ナビサイト、スカウト、イベントなど\n幅広いチャネルから最適な手法を提案。",
        link: "/service/population",
        image: "https://images.unsplash.com/photo-1556761175-5973dc0f32e7?auto=format&fit=crop&q=80&w=2000"
    },
    {
        id: "03",
        en: "RPO (Execution)",
        jp: "採用実務アウトソーシング",
        desc: "説明会や面接を代行。\n単なる代行ではなく、自走用マニュアル作成をゴールに。",
        link: "/service/rpo",
        image: "https://images.unsplash.com/photo-1573497620053-ea5300f94f21?auto=format&fit=crop&q=80&w=2000"
    },
    {
        id: "04",
        en: "RPO (Admin)",
        jp: "採用事務アウトソーシング",
        desc: "ATS構築や運用を専任チームが代行し、成果最大化を支援。",
        link: "/service/admin",
        image: "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?auto=format&fit=crop&q=80&w=2000"
    }
];

export function InteractiveServiceList() {
    const [hoveredService, setHoveredService] = useState<number | null>(null);

    return (
        <section className="relative py-40 md:py-60 bg-black text-white overflow-hidden">
            <div className="container-custom relative z-10">
                <div className="mb-32 flex flex-col lg:flex-row lg:items-end justify-between border-b border-white/10 pb-12">
                    <div>
                        <span className="text-primary font-black tracking-[0.6em] text-[10px] mb-6 block uppercase">Our Excellence</span>
                        <h2 className="text-6xl md:text-8xl font-black leading-none uppercase tracking-tighter">
                            Professional<br />Services
                        </h2>
                    </div>
                    <p className="text-white/40 font-medium mt-10 lg:mt-0 max-w-sm text-lg leading-relaxed italic">
                        一時的な成功より、勝ち続ける「自走力」を。<br />
                        表面ではなく本質から、貴社の採用を強くします。
                    </p>
                </div>

                <div className="flex flex-col w-full">
                    {SERVICES.map((service, index) => (
                        <motion.div
                            key={service.id}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true, margin: "-100px" }}
                            transition={{ duration: 1.2, delay: index * 0.15, ease: [0.19, 1, 0.22, 1] }}
                        >
                            <Link
                                href={service.link}
                                onMouseEnter={() => setHoveredService(index)}
                                onMouseLeave={() => setHoveredService(null)}
                                className="group py-12 border-b border-white/5 transition-all duration-700 cursor-pointer relative block"
                            >
                                <div className="flex items-baseline justify-between transition-all group-hover:pl-4">
                                    <div className="flex items-baseline gap-8">
                                        <span className="text-[10px] font-black text-primary/30 tracking-widest select-none uppercase">{service.id}</span>
                                        <div className="flex flex-col">
                                            <h3 className="text-3xl lg:text-5xl font-black tracking-tighter transition-all group-hover:text-primary uppercase">
                                                {service.jp}
                                            </h3>
                                            <div className="h-0 overflow-hidden group-hover:h-auto group-hover:mt-6 transition-all duration-700">
                                                <p className="text-white/60 text-sm font-medium leading-relaxed max-w-sm">
                                                    {service.desc}
                                                </p>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="opacity-0 group-hover:opacity-100 group-hover:translate-x-4 transition-all duration-700">
                                        <ArrowRight className="text-primary" size={24} />
                                    </div>
                                </div>

                                {/* Minimal hover bridge indicator */}
                                <div className="absolute left-0 bottom-0 w-0 h-[1.5px] bg-primary group-hover:w-full transition-all duration-1000" />
                            </Link>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
