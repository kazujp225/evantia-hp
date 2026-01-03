import { PageHeader } from "@/components/ui/PageHeader";
import { ScrollReveal } from "@/components/ui/ScrollReveal";
import { ArrowUpRight } from "lucide-react";
import Link from "next/link";

import { Metadata } from "next";

export const metadata: Metadata = {
    title: "採用情報",
    description: "株式会社エバンティアの採用情報。成長意欲が高く、課題解決に真摯に向き合う仲間を募集中。採用コンサルタント、RPO担当、スカウト代行担当など。",
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
                        <p className="text-xl md:text-2xl font-bold leading-relaxed mb-12 max-w-2xl">
                            採用の本質的な価値を追求し、クライアントの成長に貢献する。
                        </p>
                        <div className="space-y-6 text-lg text-gray-600 leading-relaxed max-w-3xl">
                            <p>
                                私たちは、企業の採用活動を支援するパートナーとして、また個人のキャリアに寄り添う存在として活動しています。
                            </p>
                            <p>
                                クライアントの「自走体制の構築」という目標に向かって、共に取り組み、成果を分かち合う。そんなやりがいのある仕事を、一緒に楽しめる仲間を求めています。
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
                        {['Recruitment Consultant', 'RPO Specialist', 'Career Advisor', 'Corporate Staff'].map((job, i) => (
                            <ScrollReveal key={i} delay={i * 0.1}>
                                <Link href="/recruit/entry" className="group flex flex-col md:flex-row md:items-center justify-between py-10 border-b border-white/20 hover:bg-white/5 transition-all duration-300 px-6 md:px-10">
                                    <div className="mb-4 md:mb-0">
                                        <h3 className="text-2xl font-bold mb-2 group-hover:text-[var(--color-brand-accent)] transition-colors">{job}</h3>
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
