'use client';

import { motion, useInView, useReducedMotion } from "framer-motion";
import { useRef } from "react";

export const ScrollReveal = ({
    children,
    className = "",
    delay = 0
}: {
    children: React.ReactNode;
    className?: string;
    delay?: number;
}) => {
    const ref = useRef(null);
    const isInView = useInView(ref, { once: true, margin: "-100px" });
    const prefersReducedMotion = useReducedMotion();

    // Skip animations if user prefers reduced motion
    if (prefersReducedMotion) {
        return (
            <div className={className}>
                {children}
            </div>
        );
    }

    return (
        <motion.div
            ref={ref}
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
            transition={{ duration: 0.8, ease: "easeOut", delay }}
            className={className}
        >
            {children}
        </motion.div>
    );
};
