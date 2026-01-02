import { PageHeader } from "@/components/ui/PageHeader";
import { ScrollReveal } from "@/components/ui/ScrollReveal";

export const metadata = {
    title: "Company | 会社概要",
    description: "株式会社エバンティアの会社概要。",
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
                            <div className="font-bold text-xl md:text-2xl">2026年 1月 5日</div>
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
                            <div className="font-bold text-xl md:text-2xl">500万円</div>
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
                                <div className="mb-4">
                                    <span className="block text-sm text-gray-400 mb-1">TOKYO HEADQUARTER</span>
                                    〒100-0004 東京都千代田区大手町1-2-3
                                </div>
                                <div>
                                    <span className="block text-sm text-gray-400 mb-1">OSAKA BRANCH</span>
                                    〒541-0047 大阪府大阪市中央区淡路町1-4-9 TPR北浜ビル6F
                                </div>
                            </div>
                        </div>
                        <div className="grid md:grid-cols-[200px_1fr] border-b border-gray-200 py-6">
                            <div className="font-bold text-sm tracking-widest text-gray-500 uppercase py-2">Bank</div>
                            <div className="font-bold text-xl md:text-2xl">三菱UFJ銀行、三井住友銀行</div>
                        </div>
                    </div>
                </ScrollReveal>

                {/* Map */}
                <ScrollReveal delay={0.2} className="mt-20 h-[400px] bg-gray-200 rounded-2xl relative overflow-hidden group">
                    {/* Placeholder Map Image or Embed */}
                    <div className="absolute inset-0 flex items-center justify-center text-gray-400 font-bold bg-gray-100 group-hover:bg-gray-200 transition-colors">
                        GOOGLE MAP EMBED AREA
                    </div>
                </ScrollReveal>
            </div>
        </div>
    );
}
