import { PageHeader } from "@/components/ui/PageHeader";
import Link from "next/link";

export const metadata = {
    title: "Interview | 社員インタビュー",
    description: "アズライトで働く社員のインタビューをご紹介します。",
};

export default function InterviewPage() {
    return (
        <div>
            <PageHeader title="INTERVIEW" subtitle="社員インタビュー" />

            <section className="py-24">
                <div className="container-custom">
                    <div className="grid md:grid-cols-3 gap-8">
                        {[1, 2, 3, 4, 5, 6].map((i) => (
                            <Link key={i} href={`/recruit/interview/member-${i}`} className="group block">
                                <div className="aspect-[3/4] bg-slate-200 rounded-xl mb-4 overflow-hidden relative">
                                    <div className="absolute inset-0 bg-black/10 group-hover:bg-black/0 transition-colors" />
                                </div>
                                <p className="text-xs text-text-light mb-2">Consultant / 202{i} Entry</p>
                                <h3 className="font-bold text-lg leading-snug group-hover:text-primary transition-colors">
                                    「クライアントの成果」に<br />一番近くで寄り添える仕事。
                                </h3>
                            </Link>
                        ))}
                    </div>
                </div>
            </section>
        </div>
    );
}
