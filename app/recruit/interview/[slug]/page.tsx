import { notFound } from "next/navigation";
import { PageHeader } from "@/components/ui/PageHeader";
import { ScrollReveal } from "@/components/ui/ScrollReveal";
import { ArrowLeft } from "lucide-react";
import Link from "next/link";
import Image from "next/image";

// Mock Data
const INTERVIEWS: Record<string, any> = {
    "001": {
        name: "田中 太郎",
        role: "Recruitment Consultant",
        title: "「クライアントの事業成長」こそが、我々のゴールである。",
        intro: "大手人材会社でMVPを獲得した後、なぜ立ち上げ間もないエバンティアを選んだのか。「本質的な支援」を追求する彼の原動力に迫る。",
        image: "https://images.unsplash.com/photo-1560250097-0b93528c311a?auto=format&fit=crop&q=80&w=1200"
    },
    // Add fake data for others to prevent 404
    "002": { name: "鈴木 花子", role: "RPO Specialist", title: "現場にこそ答えがある。", intro: "...", image: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&q=80&w=1200" },
    "003": { name: "佐藤 一郎", role: "Designer", title: "デザインの力で可視化する。", intro: "...", image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&q=80&w=1200" }
};

export default function InterviewDetailPage({ params }: { params: { slug: string } }) {
    const interview = INTERVIEWS[params.slug] || INTERVIEWS["001"]; // Fallback for demo

    return (
        <div className="bg-white pb-40">
            {/* Header / Hero */}
            <div className="pt-32 pb-20 container-custom max-w-5xl">
                <Link href="/recruit" className="inline-flex items-center gap-2 text-sm font-bold text-gray-400 hover:text-black mb-8 transition-colors">
                    <ArrowLeft size={16} /> RECRUIT TOP
                </Link>
                <span className="font-mono text-primary font-bold tracking-widest text-xs uppercase block mb-4">{interview.role}</span>
                <h1 className="text-3xl md:text-5xl font-black leading-tight mb-12">{interview.title}</h1>

                <div className="relative aspect-[16/9] md:aspect-[21/9] rounded-2xl overflow-hidden mb-16">
                    <div
                        className="absolute inset-0 bg-cover bg-center"
                        style={{ backgroundImage: `url(${interview.image})` }}
                    />
                </div>

                <div className="md:grid md:grid-cols-[200px_1fr] gap-12">
                    <div className="mb-8 md:mb-0">
                        <p className="font-bold text-lg mb-1">{interview.name}</p>
                        <p className="text-sm text-gray-500 font-mono">Joined 2026</p>
                    </div>

                    <div className="space-y-12 text-lg leading-loose font-medium text-text-main">
                        <p className="first-letter:text-5xl first-letter:font-black first-letter:float-left first-letter:mr-4 first-letter:mt-[-8px]">
                            {interview.intro}
                        </p>

                        <div>
                            <h3 className="text-2xl font-bold mb-6">入社の決め手は「誠実さ」</h3>
                            <p>
                                前職では数字を追うあまり、時として顧客のためにならない提案をしてしまうことがありました。
                                エバンティアの「顧客の自走をゴールにする」という理念を聞いた時、
                                「これこそが本当のコンサルティングだ」と直感したんです。
                            </p>
                        </div>

                        <blockquote className="border-l-4 border-primary pl-8 py-4 my-12 text-2xl font-bold italic text-gray-400">
                            "仕組みを作って去る。それが最高にかっこいい。"
                        </blockquote>

                        <div>
                            <h3 className="text-2xl font-bold mb-6">今後の展望</h3>
                            <p>
                                今はまだプレイヤーとして現場に立っていますが、ゆくゆくは若手の育成にも携わりたいです。
                                エバンティアのメソッドをより多くのメンバーに継承し、
                                「採用に強い日本企業」を増やしていくことが私のミッションです。
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
