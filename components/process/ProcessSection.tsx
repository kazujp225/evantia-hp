"use client";

import { motion } from "framer-motion";
import { ScrollReveal } from "@/components/ui/ScrollReveal";

const STEPS = [
    {
        num: "01",
        phase: "STRATEGY",
        title: "Strategy & Design",
        jp: "戦略とストーリーの設計",
        desc: "トップセールス流のメソッドで、ターゲットの心を動かす「勝ちパターン」を設計。ターゲット定義から、貴社独自の魅力を言語化します。"
    },
    {
        num: "02",
        phase: "EXECUTION",
        title: "Execution & System",
        jp: "実行と仕組み化",
        desc: "設計した戦略を、プロのリクルーターが代行実行。同時に、そのプロセスを全てマニュアル化し、ブラックボックス化を防ぎます。"
    },
    {
        num: "03",
        phase: "SELF-RUN",
        title: "Transfer & Self-Run",
        jp: "内製化と自走",
        desc: "最終ゴールは、エバンティアがいなくなること。勝ちパターンとマニュアルを貴社に完全移管し、自走できる最強の採用チームを残します。"
    }
];

export function ProcessSection() {
    return (
        <section className="py-40 md:py-64 bg-background relative overflow-hidden">
            {/* Background Texture */}
            <div className="absolute top-0 left-0 w-full h-full opacity-[0.03] pointer-events-none" style={{ backgroundImage: 'radial-gradient(circle at 2px 2px, black 1px, transparent 0)', backgroundSize: '40px 40px' }} />

            <div className="container-custom relative z-10">
                <ScrollReveal className="mb-32 flex flex-col lg:flex-row lg:items-end justify-between">
                    <div>
                        <span className="text-[10px] font-black tracking-[0.6em] text-primary mb-6 block uppercase">Our Method</span>
                        <h2 className="text-6xl md:text-8xl font-black leading-none uppercase tracking-tighter">
                            Process of<br />Transformation.
                        </h2>
                    </div>
                    <p className="text-white/40 font-black text-[10px] tracking-[0.4em] lg:text-right mt-10 lg:mt-0 uppercase">
                        SYSTEMATIC APPROACH<br />FOR SUSTAINABLE GROWTH
                    </p>
                </ScrollReveal>

                <div className="relative">
                    {/* Floating Vertical/Horizontal Progress Line */}
                    <div className="absolute left-6 top-0 bottom-0 w-[2px] bg-primary/10 md:hidden" />
                    <div className="hidden md:block absolute top-[40px] left-0 right-0 h-[2px] bg-primary/10" />

                    <div className="grid md:grid-cols-3 gap-10 md:gap-16">
                        {STEPS.map((step, i) => (
                            <ScrollReveal key={step.num} delay={i * 0.2}>
                                <div className="relative pl-16 md:pl-0 pt-0 md:pt-20 group h-full">
                                    {/* Connection Point with Glow */}
                                    <div className="absolute left-[19px] top-0 md:left-0 md:top-[33px] w-4 h-4 rounded-full bg-background border-4 border-primary z-10 group-hover:scale-150 group-hover:bg-primary transition-all duration-700 shadow-[0_0_20px_rgba(var(--color-primary),0.5)]" />

                                    <div className="glass-card p-10 md:p-12 rounded-[2.5rem] h-full hover:bg-white hover:shadow-2xl transition-all duration-700 flex flex-col">
                                        <div className="mb-10 flex items-start justify-between">
                                            <span className="font-mono text-[10px] text-primary font-black tracking-[0.4em] block uppercase">{step.phase}</span>
                                            <span className="text-6xl font-black font-serif italic text-primary/5 group-hover:text-primary/20 transition-all duration-700">{step.num}</span>
                                        </div>

                                        <h3 className="text-2xl md:text-3xl font-black mb-4 uppercase tracking-tighter">{step.title}</h3>
                                        <p className="text-[10px] font-black tracking-[0.2em] text-primary mb-10 uppercase">{step.jp}</p>
                                        <p className="text-muted-foreground text-sm leading-relaxed font-medium mt-auto">
                                            {step.desc}
                                        </p>
                                    </div>
                                </div>
                            </ScrollReveal>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
}
