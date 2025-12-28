import Link from "next/link";
import { ArrowRight } from "lucide-react";
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

      {/* 2. Philosophy Section - Editorial Style */}
      <section className="py-32 md:py-48 bg-secondary/30 relative z-10">
        <div className="container-custom">
          <div className="grid grid-cols-1 md:grid-cols-12 gap-12">
            {/* Title Column */}
            <div className="md:col-span-4">
              <ScrollReveal>
                <h2 className="text-sm font-bold tracking-[0.2em] text-primary mb-6 flex items-center gap-4">
                  <span className="w-8 h-[1px] bg-primary"></span>
                  PHILOSOPHY
                </h2>
                <p className="text-4xl md:text-5xl font-black leading-tight feature-font-palt font-serif italic">
                  Fairness<br />
                  & Growth
                </p>
              </ScrollReveal>
            </div>

            {/* Context Column */}
            <div className="md:col-span-8 md:pl-12 pt-8 md:pt-20">
              <ScrollReveal delay={0.2}>
                <h3 className="text-2xl md:text-3xl font-bold leading-relaxed mb-12 feature-font-palt">
                  採用は「人を集めること」ではなく、<br className="hidden md:block" />
                  <span className="bg-gradient-to-r from-primary/20 to-transparent pr-4">「未来をつくること」。</span>
                </h3>
                <div className="max-w-xl space-y-8 text-muted-foreground font-medium leading-loose text-lg">
                  <p>
                    顧客や社会や仲間のために最良を追求したい人が<br />
                    モチベーション高く働ける組織でありたい。
                  </p>
                  <p>
                    挑戦には痛みも伴うが、その過程こそが人を成長させ、成果へとつながる。<br />
                    だからこそ、公平な裁量と誠実な基準のもとで、<br />
                    <strong className="text-foreground border-b border-primary/50 pb-1">”挑戦する人の潜在力を最大限に引き出す場所”</strong>
                    でいたい。
                  </p>
                  <p>
                    それがエバンティアの理想です。
                  </p>
                </div>

                <div className="mt-16">
                  <Link href="/about/message" className="group inline-flex items-center gap-2 text-primary font-bold px-8 py-4 bg-white border border-border rounded-full hover:bg-primary hover:text-white transition-all shadow-md">
                    View Message <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform" />
                  </Link>
                </div>
              </ScrollReveal>
            </div>
          </div>
        </div>
      </section>

      {/* 3. Interactive Service List (Reverted) */}
      <InteractiveServiceList />

      {/* 4. Process - How We Build - Keeping existing but ensuring spacing */}
      <div className="py-20">
        <ProcessSection />
      </div>

      {/* 5. Impact - Keeping existing */}
      <ImpactSection />

      {/* 6. News - Minimalist List */}
      <section className="py-32 border-t border-border/50">
        <div className="container-custom">
          <div className="flex flex-col md:flex-row justify-between items-end mb-20">
            <div>
              <h2 className="text-4xl font-black mb-4">Latest Updates</h2>
              <p className="text-muted-foreground">エバンティアの最新情報</p>
            </div>
            <Link href="/news" className="group flex items-center gap-2 font-bold text-sm mt-6 md:mt-0 px-4 py-2 hover:bg-secondary/50 rounded-lg transition-colors">
              VIEW ALL NEWS
              <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
            </Link>
          </div>

          <div className="space-y-8">
            {[
              { date: "2025.04.01", cat: "PRESS", title: "株式会社エバンティア、設立のお知らせ" },
              { date: "2025.04.15", cat: "EVENT", title: "「次世代の採用戦略」セミナー登壇のお知らせ" },
              { date: "2025.05.01", cat: "RECRUIT", title: "2026年度新卒採用のエントリー受付を開始しました" },
            ].map((news, i) => (
              <Link key={i} href="#" className="flex flex-col md:flex-row md:items-center py-8 border-b border-border/40 group hover:bg-secondary/20 transition-colors px-4 -mx-4 rounded-lg">
                <div className="md:w-1/4 mb-2 md:mb-0">
                  <span className="font-mono text-sm text-muted-foreground mr-6">{news.date}</span>
                  <span className="text-xs font-bold border border-border px-2 py-1 rounded-full uppercase tracking-wider">{news.cat}</span>
                </div>
                <div className="md:w-3/4 flex justify-between items-center">
                  <h3 className="text-lg md:text-xl font-bold group-hover:text-primary transition-colors line-clamp-1">
                    {news.title}
                  </h3>
                  <ArrowRight className="opacity-0 -translate-x-4 group-hover:opacity-100 group-hover:translate-x-0 transition-all text-primary" />
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
