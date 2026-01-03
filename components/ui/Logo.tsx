import Link from "next/link";
import Image from "next/image";

export const Logo = () => {
    return (
        <Link href="/" className="flex items-center gap-3 group" aria-label="株式会社エバンティア - ホームページへ">
            <Image
                src="/logo.png"
                alt="株式会社エバンティア ロゴ"
                width={48}
                height={48}
                className="group-hover:opacity-80 transition-opacity"
            />
            <div className="text-xl font-bold tracking-tighter text-primary group-hover:opacity-80 transition-opacity" aria-hidden="true">
                株式会社エバンティア
            </div>
        </Link>
    );
};
