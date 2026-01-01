import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { ScrollReveal } from "@/components/ui/ScrollReveal";
import { NEWS } from "@/lib/constants";

export function NewsSection() {
    // Display only the latest 3 items
    const latestNews = NEWS.slice(0, 3);

    return (
        <section className="py-20 md:py-32 px-6 border-b border-border/40">
            <div className="max-w-screen-xl mx-auto flex flex-col md:flex-row gap-16 md:gap-24">

                {/* Header */}
                <div className="md:w-1/4">
                    <ScrollReveal>
                        <h2 className="text-sm font-bold tracking-[0.3em] uppercase text-muted-foreground mb-4">Latest Info</h2>
                        <p className="text-4xl font-extrabold tracking-tight mb-8">News</p>
                        <Link
                            href="/news"
                            className="inline-flex items-center gap-2 text-sm font-bold tracking-widest hover:text-primary transition-colors group"
                        >
                            <span className="border-b border-transparent group-hover:border-primary pb-0.5 transition-all">VIEW ALL</span>
                            <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                        </Link>
                    </ScrollReveal>
                </div>

                {/* List */}
                <div className="md:w-3/4">
                    <div className="flex flex-col">
                        {latestNews.map((item, i) => (
                            <ScrollReveal key={item.id} delay={i * 0.1}>
                                <Link href="/news" className="group block py-8 border-b border-border/60 hover:border-black transition-colors duration-300">
                                    <div className="flex flex-col md:flex-row md:items-center gap-4 md:gap-10">
                                        <div className="flex items-center gap-6 min-w-[200px]">
                                            <span className="font-mono text-xs md:text-sm text-muted-foreground group-hover:text-black transition-colors">{item.date}</span>
                                            <span className={`text-[10px] font-bold px-2 py-0.5 border ${item.cat === 'RELEASE' ? 'bg-black text-white border-black' : 'text-gray-500 border-gray-200 bg-gray-50'}`}>
                                                {item.cat}
                                            </span>
                                        </div>
                                        <h3 className="text-base md:text-lg font-bold group-hover:translate-x-2 transition-transform duration-300 ease-out line-clamp-1">
                                            {item.title}
                                        </h3>
                                    </div>
                                </Link>
                            </ScrollReveal>
                        ))}
                    </div>
                </div>

            </div>
        </section>
    );
}
