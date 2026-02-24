import HeroSection from "@/components/sections/HeroSection";
import PartnersSection from "@/components/sections/PartnersSection";
import TestimonialSection from "@/components/sections/TestimonialSection";
import FAQSection from "@/components/sections/FAQSection";
import FooterNewsletter from "@/components/sections/FooterNewsletter";
import {
  Camera, Clapperboard, Building2, Mic,
  Lightbulb, Settings, Video, Play, ExternalLink, Film
} from "lucide-react";
import Image from "next/image";
import { produzioni } from "@/data/produzioni";

// Services data — with CTA links
const services = [
  {
    icon: Clapperboard,
    teletext: "PRODUZIONE",
    title: "Produzione Video",
    description: "Spot, branded content, documentari per tv e web.",
    cta: "Scopri i Progetti",
    href: "/produzioni",
    highlight: false,
  },
  {
    icon: Camera,
    teletext: "STUDIO",
    title: "Studio Rental & Technical Solutions",
    description: "Camera, luci, audio, droni, grip — con o senza operatore.",
    cta: "Esplora gli Spazi",
    href: "/noleggio",
    highlight: true,
  },
  {
    icon: Film,
    teletext: "POST",
    title: "Post-Produzione & VFX",
    description: "Editing, color grading, sound design, effetti visivi.",
    cta: "Richiedi Info",
    href: "/contact",
    highlight: false,
  },
];

// Noleggio features
const noleggioFeatures = [
  { icon: Building2, name: "Sala Pose" },
  { icon: Camera, name: "Camera & Ottiche" },
  { icon: Lightbulb, name: "Luci LED & Fresnel" },
  { icon: Settings, name: "Grip & Supporti" },
  { icon: Mic, name: "Audio Pro" },
  { icon: Video, name: "Set Su Misura" },
];

