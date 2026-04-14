import { Base } from '@/templates/Base';

import { Section } from '../layout/Section';

const Contact = () => (
  <Base>
    <Section>
      <h1 className="mb-6 text-4xl font-bold">Contact</h1>

      <p className="mb-6">
        Neem contact met ons op voor een vrijblijvende offerte.
      </p>

      <form className="grid max-w-xl gap-4">
        <input className="rounded border p-3" placeholder="Naam" />
        <input className="rounded border p-3" placeholder="Email" />
        <input className="rounded border p-3" placeholder="Telefoon" />
        <textarea className="rounded border p-3" placeholder="Bericht" />

        <button className="rounded bg-black p-3 text-white">Versturen</button>
      </form>
    </Section>
  </Base>
);

export default Contact;
