export default function Loading() {
    return (
        <div className="fixed inset-0 bg-white z-[9999] flex items-center justify-center">
            <div className="flex flex-col items-center gap-4">
                <div className="w-16 h-16 border-4 border-gray-100 border-t-primary rounded-full animate-spin" />
                <p className="font-bold text-sm tracking-[0.2em] text-gray-400 animate-pulse">EVANTIA</p>
            </div>
        </div>
    );
}
