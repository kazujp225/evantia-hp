"use client";

import { motion } from "framer-motion";
import { ScrollReveal } from "@/components/ui/ScrollReveal";

const STEPS = [
    {
        num: "01",
        phase: "STRATEGY",
        title: "Strategy & Design",
        jp: "戦略とストーリーの設計",
        desc: "ターゲットの心を動かす採用戦略を設計。ターゲット定義から、貴社独自の魅力を言語化します。"
    },
    {
        num: "02",
        phase: "EXECUTION",
        title: "Execution & System",
        jp: "実行と仕組み化",
        desc: "設計した戦略を、経験豊富なリクルーターが代行実行。同時に、そのプロセスをマニュアル化し、透明性を確保します。"
    },
    {
        num: "03",
        phase: "SELF-RUN",
        title: "Transfer & Self-Run",
        jp: "内製化と自走",
        desc: "最終目標は、貴社での自走体制の確立。成功事例とマニュアルを貴社に移管し、持続的に成果を出せる採用チームを実現します。"
    }
];

export function ProcessSection() {
    return (
        <section className="py-32 bg-gray-50 relative overflow-hidden">
            <div className="container-custom">
                <ScrollReveal className="mb-24 flex flex-col md:flex-row justify-between items-end">
                    <div>
                        <span className="text-primary font-bold tracking-widest text-xs mb-4 block uppercase">The EVANTIA Method</span>
                        <h2 className="text-4xl md:text-5xl font-black leading-tight">
                            Process of<br />Transformation.
                        </h2>
                    </div>
                    <p className="text-gray-500 font-mono text-xs md:text-right mt-6 md:mt-0">
                        SYSTEMATIC APPROACH<br />FOR SUSTAINABLE GROWTH
                    </p>
                </ScrollReveal>

                <div className="relative">
                    {/* Vertical Line for Mobile / Horizontal for Desktop */}
                    <div className="absolute left-4 top-0 bottom-0 w-px bg-gray-200 md:hidden" />
                    <div className="hidden md:block absolute top-[28px] left-0 right-0 h-px bg-gray-200" />

                    <div className="grid md:grid-cols-3 gap-12 md:gap-8">
                        {STEPS.map((step, i) => (
                            <ScrollReveal key={step.num} delay={i * 0.2}>
                                <div className="relative pl-12 md:pl-0 pt-0 md:pt-12 group">
                                    {/* Connection Point */}
                                    <div className="absolute left-[11px] top-0 md:left-0 md:top-[23px] w-[10px] h-[10px] rounded-full bg-white border-2 border-primary z-10 group-hover:bg-primary transition-colors duration-300" />

                                    <div className="mb-6">
                                        <span className="font-mono text-xs text-primary font-bold tracking-widest block mb-2">{step.phase}</span>
                                        <span className="text-7xl font-black font-serif italic text-transparent bg-clip-text bg-gradient-to-br from-gray-200 to-transparent stroke-gray-300 md:opacity-50 group-hover:opacity-100 group-hover:from-primary/20 group-hover:to-primary transition-all duration-500" style={{ WebkitTextStroke: "1px rgba(0,0,0,0.1)" }}>{step.num}</span>
                                    </div>

                                    <h3 className="text-2xl font-bold mb-2">{step.title}</h3>
                                    <p className="text-sm font-bold text-primary mb-4">{step.jp}</p>
                                    <p className="text-gray-500 text-sm leading-relaxed border-l-2 border-gray-100 pl-4 group-hover:border-primary transition-colors duration-300">
                                        {step.desc}
                                    </p>
                                </div>
                            </ScrollReveal>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
}
