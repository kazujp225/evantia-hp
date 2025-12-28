export const PageHeader = ({ title, subtitle }: { title: string; subtitle: string }) => {
    return (
        <div className="bg-bg-alt py-20 border-b border-border">
            <div className="container-custom">
                <h1 className="text-4xl md:text-5xl font-bold text-text-main mb-4 tracking-tight">
                    {title}
                </h1>
                <p className="text-primary font-bold tracking-widest text-sm uppercase">
                    {subtitle}
                </p>
            </div>
        </div>
    );
};
