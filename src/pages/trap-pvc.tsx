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
          <h1 className="text-4xl font-bold md:text-5xl">TRAP PVC</h1>
          {/* <p className="mt-4 text-lg text-gray-200">
            Vakmanschap in PVC vloeren met oog voor detail, design en
            duurzaamheid.
          </p> */}
        </div>
      </div>
    </div>

    {/* WHY TRUST US */}
    <Section>
      <div className="p-20 text-black">Coming soon...</div>;
    </Section>

    <Banner
      title="Klaar voor nieuwe PVC vloeren?"
      description=" Vraag vandaag nog een vrijblijvende offerte aan"
      buttonText="Neem contact op"
      urlText="/contact"
    />
  </Base>
);

export default OverOns;
