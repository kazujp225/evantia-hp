"use client";

import { useState } from "react";
import { PageHeader } from "@/components/ui/PageHeader";
import { ScrollReveal } from "@/components/ui/ScrollReveal";
import { ArrowUpRight } from "lucide-react";

const CASES = [
    {
        id: "01",
        industry: "IT・通信",
        industryKey: "IT",
        company: "株式会社テックフロンティア",
        result: "エンジニア採用単価 30%削減、採用数 5名達成",
        desc: "競合他社とのバッティングで内定辞退が続いていたが、ストーリー設計の見直しにより承諾率が大幅改善。",
        tags: ["採用コンサルティング", "ダイレクトリクルーティング"]
    },
    {
        id: "02",
        industry: "メーカー",
        industryKey: "メーカー",
        company: "グローバルマニュファクチャリング株式会社",
        result: "母集団形成数 200%UP、若手リーダー候補3名採用",
        desc: "知名度の低さが課題だったが、採用ブランディングの刷新とスカウトのパーソナライズ化でターゲット層へのリーチに成功。",
        tags: ["RPO", "ブランディング"]
    },
    {
        id: "03",
        industry: "サービス",
        industryKey: "サービス",
        company: "ライフスタイルデザイン株式会社",
        result: "選考リードタイム 50%短縮、採用事務工数 80時間/月 削減",
        desc: "属人的なオペレーションをシステム化。候補者体験(CX)の向上により、選考辞退率の低下も実現。",
        tags: ["RPO", "ツール導入"]
    },
    {
        id: "04",
        industry: "人材・教育",
        industryKey: "人材",
        company: "フューチャーエデュケーション",
        result: "未経験若手層 10名採用、定着率 95%維持",
        desc: "採用要件の再定義とオンボーディングプロセスの設計まで一貫して支援。",
        tags: ["採用コンサルティング", "組織開発"]
    }
];

const CATEGORIES = [
    { key: "all", label: "すべて" },
    { key: "IT", label: "IT・通信" },
    { key: "メーカー", label: "メーカー" },
    { key: "サービス", label: "サービス" },
    { key: "人材", label: "人材・教育" }
];

export default function CasePage() {
    const [activeCategory, setActiveCategory] = useState("all");

    const filteredCases = activeCategory === "all"
        ? CASES
        : CASES.filter(item => item.industryKey === activeCategory);

    return (
        <div className="bg-white text-black pb-40">
            <PageHeader title="CASE STUDY" subtitle="導入事例" />

            <section className="py-8 md:py-16">
                <div className="container-custom max-w-6xl">
                    {/* Filter - Clickable */}
                    <div className="flex gap-3 md:gap-4 mb-12 md:mb-24 overflow-x-auto pb-4 -mx-6 px-6 md:mx-0 md:px-0 md:justify-end">
                        {CATEGORIES.map((cat) => (
                            <button
                                key={cat.key}
                                onClick={() => setActiveCategory(cat.key)}
                                className={`whitespace-nowrap px-4 py-2 rounded-full text-base md:text-sm font-bold transition-colors ${
                                    activeCategory === cat.key
                                        ? 'bg-black text-white'
                                        : 'bg-gray-100 text-gray-500 hover:bg-gray-200'
                                }`}
                            >
                                {cat.label}
                            </button>
                        ))}
                    </div>

                    {/* Case List */}
                    <div className="flex flex-col gap-12 md:gap-24">
                        {filteredCases.length > 0 ? (
                            filteredCases.map((item, i) => (
                                <ScrollReveal key={item.id} delay={i * 0.1}>
                                    <div className="block bg-gray-50 rounded-2xl p-6 md:p-10">
                                        <div className="flex items-center gap-3 mb-4">
                                            <span className="px-3 py-1 bg-primary/10 text-primary text-sm md:text-xs font-bold rounded-full">{item.industry}</span>
                                            <span className="text-base md:text-sm text-gray-500 font-medium">{item.company}</span>
                                        </div>

                                        <h2 className="text-2xl md:text-4xl font-black leading-tight mb-4">
                                            {item.result}
                                        </h2>

                                        <p className="text-base text-gray-600 leading-relaxed mb-6">
                                            {item.desc}
                                        </p>

                                        <div className="flex flex-wrap gap-2">
                                            {item.tags.map((tag, t) => (
                                                <span key={t} className="px-3 py-1 bg-white border border-gray-200 rounded-full text-sm md:text-xs font-bold text-gray-500">
                                                    {tag}
                                                </span>
                                            ))}
                                        </div>
                                    </div>
                                </ScrollReveal>
                            ))
                        ) : (
                            <div className="py-20 text-center text-gray-400">
                                この業種の事例はまだありません。
                            </div>
                        )}
                    </div>
                </div>
            </section>
        </div>
    );
}
