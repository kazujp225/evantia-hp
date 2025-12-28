import { PageHeader } from "@/components/ui/PageHeader";
import { ScrollReveal } from "@/components/ui/ScrollReveal";
import { ArrowRight, ArrowUpRight } from "lucide-react";
import Link from "next/link";

export const metadata = {
    title: "Recruit | 採用情報",
    description: "アズライトの採用情報ページです。",
};

export default function RecruitPage() {
    return (
        <div className="bg-bg-base text-text-main pb-40">
            <PageHeader title="RECRUIT" subtitle="採用情報" />

            {/* Manifesto Section */}
            <section className="py-32 md:py-48 bg-white border-b border-black">
                <div className="container-custom">
                    <ScrollReveal className="max-w-6xl">
                        <p className="font-mono text-primary font-bold tracking-widest mb-12 uppercase">Join the Challenge</p>
                        <h2 className="text-4xl md:text-7xl font-black leading-[1.1] mb-20 tracking-tight">
                            Redefine<br />
                            The Standard.
                        </h2>
                        <div className="grid md:grid-cols-2 gap-16 md:gap-32">
                            <p className="text-xl md:text-3xl font-bold leading-relaxed">
                                これまでの「採用」の常識を疑い、<br />
                                本質的な価値を追求する。
                            </p>
                            <div className="space-y-8 font-medium text-gray-500 leading-loose">
                                <p>
                                    私たちは、ただの人材会社ではありません。
                                    企業の成長エンジンであり、個人のキャリアの伴走者です。
                                </p>
                                <p>
                                    「自走」というゴールに向かって、
                                    クライアントと共に汗をかき、痛みも喜びも分かち合う。
                                    そんなヒリヒリするような挑戦を、楽しみながら乗り越えられる仲間を求めています。
                                </p>
                            </div>
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
                            View All <ArrowRight size={16} />
                        </Link>
                    </ScrollReveal>

                    <div className="flex flex-col">
                        {[
                            { name: "TANAKA TARO", role: "Consultant", title: "「クライアントの事業成長」こそが我々のゴールである。", image: "https://images.unsplash.com/photo-1560250097-0b93528c311a?auto=format&fit=crop&q=80&w=800" },
                            { name: "SUZUKI HANAKO", role: "RPO Specialist", title: "「代行」ではなく「パートナー」。泥臭い現場にこそ答えがある。", image: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&q=80&w=800" },
                            { name: "SATO ICHIRO", role: "Designer", title: "言葉にできない魅力を、デザインの力で可視化する。", image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&q=80&w=800" }
                        ].map((member, i) => (
                            <ScrollReveal key={i} delay={i * 0.1}>
                                <Link href="#" className="group flex flex-col md:flex-row gap-8 md:gap-16 py-12 border-b border-gray-300 hover:border-black transition-colors">
                                    <div className="md:w-[400px] aspect-[16/9] md:aspect-[3/2] overflow-hidden bg-gray-200 block md:order-2">
                                        <div
                                            className="w-full h-full bg-cover bg-center group-hover:scale-105 transition-transform duration-700"
                                            style={{ backgroundImage: `url(${member.image})` }}
                                        />
                                    </div>

                                    <div className="flex-1 flex flex-col justify-center">
                                        <div className="flex items-center gap-4 mb-6">
                                            <span className="font-mono text-primary font-bold tracking-widest text-xs uppercase">{member.role}</span>
                                            <span className="w-10 h-px bg-gray-300" />
                                            <span className="font-mono font-bold text-xs uppercase">{member.name}</span>
                                        </div>
                                        <h3 className="text-2xl md:text-4xl font-bold leading-tight group-hover:text-primary transition-colors">
                                            {member.title}
                                        </h3>
                                        <div className="mt-8 flex items-center gap-2 font-bold text-sm opacity-0 group-hover:opacity-100 -translate-x-4 group-hover:translate-x-0 transition-all duration-300">
                                            Read Story <ArrowRight size={16} />
                                        </div>
                                    </div>
                                </Link>
                            </ScrollReveal>
                        ))}
                    </div>
                </div>
            </section>

            {/* Open Positions - Minimal List */}
            <section className="py-32 bg-black text-white">
                <div className="container-custom max-w-5xl">
                    <ScrollReveal className="text-center mb-20">
                        <h2 className="text-4xl font-black mb-4">OPEN POSITIONS</h2>
                        <p className="text-gray-400">現在募集中のポジション</p>
                    </ScrollReveal>

                    <div className="border-t border-white/20">
                        {['Recruitment Consultant', 'RPO Specialist', 'Career Advisor', 'Corporate Staff'].map((job, i) => (
                            <ScrollReveal key={i} delay={i * 0.1}>
                                <Link href="#" className="group flex flex-col md:flex-row md:items-center justify-between py-10 border-b border-white/20 hover:bg-white hover:text-black transition-all duration-300 px-6 md:px-10">
                                    <div className="mb-4 md:mb-0">
                                        <h3 className="text-2xl font-bold mb-2">{job}</h3>
                                        <span className="text-sm font-mono opacity-50 group-hover:opacity-100">Full Time / Tokyo, Osaka</span>
                                    </div>
                                    <div className="w-12 h-12 rounded-full border border-white/30 group-hover:border-black flex items-center justify-center transition-colors">
                                        <ArrowUpRight size={20} />
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
