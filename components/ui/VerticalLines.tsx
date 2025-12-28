"use client";

export function VerticalLines() {
    return (
        <div className="fixed inset-0 pointer-events-none z-0 flex justify-center">
            {/* Container must match the main content container exactly */}
            <div className="container-custom w-full h-full border-x border-gray-200/10">
                <div className="w-full h-full grid grid-cols-4 md:grid-cols-12 gap-4 md:gap-12">
                    {[...Array(12)].map((_, i) => (
                        <div key={i} className={`h-full border-r border-gray-200/10 ${i % 4 === 3 ? 'md:border-gray-200/20' : ''}`} />
                    ))}
                </div>
            </div>
        </div>
    );
}
