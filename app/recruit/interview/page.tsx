import { PageHeader } from "@/components/ui/PageHeader";
import { ScrollReveal } from "@/components/ui/ScrollReveal";
import { ArrowRight, ArrowLeft } from "lucide-react";
import Link from "next/link";
import Image from "next/image";

export const metadata = {
    title: "Interview | 社員インタビュー",
    description: "エバンティアで働く社員のインタビューをご紹介します。",
};

const INTERVIEWS = [
    {
        id: "001",
        name: "田中 太郎",
        role: "Recruitment Consultant",
        joined: "2026",
        title: "クライアントの事業成長に貢献することが、私たちの目標です。",
        image: "/assets/images/interview-1.jpg"
    },
    {
        id: "002",
        name: "鈴木 花子",
        role: "RPO Specialist",
        joined: "2026",
        title: "現場にこそ答えがある。地道な改善が組織を変える。",
        image: "/assets/images/interview-2.jpg"
    },
    {
        id: "003",
        name: "佐藤 一郎",
        role: "Creative Director",
        joined: "2026",
        title: "言葉にできない魅力を、デザインの力で可視化する。",
        image: "/assets/images/interview-3.jpg"
    },
    {
        id: "004",
        name: "高橋 由美",
        role: "Career Advisor",
        joined: "2026",
        title: "「転職」という人生の分岐点に、真摯に向き合う。",
        image: "/assets/images/interview-1.jpg"
    },
    {
        id: "005",
        name: "伊藤 健太",
        role: "Corporate Staff",
        joined: "2026",
        title: "成長する組織の管理と推進を同時に担うやりがい。",
        image: "/assets/images/interview-2.jpg"
    },
    {
        id: "006",
        name: "渡辺 さくら",
        role: "HR Tech Engineer",
        joined: "2026",
        title: "テクノロジーで採用プロセスを効率化し、マッチングの精度を高める。",
        image: "/assets/images/interview-3.jpg"
    }
];

export default function InterviewPage() {
    return (
        <div className="bg-white pb-40">
            <PageHeader title="INTERVIEW" subtitle="社員インタビュー" />

            {/* Back to Recruit */}
            <div className="container-custom py-8">
                <Link href="/recruit" className="inline-flex items-center gap-2 text-sm font-bold text-gray-400 hover:text-black transition-colors">
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
                                            className="object-cover group-hover:scale-105 transition-transform duration-700 filter grayscale group-hover:grayscale-0"
                                        />
                                    </div>

                                    <div className="flex flex-col">
                                        <div className="flex justify-between items-baseline mb-3">
                                            <p className="font-bold text-sm tracking-widest uppercase text-gray-400 group-hover:text-primary transition-colors">{interview.role}</p>
                                            <span className="font-mono text-sm md:text-xs text-gray-300">{interview.joined}</span>
                                        </div>
                                        <h3 className="font-bold text-xl md:text-2xl leading-snug mb-4 group-hover:text-primary transition-colors min-h-[3.5em]">
                                            {interview.title}
                                        </h3>
                                        <div className="mt-auto flex items-center gap-2 font-bold text-sm opacity-0 group-hover:opacity-100 -translate-x-4 group-hover:translate-x-0 transition-all duration-300">
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
