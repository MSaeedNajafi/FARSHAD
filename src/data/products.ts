export type Product = {
  id: string;
  name: string;
  price: number;
  category: string;

  subcategory?: string;

  images: string[];

  description: string;
  features?: string[];

  specs?: {
    label: string;
    value: string;
  }[];
};

export const products: Product[] = [
  {
    id: 'alpen-klik-pvc-ekofloors',
    name: 'Alpen Klik PVC Ekofloors',
    price: 35.1,
    category: 'plank-klik-pvc',
    subcategory: 'plank-klik-pvc',
    images: [
      'https://sfvloeren.nl/wp-content/uploads/2025/05/alpen-klik-.jpg',
      'https://sfvloeren.nl/wp-content/uploads/2025/05/alpen-klik.jpg',
      'https://sfvloeren.nl/wp-content/uploads/2025/05/Alpen-klik--600x450.png',
    ],
    description:
      'De Alpen klik vloer is uitermate geschikt voor de doe-het-zelver. Door het handige drop down clicksysteem is deze PVC-vloer eenvoudig zelf te leggen. De natuurlijke houtlook past in elke interieurstijl.',
    features: [
      'Waterbestendig',
      'Realistisch formaat',
      '100% schoon materiaal',
      'Geschikt voor vloerverwarming',
      'Hoge kras- en slijtvastheid',
    ],
    specs: [
      { label: 'Kleur', value: 'Alpen klik' },
      { label: 'Klik/Plak', value: 'Klik' },
      { label: 'Afmetingen', value: '22,5 x 122 cm' },
      { label: 'Pakinhoud', value: '1,65 m²' },
      { label: 'Dikte', value: '5,0 mm' },
      { label: 'Slijtlaag', value: '0,55 mm' },
      { label: 'Gebruikersklasse', value: '33' },
      { label: 'Vloerverwarming', value: 'Ja' },
      { label: 'Warmteweerstand', value: '0,03' },
    ],
  },

  {
    id: 'amazone-klik-pvc-ekofloors',
    name: 'Amazone Klik PVC Ekofloors',
    price: 35.1,
    category: 'plank-klik-pvc',
    subcategory: 'plank-klik-pvc',
    images: [
      'https://sfvloeren.nl/wp-content/uploads/2025/05/amazone-klik.jpg',
      'https://sfvloeren.nl/wp-content/uploads/2025/05/amazone-klik-.jpg',
      'https://sfvloeren.nl/wp-content/uploads/2025/05/Amazone-klik-.png',
    ],
    description:
      'De Amazone klik is een PVC-vloer met een prachtige natuurlijke eikenhouten kleur. Deze vloer past in elke interieurstijl en heeft een realistisch plankformaat. Dankzij het clicksysteem is de vloer eenvoudig zelf te leggen.',
    features: [
      'Waterbestendig',
      'Realistisch formaat',
      '100% schoon materiaal',
      'Geschikt voor vloerverwarming',
      'Hoge kras- en slijtvastheid',
    ],
    specs: [
      { label: 'Kleur', value: 'Amazone klik' },
      { label: 'Klik/Plak', value: 'Klik' },
      { label: 'Afmetingen', value: '22,5 x 122 cm' },
      { label: 'Pakinhoud', value: '1,65 m²' },
      { label: 'Dikte', value: '5,0 mm' },
      { label: 'Slijtlaag', value: '0,55 mm' },
      { label: 'Gebruikersklasse', value: '33' },
      { label: 'Vloerverwarming', value: 'Ja' },
      { label: 'Warmteweerstand', value: '0,03' },
    ],
  },
];
