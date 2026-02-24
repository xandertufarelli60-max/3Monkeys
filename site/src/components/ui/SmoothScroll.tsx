'use client';

import { useEffect } from 'react';
import { usePathname } from 'next/navigation';
import Lenis from 'lenis';

export default function SmoothScroll({ children }: { children: React.ReactNode }) {
    const pathname = usePathname();

    // Lenis: creato una sola volta, non dipende dal pathname
    useEffect(() => {
        const lenis = new Lenis({
            duration: 1.2,
            easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
            orientation: 'vertical',
            gestureOrientation: 'vertical',
            smoothWheel: true,
            touchMultiplier: 2,
        });

        function raf(time: number) {
            lenis.raf(time);
            requestAnimationFrame(raf);
        }
        requestAnimationFrame(raf);

        return () => lenis.destroy();
    }, []);

    // IntersectionObserver: si ricrea ad ogni cambio pagina
    useEffect(() => {
        // Piccolo delay per dare a React il tempo di renderizzare i nuovi elementi
        const timer = setTimeout(() => {
            const revealElements = document.querySelectorAll(
                '.reveal, .reveal-stagger, .reveal-scale, .reveal-slideup'
            );

            const observer = new IntersectionObserver(
                (entries) => {
                    entries.forEach((entry) => {
                        if (entry.isIntersecting) {
                            entry.target.classList.add('visible');
                            observer.unobserve(entry.target);
                        }
                    });
                },
                { threshold: 0.1, rootMargin: '0px 0px -60px 0px' }
            );

            revealElements.forEach((el) => {
                // Rimuovi 'visible' dagli elementi non ancora in viewport (reset per re-navigazione)
                el.classList.remove('visible');
                observer.observe(el);
            });

            return () => observer.disconnect();
        }, 50);

        return () => clearTimeout(timer);
    }, [pathname]); // ← si riesegue ad ogni cambio rotta

    return <>{children}</>;
}

