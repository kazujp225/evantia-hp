"use client";

import { useState } from "react";
import { ArrowRight, Loader2, CheckCircle } from "lucide-react";

export function ContactForm() {
  const [formData, setFormData] = useState({
    company: "",
    email: "",
    content: "",
  });
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");
  const [errorMessage, setErrorMessage] = useState("");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus("loading");
    setErrorMessage("");

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      const data = await response.json();

      if (!response.ok) {
        throw new Error(data.error || "送信に失敗しました");
      }

      setStatus("success");
      setFormData({ company: "", email: "", content: "" });
    } catch (error) {
      setStatus("error");
      setErrorMessage(error instanceof Error ? error.message : "送信に失敗しました");
    }
  };

  if (status === "success") {
    return (
      <div className="text-center py-16">
        <CheckCircle className="w-16 h-16 text-[var(--color-brand-accent)] mx-auto mb-6" />
        <h3 className="text-2xl font-bold mb-4">送信完了</h3>
        <p className="text-muted-foreground">
          お問い合わせいただきありがとうございます。<br />
          担当者より折り返しご連絡いたします。
        </p>
        <button
          onClick={() => setStatus("idle")}
          className="mt-8 text-[var(--color-brand-accent)] font-bold hover:underline"
        >
          新しいお問い合わせを送信
        </button>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-8">
      <div className="grid grid-cols-1 gap-8">
        <div>
          <label htmlFor="company" className="block text-xs font-bold tracking-widest mb-3 uppercase text-[var(--color-brand-accent)]">Company</label>
          <input
            type="text"
            id="company"
            value={formData.company}
            onChange={(e) => setFormData({ ...formData, company: e.target.value })}
            className="w-full bg-zinc-50 border-b border-border p-4 font-bold focus:outline-none focus:border-[var(--color-brand-accent)] focus:bg-white transition-colors rounded-none placeholder:text-muted-foreground/30"
            placeholder="御社名"
          />
        </div>
        <div>
          <label htmlFor="email" className="block text-xs font-bold tracking-widest mb-3 uppercase text-[var(--color-brand-accent)]">Email <span className="text-red-500">*</span></label>
          <input
            type="email"
            id="email"
            required
            value={formData.email}
            onChange={(e) => setFormData({ ...formData, email: e.target.value })}
            className="w-full bg-zinc-50 border-b border-border p-4 font-bold focus:outline-none focus:border-[var(--color-brand-accent)] focus:bg-white transition-colors rounded-none placeholder:text-muted-foreground/30"
            placeholder="メールアドレス"
          />
        </div>
        <div>
          <label htmlFor="content" className="block text-xs font-bold tracking-widest mb-3 uppercase text-[var(--color-brand-accent)]">Detail <span className="text-red-500">*</span></label>
          <textarea
            id="content"
            rows={6}
            required
            value={formData.content}
            onChange={(e) => setFormData({ ...formData, content: e.target.value })}
            className="w-full bg-zinc-50 border-b border-border p-4 font-bold focus:outline-none focus:border-[var(--color-brand-accent)] focus:bg-white transition-colors rounded-none placeholder:text-muted-foreground/30"
            placeholder="ご相談内容"
          ></textarea>
        </div>
      </div>

      {status === "error" && (
        <div className="bg-red-50 text-red-600 p-4 text-center font-medium">
          {errorMessage}
        </div>
      )}

      <div className="pt-8 text-center">
        <button
          type="submit"
          disabled={status === "loading"}
          className="inline-flex items-center gap-4 bg-[var(--color-primary)] text-white px-12 py-5 text-sm font-black tracking-widest hover:bg-[var(--color-brand-accent)] transition-all duration-300 shadow-lg hover:shadow-[var(--color-brand-accent)]/40 hover:-translate-y-1 disabled:opacity-50 disabled:cursor-not-allowed disabled:hover:translate-y-0"
        >
          {status === "loading" ? (
            <>
              送信中 <Loader2 className="w-4 h-4 animate-spin" />
            </>
          ) : (
            <>
              送信する <ArrowRight className="w-4 h-4" />
            </>
          )}
        </button>
      </div>
    </form>
  );
}
