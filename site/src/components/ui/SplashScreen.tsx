'use client';

import { useState, useEffect } from 'react';
import Image from 'next/image';
import { motion, AnimatePresence } from 'framer-motion';

export default function SplashScreen({ children }: { children: React.ReactNode }) {
    const [showSplash, setShowSplash] = useState(true);
    const [logoReady, setLogoReady] = useState(false);

    useEffect(() => {
        // Check if splash was already shown this session
        if (sessionStorage.getItem('splashShown')) {
            setShowSplash(false);
            return;
        }

        // Small delay to ensure smooth mount
        const readyTimer = setTimeout(() => setLogoReady(true), 100);

        // Auto-dismiss splash after 3s
        const dismissTimer = setTimeout(() => {
            setShowSplash(false);
            sessionStorage.setItem('splashShown', 'true');
        }, 3000);

        return () => {
            clearTimeout(readyTimer);
            clearTimeout(dismissTimer);
        };
    }, []);

    return (
        <>
            <AnimatePresence mode="wait">
                {showSplash && (
                    <motion.div
                        key="splash"
                        className="splash-overlay"
                        initial={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
                    >
                        {/* Dark cinematic background */}
                        <div className="splash-bg">
                            {/* Subtle film grain */}
                            <div className="splash-grain" />

                            {/* Centered logo container */}
                            <motion.div
                                className="splash-logo-container"
                                initial={{ opacity: 0, scale: 0.8 }}
                                animate={logoReady ? { opacity: 1, scale: 1 } : {}}
                                transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
                            >
                                {/* Glow ring behind logo */}
                                <motion.div
                                    className="splash-glow-ring"
                                    initial={{ opacity: 0, scale: 0.6 }}
                                    animate={logoReady ? {
                                        opacity: [0, 0.6, 0.3],
                                        scale: [0.6, 1.1, 1],
                                    } : {}}
                                    transition={{ duration: 2, ease: 'easeOut' }}
                                />

                                {/* Logo image - Face only version */}
                                <Image
                                    src="/images/face-logo.png"
                                    alt="3 Monkeys"
                                    width={200}
                                    height={200}
                                    className="splash-logo"
                                    priority
                                />

                                {/* Accent line expanding under logo */}
                                <motion.div
                                    className="splash-accent-line"
                                    initial={{ scaleX: 0 }}
                                    animate={logoReady ? { scaleX: 1 } : {}}
                                    transition={{ duration: 1.5, delay: 0.5, ease: [0.16, 1, 0.3, 1] }}
                                />
                            </motion.div>

                            {/* Scanline sweep effect */}
                            <motion.div
                                className="splash-scanline"
                                initial={{ top: '-5%' }}
                                animate={logoReady ? { top: '105%' } : {}}
                                transition={{ duration: 2, delay: 0.3, ease: 'linear', repeat: 1 }}
                            />
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>

            {/* Main content — always rendered but hidden behind splash */}
            <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: showSplash ? 0 : 1 }}
                transition={{ duration: 0.6, delay: 0.2 }}
            >
                {children}
            </motion.div>
        </>
    );
}
