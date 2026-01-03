import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { ScrollReveal } from "@/components/ui/ScrollReveal";
import { PageHeader } from "@/components/ui/PageHeader";

export const metadata = {
    title: "Contact | EVANTIA",
    description: "対話から始めませんか。",
};

export default function ContactPage() {
    return (
        <div className="bg-bg-alt pb-40">
            <PageHeader title="CONTACT" subtitle="お問い合わせ" />

            <div className="max-w-4xl mx-auto px-6 -mt-10 relative z-20">
                <div className="bg-white p-8 md:p-16 shadow-[0_20px_40px_-15px_rgba(0,0,0,0.1)] border-t-4 border-[var(--color-brand-accent)]">
                    <ScrollReveal>
                        <div className="mb-12 text-center">
                            <h2 className="text-2xl font-bold mb-4">Get in Touch</h2>
                            <p className="text-muted-foreground font-medium">採用課題のご相談、お仕事のご依頼など、<br />お気軽にお問い合わせください。</p>
                        </div>

                        <form className="space-y-8">
                            <div className="grid grid-cols-1 gap-8">
                                <div>
                                    <label htmlFor="company" className="block text-xs font-bold tracking-widest mb-3 uppercase text-[var(--color-brand-accent)]">Company</label>
                                    <input type="text" id="company" className="w-full bg-zinc-50 border-b border-border p-4 font-bold focus:outline-none focus:border-[var(--color-brand-accent)] focus:bg-white transition-colors rounded-none placeholder:text-muted-foreground/30" placeholder="御社名" />
                                </div>
                                <div>
                                    <label htmlFor="email" className="block text-xs font-bold tracking-widest mb-3 uppercase text-[var(--color-brand-accent)]">Email</label>
                                    <input type="email" id="email" className="w-full bg-zinc-50 border-b border-border p-4 font-bold focus:outline-none focus:border-[var(--color-brand-accent)] focus:bg-white transition-colors rounded-none placeholder:text-muted-foreground/30" placeholder="メールアドレス" />
                                </div>
                                <div>
                                    <label htmlFor="content" className="block text-xs font-bold tracking-widest mb-3 uppercase text-[var(--color-brand-accent)]">Detail</label>
                                    <textarea id="content" rows={6} className="w-full bg-zinc-50 border-b border-border p-4 font-bold focus:outline-none focus:border-[var(--color-brand-accent)] focus:bg-white transition-colors rounded-none placeholder:text-muted-foreground/30" placeholder="ご相談内容"></textarea>
                                </div>
                            </div>

                            <div className="pt-8 text-center">
                                <button type="submit" className="inline-flex items-center gap-4 bg-[var(--color-primary)] text-white px-12 py-5 text-sm font-black tracking-widest hover:bg-[var(--color-brand-accent)] transition-all duration-300 shadow-lg hover:shadow-[var(--color-brand-accent)]/40 hover:-translate-y-1">
                                    送信する <ArrowRight className="w-4 h-4" />
                                </button>
                            </div>
                        </form>
                    </ScrollReveal>
                </div>
            </div>

            <div className="max-w-4xl mx-auto px-6 mt-20">
                <ScrollReveal delay={0.2}>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8 text-center md:text-left">
                        <div className="p-8 border border-border bg-white">
                            <h3 className="font-bold mb-2">Office</h3>
                            <p className="text-sm text-muted-foreground leading-relaxed">
                                〒541-0047<br />大阪府大阪市中央区淡路町1-4-9<br />TPR北浜ビル 6F
                            </p>
                        </div>
                        <div className="p-8 border border-border bg-white">
                            <h3 className="font-bold mb-2">Direct Contact</h3>
                            <p className="text-sm text-muted-foreground leading-relaxed">
                                info@evantia-co.jp<br />
                                090-2393-2820
                            </p>
                        </div>
                    </div>
                </ScrollReveal>
            </div>
        </div>
    );
}
