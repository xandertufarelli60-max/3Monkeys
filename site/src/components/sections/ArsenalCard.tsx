'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';
import { useState } from 'react';
import { ArsenalItem, categoryLabels } from '@/data/arsenal';
import { Plus, X, Info } from 'lucide-react';

interface ArsenalCardProps {
    item: ArsenalItem;
    onAddToKit: (item: ArsenalItem) => void;
}

export default function ArsenalCard({ item, onAddToKit }: ArsenalCardProps) {
    const [isExpanded, setIsExpanded] = useState(false);

    return (
        <>
            {/* Main Card */}
            <motion.article
                className="group relative arsenal-item arsenal-glow cursor-pointer"
                data-cursor="info"
                onClick={() => setIsExpanded(true)}
                whileHover={{ scale: 1.02 }}
                transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
            >
                {/* Image Container */}
                <div className="relative aspect-[4/3] bg-[#0A0A0A] overflow-hidden rounded-lg">
                    <Image
                        src={item.image}
                        alt={item.name}
                        fill
                        className="object-cover opacity-90 group-hover:opacity-100 transition-opacity duration-500"
                    />

                    {/* Glow Effect */}
                    <div className="absolute inset-0 bg-gradient-to-t from-[#00754B]/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

                    {/* Category Badge */}
                    <span className="absolute top-3 left-3 mono text-[10px] text-white/70 bg-black/50 px-2 py-1 rounded">
                        {categoryLabels[item.category]}
                    </span>

                    {/* Featured Badge */}
                    {item.featured && (
                        <span className="absolute top-3 right-3 mono text-[10px] text-[#00754B] bg-[#00754B]/20 px-2 py-1 rounded border border-[#00754B]/50">
                            FEATURED
                        </span>
                    )}
                </div>

                {/* Info Bar */}
                <div className="mt-4 flex items-start justify-between gap-4">
                    <div>
                        <h3 className="mono text-sm font-bold text-white">{item.name}</h3>
                        <p className="mono text-xs text-[var(--muted)] mt-1">{item.tagline}</p>
                    </div>

                    <button
                        onClick={(e) => {
                            e.stopPropagation();
                            onAddToKit(item);
                        }}
                        className="flex-shrink-0 p-2 rounded-full border border-[var(--border)] hover:border-[#00754B] hover:bg-[#00754B]/10 transition-all duration-300"
                        aria-label={`Add ${item.name} to kit`}
                    >
                        <Plus className="w-4 h-4" />
                    </button>
                </div>
            </motion.article>

            {/* Expanded Panel (Off-Canvas) */}
            {isExpanded && (
                <motion.div
                    className="fixed inset-0 z-50 flex justify-end"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                >
                    {/* Backdrop */}
                    <div
                        className="absolute inset-0 bg-black/80 backdrop-blur-sm"
                        onClick={() => setIsExpanded(false)}
                    />

                    {/* Panel */}
                    <motion.div
                        className="relative w-full max-w-lg bg-[#0A0A0A] border-l border-[var(--border)] overflow-y-auto"
                        initial={{ x: '100%' }}
                        animate={{ x: 0 }}
                        exit={{ x: '100%' }}
                        transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
                    >
                        {/* Close Button */}
                        <button
                            onClick={() => setIsExpanded(false)}
                            className="absolute top-6 right-6 p-2 rounded-full border border-[var(--border)] hover:border-[#00754B] transition-colors z-10"
                            aria-label="Close panel"
                        >
                            <X className="w-5 h-5" />
                        </button>

                        {/* Hero Image */}
                        <div className="relative aspect-video bg-black">
                            <Image
                                src={item.image}
                                alt={item.name}
                                fill
                                className="object-cover"
                            />
                        </div>

                        {/* Content */}
                        <div className="p-8">
                            {/* Header */}
                            <span className="mono text-xs text-[#00754B]">{item.brand}</span>
                            <h2 className="text-3xl font-bold mt-2 text-white">{item.name}</h2>
                            <p className="mono text-sm text-[var(--muted)] mt-1">{item.tagline}</p>

                            {/* Auteur Description */}
                            <p className="text-white/80 mt-6 leading-relaxed">
                                {item.description}
                            </p>

                            {/* Tech Specs */}
                            <div className="mt-8 border-t border-[var(--border)] pt-8">
                                <h3 className="mono text-xs text-[var(--muted)] mb-4 flex items-center gap-2">
                                    <Info className="w-4 h-4" />
                                    TECHNICAL SPECIFICATIONS
                                </h3>

                                <dl className="space-y-3">
                                    {Object.entries(item.specs).map(([key, value]) => (
                                        <div key={key} className="flex justify-between items-baseline">
                                            <dt className="mono text-xs text-[var(--muted)]">{key}</dt>
                                            <dd className="mono text-sm text-white font-medium">{value}</dd>
                                        </div>
                                    ))}
                                </dl>
                            </div>

                            {/* CTA */}
                            <button
                                onClick={() => {
                                    onAddToKit(item);
                                    setIsExpanded(false);
                                }}
                                className="w-full mt-8 btn-primary justify-center"
                            >
                                <Plus className="w-4 h-4" />
                                Add to Crew List
                            </button>

                            {/* Used In */}
                            {item.usedIn && item.usedIn.length > 0 && (
                                <div className="mt-8 pt-6 border-t border-[var(--border)]">
                                    <span className="mono text-xs text-[var(--muted)]">RECENTLY USED IN</span>
                                    <div className="flex flex-wrap gap-2 mt-3">
                                        {item.usedIn.map((projectId) => (
                                            <span
                                                key={projectId}
                                                className="mono text-xs px-3 py-1 bg-white/5 rounded-full text-white/70"
                                            >
                                                {projectId.replace(/-/g, ' ').toUpperCase()}
                                            </span>
                                        ))}
                                    </div>
                                </div>
                            )}
                        </div>
                    </motion.div>
                </motion.div>
            )}
        </>
    );
}
