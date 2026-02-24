export interface Produzione {
    id: string;
    title: string;
    subtitle: string;
    category: string;
    result: string;
    description: string;
    frame: string;
    youtubeUrl: string;
    alt: string;
}

export const produzioni: Produzione[] = [
    {
        id: 'salone-doppio',
        title: 'Salone Doppio',
        subtitle: 'Podcast',
        category: 'Podcast',
        result: 'Un racconto visivo intenso e cinematografico',
        description: 'Un podcast che esplora il confine tra realtà e finzione attraverso un linguaggio visivo unico.',
        frame: '/images/produzioni/salone-doppio-frame.jpg',
        youtubeUrl: 'https://www.youtube.com/watch?v=HZvRIDEGUXM',
        alt: 'Frame dal podcast Salone Doppio — 3 Monkeys Film',
    },
    {
        id: 'rome-covid',
        title: 'Rome during Covid-19',
        subtitle: 'Documentary',
        category: 'Documentario',
        result: 'Roma vista attraverso il silenzio della pandemia',
        description: 'Un documentario che cattura la bellezza silenziosa di Roma durante il lockdown, tra strade deserte e monumenti senza tempo.',
        frame: '/images/produzioni/rome-covid-frame.png',
        youtubeUrl: 'https://www.youtube.com/watch?v=142c3zrqJec',
        alt: 'Frame dal documentario Rome during Covid-19 — 3 Monkeys Film',
    },
    {
        id: 'pessina',
        title: 'Pessina',
        subtitle: 'Corporate Film',
        category: 'Corporate',
        result: 'Branded storytelling per l\'eccellenza made in Italy',
        description: 'Una produzione che racconta l\'eccellenza e la visione di un brand attraverso il linguaggio cinematografico.',
        frame: '/images/produzioni/pessina-new-frame.png',
        youtubeUrl: 'https://www.youtube.com/watch?v=47qpqCej7S4',
        alt: 'Frame dalla produzione televisiva Pessina — Corporate film di 3 Monkeys Film',
    },
    {
        id: 'portrait-bread-maker',
        title: 'Portrait of a Bread Maker',
        subtitle: 'Documentary',
        category: 'Documentario',
        result: 'Ritratto cinematografico di un mestiere artigianale',
        description: 'Un ritratto intimo e autentico del mestiere più antico, raccontato con sensibilità cinematografica.',
        frame: '/images/produzioni/portrait-bread-maker-frame.png',
        youtubeUrl: 'https://www.youtube.com/watch?v=mhBXosXZaGQ',
        alt: 'Frame dal documentario Portrait of a Bread Maker — Produzione 3 Monkeys Film',
    },
    {
        id: 'docu-ritual-lab',
        title: 'DOCU-RITUAL LAB The Art of Brewing',
        subtitle: 'Documentary',
        category: 'Documentario',
        result: 'La storia completa dell\'eccellenza brassicola',
        description: 'Dal rituale alla bottiglia: un viaggio cinematografico nel cuore di Ritual Lab.',
        frame: '/images/produzioni/ritual-lab-docu-frame.png',
        youtubeUrl: 'https://www.youtube.com/watch?v=h68R9sSk38c',
        alt: 'Frame dal documentario DOCU-RITUAL LAB The Art of Brewing — 3 Monkeys Film',
    },
    {
        id: 'ritual-lab',
        title: 'RITUAL LAB — The Art of Brewing - Trailer',
        subtitle: 'Brand Film',
        category: 'Brand Film',
        result: 'Dal rituale alla bottiglia: l\'arte della birra artigianale',
        description: 'L\'arte della birra artigianale raccontata attraverso un film che cattura passione, processo e prodotto.',
        frame: '/images/produzioni/ritual-lab-frame.png',
        youtubeUrl: 'https://www.youtube.com/watch?v=P0WO1GnX-bU',
        alt: 'Frame dalla produzione RITUAL LAB The Art of Brewing — 3 Monkeys Film',
    },
];
