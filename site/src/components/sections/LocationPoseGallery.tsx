'use client';

import { motion, useInView } from 'framer-motion';
import { useRef, useState, useCallback } from 'react';
import Image from 'next/image';
import { salaPoseImages } from '@/data/noleggio';
import { X, ChevronLeft, ChevronRight } from 'lucide-react';

export default function LocationPoseGallery() {
    const ref = useRef<HTMLDivElement>(null);
    const scrollRef = useRef<HTMLDivElement>(null);
    const isInView = useInView(ref, { once: true, margin: '-100px' });
    const [lightboxIndex, setLightboxIndex] = useState<number | null>(null);

    const scroll = useCallback((direction: 'left' | 'right') => {
        if (!scrollRef.current) return;
        const scrollAmount = 400;
        scrollRef.current.scrollBy({
            left: direction === 'left' ? -scrollAmount : scrollAmount,
            behavior: 'smooth',
        });
    }, []);

    return (
        <section className="py-24 bg-[#050505] dark-mode" ref={ref}>
            <div className="max-w-7xl mx-auto px-6">
                {/* Section Header */}
                <motion.div
                    className="text-center mb-16"
                    initial={{ opacity: 0, y: 30 }}
                    animate={isInView ? { opacity: 1, y: 0 } : {}}
                    transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
                >
                    <span className="mono text-xs text-[#00754B] tracking-widest">LO STUDIO</span>
                    <h2 className="mt-4 text-white" style={{ textShadow: '0 0 40px rgba(0,117,75,0.2)' }}>
                        La Location
                    </h2>
                    <p className="text-[#888] mt-4 max-w-2xl mx-auto leading-relaxed">
                        Noleggio studio ideale per interviste, documentari, podcast,
                        casting professionale e materiale tecnico per produzioni video, fotografia e campagne pubblicitarie.
                        Camera, luci, grip, audio.
                    </p>
                </motion.div>

                {/* Feature Tags */}
                <motion.div
                    className="flex flex-wrap justify-center gap-3 mb-12"
                    initial={{ opacity: 0, y: 20 }}
                    animate={isInView ? { opacity: 1, y: 0 } : {}}
                    transition={{ duration: 0.6, delay: 0.2 }}
                >
                    {['Spazio Riarredabile', 'Ideale per Podcast', 'Set Su Misura'].map((tag) => (
                        <span
                            key={tag}
                            className="mono text-xs px-4 py-2 rounded-full border border-[#00754B]/40 text-[#00754B] bg-[#00754B]/5"
                        >
                            {tag}
                        </span>
                    ))}
                </motion.div>
            </div>

            {/* Scrollable Gallery */}
            <motion.div
                className="relative group/gallery"
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: 0.3 }}
            >
                {/* Scroll Arrows */}
                <button
                    onClick={() => scroll('left')}
                    className="absolute left-4 top-1/2 -translate-y-1/2 z-10 w-12 h-12 rounded-full bg-black/60 backdrop-blur-sm border border-white/10 flex items-center justify-center text-white/70 hover:text-white hover:bg-[#00754B]/80 hover:border-[#00754B] transition-all duration-300 opacity-0 group-hover/gallery:opacity-100"
                    aria-label="Scorri a sinistra"
                >
                    <ChevronLeft className="w-6 h-6" />
                </button>
                <button
                    onClick={() => scroll('right')}
                    className="absolute right-4 top-1/2 -translate-y-1/2 z-10 w-12 h-12 rounded-full bg-black/60 backdrop-blur-sm border border-white/10 flex items-center justify-center text-white/70 hover:text-white hover:bg-[#00754B]/80 hover:border-[#00754B] transition-all duration-300 opacity-0 group-hover/gallery:opacity-100"
                    aria-label="Scorri a destra"
                >
                    <ChevronRight className="w-6 h-6" />
                </button>

                {/* Scrollable Container */}
                <div
                    ref={scrollRef}
                    className="flex gap-4 overflow-x-auto px-6 pb-4 scrollbar-hide"
                    style={{
                        scrollSnapType: 'x mandatory',
                        WebkitOverflowScrolling: 'touch',
                        scrollbarWidth: 'none',
                        msOverflowStyle: 'none',
                    }}
                >
                    {salaPoseImages.map((image, index) => (
                        <div
                            key={index}
                            className="relative flex-shrink-0 h-[350px] md:h-[450px] rounded-lg overflow-hidden cursor-pointer group"
                            style={{
                                width: 'auto',
                                aspectRatio: '16/10',
                                scrollSnapAlign: 'start',
                            }}
                            onClick={() => setLightboxIndex(index)}
                        >
                            <Image
                                src={image.src}
                                alt={image.alt}
                                fill
                                className="object-cover transition-transform duration-700 group-hover:scale-105"
                                sizes="(max-width: 768px) 80vw, 40vw"
                            />
                            {/* Hover Overlay */}
                            <div className="absolute inset-0 bg-[#00754B]/0 group-hover:bg-[#00754B]/15 transition-colors duration-500" />
                        </div>
                    ))}
                </div>

                {/* Scroll Hint Bar */}
                <div className="flex justify-center mt-6 px-6">
                    <div className="flex items-center gap-2">
                        <span className="mono text-xs text-[#888]/60 tracking-widest">SCORRI PER ESPLORARE</span>
                        <ChevronRight className="w-3 h-3 text-[#888]/60" />
                    </div>
                </div>
            </motion.div>

            {/* Lightbox */}
            {lightboxIndex !== null && (
                <motion.div
                    className="fixed inset-0 z-[100] bg-black/95 flex items-center justify-center p-4"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    onClick={() => setLightboxIndex(null)}
                >
                    <button
                        className="absolute top-6 right-6 text-white hover:text-[#00754B] transition-colors z-10"
                        onClick={() => setLightboxIndex(null)}
                    >
                        <X className="w-8 h-8" />
                    </button>
                    <div className="relative w-full max-w-5xl aspect-video">
                        <Image
                            src={salaPoseImages[lightboxIndex].src}
                            alt={salaPoseImages[lightboxIndex].alt}
                            fill
                            className="object-contain"
                            sizes="90vw"
                        />
                    </div>
                    {/* Navigation arrows */}
                    <button
                        className="absolute left-4 top-1/2 -translate-y-1/2 w-12 h-12 rounded-full bg-black/60 backdrop-blur-sm flex items-center justify-center text-white/70 hover:text-white hover:bg-[#00754B]/80 transition-all"
                        onClick={(e) => {
                            e.stopPropagation();
                            setLightboxIndex((prev) => (prev! > 0 ? prev! - 1 : salaPoseImages.length - 1));
                        }}
                    >
                        <ChevronLeft className="w-6 h-6" />
                    </button>
                    <button
                        className="absolute right-4 top-1/2 -translate-y-1/2 w-12 h-12 rounded-full bg-black/60 backdrop-blur-sm flex items-center justify-center text-white/70 hover:text-white hover:bg-[#00754B]/80 transition-all"
                        onClick={(e) => {
                            e.stopPropagation();
                            setLightboxIndex((prev) => (prev! < salaPoseImages.length - 1 ? prev! + 1 : 0));
                        }}
                    >
                        <ChevronRight className="w-6 h-6" />
                    </button>
                </motion.div>
            )}
        </section>
    );
}
