import Image from "next/image";
import { PageHeader } from "@/components/ui/PageHeader";
import { ScrollReveal } from "@/components/ui/ScrollReveal";

export const metadata = {
    title: "Message | 代表挨拶",
    description: "エバンティア代表取締役 新井淳平からのメッセージ。",
};

export default function MessagePage() {
    return (
        <div className="bg-white pb-40 text-black">
            <PageHeader title="MESSAGE" subtitle="代表挨拶" />

            <div className="container-custom max-w-5xl py-24">
                <div className="flex flex-col md:flex-row gap-16 md:gap-24 items-start">
                    <ScrollReveal className="w-full md:w-1/3">
                        <div className="aspect-[3/4] bg-gray-200 rounded-2xl relative overflow-hidden group">
                            <Image
                                src="https://images.unsplash.com/photo-1560250097-0b93528c311a?auto=format&fit=crop&q=80&w=800"
                                alt="CEO Portrait"
                                fill
                                className="object-cover grayscale group-hover:grayscale-0 transition-all duration-700"
                            />
                        </div>
                        <div className="mt-6">
                            <h3 className="text-2xl font-bold">新井 淳平</h3>
                            <p className="text-sm font-mono text-gray-500 mt-1">Junpei Arai / CEO</p>
                        </div>
                    </ScrollReveal>

                    <ScrollReveal delay={0.2} className="w-full md:w-2/3">
                        <h2 className="text-3xl md:text-5xl font-black leading-tight mb-12">
                            「採用」を変えれば、<br />
                            未来はもっと面白くなる。
                        </h2>

                        <div className="space-y-8 text-lg font-medium leading-loose text-gray-600">
                            <p>
                                現代のビジネス環境において、企業の成長を支える重要な要素は「人」です。
                                テクノロジーの進化により、プロダクトやサービスは急速に変化するようになりました。
                                だからこそ、それを生み出し、改善し、顧客に届ける「組織の力」が大切になっています。
                            </p>
                            <p>
                                私たちエバンティアは、単なる「人手不足の解消」をご支援しているのではありません。
                                貴社が描くビジョンを実現するために必要な「強いチーム」を共に創り上げる。
                                それが私たちのミッションです。
                            </p>
                            <p>
                                「自走」を目標に掲げるのは、私たちの支援が終わった後も、
                                貴社の組織自体が成長し続ける仕組みを残したいと考えているからです。
                            </p>
                            <p>
                                すべての企業と人材に、最適な出会いを。
                                私たち自身も、常に成長し続ける存在でありたいと考えています。
                            </p>
                        </div>

                        <div className="mt-16 pt-16 border-t border-black">
                            <img src="/signature.png" alt="Signature" className="h-20 opacity-50" /> {/* Placeholder */}
                        </div>
                    </ScrollReveal>
                </div>
            </div>
        </div>
    );
}
