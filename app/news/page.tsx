"use client";

import { useState } from "react";
import { PageHeader } from "@/components/ui/PageHeader";
import { ScrollReveal } from "@/components/ui/ScrollReveal";
import { ArrowUpRight } from "lucide-react";

import { NEWS } from "@/lib/constants";

const CATEGORIES = [
    { key: "all", label: "すべて" },
    { key: "RELEASE", label: "リリース" },
    { key: "EVENT", label: "イベント" },
    { key: "MEDIA", label: "メディア" }
];

export default function NewsPage() {
    const [activeCategory, setActiveCategory] = useState("all");

    const filteredNews = activeCategory === "all"
        ? NEWS
        : NEWS.filter(item => item.cat === activeCategory);

    return (
        <div className="bg-white pb-40 text-black">
            <PageHeader title="NEWS" subtitle="お知らせ" />

            <section className="py-16 md:py-24">
                <div className="container-custom max-w-4xl">
                    {/* Filter - Clickable */}
                    <div className="flex gap-6 md:gap-8 mb-12 overflow-x-auto pb-4 border-b border-border">
                        {CATEGORIES.map((cat) => (
                            <button
                                key={cat.key}
                                onClick={() => setActiveCategory(cat.key)}
                                className={`text-sm font-bold tracking-widest transition-colors whitespace-nowrap py-2 ${activeCategory === cat.key
                                    ? 'text-black border-b-2 border-black -mb-[17px] pb-[15px]'
                                    : 'text-gray-400 hover:text-black'
                                    }`}
                            >
                                {cat.label}
                            </button>
                        ))}
                    </div>

                    <div className="flex flex-col border-t border-gray-200">
                        {filteredNews.length > 0 ? (
                            filteredNews.map((item, i) => (
                                <ScrollReveal key={item.id} delay={i * 0.05}>
                                    <div className="group flex flex-col md:flex-row md:items-center justify-between py-10 border-b border-gray-200 hover:border-[var(--color-brand-accent)] transition-all duration-300 px-4 hover:bg-zinc-50">
                                        <div className="flex flex-col md:flex-row md:items-center gap-4 md:gap-12">
                                            <div className="flex items-center gap-4">
                                                <span className="font-mono text-sm text-gray-400 group-hover:text-[var(--color-brand-accent)] transition-colors">{item.date}</span>
                                                <span className={`text-xs font-bold px-3 py-1 border ${item.cat === 'RELEASE' ? 'bg-[var(--color-primary)] text-white border-[var(--color-primary)]' : 'text-gray-500 border-gray-200 bg-white group-hover:border-[var(--color-brand-accent)] group-hover:text-[var(--color-brand-accent)]'} transition-colors uppercase tracking-wider`}>
                                                    {item.cat}
                                                </span>
                                            </div>
                                            <h3 className="text-xl md:text-2xl font-bold group-hover:translate-x-2 transition-transform duration-300">
                                                {item.title}
                                            </h3>
                                        </div>
                                    </div>
                                </ScrollReveal>
                            ))
                        ) : (
                            <div className="py-20 text-center text-gray-400">
                                このカテゴリーのお知らせはまだありません。
                            </div>
                        )}
                    </div>

                    {filteredNews.length > 0 && (
                        <div className="mt-20 text-center">
                            <button className="px-12 py-4 border border-gray-200 hover:border-black rounded-full transition-all duration-300 text-sm font-bold tracking-widest hover:bg-black hover:text-white">
                                もっと見る
                            </button>
                        </div>
                    )}
                </div>
            </section>
        </div>
    );
}
