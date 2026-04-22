import { Banner } from '@/templates/Banner';

import { Section } from '../layout/Section';
import { Base } from '../templates/Base';
import { PageHero } from '../templates/PageHero';

const Visgraat = () => (
  <Base>
    <PageHero title="Visgraat PVC vloeren" image="/floor1.jpg" />

    {/* INTRO */}
    <Section>
      <div className="mx-auto max-w-3xl text-center">
        <h2 className="mb-4 text-3xl font-bold">
          Luxe visgraat vloeren voor elk interieur
        </h2>

        <p className="leading-relaxed text-gray-600">
          Visgraat PVC vloeren combineren klassieke elegantie met moderne
          duurzaamheid. Ze geven elke ruimte een luxe uitstraling en zijn
          perfect voor woningen en bedrijven.
        </p>
      </div>
    </Section>

    {/* IMAGE GALLERY */}
    <Section>
      <h2 className="mb-8 text-center text-2xl font-bold">Inspiratie</h2>

      <div className="grid gap-6 md:grid-cols-3">
        <img
          src="/floor1.jpg"
          className="h-64 w-full rounded-xl object-cover shadow"
          alt="visgraat vloer woonkamer"
        />
        <img
          src="/floor2.jpg"
          className="h-64 w-full rounded-xl object-cover shadow"
          alt="visgraat keuken"
        />
        <img
          src="/floor3.jpg"
          className="h-64 w-full rounded-xl object-cover shadow"
          alt="visgraat slaapkamer"
        />
      </div>
    </Section>

    {/* FEATURES (MODERN CARDS INSTEAD OF LIST) */}
    <Section>
      <h2 className="mb-8 text-center text-2xl font-bold">
        Waarom visgraat PVC?
      </h2>

      <div className="grid gap-6 md:grid-cols-3">
        <div className="rounded-xl border p-6 shadow-sm">
          <h3 className="mb-2 text-lg font-semibold">Waterbestendig</h3>
          <p className="text-gray-600">
            Perfect voor keuken, woonkamer en zelfs badkamer.
          </p>
        </div>

        <div className="rounded-xl border p-6 shadow-sm">
          <h3 className="mb-2 text-lg font-semibold">
            Geschikt voor vloerverwarming
          </h3>
          <p className="text-gray-600">
            Comfortabel en energiezuinig in elk seizoen.
          </p>
        </div>

        <div className="rounded-xl border p-6 shadow-sm">
          <h3 className="mb-2 text-lg font-semibold">Extreem duurzaam</h3>
          <p className="text-gray-600">
            Slijtvast materiaal dat jarenlang mooi blijft.
          </p>
        </div>
      </div>
    </Section>

    {/* BEFORE / AFTER STYLE FEEL (OPTIONAL VISUAL BLOCK) */}
    <Section>
      <div className="rounded-2xl bg-gray-50 p-10 text-center">
        <h2 className="mb-4 text-2xl font-bold">
          Het verschil dat visgraat maakt
        </h2>

        <p className="mx-auto max-w-2xl text-gray-600">
          Een visgraat patroon geeft direct een luxe hotel-achtige uitstraling
          en verhoogt de waarde van je woning.
        </p>
      </div>
    </Section>

    <Banner
      title="Interesse in visgraat PVC??"
      description="Vraag vrijblijvend een offerte aan of plan een adviesgesprek."
      buttonText="Vraag offerte aan"
      urlText="/contact"
    />
  </Base>
);

export default Visgraat;
