import Link from "next/link";
import { ArrowRight, ChevronRight, Check } from "lucide-react";
import { ScrollReveal } from "@/components/ui/ScrollReveal";
import { HeroSlider } from "@/components/hero/HeroSlider";
import { InteractiveServiceList } from "@/components/services/InteractiveServiceList";
import { ProcessSection } from "@/components/process/ProcessSection";
import { ImpactSection } from "@/components/impact/ImpactSection";

export default function Home() {
  return (
    <div className="overflow-hidden bg-white">
      {/* Full Screen Asymmetrical Slider */}
      <HeroSlider />

      {/* Corporate Philosophy */}
      <section className="py-24 bg-bg-alt border-y border-border">
        <div className="container-custom text-center max-w-4xl">
          <ScrollReveal>
            <h2 className="text-3xl font-bold mb-8">企業理念</h2>
            <p className="text-2xl md:text-3xl font-black leading-relaxed text-primary mb-8">
              採用は「人を集めること」ではなく、<br />
              「未来をつくること」。
            </p>
            <p className="text-text-main leading-loose font-medium">
              顧客や社会や仲間のために最良を追求したい人がモチベーション高く働ける組織でありたい。<br />
              挑戦には痛みも伴うが、その過程こそが人を成長させ、成果へとつながる。<br />
              だからこそ、公平な裁量と誠実な基準のもとで、<br />
              <span className="font-bold text-primary">”挑戦する人の潜在力を最大限に引き出す場所”</span>でいたい。<br />
              それがエバンティアの理想です。
            </p>
          </ScrollReveal>
        </div>
      </section>

      {/* Interactive Service List */}
      <InteractiveServiceList />

      {/* Process: How We Build Self-Running Teams */}
      <ProcessSection />

      {/* Impact: Proven Stats */}
      <ImpactSection />

      {/* Latest News */}
      <section className="py-24 border-t border-border">
        <div className="container-custom">
          <div className="flex justify-between items-end mb-12">
            <h2 className="text-2xl font-bold">Latest Updates</h2>
            <Link href="/news" className="text-sm font-bold text-primary hover:underline">View All</Link>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            {[1, 2, 3].map((i) => (
              <Link key={i} href="#" className="group">
                <div className="aspect-video bg-bg-alt rounded-lg mb-4 overflow-hidden relative">
                  {/* Placeholder Image */}
                  <div className="absolute inset-0 bg-gray-100 flex items-center justify-center text-gray-300 font-bold group-hover:bg-gray-200 transition-colors">
                    NEWS IMAGE
                  </div>
                </div>
                <p className="text-xs text-text-light font-mono mb-2">2026.01.05</p>
                <p className="text-xs font-bold text-primary mb-1">PRESS RELEASE</p>
                <h3 className="font-bold leading-relaxed group-hover:text-primary transition-colors">
                  株式会社エバンティア、設立のお知らせ
                </h3>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
