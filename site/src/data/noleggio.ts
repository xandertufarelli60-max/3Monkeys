// Noleggio — Content Data
// Source: "Sezione Noleggio Sala Posa, Location e Attrezzatura Tecnica.docx"

export const noleggioHero = {
    title: "Studio Rx e Noleggio materiale",
    subtitle: "",
    ctaPrimary: { text: "Prenota Ora", href: "/contact?type=noleggio" },
    ctaSecondary: { text: "Scopri i materiali", href: "#attrezzatura" },
    backgroundImage: "/images/noleggio/sala-pose-1.jpg",
};

export const salaPoseImages = [
    { src: "/images/noleggio/sala-pose-1.jpg", alt: "Sala pose 3Monkeys - Vista 1" },
    { src: "/images/noleggio/sala-pose-2.jpg", alt: "Sala pose 3Monkeys - Vista 2" },
    { src: "/images/noleggio/sala-pose-3.jpeg", alt: "Sala pose 3Monkeys - Vista 3" },
    { src: "/images/noleggio/sala-pose-8.jpeg", alt: "Sala pose 3Monkeys - Vista 4" },
    { src: "/images/noleggio/sala-pose-9.png", alt: "Sala pose 3Monkeys - Vista 5" },
    { src: "/images/noleggio/sala-pose-10.png", alt: "Sala pose 3Monkeys - Vista 6" },
];

export const salaPoseFeatures = [
    {
        icon: "Building2" as const,
        title: "Spazio Riarredabile",
        description:
            "Uno spazio professionale pensato per ogni esigenza di produzione: dalla fotografia al video, dal contenuto social alle campagne pubblicitarie.",
    },
    {
        icon: "Mic" as const,
        title: "Ideale per Podcast",
        description:
            "Ambiente acusticamente trattato e attrezzato per registrazioni audio di qualità broadcast. Perfetto per podcast, interviste e voice-over.",
    },
    {
        icon: "Video" as const,
        title: "Set Su Misura",
        description:
            "La possibilità di costruire un set su misura per il tuo progetto, con supporto tecnico dedicato nella configurazione.",
    },
    {
        icon: "Camera" as const,
        title: "Attrezzatura Professionale",
        description:
            "Un servizio completo di noleggio materiale tecnico: camera, ottiche cinema, luci, grip, audio e tutto il necessario per un set professionale.",
    },
];

export const technicalSpecs = [
    { label: "Superficie", value: "120 mq" },
    { label: "Altezza Soffitto", value: "4.5 m" },
    { label: "Climatizzazione", value: "Aria condizionata" },

    { label: "Wi-Fi", value: "Fibra 1 Gbps" },
];

export interface EquipmentCategory {
    id: string;
    name: string;
    icon: string;
    items: string[];
}

export const equipmentCategories: EquipmentCategory[] = [
    {
        id: "camera",
        name: "Camera",
        icon: "Camera",
        items: [
            "Canon",
            "Sony",
            "Red",
            "Arri",
            "Lenti Cine Prime e Zoom",
            "Lenti fotografiche Sony / Canon RF",
        ],
    },
    {
        id: "lights",
        name: "Lights",
        icon: "Lightbulb",
        items: [
            "Light Panel (Nanlite, Lupo LED)",
            "Fresnel",
            "Softbox e modificatori",
            "Pannelli RGB",
        ],
    },
    {
        id: "grip",
        name: "Grip",
        icon: "Settings",
        items: [
            "C-stand e stativi professionali",
            "Slider e carrelli dolly",
            "Gimbal e stabilizzatori",
            "Supporti e clamp per ogni esigenza",
        ],
    },
    {
        id: "audio",
        name: "Audio",
        icon: "Mic",
        items: [
            "Microfoni shotgun e lavalier",
            "Registratori multi-traccia",
            "Boom e accessori",
            "Monitor audio da set",
        ],
    },
];

export const faqItems = [
    {
        question: "Quali sono gli orari di disponibilità della sala?",
        answer:
            "La sala è disponibile dal lunedì al sabato, dalle 8:00 alle 22:00. Su richiesta è possibile organizzare sessioni in orari diversi.",
    },
    {
        question: "Fornite supporto tecnico sul set?",
        answer:
            "Sì, il nostro team tecnico è disponibile per assistenza durante le produzioni. Il servizio può essere incluso o aggiunto al preventivo.",
    },
    {
        question: "Come funziona la prenotazione?",
        answer:
            "Contattaci tramite il form o direttamente via email/telefono. Ti invieremo un preventivo personalizzato in base alle tue esigenze.",
    },
];
