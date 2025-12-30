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
            id: "strategy",
            role: "Strategy Design",
            jp: "採用戦略を設計する",
            desc: "採用を、事業の意思決定にする",
            href: "/service/strategy",
            image: "/assets/images/service-strategy.png"
        },
        {
            id: "execution",
            role: "Execution",
            jp: "実行を担う",
            desc: "現場を止めずに回しきる",
            href: "/service/execution",
            image: "/assets/images/service-execution.png" // Keep local
        },
        {
            id: "system",
            role: "Systematization",
            jp: "仕組みにする",
            desc: "属人性を残さない",
            href: "/service/system",
            image: "/assets/images/service-marketing.png"
        }
    ];

    return (
        <main className="bg-background min-h-screen pt-40 pb-40">
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
                            <Link href={service.href} className="group block">
                                <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
                                    {/* Text */}
                                    <div className="lg:col-span-5 order-2 lg:order-1">
                                        <span className="text-[10px] font-black tracking-[0.4em] text-primary uppercase block mb-6">0{i + 1}</span>
                                        <h3 className="text-sm font-bold uppercase tracking-widest text-muted-foreground group-hover:text-foreground transition-colors mb-2">
                                            {service.role}
                                        </h3>
                                        <h2 className="text-3xl md:text-5xl font-bold mb-6 group-hover:text-primary transition-colors leading-tight">
                                            {service.jp}
                                        </h2>
                                        <p className="text-lg font-medium text-muted-foreground mb-8">
                                            └ {service.desc}
                                        </p>
                                        <div className="flex items-center gap-4 text-sm font-bold tracking-widest uppercase group-hover:gap-6 transition-all">
                                            View Details <ArrowRight className="w-4 h-4 text-primary" />
                                        </div>
                                    </div>

                                    {/* Image */}
                                    <div className="lg:col-span-7 order-1 lg:order-2">
                                        <div className="relative aspect-[16/9] overflow-hidden bg-muted">
                                            <div className="absolute inset-0 bg-primary/10 group-hover:bg-transparent transition-colors duration-500 z-10" />
                                            <Image
                                                src={service.image}
                                                alt={service.jp}
                                                fill
                                                className="object-cover transition-transform duration-700 group-hover:scale-105"
                                            />
                                        </div>
                                    </div>
                                </div>
                            </Link>
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
                    <Link href="/contact" className="inline-flex items-center justify-center px-12 py-6 bg-foreground text-background text-sm font-black tracking-[0.2em] uppercase hover:bg-primary hover:text-white transition-all">
                        Start Consultation
                    </Link>
                </div>

            </div>
        </main >
    );
}
