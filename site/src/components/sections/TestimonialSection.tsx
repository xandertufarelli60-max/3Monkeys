// TestimonialSection — Social Proof Quote

const testimonial = {
    quote:
        "3Monkeys Film ha trasformato la nostra visione in qualcosa di straordinario. Il branded content che hanno realizzato ha triplicato il tempo medio di visione sul nostro sito e ha generato un engagement organico che non avevamo mai visto prima.",
    name: "Marco Ferretti",
    role: "Marketing Director",
    company: "Brand Partner",
    metric: "+3x Tempo di Visione",
};

export default function TestimonialSection() {
    return (
        <section className="py-24 px-6 bg-[#050505] dark-mode">
            <div className="max-w-4xl mx-auto">
                <div className="reveal">
                    <span className="mono text-xs text-[#00754B] tracking-widest">CLIENTI</span>

                    {/* Quote Card */}
                    <div className="mt-8 p-10 md:p-16 border border-[#2A2A2A] rounded-lg relative">
                        {/* Green accent line */}
                        <div className="absolute top-0 left-10 right-10 h-px bg-[#00754B]" />

                        {/* Large quote mark */}
                        <span
                            className="absolute top-6 left-10 text-[#00754B] opacity-30 select-none"
                            style={{
                                fontFamily: "var(--font-display)",
                                fontSize: "8rem",
                                lineHeight: 0.8,
                            }}
                            aria-hidden="true"
                        >
                            &ldquo;
                        </span>

                        <blockquote className="relative z-10">
                            <p
                                className="text-white leading-relaxed"
                                style={{
                                    fontFamily: "var(--font-display)",
                                    fontSize: "clamp(1.1rem, 2.5vw, 1.5rem)",
                                    fontStyle: "italic",
                                }}
                            >
                                {testimonial.quote}
                            </p>
                        </blockquote>

                        <div className="mt-10 flex items-center justify-between flex-wrap gap-4">
                            <div>
                                <p className="font-bold text-white text-sm">{testimonial.name}</p>
                                <p className="mono text-xs text-[#888] mt-1">
                                    {testimonial.role} — {testimonial.company}
                                </p>
                            </div>
                            <span className="teletext">{testimonial.metric}</span>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
