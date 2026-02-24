// Arsenal Equipment Database
// Each item includes both Auteur (emotional) and Tech (specs) copy

export interface ArsenalItem {
    id: string;
    name: string;
    category: 'cameras' | 'lenses' | 'lights' | 'grip' | 'drones';
    brand: string;
    image: string;

    // AUTEUR VOICE
    tagline: string;
    description: string;

    // TECH VOICE
    specs: {
        [key: string]: string;
    };

    // Metadata
    featured: boolean;
    usedIn?: string[]; // Project IDs where this gear was used
}

export const arsenalData: ArsenalItem[] = [
    // CAMERAS
    {
        id: 'arri-alexa-35',
        name: 'ARRI Alexa 35',
        category: 'cameras',
        brand: 'ARRI',
        image: '/arsenal/alexa-35.jpg',
        tagline: 'The New Standard',
        description: 'Where 17 stops of dynamic range meet the soul of cinema. Every shadow tells a story.',
        specs: {
            'Sensor': '4.6K Super 35',
            'Dynamic Range': '17 stops',
            'Recording': 'ARRIRAW, ProRes',
            'Frame Rates': 'Up to 120fps',
            'Mount': 'LPL / PL',
        },
        featured: true,
        usedIn: ['ferrari-spot', 'masterchef-s12'],
    },
    {
        id: 'arri-alexa-mini-lf',
        name: 'ARRI Alexa Mini LF',
        category: 'cameras',
        brand: 'ARRI',
        image: '/arsenal/alexa-mini-lf.jpg',
        tagline: 'Large Format, Compact Soul',
        description: 'Full-frame emotion in a body that moves. Built for visionaries who refuse to stay still.',
        specs: {
            'Sensor': 'Large Format 36.70 × 25.54mm',
            'Resolution': '4.5K',
            'Dynamic Range': '14+ stops',
            'Recording': 'ARRIRAW, ProRes',
            'Weight': '2.4 kg body only',
        },
        featured: true,
        usedIn: ['pechino-express-s8'],
    },
    {
        id: 'red-v-raptor-xl',
        name: 'RED V-Raptor XL',
        category: 'cameras',
        brand: 'RED',
        image: '/arsenal/red-v-raptor.jpg',
        tagline: 'Resolution Unbound',
        description: '8K resolution for those who see details others miss. The future of digital cinema.',
        specs: {
            'Sensor': 'VV 40.96 × 21.60mm',
            'Resolution': '8K Full Format',
            'Dynamic Range': '17+ stops',
            'Frame Rates': '8K at 120fps',
            'Mount': 'RF / PL',
        },
        featured: false,
    },

    // LENSES
    {
        id: 'cooke-s4i-set',
        name: 'Cooke S4/i Prime Set',
        category: 'lenses',
        brand: 'Cooke',
        image: '/arsenal/cooke-s4i.jpg',
        tagline: 'The Cooke Look',
        description: 'Warmth that transcends technology. The organic rendition that defined a century of cinema.',
        specs: {
            'Focal Lengths': '18, 25, 32, 50, 75, 100mm',
            'Aperture': 'T2.0',
            'Coverage': 'Super 35',
            'Front Diameter': '110mm',
            '/i Technology': 'Lens metadata',
        },
        featured: true,
    },
    {
        id: 'zeiss-supreme-primes',
        name: 'Zeiss Supreme Primes',
        category: 'lenses',
        brand: 'Zeiss',
        image: '/arsenal/zeiss-supreme.jpg',
        tagline: 'Clinical Perfection',
        description: 'German precision for full-frame storytelling. Clean. Sharp. Definitive.',
        specs: {
            'Focal Lengths': '25, 29, 35, 50, 85, 100, 135mm',
            'Aperture': 'T1.5',
            'Coverage': 'Full Frame',
            'Front Diameter': '95mm',
            'Weight': '~1.4 kg average',
        },
        featured: true,
    },

    // LIGHTS
    {
        id: 'aputure-600d-pro',
        name: 'Aputure 600d Pro',
        category: 'lights',
        brand: 'Aputure',
        image: '/arsenal/aputure-600d.jpg',
        tagline: 'Daylight, Anywhere',
        description: 'Natural light that follows your vision. Weather-sealed power for any location.',
        specs: {
            'Output': '600W Daylight',
            'CRI/TLCI': '96+ / 96+',
            'Color Temp': '5600K ±200K',
            'Beam Angle': '55° (bare bulb)',
            'Weather Seal': 'IP54',
        },
        featured: false,
    },
    {
        id: 'arri-skypanel-s60',
        name: 'ARRI SkyPanel S60-C',
        category: 'lights',
        brand: 'ARRI',
        image: '/arsenal/skypanel-s60.jpg',
        tagline: 'Color Without Limits',
        description: 'The industry standard for color-critical production. Any hue, any mood, instantly.',
        specs: {
            'Output': '1,200W equivalent',
            'Color Range': 'Full RGBW + Lime',
            'CRI/TLCI': '95+ / 91+',
            'Control': 'DMX, Art-Net, Bluetooth',
            'Dimensions': '622 × 300 × 150mm',
        },
        featured: true,
    },

    // GRIP
    {
        id: 'dji-ronin-2',
        name: 'DJI Ronin 2',
        category: 'grip',
        brand: 'DJI',
        image: '/arsenal/ronin-2.jpg',
        tagline: 'Stabilized Freedom',
        description: 'Professional gimbal system for cinema cameras. Smooth motion, creative control.',
        specs: {
            'Payload': 'Up to 13.6 kg',
            'Runtime': 'Up to 2.5 hours',
            'Modes': 'SmoothTrack, Car Mount, Aerial',
            'Control': 'Wireless, Force Mobile',
            'Build': 'Carbon fiber arms',
        },
        featured: false,
    },
    {
        id: 'matthews-dolly',
        name: 'Matthews Doorway Dolly',
        category: 'grip',
        brand: 'Matthews',
        image: '/arsenal/matthews-dolly.jpg',
        tagline: 'Classic Movement',
        description: 'Time-tested reliability for tracking shots. Simple. Rugged. Cinematic.',
        specs: {
            'Track Width': '24" standard',
            'Wheel Options': 'Pneumatic / Hard',
            'Load Capacity': '400 lbs',
            'Material': 'Steel frame',
            'Compatibility': 'Standard track',
        },
        featured: false,
    },

    // DRONES
    {
        id: 'dji-inspire-3',
        name: 'DJI Inspire 3',
        category: 'drones',
        brand: 'DJI',
        image: '/arsenal/inspire-3.jpg',
        tagline: 'Cinema Takes Flight',
        description: 'Full-frame aerial cinematography. Waypoint precision meets creative freedom.',
        specs: {
            'Camera': 'Full-Frame 8K CinemaDNG',
            'Flight Time': 'Up to 28 min',
            'Max Speed': '94 km/h',
            'Transmission': 'O3 Pro, 15km range',
            'Spotlight Pro': 'Yes, Waypoint Nav',
        },
        featured: true,
    },
];

// Category labels for UI
export const categoryLabels: Record<ArsenalItem['category'], string> = {
    cameras: 'Cameras',
    lenses: 'Lenses',
    lights: 'Lighting',
    grip: 'Grip & Stabilization',
    drones: 'Aerial Systems',
};
