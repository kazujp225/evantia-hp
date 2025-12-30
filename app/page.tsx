import Link from "next/link";
import Image from "next/image";
import { ArrowRight } from "lucide-react";
import { cn } from "@/lib/utils";
import { ScrollReveal } from "@/components/ui/ScrollReveal";
import { HeroSlider } from "@/components/hero/HeroSlider";

export default function Home() {
  return (
    <main className="bg-background text-foreground overflow-x-hidden">

      {/* 1. FIRST VIEW - Hero Slider Restored */}
      <HeroSlider />

      {/* 2. VALUE SUMMARY */}
      <section className="py-32 md:py-48 px-6 border-b border-border/40">
        <div className="max-w-screen-xl mx-auto">
          <ScrollReveal>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-12 md:gap-0 border-t border-border">
              {/* Item 01 */}
              <div className="group pt-12 md:pr-12 md:border-r border-border min-h-[400px] flex flex-col justify-between relative transition-colors hover:bg-zinc-50/50">
                <div className="relative z-10">
                  <span className="text-sm font-black tracking-widest text-primary uppercase mb-6 block">01</span>
                  <h3 className="text-5xl md:text-7xl font-black tracking-tighter leading-[0.9] mb-6 group-hover:translate-x-2 transition-transform duration-500">
                    Strategy<br />before action.
                  </h3>
                  <p className="text-sm text-muted-foreground font-bold tracking-wide group-hover:text-foreground transition-colors duration-500">
                    行動の前に、戦略を。
                  </p>
                </div>
                <span className="text-[150px] md:text-[200px] leading-none font-black text-foreground/5 absolute bottom-[-40px] right-0 md:right-4 select-none pointer-events-none group-hover:text-foreground/10 transition-colors duration-500">01</span>
              </div>

              {/* Item 02 */}
              <div className="group pt-12 md:px-12 md:border-r border-border min-h-[400px] flex flex-col justify-between relative transition-colors hover:bg-zinc-50/50">
                <div className="relative z-10">
                  <span className="text-sm font-black tracking-widest text-primary uppercase mb-6 block">02</span>
                  <h3 className="text-5xl md:text-7xl font-black tracking-tighter leading-[0.9] mb-6 group-hover:translate-x-2 transition-transform duration-500">
                    Execution<br />without chaos.
                  </h3>
                  <p className="text-sm text-muted-foreground font-bold tracking-wide group-hover:text-foreground transition-colors duration-500">
                    混沌なき実行。
                  </p>
                </div>
                <span className="text-[150px] md:text-[200px] leading-none font-black text-foreground/5 absolute bottom-[-40px] right-0 md:right-4 select-none pointer-events-none group-hover:text-foreground/10 transition-colors duration-500">02</span>
              </div>

              {/* Item 03 */}
              <div className="group pt-12 md:pl-12 min-h-[400px] flex flex-col justify-between relative transition-colors hover:bg-zinc-50/50">
                <div className="relative z-10">
                  <span className="text-sm font-black tracking-widest text-primary uppercase mb-6 block">03</span>
                  <h3 className="text-5xl md:text-7xl font-black tracking-tighter leading-[0.9] mb-6 group-hover:translate-x-2 transition-transform duration-500">
                    Results<br />that remain.
                  </h3>
                  <p className="text-sm text-muted-foreground font-bold tracking-wide group-hover:text-foreground transition-colors duration-500">
                    成果を、資産にする。
                  </p>
                </div>
                <span className="text-[150px] md:text-[200px] leading-none font-black text-foreground/5 absolute bottom-[-40px] right-0 md:right-4 select-none pointer-events-none group-hover:text-foreground/10 transition-colors duration-500">03</span>
              </div>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* 3. PROVEN IMPACT */}
      <section className="py-32 md:py-48 px-6 border-b border-border/40 bg-zinc-50/50">
        <div className="max-w-screen-xl mx-auto">
          <div className="flex items-baseline justify-between mb-24">
            <h2 className="text-sm font-black tracking-[0.4em] uppercase">Proven Impact</h2>
          </div>

          <div className="grid grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-24">
            {[
              { label: "Client Retention", value: "98%" },
              { label: "Hiring Success", value: "300+" },
              { label: "Cost Reduction", value: "40%" },
              { label: "Time Saved", value: "200h" }
            ].map((stat, i) => (
              <ScrollReveal key={i} delay={i * 0.1}>
                <div className="flex flex-col gap-4">
                  <span className="text-6xl md:text-9xl font-black tracking-tighter font-serif">
                    {stat.value}
                  </span>
                  <span className="text-sm font-bold tracking-widest text-muted-foreground uppercase">
                    {stat.label}
                  </span>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* 4. PROCESS OF TRANSFORMATION */}
      <section className="py-32 md:py-48 px-6 border-b border-border/40 relative overflow-hidden">
        {/* Background Hint Image */}
        <div className="absolute right-0 top-0 w-1/3 h-full opacity-10 pointer-events-none hidden md:block">
          <Image
            src="https://images.unsplash.com/photo-1531482615713-2afd69097998?auto=format&fit=crop&q=80&w=1600"
            alt="Process"
            fill
            className="object-cover opacity-60"
          />
          <div className="absolute inset-0 bg-gradient-to-l from-transparent to-background" />
        </div>

        <div className="max-w-screen-xl mx-auto relative z-10">
          <div className="mb-32">
            <h2 className="text-5xl md:text-8xl font-black tracking-tighter uppercase mb-8 leading-[0.9]">Process of<br />Transformation.</h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-12 md:gap-0 relative">
            {/* Horizontal Line for Desktop */}
            <div className="hidden md:block absolute top-[2.5rem] left-0 w-full h-px bg-border -z-10" />

            {[
              { step: "01", title: "Strategy & Design", desc: "採用が「感覚」から「言語」になる" },
              { step: "02", title: "Execution & System", desc: "属人性が「仕組み」に変わる" },
              { step: "03", title: "Transfer & Self-Run", desc: "外注が不要になる" }
            ].map((item, i) => (
              <ScrollReveal key={i} delay={i * 0.2}>
                <div className="bg-background pr-10">
                  <span className="inline-block px-3 py-1 bg-foreground text-background text-sm font-black tracking-widest mb-10">
                    {item.step}
                  </span>
                  <h3 className="text-3xl md:text-5xl font-black uppercase tracking-widest mb-6 leading-tight group-hover:text-primary transition-colors">
                    {item.title}
                  </h3>
                  <p className="text-base text-foreground/70 font-medium">
                    {item.desc}
                  </p>
                </div>
              </ScrollReveal>
            ))}
          </div>

          <div className="mt-32 text-right">
            <Link href="/process" className="inline-flex items-center gap-4 text-sm font-black tracking-[0.2em] uppercase border-b border-transparent hover:border-foreground pb-1 transition-all text-muted-foreground hover:text-foreground">
              View Methodology <ArrowRight className="w-5 h-5" />
            </Link>
          </div>
        </div>
      </section>

      {/* 5. SERVICES OVERVIEW */}
      <section className="py-32 md:py-48 px-6 border-b border-border/40">
        <div className="max-w-screen-xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-16">
          <div className="lg:col-span-4">
            <h2 className="text-[10px] font-black tracking-[0.4em] uppercase mb-8">Services</h2>
            <p className="text-5xl md:text-8xl font-black tracking-tight leading-[0.9] uppercase">
              What we do.
            </p>
          </div>

          <div className="lg:col-span-8 flex flex-col gap-16">
            {[
              {
                title: "Strategy Design",
                jp: "採用戦略を設計する",
                sub: "採用を、事業の意思決定にする",
                image: "https://images.unsplash.com/photo-1552664730-d307ca884978?auto=format&fit=crop&q=80&w=1600"
              },
              {
                title: "Execution",
                jp: "実行を担う",
                sub: "現場を止めずに回しきる",
                image: "https://images.unsplash.com/photo-1573497620053-ea5300f94f21?auto=format&fit=crop&q=80&w=1600"
              },
              {
                title: "Systematization",
                jp: "仕組みにする",
                sub: "属人性を残さない",
                image: "https://images.unsplash.com/photo-1556761175-5973dc0f32e7?auto=format&fit=crop&q=80&w=1600"
              }
            ].map((service, i) => (
              <ScrollReveal key={i} delay={i * 0.1}>
                <Link href="/service" className="group block relative h-[400px] md:h-[500px] overflow-hidden w-full">
                  {/* Background Image */}
                  <Image
                    src={service.image}
                    alt={service.jp}
                    fill
                    className="object-cover transition-transform duration-1000 group-hover:scale-110"
                  />
                  {/* Dark Overlay */}
                  <div className="absolute inset-0 bg-black/60 group-hover:bg-black/40 transition-colors duration-500" />

                  {/* Content */}
                  <div className="relative z-10 h-full flex flex-col justify-end p-8 md:p-12 text-white">
                    <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 border-t border-white/40 pt-8 group-hover:border-white transition-colors duration-500">
                      <div>
                        <span className="text-xs font-black tracking-widest uppercase text-white/70 block mb-4">
                          {service.title}
                        </span>
                        <h3 className="text-3xl md:text-6xl font-black mb-4 leading-none">
                          {service.jp}
                        </h3>
                        <p className="text-base md:text-xl font-medium text-white/80">
                          {service.sub}
                        </p>
                      </div>
                      <ArrowRight className="w-8 h-8 text-white/50 group-hover:text-white transition-colors" />
                    </div>
                  </div>
                </Link>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* 6. PHILOSOPHY */}
      <section className="py-40 md:py-60 px-6 relative overflow-hidden text-white">
        <Image
          src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f?auto=format&fit=crop&q=80&w=2000"
          alt="Philosophy"
          fill
          className="object-cover"
        />
        <div className="absolute inset-0 bg-black/70" />

        <div className="max-w-4xl mx-auto text-center relative z-10">
          <ScrollReveal>
            <p className="text-4xl md:text-7xl font-black leading-tight tracking-wide mb-16">
              採用は「人を集めること」ではない。<br />
              <span className="text-primary">未来に責任を持つことだ。</span>
            </p>
            <p className="text-lg md:text-2xl text-gray-300 leading-loose mb-20 font-bold">
              私たちは、短期的な成果よりも、<br className="hidden md:block" />
              組織に残る判断と仕組みを重視します。
            </p>
            <Link href="/about" className="inline-flex items-center gap-4 text-sm font-black tracking-[0.2em] uppercase px-10 py-5 border border-white hover:bg-white hover:text-black transition-all">
              About Philosophy
            </Link>
          </ScrollReveal>
        </div>
      </section>

      {/* 7. CTA */}
      <section className="py-32 bg-foreground text-background px-6">
        <div className="max-w-screen-xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-20 items-end">
          <div>
            <h2 className="text-[10px] font-black tracking-[0.4em] uppercase text-background/60 mb-8">Get in Touch</h2>
            <p className="text-5xl md:text-8xl font-black tracking-tighter leading-[0.9] mb-12">
              Dialogue<br />
              for Future.
            </p>
            <p className="text-background/80 font-bold text-lg md:text-xl leading-relaxed">
              自社の採用に、まだ伸び代があると感じている方へ。<br />
              まずは対話から始めませんか。
            </p>
          </div>
          <div className="flex justify-end">
            <Link href="/contact" className="inline-flex items-center justify-center w-full md:w-auto px-16 py-8 bg-background text-foreground text-sm font-black tracking-[0.2em] uppercase hover:bg-primary hover:text-white transition-all">
              Start Consultation
            </Link>
          </div>
        </div>
      </section>

    </main>
  );
}
