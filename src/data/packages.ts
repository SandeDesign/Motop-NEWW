// Package data for Motop driving school
export interface Package {
  id: string;
  name: string;
  type: 'motor' | 'auto';
  lessons: number;
  exams: string[];
  price: number;
  originalPrice?: number;
  popular?: boolean;
  description: string;
  features: string[];
}

export interface AlaCarteItem {
  id: string;
  name: string;
  type: 'motor' | 'auto' | 'both';
  price: number;
  description: string;
}

export const motorPackages: Package[] = [
  {
    id: 'motor-start',
    name: 'START PAKKET',
    type: 'motor',
    lessons: 10,
    exams: ['AVB', 'AVD'],
    price: 1099,
    originalPrice: 1199,
    description: 'Perfect voor beginners die willen starten met motorrijlessen',
    features: [
      '10 praktijklessen van 60 minuten',
      'AVB theorieëxamen',
      'AVD praktijkexamen',
      'Professionele begeleiding',
      'Flexibele planning'
    ]
  },
  {
    id: 'motor-totaal',
    name: 'TOTAAL PAKKET',
    type: 'motor',
    lessons: 20,
    exams: ['AVB', 'AVD'],
    price: 1699,
    originalPrice: 1899,
    popular: true,
    description: 'Meest populaire pakket met uitgebreide voorbereiding',
    features: [
      '20 praktijklessen van 60 minuten',
      'AVB theorieëxamen',
      'AVD praktijkexamen',
      'Extra oefentijd voor zekerheid',
      'Persoonlijke coaching',
      'Flexibele planning'
    ]
  },
  {
    id: 'motor-pro',
    name: 'PRO PAKKET',
    type: 'motor',
    lessons: 30,
    exams: ['AVB', 'AVD'],
    price: 2299,
    originalPrice: 2599,
    description: 'Uitgebreid pakket voor maximale voorbereiding',
    features: [
      '30 praktijklessen van 60 minuten',
      'AVB theorieëxamen',
      'AVD praktijkexamen',
      'Uitgebreide praktijkvoorbereiding',
      'Individuele feedback sessies',
      'Flexibele planning',
      'Extra veiligheidstraining'
    ]
  }
];

export const autoPackages: Package[] = [
  {
    id: 'auto-start',
    name: 'START PAKKET',
    type: 'auto',
    lessons: 20,
    exams: ['Theorie', 'Praktijk'],
    price: 1799,
    originalPrice: 2039,
    description: 'Ideaal startpakket voor autorijlessen',
    features: [
      '20 praktijklessen van 60 minuten',
      'Theorieëxamen',
      'Praktijkexamen',
      'Professionele instructeur',
      'Moderne lesauto\'s'
    ]
  },
  {
    id: 'auto-standaard',
    name: 'STANDAARD PAKKET',
    type: 'auto',
    lessons: 30,
    exams: ['Theorie', 'Praktijk'],
    price: 2399,
    originalPrice: 2739,
    popular: true,
    description: 'Meest gekozen pakket met ruime voorbereiding',
    features: [
      '30 praktijklessen van 60 minuten',
      'Theorieëxamen',
      'Praktijkexamen',
      'Extra oefenuren',
      'Persoonlijke coaching',
      'Moderne lesauto\'s'
    ]
  },
  {
    id: 'auto-compleet',
    name: 'COMPLEET PAKKET',
    type: 'auto',
    lessons: 40,
    exams: ['Theorie', 'Praktijk'],
    price: 2999,
    originalPrice: 3439,
    description: 'Complete voorbereiding voor maximale slaagkans',
    features: [
      '40 praktijklessen van 60 minuten',
      'Theorieëxamen',
      'Praktijkexamen',
      'Uitgebreide voorbereiding',
      'Extra examens indien nodig',
      'Individuele coaching sessies',
      'Moderne lesauto\'s'
    ]
  }
];

export const alaCarteItems: AlaCarteItem[] = [
  {
    id: 'proefles',
    name: 'Proefles',
    type: 'both',
    price: 90,
    description: 'Kennismakingsles om je niveau in te schatten'
  },
  {
    id: 'losse-les-motor',
    name: 'Losse Motorles',
    type: 'motor',
    price: 70,
    description: 'Enkele praktijkles voor motor'
  },
  {
    id: 'losse-les-auto',
    name: 'Losse Autoles',
    type: 'auto',
    price: 70,
    description: 'Enkele praktijkles voor auto'
  },
  {
    id: 'avb-examen',
    name: 'AVB Examen',
    type: 'motor',
    price: 200,
    description: 'Theorieëxamen voor motor'
  },
  {
    id: 'avd-examen',
    name: 'AVD Examen',
    type: 'motor',
    price: 300,
    description: 'Praktijkexamen voor motor'
  },
  {
    id: 'theorie-examen-auto',
    name: 'Theorie Examen Auto',
    type: 'auto',
    price: 320,
    description: 'Theorieëxamen voor auto'
  },
  {
    id: 'praktijk-examen-auto',
    name: 'Praktijk Examen Auto',
    type: 'auto',
    price: 350,
    description: 'Praktijkexamen voor auto'
  }
];