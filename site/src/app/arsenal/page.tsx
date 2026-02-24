'use client';

import { useState } from 'react';
import { arsenalData, categoryLabels, ArsenalItem } from '@/data/arsenal';
import ArsenalCard from '@/components/sections/ArsenalCard';
import { useKit } from '@/lib/KitContext';
import { motion } from 'framer-motion';

type CategoryFilter = ArsenalItem['category'] | 'all';

export default function ArsenalPage() {
    const [activeCategory, setActiveCategory] = useState<CategoryFilter>('all');
    const { addItem } = useKit();

    const filteredItems =
        activeCategory === 'all'
            ? arsenalData
            : arsenalData.filter((item) => item.category === activeCategory);

    const categories: CategoryFilter[] = ['all', 'cameras', 'lenses', 'lights', 'grip', 'drones'];

    return (
        <div className="arsenal-mode bg-[#050505] min-h-screen">
            {/* Header */}
            <section className="pt-32 pb-12 px-6">
                <div className="max-w-7xl mx-auto">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
                    >
                        <span className="mono text-xs text-[#00754B]">PROFESSIONAL EQUIPMENT</span>
                        <h1 className="text-white mt-2">The Arsenal</h1>
                        <p className="mono text-sm text-[var(--muted)] mt-4 max-w-xl">
                            Cinema-grade tools for visionaries. Every piece hand-selected for reliability
                            and creative potential.
                        </p>
                    </motion.div>
                </div>
            </section>

            {/* Category Filter */}
            <section className="sticky top-20 z-30 bg-[#050505]/90 backdrop-blur-md border-y border-[var(--border)] py-4 px-6">
                <div className="max-w-7xl mx-auto">
                    <div className="flex flex-wrap gap-2">
                        {categories.map((cat) => (
                            <button
                                key={cat}
                                onClick={() => setActiveCategory(cat)}
                                className={`mono text-xs px-4 py-2 rounded-full border transition-all duration-300 ${activeCategory === cat
                                    ? 'bg-[#00754B] border-[#00754B] text-white'
                                    : 'border-[var(--border)] text-[var(--muted)] hover:border-white/50 hover:text-white'
                                    }`}
                            >
                                {cat === 'all' ? 'All Equipment' : categoryLabels[cat]}
                            </button>
                        ))}
                    </div>
                </div>
            </section>

            {/* Equipment Grid */}
            <section className="py-12 px-6">
                <div className="max-w-7xl mx-auto">
                    <motion.div
                        className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
                        layout
                    >
                        {filteredItems.map((item, index) => (
                            <motion.div
                                key={item.id}
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.5, delay: index * 0.1 }}
                                layout
                            >
                                <ArsenalCard item={item} onAddToKit={addItem} />
                            </motion.div>
                        ))}
                    </motion.div>

                    {filteredItems.length === 0 && (
                        <div className="text-center py-24">
                            <p className="mono text-sm text-[var(--muted)]">
                                No equipment found in this category.
                            </p>
                        </div>
                    )}
                </div>
            </section>

            {/* CTA */}
            <section className="py-24 px-6 border-t border-[var(--border)]">
                <div className="max-w-3xl mx-auto text-center">
                    <span className="mono text-xs text-[#00754B]">NEED SOMETHING SPECIFIC?</span>
                    <h2 className="text-white mt-4">Can&apos;t Find What You Need?</h2>
                    <p className="mono text-sm text-[var(--muted)] mt-4">
                        Our inventory extends beyond what&apos;s listed. Contact us for specialty items,
                        custom setups, or full production packages.
                    </p>
                    <a href="/contact?type=rental" className="btn-primary mt-8 inline-flex">
                        Contact Our Gear Team
                    </a>
                </div>
            </section>
        </div>
    );
}
