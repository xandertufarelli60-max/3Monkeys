'use client';

import { motion, AnimatePresence } from 'framer-motion';
import { usePathname } from 'next/navigation';
import { ReactNode, useState, useEffect } from 'react';

interface ShutterTransitionProps {
    children: ReactNode;
}

export default function ShutterTransition({ children }: ShutterTransitionProps) {
    const pathname = usePathname();
    const [isAnimating, setIsAnimating] = useState(false);

    useEffect(() => {
        setIsAnimating(true);
        const timer = setTimeout(() => setIsAnimating(false), 800);
        return () => clearTimeout(timer);
    }, [pathname]);

    return (
        <>
            {/* Shutter Overlay */}
            <AnimatePresence>
                {isAnimating && (
                    <div className="fixed inset-0 z-[9998] pointer-events-none">
                        {/* Top Blade */}
                        <motion.div
                            className="absolute top-0 left-0 right-0 h-1/2 bg-black"
                            initial={{ y: '-100%' }}
                            animate={{ y: ['0%', '0%', '-100%'] }}
                            transition={{
                                duration: 0.8,
                                times: [0, 0.4, 1],
                                ease: [0.16, 1, 0.3, 1]
                            }}
                        />

                        {/* Bottom Blade */}
                        <motion.div
                            className="absolute bottom-0 left-0 right-0 h-1/2 bg-black"
                            initial={{ y: '100%' }}
                            animate={{ y: ['0%', '0%', '100%'] }}
                            transition={{
                                duration: 0.8,
                                times: [0, 0.4, 1],
                                ease: [0.16, 1, 0.3, 1]
                            }}
                        />

                        {/* Green Flash */}
                        <motion.div
                            className="absolute inset-0 bg-[#00754B]"
                            initial={{ opacity: 0 }}
                            animate={{ opacity: [0, 1, 0] }}
                            transition={{
                                duration: 0.8,
                                times: [0.3, 0.45, 0.6],
                                ease: 'easeInOut'
                            }}
                        />
                    </div>
                )}
            </AnimatePresence>

            {/* Page Content */}
            <motion.div
                key={pathname}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.5, delay: 0.4 }}
            >
                {children}
            </motion.div>
        </>
    );
}
