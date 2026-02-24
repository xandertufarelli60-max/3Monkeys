// StatsSection — Social Proof Numbers

const stats = [
    { value: "50+", label: "Produzioni Realizzate", suffix: "" },
    { value: "30+", label: "Brand Serviti", suffix: "" },
    { value: "10", label: "Anni di Esperienza", suffix: "" },
];

export default function StatsSection() {
    return (
        <section className="py-16 px-6 bg-[#F0F0EE] border-y border-[var(--border)]">
            <div className="max-w-4xl mx-auto">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center reveal">
                    {stats.map((stat, i) => (
                        <div key={i} className="group">
                            <p
                                className="font-bold text-[#00754B]"
                                style={{
                                    fontFamily: "var(--font-display)",
                                    fontSize: "clamp(2.5rem, 6vw, 5rem)",
                                    lineHeight: 1,
                                    letterSpacing: "-0.02em",
                                }}
                            >
                                {stat.value}
                            </p>
                            <p className="mono text-xs text-[var(--muted)] mt-3 tracking-widest uppercase">
                                {stat.label}
                            </p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
