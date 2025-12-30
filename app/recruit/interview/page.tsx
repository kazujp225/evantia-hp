import { PageHeader } from "@/components/ui/PageHeader";
import { ScrollReveal } from "@/components/ui/ScrollReveal";
import { ArrowRight, ArrowLeft } from "lucide-react";
import Link from "next/link";
import Image from "next/image";

export const metadata = {
    title: "Interview | 社員インタビュー",
    description: "アズライトで働く社員のインタビューをご紹介します。",
};

const INTERVIEWS = [
    {
        id: "001",
        name: "田中 太郎",
        role: "Recruitment Consultant",
        joined: "2026",
        title: "「クライアントの事業成長」こそが、我々のゴールである。",
        image: "https://images.unsplash.com/photo-1560250097-0b93528c311a?auto=format&fit=crop&q=80&w=800"
    },
    {
        id: "002",
        name: "鈴木 花子",
        role: "RPO Specialist",
        joined: "2026",
        title: "現場にこそ答えがある。泥臭い改善が組織を変える。",
        image: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&q=80&w=800"
    },
    {
        id: "003",
        name: "佐藤 一郎",
        role: "Creative Director",
        joined: "2025",
        title: "言葉にできない魅力を、デザインの力で可視化する。",
        image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&q=80&w=800"
    },
    {
        id: "004",
        name: "高橋 由美",
        role: "Career Advisor",
        joined: "2025",
        title: "「転職」という人生の分岐点に、誰よりも真剣に向き合う。",
        image: "https://images.unsplash.com/photo-1580489944761-15a19d654956?auto=format&fit=crop&q=80&w=800"
    },
    {
        id: "005",
        name: "伊藤 健太",
        role: "Corporate Staff",
        joined: "2026",
        title: "急成長する組織の「守り」と「攻め」を同時に担う面白さ。",
        image: "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?auto=format&fit=crop&q=80&w=800"
    },
    {
        id: "006",
        name: "渡辺 さくら",
        role: "HR Tech Engineer",
        joined: "2026",
        title: "テクノロジーで採用の不確実性を減らし、マッチングの精度を上げる。",
        image: "https://images.unsplash.com/photo-1598550832205-d41fcd752f81?auto=format&fit=crop&q=80&w=800"
    }
];

export default function InterviewPage() {
    return (
        <div className="bg-white pb-40">
            <PageHeader title="INTERVIEW" subtitle="社員インタビュー" />

            {/* Back to Recruit */}
            <div className="container-custom py-8">
                <Link href="/recruit" className="inline-flex items-center gap-2 text-base md:text-sm font-bold text-gray-400 hover:text-black transition-colors">
                    <ArrowLeft size={16} /> 採用トップへ
                </Link>
            </div>

            <section className="py-12">
                <div className="container-custom">
                    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-x-8 gap-y-16">
                        {INTERVIEWS.map((interview, i) => (
                            <ScrollReveal key={i} delay={i * 0.05}>
                                <Link href={`/recruit/interview/${interview.id}`} className="group block">
                                    <div className="aspect-[3/4] bg-gray-100 mb-6 overflow-hidden relative">
                                        <div className="absolute inset-0 bg-primary/20 group-hover:bg-transparent transition-colors duration-500 z-10" />
                                        <Image
                                            src={interview.image}
                                            alt={interview.name}
                                            fill
                                            unoptimized
                                            className="object-cover group-hover:scale-105 transition-transform duration-700 filter grayscale group-hover:grayscale-0"
                                        />
                                    </div>

                                    <div className="flex flex-col">
                                        <div className="flex justify-between items-baseline mb-3">
                                            <p className="font-bold text-base md:text-sm tracking-widest uppercase text-gray-400 group-hover:text-primary transition-colors">{interview.role}</p>
                                            <span className="font-mono text-sm md:text-xs text-gray-300">{interview.joined}</span>
                                        </div>
                                        <h3 className="font-bold text-xl md:text-2xl leading-snug mb-4 group-hover:text-primary transition-colors min-h-[3.5em]">
                                            {interview.title}
                                        </h3>
                                        <div className="mt-auto flex items-center gap-2 font-bold text-base md:text-sm opacity-0 group-hover:opacity-100 -translate-x-4 group-hover:translate-x-0 transition-all duration-300">
                                            記事を読む <ArrowRight size={16} />
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
