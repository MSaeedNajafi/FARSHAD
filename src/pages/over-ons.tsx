import { Banner } from '@/templates/Banner';
import { Base } from '@/templates/Base';

import { Section } from '../layout/Section';

const OverOns = () => (
  <Base>
    {/* HERO */}
    <div className="relative h-[60vh] w-full overflow-hidden">
      <img
        src="/about-hero.jpg"
        alt="Over ons PVC vloeren"
        className="size-full object-cover"
      />
      <div className="absolute inset-0 bg-black/60" />

      <div className="absolute inset-0 flex items-center justify-center text-center text-white">
        <div className="max-w-3xl px-6">
          <h1 className="text-4xl font-bold md:text-5xl">Over ons</h1>
          <p className="mt-4 text-lg text-gray-200">
            Vakmanschap in PVC vloeren met oog voor detail, design en
            duurzaamheid.
          </p>
        </div>
      </div>
    </div>

    {/* WHO WE ARE */}
    <Section>
      <div className="grid items-center gap-10 md:grid-cols-2">
        <img
          src="/about1.jpg"
          alt="Team aan het werk"
          className="h-[400px] w-full rounded-2xl object-cover shadow-lg"
        />

        <div>
          <h2 className="mb-4 text-3xl font-bold">Wie wij zijn</h2>
          <p className="mb-4 text-gray-600">
            Wij zijn een gespecialiseerd team in PVC vloeren met jarenlange
            ervaring in zowel particuliere als zakelijke projecten.
          </p>
          <p className="text-gray-600">
            Van advies tot afwerking begeleiden wij elke stap zodat jij
            zorgeloos kunt genieten van een perfect resultaat.
          </p>
        </div>
      </div>
    </Section>

    {/* WHAT WE DO */}
    <section className="bg-gray-50 py-16">
      <div className="mx-auto max-w-6xl px-6">
        <h2 className="mb-10 text-center text-3xl font-bold">Wat wij doen</h2>

        <div className="grid gap-6 md:grid-cols-3">
          {[
            {
              title: 'Advies op maat',
              desc: 'Wij helpen je de juiste vloer kiezen voor jouw interieur.',
              img: '/service1.jpg',
            },
            {
              title: 'Professionele plaatsing',
              desc: 'Strak gelegd door ervaren vakmensen.',
              img: '/service2.jpg',
            },
            {
              title: 'Perfecte afwerking',
              desc: 'Tot in detail afgewerkt voor een luxe uitstraling.',
              img: '/service3.jpg',
            },
          ].map((item, i) => (
            <div
              key={i}
              className="overflow-hidden rounded-2xl bg-white shadow-lg"
            >
              <img
                src={item.img}
                alt={item.title}
                className="h-48 w-full object-cover"
              />
              <div className="p-5">
                <h3 className="text-xl font-semibold">{item.title}</h3>
                <p className="mt-2 text-gray-600">{item.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>

    {/* WHY TRUST US */}
    <Section>
      <div className="grid gap-10 md:grid-cols-2">
        <div>
          <h2 className="mb-4 text-3xl font-bold">Waarom klanten ons kiezen</h2>
          <ul className="space-y-3 text-gray-600">
            <li>✔ Meer dan 10 jaar ervaring</li>
            <li>✔ Hoogwaardige PVC materialen</li>
            <li>✔ Snelle en nette installatie</li>
            <li>✔ Transparante prijzen</li>
          </ul>
        </div>

        <img
          src="/about2.jpg"
          alt="vloer detail"
          className="h-[400px] w-full rounded-2xl object-cover shadow-lg"
        />
      </div>
    </Section>

    {/* CTA */}
    {/* <section className="bg-black py-16 text-center text-white">
      <h2 className="text-3xl font-bold">Klaar voor jouw nieuwe vloer?</h2>
      <p className="mt-3 text-gray-300">
        Vraag vrijblijvend advies of een offerte aan.
      </p>

      <a
        href="/contact"
        className="mt-6 inline-block rounded bg-white px-6 py-3 font-semibold text-black"
      >
        Neem contact op
      </a>
    </section> */}

    <Banner
      title="Klaar voor nieuwe PVC vloeren?"
      description=" Vraag vandaag nog een vrijblijvende offerte aan"
      buttonText="Neem contact op"
      urlText="/contact"
    />
  </Base>
);

export default OverOns;
