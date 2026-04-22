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
  {
    id: 'andes-klik-pvc-ekofloors',
    name: 'Andes Klik PVC Ekofloors',
    price: 35.1,
    category: 'plank-klik-pvc',
    subcategory: 'plank-klik-pvc',

    images: [
      'https://sfvloeren.nl/wp-content/uploads/2025/05/Andes-klik-.jpg',
      'https://sfvloeren.nl/wp-content/uploads/2025/05/Andes-klik-100x100.jpg',
      'https://sfvloeren.nl/wp-content/uploads/2025/05/Andes-klik--100x100.png',
    ],

    description:
      'De Andes klik uit de EKO Excellent collection is een hoogwaardige houtlook PVC-vloer. De lange wit eiken planken zorgen voor een natuurlijke en moderne uitstraling. Dankzij het clicksysteem is deze vloer eenvoudig zelf te leggen en met een slijtlaag van 0,55 mm is hij zeer duurzaam en geschikt voor intensief gebruik.',

    features: [
      'Waterbestendig',
      'Realistisch formaat',
      '100% schoon materiaal',
      'Geschikt voor vloerverwarming',
      'Hoge kras- en slijtvastheid',
    ],

    specs: [
      { label: 'Kleur', value: 'Andes klik' },
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
    id: 'ardenne-klik-pvc-ekofloors',
    name: 'Ardennen Klik PVC Ekofloors',
    price: 35.1,
    category: 'plank-klik-pvc',
    subcategory: 'plank-klik-pvc',

    images: [
      'https://sfvloeren.nl/wp-content/uploads/2025/05/Ardennen-klik-.jpg',
      'https://sfvloeren.nl/wp-content/uploads/2025/05/Ardennen-klik-100x100.jpg',
      'https://sfvloeren.nl/wp-content/uploads/2025/05/Ardennen-klik--100x100.png',
    ],

    description:
      'De Ardennen klik is een warme eikenlook PVC-vloer die bijna niet te onderscheiden is van echt hout. Dankzij het clicksysteem is de vloer eenvoudig zelf te leggen en ideaal te combineren met vloerverwarming.',

    features: [
      'Waterbestendig',
      'Realistisch formaat',
      '100% schoon materiaal',
      'Geschikt voor vloerverwarming',
      'Hoge kras- en slijtvastheid',
    ],

    specs: [
      { label: 'Kleur', value: 'Ardennen klik' },
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
    id: 'aruba-klik-pvc-ekofloors',
    name: 'Aruba Klik PVC Ekofloors',
    price: 31.4,
    category: 'plank-klik-pvc',
    subcategory: 'plank-klik-pvc',

    images: [
      'https://sfvloeren.nl/wp-content/uploads/2025/05/Aruba-klik-.jpg',
      'https://sfvloeren.nl/wp-content/uploads/2025/05/Aruba-klik-100x100.jpg',
      'https://sfvloeren.nl/wp-content/uploads/2025/05/Aruba-klik--100x100.png',
    ],

    description:
      'De Aruba klik PVC vloer heeft een natuurlijke houtstructuur en een rustige uitstraling. Ideaal voor particuliere ruimtes dankzij de sterke toplaag en onderhoudsvriendelijk karakter.',

    features: [
      'Waterbestendig',
      'Realistisch formaat',
      '100% schoon materiaal',
      'Geschikt voor vloerverwarming',
      'Hoge kras- en slijtvastheid',
    ],

    specs: [
      { label: 'Kleur', value: 'Aruba klik' },
      { label: 'Klik/Plak', value: 'Klik' },
      { label: 'Afmetingen', value: '22,5 x 122 cm' },
      { label: 'Pakinhoud', value: '1,65 m²' },
      { label: 'Dikte', value: '4,0 mm' },
      { label: 'Slijtlaag', value: '0,3 mm' },
      { label: 'Gebruikersklasse', value: '32' },
      { label: 'Vloerverwarming', value: 'Ja' },
      { label: 'Warmteweerstand', value: '0,03' },
    ],
  },
  {
    id: 'ava-plank-pvc-klik',
    name: 'Ava Plank PVC Klik',
    price: 31.9,
    category: 'plank-klik-pvc',
    subcategory: 'plank-klik-pvc',

    images: [
      'https://sfvloeren.nl/wp-content/uploads/2025/05/Ava-Plank-PVC-klik.jpg',
    ],

    description:
      'De Ava plank heeft een lichtbruin-grijze tint die elegantie en rust toevoegt aan elk interieur. Perfect voor Scandinavische en moderne woonstijlen.',

    features: [
      'Geluiddempend',
      'Geschikt voor vloerverwarming en -koeling',
      '100% waterbestendig',
      'Hygiënisch en onderhoudsvriendelijk',
      'Slijtvast en natuurgetrouw',
    ],

    specs: [
      { label: 'Kleur', value: 'Cool + Donker' },
      { label: 'Klik/Plak', value: 'Klik' },
      { label: 'Afmetingen', value: '22,6 x 122 cm' },
      { label: 'Dikte', value: '5,2 mm' },
      { label: 'Slijtlaag', value: '0,55 mm' },
      { label: 'Gebruikersklasse', value: '33' },
      { label: 'Vloerverwarming', value: 'Ja' },
      { label: 'Warmteweerstand', value: '0.05' },
    ],
  },
  {
    id: 'bali-klik-pvc-ekofloors',
    name: 'Bali Klik PVC Ekofloors',
    price: 31.4,
    category: 'plank-klik-pvc',
    subcategory: 'plank-klik-pvc',

    images: [
      'https://sfvloeren.nl/wp-content/uploads/2025/05/Bali-klik-.jpg',
      'https://sfvloeren.nl/wp-content/uploads/2025/05/Bali-klik.jpg',
      'https://sfvloeren.nl/wp-content/uploads/2025/05/Bali-klik-.png',
    ],

    description:
      'De Bali klik PVC vloer geeft elke ruimte een lichte en rustige uitstraling. Dankzij het realistische plankformaat en waterbestendige eigenschappen is deze vloer perfect voor elk project.',

    features: [
      'Waterbestendig',
      'Realistisch formaat',
      '100% schoon materiaal',
      'Geschikt voor vloerverwarming',
      'Hoge kras- en slijtvastheid',
    ],

    specs: [
      { label: 'Kleur', value: 'Bali klik' },
      { label: 'Klik/Plak', value: 'Klik' },
      { label: 'Afmetingen', value: '22,5 x 122 cm' },
      { label: 'Pakinhoud', value: '2,2 m²' },
      { label: 'Dikte', value: '4,0 mm' },
      { label: 'Slijtlaag', value: '0,3 mm' },
      { label: 'Gebruikersklasse', value: '32' },
      { label: 'Vloerverwarming', value: 'Ja' },
      { label: 'Warmteweerstand', value: '0,03' },
    ],
  },
  {
    id: 'basalt-klik-pvc-stone-ekofloors',
    name: 'Basalt Klik PVC Stone Ekofloors',
    price: 36.95,
    category: 'plank-klik-pvc',
    subcategory: 'plank-klik-pvc',

    images: [
      'https://sfvloeren.nl/wp-content/uploads/2025/05/Basalt-klik-1.jpg',
      'https://sfvloeren.nl/wp-content/uploads/2025/05/Basalt-klik-.png',
      'https://sfvloeren.nl/wp-content/uploads/2025/05/Basalt-klik.jpg',
    ],

    description:
      'De Basalt klik is een rustige betonlook PVC vloer met een moderne uitstraling. Dankzij het kliksysteem is deze vloer eenvoudig zelf te leggen en zeer geschikt voor intensief gebruik.',

    features: [
      'Waterbestendig',
      'Realistisch formaat',
      '100% schoon materiaal',
      'Geschikt voor vloerverwarming',
      'Hoge kras- en slijtvastheid',
    ],

    specs: [
      { label: 'Kleur', value: 'Basalt klik' },
      { label: 'Klik/Plak', value: 'Klik' },
      { label: 'Afmetingen', value: '45,7 x 91,4 cm' },
      { label: 'Pakinhoud', value: '1,67 m²' },
      { label: 'Dikte', value: '5,0 mm' },
      { label: 'Slijtlaag', value: '0,55 mm' },
      { label: 'Gebruikersklasse', value: '33' },
      { label: 'Vloerverwarming', value: 'Ja' },
      { label: 'Warmteweerstand', value: '0,03' },
    ],
  },
  {
    id: 'corfu-klik-pvc-ekofloors',
    name: 'Corfu Klik PVC Ekofloors',
    price: 31.4,
    category: 'plank-klik-pvc',
    subcategory: 'plank-klik-pvc',

    images: [
      'https://sfvloeren.nl/wp-content/uploads/2025/05/Corfu-klik-.jpg',
      'https://sfvloeren.nl/wp-content/uploads/2025/05/Corfu-klik.jpg',
      'https://sfvloeren.nl/wp-content/uploads/2025/05/Corfu-klik-.png',
    ],

    description:
      'De Corfu klik PVC vloer combineert een warme houtlook met een sterke slijtlaag. Ideaal voor doe-het-zelf installatie dankzij het kliksysteem.',

    features: [
      'Waterbestendig',
      'Realistisch formaat',
      '100% schoon materiaal',
      'Geschikt voor vloerverwarming',
      'Hoge kras- en slijtvastheid',
    ],

    specs: [
      { label: 'Kleur', value: 'Corfu klik' },
      { label: 'Klik/Plak', value: 'Klik' },
      { label: 'Afmetingen', value: '22,5 x 122 cm' },
      { label: 'Pakinhoud', value: '2,2 m²' },
      { label: 'Dikte', value: '4,0 mm' },
      { label: 'Slijtlaag', value: '0,3 mm' },
      { label: 'Gebruikersklasse', value: '32' },
      { label: 'Vloerverwarming', value: 'Ja' },
      { label: 'Warmteweerstand', value: '0,03' },
    ],
  },
  {
    id: 'crystal-plank-pvc-klik',
    name: 'Crystal Plank PVC Klik',
    price: 31.9,
    category: 'plank-klik-pvc',
    subcategory: 'plank-klik-pvc',

    images: [
      'https://sfvloeren.nl/wp-content/uploads/2025/05/Crystal-Plank-PVC-klik.jpg',
    ],

    description:
      'De Crystal plank heeft een warme lichte bruine tint en past perfect in rustieke en landelijke interieurs.',

    features: [
      'Geluiddempend',
      'Geschikt voor vloerverwarming en -koeling',
      '100% waterbestendig',
      'Slijtvast en natuurgetrouw',
    ],

    specs: [
      { label: 'Dikte', value: '5,2 mm' },
      { label: 'Slijtlaag', value: '0,55 mm' },
      { label: 'Gebruikersklasse', value: '33' },
      { label: 'Vloerverwarming', value: 'Ja' },
    ],
  },
  {
    id: 'cyprus-klik-pvc-ekofloors',
    name: 'Cyprus Klik PVC Ekofloors',
    price: 31.4,
    category: 'plank-klik-pvc',
    subcategory: 'plank-klik-pvc',

    images: [
      'https://sfvloeren.nl/wp-content/uploads/2025/05/Cyprus-klik-.jpg',
      'https://sfvloeren.nl/wp-content/uploads/2025/05/Cyprus-klik.jpg',
      'https://sfvloeren.nl/wp-content/uploads/2025/05/Cyprus-klik-.png',
    ],

    description:
      'De Cyprus klik PVC vloer biedt een perfecte balans tussen stijl en duurzaamheid. Dankzij het kliksysteem is deze vloer eenvoudig zelf te leggen.',

    features: [
      'Waterbestendig',
      'Realistisch formaat',
      '100% schoon materiaal',
      'Geschikt voor vloerverwarming',
      'Hoge kras- en slijtvastheid',
    ],

    specs: [
      { label: 'Kleur', value: 'Cyprus klik' },
      { label: 'Klik/Plak', value: 'Klik' },
      { label: 'Afmetingen', value: '22,5 x 122 cm' },
      { label: 'Pakinhoud', value: '2,2 m²' },
      { label: 'Dikte', value: '4,0 mm' },
      { label: 'Slijtlaag', value: '0,3 mm' },
      { label: 'Gebruikersklasse', value: '32' },
      { label: 'Vloerverwarming', value: 'Ja' },
      { label: 'Warmteweerstand', value: '0,03' },
    ],
  },
  {
    id: 'dawn-plank-pvc-klik',
    name: 'Dawn Plank PVC Klik',
    price: 31.9,
    category: 'plank-klik-pvc',
    subcategory: 'plank-klik-pvc',

    images: [
      'https://sfvloeren.nl/wp-content/uploads/2025/05/Dawn-Plank-PVC-klik.jpg',
    ],

    description:
      'De Dawn plank, met zijn warme, donkerbruine tinten, is de belichaming van gezelligheid en luxe. Deze vloer zou prachtig zijn in een klassiek interieur met donkerhouten meubels of als contrasterend element in een modern, minimalistisch design.',

    features: [
      'Geluiddempend',
      'Geschikt voor vloerverwarming en -koeling',
      '100% waterbestendig',
      'Voelt warm aan',
      'Hygiënisch en onderhoudsvriendelijk',
      'Slijtvast en natuurgetrouw',
    ],

    specs: [
      { label: 'Type', value: 'PVC vloer' },
      { label: 'Serie', value: 'Planks' },
      { label: 'Kleur', value: 'Warm + Medium' },
      { label: 'Model', value: 'Plank' },
      { label: 'Vellingkant', value: 'Micro 4V' },
      { label: 'Uitvoering', value: 'Klik-PVC' },
      { label: 'Legwijze', value: 'Zwevend' },
      { label: 'Lengte', value: '122 cm' },
      { label: 'Breedte', value: '22,6 cm' },
      { label: 'Dikte', value: '5,2 mm' },
      { label: 'Dikte toplaag', value: '0,55 mm' },
      { label: 'Oppervlaktestructuur', value: 'Houtstructuur' },
      { label: 'Warmteweerstand', value: '0.05 m² K/W' },
      { label: 'Geschikt voor vloerverwarming', value: 'Ja' },
      { label: 'Geschikt voor vloerkoeling', value: 'Ja' },
      {
        label: 'Gebruiksklasse huishoudelijk',
        value: 'Klasse 23 (zwaar huishoudelijk)',
      },
      {
        label: 'Gebruiksklasse commercieel',
        value: 'Klasse 33 (zwaar commercieel)',
      },
      { label: 'Garantie', value: '15 jaar' },
      { label: 'Weekmakervrij', value: 'Ftalaatvrij weekmakers' },
    ],
  },
  {
    id: 'dolomieten-klik-pvc-ekofloors',
    name: 'Dolomieten Klik PVC Ekofloors',
    price: 35.1,
    category: 'plank-klik-pvc',
    subcategory: 'plank-klik-pvc',

    images: [
      'https://sfvloeren.nl/wp-content/uploads/2025/05/Dolomieten-klik-.jpg',
      'https://sfvloeren.nl/wp-content/uploads/2025/05/Dolomieten-klik.jpg',
      'https://sfvloeren.nl/wp-content/uploads/2025/05/Dolomieten-klik-1-1.jpg',
    ],

    description:
      'De Dolomieten klik is een hoogwaardige PVC-vloer met een rustige licht vergrijsde eiken kleur. Deze vloer laat ruimtes optisch groter lijken en is ideaal voor zowel woningen als projectmatig gebruik. Dankzij het kliksysteem is de vloer eenvoudig zelf te leggen.',

    features: [
      'Waterbestendig',
      'Realistisch formaat',
      '100% schoon materiaal',
      'Geschikt voor vloerverwarming',
      'Hoge kras- en slijtvastheid',
    ],

    specs: [
      { label: 'Kleur', value: 'Dolomieten klik' },
      { label: 'Klik/Plak', value: 'Klik' },
      { label: 'Afmetingen', value: '22,5 x 122 cm' },
      { label: 'Pakinhoud', value: '1,65 m²' },
      { label: 'Dikte', value: '5,0 mm' },
      { label: 'Slijtlaag', value: '0,55 mm' },
      { label: 'Gebruikersklasse', value: '33' },
      { label: 'Vloerverwarming', value: 'Ja' },
      { label: 'Warmteweerstand', value: '0,03 m² K/W' },
    ],
  },
];
