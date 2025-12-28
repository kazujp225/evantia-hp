import { PageHeader } from "@/components/ui/PageHeader";
import { ScrollReveal } from "@/components/ui/ScrollReveal";
import { Users, TrendingUp, Building2, BarChart3, Megaphone, Settings, ArrowRight, ArrowUpRight } from "lucide-react";
import Link from "next/link";

export const metadata = {
    title: "Service | 事業内容",
    description: "アズライトの提供するサービス（採用コンサルティング、RPO、スカウト代行）についてご紹介します。",
};

const SERVICES = [
    {
        id: "01",
        title: "Recruitment Consulting",
        subtitle: "採用コンサルティング",
        description: "事業戦略に基づいた採用戦略の立案から、求める人物像の策定、選考プロセスの設計まで、貴社の採用力を底上げする本質的な支援を行います。",
        href: "/service/consulting",
        image: "https://images.unsplash.com/photo-1552664730-d307ca884978?auto=format&fit=crop&q=80&w=1200"
    },
    {
        id: "02",
        title: "RPO",
        subtitle: "採用代行",
        description: "日程調整、応募者対応、スカウト配信など、膨大なオペレーション業務をプロフェッショナルが代行。人事担当者がコア業務に集中できる環境を創出します。",
        href: "/service/rpo",
        image: "https://images.unsplash.com/photo-1573497620053-ea5300f94f21?auto=format&fit=crop&q=80&w=1200"
    },
    {
        id: "03",
        title: "Direct Recruiting",
        subtitle: "スカウト代行",
        description: "BizReach, Green, Wantedlyなど、主要媒体の運用を熟知したプロが、ターゲット人材への効果的なアプローチ（文面作成・送信・分析）を実行します。",
        href: "/service/scout",
        image: "https://images.unsplash.com/photo-1556761175-5973dc0f32e7?auto=format&fit=crop&q=80&w=1200"
    },
    {
        id: "04",
        title: "Creative / Branding",
        subtitle: "採用広報 / クリエイティブ",
        description: "採用ピッチ資料、採用サイト、インタビュー記事の制作など、候補者の志望度を高めるためのクリエイティブを一貫して制作します。",
        href: "/service/creative",
        image: "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?auto=format&fit=crop&q=80&w=1200"
    }
];

export default function ServicePage() {
    return (
        <div className="bg-bg-alt pb-40">
            <PageHeader title="SERVICE" subtitle="事業内容" />

            {/* Intro */}
            <section className="py-24">
                <div className="container-custom max-w-4xl text-center">
                    <ScrollReveal>
                        <h2 className="text-3xl md:text-5xl font-black mb-8 leading-tight">
                            Total Recruitment<br />Solution.
                        </h2>
                        <p className="text-text-light text-lg font-medium leading-loose">
                            アズライトは、採用における「戦略」「実務」「クリエイティブ」のすべてを網羅。<br className="hidden md:block" />
                            部分的な代行ではなく、クライアントの採用チームの一員として<br className="hidden md:block" />
                            事業成長を見据えたトータルソリューションを提供します。
                        </p>
                    </ScrollReveal>
                </div>
            </section>

            {/* Grand Service List */}
            <section className="container-custom flex flex-col gap-32">
                {SERVICES.map((service, index) => (
                    <ScrollReveal key={service.id} className="group">
                        <Link href={service.href} className="grid md:grid-cols-2 gap-12 items-center">
                            {/* Image Side */}
                            <div className={`relative overflow-hidden rounded-sm aspect-[4/3] ${index % 2 === 1 ? 'md:order-2' : ''}`}>
                                <div
                                    className="absolute inset-0 bg-cover bg-center transition-transform duration-700 group-hover:scale-110"
                                    style={{ backgroundImage: `url(${service.image})` }}
                                >
                                    <div className="absolute inset-0 bg-black/20 group-hover:bg-black/0 transition-colors duration-500" />
                                </div>
                            </div>

                            {/* Text Side */}
                            <div className={`${index % 2 === 1 ? 'md:order-1 md:text-right' : ''}`}>
                                <span className="text-6xl font-black text-gray-200 block mb-6">{service.id}</span>
                                <h3 className="text-4xl font-bold mb-4 group-hover:text-primary transition-colors">{service.title}</h3>
                                <p className="text-primary font-bold tracking-widest text-sm mb-8">{service.subtitle}</p>
                                <p className="text-text-light leading-loose font-medium mb-8">
                                    {service.description}
                                </p>

                                <div className={`inline-flex items-center gap-2 text-primary font-bold border-b border-primary pb-1 group-hover:gap-4 transition-all ${index % 2 === 1 ? 'flex-row-reverse' : ''}`}>
                                    View Details <ArrowUpRight size={20} />
                                </div>
                            </div>
                        </Link>
                    </ScrollReveal>
                ))}
            </section>

            {/* Process Link */}
            <section className="mt-40 border-t border-border pt-24 text-center">
                <ScrollReveal>
                    <h2 className="text-2xl font-bold mb-8">導入までの流れ</h2>
                    <p className="mb-12 text-text-light">お問い合わせからプロジェクト開始までの標準プロセス</p>
                    <div className="grid md:grid-cols-4 gap-4 container-custom max-w-5xl">
                        {['お問い合わせ', 'ヒアリング', 'ご提案', '支援開始'].map((step, i) => (
                            <div key={i} className="bg-white p-6 rounded-lg border border-border shadow-sm">
                                <div className="text-primary font-bold mb-2">STEP 0{i + 1}</div>
                                <div className="font-bold">{step}</div>
                            </div>
                        ))}
                    </div>
                </ScrollReveal>
            </section>
        </div>
    );
}
