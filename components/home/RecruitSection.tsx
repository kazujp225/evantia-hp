import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { ScrollReveal } from "@/components/ui/ScrollReveal";

export function RecruitSection() {
    return (
        <section className="py-24 md:py-40 px-6 border-b border-border/40 bg-zinc-50">
            <div className="max-w-screen-xl mx-auto">
                <ScrollReveal>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
                        <div>
                            <span className="text-xs font-bold tracking-[0.3em] uppercase text-primary mb-6 block">Join Our Team</span>
                            <h2 className="text-5xl md:text-8xl font-black tracking-tighter mb-8 leading-[0.9]">
                                RECRUIT
                            </h2>
                            <p className="text-lg font-medium text-muted-foreground mb-10 max-w-md leading-relaxed">
                                私たちは、常識を疑い、本質を追求する仲間を求めています。<br />
                                景色を変える挑戦を、共に。
                            </p>
                            <Link href="/recruit" className="inline-flex items-center justify-center px-10 py-5 bg-foreground text-background text-sm font-bold tracking-[0.2em] hover:bg-primary transition-colors group">
                                採用情報を見る
                                <ArrowRight className="w-5 h-5 ml-3 group-hover:translate-x-1 transition-transform" />
                            </Link>
                        </div>
                        <div className="relative h-[300px] md:h-[500px] bg-gray-200 overflow-hidden group">
                            {/* Abstract / Graphic Representation of 'Growth' or 'Structure' */}
                            <div className="absolute inset-0 bg-black">
                                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[80%] h-[80%] border border-white/20" />
                                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[60%] h-[60%] border border-white/20" />
                                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[40%] h-[40%] border border-white/20" />

                                <div className="absolute inset-0 flex items-center justify-center">
                                    <span className="text-white/5 font-black text-9xl select-none">JOIN</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </ScrollReveal>
            </div>
        </section>
    );
}
