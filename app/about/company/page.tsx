import { PageHeader } from "@/components/ui/PageHeader";
import { ScrollReveal } from "@/components/ui/ScrollReveal";

import { Metadata } from "next";

export const metadata: Metadata = {
    title: "会社情報",
    description: "株式会社エバンティアの会社概要。所在地：大阪府大阪市中央区淡路町1-4-9 TPR北浜ビル6F。採用コンサルティング・RPO・スカウト代行を提供する採用支援の専門企業です。",
    alternates: { canonical: "/about/company" },
};

export default function CompanyPage() {
    return (
        <div className="bg-white pb-40 text-black">
            <PageHeader title="COMPANY" subtitle="会社概要" />

            <div className="container-custom max-w-4xl py-24">
                <ScrollReveal>
                    <div className="border border-black p-8 md:p-16">
                        <div className="grid md:grid-cols-[200px_1fr] border-b border-gray-200 py-6">
                            <div className="font-bold text-sm tracking-widest text-gray-500 uppercase py-2">Company Name</div>
                            <div className="font-bold text-xl md:text-2xl">株式会社エバンティア (EVANTIA Inc.)</div>
                        </div>
                        <div className="grid md:grid-cols-[200px_1fr] border-b border-gray-200 py-6">
                            <div className="font-bold text-sm tracking-widest text-gray-500 uppercase py-2">Founded</div>
                            <div className="font-bold text-xl md:text-2xl">2026年 1月 5日<span className="block text-sm text-gray-500 mt-1">※現在、設立登記申請中です。</span></div>
                        </div>
                        <div className="grid md:grid-cols-[200px_1fr] border-b border-gray-200 py-6">
                            <div className="font-bold text-sm tracking-widest text-gray-500 uppercase py-2">Representative</div>
                            <div className="font-bold text-xl md:text-2xl">代表取締役　新井 淳平</div>
                        </div>
                        <div className="grid md:grid-cols-[200px_1fr] border-b border-gray-200 py-6">
                            <div className="font-bold text-sm tracking-widest text-gray-500 uppercase py-2">Director</div>
                            <div className="font-bold text-xl md:text-2xl">取締役　豊嶋 令</div>
                        </div>
                        <div className="grid md:grid-cols-[200px_1fr] border-b border-gray-200 py-6">
                            <div className="font-bold text-sm tracking-widest text-gray-500 uppercase py-2">Capital</div>
                            <div className="font-bold text-xl md:text-2xl">1000万円</div>
                        </div>
                        <div className="grid md:grid-cols-[200px_1fr] border-b border-gray-200 py-6">
                            <div className="font-bold text-sm tracking-widest text-gray-500 uppercase py-2">Business</div>
                            <div className="font-bold text-xl leading-relaxed">
                                採用コンサルティング事業<br />
                                採用実務アウトソーシング（RPO）事業<br />
                                ダイレクトリクルーティング支援事業<br />
                                採用ブランディング・クリエイティブ制作事業
                            </div>
                        </div>
                        <div className="grid md:grid-cols-[200px_1fr] border-b border-gray-200 py-6">
                            <div className="font-bold text-sm tracking-widest text-gray-500 uppercase py-2">Location</div>
                            <div className="font-bold text-xl leading-relaxed">
                                〒541-0047<br />
                                大阪府大阪市中央区淡路町1-4-9<br />
                                TPR北浜ビル 601
                            </div>
                        </div>
                        <div className="grid md:grid-cols-[200px_1fr] py-6">
                            <div className="font-bold text-sm tracking-widest text-gray-500 uppercase py-2">Corporate Number</div>
                            <div className="font-bold text-xl md:text-2xl">1200-01-283240</div>
                        </div>
                    </div>
                </ScrollReveal>

                {/* Map */}
                <ScrollReveal delay={0.2} className="mt-20">
                    <div className="h-[400px] rounded-2xl relative overflow-hidden">
                        <iframe
                            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3280.7089376395833!2d135.50361!3d34.6891!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x6000e71f8e3e6b7d%3A0x8e3e6b7d8e3e6b7d!2z44CSNTU0MS0wMDQ3IOWkp-mYquW6nOWkp-mYquW4guS4reWkruWMuua3oei3r-eUujEtNC05IFRQSUQ5NOWMl-a1nOODk-ODqw!5e0!3m2!1sja!2sjp!4v1704000000000!5m2!1sja!2sjp"
                            width="100%"
                            height="100%"
                            style={{ border: 0 }}
                            allowFullScreen
                            loading="lazy"
                            referrerPolicy="no-referrer-when-downgrade"
                            title="株式会社エバンティア 所在地"
                            className="grayscale hover:grayscale-0 transition-all duration-500"
                        />
                    </div>
                </ScrollReveal>
            </div>
        </div>
    );
}
