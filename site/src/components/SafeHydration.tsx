"use client";
import { useEffect, useState, type ReactNode } from "react";

interface SafeHydrationProps {
    children: ReactNode;
}

export default function SafeHydration({ children }: SafeHydrationProps) {
    const [mounted, setMounted] = useState(false);

    useEffect(() => {
        // Rimuovi attributi iniettati da estensioni browser che causano hydration mismatch
        const html = document.documentElement;
        const body = document.body;
        const badAttrs = [
            "data-jetski-tab-id",
            "data-new-gr-c-s-check-loaded",
            "data-gr-ext-installed",
        ];

        badAttrs.forEach((attr) => {
            html.removeAttribute(attr);
            body.removeAttribute(attr);
        });

        setMounted(true);
    }, []);

    if (!mounted) return <div style={{ visibility: "hidden" }}>{children}</div>;
    return <>{children}</>;
}
