"use client";

import { useState } from "react";

const faqs = [
    {
        question: "Quanto costa una produzione video?",
        answer:
            "Il costo dipende dalla complessità del progetto: crew, attrezzatura, giorni di ripresa e post-produzione richiesta. Lavoriamo su piccoli branded content fino a grandi produzioni televisive. Per un preventivo preciso, contattaci direttamente.",
        cta: { label: "Richiedi Preventivo", href: "/contact?type=production" },
    },
    {
        question: "Posso noleggiare attrezzature senza operatore?",
        answer:
            "Sì. Offriamo sia il noleggio dry (solo attrezzatura) che il noleggio con operator — camera operator, direttore della fotografia, tecnico audio. Scegli la soluzione più adatta alle tue esigenze.",
        cta: { label: "Esplora Noleggio", href: "/noleggio" },
    },
    {
        question: "Quali sono le tempistiche di consegna?",
        answer:
            "Dipende dal tipo di progetto. Per produzioni semplici con editing base, 5–7 giorni lavorativi. Per progetti più articolati con VFX e color grading, 2–4 settimane. Stabiliamo sempre timeline condivise prima dell'inizio.",
        cta: { label: "Richiedi Preventivo Personalizzato", href: "/contact?type=production" },
    },
];

export default function FAQSection() {
    const [openIndex, setOpenIndex] = useState<number | null>(null);

    return (
        <section className="py-24 px-6 bg-[#FAFAFA]">
            <div className="max-w-3xl mx-auto">
                <div className="text-center mb-12 reveal">
                    <span className="mono text-xs text-[#00754B] tracking-widest">FAQ</span>
                    <h2 className="mt-4">Domande Frequenti</h2>
                </div>

                <div className="space-y-0 reveal">
                    {faqs.map((faq, i) => {
                        const isOpen = openIndex === i;
                        return (
                            <div
                                key={i}
                                className="border-t border-[var(--border)] last:border-b"
                            >
                                <button
                                    onClick={() => setOpenIndex(isOpen ? null : i)}
                                    className="w-full flex items-center justify-between py-6 text-left cursor-pointer group"
                                    aria-expanded={isOpen}
                                >
                                    <span
                                        className="font-bold text-[var(--foreground)] pr-4 group-hover:text-[#00754B] transition-colors"
                                        style={{ fontFamily: "var(--font-display)", fontSize: "1.1rem" }}
                                    >
                                        {faq.question}
                                    </span>
                                    <span
                                        className="text-[#00754B] text-xl flex-shrink-0 transition-transform duration-300"
                                        style={{ transform: isOpen ? "rotate(45deg)" : "rotate(0deg)" }}
                                        aria-hidden="true"
                                    >
                                        +
                                    </span>
                                </button>

                                {/* Animated answer */}
                                <div
                                    style={{
                                        maxHeight: isOpen ? "300px" : "0",
                                        overflow: "hidden",
                                        transition: "max-height 0.35s cubic-bezier(0.16,1,0.3,1)",
                                    }}
                                >
                                    <div className="pb-6">
                                        <p className="text-[var(--muted)] text-sm leading-relaxed">
                                            {faq.answer}
                                        </p>
                                        <a
                                            href={faq.cta.href}
                                            className="mono text-xs text-[#00754B] mt-4 inline-block hover:underline"
                                        >
                                            {faq.cta.label} →
                                        </a>
                                    </div>
                                </div>
                            </div>
                        );
                    })}
                </div>
            </div>
        </section>
    );
}
