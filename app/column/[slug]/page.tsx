import { notFound } from "next/navigation";
import { ArrowLeft, Calendar, Tag } from "lucide-react";
import Link from "next/link";
import { Metadata } from "next";

// 記事データ
const ARTICLES: Record<string, {
    date: string;
    cat: string;
    catJp: string;
    title: string;
    desc: string;
    content: string;
}> = {
    "test": {
        date: "2026.01.05",
        cat: "KNOW-HOW",
        catJp: "ノウハウ",
        title: "【テスト記事】コラム機能のサンプル",
        desc: "これはコラム機能のテスト用記事です。実際の記事が公開されるまでの仮コンテンツとなります。",
        content: `
            <p>これはコラム機能のテスト用記事です。</p>
            <h3>見出しサンプル</h3>
            <p>実際の記事が公開されるまでの仮コンテンツとなります。記事の表示やレイアウトの確認用にご利用ください。</p>
            <blockquote>引用ブロックのサンプルです。</blockquote>
            <h3>リストサンプル</h3>
            <ul>
                <li>リスト項目1</li>
                <li>リスト項目2</li>
                <li>リスト項目3</li>
            </ul>
            <p>本番運用時には、この記事を削除または更新してください。</p>
        `
    }
};

export function generateStaticParams() {
    return Object.keys(ARTICLES).map((slug) => ({
        slug,
    }));
}

export function generateMetadata({ params }: { params: { slug: string } }): Metadata {
    const article = ARTICLES[params.slug];
    if (!article) {
        return { title: "記事が見つかりません" };
    }
    return {
        title: `${article.title} | コラム`,
        description: article.desc,
        openGraph: {
            title: `${article.title} | コラム | 株式会社エバンティア`,
            description: article.desc,
            type: "article",
            publishedTime: article.date.replace(/\./g, "-"),
        },
        alternates: {
            canonical: `/column/${params.slug}`,
        },
    };
}

export default function ColumnDetailPage({ params }: { params: { slug: string } }) {
    const article = ARTICLES[params.slug];

    if (!article) {
        notFound();
    }

    return (
        <div className="bg-white pb-40 text-black">
            <div className="pt-32 pb-12 container-custom max-w-4xl">
                <Link href="/column" className="inline-flex items-center gap-2 text-sm font-bold text-gray-400 hover:text-black mb-12 transition-colors">
                    <ArrowLeft size={16} /> コラム一覧に戻る
                </Link>

                <div className="flex items-center gap-4 mb-6">
                    <div className="flex items-center gap-2 text-sm font-mono text-gray-500">
                        <Calendar size={14} /> {article.date}
                    </div>
                    <div className="flex items-center gap-2 text-xs font-bold tracking-widest text-primary uppercase bg-primary/5 px-3 py-1 rounded-full">
                        <Tag size={12} /> {article.catJp}
                    </div>
                </div>

                <h1 className="text-3xl md:text-5xl font-black leading-tight mb-12">
                    {article.title}
                </h1>
            </div>

            {/* Content Body */}
            <div className="container-custom max-w-3xl">
                <article
                    className="prose prose-lg max-w-none prose-headings:font-bold prose-headings:tracking-tight prose-blockquote:border-l-4 prose-blockquote:border-primary prose-blockquote:italic prose-blockquote:bg-gray-50 prose-blockquote:py-4 prose-blockquote:px-6 prose-img:rounded-2xl prose-p:text-gray-600 prose-li:text-gray-600"
                    dangerouslySetInnerHTML={{ __html: article.content }}
                />

                <div className="mt-20 pt-12 border-t border-border">
                    <Link
                        href="/column"
                        className="inline-flex items-center gap-2 text-sm font-bold text-gray-400 hover:text-black transition-colors"
                    >
                        <ArrowLeft size={16} /> コラム一覧に戻る
                    </Link>
                </div>
            </div>
        </div>
    );
}
