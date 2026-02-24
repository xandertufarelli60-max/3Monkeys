'use client';

import { motion, AnimatePresence } from 'framer-motion';
import { useKit } from '@/lib/KitContext';
import { X, Minus, Plus, FileText, Trash2, Package } from 'lucide-react';
import Image from 'next/image';

export default function KitSidebar() {
    const { items, isOpen, setIsOpen, updateQuantity, removeItem, clearKit, totalItems } = useKit();

    return (
        <>
            {/* Floating Badge */}
            <motion.button
                onClick={() => setIsOpen(!isOpen)}
                className="fixed bottom-6 right-6 z-40 flex items-center gap-2 px-4 py-3 bg-[#00754B] text-white rounded-full shadow-lg shadow-[#00754B]/30"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                initial={{ scale: 0, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
            >
                <Package className="w-5 h-5" />
                <span className="mono text-xs font-bold">{totalItems}</span>
            </motion.button>

            {/* Sidebar */}
            <AnimatePresence>
                {isOpen && (
                    <>
                        {/* Backdrop */}
                        <motion.div
                            className="fixed inset-0 z-40 bg-black/50 backdrop-blur-sm"
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            exit={{ opacity: 0 }}
                            onClick={() => setIsOpen(false)}
                        />

                        {/* Panel */}
                        <motion.aside
                            className="fixed top-0 right-0 bottom-0 z-50 w-full max-w-md bg-[var(--background)] border-l border-[var(--border)] flex flex-col"
                            initial={{ x: '100%' }}
                            animate={{ x: 0 }}
                            exit={{ x: '100%' }}
                            transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
                        >
                            {/* Header */}
                            <div className="flex items-center justify-between p-6 border-b border-[var(--border)]">
                                <div>
                                    <h2 className="mono text-xs text-[var(--muted)]">PRODUCTION MANIFEST</h2>
                                    <p className="text-xl font-bold mt-1">Crew List</p>
                                </div>
                                <button
                                    onClick={() => setIsOpen(false)}
                                    className="p-2 rounded-full border border-[var(--border)] hover:border-[#00754B] transition-colors"
                                    aria-label="Close kit sidebar"
                                >
                                    <X className="w-5 h-5" />
                                </button>
                            </div>

                            {/* Items */}
                            <div className="flex-1 overflow-y-auto p-6">
                                {items.length === 0 ? (
                                    <div className="text-center py-12">
                                        <Package className="w-12 h-12 mx-auto text-[var(--muted)] opacity-50" />
                                        <p className="mono text-sm text-[var(--muted)] mt-4">
                                            Your crew list is empty
                                        </p>
                                        <p className="text-xs text-[var(--muted)] mt-2">
                                            Add equipment from Noleggio
                                        </p>
                                    </div>
                                ) : (
                                    <ul className="space-y-4">
                                        {items.map((item) => (
                                            <motion.li
                                                key={item.id}
                                                className="flex gap-4 p-4 bg-[var(--border)]/10 rounded-lg"
                                                layout
                                                initial={{ opacity: 0, y: 20 }}
                                                animate={{ opacity: 1, y: 0 }}
                                                exit={{ opacity: 0, x: -20 }}
                                            >
                                                {/* Thumbnail */}
                                                <div className="relative w-20 h-16 rounded overflow-hidden flex-shrink-0">
                                                    <Image
                                                        src={item.image}
                                                        alt={item.name}
                                                        fill
                                                        className="object-cover"
                                                    />
                                                </div>

                                                {/* Info */}
                                                <div className="flex-1 min-w-0">
                                                    <p className="mono text-xs text-[var(--muted)]">{item.brand}</p>
                                                    <h4 className="font-bold truncate">{item.name}</h4>

                                                    {/* Quantity Controls */}
                                                    <div className="flex items-center gap-2 mt-2">
                                                        <button
                                                            onClick={() => updateQuantity(item.id, item.quantity - 1)}
                                                            className="p-1 rounded hover:bg-[var(--border)] transition-colors"
                                                            aria-label="Decrease quantity"
                                                        >
                                                            <Minus className="w-4 h-4" />
                                                        </button>
                                                        <span className="mono text-sm w-6 text-center">{item.quantity}</span>
                                                        <button
                                                            onClick={() => updateQuantity(item.id, item.quantity + 1)}
                                                            className="p-1 rounded hover:bg-[var(--border)] transition-colors"
                                                            aria-label="Increase quantity"
                                                        >
                                                            <Plus className="w-4 h-4" />
                                                        </button>
                                                    </div>
                                                </div>

                                                {/* Remove */}
                                                <button
                                                    onClick={() => removeItem(item.id)}
                                                    className="self-start p-2 rounded hover:bg-red-500/10 text-[var(--muted)] hover:text-red-500 transition-colors"
                                                    aria-label={`Remove ${item.name}`}
                                                >
                                                    <Trash2 className="w-4 h-4" />
                                                </button>
                                            </motion.li>
                                        ))}
                                    </ul>
                                )}
                            </div>

                            {/* Footer */}
                            {items.length > 0 && (
                                <div className="p-6 border-t border-[var(--border)] space-y-3">
                                    <button
                                        onClick={clearKit}
                                        className="w-full btn-ghost justify-center text-[var(--muted)]"
                                    >
                                        <Trash2 className="w-4 h-4" />
                                        Clear List
                                    </button>
                                    <button className="w-full btn-primary justify-center">
                                        <FileText className="w-4 h-4" />
                                        Request Quote
                                    </button>
                                </div>
                            )}
                        </motion.aside>
                    </>
                )}
            </AnimatePresence>
        </>
    );
}
