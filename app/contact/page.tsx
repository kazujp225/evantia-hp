import { PageHeader } from "@/components/ui/PageHeader";
import { ScrollReveal } from "@/components/ui/ScrollReveal";
import { ArrowRight, Mail, Phone, MapPin } from "lucide-react";

export const metadata = {
    title: "Contact | お問い合わせ",
    description: "アズライトへのお問い合わせはこちら。",
};

export default function ContactPage() {
    return (
        <div className="bg-white pb-40 text-black">
            <PageHeader title="CONTACT" subtitle="お問い合わせ" />

            {/* Intro */}
            <section className="py-24">
                <div className="container-custom max-w-5xl">
                    <ScrollReveal>
                        <h2 className="text-4xl md:text-6xl font-black leading-tight mb-12">
                            Let's Build<br />
                            Together.
                        </h2>
                        <div className="flex flex-col md:flex-row gap-16 md:gap-32">
                            <p className="text-xl font-bold leading-relaxed max-w-md">
                                事業の成長を加速させるためのパートナーとして、<br />
                                まずはお気軽にご相談ください。
                            </p>
                            <div className="space-y-4 text-sm font-medium text-gray-500">
                                <p className="flex items-center gap-4 border-b border-gray-200 pb-4">
                                    <Mail size={16} className="text-black" /> jyunpei.arai@evantia-co.jp (担当: 新井)
                                </p>
                                <p className="flex items-center gap-4 border-b border-gray-200 pb-4">
                                    <Phone size={16} className="text-black" /> 090-2393-2820
                                </p>
                            </div>
                        </div>
                    </ScrollReveal>
                </div>
            </section>

            {/* Swiss Grid Form */}
            <section className="container-custom max-w-5xl">
                <ScrollReveal delay={0.2} className="border-t-2 border-black">
                    <form className="flex flex-col">

                        {/* Company */}
                        <div className="grid md:grid-cols-[300px_1fr] border-b border-gray-200 group focus-within:bg-gray-50 transition-colors">
                            <label htmlFor="company" className="py-8 md:py-12 font-bold tracking-widest text-xs uppercase flex items-center md:border-r border-gray-200 group-focus-within:border-black pr-8">
                                Company Name <span className="ml-auto text-primary">*</span>
                            </label>
                            <input
                                type="text"
                                id="company"
                                className="w-full bg-transparent p-8 md:p-12 text-xl md:text-2xl font-bold placeholder:text-gray-200 focus:outline-none"
                                placeholder="YOUR COMPANY INC."
                                required
                            />
                        </div>

                        {/* Name */}
                        <div className="grid md:grid-cols-[300px_1fr] border-b border-gray-200 group focus-within:bg-gray-50 transition-colors">
                            <label htmlFor="name" className="py-8 md:py-12 font-bold tracking-widest text-xs uppercase flex items-center md:border-r border-gray-200 group-focus-within:border-black pr-8">
                                Your Name <span className="ml-auto text-primary">*</span>
                            </label>
                            <input
                                type="text"
                                id="name"
                                className="w-full bg-transparent p-8 md:p-12 text-xl md:text-2xl font-bold placeholder:text-gray-200 focus:outline-none"
                                placeholder="TARO YAMADA"
                                required
                            />
                        </div>

                        {/* Email */}
                        <div className="grid md:grid-cols-[300px_1fr] border-b border-gray-200 group focus-within:bg-gray-50 transition-colors">
                            <label htmlFor="email" className="py-8 md:py-12 font-bold tracking-widest text-xs uppercase flex items-center md:border-r border-gray-200 group-focus-within:border-black pr-8">
                                Email Address <span className="ml-auto text-primary">*</span>
                            </label>
                            <input
                                type="email"
                                id="email"
                                className="w-full bg-transparent p-8 md:p-12 text-xl md:text-2xl font-bold placeholder:text-gray-200 focus:outline-none"
                                placeholder="name@example.com"
                                required
                            />
                        </div>

                        {/* Category */}
                        <div className="grid md:grid-cols-[300px_1fr] border-b border-gray-200 group focus-within:bg-gray-50 transition-colors">
                            <label htmlFor="category" className="py-8 md:py-12 font-bold tracking-widest text-xs uppercase flex items-center md:border-r border-gray-200 group-focus-within:border-black pr-8">
                                Topic
                            </label>
                            <div className="relative w-full">
                                <select id="category" className="w-full bg-transparent p-8 md:p-12 text-xl md:text-2xl font-bold focus:outline-none appearance-none cursor-pointer">
                                    <option>About Recruitment Consulting</option>
                                    <option>About RPO</option>
                                    <option>Interview Request</option>
                                    <option>Other</option>
                                </select>
                            </div>
                        </div>

                        {/* Message */}
                        <div className="grid md:grid-cols-[300px_1fr] border-b border-black group focus-within:bg-gray-50 transition-colors">
                            <label htmlFor="message" className="py-8 md:py-12 font-bold tracking-widest text-xs uppercase flex items-start md:border-r border-gray-200 group-focus-within:border-black pr-8">
                                Message <span className="ml-auto text-primary">*</span>
                            </label>
                            <textarea
                                id="message"
                                rows={6}
                                className="w-full bg-transparent p-8 md:p-12 text-lg md:text-xl font-medium placeholder:text-gray-200 focus:outline-none resize-none"
                                placeholder="HOW CAN WE HELP YOU?"
                                required
                            ></textarea>
                        </div>

                        <div className="py-12 flex justify-end">
                            <button type="submit" className="group inline-flex items-center gap-4 bg-black text-white px-16 py-6 rounded-full text-lg font-bold hover:bg-primary transition-colors duration-300">
                                SEND MESSAGE <ArrowRight className="group-hover:translate-x-2 transition-transform" />
                            </button>
                        </div>

                    </form>
                </ScrollReveal>
            </section>
        </div>
    );
}
