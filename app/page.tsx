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
      <section className="py-16 md:py-24 px-6 border-b border-border/40">
        <div className="max-w-screen-xl mx-auto">
          <ScrollReveal>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-10 border-t border-border">
              {/* Item 01 */}
              <div className="group pt-8 md:pr-10 md:border-r border-border min-h-[280px] flex flex-col justify-between relative transition-all duration-500 hover:bg-zinc-50/80">
                <div className="relative z-10">
                  <span className="text-xs font-bold tracking-[0.2em] text-primary/60 uppercase mb-6 block group-hover:text-primary transition-colors">01 - Strategy</span>
                  <h3 className="text-4xl md:text-5xl font-extrabold tracking-tighter leading-tight mb-6 group-hover:translate-x-1 transition-transform duration-500">
                    行動の前に、<br />戦略を。
                  </h3>
                  <p className="text-base text-muted-foreground font-medium tracking-wide group-hover:text-foreground transition-colors duration-500">
                    Strategy before action.
                  </p>
                </div>
                <span className="hidden md:block text-[180px] leading-none font-bold text-foreground/[0.02] absolute bottom-[-40px] right-2 select-none pointer-events-none group-hover:text-foreground/[0.05] transition-colors duration-500">01</span>
              </div>

              {/* Item 02 */}
              <div className="group pt-8 md:px-10 md:border-r border-border min-h-[280px] flex flex-col justify-between relative transition-all duration-500 hover:bg-zinc-50/80">
                <div className="relative z-10">
                  <span className="text-xs font-bold tracking-[0.2em] text-primary/60 uppercase mb-6 block group-hover:text-primary transition-colors">02 - Execution</span>
                  <h3 className="text-4xl md:text-5xl font-extrabold tracking-tighter leading-tight mb-6 group-hover:translate-x-1 transition-transform duration-500">
                    混沌なき<br />実行。
                  </h3>
                  <p className="text-base text-muted-foreground font-medium tracking-wide group-hover:text-foreground transition-colors duration-500">
                    Execution without chaos.
                  </p>
                </div>
                <span className="hidden md:block text-[180px] leading-none font-bold text-foreground/[0.02] absolute bottom-[-40px] right-2 select-none pointer-events-none group-hover:text-foreground/[0.05] transition-colors duration-500">02</span>
              </div>

              {/* Item 03 */}
              <div className="group pt-8 md:pl-10 min-h-[280px] flex flex-col justify-between relative transition-all duration-500 hover:bg-zinc-50/80">
                <div className="relative z-10">
                  <span className="text-xs font-bold tracking-[0.2em] text-primary/60 uppercase mb-6 block group-hover:text-primary transition-colors">03 - Asset</span>
                  <h3 className="text-4xl md:text-5xl font-extrabold tracking-tighter leading-tight mb-6 group-hover:translate-x-1 transition-transform duration-500">
                    成果を、<br />資産にする。
                  </h3>
                  <p className="text-base text-muted-foreground font-medium tracking-wide group-hover:text-foreground transition-colors duration-500">
                    Results that remain.
                  </p>
                </div>
                <span className="hidden md:block text-[180px] leading-none font-bold text-foreground/[0.02] absolute bottom-[-40px] right-2 select-none pointer-events-none group-hover:text-foreground/[0.05] transition-colors duration-500">03</span>
              </div>
            </div>
          </ScrollReveal>
        </div>
      </section>



      {/* 4. PROCESS OF TRANSFORMATION */}
      <section className="py-24 md:py-32 px-6 border-b border-border/40 relative overflow-hidden bg-zinc-50/50">
        <div className="max-w-screen-xl mx-auto relative z-10">
          <div className="mb-24 text-center md:text-left">
            <h2 className="text-4xl md:text-7xl font-extrabold tracking-tighter mb-6 leading-[1.1]">変革の<br />プロセス。</h2>
            <p className="text-muted-foreground font-medium tracking-wider">The Process of Transformation</p>
          </div>

          <div className="relative max-w-4xl mx-auto">
            {/* Vertical Line */}
            <div className="absolute left-[20px] md:left-1/2 top-0 bottom-0 w-px bg-border -z-10 md:-translate-x-1/2" />

            {[
              { step: "01", title: "戦略設計", sub: "採用が「感覚」から「言語」になる", align: "left" },
              { step: "02", title: "実行＆仕組み化", sub: "属人性が「仕組み」に変わる", align: "right" },
              { step: "03", title: "移管＆自走", sub: "外注が不要になる", align: "left" }
            ].map((item, i) => (
              <ScrollReveal key={i} delay={i * 0.2}>
                <div className={`flex flex-col md:flex-row items-center gap-8 md:gap-24 mb-20 md:mb-32 last:mb-0 ${item.align === "right" ? "md:flex-row-reverse" : ""
                  }`}>

                  {/* Step Number Circle (Center Anchor) */}
                  <div className="flex-shrink-0 relative z-10 w-10 h-10 rounded-full bg-foreground text-background flex items-center justify-center font-bold text-sm tracking-widest border-4 border-zinc-50 outline outline-1 outline-border">
                    {item.step}
                  </div>

                  {/* Content Box */}
                  <div className={`flex-1 text-left ${item.align === "right" ? "md:text-left" : "md:text-right"}`}>
                    <h3 className="text-3xl md:text-5xl font-extrabold tracking-tight mb-4 leading-tight">
                      {item.title}
                    </h3>
                    <p className="text-lg text-muted-foreground font-medium">
                      {item.sub}
                    </p>
                  </div>

                  {/* Spacer for opposite side to balance flex */}
                  <div className="flex-1 hidden md:block" />

                </div>
              </ScrollReveal>
            ))}
          </div>

          <div className="mt-32 text-center">
            <Link href="/process" className="inline-flex items-center gap-3 text-sm font-bold tracking-[0.2em] text-muted-foreground hover:text-primary transition-colors group">
              <span className="border-b border-transparent group-hover:border-primary pb-0.5 transition-all">ドキュメントを見る</span>
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </Link>
          </div>
        </div>
      </section>

      {/* 5. SERVICES OVERVIEW */}
      <ServicesSection />

      {/* 6. NEWS */}
      <NewsSection />

      {/* 7. PHILOSOPHY */}
      <section className="py-20 md:py-32 px-6 relative overflow-hidden text-white">
        <Image
          src="https://images.unsplash.com/photo-1556761175-4b46a572b786?auto=format&fit=crop&q=80&w=2000"
          alt="Philosophy"
          fill
          className="object-cover"
        />
        {/* Darker overlay for better contrast */}
        <div className="absolute inset-0 bg-black/70 backdrop-blur-[2px]" />

        <div className="max-w-5xl mx-auto text-center relative z-10">
          <ScrollReveal>
            <span className="inline-block border border-white/30 px-4 py-1.5 rounded-full text-xs font-bold tracking-[0.2em] mb-8 uppercase backdrop-blur-sm">Philosophy</span>
            <p className="text-3xl md:text-6xl font-extrabold leading-tight tracking-tight mb-8 md:mb-12">
              挑戦の価値と面白さを<br className="md:hidden" />
              <span className="text-white relative inline-block">
                最大化する
                <span className="absolute bottom-1 left-0 w-full h-3 bg-white/20 -z-10 -rotate-1"></span>
              </span>
            </p>
            <p className="text-lg md:text-2xl text-white/90 leading-relaxed mb-10 md:mb-16 font-medium">
              挑戦する人の潜在力を最大限に引き出す場所。<br />
              それがエバンティアの理想です。
            </p>
            <Link href="/about" className="inline-flex items-center gap-4 text-sm font-bold tracking-[0.2em] px-10 py-5 border border-white/40 hover:bg-white hover:text-black hover:border-white transition-all duration-300">
              私たちの哲学について
            </Link>
          </ScrollReveal>
        </div>
      </section>

      {/* 8. RECRUIT */}
      <RecruitSection />

      {/* 9. CTA */}
      <section className="py-24 md:py-32 bg-white px-6 border-t border-zinc-200 relative overflow-hidden">
        {/* Decorative Background Text (Marquee-like static) */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full select-none pointer-events-none opacity-[0.03]">
          <span className="text-[12vw] font-black whitespace-nowrap leading-none text-black tracking-tighter">
            LET'S CREATE FUTURE
          </span>
        </div>

        <div className="max-w-3xl mx-auto text-center relative z-10">
          <span className="inline-block text-xs font-bold tracking-[0.3em] text-primary uppercase mb-8">Let's Create Future</span>

          <h2 className="text-4xl md:text-6xl font-extrabold tracking-tight mb-8 leading-tight text-zinc-900">
            未来を、<br className="md:hidden" />共に創る。
          </h2>

          <p className="text-lg md:text-xl text-zinc-600 font-medium leading-relaxed mb-12">
            貴社の成長を加速させるパートナーとして。<br className="hidden md:block" />
            まずはカジュアルにお話ししませんか？
          </p>

          <Link href="/contact" className="group inline-flex items-center justify-center px-12 py-6 bg-black text-white text-sm font-bold tracking-[0.2em] hover:bg-primary transition-all duration-300 relative overflow-hidden rounded-full">
            <span className="relative z-10">お問い合わせ</span>
            <div className="absolute inset-0 bg-primary translate-y-full group-hover:translate-y-0 transition-transform duration-300 ease-in-out" />
          </Link>
        </div>
      </section>

    </main>
  );
}
