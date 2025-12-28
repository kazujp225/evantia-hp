import { PageHeader } from "@/components/ui/PageHeader";
import { ScrollReveal } from "@/components/ui/ScrollReveal";
import { ArrowLeft, Upload, Send } from "lucide-react";
import Link from "next/link";

export const metadata = {
    title: "Entry | エントリー",
    description: "アズライトへのエントリーはこちら。",
};

export default function EntryPage() {
    return (
        <div className="bg-white pb-40 text-black">
            <PageHeader title="ENTRY" subtitle="応募フォーム" />

            <div className="container-custom max-w-4xl py-12">
                <Link href="/recruit" className="inline-flex items-center gap-2 text-sm font-bold text-gray-400 hover:text-black mb-12 transition-colors">
                    <ArrowLeft size={16} /> RECRUIT TOP
                </Link>

                <ScrollReveal>
                    <div className="bg-gray-50 border border-gray-200 rounded-3xl p-8 md:p-16">
                        <h2 className="text-3xl font-black mb-8">ENTRY FORM</h2>
                        <p className="text-gray-500 mb-12 leading-relaxed">
                            以下のフォームに必要な情報をご入力ください。<br />
                            ポートフォリオや履歴書をお持ちの方は、添付またはURLをご記入ください。
                        </p>

                        <form className="space-y-12">
                            {/* Position */}
                            <div className="space-y-4">
                                <label className="block text-xs font-bold tracking-widest uppercase">希望職種 <span className="text-primary">*</span></label>
                                <select className="w-full bg-white border border-gray-300 p-4 rounded-lg font-bold" required>
                                    <option value="">職種を選択してください</option>
                                    <option>Recruitment Consultant</option>
                                    <option>RPO Specialist</option>
                                    <option>Career Advisor</option>
                                    <option>Corporate Staff</option>
                                    <option>Other / Open Position</option>
                                </select>
                            </div>

                            {/* Name */}
                            <div className="grid md:grid-cols-2 gap-8">
                                <div className="space-y-4">
                                    <label className="block text-xs font-bold tracking-widest uppercase">Name (Sei) <span className="text-primary">*</span></label>
                                    <input type="text" className="w-full bg-white border border-gray-300 p-4 rounded-lg" placeholder="山田" required />
                                </div>
                                <div className="space-y-4">
                                    <label className="block text-xs font-bold tracking-widest uppercase">Name (Mei) <span className="text-primary">*</span></label>
                                    <input type="text" className="w-full bg-white border border-gray-300 p-4 rounded-lg" placeholder="太郎" required />
                                </div>
                            </div>

                            {/* Email */}
                            <div className="space-y-4">
                                <label className="block text-xs font-bold tracking-widest uppercase">Email Address <span className="text-primary">*</span></label>
                                <input type="email" className="w-full bg-white border border-gray-300 p-4 rounded-lg" placeholder="email@example.com" required />
                            </div>

                            {/* Links */}
                            <div className="space-y-4">
                                <label className="block text-xs font-bold tracking-widest uppercase">Portfolio / Resume URL</label>
                                <input type="url" className="w-full bg-white border border-gray-300 p-4 rounded-lg" placeholder="https://..." />
                                <p className="text-xs text-gray-400">Google DriveやNotionなどのURLを共有してください。</p>
                            </div>

                            {/* Message */}
                            <div className="space-y-4">
                                <label className="block text-xs font-bold tracking-widest uppercase">Message / Motivation</label>
                                <textarea className="w-full bg-white border border-gray-300 p-4 rounded-lg h-32 resize-none" placeholder="志望動機や自己PRをご自由にご記入ください。"></textarea>
                            </div>

                            <button type="submit" className="w-full bg-black text-white font-bold py-6 rounded-xl hover:bg-primary transition-colors flex items-center justify-center gap-3">
                                <Send size={20} />
                                SUBMIT ENTRY
                            </button>
                        </form>
                    </div>
                </ScrollReveal>
            </div>
        </div>
    );
}
