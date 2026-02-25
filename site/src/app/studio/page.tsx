'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';
import { Film, Mail } from 'lucide-react';

interface TeamMember {
    id: string;
    name: string;
    role: string;
    bio: string;
    image: string;
    objectPosition?: string;
    links: {
        imdb?: string;
        email?: string;
    };
}

const teamMembers: TeamMember[] = [
    {
        id: 'mario',
        name: 'Mario Rotoli',
        role: 'DOP / Steadicam',
        bio: 'Direttore della fotografia e operatore Steadicam. Il bridge creativo tra visione artistica e asset tecnici. Ogni frame racconta una storia.',
        image: '/images/team/mario-rotoli.jpg',
        objectPosition: 'top',
        links: {},
    },
    {
        id: 'carlo',
        name: 'Carlo Boni',
        role: 'Director / Filmmaker',
        bio: 'Regista e filmmaker con una visione cinematografica distintiva. Dalla concezione alla realizzazione, guida ogni progetto con passione e precisione creativa.',
        image: '/images/team/carlo-boni.jpg',
        objectPosition: '70% center',
        links: {},
    },
    {
        id: 'secco',
        name: 'Marco De Martino',
        role: 'Drone / Filmmaker',
        bio: 'Filmmaker e operatore drone certificato. Specializzato in riprese aeree cinematografiche e prospettive uniche che aggiungono profondità ad ogni produzione.',
        image: '/images/team/Marco-demartino-2.jpeg',
        objectPosition: '75% center',
        links: {},
    },
    {
        id: 'massimo',
        name: 'Massimo Ruggini',
        role: 'Drone / Filmmaker',
        bio: 'Filmmaker e pilota drone esperto. Combina competenze tecniche aeree con un occhio cinematografico per catturare immagini spettacolari dall\'alto.',
        image: '/images/team/massimo-ruggini.jpg',
        links: {},
    },
    {
        id: 'tiziano',
        name: 'Tiziano Sciarpelletti',
        role: 'Head Technician / Filmmaker',
        bio: 'Tecnico capo e filmmaker con esperienza su format internazionali. Specialista in logistica per set complessi e produzioni multi-location.',
        image: '/images/team/tiziano.jpg',
        links: {},
    },
];

export default function StudioPage() {
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
                        <span className="mono text-xs text-[var(--muted)]">THE CREW</span>
                        <h1 className="mt-2">Meet the Crew</h1>
                        <p className="text-[var(--muted)] mt-6 leading-relaxed text-lg">
                            3Monkeys è una casa di produzione audiovisiva formata da filmmaker
                            professionisti con una solida esperienza nel settore televisivo e
                            documentaristico. La nostra competenza nasce sul campo: anni di set
                            complessi, standard elevati e un approccio rigoroso alla qualità
                            dell&apos;immagine e del racconto.
                        </p>
                    </motion.div>
                </div>
            </section>

            {/* Team Grid */}
            <section className="py-12 px-6">
                <div className="max-w-7xl mx-auto">
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 lg:gap-12">
                        {teamMembers.map((member, index) => (
                            <motion.article
                                key={member.id}
                                className="group"
                                initial={{ opacity: 0, y: 30 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.6, delay: index * 0.15, ease: [0.16, 1, 0.3, 1] }}
                            >
                                {/* Photo */}
                                <div className="relative aspect-[3/4] overflow-hidden rounded-lg bg-[var(--border)]">
                                    <Image
                                        src={member.image}
                                        alt={member.name}
                                        fill
                                        className="object-cover grayscale group-hover:grayscale-0 transition-all duration-700"
                                        style={member.objectPosition ? { objectPosition: member.objectPosition } : undefined}
                                    />
                                    {/* Hover Overlay */}
                                    <div className="absolute inset-0 bg-[#00754B]/0 group-hover:bg-[#00754B]/10 transition-colors duration-500" />
                                </div>

                                {/* Info */}
                                <div className="mt-6">
                                    <h3 className="text-xl font-bold">{member.name}</h3>
                                    <p className="mono text-xs text-[var(--muted)] mt-1">{member.role}</p>

                                    {/* Social Links */}
                                    <div className="flex items-center gap-3 mt-4">
                                        {member.links.imdb && (
                                            <a
                                                href={member.links.imdb}
                                                target="_blank"
                                                rel="noopener noreferrer"
                                                className="p-2 rounded-full border border-[var(--border)] hover:border-[#00754B] hover:text-[#00754B] transition-colors"
                                                aria-label={`IMDb di ${member.name}`}
                                            >
                                                <Film className="w-4 h-4" />
                                            </a>
                                        )}
                                        {member.links.email && (
                                            <a
                                                href={`mailto:${member.links.email}`}
                                                className="p-2 rounded-full border border-[var(--border)] hover:border-[#00754B] hover:text-[#00754B] transition-colors"
                                                aria-label={`Email ${member.name}`}
                                            >
                                                <Mail className="w-4 h-4" />
                                            </a>
                                        )}
                                    </div>
                                </div>
                            </motion.article>
                        ))}
                    </div>
                </div>
            </section>

            {/* CTA */}
            <section className="py-24 px-6 bg-[#050505] text-white">
                <div className="max-w-3xl mx-auto text-center">
                    <span className="mono text-xs text-[#00754B]">LAVORA CON NOI</span>
                    <h2 className="text-white mt-4">Pronti a Collaborare?</h2>
                    <div className="flex justify-center mt-8">
                        <a href="/contact" className="btn-primary">
                            Contattaci
                        </a>
                    </div>
                </div>
            </section>
        </div>
    );
}
