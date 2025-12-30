import Link from "next/link";
import Image from "next/image";
import { ArrowRight } from "lucide-react";
import { ScrollReveal } from "@/components/ui/ScrollReveal";

export const metadata = {
    title: "Services | EVANTIA",
    description: "採用を、事業の意思決定にする。",
};

export default function ServicePage() {
    const services = [
        {
            id: "consulting",
            role: "Strategy Design",
            jp: "採用戦略を設計する",
            desc: "採用を、事業の意思決定にする",
            image: "/assets/images/service-strategy.png"
        },
        {
            id: "rpo",
            role: "Execution",
            jp: "実行を担う",
            desc: "現場を止めずに回しきる",
            image: "/assets/images/service-execution.png"
        },
        {
            id: "scout",
            role: "Systematization",
            jp: "仕組みにする",
            desc: "属人性を残さない",
            image: "/assets/images/service-marketing.png"
        }
    ];

    return (
        <main className="bg-background min-h-screen pt-24 md:pt-32 pb-40">
            <div className="max-w-screen-xl mx-auto px-6">

                <ScrollReveal>
                    <div className="mb-32 border-b border-border/40 pb-12">
                        <h1 className="text-4xl md:text-6xl font-black tracking-tighter uppercase mb-4">
                            Services.
                        </h1>
                        <p className="text-muted-foreground font-medium tracking-wide">
                            私たちが提供する3つの価値。
                        </p>
                    </div>
                </ScrollReveal>

                <div className="flex flex-col gap-24">
                    {services.map((service, i) => (
                        <ScrollReveal key={service.id} delay={i * 0.1}>
                            <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
                                {/* Text */}
                                <div className="lg:col-span-5 order-2 lg:order-1">
                                    <span className="text-sm md:text-[10px] font-black tracking-[0.4em] text-primary uppercase block mb-6">0{i + 1}</span>
                                    <h3 className="text-base md:text-sm font-bold uppercase tracking-widest text-muted-foreground mb-2">
                                        {service.role}
                                    </h3>
                                    <h2 className="text-3xl md:text-5xl font-bold mb-6 leading-tight">
                                        {service.jp}
                                    </h2>
                                    <p className="text-lg font-medium text-muted-foreground">
                                        └ {service.desc}
                                    </p>
                                </div>

                                {/* Image */}
                                <div className="lg:col-span-7 order-1 lg:order-2">
                                    <div className="relative aspect-[16/9] overflow-hidden bg-muted">
                                        <Image
                                            src={service.image}
                                            alt={service.jp}
                                            fill
                                            className="object-cover"
                                        />
                                    </div>
                                </div>
                            </div>
                        </ScrollReveal>
                    ))}
                </div>

                <ScrollReveal delay={0.4}>
                    <div className="mt-40 p-12 bg-foreground text-background">
                        <h3 className="text-[10px] font-black tracking-[0.4em] uppercase opacity-70 mb-12">Professional Services</h3>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-8">
                            {[
                                { title: "採用戦略の構築", desc: "判断の質を上げる" },
                                { title: "母集団形成支援", desc: "届く人にだけ届かせる" },
                                { title: "採用実務アウトソーシング", desc: "現場を止めない" },
                                { title: "採用事務アウトソーシング", desc: "判断以外を任せる" }
                            ].map((item, i) => (
                                <div key={i} className="flex flex-col gap-2 border-b border-white/20 pb-8">
                                    <h4 className="text-xl font-bold">{item.title}</h4>
                                    <div className="flex items-center gap-2 text-white/60 text-sm font-medium">
                                        <ArrowRight className="w-3 h-3" />
                                        <span>{item.desc}</span>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </ScrollReveal>

                <div className="mt-40 text-center pb-20">
                    <Link href="/contact" className="inline-flex items-center justify-center px-12 py-6 bg-foreground text-background text-base md:text-sm font-black tracking-[0.2em] hover:bg-primary hover:text-white transition-all">
                        お問い合わせ
                    </Link>
                </div>

            </div>
        </main >
    );
}
