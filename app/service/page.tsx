import Link from "next/link";
import Image from "next/image";
import { ArrowRight, Target, Layers, Trophy } from "lucide-react";
import { ScrollReveal } from "@/components/ui/ScrollReveal";
import { FAQJsonLd } from "@/components/seo/JsonLd";

import { Metadata } from "next";

export const metadata: Metadata = {
    title: "事業内容・サービス",
    description: "採用コンサルティング、RPO（採用代行）、スカウト代行、採用ブランディング。戦略設計から実行、内製化支援まで一貫してサポート。貴社の採用力を強化し、自走体制の構築を支援します。",
    openGraph: {
        title: "事業内容・サービス | 株式会社エバンティア",
        description: "採用コンサルティング、RPO（採用代行）、スカウト代行。戦略設計から実行、内製化支援まで一貫サポート。",
    },
    alternates: {
        canonical: "/service",
    },
};

export default function ServicePage() {
    const features = [
        {
            icon: Target,
            num: "01",
            title: "ストーリー設計型の戦略構築",
            desc: "候補者の志向と貴社のビジョンを重ね合わせ、「なぜ貴社なのか」を明確に伝える採用戦略を構築します。競合他社との差別化を図り、候補者の心に響くアプローチをご提案します。"
        },
        {
            icon: Layers,
            num: "02",
            title: "戦略立案から実務代行までの幅広いソリューション",
            desc: "集客媒体、イベント、ツール等の施策から、戦略立案、実行までの一気通貫サービスをご提供しています。貴社の現状とビジョン、市場動向に合わせた柔軟な支援が可能です。"
        },
        {
            icon: Trophy,
            num: "03",
            title: "実践的なノウハウを資産として残す「自走体制」の構築",
            desc: "私たちの目標は、貴社が自立して採用活動を行える「自走体制」の確立です。多くの成功事例から導き出した再現性の高い手法を、貴社の組織文化に合わせて導入し、持続的に成果を出せる採用チームづくりを支援します。"
        }
    ];

    const services = [
        {
            num: "01",
            title: "採用戦略の構築",
            desc: "戦略立案の上流から実行改善の下流まで、自走を見据えて採用のブランド構築とPDCAサイクルの仕組みづくりを実施"
        },
        {
            num: "02",
            title: "母集団形成支援",
            desc: "ナビサイト、スカウト、イベント、幅広い集客サービスから最適なサービスを提案"
        },
        {
            num: "03",
            title: "採用実務アウトソーシング",
            desc: "実際に候補者と接する説明会、面接、面談を代行。ただ結果を出すだけではなく、マニュアル作りをゴールとしています"
        },
        {
            num: "04",
            title: "採用事務アウトソーシング",
            desc: "戦略コンサルタントと専任チームが、集客サービスの運用やATSの構築等を成果最大化を軸に代行いたします"
        },
        {
            num: "05",
            title: "採用AIツールのご提供",
            desc: "専用のAIスカウトサービス等を用いて、費用を抑えつつ成果を最大化するご支援を行います"
        },
        {
            num: "06",
            title: "採用ツールの制作",
            desc: "ピッチ資料、HP制作等採用のブランディングツールの構築を実施いたします"
        }
    ];

    const faqItems = [
        {
            question: "採用コンサルティングとRPO（採用代行）の違いは何ですか？",
            answer: "採用コンサルティングは戦略立案やプロセス設計など上流工程を中心に支援します。RPO（採用代行）は実際の採用業務（スカウト送信、日程調整、面接実施など）を代行するサービスです。エバンティアでは両方を一貫してご提供できます。"
        },
        {
            question: "導入までどのくらいの期間がかかりますか？",
            answer: "通常、初回ヒアリングから2〜4週間程度で本格稼働が可能です。緊急の採用ニーズがある場合は、最短1週間での立ち上げも対応可能です。"
        },
        {
            question: "どのような業界・職種の採用に対応していますか？",
            answer: "IT・通信、メーカー、サービス業など幅広い業界に対応しています。エンジニア、営業、管理部門など職種も問いません。特にハイクラス人材やポテンシャル採用に強みがあります。"
        },
        {
            question: "料金体系はどうなっていますか？",
            answer: "月額固定型、成果報酬型、ハイブリッド型など、貴社の状況やニーズに合わせて柔軟にご提案します。まずは無料相談でお気軽にご相談ください。"
        }
    ];

    return (
        <main className="bg-background min-h-screen">
            <FAQJsonLd items={faqItems} />
            {/* Hero Section */}
            <section className="relative min-h-[60vh] md:min-h-[70vh] w-full overflow-hidden">
                <Image
                    src="/assets/images/service-hero.jpg"
                    alt="採用コンサルティング - チームミーティング"
                    fill
                    className="object-cover"
                    priority
                />
                <div className="absolute inset-0 bg-gradient-to-br from-primary/80 to-black/70" />
                <div className="absolute bottom-0 left-0 w-full px-6 pb-16 md:pb-20">
                    <div className="max-w-screen-xl mx-auto">
                        <ScrollReveal>
                            <span className="text-xs font-bold tracking-[0.3em] text-white/60 uppercase mb-6 block">Recruitment Consulting</span>
                            <h1 className="text-3xl md:text-5xl lg:text-6xl font-black leading-[1.15] max-w-4xl text-white mb-6">
                                一時的な成功より、<br />
                                持続的な「自走力」を。
                            </h1>
                            <p className="text-lg md:text-xl text-white/80 font-medium max-w-2xl">
                                本質的な課題解決で、貴社の採用力を強化します。
                            </p>
                        </ScrollReveal>
                    </div>
                </div>
            </section>

            {/* Introduction */}
            <section className="py-20 md:py-32 px-6 border-b border-border/40">
                <div className="max-w-screen-xl mx-auto">
                    <ScrollReveal>
                        <div className="max-w-4xl">
                            <p className="text-xl md:text-2xl font-bold text-muted-foreground leading-relaxed">
                                採用支援の豊富な経験を持つメンバーで構成された少数精鋭チームです。
                                確かな戦略ノウハウと、少数精鋭ならではの機動力、「顔の見えるサービス」を強みに、
                                貴社の自走体制構築を最終目標として採用課題の解決を支援します。
                            </p>
                        </div>
                    </ScrollReveal>
                </div>
            </section>

            {/* Features Section - 特徴3選 */}
            <section className="py-20 md:py-32 px-6 bg-zinc-50">
                <div className="max-w-screen-xl mx-auto">
                    <ScrollReveal>
                        <div className="mb-16 md:mb-24">
                            <span className="text-xs font-bold tracking-[0.3em] text-primary uppercase mb-4 block">Our Strengths</span>
                            <h2 className="text-3xl md:text-5xl font-black tracking-tight">
                                エバンティアの特徴
                            </h2>
                        </div>
                    </ScrollReveal>

                    <div className="grid grid-cols-1 gap-0 border-t border-black/10">
                        {features.map((feature, i) => (
                            <ScrollReveal key={i} delay={i * 0.1}>
                                <div className="group grid grid-cols-1 lg:grid-cols-12 gap-8 items-start p-6 md:p-12 border-b border-black/10 hover:bg-[var(--color-brand-accent)]/5 transition-colors duration-500">
                                    <div className="lg:col-span-1">
                                        <span className="text-4xl md:text-5xl font-black text-[var(--color-primary)]/20 group-hover:text-[var(--color-brand-accent)] transition-colors">{feature.num}</span>
                                    </div>
                                    <div className="lg:col-span-11">
                                        <div className="flex items-center gap-4 mb-6">
                                            <feature.icon className="w-6 h-6 text-[var(--color-brand-accent)]" />
                                            <h3 className="text-xl md:text-2xl font-bold group-hover:text-[var(--color-primary)] transition-colors">{feature.title}</h3>
                                        </div>
                                        <p className="text-muted-foreground font-medium leading-relaxed text-base md:text-lg group-hover:text-foreground/80">
                                            {feature.desc}
                                        </p>
                                    </div>
                                </div>
                            </ScrollReveal>
                        ))}
                    </div>
                </div>
            </section>

            {/* Services Section - 提供サービス6つ */}
            <section className="py-20 md:py-32 px-6">
                <div className="max-w-screen-xl mx-auto">
                    <ScrollReveal>
                        <div className="mb-16 md:mb-24">
                            <span className="text-xs font-bold tracking-[0.3em] text-primary uppercase mb-4 block">Professional Services</span>
                            <h2 className="text-3xl md:text-5xl font-black tracking-tight">
                                提供サービス
                            </h2>
                        </div>
                    </ScrollReveal>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12">
                        {services.map((service, i) => (
                            <ScrollReveal key={i} delay={i * 0.05}>
                                <div className="group p-6 md:p-8 border border-border/40 hover:border-primary/40 hover:bg-zinc-50/50 transition-all h-full">
                                    <div className="flex items-start gap-6">
                                        <span className="text-3xl font-black text-primary/30 group-hover:text-primary/50 transition-colors">{service.num}</span>
                                        <div>
                                            <h3 className="text-xl font-bold mb-4 group-hover:text-primary transition-colors">{service.title}</h3>
                                            <p className="text-muted-foreground font-medium leading-relaxed">
                                                {service.desc}
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            </ScrollReveal>
                        ))}
                    </div>
                </div>
            </section>

            {/* CTA Section */}
            <section className="py-20 md:py-32 px-6 bg-primary text-white relative overflow-hidden">
                {/* Texture */}
                <div className="absolute inset-0 opacity-[0.1] pointer-events-none mix-blend-overlay" style={{ backgroundImage: "url(\"data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noise'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.65' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noise)'/%3E%3C/svg%3E\")" }}></div>
                <div className="max-w-screen-xl mx-auto text-center relative z-10">
                    <ScrollReveal>
                        <h2 className="text-3xl md:text-5xl font-black mb-8">
                            採用課題、<br className="md:hidden" />ご相談ください。
                        </h2>
                        <p className="text-lg text-white/70 font-medium mb-12 max-w-2xl mx-auto">
                            貴社の採用を「自走できる体制」へ。<br />
                            まずはカジュアルにお話ししませんか？
                        </p>
                        <Link
                            href="/contact"
                            className="inline-flex items-center gap-3 px-12 py-6 bg-white text-primary text-sm font-black tracking-[0.2em] hover:bg-[var(--color-brand-accent)] hover:text-white transition-all"
                        >
                            お問い合わせ
                            <ArrowRight className="w-4 h-4" />
                        </Link>
                    </ScrollReveal>
                </div>
            </section>
        </main>
    );
}
