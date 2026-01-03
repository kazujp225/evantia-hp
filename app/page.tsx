import Link from "next/link";
import Image from "next/image";
import { ArrowRight } from "lucide-react";
import { cn } from "@/lib/utils";
import { ScrollReveal } from "@/components/ui/ScrollReveal";
import { HeroSlider } from "@/components/hero/HeroSlider";
import { ServicesSection } from "@/components/services/ServicesSection";
import { NewsSection } from "@/components/home/NewsSection";
import { RecruitSection } from "@/components/home/RecruitSection";

export default function Home() {
  return (
    <main className="bg-background text-foreground overflow-x-hidden">

      {/* 1. FIRST VIEW - Hero Slider Restored */}
      <HeroSlider />

      {/* 2. VALUE SUMMARY */}
      <section className="py-16 md:py-24 px-6 border-b border-border/40" aria-label="バリューサマリー">
        <div className="max-w-screen-xl mx-auto">
          <ScrollReveal>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-0 border-t border-border mt-10">
              {/* Item 01 */}
              <div className="group py-8 md:py-12 md:pr-12 border-b md:border-b-0 md:border-r border-border min-h-[200px] md:min-h-[320px] flex flex-col justify-between relative transition-all duration-500 hover:bg-gradient-to-b hover:from-white hover:to-emerald-50/30">
                {/* Accent Top Line on Hover */}
                <div className="absolute top-0 left-0 w-0 h-[2px] bg-[var(--color-brand-accent)] transition-all duration-500 group-hover:w-full" />

                <div className="relative z-10 px-6 md:px-0">
                  <span className="text-sm md:text-xs font-black tracking-[0.2em] text-primary md:text-primary/50 uppercase mb-8 block group-hover:text-[var(--color-brand-accent)] transition-colors flex items-center gap-2">
                    <span className="w-2 h-2 rounded-full bg-primary md:bg-border group-hover:bg-[var(--color-brand-accent)] transition-colors"></span>
                    Strategy
                  </span>
                  <h3 className="text-3xl md:text-5xl font-extrabold tracking-tighter leading-tight mb-6 group-hover:translate-x-2 transition-transform duration-500">
                    行動の前に、<br />戦略を。
                  </h3>
                  <p className="text-base md:text-base text-muted-foreground font-bold md:font-medium tracking-wide group-hover:text-foreground transition-colors duration-500 pl-2 border-l-2 border-primary/30 md:border-transparent group-hover:border-[var(--color-brand-accent)]/30">
                    Strategy before action.
                  </p>
                </div>
                <span className="block text-[100px] md:text-[180px] leading-none font-bold text-foreground/[0.03] absolute bottom-2 right-4 md:bottom-[-40px] md:right-2 select-none pointer-events-none group-hover:text-[var(--color-brand-accent)]/[0.05] transition-colors duration-500">01</span>
              </div>

              {/* Item 02 */}
              <div className="group py-8 md:py-12 md:px-12 border-b md:border-b-0 md:border-r border-border min-h-[200px] md:min-h-[320px] flex flex-col justify-between relative transition-all duration-500 hover:bg-gradient-to-b hover:from-white hover:to-emerald-50/30">
                <div className="absolute top-0 left-0 w-0 h-[2px] bg-[var(--color-brand-accent)] transition-all duration-500 group-hover:w-full" />

                <div className="relative z-10 px-6 md:px-0">
                  <span className="text-sm md:text-xs font-black tracking-[0.2em] text-primary md:text-primary/50 uppercase mb-8 block group-hover:text-[var(--color-brand-accent)] transition-colors flex items-center gap-2">
                    <span className="w-2 h-2 rounded-full bg-primary md:bg-border group-hover:bg-[var(--color-brand-accent)] transition-colors"></span>
                    Execution
                  </span>
                  <h3 className="text-3xl md:text-5xl font-extrabold tracking-tighter leading-tight mb-6 group-hover:translate-x-2 transition-transform duration-500">
                    確実な<br />実行。
                  </h3>
                  <p className="text-base md:text-base text-muted-foreground font-bold md:font-medium tracking-wide group-hover:text-foreground transition-colors duration-500 pl-2 border-l-2 border-primary/30 md:border-transparent group-hover:border-[var(--color-brand-accent)]/30">
                    Reliable execution.
                  </p>
                </div>
                <span className="block text-[100px] md:text-[180px] leading-none font-bold text-foreground/[0.03] absolute bottom-2 right-4 md:bottom-[-40px] md:right-2 select-none pointer-events-none group-hover:text-[var(--color-brand-accent)]/[0.05] transition-colors duration-500">02</span>
              </div>

              {/* Item 03 */}
              <div className="group py-8 md:py-12 md:pl-12 min-h-[200px] md:min-h-[320px] flex flex-col justify-between relative transition-all duration-500 hover:bg-gradient-to-b hover:from-white hover:to-emerald-50/30">
                <div className="absolute top-0 left-0 w-0 h-[2px] bg-[var(--color-brand-accent)] transition-all duration-500 group-hover:w-full" />

                <div className="relative z-10 px-6 md:px-0">
                  <span className="text-sm md:text-xs font-black tracking-[0.2em] text-primary md:text-primary/50 uppercase mb-8 block group-hover:text-[var(--color-brand-accent)] transition-colors flex items-center gap-2">
                    <span className="w-2 h-2 rounded-full bg-primary md:bg-border group-hover:bg-[var(--color-brand-accent)] transition-colors"></span>
                    Asset
                  </span>
                  <h3 className="text-3xl md:text-5xl font-extrabold tracking-tighter leading-tight mb-6 group-hover:translate-x-2 transition-transform duration-500">
                    成果を、<br />資産にする。
                  </h3>
                  <p className="text-base md:text-base text-muted-foreground font-bold md:font-medium tracking-wide group-hover:text-foreground transition-colors duration-500 pl-2 border-l-2 border-primary/30 md:border-transparent group-hover:border-[var(--color-brand-accent)]/30">
                    Results that remain.
                  </p>
                </div>
                <span className="block text-[100px] md:text-[180px] leading-none font-bold text-foreground/[0.03] absolute bottom-2 right-4 md:bottom-[-40px] md:right-2 select-none pointer-events-none group-hover:text-[var(--color-brand-accent)]/[0.05] transition-colors duration-500">03</span>
              </div>
            </div>
          </ScrollReveal>
        </div>
      </section>



      {/* 4. PROCESS OF TRANSFORMATION */}
      <section className="py-24 md:py-40 px-6 border-b border-border/40 relative overflow-hidden bg-background" aria-labelledby="process-heading">
        <div className="max-w-screen-xl mx-auto relative z-10">
          <div className="mb-20 md:mb-32">
            <span className="text-sm md:text-xs font-black tracking-[0.2em] text-[var(--color-brand-accent)] uppercase mb-6 block flex items-center gap-4">
              <span className="w-12 h-[2px] bg-[var(--color-brand-accent)]"></span>
              Process of Transformation
            </span>
            <h2 id="process-heading" className="text-5xl md:text-8xl font-black tracking-tighter leading-[0.9] text-foreground mb-8">
              変革のプロセス<span className="text-[var(--color-brand-accent)]" aria-hidden="true">.</span>
            </h2>
            <p className="text-lg text-muted-foreground font-bold md:font-medium max-w-xl leading-relaxed">
              場当たり的な採用から、計画的な採用へ。<br />
              EVANTIAが提供する、成果へのロードマップ。
            </p>
          </div>

          <div className="flex flex-col border-t border-foreground/10">
            {[
              {
                step: "01",
                title: "戦略設計",
                en: "Commitment Strategy",
                desc: "採用課題を明確にし、目標を設定する。\n事業目標から逆算した、最適な採用要件の定義。",
                tags: ["Market Research", "Persona Design", "KPI Setting"]
              },
              {
                step: "02",
                title: "実行＆仕組み化",
                en: "Execution System",
                desc: "属人化を防ぎ、再現性のある採用体制を構築。\n標準化されたオペレーションで安定した成果を実現。",
                tags: ["Operation Flow", "Scout Manual", "ATS Implementation"]
              },
              {
                step: "03",
                title: "移管＆自走",
                en: "In-house Transfer",
                desc: "最終目標は、貴社での自走体制の確立。\nノウハウを貴社に移管し、内製化を支援します。",
                tags: ["Onboarding", "Knowledge Transfer", "Full Autonomy"]
              }
            ].map((item, i) => (
              <div key={i} className="group relative border-b border-foreground/10 transition-all duration-500 hover:border-[var(--color-brand-accent)]">
                {/* Hover Background */}
                <div className="absolute inset-0 bg-[var(--color-brand-accent)]/5 scale-y-0 group-hover:scale-y-100 transition-transform duration-500 origin-top z-0" />

                <div className="relative z-10 py-12 md:py-16 flex flex-col md:flex-row md:items-start md:justify-between gap-6 px-4 md:px-8">

                  {/* Left: Number & Main Title */}
                  <div className="flex flex-col md:flex-row md:items-baseline gap-4 md:gap-12 flex-1">
                    <span className="text-5xl md:text-7xl font-black text-primary/30 md:text-foreground/10 group-hover:text-[var(--color-brand-accent)] transition-colors duration-500 font-mono tracking-tighter">
                      {item.step}
                    </span>
                    <div>
                      <h3 className="text-3xl md:text-5xl font-bold tracking-tight mb-2 group-hover:translate-x-2 transition-transform duration-500">
                        {item.title}
                      </h3>
                      <p className="text-sm md:text-xs font-black tracking-[0.2em] text-primary md:text-muted-foreground uppercase group-hover:text-[var(--color-brand-accent)] transition-colors">
                        {item.en}
                      </p>
                    </div>
                  </div>

                  {/* Right: Description & Tags */}
                  <div className="md:w-[40%] flex flex-col justify-between h-full pt-2 md:pt-4">
                    <p className="text-base font-bold md:font-medium leading-loose text-muted-foreground whitespace-pre-line mb-8 group-hover:text-foreground transition-colors">
                      {item.desc}
                    </p>

                    <div className="flex flex-wrap gap-2">
                      {item.tags.map((tag, t) => (
                        <span key={t} className="text-sm md:text-xs font-bold border border-primary/20 md:border-foreground/10 px-3 py-1.5 rounded-full text-primary/70 md:text-muted-foreground group-hover:border-[var(--color-brand-accent)]/30 group-hover:text-[var(--color-brand-accent)] transition-colors bg-white">
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* Arrow Icon Reveal */}
                  <div className="absolute right-4 top-1/2 -translate-y-1/2 opacity-0 group-hover:opacity-100 -translate-x-4 group-hover:translate-x-0 transition-all duration-500 text-[var(--color-brand-accent)] hidden md:block" aria-hidden="true">
                    <ArrowRight className="w-8 h-8" />
                  </div>

                </div>
              </div>
            ))}
          </div>

          <div className="mt-20 md:mt-32 flex justify-center">
            <Link href="/process" className="group relative inline-flex items-center gap-4 px-8 py-4 overflow-hidden border border-foreground/10 rounded-full hover:border-[var(--color-brand-accent)] transition-colors duration-500 bg-white" aria-label="プロセスの詳細を見る">
              <span className="relative z-10 text-sm md:text-xs font-black tracking-[0.2em] uppercase group-hover:text-[var(--color-brand-accent)] transition-colors">View Full Process</span>
              <ArrowRight className="w-4 h-4 text-muted-foreground group-hover:text-[var(--color-brand-accent)] group-hover:translate-x-1 transition-transform relative z-10" aria-hidden="true" />
              <div className="absolute inset-0 bg-[var(--color-brand-accent)]/5 translate-y-full group-hover:translate-y-0 transition-transform duration-300" aria-hidden="true" />
            </Link>
          </div>
        </div>
      </section>

      {/* 5. SERVICES OVERVIEW */}
      <ServicesSection />

      {/* 6. NEWS */}
      <NewsSection />

      {/* 7. PHILOSOPHY */}
      <section className="py-20 md:py-32 px-6 relative overflow-hidden text-white" aria-labelledby="philosophy-heading">
        <Image
          src="/assets/images/philosophy-bg.jpg"
          alt="チームが協力して目標に向かう様子 - エバンティアの企業哲学を表現"
          fill
          className="object-cover"
        />
        {/* Darker overlay for better contrast */}
        <div className="absolute inset-0 bg-black/70 backdrop-blur-[2px]" />

        <div className="max-w-5xl mx-auto text-center relative z-10">
          <ScrollReveal>
            <span className="inline-block border border-white/30 px-4 py-1.5 rounded-full text-xs font-bold tracking-[0.2em] mb-8 uppercase backdrop-blur-sm">Philosophy</span>
            <h2 id="philosophy-heading" className="text-3xl md:text-6xl font-extrabold leading-tight tracking-tight mb-8 md:mb-12">
              挑戦の価値と面白さを<br className="md:hidden" />
              <span className="text-white relative inline-block">
                最大化する
                <span className="absolute bottom-1 left-0 w-full h-3 bg-white/20 -z-10 -rotate-1" aria-hidden="true"></span>
              </span>
            </h2>
            <p className="text-lg md:text-2xl text-white/90 leading-relaxed mb-10 md:mb-16 font-medium">
              挑戦する人の潜在力を最大限に引き出す場所。<br />
              それがエバンティアの理想です。
            </p>
            <Link href="/about" className="inline-flex items-center gap-4 text-sm font-bold tracking-[0.2em] px-10 py-5 border border-white/40 hover:bg-[var(--color-brand-accent)] hover:text-white hover:border-[var(--color-brand-accent)] transition-all duration-300">
              私たちの哲学について
            </Link>
          </ScrollReveal>
        </div>
      </section>

      {/* 8. RECRUIT */}
      <RecruitSection />

      {/* 9. CTA */}
      {/* 9. CTA - Redesigned to Split Layout */}
      <section className="py-24 md:py-32 bg-white px-6 border-t border-zinc-200 relative overflow-hidden" aria-labelledby="cta-heading">
        {/* Texture Overlay */}
        <div className="absolute inset-0 opacity-[0.4] pointer-events-none mix-blend-multiply" style={{ backgroundImage: "url(\"data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noise'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.8' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noise)'/%3E%3C/svg%3E\")" }} aria-hidden="true" />

        {/* Large Watermark */}
        <div className="absolute top-0 right-0 -translate-y-1/4 translate-x-1/4 select-none pointer-events-none opacity-[0.02]" aria-hidden="true">
          <span className="text-[30vw] font-black leading-none text-black tracking-tighter">
            CONTACT
          </span>
        </div>

        <div className="max-w-screen-xl mx-auto relative z-10">
          <ScrollReveal>
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
              {/* Left: Typographic Statement (7 cols) */}
              <div className="lg:col-span-7 relative">
                <span className="block text-xs font-black tracking-[0.3em] text-[var(--color-brand-accent)] uppercase mb-8 flex items-center gap-3">
                  <span className="w-12 h-[1px] bg-[var(--color-brand-accent)]"></span>
                  Start Your Journey
                </span>
                <h2 id="cta-heading" className="text-6xl md:text-8xl lg:text-9xl font-black tracking-tighter leading-[0.85] text-zinc-900 mb-8 font-feature-settings-palt">
                  LET'S<br />
                  CREATE<br />
                  <span className="relative inline-block text-transparent bg-clip-text bg-gradient-to-r from-[var(--color-primary)] to-[var(--color-brand-accent)]">
                    FUTURE
                    <span className="absolute -bottom-2 md:-bottom-4 left-0 w-full h-2 md:h-4 bg-[var(--color-brand-accent)]/20 -skew-x-12 -z-10 mix-blend-multiply" aria-hidden="true"></span>
                  </span>
                  <span className="text-[var(--color-brand-accent)]">.</span>
                </h2>
              </div>

              {/* Right: Message & Action (5 cols) */}
              <div className="lg:col-span-5 lg:pt-20 flex flex-col items-start relative">
                {/* Vertical Decorative Line */}
                <div className="absolute left-[-2rem] top-20 bottom-0 w-[1px] bg-zinc-100 hidden lg:block" aria-hidden="true"></div>

                <p className="text-xl md:text-2xl font-bold text-zinc-900 mb-8 leading-relaxed font-feature-settings-palt">
                  未来を、共に創る。<br />
                  <span className="text-zinc-400 text-lg md:text-xl">貴社の成長を支えるパートナーとして。</span>
                </p>
                <p className="text-base text-zinc-500 font-medium leading-loose mb-12">
                  採用課題、組織課題、どのようなフェーズでも構いません。<br />
                  まずは貴社の「実現したい未来」をお聞かせください。
                </p>

                <Link
                  href="/contact"
                  className="group relative inline-flex items-center gap-6 px-10 py-5 bg-zinc-900 text-white overflow-hidden transition-all duration-300 hover:shadow-xl hover:shadow-zinc-500/20"
                >
                  <span className="relative z-10 text-sm font-black tracking-[0.2em] uppercase group-hover:text-[var(--color-brand-accent)] transition-colors">Contact Form</span>
                  <ArrowRight className="w-5 h-5 relative z-10 group-hover:translate-x-1 group-hover:text-[var(--color-brand-accent)] transition-all" />

                  {/* Hover Effect - Border Reveal */}
                  <div className="absolute inset-0 border border-transparent group-hover:border-[var(--color-brand-accent)] transition-colors duration-300" />
                </Link>

                <div className="mt-16 pt-8 border-t border-dashed border-zinc-200 w-full">
                  <p className="text-[10px] font-black text-zinc-400 tracking-[0.2em] uppercase mb-3 flex items-center gap-2">
                    <span className="w-2 h-2 rounded-full bg-zinc-300"></span>
                    Direct Contact
                  </p>
                  <a href="tel:03-1234-5678" className="font-mono text-2xl font-bold text-zinc-900 hover:text-[var(--color-brand-accent)] transition-colors tracking-tight">
                    03-1234-5678
                  </a>
                  <p className="text-xs text-zinc-400 mt-2 font-medium">平日 10:00 - 19:00</p>
                </div>
              </div>
            </div>
          </ScrollReveal>
        </div>
      </section>

    </main>
  );
}
