import { PageHeader } from "@/components/ui/PageHeader";
import { ScrollReveal } from "@/components/ui/ScrollReveal";
import { ArrowUpRight } from "lucide-react";
import Link from "next/link";

import { Metadata } from "next";

export const metadata: Metadata = {
    title: "採用情報",
    description: "株式会社エバンティアの採用情報。成長意欲が高く、課題解決に真摯に向き合う仲間を募集中。コンサル営業職、カスタマーサポート・営業事務職、人事職（自社採用・労務）など。",
    openGraph: {
        title: "採用情報 | 株式会社エバンティア",
        description: "成長意欲が高く、課題解決に真摯に向き合う仲間を募集中。コンサル営業職、カスタマーサポート・営業事務職、人事職など。",
    },
    alternates: { canonical: "/recruit" },
};

export default function RecruitPage() {
    return (
        <div className="bg-bg-base text-text-main pb-40">
            <PageHeader title="RECRUIT" subtitle="採用情報" />

            {/* Manifesto Section */}
            <section className="py-32 md:py-48 bg-white border-b border-black">
                <div className="container-custom">
                    <ScrollReveal className="max-w-6xl">
                        <p className="text-primary font-bold tracking-widest mb-6 uppercase text-sm flex items-center gap-3">
                            <span className="w-8 h-[2px] bg-primary"></span>
                            仲間を募集しています
                        </p>
                        <h2 className="text-4xl md:text-7xl font-black leading-[1.1] mb-12 tracking-tight">
                            課題に向き合い、<br />
                            本質を追求する。
                        </h2>
                        <p className="text-xl md:text-2xl font-bold leading-relaxed mb-12 max-w-3xl">
                            「勝てる組織」の再現性を追求し、企業の未来、そして私たち自身の組織を創り上げる。
                        </p>
                        <div className="space-y-6 text-lg text-gray-600 leading-relaxed max-w-3xl">
                            <p>
                                私たちは、企業の成長の根幹である「採用」領域において、戦略立案から実務までを一気通貫で支援するHRソリューションパートナーです。単なる「人を紹介する」枠に留まらず、RPO（採用代行）や採用コンサルティングを通じて、お客様の採用力を内側から強くしていく「プロフェッショナル集団」として、企業の事業成長を加速させています。
                            </p>
                            <p>
                                また、エバンティアは今まさに0から組織を創り上げる非常に面白いフェーズにあります。クライアントの課題解決に挑むフロント（コンサル営業）はもちろん、事業の拡大に伴い、エバンティアという組織自体を中から強くし、カルチャーを共に創り上げていく「自社の人事・バックオフィス」の存在も、今の私たちには欠かせません。
                            </p>
                            <p>
                                創業期のコアメンバーとして、特定の枠に縛られず、自分で仕事を見つけ、熱量ある環境で一緒に楽しみたい！そんな情熱を持った仲間を募集しています。顧客の未来を創るフロント職も、会社の未来を創るコーポレート職も。本質的な課題に向き合い、一緒に挑戦を楽しめる仲間を待っています。
                            </p>
                        </div>
                    </ScrollReveal>
                </div>
            </section>


            {/* Open Positions - High Impact List */}
            <section className="py-32 bg-[var(--color-primary)] text-white relative overflow-hidden">
                {/* Texture Overlay */}
                <div className="absolute inset-0 opacity-[0.1] pointer-events-none mix-blend-overlay" style={{ backgroundImage: "url(\"data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noise'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.65' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noise)'/%3E%3C/svg%3E\")" }}></div>

                <div className="container-custom max-w-5xl relative z-10">
                    <ScrollReveal className="text-center mb-20">
                        <span className="text-[var(--color-brand-accent)] font-bold tracking-[0.3em] text-xs uppercase mb-4 block animate-pulse">Hiring</span>
                        <h2 className="text-4xl md:text-6xl font-black mb-4">OPEN POSITIONS</h2>
                        <p className="text-white/60 font-bold">現在募集中のポジション</p>
                    </ScrollReveal>

                    <div className="border-t border-white/20">
                        {[
                            { en: 'CONSULTING SALES', ja: 'コンサル営業職' },
                            { en: 'CUSTOMER SUPPORT & SALES ADMINISTRATION', ja: 'カスタマーサポート・営業事務職' },
                            { en: 'HUMAN RESOURCES (HR)', ja: '人事職（自社採用・労務）' },
                        ].map((job, i) => (
                            <ScrollReveal key={i} delay={i * 0.1}>
                                <Link href="/recruit/entry" className="group flex flex-col md:flex-row md:items-center justify-between py-10 border-b border-white/20 hover:bg-white/5 transition-all duration-300 px-6 md:px-10">
                                    <div className="mb-4 md:mb-0">
                                        <span className="text-sm font-mono opacity-50 group-hover:opacity-100 text-[var(--color-brand-accent)] block mb-1">{job.en}</span>
                                        <h3 className="text-2xl font-bold mb-2 group-hover:text-[var(--color-brand-accent)] transition-colors">{job.ja}</h3>
                                        <span className="text-sm font-mono opacity-50 group-hover:opacity-100 text-[var(--color-brand-accent)]">正社員 / 大阪</span>
                                    </div>
                                    <div className="w-12 h-12 rounded-full border border-white/30 group-hover:border-[var(--color-brand-accent)] group-hover:bg-[var(--color-brand-accent)] flex items-center justify-center transition-all duration-500">
                                        <ArrowUpRight size={20} className="text-white" />
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
