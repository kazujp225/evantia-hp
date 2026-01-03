import Link from "next/link";
import Image from "next/image";
import { ArrowRight } from "lucide-react";
import { ScrollReveal } from "@/components/ui/ScrollReveal";

import { Metadata } from "next";

export const metadata: Metadata = {
    title: "ご支援の流れ",
    description: "エバンティアの採用支援プロセス。戦略設計→実行・仕組み化→移管・自走の3ステップで、再現性のある採用体制を構築します。",
    alternates: { canonical: "/process" },
};

export default function ProcessPage() {
    const steps = [
        {
            step: "01",
            title: "Strategy & Design",
            desc: "採用が「感覚」から「言語」になる",
            detail: "経営目標から逆算した採用要件を定義。評価基準を明確に言語化することで、選考の精度を向上させます。",
            image: "https://images.unsplash.com/photo-1552664730-d307ca884978?auto=format&fit=crop&q=80&w=1600"
        },
        {
            step: "02",
            title: "Execution & System",
            desc: "属人性が「仕組み」に変わる",
            detail: "スカウト、日程調整、面接フィードバック。すべての工程を標準化し、再現性のある採用体制を構築します。",
            image: "https://images.unsplash.com/photo-1600880292203-757bb62b4baf?auto=format&fit=crop&q=80&w=1600"
        },
        {
            step: "03",
            title: "Transfer & Self-Run",
            desc: "自社での運用が可能になる",
            detail: "最終的な目標は、貴社での自走体制の確立です。構築したノウハウと仕組みを社内に移管し、持続的に成果を出せる採用チームを実現します。",
            image: "https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&q=80&w=1600"
        }
    ];

    return (
        <main className="bg-background min-h-screen">

            {/* Page Header with Image */}
            <div className="relative h-[60vh] flex items-end">
                <Image
                    src="https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?auto=format&fit=crop&q=80&w=2000"
                    alt="Process Header"
                    fill
                    className="object-cover brightness-50"
                    priority
                />
                <div className="relative z-10 w-full max-w-screen-xl mx-auto px-6 pb-20">
                    <ScrollReveal>
                        <h1 className="text-6xl md:text-8xl lg:text-9xl font-black tracking-tighter uppercase text-white mb-6 leading-[0.9]">
                            Process of<br />
                            Transformation.
                        </h1>
                        <p className="text-white/80 font-medium tracking-wide text-lg">
                            組織の変化を、確実なものにするプロセス。
                        </p>
                    </ScrollReveal>
                </div>
            </div>

            <div className="max-w-screen-xl mx-auto px-6 py-32">
                <div className="space-y-32">
                    {steps.map((item, i) => (
                        <ScrollReveal key={i}>
                            <div className={`flex flex-col gap-12 ${i % 2 === 1 ? 'md:flex-row-reverse' : 'md:flex-row'} items-center`}>
                                {/* Image Side */}
                                <div className="w-full md:w-1/2 aspect-[4/3] relative">
                                    <Image
                                        src={item.image}
                                        alt={item.title}
                                        fill
                                        className="object-cover transition-all duration-700 hover:scale-105"
                                    />
                                </div>

                                {/* Text Side */}
                                <div className="w-full md:w-1/2 md:px-12">
                                    <span className="text-6xl md:text-[10rem] font-black text-foreground/10 tracking-tighter block mb-2 leading-none">{item.step}</span>
                                    <h2 className="text-4xl md:text-6xl font-black uppercase tracking-tight mb-8 leading-none">
                                        {item.title}
                                    </h2>
                                    <p className="text-2xl md:text-3xl font-black text-primary mb-8 leading-tight">
                                        {item.desc}
                                    </p>
                                    <p className="text-muted-foreground leading-loose font-medium text-lg">
                                        {item.detail}
                                    </p>
                                </div>
                            </div>
                        </ScrollReveal>
                    ))}
                </div>

                <div className="mt-40 text-center">
                    <Link href="/contact" className="inline-flex items-center justify-center px-12 py-6 bg-foreground text-background text-sm font-black tracking-[0.2em] uppercase hover:bg-primary hover:text-white transition-all">
                        Start Transformation
                    </Link>
                </div>

            </div>
        </main>
    );
}
