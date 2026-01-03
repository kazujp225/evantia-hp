import Image from "next/image";

export const PageHeader = ({ title, subtitle }: { title: string; subtitle: string }) => {
    return (
        <div className="bg-[var(--color-primary)] pt-32 md:pt-40 pb-20 md:pb-24 border-b border-white/10 relative overflow-hidden text-white">
            {/* Texture Overlay */}
            <div className="absolute inset-0 opacity-[0.1] pointer-events-none mix-blend-overlay" style={{ backgroundImage: 'url("https://grainy-gradients.vercel.app/noise.svg")' }}></div>

            {/* Logo Watermark */}
            <div className="absolute right-0 top-1/2 -translate-y-1/2 opacity-[0.05] pointer-events-none">
                <Image
                    src="/logo.png"
                    alt=""
                    width={400}
                    height={400}
                    className="translate-x-1/4"
                />
            </div>

            <div className="max-w-screen-xl mx-auto px-6 relative z-10">
                <p className="text-[var(--color-brand-accent)] font-bold tracking-[0.3em] text-xs uppercase mb-6 flex items-center gap-3">
                    <span className="w-8 h-[2px] bg-[var(--color-brand-accent)]"></span>
                    {subtitle}
                </p>
                <h1 className="text-5xl md:text-8xl font-black tracking-tighter leading-[0.9] text-white">
                    {title}<span className="text-[var(--color-brand-accent)]">.</span>
                </h1>
            </div>
        </div>
    );
};
