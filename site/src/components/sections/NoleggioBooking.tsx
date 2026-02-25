'use client';

import { motion, useInView } from 'framer-motion';
import { useRef, useState } from 'react';
import { Send, Phone, Mail, MapPin, ChevronDown, ChevronUp } from 'lucide-react';
import { faqItems } from '@/data/noleggio';

function sanitizeInput(input: string, maxLength: number = 500): string {
    return input.trim().replace(/[\r\n]{3,}/g, '\n\n').slice(0, maxLength);
}

export default function NoleggioBooking() {
    const ref = useRef<HTMLDivElement>(null);
    const isInView = useInView(ref, { once: true, margin: '-100px' });
    const [openFaq, setOpenFaq] = useState<number | null>(null);

    return (
        <section className="py-24 px-6 border-t border-[var(--border)]" ref={ref}>
            <div className="max-w-7xl mx-auto">
                {/* Section Header */}
                <motion.div
                    className="text-center mb-16"
                    initial={{ opacity: 0, y: 30 }}
                    animate={isInView ? { opacity: 1, y: 0 } : {}}
                    transition={{ duration: 0.8 }}
                >
                    <span className="mono text-xs text-[#00754B] tracking-widest">CONTATTI</span>
                    <h2 className="mt-4">Prenota il Tuo Spazio</h2>
                    <p className="text-[var(--muted)] mt-4 max-w-xl mx-auto">
                        Contattaci per disponibilità, preventivi e soluzioni personalizzate.
                        Il tuo progetto, il nostro spazio.
                    </p>
                </motion.div>

                <div className="grid lg:grid-cols-2 gap-12">
                    {/* Contact Form */}
                    <motion.div
                        initial={{ opacity: 0, x: -30 }}
                        animate={isInView ? { opacity: 1, x: 0 } : {}}
                        transition={{ duration: 0.8, delay: 0.2 }}
                    >
                        <form className="space-y-6" onSubmit={(e) => {
                            e.preventDefault();
                            const form = e.currentTarget;
                            const formData = new FormData(form);

                            // Anti-bot honeypot check
                            const honeypot = formData.get('website') as string;
                            if (honeypot) return;

                            const name = sanitizeInput(formData.get('name') as string || '', 100);
                            const email = sanitizeInput(formData.get('email') as string || '', 150);
                            const phone = sanitizeInput(formData.get('phone') as string || '', 30);
                            const projectType = sanitizeInput(formData.get('projectType') as string || '', 100);
                            const date = sanitizeInput(formData.get('date') as string || '', 30);
                            const message = sanitizeInput(formData.get('message') as string || '', 2000);

                            const subject = `Richiesta Noleggio - ${name}`;
                            const body = `Nome: ${name}\nEmail: ${email}\nTelefono: ${phone}\nTipo Progetto: ${projectType}\nData Prevista: ${date}\n\nMessaggio:\n${message}`;
                            const mailtoUrl = `mailto:3monkeysfilm@gmail.com?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
                            window.location.href = mailtoUrl;
                        }}>
                            {/* Honeypot anti-spam field */}
                            <input
                                type="text"
                                name="website"
                                tabIndex={-1}
                                autoComplete="off"
                                style={{ position: 'absolute', left: '-9999px', opacity: 0 }}
                                aria-hidden="true"
                            />
                            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                                <div>
                                    <label className="mono text-xs text-[var(--muted)] block mb-2">Nome *</label>
                                    <input
                                        type="text"
                                        name="name"
                                        required
                                        maxLength={100}
                                        className="w-full px-4 py-3 bg-[var(--background)] border border-[var(--border)] rounded-lg text-[var(--foreground)] mono text-sm focus:border-[#00754B] focus:outline-none focus:ring-1 focus:ring-[#00754B] transition-colors"
                                        placeholder="Il tuo nome"
                                    />
                                </div>
                                <div>
                                    <label className="mono text-xs text-[var(--muted)] block mb-2">Email *</label>
                                    <input
                                        type="email"
                                        name="email"
                                        required
                                        maxLength={150}
                                        className="w-full px-4 py-3 bg-[var(--background)] border border-[var(--border)] rounded-lg text-[var(--foreground)] mono text-sm focus:border-[#00754B] focus:outline-none focus:ring-1 focus:ring-[#00754B] transition-colors"
                                        placeholder="email@esempio.it"
                                    />
                                </div>
                            </div>

                            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                                <div>
                                    <label className="mono text-xs text-[var(--muted)] block mb-2">Telefono</label>
                                    <input
                                        type="tel"
                                        name="phone"
                                        maxLength={30}
                                        className="w-full px-4 py-3 bg-[var(--background)] border border-[var(--border)] rounded-lg text-[var(--foreground)] mono text-sm focus:border-[#00754B] focus:outline-none focus:ring-1 focus:ring-[#00754B] transition-colors"
                                        placeholder="+39 ..."
                                    />
                                </div>
                                <div>
                                    <label className="mono text-xs text-[var(--muted)] block mb-2">Tipo Progetto</label>
                                    <select
                                        name="projectType"
                                        className="w-full px-4 py-3 bg-[var(--background)] border border-[var(--border)] rounded-lg text-[var(--foreground)] mono text-sm focus:border-[#00754B] focus:outline-none focus:ring-1 focus:ring-[#00754B] transition-colors"
                                    >
                                        <option value="">Seleziona...</option>
                                        <option value="Produzione Video">Produzione Video</option>
                                        <option value="Fotografia">Fotografia</option>
                                        <option value="Podcast / Audio">Podcast / Audio</option>
                                        <option value="Contenuti Social">Contenuti Social</option>
                                        <option value="Evento / Presentazione">Evento / Presentazione</option>
                                        <option value="Altro">Altro</option>
                                    </select>
                                </div>
                            </div>

                            <div>
                                <label className="mono text-xs text-[var(--muted)] block mb-2">Data Prevista</label>
                                <input
                                    type="date"
                                    name="date"
                                    className="w-full px-4 py-3 bg-[var(--background)] border border-[var(--border)] rounded-lg text-[var(--foreground)] mono text-sm focus:border-[#00754B] focus:outline-none focus:ring-1 focus:ring-[#00754B] transition-colors"
                                />
                            </div>

                            <div>
                                <label className="mono text-xs text-[var(--muted)] block mb-2">Messaggio</label>
                                <textarea
                                    name="message"
                                    rows={4}
                                    className="w-full px-4 py-3 bg-[var(--background)] border border-[var(--border)] rounded-lg text-[var(--foreground)] mono text-sm focus:border-[#00754B] focus:outline-none focus:ring-1 focus:ring-[#00754B] transition-colors resize-none"
                                    placeholder="Descrivi il tuo progetto e le tue esigenze..."
                                />
                            </div>

                            <button
                                type="submit"
                                className="w-full flex items-center justify-center gap-2 px-8 py-4 bg-[#00754B] text-white mono text-xs uppercase tracking-widest hover:bg-[#00855a] transition-all duration-300 hover:shadow-[0_0_30px_rgba(0,117,75,0.5)] rounded-lg"
                            >
                                <Send className="w-4 h-4" />
                                Invia Richiesta
                            </button>
                        </form>
                    </motion.div>

                    {/* Contact Info + FAQ */}
                    <motion.div
                        className="space-y-8"
                        initial={{ opacity: 0, x: 30 }}
                        animate={isInView ? { opacity: 1, x: 0 } : {}}
                        transition={{ duration: 0.8, delay: 0.3 }}
                    >
                        {/* Direct Contact */}
                        <div className="bg-[#050505] arsenal-mode rounded-lg p-8">
                            <h3 className="text-white font-bold text-lg mb-6">Contatti Diretti</h3>
                            <div className="space-y-4">
                                <a href="mailto:3monkeysfilm@gmail.com" className="flex items-center gap-4 text-[#888] hover:text-[#00754B] transition-colors group">
                                    <div className="w-10 h-10 rounded-lg bg-[#1A1A1A] flex items-center justify-center group-hover:bg-[#00754B]/20 transition-colors">
                                        <Mail className="w-5 h-5 text-[#00754B]" />
                                    </div>
                                    <span className="mono text-sm">3monkeysfilm@gmail.com</span>
                                </a>
                                <a href="tel:+390212345678" className="flex items-center gap-4 text-[#888] hover:text-[#00754B] transition-colors group">
                                    <div className="w-10 h-10 rounded-lg bg-[#1A1A1A] flex items-center justify-center group-hover:bg-[#00754B]/20 transition-colors">
                                        <Phone className="w-5 h-5 text-[#00754B]" />
                                    </div>
                                    <span className="mono text-sm">+39 335 828 7063</span>
                                </a>
                                <div className="flex items-center gap-4 text-[#888]">
                                    <div className="w-10 h-10 rounded-lg bg-[#1A1A1A] flex items-center justify-center">
                                        <MapPin className="w-5 h-5 text-[#00754B]" />
                                    </div>
                                    <span className="mono text-sm">Roma - Milano</span>
                                </div>
                            </div>
                        </div>

                        {/* FAQ */}
                        <div>
                            <h3 className="font-bold text-lg mb-4">Domande Frequenti</h3>
                            <div className="space-y-2">
                                {faqItems.map((faq, index) => (
                                    <div
                                        key={index}
                                        className="border border-[var(--border)] rounded-lg overflow-hidden"
                                    >
                                        <button
                                            className="w-full flex items-center justify-between p-4 text-left hover:bg-[var(--border)]/30 transition-colors"
                                            onClick={() => setOpenFaq(openFaq === index ? null : index)}
                                        >
                                            <span className="text-sm font-medium pr-4">{faq.question}</span>
                                            {openFaq === index ? (
                                                <ChevronUp className="w-4 h-4 flex-shrink-0 text-[#00754B]" />
                                            ) : (
                                                <ChevronDown className="w-4 h-4 flex-shrink-0 text-[var(--muted)]" />
                                            )}
                                        </button>
                                        <motion.div
                                            initial={false}
                                            animate={{
                                                height: openFaq === index ? 'auto' : 0,
                                                opacity: openFaq === index ? 1 : 0,
                                            }}
                                            transition={{ duration: 0.3 }}
                                            className="overflow-hidden"
                                        >
                                            <p className="px-4 pb-4 text-sm text-[var(--muted)] leading-relaxed">
                                                {faq.answer}
                                            </p>
                                        </motion.div>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </motion.div>
                </div>
            </div>
        </section>
    );
}
