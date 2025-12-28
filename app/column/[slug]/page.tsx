import { notFound } from "next/navigation";
import { PageHeader } from "@/components/ui/PageHeader";
import { ScrollReveal } from "@/components/ui/ScrollReveal";
import { ArrowLeft, Calendar, Tag, Share2 } from "lucide-react";
import Link from "next/link";

// Mock Data
const ARTICLES: Record<string, any> = {
    "article-1": {
        date: "2024.01.05",
        cat: "KNOW-HOW",
        title: "エンジニア採用におけるスカウトメールの開封率を劇的に改善する3つのポイントとは？",
        content: `
            <p>売り手市場が続くエンジニア採用において、スカウトメールの開封率は極めて重要です。多くの企業がテンプレートを使い回す中、候補者は「自分に向けられたメッセージかどうか」を瞬時に判断しています。</p>
            <h3>1. 件名で「Why You」を伝える</h3>
            <p>「【面談確約】エンジニア募集」といった件名は、候補者にとってノイズでしかありません。「なぜ、あなたのGithubを見て連絡したのか」を件名の最初の15文字に凝縮する必要があります。</p>
            <h3>2. 技術スタックへのリスペクト</h3>
            <p>エンジニアは技術へのこだわりを持っています。単に言語名を羅列するのではなく、「あなたが◯◯のリポジトリで書いていたコードの設計思想に共感しました」といった踏み込んだ内容が必要です。</p>
            <blockquote>「テンプレ」ではなく「ラブレター」を書くつもりで。</blockquote>
            <h3>3. 会社の課題を正直に晒す</h3>
            <p>「素晴らしい環境です」とアピールするよりも、「現在、技術的負債の解消に苦戦しており、アーキテクチャの再設計ができるリードエンジニアを求めています」と正直に課題を伝えた方が、優秀なエンジニアの挑戦心をくすぐります。</p>
        `
    },
    // Fallback
    "article-2": { date: "2023.12.20", cat: "TREND", title: "2026年新卒採用予測", content: "<p>...</p>" }
};

export default function ColumnDetailPage({ params }: { params: { slug: string } }) {
    const article = ARTICLES[params.slug] || ARTICLES["article-1"];

    return (
        <div className="bg-white pb-40 text-black">
            <div className="pt-32 pb-12 container-custom max-w-4xl">
                <Link href="/column" className="inline-flex items-center gap-2 text-sm font-bold text-gray-400 hover:text-black mb-12 transition-colors">
                    <ArrowLeft size={16} /> BACK TO LIST
                </Link>

                <div className="flex items-center gap-4 mb-6">
                    <div className="flex items-center gap-2 text-sm font-mono text-gray-500">
                        <Calendar size={14} /> {article.date}
                    </div>
                    <div className="flex items-center gap-2 text-xs font-bold tracking-widest text-primary uppercase bg-primary/5 px-3 py-1 rounded-full">
                        <Tag size={12} /> {article.cat}
                    </div>
                </div>

                <h1 className="text-3xl md:text-5xl font-black leading-tight mb-12">
                    {article.title}
                </h1>
            </div>

            {/* Content Body - Narrow Column */}
            <div className="container-custom max-w-3xl">
                <article
                    className="prose prose-lg prose-headings:font-bold prose-headings:tracking-tight prose-blockquote:border-l-4 prose-blockquote:border-primary prose-blockquote:italic prose-blockquote:bg-gray-50 prose-blockquote:py-4 prose-img:rounded-2xl"
                    dangerouslySetInnerHTML={{ __html: article.content }}
                />

                <div className="mt-20 pt-12 border-t border-border flex justify-between items-center">
                    <span className="font-bold text-sm">SHARE:</span>
                    <div className="flex gap-4">
                        <button className="w-10 h-10 rounded-full bg-gray-100 flex items-center justify-center hover:bg-black hover:text-white transition-colors"><Share2 size={16} /></button>
                    </div>
                </div>
            </div>
        </div>
    );
}
