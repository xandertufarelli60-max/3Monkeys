'use client';

import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';
import { Building2, Mic, Video, Camera, Ruler, Wind, Wifi } from 'lucide-react';
import { salaPoseFeatures, technicalSpecs } from '@/data/noleggio';

const iconMap: Record<string, React.ElementType> = {
    Building2,
    Mic,
    Video,
    Camera,
};

export default function NoleggioFeatures() {
    const ref = useRef<HTMLDivElement>(null);
    const isInView = useInView(ref, { once: true, margin: '-100px' });

    const specIcons = [Ruler, Ruler, Wind, Wifi];

    return (
        <section className="py-24 px-6" ref={ref}>
            <div className="max-w-7xl mx-auto">
                {/* Section Header */}
                <motion.div
                    className="text-center mb-16"
                    initial={{ opacity: 0, y: 30 }}
                    animate={isInView ? { opacity: 1, y: 0 } : {}}
                    transition={{ duration: 0.8 }}
                >
                    <span className="mono text-xs text-[#00754B] tracking-widest">SERVIZI</span>
                    <h2 className="mt-4">Cosa Offriamo</h2>
                    <p className="text-[var(--muted)] mt-4 max-w-xl mx-auto">
                        Che tu sia un videomaker, un fotografo, un&apos;agenzia o una produzione,
                        trovi un ambiente versatile e supporto tecnico dedicato.
                    </p>
                </motion.div>

                {/* Feature Cards */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-20">
                    {salaPoseFeatures.map((feature, index) => {
                        const Icon = iconMap[feature.icon] || Camera;
                        return (
                            <motion.div
                                key={index}
                                className="group p-8 rounded-lg bg-[var(--background)] border border-[var(--border)] hover:border-[#00754B]/30 transition-all duration-500 card-tv-hover"
                                initial={{ opacity: 0, y: 30 }}
                                animate={isInView ? { opacity: 1, y: 0 } : {}}
                                transition={{ duration: 0.6, delay: 0.1 * index }}
                            >
                                <Icon className="w-8 h-8 mb-4 text-[var(--muted)] group-hover:text-[#00754B] transition-colors" />
                                <h3 className="text-base sm:text-lg lg:text-xl font-bold mt-3 break-words hyphens-auto leading-tight">
                                    {feature.title}
                                </h3>
                                <p className="text-[var(--muted)] text-sm mt-3 leading-relaxed">
                                    {feature.description}
                                </p>
                            </motion.div>
                        );
                    })}
                </div>

                {/* Technical Specs */}
                <motion.div
                    className="bg-[#050505] arsenal-mode rounded-lg p-8 md:p-12"
                    initial={{ opacity: 0, y: 30 }}
                    animate={isInView ? { opacity: 1, y: 0 } : {}}
                    transition={{ duration: 0.8, delay: 0.4 }}
                >
                    <div className="text-center mb-8">
                        <span className="mono text-xs text-[#00754B] tracking-widest">SPECIFICHE TECNICHE</span>
                        <h3 className="text-white mt-3 text-2xl font-bold">La Sala in Numeri</h3>
                    </div>
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
                        {technicalSpecs.map((spec, index) => {
                            const SpecIcon = specIcons[index] || Ruler;
                            return (
                                <motion.div
                                    key={index}
                                    className="text-center"
                                    initial={{ opacity: 0, scale: 0.9 }}
                                    animate={isInView ? { opacity: 1, scale: 1 } : {}}
                                    transition={{ duration: 0.5, delay: 0.5 + 0.05 * index }}
                                >
                                    <SpecIcon className="w-5 h-5 text-[#00754B] mx-auto mb-2" />
                                    <p className="text-white font-bold text-lg">{spec.value}</p>
                                    <p className="mono text-xs text-[#888] mt-1">{spec.label}</p>
                                </motion.div>
                            );
                        })}
                    </div>
                </motion.div>
            </div>
        </section>
    );
}
