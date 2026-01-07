import { ScrollReveal } from "@/components/ui/ScrollReveal";
import { PageHeader } from "@/components/ui/PageHeader";
import { ContactForm } from "@/components/contact/ContactForm";

import { Metadata } from "next";

export const metadata: Metadata = {
    title: "お問い合わせ",
    description: "採用課題のご相談、採用コンサルティング・RPO・スカウト代行のお見積もり依頼など、お気軽にお問い合わせください。株式会社エバンティアが貴社の採用課題解決をサポートします。",
    openGraph: {
        title: "お問い合わせ | 株式会社エバンティア",
        description: "採用課題のご相談、サービスのお見積もり依頼など、お気軽にお問い合わせください。",
    },
    alternates: {
        canonical: "/contact",
    },
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

                        <ContactForm />
                    </ScrollReveal>
                </div>
            </div>

            <div className="max-w-4xl mx-auto px-6 mt-20">
                <ScrollReveal delay={0.2}>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8 text-center md:text-left">
                        <div className="p-8 border border-border bg-white">
                            <h3 className="font-bold mb-2">Office</h3>
                            <p className="text-sm text-muted-foreground leading-relaxed">
                                〒541-0047<br />大阪府大阪市中央区淡路町1-4-9<br />TPR北浜ビル 601
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
