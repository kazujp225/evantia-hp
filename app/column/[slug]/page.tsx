import { notFound } from "next/navigation";
import { PageHeader } from "@/components/ui/PageHeader";
import { ScrollReveal } from "@/components/ui/ScrollReveal";
import { ArrowLeft, Calendar, Tag, Share2 } from "lucide-react";
import Link from "next/link";

// テスト用データ
const ARTICLES: Record<string, any> = {
    "test": {
        date: "2026.01.05",
        cat: "KNOW-HOW",
        title: "【テスト記事】コラム機能のサンプル",
        content: `
            <p>これはコラム機能のテスト用記事です。</p>
            <h3>見出しサンプル</h3>
            <p>実際の記事が公開されるまでの仮コンテンツとなります。記事の表示やレイアウトの確認用にご利用ください。</p>
            <blockquote>引用ブロックのサンプルです。</blockquote>
            <p>本番運用時には、この記事を削除または更新してください。</p>
        `
    }
};

export default function ColumnDetailPage({ params }: { params: { slug: string } }) {
    const article = ARTICLES[params.slug] || ARTICLES["test"];

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
