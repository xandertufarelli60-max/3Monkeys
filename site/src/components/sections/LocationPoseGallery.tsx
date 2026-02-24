'use client';

import { motion, useInView } from 'framer-motion';
import { useRef, useState } from 'react';
import Image from 'next/image';
import { salaPoseImages } from '@/data/noleggio';
import { X } from 'lucide-react';

export default function LocationPoseGallery() {
    const ref = useRef<HTMLDivElement>(null);
    const isInView = useInView(ref, { once: true, margin: '-100px' });
    const [lightboxIndex, setLightboxIndex] = useState<number | null>(null);

    return (
        <section className="py-24 px-6 bg-[#050505] dark-mode" ref={ref}>
            <div className="max-w-7xl mx-auto">
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

                {/* Gallery Grid */}
                <div className={`grid gap-4 ${salaPoseImages.length <= 2 ? 'grid-cols-1 md:grid-cols-2' : 'grid-cols-2 md:grid-cols-3 lg:grid-cols-4'}`}>
                    {salaPoseImages.map((image, index) => (
                        <motion.div
                            key={index}
                            className={`relative overflow-hidden rounded-lg cursor-pointer group ${salaPoseImages.length > 2 && index === 0 ? 'col-span-2 row-span-2' : ''
                                }`}
                            style={{ aspectRatio: salaPoseImages.length > 2 && index === 0 ? '1' : '16/9' }}
                            initial={{ opacity: 0, y: 20 }}
                            animate={isInView ? { opacity: 1, y: 0 } : {}}
                            transition={{ duration: 0.5, delay: 0.1 * index }}
                            onClick={() => setLightboxIndex(index)}
                        >
                            <Image
                                src={image.src}
                                alt={image.alt}
                                fill
                                className="object-cover transition-transform duration-700 group-hover:scale-110"
                                sizes={index === 0 ? '(max-width: 768px) 100vw, 50vw' : '(max-width: 768px) 50vw, 25vw'}
                            />
                            {/* Hover Overlay */}
                            <div className="absolute inset-0 bg-[#00754B]/0 group-hover:bg-[#00754B]/20 transition-colors duration-500" />
                            <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex items-end p-4">
                                <span className="mono text-xs text-white/90 bg-black/50 px-3 py-1 rounded-full backdrop-blur-sm">
                                    {image.alt}
                                </span>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>

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
                        className="absolute left-4 top-1/2 -translate-y-1/2 text-white/70 hover:text-white text-4xl transition-colors"
                        onClick={(e) => {
                            e.stopPropagation();
                            setLightboxIndex((prev) => (prev! > 0 ? prev! - 1 : salaPoseImages.length - 1));
                        }}
                    >
                        ‹
                    </button>
                    <button
                        className="absolute right-4 top-1/2 -translate-y-1/2 text-white/70 hover:text-white text-4xl transition-colors"
                        onClick={(e) => {
                            e.stopPropagation();
                            setLightboxIndex((prev) => (prev! < salaPoseImages.length - 1 ? prev! + 1 : 0));
                        }}
                    >
                        ›
                    </button>
                </motion.div>
            )}
        </section>
    );
}
