import { notFound } from "next/navigation";
import { SERVICE_DATA } from "@/lib/service-data";
import { PageHeader } from "@/components/ui/PageHeader";
import { ScrollReveal } from "@/components/ui/ScrollReveal";
import { Check, ArrowRight } from "lucide-react";
import Link from "next/link";

export function generateStaticParams() {
    return Object.keys(SERVICE_DATA).map((slug) => ({
        slug,
    }));
}

export default function ServiceDetailPage({ params }: { params: { slug: string } }) {
    const service = SERVICE_DATA[params.slug];

    if (!service) {
        return notFound();
    }

    return (
        <div className="bg-white pb-40">
            {/* Hero Section - Full Screen Parallaxish */}
            <div className="relative h-[60vh] md:h-[80vh] w-full overflow-hidden">
                <div
                    className="absolute inset-0 bg-cover bg-center"
                    style={{ backgroundImage: `url(${service.image})` }}
                >
                    <div className="absolute inset-0 bg-black/60" />
                </div>

                <div className="absolute inset-0 flex flex-col justify-center items-center text-center text-white p-8">
                    <ScrollReveal>
                        <h1 className="text-xl md:text-2xl font-bold tracking-widest text-primary mb-6 uppercase">{service.subtitle}</h1>
                        <h2 className="text-4xl md:text-7xl font-black leading-tight max-w-4xl">{service.title}</h2>
                    </ScrollReveal>
                </div>
            </div>

            {/* Description - Dark Section */}
            <section className="bg-bg-alt py-32 -mt-20 relative z-10 rounded-t-[3rem] border-t border-border/50">
                <div className="container-custom max-w-4xl text-center">
                    <ScrollReveal>
                        <p className="text-lg md:text-2xl font-medium leading-loose text-text-main">
                            {service.description}
                        </p>
                    </ScrollReveal>
                </div>
            </section>

            {/* Features - Process Style */}
            <section className="py-32">
                <div className="container-custom max-w-6xl">
                    <div className="flex flex-col md:flex-row gap-20">
                        {/* Left: Features */}
                        <div className="flex-1">
                            <ScrollReveal className="mb-12">
                                <h3 className="text-3xl font-bold mb-8">サービス内容</h3>
                                <ul className="space-y-6">
                                    {service.features.map((feature, i) => (
                                        <li key={i} className="flex items-start gap-4 p-6 border border-border rounded-xl hover:border-primary transition-colors">
                                            <div className="bg-primary/10 p-2 rounded-full text-primary mt-1">
                                                <Check size={20} className="stroke-[3px]" />
                                            </div>
                                            <span className="text-lg font-bold">{feature}</span>
                                        </li>
                                    ))}
                                </ul>
                            </ScrollReveal>
                        </div>

                        {/* Right: Flow */}
                        <div className="flex-1">
                            <ScrollReveal delay={0.2}>
                                <h3 className="text-3xl font-bold mb-8">プロセス</h3>
                                <div className="border-l-2 border-black/10 ml-4 space-y-12">
                                    {service.process.map((step, i) => (
                                        <div key={i} className="relative pl-12">
                                            <div className="absolute -left-[9px] top-0 w-[18px] h-[18px] rounded-full bg-white border-4 border-black group-hover:bg-primary transition-colors" />
                                            <span className="text-sm md:text-xs font-bold text-primary tracking-widest block mb-2">ステップ {step.step}</span>
                                            <h4 className="text-xl font-bold mb-3">{step.title}</h4>
                                            <p className="text-text-light leading-relaxed">{step.desc}</p>
                                        </div>
                                    ))}
                                </div>
                            </ScrollReveal>
                        </div>
                    </div>
                </div>
            </section>

            {/* CTA */}
            <section className="bg-black text-white py-32 text-center">
                <div className="container-custom">
                    <h2 className="text-4xl font-bold mb-8">始めませんか？</h2>
                    <p className="text-gray-400 mb-12 max-w-2xl mx-auto">
                        貴社の課題に合わせた最適なプランをご提案します。<br />
                        まずはお気軽にご相談ください。
                    </p>
                    <Link href="/contact" className="inline-flex items-center gap-2 px-12 py-5 bg-white text-black font-bold rounded-full hover:bg-primary hover:text-white transition-all duration-300">
                        お問い合わせ <ArrowRight size={20} />
                    </Link>
                </div>
            </section>
        </div>
    );
}
