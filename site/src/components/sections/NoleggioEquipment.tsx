'use client';

import { motion, useInView } from 'framer-motion';
import { useRef, useState } from 'react';
import { Camera, Lightbulb, Settings, Mic } from 'lucide-react';
import { equipmentCategories } from '@/data/noleggio';

const iconMap: Record<string, React.ElementType> = {
    Camera,
    Lightbulb,
    Settings,
    Mic,
};

export default function NoleggioEquipment() {
    const ref = useRef<HTMLDivElement>(null);
    const isInView = useInView(ref, { once: true, margin: '-100px' });
    const [activeCategory, setActiveCategory] = useState<string | null>(null);

    return (
        <section id="attrezzatura" className="py-24 px-6 bg-[#050505] dark-mode" ref={ref}>
            <div className="max-w-7xl mx-auto">
                {/* Section Header */}
                <motion.div
                    className="text-center mb-16"
                    initial={{ opacity: 0, y: 30 }}
                    animate={isInView ? { opacity: 1, y: 0 } : {}}
                    transition={{ duration: 0.8 }}
                >
                    <span className="mono text-xs text-[#00754B] tracking-widest">EQUIPMENT</span>
                    <h2 className="mt-4 text-white" style={{ textShadow: '0 0 40px rgba(0,117,75,0.2)' }}>
                        Noleggio Materiale Professionale
                    </h2>
                    <p className="text-[#888] mt-4 max-w-2xl mx-auto">
                        Un servizio completo di noleggio materiale tecnico, dalla fotografia al video,
                        con tutto il necessario per un set professionale.
                    </p>
                </motion.div>

                {/* Category Cards */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                    {equipmentCategories.map((category, index) => {
                        const Icon = iconMap[category.icon] || Camera;
                        const isOpen = activeCategory === category.id;

                        return (
                            <motion.div
                                key={category.id}
                                className={`group relative rounded-lg overflow-hidden cursor-pointer transition-all duration-500 ${isOpen
                                    ? 'bg-[#00754B]/10 border-2 border-[#00754B]'
                                    : 'bg-[#0A0A0A] border border-[#2A2A2A] hover:border-[#00754B]/50'
                                    }`}
                                initial={{ opacity: 0, y: 30 }}
                                animate={isInView ? { opacity: 1, y: 0 } : {}}
                                transition={{ duration: 0.6, delay: 0.1 * index }}
                                onClick={() => setActiveCategory(isOpen ? null : category.id)}
                            >
                                {/* Card Header */}
                                <div className="p-6 flex items-center gap-4">
                                    <div className={`w-12 h-12 rounded-lg flex items-center justify-center transition-colors ${isOpen ? 'bg-[#00754B]' : 'bg-[#1A1A1A] group-hover:bg-[#00754B]/20'
                                        }`}>
                                        <Icon className={`w-6 h-6 ${isOpen ? 'text-white' : 'text-[#00754B]'}`} />
                                    </div>
                                    <div>
                                        <h3 className="text-white font-bold text-lg">{category.name}</h3>
                                        <p className="mono text-xs text-[#888]">{category.items.length} categorie</p>
                                    </div>
                                </div>

                                {/* Expandable Items List */}
                                <motion.div
                                    initial={false}
                                    animate={{
                                        height: isOpen ? 'auto' : 0,
                                        opacity: isOpen ? 1 : 0,
                                    }}
                                    transition={{ duration: 0.3 }}
                                    className="overflow-hidden"
                                >
                                    <div className="px-6 pb-6 pt-2 border-t border-[#2A2A2A]">
                                        <ul className="space-y-3">
                                            {category.items.map((item, i) => (
                                                <li
                                                    key={i}
                                                    className="flex items-center gap-3 text-sm text-[#888]"
                                                >
                                                    <span className="w-1.5 h-1.5 rounded-full bg-[#00754B] flex-shrink-0" />
                                                    {item}
                                                </li>
                                            ))}
                                        </ul>
                                    </div>
                                </motion.div>

                                {/* Glow Effect */}
                                <div className="absolute inset-0 pointer-events-none">
                                    <div className={`absolute inset-0 bg-[#00754B] opacity-0 blur-[40px] -z-10 transition-opacity duration-500 ${isOpen ? 'opacity-20' : 'group-hover:opacity-10'
                                        }`} />
                                </div>
                            </motion.div>
                        );
                    })}
                </div>

                {/* Bottom Note */}
                <motion.p
                    className="text-center mono text-xs text-[#888] mt-12"
                    initial={{ opacity: 0 }}
                    animate={isInView ? { opacity: 1 } : {}}
                    transition={{ duration: 0.6, delay: 0.6 }}
                >
                    L&apos;inventario si estende oltre quanto elencato. Contattaci per attrezzature speciali e pacchetti personalizzati.
                </motion.p>
            </div>
        </section>
    );
}
