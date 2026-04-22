import { Banner } from '@/templates/Banner';
import { Base } from '@/templates/Base';

import { Section } from '../layout/Section';

const Contact = () => (
  <Base>
    {/* HERO */}
    <div className="relative h-[45vh] w-full overflow-hidden">
      <img
        src="/contact-hero.jpg"
        alt="Contact PVC vloeren"
        className="size-full object-cover"
      />
      <div className="absolute inset-0 bg-black/60" />

      <div className="absolute inset-0 flex items-center justify-center text-center text-white">
        <div className="max-w-2xl px-6">
          <h1 className="text-4xl font-bold">Contact</h1>
          <p className="mt-3 text-gray-200">
            Vraag vrijblijvend een offerte aan of stel je vraag aan onze
            specialisten
          </p>
        </div>
      </div>
    </div>

    {/* MAIN CONTACT SECTION */}
    <Section>
      <div className="grid gap-10 md:grid-cols-2">
        {/* FORM */}
        <div className="rounded-2xl bg-white p-6 shadow-lg">
          <h2 className="mb-4 text-2xl font-bold">Stuur een bericht</h2>
          <p className="mb-6 text-gray-600">
            Wij reageren meestal binnen 24 uur.
          </p>

          <form className="grid gap-4">
            <input
              className="rounded-lg border p-3 focus:border-black focus:outline-none"
              placeholder="Naam"
            />
            <input
              className="rounded-lg border p-3 focus:border-black focus:outline-none"
              placeholder="Email"
            />
            <input
              className="rounded-lg border p-3 focus:border-black focus:outline-none"
              placeholder="Telefoon"
            />
            <textarea
              className="min-h-[120px] rounded-lg border p-3 focus:border-black focus:outline-none"
              placeholder="Bericht"
            />

            <button className="rounded-lg bg-black py-3 font-semibold text-white transition hover:bg-gray-800">
              Versturen
            </button>
          </form>
        </div>

        {/* INFO CARD */}
        <div className="space-y-6">
          <div className="rounded-2xl bg-gray-50 p-6 shadow">
            <h3 className="mb-2 text-xl font-semibold">Direct contact</h3>
            <p className="text-gray-600">📞 +31684106995</p>
            <p className="text-gray-600">✉️ info@pvcvloeren.nl</p>

            <a
              href="https://wa.me/31684106995"
              className="mt-4 inline-block font-semibold text-green-600 hover:text-green-500"
            >
              WhatsApp ons →
            </a>
          </div>

          <div className="rounded-2xl bg-black p-6 text-white">
            <h3 className="mb-2 text-xl font-semibold">
              Waarom contact opnemen?
            </h3>
            <ul className="space-y-2 text-sm text-gray-200">
              <li>✔ Gratis advies aan huis</li>
              <li>✔ Offerte binnen 24 uur</li>
              <li>✔ Professionele installatie</li>
              <li>✔ Heel Nederland service</li>
            </ul>
          </div>

          <div className="rounded-2xl bg-white p-6 shadow">
            <h3 className="mb-3 text-xl font-semibold">Snelle reactie</h3>
            <p className="text-gray-600">
              We proberen altijd dezelfde dag nog te reageren op jouw aanvraag.
            </p>
          </div>
        </div>
      </div>
    </Section>

    {/* MAP */}
    {/* <section className="py-16">
      <h2 className="mb-6 text-center text-3xl font-bold">Onze locatie</h2>

      <div className="mx-auto max-w-5xl px-6">
        <iframe
          src="https://www.google.com/maps?q=Rotterdam&output=embed"
          className="h-[400px] w-full rounded-2xl shadow"
          loading="lazy"
        />
      </div>
    </section> */}
    <section className="py-16">
      <h2 className="mb-6 text-center text-3xl font-bold">Onze locatie</h2>

      <div className="mx-auto max-w-5xl px-6">
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2469.999!2d4.4906602!3d51.9279577!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47c5cd35a21c2347%3A0xe949db2c742b4b48!2sFvloeren!5e0!3m2!1snl!2snl!4v1745178000000"
          className="h-[400px] w-full rounded-2xl shadow"
          loading="lazy"
          allowFullScreen
          referrerPolicy="no-referrer-when-downgrade"
        />
      </div>
    </section>

    <Banner
      title="Klaar om te starten?"
      description=" Vraag vandaag nog jouw PVC vloer offerte aan"
      buttonText=" WhatsApp direct"
      urlText="https://wa.me/31684106995"
    />
  </Base>
);

export default Contact;
