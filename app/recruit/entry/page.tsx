"use client";

import { useState } from "react";
import { PageHeader } from "@/components/ui/PageHeader";
import { ScrollReveal } from "@/components/ui/ScrollReveal";
import { ArrowLeft, Send, ChevronDown, Check, Loader2, CheckCircle } from "lucide-react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";

const POSITIONS = [
    { id: "consulting-sales", label: "コンサル営業職", en: "Consulting Sales" },
    { id: "customer-support", label: "カスタマーサポート・営業事務職", en: "Customer Support & Sales Administration" },
    { id: "hr", label: "人事職（自社採用・労務）", en: "Human Resources (HR)" },
    { id: "other", label: "その他", en: "Other / Open Position" },
];

export default function EntryPage() {
    const [isOpen, setIsOpen] = useState(false);
    const [selectedPosition, setSelectedPosition] = useState<string | null>(null);
    const [formData, setFormData] = useState({
        lastName: "",
        firstName: "",
        email: "",
        portfolioUrl: "",
        motivation: "",
    });
    const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");
    const [errorMessage, setErrorMessage] = useState("");

    const selectedLabel = POSITIONS.find(p => p.id === selectedPosition)?.label;

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setStatus("loading");
        setErrorMessage("");

        try {
            const response = await fetch("/api/recruit", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify({
                    position: selectedLabel || "",
                    ...formData,
                }),
            });

            const data = await response.json();

            if (!response.ok) {
                throw new Error(data.error || "送信に失敗しました");
            }

            setStatus("success");
            setSelectedPosition(null);
            setFormData({ lastName: "", firstName: "", email: "", portfolioUrl: "", motivation: "" });
        } catch (error) {
            setStatus("error");
            setErrorMessage(error instanceof Error ? error.message : "送信に失敗しました");
        }
    };

    return (
        <div className="bg-white pb-40 text-black">
            <PageHeader title="ENTRY" subtitle="応募フォーム" />

            <div className="container-custom max-w-4xl py-12">
                <Link href="/recruit" className="inline-flex items-center gap-2 text-sm font-bold text-gray-400 hover:text-black mb-12 transition-colors">
                    <ArrowLeft size={16} /> 採用情報に戻る
                </Link>

                <ScrollReveal>
                    <div className="bg-gray-50 border border-gray-200 rounded-3xl p-8 md:p-16">
                        {status === "success" ? (
                            <div className="text-center py-16">
                                <CheckCircle className="w-16 h-16 text-primary mx-auto mb-6" />
                                <h3 className="text-2xl font-black mb-4">エントリー完了</h3>
                                <p className="text-gray-500 leading-relaxed">
                                    ご応募いただきありがとうございます。<br />
                                    担当者より追ってご連絡いたします。
                                </p>
                                <button
                                    onClick={() => setStatus("idle")}
                                    className="mt-8 text-primary font-bold hover:underline"
                                >
                                    新しいエントリーを送信
                                </button>
                            </div>
                        ) : (
                        <>
                        <h2 className="text-3xl font-black mb-8">エントリーフォーム</h2>
                        <p className="text-gray-500 mb-12 leading-relaxed">
                            以下のフォームに必要な情報をご入力ください。<br />
                            ポートフォリオや履歴書をお持ちの方は、添付またはURLをご記入ください。
                        </p>

                        <form className="space-y-12" onSubmit={handleSubmit}>
                            {/* Position - Accordion */}
                            <div className="space-y-4">
                                <label className="block text-sm font-bold">希望職種 <span className="text-primary">*</span></label>
                                <div className="relative">
                                    <button
                                        type="button"
                                        onClick={() => setIsOpen(!isOpen)}
                                        className="w-full bg-white border border-gray-300 p-4 rounded-lg font-bold text-left flex items-center justify-between hover:border-gray-400 transition-colors"
                                    >
                                        <span className={selectedPosition ? "text-black" : "text-gray-400"}>
                                            {selectedLabel || "職種を選択してください"}
                                        </span>
                                        <ChevronDown
                                            size={20}
                                            className={`text-gray-400 transition-transform duration-300 ${isOpen ? "rotate-180" : ""}`}
                                        />
                                    </button>

                                    <AnimatePresence>
                                        {isOpen && (
                                            <motion.div
                                                initial={{ opacity: 0, height: 0 }}
                                                animate={{ opacity: 1, height: "auto" }}
                                                exit={{ opacity: 0, height: 0 }}
                                                transition={{ duration: 0.3, ease: "easeInOut" }}
                                                className="overflow-hidden"
                                            >
                                                <div className="mt-2 bg-white border border-gray-300 rounded-lg overflow-hidden">
                                                    {POSITIONS.map((position) => (
                                                        <button
                                                            key={position.id}
                                                            type="button"
                                                            onClick={() => {
                                                                setSelectedPosition(position.id);
                                                                setIsOpen(false);
                                                            }}
                                                            className={`w-full p-4 text-left flex items-center justify-between hover:bg-gray-50 transition-colors border-b border-gray-100 last:border-b-0 ${
                                                                selectedPosition === position.id ? "bg-primary/5" : ""
                                                            }`}
                                                        >
                                                            <div>
                                                                <span className="font-bold block">{position.label}</span>
                                                                <span className="text-xs text-gray-400">{position.en}</span>
                                                            </div>
                                                            {selectedPosition === position.id && (
                                                                <Check size={20} className="text-primary" />
                                                            )}
                                                        </button>
                                                    ))}
                                                </div>
                                            </motion.div>
                                        )}
                                    </AnimatePresence>
                                </div>
                            </div>

                            {/* Name */}
                            <div className="grid md:grid-cols-2 gap-8">
                                <div className="space-y-4">
                                    <label className="block text-sm font-bold">お名前（姓） <span className="text-primary">*</span></label>
                                    <input type="text" value={formData.lastName} onChange={(e) => setFormData({ ...formData, lastName: e.target.value })} className="w-full bg-white border border-gray-300 p-4 rounded-lg" placeholder="山田" required />
                                </div>
                                <div className="space-y-4">
                                    <label className="block text-sm font-bold">お名前（名） <span className="text-primary">*</span></label>
                                    <input type="text" value={formData.firstName} onChange={(e) => setFormData({ ...formData, firstName: e.target.value })} className="w-full bg-white border border-gray-300 p-4 rounded-lg" placeholder="太郎" required />
                                </div>
                            </div>

                            {/* Email */}
                            <div className="space-y-4">
                                <label className="block text-sm font-bold">メールアドレス <span className="text-primary">*</span></label>
                                <input type="email" value={formData.email} onChange={(e) => setFormData({ ...formData, email: e.target.value })} className="w-full bg-white border border-gray-300 p-4 rounded-lg" placeholder="email@example.com" required />
                            </div>

                            {/* Links */}
                            <div className="space-y-4">
                                <label className="block text-sm font-bold">ポートフォリオ / 履歴書URL</label>
                                <input type="url" value={formData.portfolioUrl} onChange={(e) => setFormData({ ...formData, portfolioUrl: e.target.value })} className="w-full bg-white border border-gray-300 p-4 rounded-lg" placeholder="https://..." />
                                <p className="text-sm text-gray-400">Google DriveやNotionなどのURLを共有してください。</p>
                            </div>

                            {/* Message */}
                            <div className="space-y-4">
                                <label className="block text-sm font-bold">志望動機 / 自己PR</label>
                                <textarea value={formData.motivation} onChange={(e) => setFormData({ ...formData, motivation: e.target.value })} className="w-full bg-white border border-gray-300 p-4 rounded-lg h-32 resize-none" placeholder="志望動機や自己PRをご自由にご記入ください。"></textarea>
                            </div>

                            {status === "error" && (
                                <div className="bg-red-50 text-red-600 p-4 text-center font-medium rounded-lg">
                                    {errorMessage}
                                </div>
                            )}

                            <button type="submit" disabled={status === "loading"} className="w-full bg-black text-white font-bold py-6 rounded-xl hover:bg-primary transition-colors flex items-center justify-center gap-3 text-lg disabled:opacity-50 disabled:cursor-not-allowed">
                                {status === "loading" ? (
                                    <>
                                        <Loader2 size={20} className="animate-spin" />
                                        送信中
                                    </>
                                ) : (
                                    <>
                                        <Send size={20} />
                                        エントリーを送信
                                    </>
                                )}
                            </button>
                        </form>
                        </>
                        )}
                    </div>
                </ScrollReveal>
            </div>
        </div>
    );
}
