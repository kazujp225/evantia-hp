import { PageHeader } from "@/components/ui/PageHeader";
import { ScrollReveal } from "@/components/ui/ScrollReveal";
import { ArrowRight, ArrowUpRight } from "lucide-react";
import Link from "next/link";

export const metadata = {
    title: "Case | 導入事例",
    description: "アズライトの導入事例をご紹介します。",
};

const CASES = [
    {
        id: "01",
        industry: "IT・通信",
        company: "株式会社テックフロンティア",
        result: "エンジニア採用単価 30%削減、採用数 5名達成",
        desc: "競合他社とのバッティングで内定辞退が続いていたが、ストーリー設計の見直しにより承諾率が大幅改善。",
        tags: ["Recruitment Consultant", "Direct Recruiting"]
    },
    {
        id: "02",
        industry: "メーカー",
        company: "グローバルマニュファクチャリング株式会社",
        result: "母集団形成数 200%UP、若手リーダー候補3名採用",
        desc: "知名度の低さが課題だったが、採用ブランディングの刷新とスカウトのパーソナライズ化でターゲット層へのリーチに成功。",
        tags: ["RPO", "Branding"]
    },
    {
        id: "03",
        industry: "サービス",
        company: "ライフスタイルデザイン株式会社",
        result: "選考リードタイム 50%短縮、採用事務工数 80時間/月 削減",
        desc: "属人的なオペレーションをシステム化。候補者体験(CX)の向上により、選考辞退率の低下も実現。",
        tags: ["RPO", "Tool Implementation"]
    },
    {
        id: "04",
        industry: "人材・教育",
        company: "フューチャーエデュケーション",
        result: "未経験若手層 10名採用、定着率 95%維持",
        desc: "採用要件の再定義とオンボーディングプロセスの設計まで一貫して支援。",
        tags: ["Recruitment Consultant", "Organization Dev"]
    }
];

export default function CasePage() {
    return (
        <div className="bg-white text-black pb-40">
            <PageHeader title="CASE STUDY" subtitle="導入事例" />

            <section className="py-24">
                <div className="container-custom max-w-6xl">
                    {/* Filter */}
                    <ScrollReveal className="flex justify-end gap-6 mb-24 text-sm font-bold tracking-widest">
                        {['ALL', 'IT', 'MAKER', 'SERVICE', 'HR'].map((cat, i) => (
                            <button key={i} className={`uppercase hover:text-primary transition-colors ${i === 0 ? 'text-black border-b-2 border-primary' : 'text-gray-400'}`}>
                                {cat}
                            </button>
                        ))}
                    </ScrollReveal>

                    {/* Case List - Result First */}
                    <div className="flex flex-col gap-16 md:gap-32">
                        {CASES.map((item, i) => (
                            <ScrollReveal key={i} delay={i * 0.1}>
                                <Link href={`/case/project-${i}`} className="group relative block">
                                    {/* Number Background */}
                                    <span className="absolute -top-12 -left-12 text-[120px] md:text-[200px] font-black text-gray-100 -z-10 transition-colors group-hover:text-primary/10 select-none">
                                        {item.id}
                                    </span>

                                    <div className="border-t-2 border-black pt-8 group-hover:border-primary transition-colors max-w-4xl ml-auto">
                                        <div className="flex flex-col md:flex-row md:items-baseline gap-4 md:gap-8 mb-4">
                                            <span className="font-bold text-xs tracking-widest text-primary uppercase">{item.industry}</span>
                                            <h3 className="font-bold text-gray-500">{item.company}</h3>
                                        </div>

                                        <h2 className="text-3xl md:text-5xl font-black leading-tight mb-8 group-hover:text-primary transition-colors">
                                            {item.result}
                                        </h2>

                                        <p className="text-lg text-text-light leading-loose mb-8 font-medium max-w-2xl">
                                            {item.desc}
                                        </p>

                                        <div className="flex flex-wrap gap-3 mb-8">
                                            {item.tags.map((tag, t) => (
                                                <span key={t} className="px-4 py-1.5 border border-gray-200 rounded-full text-xs font-bold text-gray-500">
                                                    {tag}
                                                </span>
                                            ))}
                                        </div>

                                        <div className="flex items-center gap-2 font-bold text-sm opacity-0 group-hover:opacity-100 transition-all duration-300 transform translate-y-4 group-hover:translate-y-0 text-primary">
                                            View Project <ArrowUpRight size={18} />
                                        </div>
                                    </div>
                                </Link>
                            </ScrollReveal>
                        ))}
                    </div>
                </div>
            </section>
        </div>
    );
}
