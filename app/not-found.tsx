import Link from 'next/link'

export default function NotFound() {
    return (
        <div className="bg-white min-h-screen flex flex-col items-center justify-center text-center p-8">
            <h1 className="text-[120px] font-black leading-none mb-4 text-black">404</h1>
            <h2 className="text-2xl font-bold mb-8">Page Not Found</h2>
            <p className="text-gray-500 mb-12 max-w-md">
                お探しのページは、一時的にアクセスできない状況にあるか、移動もしくは削除された可能性があります。
            </p>
            <Link href="/" className="px-8 py-3 bg-black text-white rounded-full font-bold hover:bg-primary transition-colors">
                Return Home
            </Link>
        </div>
    )
}
