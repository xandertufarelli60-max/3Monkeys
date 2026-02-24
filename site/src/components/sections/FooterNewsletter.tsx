"use client";

import { useState } from "react";

export default function FooterNewsletter() {
    const [email, setEmail] = useState("");
    const [status, setStatus] = useState<"idle" | "success" | "error">("idle");

    function handleSubmit(e: React.FormEvent) {
        e.preventDefault();
        if (!email || !email.includes("@")) {
            setStatus("error");
            return;
        }
        // Placeholder: in production, call your newsletter API here
        setStatus("success");
        setEmail("");
    }

    return (
        <div>
            <h4 className="mono text-xs text-[#00754B] mb-4 tracking-widest">NEWSLETTER</h4>
            <p className="text-sm text-[#888] mb-1 font-bold text-white">
                Trend Produzione Video
            </p>
            <p className="text-xs text-[#888] mb-4 leading-relaxed">
                Consigli, case study e novità dal mondo broadcast.
            </p>

            {status === "success" ? (
                <p className="mono text-xs text-[#00754B]">
                    ✓ Iscrizione confermata. Grazie!
                </p>
            ) : (
                <form onSubmit={handleSubmit} noValidate className="space-y-2">
                    <div>
                        <label htmlFor="newsletter-email" className="sr-only">
                            Indirizzo email
                        </label>
                        <input
                            id="newsletter-email"
                            type="email"
                            value={email}
                            onChange={(e) => {
                                setEmail(e.target.value);
                                if (status === "error") setStatus("idle");
                            }}
                            placeholder="Il tuo indirizzo email"
                            required
                            className={`w-full bg-[#0A0A0A] border px-3 py-2 text-sm text-white placeholder-[#555] focus:outline-none focus:border-[#00754B] transition-colors ${status === "error" ? "border-red-500" : "border-[#2A2A2A]"
                                }`}
                        />
                        {status === "error" && (
                            <p className="mono text-xs text-red-400 mt-1">
                                Inserisci un indirizzo email valido.
                            </p>
                        )}
                    </div>
                    <button
                        type="submit"
                        className="w-full px-4 py-2 bg-[#00754B] text-white mono text-xs uppercase tracking-widest hover:bg-[#005a38] transition-colors cursor-pointer"
                    >
                        Iscriviti
                    </button>
                </form>
            )}
        </div>
    );
}
