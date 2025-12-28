import { PageHeader } from "@/components/ui/PageHeader";
import { ScrollReveal } from "@/components/ui/ScrollReveal";
import { ArrowRight, ArrowUpRight } from "lucide-react";
import Link from "next/link";

export const metadata = {
    title: "News | お知らせ",
    description: "アズライトからのお知らせ一覧。",
};

const NEWS = [
    {
        id: 1,
        date: "2024.01.05",
        cat: "RELEASE",
        title: "公式サイトをリニューアルいたしました",
        url: "#"
    },
    {
        id: 2,
        date: "2023.12.15",
        cat: "EVENT",
        title: "年末年始休業のお知らせ",
        url: "#"
    },
    {
        id: 3,
        date: "2023.11.01",
        cat: "MEDIA",
        title: "HR Tech Magazineにて弊社代表 新井のインタビューが掲載されました",
        url: "#"
    },
    {
        id: 4,
        date: "2023.10.01",
        cat: "RELEASE",
        title: "新サービス「採用ピッチ資料制作プラン」の提供を開始",
        url: "#"
    }
];

export default function NewsPage() {
    return (
        <div className="bg-white pb-40 text-black">
            <PageHeader title="NEWS" subtitle="お知らせ" />

            <section className="py-24">
                <div className="container-custom max-w-4xl">
                    <div className="flex flex-col border-t border-gray-200">
                        {NEWS.map((item, i) => (
                            <ScrollReveal key={i} delay={i * 0.05}>
                                <Link href={item.url} className="group flex flex-col md:flex-row md:items-center justify-between py-10 border-b border-gray-200 hover:bg-gray-50 transition-colors px-4">
                                    <div className="flex flex-col md:flex-row md:items-center gap-6 md:gap-12">
                                        <div className="flex items-center gap-4">
                                            <span className="font-mono text-sm text-gray-400">{item.date}</span>
                                            <span className={`text-[10px] font-bold px-2 py-1 rounded border ${item.cat === 'RELEASE' ? 'bg-black text-white border-black' : 'text-gray-500 border-gray-200'}`}>
                                                {item.cat}
                                            </span>
                                        </div>
                                        <h3 className="text-lg md:text-xl font-bold group-hover:text-primary transition-colors">
                                            {item.title}
                                        </h3>
                                    </div>
                                    <div className="mt-4 md:mt-0 opacity-0 group-hover:opacity-100 transition-opacity flex justify-end">
                                        <ArrowUpRight size={20} className="text-gray-400" />
                                    </div>
                                </Link>
                            </ScrollReveal>
                        ))}
                    </div>

                    <div className="mt-20 text-center">
                        <button className="px-12 py-4 border border-gray-200 hover:border-black rounded-full transition-all duration-300 text-sm font-bold tracking-widest hover:bg-black hover:text-white">
                            LOAD MORE
                        </button>
                    </div>
                </div>
            </section>
        </div>
    );
}
