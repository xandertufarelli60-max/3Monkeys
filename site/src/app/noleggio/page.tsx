import NoleggioHero from '@/components/sections/NoleggioHero';
import LocationPoseGallery from '@/components/sections/LocationPoseGallery';
import NoleggioFeatures from '@/components/sections/NoleggioFeatures';
import NoleggioEquipment from '@/components/sections/NoleggioEquipment';
import NoleggioBooking from '@/components/sections/NoleggioBooking';
import type { Metadata } from 'next';

export const metadata: Metadata = {
    title: 'Studio Rx e Noleggio materiale | 3MonkeysFilm',
    description:
        'Noleggio location ideale per interviste, documentari, podcast, casting professionale e attrezzatura tecnica per produzioni video, fotografia e campagne pubblicitarie. Camera, luci, grip, audio. Roma - Milano.',
    keywords: [
        'noleggio location',
        'noleggio attrezzatura video',
        'sala location Roma/Milano',
        'rental equipment cinema',
        'noleggio luci set',
        'studio fotografico noleggio',
        '3Monkeys Film',
    ],
    openGraph: {
        title: 'Studio Rx e Noleggio materiale | 3MonkeysFilm',
        description:
            'Spazio professionale e attrezzatura tecnica di alto livello per ogni esigenza di produzione.',
        type: 'website',
        locale: 'it_IT',
    },
};

export default function NoleggioPage() {
    return (
        <div className="min-h-screen">
            <NoleggioHero />
            <LocationPoseGallery />
            <NoleggioFeatures />
            <NoleggioEquipment />
            <NoleggioBooking />
        </div>
    );
}
