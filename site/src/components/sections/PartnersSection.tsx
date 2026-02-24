'use client';

import Image from 'next/image';
import { motion } from 'framer-motion';

interface Partner {
    name: string;
    logo: string;
    width: number;
    height: number;
}

const partners: Partner[] = [
    { name: 'Banijay Italia', logo: '/partners/banijay.svg', width: 140, height: 60 },
    { name: 'Fremantle', logo: '/partners/fremantle.svg', width: 140, height: 60 },
    { name: 'Blu Yazmine', logo: '/partners/by.png', width: 100, height: 60 },
    { name: 'Papiro', logo: '/partners/papiro.svg', width: 120, height: 60 },
];

export default function PartnersSection() {
    return (
        <section className="py-12 px-6 bg-[#F5F5F5] border-y border-[var(--border)]">
            <div className="max-w-7xl mx-auto">
                <motion.p
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                    className="mono text-xs text-center text-[var(--muted)] mb-10 tracking-widest"
                >
                    TRUSTED BY INDUSTRY LEADERS
                </motion.p>

                {/* Partner Logo Grid */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, delay: 0.2 }}
                    className="flex flex-wrap items-center justify-center gap-8 md:gap-12 lg:gap-16"
                >
                    {partners.map((partner, index) => (
                        <motion.div
                            key={partner.name}
                            initial={{ opacity: 0, scale: 0.9 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.4, delay: 0.1 * index }}
                            className="group relative flex items-center justify-center p-4"
                        >
                            <div className="relative transition-all duration-500 grayscale opacity-50 group-hover:grayscale-0 group-hover:opacity-100">
                                <Image
                                    src={partner.logo}
                                    alt={`${partner.name} logo`}
                                    width={partner.width}
                                    height={partner.height}
                                    className="object-contain max-h-[60px] w-auto"
                                    loading="lazy"
                                />
                            </div>
                        </motion.div>
                    ))}
                </motion.div>
            </div>
        </section>
    );
}
