import { notFound } from "next/navigation";
import { PageHeader } from "@/components/ui/PageHeader";
import { ScrollReveal } from "@/components/ui/ScrollReveal";
import { ArrowLeft, CheckCircle2, TrendingUp, Users, Clock } from "lucide-react";
import Link from "next/link";
import { Metadata } from "next";

// Mock Data
const CASES: Record<string, any> = {
    "project-0": {
        industry: "IT・通信",
        company: "株式会社テックフロンティア",
        result_main: "エンジニア採用単価 30%削減",
        result_sub: "採用数 5名達成 / 辞退率 0%",
        problem: "知名度が低く、大手企業との競合で負けてしまう。スカウトの返信率も1%台と低迷していた。",
        solution: "「技術力の高さ」ではなく「技術経営のビジョン」を訴求するストーリーに転換。エンジニア出身の社長の想いを言語化したピッチ資料を作成。",
        metrics: [
            { label: "Cost Per Hire", value: "30% ↓", icon: TrendingUp },
            { label: "Hired", value: "5 Persons", icon: Users },
            { label: "Time to Hire", value: "1.5 Months", icon: Clock },
        ]
    },
    // Fallback
    "project-1": { industry: "メーカー", company: "グローバルマニュファクチャリング", result_main: "母集団形成 200% UP", result_sub: "リーダー候補3名採用", problem: "...", solution: "...", metrics: [] }
};

export function generateStaticParams() {
    return Object.keys(CASES).map((slug) => ({
        slug,
    }));
}

export function generateMetadata({ params }: { params: { slug: string } }): Metadata {
    const project = CASES[params.slug] || CASES["project-0"];
    return {
        title: `${project.result_main} | 導入事例`,
        description: `${project.company}様の採用課題を解決。${project.result_sub}。採用コンサルティング・RPO導入事例。`,
        openGraph: {
            title: `${project.result_main} | 導入事例 | 株式会社エバンティア`,
            description: `${project.company}様の採用課題を解決。${project.result_sub}`,
            type: "article",
        },
        alternates: {
            canonical: `/case/${params.slug}`,
        },
    };
}

export default function CaseDetailPage({ params }: { params: { slug: string } }) {
    const project = CASES[params.slug] || CASES["project-0"];

    return (
        <div className="bg-white pb-40 text-black">
            <div className="pt-32 pb-20 container-custom max-w-5xl">
                <Link href="/case" className="inline-flex items-center gap-2 text-sm font-bold text-gray-400 hover:text-black mb-12 transition-colors">
                    <ArrowLeft size={16} /> CASE STUDY TOP
                </Link>

                <div className="mb-4 flex items-center gap-4">
                    <span className="font-bold text-xs tracking-widest text-primary uppercase border border-primary px-3 py-1 rounded-full">
                        {project.industry}
                    </span>
                    <span className="font-bold text-gray-500">{project.company}</span>
                </div>

                <h1 className="text-4xl md:text-6xl font-black leading-tight mb-8">
                    {project.result_main}
                </h1>
                <p className="text-xl md:text-2xl font-bold text-gray-500 mb-16 border-l-4 border-black pl-6">
                    {project.result_sub}
                </p>

                {/* Metrics Grid */}
                <div className="grid grid-cols-3 gap-8 mb-20">
                    {project.metrics.map((m: any, i: number) => (
                        <div key={i} className="bg-gray-50 p-8 rounded-2xl text-center">
                            <m.icon className="mx-auto mb-4 text-primary" size={32} />
                            <div className="text-3xl md:text-4xl font-black mb-2">{m.value}</div>
                            <div className="text-xs font-bold text-gray-400 tracking-widest uppercase">{m.label}</div>
                        </div>
                    ))}
                </div>

                <div className="grid md:grid-cols-2 gap-16 md:gap-24 leading-loose text-lg font-medium">
                    <div>
                        <h3 className="text-xl font-black mb-6 flex items-center gap-3">
                            <span className="bg-black text-white w-8 h-8 rounded-full flex items-center justify-center text-sm">P</span>
                            PROBLEM
                        </h3>
                        <p className="text-text-light">{project.problem}</p>
                    </div>
                    <div>
                        <h3 className="text-xl font-black mb-6 flex items-center gap-3">
                            <span className="bg-primary text-white w-8 h-8 rounded-full flex items-center justify-center text-sm">S</span>
                            SOLUTION
                        </h3>
                        <p className="text-text-main">{project.solution}</p>
                    </div>
                </div>
            </div>

            <div className="bg-gray-100 py-20 text-center">
                <p className="font-bold mb-8">似た課題をお持ちですか？</p>
                <Link href="/contact" className="inline-block px-12 py-4 bg-black text-white font-bold rounded-full hover:scale-105 transition-transform">
                    無料相談をする
                </Link>
            </div>
        </div>
    );
}
