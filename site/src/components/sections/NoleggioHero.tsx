'use client';

import { motion, useScroll, useTransform } from 'framer-motion';
import { useRef } from 'react';
import { ArrowDown, Calendar, ChevronDown } from 'lucide-react';
import Image from 'next/image';
import { noleggioHero } from '@/data/noleggio';

export default function NoleggioHero() {
    const containerRef = useRef<HTMLDivElement>(null);

    const { scrollYProgress } = useScroll({
        target: containerRef,
        offset: ['start start', 'end start'],
    });

    const opacity = useTransform(scrollYProgress, [0, 0.5], [1, 0]);
    const scale = useTransform(scrollYProgress, [0, 0.5], [1, 1.1]);
    const y = useTransform(scrollYProgress, [0, 0.5], [0, 80]);

    return (
        <section
            ref={containerRef}
            className="relative h-screen w-full overflow-hidden bg-[#050505]"
        >
            {/* Background Image with Parallax */}
            <motion.div
                className="absolute inset-0"
                style={{ scale }}
            >
                <Image
                    src={noleggioHero.backgroundImage}
                    alt="Sala Pose 3Monkeys"
                    fill
                    className="object-cover"
                    priority
                    sizes="100vw"
                />
                {/* Dark Gradient Overlay */}
                <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/40 to-[#050505]" />
            </motion.div>

            {/* TV Scanlines */}
            <div className="absolute inset-0 pointer-events-none z-20 opacity-[0.03]"
                style={{
                    backgroundImage: 'repeating-linear-gradient(0deg, rgba(0,0,0,0.15), rgba(0,0,0,0.15) 1px, transparent 1px, transparent 2px)',
                    backgroundSize: '100% 2px'
                }}
            />

            {/* Content */}
            <motion.div
                className="relative z-10 h-full flex flex-col items-center justify-center text-center px-6"
                style={{ y, opacity }}
            >
                {/* Tag */}
                <motion.span
                    className="mono text-xs text-[#00754B] mb-4 tracking-[0.3em] font-bold"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.3 }}
                >
                    NOLEGGIO
                </motion.span>

                {/* Main Title */}
                <motion.h1
                    className="text-white text-center max-w-5xl leading-[0.9]"
                    style={{ fontSize: 'clamp(2.5rem, 8vw, 6rem)' }}
                    initial={{ opacity: 0, y: 40 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 1, delay: 0.5, ease: [0.16, 1, 0.3, 1] }}
                >
                    {noleggioHero.title}
                </motion.h1>

                {/* Subtitle */}
                <motion.p
                    className="mono text-sm text-[#00754B] mt-6 max-w-lg tracking-[0.15em] uppercase"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.8 }}
                >
                    {noleggioHero.subtitle}
                </motion.p>

                {/* Dual CTA */}
                <motion.div
                    className="flex flex-col sm:flex-row gap-4 mt-10"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 1 }}
                >
                    <a
                        href={noleggioHero.ctaPrimary.href}
                        className="group flex items-center gap-2 px-8 py-4 bg-[#00754B] text-white mono text-xs uppercase tracking-widest hover:bg-[#00855a] transition-all duration-300 hover:shadow-[0_0_30px_rgba(0,117,75,0.5)]"
                    >
                        <Calendar className="w-4 h-4" />
                        {noleggioHero.ctaPrimary.text}
                    </a>
                    <a
                        href={noleggioHero.ctaSecondary.href}
                        className="group flex items-center gap-2 px-8 py-4 bg-transparent text-white mono text-xs uppercase tracking-widest border border-white/30 hover:border-[#00754B] hover:text-[#00754B] transition-all duration-300"
                    >
                        <ChevronDown className="w-4 h-4" />
                        {noleggioHero.ctaSecondary.text}
                    </a>
                </motion.div>
            </motion.div>

            {/* Scroll Indicator */}
            <motion.div
                className="absolute bottom-12 left-1/2 -translate-x-1/2 z-10 flex flex-col items-center gap-2"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.8, delay: 1.3 }}
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
