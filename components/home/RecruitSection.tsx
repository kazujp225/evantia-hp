import Link from "next/link";
import Image from "next/image";
import { ArrowRight } from "lucide-react";
import { ScrollReveal } from "@/components/ui/ScrollReveal";

export function RecruitSection() {
    return (
        <section className="py-24 md:py-40 px-6 border-b border-border/40 bg-[var(--color-primary)] text-white relative overflow-hidden" aria-labelledby="recruit-heading">
            {/* Texture Overlay */}
            <div className="absolute inset-0 opacity-[0.1] pointer-events-none mix-blend-overlay" style={{ backgroundImage: "url(\"data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noise'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.65' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noise)'/%3E%3C/svg%3E\")" }} aria-hidden="true"></div>

            {/* Logo Watermark */}
            <div className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-1/4 opacity-[0.03] pointer-events-none" aria-hidden="true">
                <Image
                    src="/logo.png"
                    alt=""
                    width={500}
                    height={500}
                />
            </div>

            <div className="max-w-screen-xl mx-auto relative z-10">
                <ScrollReveal>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
                        <div>
                            <span className="text-xs font-bold tracking-[0.3em] uppercase text-[var(--color-brand-accent)] mb-6 block flex items-center gap-2">
                                <span className="w-2 h-2 bg-[var(--color-brand-accent)] rounded-full animate-pulse" aria-hidden="true"></span>
                                Join Our Team
                            </span>
                            <h2 id="recruit-heading" className="text-5xl md:text-8xl font-black tracking-tighter mb-8 leading-[0.9] text-white">
                                RECRUIT
                            </h2>
                            <p className="text-lg font-medium text-white/80 mb-10 max-w-md leading-relaxed border-l-2 border-[var(--color-brand-accent)] pl-6">
                                私たちは、成長意欲が高く、課題解決に真摯に向き合う仲間を求めています。<br />
                                新しい価値を創造する仕事を、共に。
                            </p>
                            <Link href="/recruit" className="inline-flex items-center justify-center px-10 py-5 bg-white text-[var(--color-primary)] text-sm font-bold tracking-[0.2em] hover:bg-[var(--color-brand-accent)] hover:text-white transition-all duration-300 group shadow-lg" aria-label="採用情報ページへ">
                                採用情報を見る
                                <ArrowRight className="w-5 h-5 ml-3 group-hover:translate-x-1 transition-transform" aria-hidden="true" />
                            </Link>
                        </div>
                        <div className="relative h-[300px] md:h-[500px] bg-white/5 border border-white/10 overflow-hidden group hover:border-[var(--color-brand-accent)] transition-colors duration-500" aria-hidden="true">
                            {/* Abstract Blue Viz */}
                            <div className="absolute inset-0 bg-gradient-to-br from-[var(--color-primary)] to-black opacity-80" />

                            <div className="absolute inset-0 flex items-center justify-center">
                                <div className="w-[80%] h-[1px] bg-white/20 absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 group-hover:w-[90%] transition-all duration-700 delay-100" />
                                <div className="h-[80%] w-[1px] bg-white/20 absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 group-hover:h-[90%] transition-all duration-700 delay-100" />
                                <span className="text-white/10 font-black text-9xl select-none group-hover:text-white/20 transition-colors duration-500">JOIN</span>
                            </div>
                        </div>
                    </div>
                </ScrollReveal>
            </div>
        </section>
    );
}
