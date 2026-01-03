"use client";

import { motion } from "framer-motion";
import Image from "next/image";

export const AsymmetricalHero = () => {
    return (
        <section className="relative min-h-[90vh] flex items-center overflow-hidden bg-white pb-20 pt-32 md:pt-40">
            <div className="container-custom w-full relative z-10">
                <div className="grid grid-cols-12 gap-6 md:gap-12 items-center">
                    {/* Text Content - Offset Left */}
                    <div className="col-span-12 md:col-span-7 lg:col-span-6 relative z-20">
                        <motion.div
                            initial={{ opacity: 0, y: 50 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
                        >
                            <h1 className="text-5xl md:text-7xl lg:text-8xl font-black tracking-tighter leading-[0.9] mb-8 text-foreground">
                                Reinvent<br />
                                <span className="text-primary italic font-serif tracking-normal ml-4">Corporate</span><br />
                                Value.
                            </h1>
                            <div className="w-20 h-1 bg-primary mb-8" />
                            <p className="text-lg md:text-xl font-medium leading-relaxed max-w-lg text-muted-foreground feature-font-palt">
                                エバンティアは、企業の潜在的な価値を再定義し、
                                <br className="hidden md:block" />
                                テクノロジーとクリエイティブの力で
                                <br className="hidden md:block" />
                                次世代のスタンダードを構築します。
                            </p>
                        </motion.div>
                    </div>

                    {/* Visual Content - Offset Right & Overlapping */}
                    <div className="col-span-12 md:col-span-5 lg:col-span-6 relative h-[50vh] md:h-[70vh] flex items-center justify-center md:justify-end">
                        {/* Decorative Elements */}
                        <motion.div
                            initial={{ opacity: 0, scale: 0.9 }}
                            animate={{ opacity: 1, scale: 1 }}
                            transition={{ duration: 1, delay: 0.2, ease: "easeOut" }}
                            className="absolute top-10 right-0 w-[90%] h-[90%] bg-secondary/50 rounded-2xl -z-10"
                        />

                        <motion.div
                            initial={{ opacity: 0, x: 50 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ duration: 1, delay: 0.4, ease: [0.16, 1, 0.3, 1] }}
                            className="relative w-full max-w-md aspect-[3/4] shadow-2xl"
                        >
                            <div className="w-full h-full relative overflow-hidden rounded-lg">
                                <Image
                                    src="https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?auto=format&fit=crop&q=80&w=1200"
                                    alt="Japanese Business Team"
                                    fill
                                    className="object-cover"
                                />
                                <div className="absolute inset-0 bg-gradient-to-tr from-gray-800/20 to-transparent mix-blend-multiply" />
                            </div>
                        </motion.div>

                        {/* Floating Badge */}
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.8, delay: 0.8 }}
                            className="absolute bottom-10 left-0 md:-left-12 bg-white/80 backdrop-blur-md p-6 rounded-lg shadow-lg border border-white/50 max-w-xs"
                        >
                            <p className="text-sm font-bold text-primary mb-1">DATA DRIVEN</p>
                            <p className="text-xs text-foreground font-medium">
                                数理的根拠に基づく<br />
                                確実な成長戦略
                            </p>
                        </motion.div>
                    </div>
                </div>
            </div>

            {/* Background Noise/Texture handled globally in CSS, but adding specific shapes here */}
            <div className="absolute top-1/4 left-0 w-1/3 h-1/2 bg-gradient-to-r from-emerald-50 to-transparent blur-3xl opacity-60 -z-10 pointer-events-none" />
        </section>
    );
};
