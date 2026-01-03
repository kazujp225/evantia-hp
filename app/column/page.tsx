"use client";

import { useState } from "react";
import { PageHeader } from "@/components/ui/PageHeader";
import { ScrollReveal } from "@/components/ui/ScrollReveal";
import { ArrowRight } from "lucide-react";
import Link from "next/link";

const ARTICLES = [
    {
        id: 1,
        date: "2026.01.05",
        cat: "KNOW-HOW",
        catJp: "ノウハウ",
        title: "【テスト記事】コラム機能のサンプル",
        desc: "これはコラム機能のテスト用記事です。実際の記事が公開されるまでの仮コンテンツとなります。"
    }
];

const CATEGORIES = [
    { key: "all", label: "すべて" },
    { key: "KNOW-HOW", label: "ノウハウ" },
    { key: "TREND", label: "トレンド" },
    { key: "NEWS", label: "ニュース" },
    { key: "CULTURE", label: "カルチャー" },
    { key: "INTERVIEW", label: "インタビュー" }
];

export default function ColumnPage() {
    const [activeCategory, setActiveCategory] = useState("all");

    const filteredArticles = activeCategory === "all"
        ? ARTICLES
        : ARTICLES.filter(article => article.cat === activeCategory);

    return (
        <div className="bg-bg-base min-h-screen pb-40">
            <PageHeader title="COLUMN" subtitle="コラム" />

            <section className="py-24">
                <div className="container-custom max-w-5xl">
                    {/* Filter - Clickable */}
                    <div className="flex gap-6 md:gap-8 mb-20 overflow-x-auto pb-4 border-b border-border">
                        {CATEGORIES.map((cat) => (
                            <button
                                key={cat.key}
                                onClick={() => setActiveCategory(cat.key)}
                                className={`text-sm font-bold tracking-widest transition-colors whitespace-nowrap py-2 ${
                                    activeCategory === cat.key
                                        ? 'text-black border-b-2 border-black -mb-[17px] pb-[15px]'
                                        : 'text-gray-400 hover:text-black'
                                }`}
                            >
                                {cat.label}
                            </button>
                        ))}
                    </div>

                    <div className="flex flex-col">
                        {filteredArticles.length > 0 ? (
                            filteredArticles.map((article, i) => (
                                <ScrollReveal key={article.id} delay={i * 0.05}>
                                    <div className="group block py-12 border-b border-border">
                                        <div className="grid md:grid-cols-[200px_1fr] gap-8">
                                            <div className="flex flex-col gap-2">
                                                <span className="font-mono text-sm text-gray-400">{article.date}</span>
                                                <span className="font-bold text-sm md:text-xs tracking-widest text-primary uppercase">{article.catJp}</span>
                                            </div>

                                            <div>
                                                <h3 className="text-2xl md:text-3xl font-bold leading-tight mb-6">
                                                    {article.title}
                                                </h3>
                                                <p className="text-text-light leading-relaxed line-clamp-2 md:line-clamp-none">
                                                    {article.desc}
                                                </p>
                                            </div>
                                        </div>
                                    </div>
                                </ScrollReveal>
                            ))
                        ) : (
                            <div className="py-20 text-center text-gray-400">
                                このカテゴリーの記事はまだありません。
                            </div>
                        )}
                    </div>

                    {filteredArticles.length > 0 && (
                        <div className="mt-20 text-center">
                            <button className="px-12 py-4 border border-border rounded-full hover:bg-black hover:text-white transition-all duration-300 text-sm font-bold tracking-widest">
                                もっと見る
                            </button>
                        </div>
                    )}
                </div>
            </section>
        </div>
    );
}
