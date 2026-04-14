import Link from 'next/link';

import { Base } from '@/templates/Base';

import { Section } from '../layout/Section';

const Visgraat = () => (
  <Base>
    {/* HERO */}
    <div
      className="bg-cover bg-center py-32 text-white"
      style={{ backgroundImage: "url('/floor1.jpg')" }}
    >
      <div className="bg-black/60 py-20 text-center">
        <h1 className="text-4xl font-bold">Visgraat PVC vloeren</h1>
        <p className="mt-4">Luxe uitstraling voor elk interieur</p>
      </div>
    </div>

    {/* CONTENT */}
    <Section>
      <h2 className="mb-4 text-2xl font-bold">Waarom kiezen voor visgraat?</h2>

      <p className="mb-6">
        Visgraat PVC vloeren geven een luxe en tijdloze uitstraling. Ze zijn
        duurzaam, onderhoudsvriendelijk en geschikt voor elke ruimte.
      </p>

      <ul className="mb-10 ml-6 list-disc">
        <li>Waterbestendig</li>
        <li>Geschikt voor vloerverwarming</li>
        <li>Lange levensduur</li>
      </ul>

      <Link href="#contact">
        <button className="rounded bg-black px-6 py-3 text-white">
          Vraag offerte aan
        </button>
      </Link>
    </Section>
  </Base>
);

export default Visgraat;
