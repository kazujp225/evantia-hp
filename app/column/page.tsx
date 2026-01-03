"use client";

import { useState } from "react";
import { PageHeader } from "@/components/ui/PageHeader";
import { ScrollReveal } from "@/components/ui/ScrollReveal";
import { ArrowRight } from "lucide-react";
import Link from "next/link";

const ARTICLES = [
    {
        id: 1,
        date: "2024.01.05",
        cat: "KNOW-HOW",
        catJp: "ノウハウ",
        title: "エンジニア採用におけるスカウトメールの開封率を改善する3つのポイント",
        desc: "売り手市場が続くエンジニア採用。従来のテンプレート通りのスカウトメールでは効果が出にくくなっています。開封率30%超えを実現した実例を元に解説します。"
    },
    {
        id: 2,
        date: "2023.12.20",
        cat: "TREND",
        catJp: "トレンド",
        title: "2026年新卒採用予測：早期化する市場で成果を出すためのロードマップ",
        desc: "インターンの在り方、早期選考の是非。変化するルールの中で、企業が取るべきスタンスと具体的なアクションプランについて。"
    },
    {
        id: 3,
        date: "2023.12.10",
        cat: "INTERVIEW",
        catJp: "インタビュー",
        title: "「採用広報」はなぜ失敗するのか？PV数だけを追わない本質的なブランディング手法",
        desc: "多くの企業が陥る「発信すること」が目的化する問題点。候補者の心を動かし、応募につなげるためのストーリー設計について。"
    },
    {
        id: 4,
        date: "2023.11.28",
        cat: "KNOW-HOW",
        catJp: "ノウハウ",
        title: "面接官トレーニングの重要性：見極めと魅力付けを両立する技術",
        desc: "優秀な人材ほど、面接官を見ています。現場社員を効果的なリクルーターに育成するためのトレーニングプログラムの一部を公開。"
    },
    {
        id: 5,
        date: "2023.11.15",
        cat: "NEWS",
        catJp: "ニュース",
        title: "株式会社エバンティア、シリーズA調達完了のお知らせ",
        desc: "事業拡大に伴い、更なるプロダクト開発と組織強化への投資を実施いたします。"
    },
    {
        id: 6,
        date: "2023.11.01",
        cat: "CULTURE",
        catJp: "カルチャー",
        title: "成長を文化にするために。私たちが大切にしている7つの行動指針",
        desc: "組織が拡大しても維持できる、持続的なカルチャーはいかにして作られるのか。"
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
                                className={`text-base md:text-sm font-bold tracking-widest transition-colors whitespace-nowrap py-2 ${
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
                                                <span className="font-mono text-base md:text-sm text-gray-400">{article.date}</span>
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
                            <button className="px-12 py-4 border border-border rounded-full hover:bg-black hover:text-white transition-all duration-300 text-base md:text-sm font-bold tracking-widest">
                                もっと見る
                            </button>
                        </div>
                    )}
                </div>
            </section>
        </div>
    );
}
