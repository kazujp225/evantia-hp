"use client";

import { ScrollReveal } from "@/components/ui/ScrollReveal";

const STATS = [
    { label: "平均採用目標達成率", value: "120", unit: "%", caption: "TARGET ACHIEVEMENT" },
    { label: "最大内定承諾率改善", value: "2.5", unit: "X", caption: "ACCEPTANCE RATE" },
    { label: "累計支援実績企業数", value: "300", unit: "+", caption: "COMPANIES" },
    { label: "継続リピート率", value: "95", unit: "%", caption: "REPEAT RATE" },
];

export function ImpactSection() {
    return (
        <section className="bg-white border-t border-black text-black">
            <div className="container-custom py-24 md:py-32">
                <div className="grid md:grid-cols-[1fr_2fr] gap-16 mb-24">
                    <ScrollReveal>
                        <h2 className="text-5xl md:text-7xl font-black tracking-tighter leading-none">
                            PROVEN<br />
                            IMPACT.
                        </h2>
                    </ScrollReveal>
                    <ScrollReveal delay={0.2} className="flex flex-col justify-end">
                        <p className="text-lg font-medium leading-relaxed max-w-lg border-l-4 border-primary pl-6">
                            感覚や経験則だけに頼らない。<br />
                            データと実績に基づいた採用支援を提供します。
                        </p>
                    </ScrollReveal>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 border-t border-black">
                    {STATS.map((stat, i) => (
                        <ScrollReveal key={i} delay={i * 0.1} className="group border-b md:border-b-0 md:border-r border-black last:border-r-0 p-8 md:p-12 hover:bg-black hover:text-white transition-colors duration-500 relative">
                            <span className="text-[10px] font-bold tracking-[0.2em] mb-4 block opacity-50">{stat.caption}</span>
                            <div className="flex items-baseline mb-4">
                                <span className="text-6xl md:text-7xl lg:text-8xl font-black tracking-tighter leading-none group-hover:text-primary transition-colors duration-300">
                                    {stat.value}
                                </span>
                                <span className="text-2xl font-bold ml-1">{stat.unit}</span>
                            </div>
                            <p className="text-sm font-bold border-t border-current pt-4 inline-block">
                                {stat.label}
                            </p>

                            {/* Corner Accent */}
                            <div className="absolute top-0 right-0 w-4 h-4 border-t border-r border-transparent group-hover:border-primary transition-colors duration-300" />
                        </ScrollReveal>
                    ))}
                </div>
            </div>
        </section>
    );
}
