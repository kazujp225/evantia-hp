import Link from "next/link";

export const Logo = () => {
    return (
        <Link href="/" className="flex items-center gap-2 group">
            <div className="text-2xl font-black tracking-tighter text-primary group-hover:opacity-80 transition-opacity font-serif">
                株式会社エバンティア
            </div>
        </Link>
    );
};
