import Link from 'next/link';

import { Section } from '../layout/Section';
import { Base } from '../templates/Base';
import { PageHero } from '../templates/PageHero';

const Visgraat = () => (
  <Base>
    <PageHero title="Visgraat PVC vloeren" image="/floor1.jpg" />
    <Section>
      <h2 className="mb-4 text-2xl font-bold">Luxe visgraat vloeren</h2>

      <p className="mb-6">
        Visgraat PVC vloeren geven een stijlvolle en tijdloze uitstraling.
        Perfect voor moderne en klassieke interieurs.
      </p>

      <ul className="mb-8 ml-6 list-disc">
        <li>Waterbestendig</li>
        <li>Geschikt voor vloerverwarming</li>
        <li>Slijtvast en duurzaam</li>
      </ul>

      <Link
        href="/contact"
        className="inline-block rounded bg-black px-6 py-3 text-white"
      >
        Vraag offerte aan
      </Link>
    </Section>
  </Base>
);

export default Visgraat;
