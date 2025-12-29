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
            <div className="container-custom py-40 md:py-60">
                <div className="grid lg:grid-cols-[1fr_2fr] gap-20 mb-32 items-end">
                    <ScrollReveal>
                        <span className="text-[10px] font-black tracking-[0.6em] text-primary mb-6 block uppercase">Our Performance</span>
                        <h2 className="text-7xl md:text-[10rem] font-black tracking-tighter leading-[0.85] uppercase">
                            Proven<br />
                            Impact.
                        </h2>
                    </ScrollReveal>
                    <ScrollReveal delay={0.2} className="flex flex-col justify-end">
                        <p className="text-2xl font-medium leading-relaxed max-w-xl border-l-8 border-primary/20 pl-10 italic text-black/60">
                            感覚や経験則だけに頼らない。<br />
                            データと行動量に裏打ちされた確かな成果をお約束します。
                        </p>
                    </ScrollReveal>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 border border-black/5 rounded-[3rem] overflow-hidden bg-white shadow-2xl">
                    {STATS.map((stat, i) => (
                        <ScrollReveal key={i} delay={i * 0.1} className="group border-b last:border-b-0 md:border-b-0 md:border-r border-black/5 last:border-r-0 p-12 md:p-16 hover:bg-black transition-all duration-700 relative overflow-hidden">
                            {/* Depth Glow */}
                            <div className="absolute top-0 left-0 w-full h-full bg-primary/5 opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none" />

                            <span className="text-[10px] font-black tracking-[0.4em] mb-8 block opacity-30 group-hover:text-primary group-hover:opacity-100 transition-all uppercase">{stat.caption}</span>
                            <div className="flex items-baseline mb-8 group-hover:translate-x-2 transition-transform duration-700">
                                <span className="text-7xl md:text-8xl lg:text-9xl font-black tracking-tighter leading-none group-hover:text-white transition-colors duration-700">
                                    {stat.value}
                                </span>
                                <span className="text-3xl font-black ml-2 text-primary">{stat.unit}</span>
                            </div>
                            <p className="text-xs font-black uppercase tracking-[0.2em] pt-6 border-t border-black/5 group-hover:border-white/20 group-hover:text-white/60 transition-all">
                                {stat.label}
                            </p>
                        </ScrollReveal>
                    ))}
                </div>
            </div>
        </section>
    );
}
