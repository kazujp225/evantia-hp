import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { cn } from "@/lib/utils";
import { ScrollReveal } from "@/components/ui/ScrollReveal";
import { HeroSlider } from "@/components/hero/HeroSlider";
import { InteractiveServiceList } from "@/components/services/InteractiveServiceList";
import { ImpactSection } from "@/components/impact/ImpactSection";
import { ProcessSection } from "@/components/process/ProcessSection";

export default function Home() {
  return (
    <div className="overflow-hidden bg-background relative">

      {/* 1. Full Screen Slider (Reverted) */}
      <HeroSlider />

      {/* 2. Philosophy Section - Architectural Asymmetry */}
      <section className="py-48 md:py-80 relative overflow-hidden bg-white">
        <div className="container-custom">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-y-24">

            {/* Title Block - Shifted down for rhythm */}
            <div className="lg:col-span-12 lg:mb-32">
              <ScrollReveal>
                <div className="flex items-baseline gap-10 border-b border-border pb-10">
                  <span className="text-[10px] font-black tracking-[0.8em] text-primary uppercase">01</span>
                  <h2 className="text-[10px] font-black tracking-[0.8em] text-muted-foreground uppercase">Philosophy</h2>
                </div>
              </ScrollReveal>
            </div>

            {/* Core Message - Asymmetric Column */}
            <div className="lg:col-span-7 lg:col-start-2">
              <ScrollReveal>
                <p className="text-6xl md:text-8xl lg:text-[10rem] font-black leading-[0.85] tracking-tighter font-serif italic text-black mb-20">
                  Fairness<br />
                  <span className="text-primary">&</span> Growth
                </p>
                <h3 className="text-3xl md:text-5xl font-black leading-tight mb-20 max-w-2xl">
                  採用は「人を集めること」ではなく、<br />
                  <span className="text-primary italic font-serif">Future Synergy</span> を生み出すこと。
                </h3>
              </ScrollReveal>
            </div>

            {/* Context Column - Staggered right */}
            <div className="lg:col-span-4 lg:col-start-9 lg:mt-64">
              <ScrollReveal delay={0.4} className="space-y-16">
                <div className="w-16 h-[2px] bg-primary mb-12" />
                <div className="space-y-10 text-muted-foreground text-lg font-medium leading-[2] tracking-wide">
                  <p>
                    単なる人材の調達は、ゴールではありません。
                  </p>
                  <p>
                    エバンティアは、クライアントと候補者が<br className="hidden lg:block" />
                    互いに高め合える「自走体制」の構築を一貫して支援します。
                  </p>
                  <p>
                    挑戦には痛みが伴いますが、それこそが成長の源泉。<br className="hidden lg:block" />
                    公平な裁量と誠実な基準のもとで、<br />
                    <strong className="text-black font-black">潜在力を最大限に引き出す場所</strong> を創ります。
                  </p>
                </div>

                <div className="pt-10">
                  <Link href="/about" className="group flex items-center gap-6">
                    <span className="text-[10px] font-black tracking-[0.4em] uppercase border-b border-black pb-2 group-hover:border-primary transition-all">Discover More</span>
                    <ArrowRight size={18} className="text-primary group-hover:translate-x-2 transition-transform" />
                  </Link>
                </div>
              </ScrollReveal>
            </div>

            {/* Decorative Static Element - Geometric Logic */}
            <div className="absolute top-1/2 right-[-5%] w-[40%] h-[1px] bg-border z-0 hidden lg:block" />
            <div className="absolute top-1/2 left-[-5%] w-[1px] h-[40%] bg-border z-0 hidden lg:block" />

          </div>
        </div>
      </section>

      {/* 4. Service Highlight - Clean Asymmetry */}
      <section className="py-48 bg-white border-y border-border overflow-hidden">
        <div className="container-custom">
          <div className="grid grid-cols-1 lg:grid-cols-12 items-center gap-24">
            <div className="lg:col-span-12">
              <ScrollReveal>
                <div className="flex items-baseline gap-10 border-b border-border pb-10 mb-32">
                  <span className="text-[10px] font-black tracking-[0.8em] text-primary uppercase">03</span>
                  <h2 className="text-[10px] font-black tracking-[0.8em] text-muted-foreground uppercase">Services</h2>
                </div>
              </ScrollReveal>
            </div>

            <div className="lg:col-span-6 lg:col-start-1">
              <ScrollReveal>
                <p className="text-5xl md:text-7xl font-black leading-[0.9] tracking-tighter uppercase font-serif mb-16">
                  Architecting<br />
                  <span className="text-primary italic">Sustainable</span><br />
                  Autonomy.
                </p>
              </ScrollReveal>
            </div>

            <div className="lg:col-span-5 lg:col-start-8">
              <ScrollReveal delay={0.2}>
                <InteractiveServiceList />
              </ScrollReveal>
            </div>
          </div>
        </div>
      </section>

      {/* 4. Process - How We Build - Keeping existing but ensuring spacing */}
      <div className="py-20 md:py-40">
        <ProcessSection />
      </div>

      {/* 5. Impact - Keeping existing */}
      <ImpactSection />

      {/* 3. Work Section - Structural Typographic Grid */}
      <section className="py-48 px-10 bg-white">
        <div className="container-custom">
          <div className="flex justify-between items-baseline mb-32 border-b border-border pb-10">
            <div className="flex items-baseline gap-10">
              <span className="text-[10px] font-black tracking-[0.8em] text-primary">02</span>
              <h2 className="text-[10px] font-black tracking-[0.8em] text-muted-foreground uppercase">Latest Updates</h2>
            </div>
            <Link href="/column" className="text-[10px] font-black tracking-[0.4em] text-black hover:text-primary transition-all uppercase border-b border-black pb-1">View Archives</Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-20 gap-y-32">
            {[1, 2, 3].map((i) => (
              <ScrollReveal key={i} delay={i * 0.1}>
                <Link href={`/column/${i}`} className="group block space-y-8">
                  <div className="aspect-[16/9] overflow-hidden bg-neutral-100 relative">
                    <div className="absolute inset-0 bg-black/5 group-hover:bg-transparent transition-colors duration-700" />
                    <img
                      src={`https://images.unsplash.com/photo-${i === 1 ? '1504384308090-c894fdcc538d' : i === 2 ? '1486312338219-ce68d2c6f44d' : '1519389950473-47ba0277781c'}?auto=format&fit=crop&q=80&w=800`}
                      className="w-full h-full object-cover grayscale brightness-110 contrast-100 transition-all duration-1000 group-hover:grayscale-0 group-hover:scale-105"
                      alt="Work"
                    />
                  </div>
                  <div className="space-y-4">
                    <div className="flex gap-4 text-[10px] font-black tracking-[0.2em] text-primary uppercase">
                      <span>Recruitment</span>
                      <span className="text-border">/</span>
                      <span>Dec 2025</span>
                    </div>
                    <h3 className="text-xl font-black leading-tight group-hover:text-primary transition-colors">
                      {i === 1
                        ? "エンジニア採用における『自走化』の重要性と、エバンティアが支援する仕組み作りについて"
                        : i === 2
                          ? "【導入事例】急成長スタートアップの採用チームをゼロから構築。3ヶ月で10名のエンジニア採用に成功。"
                          : "経営層と人事の『視点』を同期させる。強固な動機形成を生むための、一貫性のある採用シナリオとは。"
                      }
                    </h3>
                  </div>
                </Link>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
