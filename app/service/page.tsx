import { PageHeader } from "@/components/ui/PageHeader";
import { ScrollReveal } from "@/components/ui/ScrollReveal";
import { ArrowRight, Check, Target, Users, Zap, BarChart3, PenTool, Search } from "lucide-react";
import Link from "next/link";
import Image from "next/image";

export const metadata = {
    title: "Service | 事業内容",
    description: "アズライトのサービス一覧です。",
};

// Updated to match service-data.ts slugs
const SERVICES = [
    {
        id: 'consulting',
        title: 'Recruitment Consulting',
        jp: '採用戦略コンサルティング',
        desc: '「採れない」を「採れる」へ。経営戦略と同期した採用戦略の立案から、実行支援、内製化までを一気通貫でサポートします。',
        icon: Target,
        image: 'https://images.unsplash.com/photo-1552664730-d307ca884978?auto=format&fit=crop&q=80&w=800'
    },
    {
        id: 'rpo',
        title: 'RPO (Process Outsourcing)',
        jp: '採用実務アウトソーシング',
        desc: 'ノンコア業務をプロに任せ、貴社は「見極め」と「魅力付け」に集中を。工数削減だけでなく、歩留まり向上も同時に実現します。',
        icon: Zap,
        image: 'https://images.unsplash.com/photo-1573497620053-ea5300f94f21?auto=format&fit=crop&q=80&w=800'
    },
    {
        id: 'scout',
        title: 'Direct Recruiting',
        jp: 'ダイレクトリクルーティング支援',
        desc: '待っているだけでは出会えない優秀層へ、最適なメッセージを。媒体選定から文面作成、送信代行までをフルサポート。',
        icon: Search,
        image: 'https://images.unsplash.com/photo-1556761175-5973dc0f32e7?auto=format&fit=crop&q=80&w=800'
    },
    {
        id: 'creative',
        title: 'Creative / Branding',
        jp: '採用クリエイティブ / ブランディング',
        desc: '「伝わる」デザインと言葉で、企業の魅力を最大化。採用サイト、ピッチ資料、動画など、あらゆるツールを制作します。',
        icon: PenTool,
        image: 'https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?auto=format&fit=crop&q=80&w=800'
    },
];

export default function ServicePage() {
    return (
        <div className="bg-bg-base text-text-main pb-40">
            <PageHeader title="SERVICE" subtitle="事業内容" />

            {/* Intro */}
            <section className="py-20 md:py-32 bg-white">
                <div className="container-custom max-w-4xl text-center">
                    <ScrollReveal>
                        <h2 className="text-3xl md:text-5xl font-black leading-tight mb-8">
                            Total Recruitment<br />
                            <span className="text-primary">Solution.</span>
                        </h2>
                        <p className="text-lg text-text-light leading-relaxed font-medium">
                            課題は企業ごとに異なります。だからこそ、決まりきったパッケージは提案しません。<br />
                            戦略から実務、クリエイティブまで。あらゆる手法を組み合わせ、<br className="hidden md:inline" />
                            貴社だけの「勝ちパターン」を構築します。
                        </p>
                    </ScrollReveal>
                </div>
            </section>

            {/* Grand List */}
            <div className="flex flex-col">
                {SERVICES.map((service, i) => (
                    <section key={service.id} className={`py-20 md:py-32 ${i % 2 === 0 ? 'bg-bg-alt' : 'bg-white'}`}>
                        <div className="container-custom">
                            <ScrollReveal className={`flex flex-col md:flex-row gap-12 md:gap-24 items-center ${i % 2 === 1 ? 'md:flex-row-reverse' : ''}`}>

                                {/* Image Block */}
                                <div className="w-full md:w-1/2 aspect-[4/3] relative rounded-3xl overflow-hidden shadow-2xl group">
                                    <div className="absolute inset-0 bg-primary/20 group-hover:bg-transparent transition-colors duration-500 z-10" />
                                    <Image
                                        src={service.image}
                                        alt={service.title}
                                        fill
                                        className="object-cover group-hover:scale-105 transition-transform duration-700"
                                    />
                                </div>

                                {/* Text Block */}
                                <div className="w-full md:w-1/2">
                                    <div className="flex items-center gap-4 mb-6">
                                        <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center text-primary">
                                            <service.icon size={24} />
                                        </div>
                                        <span className="font-bold text-sm tracking-widest text-primary uppercase">0{i + 1}</span>
                                    </div>

                                    <h2 className="text-3xl md:text-5xl font-black leading-tight mb-4">
                                        {service.title}
                                    </h2>
                                    <p className="text-lg font-bold text-gray-400 mb-8">{service.jp}</p>

                                    <p className="text-text-light leading-loose mb-10 text-lg">
                                        {service.desc}
                                    </p>

                                    <Link
                                        href={`/service/${service.id}`}
                                        className="inline-flex items-center gap-2 text-lg font-bold hover:gap-4 transition-all duration-300 relative group"
                                    >
                                        <span className="relative z-10">VIEW DETAILS</span>
                                        <ArrowRight size={20} className="text-primary" />
                                        <span className="absolute bottom-0 left-0 w-0 h-2 bg-primary/20 transition-all duration-300 group-hover:w-full z-0" />
                                    </Link>
                                </div>

                            </ScrollReveal>
                        </div>
                    </section>
                ))}
            </div>
        </div>
    );
}
