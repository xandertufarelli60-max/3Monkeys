'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import { Send, MapPin, Phone, Mail, Clock, ArrowRight, CheckCircle } from 'lucide-react';

type ContactType = 'production' | 'rental';

function sanitizeInput(input: string, maxLength: number = 500): string {
    return input.trim().replace(/[\r\n]{3,}/g, '\n\n').slice(0, maxLength);
}

export default function ContactPage() {
    const [contactType, setContactType] = useState<ContactType>('production');
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [isSubmitted, setIsSubmitted] = useState(false);

    const CONTACT_EMAIL = '3monkeysfilm@gmail.com';

    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        const form = e.currentTarget;
        const formData = new FormData(form);

        // Anti-bot honeypot check
        const honeypot = formData.get('website') as string;
        if (honeypot) return;

        const name = sanitizeInput(formData.get('name') as string || '', 100);
        const email = sanitizeInput(formData.get('email') as string || '', 150);
        const message = sanitizeInput(formData.get('message') as string || '', 2000);

        let subject = '';
        let body = '';

        if (contactType === 'production') {
            const company = sanitizeInput(formData.get('company') as string || '', 150);
            const project = sanitizeInput(formData.get('project') as string || '', 100);
            subject = `Richiesta Produzione - ${name}`;
            body = `Nome: ${name}\nEmail: ${email}\nAzienda: ${company}\nTipo Progetto: ${project}\n\nMessaggio:\n${message}`;
        } else {
            const projectName = sanitizeInput(formData.get('project-name') as string || '', 200);
            const dates = sanitizeInput(formData.get('dates') as string || '', 100);
            const budget = sanitizeInput(formData.get('budget') as string || '', 50);
            subject = `Richiesta Preventivo Tecnico - ${name}`;
            body = `Nome: ${name}\nEmail: ${email}\nProgetto: ${projectName}\nDate: ${dates}\nBudget: ${budget}\n\nMessaggio:\n${message}`;
        }

        const mailtoUrl = `mailto:${CONTACT_EMAIL}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
        window.location.href = mailtoUrl;
    };

    return (
        <div className="min-h-screen bg-[var(--background)]">
            {/* Hero Section */}
            <section className="pt-32 pb-16 px-6">
                <div className="max-w-7xl mx-auto">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
                        className="max-w-2xl"
                    >
                        <span className="mono text-xs text-[var(--muted)]">GET IN TOUCH</span>
                        <h1 className="mt-2">Start Your Project</h1>
                        <p className="text-[var(--muted)] mt-6 leading-relaxed text-lg">
                            Che tu abbia bisogno di una produzione completa o dell&apos;attrezzatura
                            perfetta per il tuo prossimo progetto, siamo pronti ad ascoltarti.
                        </p>
                    </motion.div>
                </div>
            </section>

            {/* Contact Type Selector */}
            <section className="px-6">
                <div className="max-w-7xl mx-auto">
                    <div className="flex flex-col sm:flex-row gap-4 mb-12">
                        <button
                            onClick={() => setContactType('production')}
                            className={`flex-1 p-6 rounded-lg border transition-all duration-300 text-left ${contactType === 'production'
                                ? 'border-[#00754B] bg-[#00754B]/5'
                                : 'border-[var(--border)] hover:border-[var(--muted)]'
                                }`}
                        >
                            <span className="mono text-xs text-[var(--muted)]">OPZIONE 1</span>
                            <h3 className="text-xl font-bold mt-2">Parla con la Produzione</h3>
                            <p className="text-[var(--muted)] text-sm mt-2">
                                Per progetti video, spot pubblicitari, documentari e produzioni complete.
                            </p>
                        </button>

                        <button
                            onClick={() => setContactType('rental')}
                            className={`flex-1 p-6 rounded-lg border transition-all duration-300 text-left ${contactType === 'rental'
                                ? 'border-[#00754B] bg-[#00754B]/5'
                                : 'border-[var(--border)] hover:border-[var(--muted)]'
                                }`}
                        >
                            <span className="mono text-xs text-[var(--muted)]">OPZIONE 2</span>
                            <h3 className="text-xl font-bold mt-2">Richiedi Preventivo Tecnico</h3>
                            <p className="text-[var(--muted)] text-sm mt-2">
                                Per noleggio attrezzature, configurazione kit personalizzati.
                            </p>
                        </button>
                    </div>
                </div>
            </section>

            {/* Form Section */}
            <section className="py-12 px-6">
                <div className="max-w-7xl mx-auto">
                    <div className="grid lg:grid-cols-2 gap-12">
                        {/* Form */}
                        <motion.div
                            key={contactType}
                            initial={{ opacity: 0, x: -20 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.5 }}
                        >
                            {isSubmitted ? (
                                <div className="bg-[#00754B]/10 border border-[#00754B]/30 rounded-lg p-8 text-center">
                                    <CheckCircle className="w-12 h-12 text-[#00754B] mx-auto mb-4" />
                                    <h3 className="text-xl font-bold">Messaggio Inviato!</h3>
                                    <p className="text-[var(--muted)] mt-2">
                                        Ti risponderemo entro 24 ore lavorative.
                                    </p>
                                    <button
                                        onClick={() => setIsSubmitted(false)}
                                        className="btn-ghost mt-6"
                                    >
                                        Invia un altro messaggio
                                    </button>
                                </div>
                            ) : (
                                <form onSubmit={handleSubmit} className="space-y-6">
                                    {/* Honeypot anti-spam field */}
                                    <input
                                        type="text"
                                        name="website"
                                        tabIndex={-1}
                                        autoComplete="off"
                                        style={{ position: 'absolute', left: '-9999px', opacity: 0 }}
                                        aria-hidden="true"
                                    />
                                    <div className="grid sm:grid-cols-2 gap-6">
                                        <div>
                                            <label htmlFor="name" className="mono text-xs text-[var(--muted)] block mb-2">
                                                NOME *
                                            </label>
                                            <input
                                                type="text"
                                                id="name"
                                                name="name"
                                                required
                                                maxLength={100}
                                                className="w-full px-4 py-3 bg-transparent border-b-2 border-[var(--border)] focus:border-[#00754B] outline-none transition-colors"
                                                placeholder="Il tuo nome"
                                            />
                                        </div>
                                        <div>
                                            <label htmlFor="email" className="mono text-xs text-[var(--muted)] block mb-2">
                                                EMAIL *
                                            </label>
                                            <input
                                                type="email"
                                                id="email"
                                                name="email"
                                                required
                                                maxLength={150}
                                                className="w-full px-4 py-3 bg-transparent border-b-2 border-[var(--border)] focus:border-[#00754B] outline-none transition-colors"
                                                placeholder="email@esempio.com"
                                            />
                                        </div>
                                    </div>

                                    {contactType === 'production' ? (
                                        <>
                                            <div>
                                                <label htmlFor="company" className="mono text-xs text-[var(--muted)] block mb-2">
                                                    AZIENDA / AGENZIA
                                                </label>
                                                <input
                                                    type="text"
                                                    id="company"
                                                    name="company"
                                                    className="w-full px-4 py-3 bg-transparent border-b-2 border-[var(--border)] focus:border-[#00754B] outline-none transition-colors"
                                                    placeholder="Nome azienda (opzionale)"
                                                />
                                            </div>
                                            <div>
                                                <label htmlFor="project" className="mono text-xs text-[var(--muted)] block mb-2">
                                                    TIPO DI PROGETTO
                                                </label>
                                                <select
                                                    id="project"
                                                    name="project"
                                                    className="w-full px-4 py-3 bg-transparent border-b-2 border-[var(--border)] focus:border-[#00754B] outline-none transition-colors"
                                                >
                                                    <option value="">Seleziona tipologia</option>
                                                    <option value="spot">Spot Pubblicitario</option>
                                                    <option value="corporate">Video Corporate</option>
                                                    <option value="documentary">Documentario</option>
                                                    <option value="music-video">Music Video</option>
                                                    <option value="event">Evento / Live</option>
                                                    <option value="other">Altro</option>
                                                </select>
                                            </div>
                                        </>
                                    ) : (
                                        <>
                                            <div>
                                                <label htmlFor="project-name" className="mono text-xs text-[var(--muted)] block mb-2">
                                                    NOME PROGETTO
                                                </label>
                                                <input
                                                    type="text"
                                                    id="project-name"
                                                    name="project-name"
                                                    className="w-full px-4 py-3 bg-transparent border-b-2 border-[var(--border)] focus:border-[#00754B] outline-none transition-colors"
                                                    placeholder="Es. Spot Nike Milano"
                                                />
                                            </div>
                                            <div className="grid sm:grid-cols-2 gap-6">
                                                <div>
                                                    <label htmlFor="dates" className="mono text-xs text-[var(--muted)] block mb-2">
                                                        DATE PRODUZIONE
                                                    </label>
                                                    <input
                                                        type="text"
                                                        id="dates"
                                                        name="dates"
                                                        className="w-full px-4 py-3 bg-transparent border-b-2 border-[var(--border)] focus:border-[#00754B] outline-none transition-colors"
                                                        placeholder="Es. 15-18 Febbraio 2026"
                                                    />
                                                </div>
                                                <div>
                                                    <label htmlFor="budget" className="mono text-xs text-[var(--muted)] block mb-2">
                                                        BUDGET RANGE
                                                    </label>
                                                    <select
                                                        id="budget"
                                                        name="budget"
                                                        className="w-full px-4 py-3 bg-transparent border-b-2 border-[var(--border)] focus:border-[#00754B] outline-none transition-colors"
                                                    >
                                                        <option value="">Seleziona range</option>
                                                        <option value="1k-5k">€1.000 - €5.000</option>
                                                        <option value="5k-10k">€5.000 - €10.000</option>
                                                        <option value="10k-25k">€10.000 - €25.000</option>
                                                        <option value="25k+">€25.000+</option>
                                                    </select>
                                                </div>
                                            </div>
                                            <div className="flex items-center gap-2 p-4 bg-[#00754B]/10 rounded-lg">
                                                <ArrowRight className="w-4 h-4 text-[#00754B]" />
                                                <p className="text-sm">
                                                    Consulta la nostra offerta!{' '}
                                                    <a href="/noleggio" className="text-[#00754B] underline">
                                                        Vai al Noleggio
                                                    </a>
                                                </p>
                                            </div>
                                        </>
                                    )}

                                    <div>
                                        <label htmlFor="message" className="mono text-xs text-[var(--muted)] block mb-2">
                                            MESSAGGIO *
                                        </label>
                                        <textarea
                                            id="message"
                                            name="message"
                                            required
                                            rows={5}
                                            maxLength={2000}
                                            className="w-full px-4 py-3 bg-transparent border-2 border-[var(--border)] focus:border-[#00754B] outline-none transition-colors rounded-lg resize-none"
                                            placeholder={
                                                contactType === 'production'
                                                    ? 'Raccontaci del tuo progetto: obiettivi, tempistiche, idee...'
                                                    : 'Descrivi le tue esigenze tecniche: tipo di set, location, specifiche...'
                                            }
                                        />
                                    </div>

                                    <button
                                        type="submit"
                                        disabled={isSubmitting}
                                        className="btn-primary w-full sm:w-auto justify-center disabled:opacity-50"
                                    >
                                        {isSubmitting ? (
                                            'Invio in corso...'
                                        ) : (
                                            <>
                                                <Send className="w-4 h-4" />
                                                Invia Messaggio
                                            </>
                                        )}
                                    </button>
                                </form>
                            )}
                        </motion.div>

                        {/* Contact Info */}
                        <div className="space-y-8">
                            <div>
                                <h3 className="text-xl font-bold mb-6">Informazioni di Contatto</h3>
                                <div className="space-y-4">
                                    <div className="flex items-start gap-4">
                                        <MapPin className="w-5 h-5 text-[#00754B] mt-1" />
                                        <div>
                                            <p className="font-medium">Sede Roma</p>
                                            <p className="text-[var(--muted)] text-sm">
                                                Via dell&apos;Olmata 33, 00184 Roma RM
                                            </p>
                                        </div>
                                    </div>
                                    <div className="flex items-center gap-4">
                                        <Phone className="w-5 h-5 text-[#00754B]" />
                                        <a href="tel:+393358287063" className="hover:text-[#00754B] transition-colors">
                                            +39 335 828 7063
                                        </a>
                                    </div>
                                    <div className="flex items-center gap-4">
                                        <Mail className="w-5 h-5 text-[#00754B]" />
                                        <a href="mailto:3monkeysfilm@gmail.com" className="hover:text-[#00754B] transition-colors">
                                            3monkeysfilm@gmail.com
                                        </a>
                                    </div>
                                    <div className="flex items-center gap-4">
                                        <Clock className="w-5 h-5 text-[#00754B]" />
                                        <p className="text-[var(--muted)]">Lun - Ven: 09:00 - 18:00</p>
                                    </div>
                                </div>
                            </div>

                            {/* Map Placeholder */}
                            <div className="relative aspect-video bg-[var(--border)] rounded-lg overflow-hidden">
                                <iframe
                                    src="https://maps.google.com/maps?q=Via%20dell'Olmata%2033,%2000184%20Roma&t=&z=16&ie=UTF8&iwloc=&output=embed"
                                    width="100%"
                                    height="100%"
                                    style={{ border: 0 }}
                                    sandbox="allow-scripts allow-same-origin"
                                    title="Mappa sede 3MonkeysFilm - Via dell'Olmata 33, Roma"
                                    allowFullScreen
                                    loading="lazy"
                                    referrerPolicy="no-referrer-when-downgrade"
                                    className="grayscale opacity-80 hover:grayscale-0 hover:opacity-100 transition-all duration-500"
                                />
                            </div>

                            {/* Quick Links */}
                            <div className="p-6 bg-[var(--border)]/30 rounded-lg">
                                <h4 className="mono text-xs text-[var(--muted)] mb-4">LINK UTILI</h4>
                                <div className="flex flex-wrap gap-3">
                                    <a
                                        href="/noleggio"
                                        className="mono text-xs px-4 py-2 border border-[var(--border)] rounded-full hover:border-[#00754B] hover:text-[#00754B] transition-colors"
                                    >
                                        Noleggio →
                                    </a>
                                    <a
                                        href="/produzioni"
                                        className="mono text-xs px-4 py-2 border border-[var(--border)] rounded-full hover:border-[#00754B] hover:text-[#00754B] transition-colors"
                                    >
                                        Le Nostre Produzioni →
                                    </a>
                                    <a
                                        href="/studio"
                                        className="mono text-xs px-4 py-2 border border-[var(--border)] rounded-full hover:border-[#00754B] hover:text-[#00754B] transition-colors"
                                    >
                                        Il Team →
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
}
