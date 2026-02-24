'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';
import { Play, ExternalLink } from 'lucide-react';
import { produzioni } from '@/data/produzioni';

export default function ProduzioniPage() {
    return (
        <div className="min-h-screen bg-[var(--background)]">
            {/* Hero Section */}
            <section className="pt-32 pb-16 px-6">
                <div className="max-w-7xl mx-auto">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
                        className="max-w-3xl"
                    >
                        <span className="mono text-xs text-[#00754B] tracking-widest">PRODUZIONI TELEVISIVE</span>
                        <h1 className="mt-4" style={{ fontSize: 'clamp(2.5rem, 7vw, 5rem)' }}>
                            Le Nostre Produzioni
                        </h1>
                        <p className="text-[var(--muted)] mt-6 leading-relaxed text-lg max-w-2xl">
                            Storie che prendono vita attraverso il linguaggio del cinema.
                            Ogni produzione è un viaggio creativo dall&apos;idea al grande schermo.
                        </p>
                    </motion.div>
                </div>
            </section>

            {/* Productions Grid */}
            <section className="py-12 px-6">
                <div className="max-w-7xl mx-auto">
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                        {produzioni.map((produzione, index) => (
                            <motion.a
                                key={produzione.id}
                                href={produzione.youtubeUrl}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="group relative block cursor-pointer produzioni-card"
                                initial={{ opacity: 0, y: 40 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true, margin: '-50px' }}
                                transition={{ duration: 0.6, delay: index * 0.15, ease: [0.16, 1, 0.3, 1] }}
                                aria-label={`Guarda ${produzione.title} su YouTube`}
                            >
                                {/* Frame Image */}
                                <div className="relative aspect-video overflow-hidden rounded-lg bg-[var(--border)]">
                                    <Image
                                        src={produzione.frame}
                                        alt={produzione.alt}
                                        fill
                                        className="object-cover transition-transform duration-700 group-hover:scale-105"
                                        sizes="(max-width: 768px) 100vw, 33vw"
                                    />

                                    {/* Hover Overlay */}
                                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-black/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

                                    {/* Play Button */}
                                    <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-500">
                                        <div className="w-20 h-20 rounded-full bg-[#FF0000] flex items-center justify-center shadow-2xl transform scale-75 group-hover:scale-100 transition-transform duration-500">
                                            <Play className="w-8 h-8 text-white ml-1" fill="white" />
                                        </div>
                                    </div>

                                    {/* External Link Indicator */}
                                    <div className="absolute top-4 right-4 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                                        <div className="bg-black/50 backdrop-blur-sm rounded-full p-2">
                                            <ExternalLink className="w-4 h-4 text-white" />
                                        </div>
                                    </div>

                                    {/* Scanlines Overlay (subtle on hover) */}
                                    <div className="absolute inset-0 pointer-events-none opacity-0 group-hover:opacity-100 transition-opacity duration-500 produzioni-scanline" />
                                </div>

                                {/* Info */}
                                <div className="mt-5">
                                    <span className="teletext">{produzione.subtitle}</span>
                                    <h3 className="text-xl font-bold mt-3 group-hover:text-[#00754B] transition-colors duration-300">
                                        {produzione.title}
                                    </h3>
                                    <p className="text-[var(--muted)] text-sm mt-2 leading-relaxed">
                                        {produzione.description}
                                    </p>
                                    <span className="mono text-xs text-[var(--muted)] mt-3 flex items-center gap-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                                        Guarda su YouTube <ExternalLink className="w-3 h-3" />
                                    </span>
                                </div>
                            </motion.a>
                        ))}
                    </div>
                </div>
            </section>

            {/* CTA */}
            <section className="py-24 px-6 border-t border-[var(--border)]">
                <div className="max-w-3xl mx-auto text-center">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
                    >
                        <span className="mono text-xs text-[var(--muted)]">IL TUO PROGETTO</span>
                        <h2 className="mt-4">Vuoi Produrre Con Noi?</h2>
                        <p className="text-[var(--muted)] mt-4 max-w-lg mx-auto">
                            Dal concept alla post-produzione, trasformiamo la tua visione
                            in una produzione di alto livello.
                        </p>
                        <a href="/contact" className="btn-primary mt-8 inline-flex">
                            Inizia il Tuo Progetto
                        </a>
                    </motion.div>
                </div>
            </section>
        </div>
    );
}
