'use client';

import Link from 'next/link';
import Image from 'next/image';
import { useState, useEffect, useCallback } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X } from 'lucide-react';

const navItems = [
    { name: 'Produzione', href: '/produzioni' },
    { name: 'Chi siamo', href: '/studio' },
    { name: 'Noleggio', href: '/noleggio' },
    { name: 'Contatti', href: '/contact' },
];

export default function Header() {
    const [isScrolled, setIsScrolled] = useState(false);
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
    const [isDarkSection, setIsDarkSection] = useState(false);

    // Detect if header overlaps a dark section
    const checkDarkSection = useCallback(() => {
        const header = document.querySelector('header');
        if (!header) return;

        const headerRect = header.getBoundingClientRect();
        const headerMiddle = headerRect.top + headerRect.height / 2;

        // Get element at header's middle point
        const elementAtPoint = document.elementFromPoint(window.innerWidth / 2, headerMiddle);
        if (!elementAtPoint) return;

        // Check if element or any parent has dark background
        let element: Element | null = elementAtPoint;
        while (element && element !== document.body) {
            const computedStyle = window.getComputedStyle(element);
            const bgColor = computedStyle.backgroundColor;

            // Check for dark-mode class or dark backgrounds
            if (element.classList.contains('dark-mode') ||
                element.classList.contains('bg-[#050505]') ||
                element.closest('.dark-mode') ||
                element.closest('[class*="bg-[#0"]')) {
                setIsDarkSection(true);
                return;
            }

            // Parse RGB and check if dark (luminance < 50)
            const rgbMatch = bgColor.match(/rgb\((\d+),\s*(\d+),\s*(\d+)\)/);
            if (rgbMatch) {
                const [, r, g, b] = rgbMatch.map(Number);
                const luminance = (0.299 * r + 0.587 * g + 0.114 * b);
                if (luminance < 50 && bgColor !== 'rgba(0, 0, 0, 0)') {
                    setIsDarkSection(true);
                    return;
                }
            }

            element = element.parentElement;
        }

        setIsDarkSection(false);
    }, []);

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 50);
            checkDarkSection();
        };

        // Initial check
        checkDarkSection();

        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, [checkDarkSection]);

    // On light backgrounds, use dark logo; on dark backgrounds, use light logo
    // When scrolled, header has its own bg so use dark logo
    const useDarkLogo = isScrolled || !isDarkSection;

    return (
        <>
            <motion.header
                className={`fixed top-4 left-4 right-4 z-50 transition-all duration-500 ${isScrolled
                    ? 'bg-[var(--background)]/80 backdrop-blur-md border border-[var(--border)] rounded-lg'
                    : 'bg-transparent'
                    }`}
                initial={{ y: -100, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
            >
                <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
                    {/* Logo - green version everywhere */}
                    <Link href="/" className="group flex items-center gap-3">
                        <Image
                            src="/images/logo-green.png"
                            alt="3 Monkeys Film"
                            width={220}
                            height={55}
                            className="h-16 md:h-20 w-auto object-contain transition-all duration-300"
                            priority
                        />
                    </Link>

                    {/* Desktop Navigation */}
                    <nav className="hidden md:flex items-center gap-8">
                        {navItems.map((item) => (
                            <Link
                                key={item.name}
                                href={item.href}
                                className="mono text-xs text-[var(--muted)] hover:text-[var(--foreground)] transition-colors duration-200 relative group"
                            >
                                {item.name}
                                <span className="absolute -bottom-1 left-0 w-0 h-px bg-[#00754B] transition-all duration-300 group-hover:w-full" />
                            </Link>
                        ))}
                    </nav>

                    {/* Mobile Menu Toggle */}
                    <button
                        onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                        className="md:hidden p-2 hover:bg-[var(--border)] rounded-lg transition-colors"
                        aria-label={isMobileMenuOpen ? 'Close menu' : 'Open menu'}
                    >
                        {isMobileMenuOpen ? (
                            <X className="w-6 h-6" />
                        ) : (
                            <Menu className="w-6 h-6" />
                        )}
                    </button>
                </div>
            </motion.header>

            {/* Mobile Menu */}
            <AnimatePresence>
                {isMobileMenuOpen && (
                    <motion.div
                        className="fixed inset-0 z-40 bg-[var(--background)] md:hidden"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        transition={{ duration: 0.3 }}
                    >
                        <nav className="flex flex-col items-center justify-center h-full gap-8">
                            {navItems.map((item, index) => (
                                <motion.div
                                    key={item.name}
                                    initial={{ opacity: 0, y: 20 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    exit={{ opacity: 0, y: 20 }}
                                    transition={{ duration: 0.3, delay: index * 0.1 }}
                                >
                                    <Link
                                        href={item.href}
                                        onClick={() => setIsMobileMenuOpen(false)}
                                        className="text-4xl font-bold hover:text-[#00754B] transition-colors"
                                    >
                                        {item.name}
                                    </Link>
                                </motion.div>
                            ))}
                        </nav>
                    </motion.div>
                )}
            </AnimatePresence>
        </>
    );
}