export default function Home() {
  return (
    <>
      {/* Hero Section */}
      <HeroSection
        headline='CRAFTING VISUAL STORIES'
        subheadline="Production Company & Service Tecnico"
      />


      {/* Partner Trust Bar */}
      <PartnersSection />




      {/* Services Section */}
      <section className="py-24 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16 reveal">
            <span className="mono text-xs text-[#00754B] tracking-widest">THE PIPELINE</span>
            <h2 className="mt-4">Cosa Facciamo</h2>
            <p className="mono text-sm text-[var(--muted)] mt-4 max-w-xl mx-auto tracking-wide uppercase">
              From Concept to Delivery. One Team. One Vision.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 reveal reveal-stagger">
            {services.map((service, i) => (
              <a
                key={i}
                href={service.href}
                className={`group p-8 rounded-lg transition-all duration-500 card-tv-hover cursor-pointer block ${service.highlight
                  ? "service-highlight"
                  : "bg-[var(--background)] border border-[var(--border)] hover:border-[#00754B]/30"
                  }`}
              >
                <service.icon
                  className={`w-8 h-8 mb-4 ${service.highlight ? "text-[#00754B]" : "text-[var(--muted)]"
                    } group-hover:text-[#00754B] transition-colors`}
                />
                <span className="teletext">{service.teletext}</span>
                <h3 className="text-xl font-bold mt-3">{service.title}</h3>
                <p className="text-[var(--muted)] text-sm mt-3 leading-relaxed">
                  {service.description}
                </p>
                <p className="mono text-xs text-[#00754B] mt-5 group-hover:underline">
                  {service.cta} →
                </p>
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* Produzioni Preview Section */}
      <section className="py-24 px-6 bg-[#FAFAFA]">
        <div className="max-w-7xl mx-auto">
          <div className="flex items-baseline justify-between mb-12">
            <div>
              <span className="mono text-xs text-[#00754B] tracking-widest">PRODUZIONI</span>
              <h2 className="mt-2">Le Nostre Produzioni</h2>
            </div>
            <a
              href="/produzioni"
              className="mono text-xs hover:text-[#00754B] transition-colors group flex items-center gap-2"
            >
              Tutte le Produzioni
              <span className="group-hover:translate-x-1 transition-transform">→</span>
            </a>
          </div>

          {/* Productions Grid */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 reveal reveal-scale">
            {produzioni.slice(0, 3).map((produzione) => (
              <a
                key={produzione.id}
                href={produzione.youtubeUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="group relative block cursor-pointer"
                aria-label={`Guarda ${produzione.title} su YouTube`}
              >
                <div className="relative aspect-video rounded-lg overflow-hidden bg-[var(--border)] card-tv-hover">
                  <Image
                    src={produzione.frame}
                    alt={produzione.alt}
                    fill
                    className="object-cover transition-transform duration-700 group-hover:scale-105"
                    sizes="(max-width: 768px) 100vw, 33vw"
                  />

                  {/* Hover Overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

                  {/* Category Badge */}
                  <div className="absolute top-3 left-3">
                    <span className="teletext text-[10px]">{produzione.category}</span>
                  </div>

                  {/* Play Button */}
                  <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-500">
                    <div className="w-16 h-16 rounded-full bg-[#FF0000] flex items-center justify-center shadow-xl">
                      <Play className="w-6 h-6 text-white ml-0.5" fill="white" />
                    </div>
                  </div>

                  {/* External link indicator */}
                  <div className="absolute top-3 right-3 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                    <div className="bg-black/50 backdrop-blur-sm rounded-full p-1.5">
                      <ExternalLink className="w-3 h-3 text-white" />
                    </div>
                  </div>
                </div>

                {/* Info */}
                <div className="mt-4">
                  <h3 className="text-lg font-bold group-hover:text-[#00754B] transition-colors">
                    {produzione.title}
                  </h3>
                  <p className="mono text-xs text-[#00754B] mt-1">{produzione.result}</p>
                </div>
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonial */}
      <TestimonialSection />

      {/* Noleggio Teaser */}
      <section className="py-24 px-6 bg-[#050505] dark-mode">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16 reveal">
            <span className="mono text-xs text-[#00754B] tracking-widest">NOLEGGIO</span>
            <h2 className="mt-4 text-white" style={{ textShadow: "0 0 40px rgba(0,117,75,0.3)" }}>
              Studio e Noleggio Materiale
            </h2>

          </div>

          {/* Noleggio Features Grid */}
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4 reveal">
            {noleggioFeatures.map((item, i) => (
              <div
                key={i}
                className="group relative aspect-square bg-[#0A0A0A] rounded-lg overflow-hidden dark-glow cursor-pointer flex flex-col items-center justify-center p-4"
                data-cursor="info"
              >
                <item.icon className="w-8 h-8 text-[#00754B] mb-3 group-hover:scale-110 transition-transform" />
                <span className="mono text-xs text-[#888] text-center group-hover:text-white transition-colors">
                  {item.name}
                </span>
              </div>
            ))}
          </div>

          <div className="text-center mt-12 reveal">
            <a
              href="/noleggio"
              className="inline-flex items-center gap-2 px-8 py-4 border-2 border-[#00754B] text-[#00754B] mono text-xs uppercase tracking-widest hover:bg-[#00754B] hover:text-white transition-all duration-300"
            >
              Esplora gli Spazi
              <span>→</span>
            </a>
          </div>
        </div>
      </section>

      {/* Team Snapshot */}
      <section className="py-24 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-2 gap-12 items-center reveal">
            <div>
              <span className="mono text-xs text-[#00754B] tracking-widest">THE STUDIO</span>
              <h2 className="mt-4">Il Team</h2>
              <p className="text-[var(--muted)] mt-6 leading-relaxed max-w-md">
                3Monkeys è una casa di produzione audiovisiva formata da filmmaker
                professionisti con una solida esperienza nel settore televisivo e
                documentaristico. La nostra competenza nasce sul campo: anni di set
                complessi, standard elevati e un approccio rigoroso alla qualità
                dell&apos;immagine e del racconto.
              </p>
              <a href="/studio" className="btn-ghost mt-8 inline-flex">
                Conosci il Team
              </a>
            </div>

            {/* Team Preview */}
            <div className="flex flex-wrap justify-center gap-6">
              {[
                { name: "Mario", role: "DOP / Steadicam" },
                { name: "Carlo", role: "Director" },
                { name: "Marco", role: "Drone" },
                { name: "Massimo", role: "Drone" },
                { name: "Tiziano", role: "Head Tech" },
              ].map((member, i) => (
                <div key={i} className="text-center group">
                  <div className="w-20 h-20 rounded-full bg-[var(--border)] flex items-center justify-center mb-3 group-hover:ring-2 ring-[#00754B] ring-offset-2 transition-all">
                    <span className="mono text-xl text-[var(--muted)]">{member.name[0]}</span>
                  </div>
                  <p className="font-bold text-sm">{member.name}</p>
                  <p className="mono text-xs text-[var(--muted)]">
                    {member.role}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Contact CTA */}
      <section className="py-24 px-6 border-t border-[var(--border)]">
        <div className="max-w-3xl mx-auto text-center reveal reveal-slideup">
          <span className="mono text-xs text-[#00754B] tracking-widest">INIZIAMO</span>
          <h2 className="mt-4">
            Pronti a raccontare<br />la vostra storia?
          </h2>
          <p className="text-[var(--muted)] mt-6 max-w-lg mx-auto">
            Dal concept alla consegna finale, gestiamo ogni fase della produzione.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center mt-8">
            <a href="/contact?type=production" className="btn-primary">
              Richiedi Preventivo
            </a>
            <a href="/contact?type=call" className="btn-ghost">
              Prenota una Call
            </a>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <FAQSection />

      {/* Footer */}
      <footer className="py-16 px-6 bg-[#050505] text-white">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-12">
            {/* Column 1: Logo & Tagline */}
            <div>
              <span className="text-2xl font-bold">
                3<span className="text-[#00754B]">MONKEYS</span>FILM
              </span>
              <p className="mono text-xs text-[#888] mt-3">
                Cinematic Production & Rental
              </p>
              <p className="text-sm text-[#888] mt-4 leading-relaxed">
                Production company cinematografica e service video premium.
                Noleggio attrezzature professionali.
              </p>
              {/* Social Links */}
              <div className="flex gap-4 mt-6">
                {["Instagram", "LinkedIn", "Vimeo"].map((social) => (
                  <a
                    key={social}
                    href="#"
                    aria-label={social}
                    className="mono text-xs text-[#888] hover:text-[#00754B] transition-colors"
                  >
                    {social}
                  </a>
                ))}
              </div>
            </div>

            {/* Column 2: Navigation */}
            <div>
              <h4 className="mono text-xs text-[#00754B] mb-4 tracking-widest">NAVIGAZIONE</h4>
              <ul className="space-y-2">
                {[
                  { name: "Produzione", href: "/produzioni" },
                  { name: "Studio", href: "/studio" },
                  { name: "Contatti", href: "/contact" },
                ].map((item) => (
                  <li key={item.name}>
                    <a href={item.href} className="text-sm text-[#888] hover:text-white transition-colors">
                      {item.name}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            {/* Column 3: Contacts */}
            <div>
              <h4 className="mono text-xs text-[#00754B] mb-4 tracking-widest">CONTATTI</h4>
              <ul className="space-y-2 text-sm text-[#888]">
                <li>
                  <a href="mailto:3monkeysfilm@gmail.com" className="hover:text-white transition-colors">
                    3monkeysfilm@gmail.com
                  </a>
                </li>
                <li>
                  <a href="tel:+393358287063" className="hover:text-white transition-colors">
                    +39 335 828 7063
                  </a>
                </li>
                <li className="pt-2">Roma</li>
              </ul>
            </div>

            {/* Column 4: Newsletter */}
            <FooterNewsletter />
          </div>

          {/* Bottom Bar */}
          <div className="pt-8 border-t border-[#2A2A2A] flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="mono text-xs text-[#888]">
              © {new Date().getFullYear()} 3MonkeysFilm. All rights reserved.
            </p>
            <p className="mono text-xs text-[#888]">
              Crafted with passion in Italy
            </p>
          </div>
        </div>
      </footer>
    </>
  );
}
