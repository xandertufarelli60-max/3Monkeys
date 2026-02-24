'use client';

import { motion, useScroll, useTransform } from 'framer-motion';
import { useRef } from 'react';
import { ArrowDown, Play, Camera } from 'lucide-react';
import Image from 'next/image';

interface HeroSectionProps {
    videoSrc?: string;
    posterSrc?: string;
    headline?: string;
    subheadline?: string;
}

export default function HeroSection({
    videoSrc = '/showreel.mp4',
    posterSrc = '/poster.jpg',
    headline = 'Crafting Visual Stories',
    subheadline = 'Production Company & Service Tecnico',
}: HeroSectionProps) {
    const containerRef = useRef<HTMLDivElement>(null);

    const { scrollYProgress } = useScroll({
        target: containerRef,
        offset: ['start start', 'end start'],
    });

    const opacity = useTransform(scrollYProgress, [0, 0.5], [1, 0]);
    const scale = useTransform(scrollYProgress, [0, 0.5], [1, 0.95]);
    const y = useTransform(scrollYProgress, [0, 0.5], [0, 100]);

    return (
        <section
            ref={containerRef}
            className="relative h-screen w-full overflow-hidden bg-[#050505]"
            data-cursor="play"
        >
            {/* Dark Background Fallback - ensures contrast when video not loaded */}
            <div className="absolute inset-0 bg-[#050505]" />

            {/* Background Image with Parallax */}
            <motion.div
                className="absolute inset-0"
                style={{ opacity, scale }}
            >
                <Image
                    src="/images/home-hero-mountains.jpg"
                    alt="3Monkeys Operators in Mountains"
                    fill
                    className="object-cover"
                    priority
                    sizes="100vw"
                    style={{ objectPosition: 'center center' }}
                />
                {/* Dark Gradient Overlay */}
                <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/40 to-[#050505]" />
            </motion.div>

            {/* TV Scanlines Overlay (subtle) */}
            <div className="absolute inset-0 pointer-events-none z-20 opacity-[0.03]"
                style={{
                    backgroundImage: 'repeating-linear-gradient(0deg, rgba(0,0,0,0.15), rgba(0,0,0,0.15) 1px, transparent 1px, transparent 2px)',
                    backgroundSize: '100% 2px'
                }}
            />

            {/* Content */}
            <motion.div
                className="relative z-10 h-full flex flex-col items-center justify-center text-center px-6"
                style={{ y }}
            >
                {/* Location Tag */}
                <motion.span
                    className="mono text-xs text-[#00754B] mb-4 tracking-[0.3em] font-bold"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.5 }}
                >
                    ROMA • MILANO
                </motion.span>

                {/* Main Headline */}
                <motion.h1
                    className="text-white text-center max-w-6xl leading-[1.1]"
                    style={{ fontSize: 'clamp(2.5rem, 7.5vw, 6rem)' }}
                    initial={{ opacity: 0, y: 40 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 1, delay: 0.7, ease: [0.16, 1, 0.3, 1] }}
                >
                    {headline}
                </motion.h1>

                {/* Subheadline - Pantone Accent */}
                <motion.p
                    className="mono text-sm text-[#00754B] mt-6 max-w-lg tracking-[0.15em] uppercase"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 1 }}
                >
                    {subheadline}
                </motion.p>

                {/* Dual CTA Buttons */}
                <motion.div
                    className="flex flex-col sm:flex-row gap-4 mt-10"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 1.2 }}
                >
                    <a
                        href="/produzioni"
                        className="group flex items-center gap-2 px-8 py-4 bg-[#00754B] text-white mono text-xs uppercase tracking-widest hover:bg-[#00855a] transition-all duration-300 hover:shadow-[0_0_30px_rgba(0,117,75,0.5)]"
                    >
                        <Play className="w-4 h-4" />
                        Le Nostre Produzioni
                    </a>
                    <a
                        href="/noleggio"
                        className="group flex items-center gap-2 px-8 py-4 bg-transparent text-white mono text-xs uppercase tracking-widest border border-white/30 hover:border-[#00754B] hover:text-[#00754B] transition-all duration-300"
                    >
                        <Camera className="w-4 h-4" />
                        Esplora Noleggio &amp; Spazi
                    </a>
                </motion.div>
            </motion.div>

            {/* Scroll Indicator - Pantone Green */}
            <motion.div
                className="absolute bottom-12 left-1/2 -translate-x-1/2 z-10 flex flex-col items-center gap-2"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.8, delay: 1.5 }}
            >
                <span className="mono text-xs text-[#00754B]/70 tracking-widest">SCROLL</span>
                <motion.div
                    animate={{ y: [0, 8, 0] }}
                    transition={{ duration: 1.5, repeat: Infinity, ease: 'easeInOut' }}
                >
                    <ArrowDown className="w-5 h-5 text-[#00754B]" />
                </motion.div>
            </motion.div>
        </section>
    );
}
