import Image from "next/image";
import { PageHeader } from "@/components/ui/PageHeader";
import { ScrollReveal } from "@/components/ui/ScrollReveal";
import { ArrowRight, ArrowUpRight } from "lucide-react";
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

            {/* Interview List - Editorial Style */}
            <section className="py-32 md:py-40 bg-gray-50">
                <div className="container-custom">
                    <ScrollReveal className="flex justify-between items-end mb-24 border-b border-black pb-8">
                        <h2 className="text-4xl font-black">INTERVIEW</h2>
                        <Link href="/recruit/interview" className="font-bold text-sm tracking-widest hover:text-primary transition-colors flex items-center gap-2">
                            すべて見る <ArrowRight size={16} />
                        </Link>
                    </ScrollReveal>

                    <div className="flex flex-col">
                        {[
                            { name: "TANAKA TARO", role: "Consultant", title: "クライアントの事業成長に貢献することが、私たちの目標です。", image: "/assets/images/interview-1.jpg", slug: "001" },
                            { name: "SUZUKI HANAKO", role: "RPO Specialist", title: "「代行」ではなく「パートナー」。現場にこそ答えがある。", image: "/assets/images/interview-2.jpg", slug: "002" },
                            { name: "SATO ICHIRO", role: "Designer", title: "言葉にできない魅力を、デザインの力で可視化する。", image: "/assets/images/interview-3.jpg", slug: "003" }
                        ].map((member, i) => (
                            <ScrollReveal key={i} delay={i * 0.1}>
                                <Link href={`/recruit/interview/${member.slug}`} className="group flex flex-col md:flex-row gap-8 md:gap-16 py-12 border-b border-gray-300 hover:border-black transition-colors">
                                    <div className="md:w-[400px] aspect-[16/9] md:aspect-[3/2] overflow-hidden bg-gray-200 block md:order-2 relative">
                                        <Image
                                            src={member.image}
                                            alt={member.name}
                                            fill
                                            className="object-cover group-hover:scale-105 transition-transform duration-700"
                                        />
                                    </div>

                                    <div className="flex-1 flex flex-col justify-center">
                                        <div className="flex items-center gap-4 mb-6">
                                            <span className="font-mono text-primary font-bold tracking-widest text-xs uppercase">{member.role}</span>
                                            <span className="w-10 h-px bg-gray-300" />
                                            <span className="font-mono font-bold text-sm md:text-xs uppercase">{member.name}</span>
                                        </div>
                                        <h3 className="text-2xl md:text-4xl font-bold leading-tight group-hover:text-primary transition-colors">
                                            {member.title}
                                        </h3>
                                        <div className="mt-8 flex items-center gap-2 font-bold text-sm opacity-0 group-hover:opacity-100 -translate-x-4 group-hover:translate-x-0 transition-all duration-300">
                                            記事を読む <ArrowRight size={16} />
                                        </div>
                                    </div>
                                </Link>
                            </ScrollReveal>
                        ))}
                    </div>
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
                                        <span className="text-sm font-mono opacity-50 group-hover:opacity-100 text-[var(--color-brand-accent)]">正社員 / 東京, 大阪</span>
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
