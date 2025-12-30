import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { ScrollReveal } from "@/components/ui/ScrollReveal";

export const metadata = {
    title: "Contact | EVANTIA",
    description: "対話から始めませんか。",
};

export default function ContactPage() {
    return (
        <main className="bg-background min-h-screen pt-40 pb-40 px-6">
            <div className="max-w-screen-xl mx-auto">

                <ScrollReveal>
                    <div className="mb-24 border-b border-border/40 pb-12">
                        <h1 className="text-4xl md:text-6xl font-black tracking-tighter uppercase mb-4">
                            Get in Touch.
                        </h1>
                        <p className="text-muted-foreground font-medium tracking-wide">
                            まずは対話から始めませんか。
                        </p>
                    </div>
                </ScrollReveal>

                <div className="grid grid-cols-1 lg:grid-cols-12 gap-20">
                    {/* Left: Context & Anxieties */}
                    <div className="lg:col-span-5">
                        <ScrollReveal delay={0.1}>
                            <h3 className="text-lg font-bold mb-8">このような相談を受けています</h3>
                            <ul className="space-y-6">
                                {[
                                    "採用が属人化している",
                                    "戦略と実行が分断されている",
                                    "外注に依存している",
                                    "母集団形成がうまくいかない",
                                    "採用ブランディングを見直したい"
                                ].map((item, i) => (
                                    <li key={i} className="flex items-center gap-4 text-muted-foreground font-medium border-b border-border/50 pb-4 last:border-0">
                                        <span className="w-1.5 h-1.5 bg-foreground rounded-full" />
                                        {item}
                                    </li>
                                ))}
                            </ul>

                            <div className="mt-16 text-sm text-foreground/60 leading-relaxed">
                                <p>
                                    具体的な依頼内容が決まっていなくても構いません。<br />
                                    現状の課題感や、理想の状態についてお聞かせください。
                                </p>
                            </div>
                        </ScrollReveal>
                    </div>

                    {/* Right: Anxiety-free Form */}
                    <div className="lg:col-span-7">
                        <ScrollReveal delay={0.2}>
                            <form className="space-y-8 bg-zinc-50 p-8 md:p-12 rounded-none border border-border/50">
                                <div className="grid grid-cols-1 gap-8">
                                    <div>
                                        <label htmlFor="company" className="block text-xs font-black uppercase tracking-widest mb-3">Company Name</label>
                                        <input type="text" id="company" className="w-full bg-background border border-border/60 p-4 font-medium focus:outline-none focus:border-primary transition-colors rounded-none placeholder:text-muted-foreground/30" placeholder="御社名" />
                                    </div>
                                    <div>
                                        <label htmlFor="email" className="block text-xs font-black uppercase tracking-widest mb-3">Email Address</label>
                                        <input type="email" id="email" className="w-full bg-background border border-border/60 p-4 font-medium focus:outline-none focus:border-primary transition-colors rounded-none placeholder:text-muted-foreground/30" placeholder="メールアドレス" />
                                    </div>
                                    <div>
                                        <label htmlFor="content" className="block text-xs font-black uppercase tracking-widest mb-3">Consultation Content</label>
                                        <textarea id="content" rows={6} className="w-full bg-background border border-border/60 p-4 font-medium focus:outline-none focus:border-primary transition-colors rounded-none placeholder:text-muted-foreground/30" placeholder="ご相談内容（簡単で構いません）"></textarea>
                                    </div>
                                </div>

                                <div className="pt-4 text-right">
                                    <button type="submit" className="inline-flex items-center gap-4 bg-foreground text-background px-10 py-4 text-sm font-black tracking-widest uppercase hover:bg-primary transition-colors">
                                        Send Request <ArrowRight className="w-4 h-4" />
                                    </button>
                                </div>
                            </form>
                        </ScrollReveal>
                    </div>
                </div>

            </div>
        </main>
    );
}
