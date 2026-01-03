import Link from "next/link";
import Image from "next/image";
import { ArrowRight } from "lucide-react";
import { ScrollReveal } from "@/components/ui/ScrollReveal";

export function RecruitSection() {
    return (
        <section className="relative py-32 md:py-48 px-6 overflow-hidden border-t border-zinc-800" aria-labelledby="recruit-heading">
            {/* Background Image with Parallax-like feel (static for now) */}
            <div className="absolute inset-0 z-0">
                <Image
                    src="/assets/images/hero-team.jpg"
                    alt="チームワークと成長"
                    fill
                    className="object-cover transition-transform duration-[2s] hover:scale-105"
                    style={{ filter: 'grayscale(100%) brightness(0.4)' }}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[var(--color-primary)]/90 via-[var(--color-primary)]/40 to-[var(--color-primary)]/90 mix-blend-multiply" />
                <div className="absolute inset-0 bg-black/40" />
            </div>

            {/* Content */}
            <div className="relative z-10 max-w-screen-xl mx-auto text-center text-white">
                <ScrollReveal>
                    <div className="flex flex-col items-center">
                        <span className="text-sm md:text-sm font-black tracking-[0.4em] text-[var(--color-brand-accent)] uppercase mb-8 flex items-center gap-4">
                            <span className="w-12 h-[1px] bg-[var(--color-brand-accent)]"></span>
                            Join Our Team
                            <span className="w-12 h-[1px] bg-[var(--color-brand-accent)]"></span>
                        </span>

                        <h2 id="recruit-heading" className="text-6xl md:text-9xl font-black tracking-tighter mb-10 leading-none text-transparent bg-clip-text bg-gradient-to-b from-white to-white/50 filter drop-shadow-2xl">
                            RECRUIT
                        </h2>

                        <p className="text-lg md:text-2xl font-medium leading-relaxed mb-12 max-w-2xl mx-auto text-zinc-200">
                            私たちは、成長意欲が高く、<br className="hidden md:block" />
                            課題解決に真摯に向き合う仲間を求めています。<br />
                            <span className="block mt-4 text-white text-xl md:text-3xl font-bold">新しい価値を創造する仕事を、共に。</span>
                        </p>

                        <Link
                            href="/recruit"
                            className="group relative inline-flex items-center gap-4 px-12 py-6 bg-white text-[var(--color-primary)] text-sm font-black tracking-[0.2em] overflow-hidden rounded-full hover:bg-[var(--color-brand-accent)] hover:text-white transition-all duration-300 shadow-[0_0_40px_-10px_rgba(255,255,255,0.3)] hover:shadow-[0_0_40px_-5px_rgba(16,185,129,0.5)]"
                        >
                            <span className="relative z-10 transition-transform duration-300 group-hover:-translate-x-1">採用情報を見る</span>
                            <ArrowRight className="w-4 h-4 relative z-10 transition-transform duration-300 group-hover:translate-x-1" />
                        </Link>
                    </div>
                </ScrollReveal>
            </div>
        </section>
    );
}
