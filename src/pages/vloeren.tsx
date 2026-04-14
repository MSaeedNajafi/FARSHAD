import { Base } from '@/templates/Base';
import { PageHero } from '@/templates/PageHero';

import { Section } from '../layout/Section';

const Vloeren = () => (
  <Base>
    <PageHero
      title="PVC vloeren voor elk interieur"
      image="/vloeren-hero.jpg"
    />
    <Section>
      <h1 className="mb-6 text-4xl font-bold">PVC Vloeren</h1>

      <p className="mb-10">
        Wij bieden hoogwaardige PVC vloeren in verschillende stijlen.
      </p>

      <div className="grid gap-6 md:grid-cols-3">
        <div>
          <img src="/floor1.jpg" className="rounded-lg" alt="Klik PVC" />
          <h3 className="mt-3 font-semibold">Klik PVC</h3>
        </div>

        <div>
          <img src="/floor2.jpg" className="rounded-lg" alt="Visgraat PVC" />
          <h3 className="mt-3 font-semibold">Visgraat PVC</h3>
        </div>

        <div>
          <img src="/floor3.jpg" className="rounded-lg" alt="Tegel PVC" />
          <h3 className="mt-3 font-semibold">Tegel PVC</h3>
        </div>
      </div>
    </Section>
  </Base>
);

export default Vloeren;
