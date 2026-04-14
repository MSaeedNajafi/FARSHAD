import { FAQ } from '@/components/FAQ';

import { BeforeAfter } from '../components/BeforeAfter';
import { WhatsappButton } from '../components/WhatsappButton';
import { Meta } from '../layout/Meta';
import { AppConfig } from '../utils/AppConfig';
import { Banner } from './Banner';
import { Footer } from './Footer';
import { Hero } from './Hero';
import { Navbar } from './Navbar';
import { VerticalFeatures } from './VerticalFeatures';

type IBaseProps = {
  children?: React.ReactNode;
};

const Base = ({ children }: IBaseProps) => (
  <div className="text-gray-600 antialiased">
    <Meta title={AppConfig.title} description={AppConfig.description} />

    {/* GLOBAL NAVBAR */}
    <Navbar />

    {/* IF CUSTOM PAGE */}
    {children ? (
      <>
        {/* Push content below navbar */}
        <div className="pt-24">{children}</div>

        <Footer />
      </>
    ) : (
      /* HOMEPAGE */
      <>
        {/* HERO VIDEO */}
        <Hero />

        {/* MAIN CONTENT */}
        <div className="relative z-10 bg-white">
          {/* FEATURES */}
          <VerticalFeatures />

          {/* WHY CHOOSE US */}
          <section className="bg-white py-20">
            <div className="mx-auto max-w-6xl px-6">
              <h2 className="mb-12 text-center text-4xl font-bold">
                Waarom kiezen voor ons?
              </h2>

              <div className="grid gap-8 md:grid-cols-3">
                {[
                  {
                    title: 'Gratis advies',
                    desc: 'Persoonlijk advies voor jouw perfecte vloer.',
                    icon: '💬',
                  },
                  {
                    title: 'Snelle plaatsing',
                    desc: 'Binnen enkele dagen professioneel gelegd.',
                    icon: '⚡',
                  },
                  {
                    title: 'Top kwaliteit',
                    desc: 'Alleen duurzame A-kwaliteit PVC vloeren.',
                    icon: '🏆',
                  },
                ].map((item) => (
                  <div
                    key={item.title}
                    className="group rounded-2xl bg-gray-50 p-8 shadow-sm transition hover:-translate-y-1 hover:shadow-xl"
                  >
                    <div className="mb-4 text-4xl">{item.icon}</div>

                    <h3 className="mb-2 text-xl font-semibold group-hover:text-green-600">
                      {item.title}
                    </h3>

                    <p className="text-gray-600">{item.desc}</p>
                  </div>
                ))}
              </div>
            </div>
          </section>

          {/* <section className="py-16">
            <div className="mx-auto max-w-5xl px-6">
              <h2 className="mb-10 text-center text-3xl font-bold">
                Waarom kiezen voor ons?
              </h2>

              <div className="grid gap-8 text-center md:grid-cols-3">
                <div>
                  <h3 className="mb-2 text-xl font-semibold">Gratis advies</h3>
                  <p>Wij helpen je kiezen van vloer tot afwerking.</p>
                </div>

                <div>
                  <h3 className="mb-2 text-xl font-semibold">
                    Snelle plaatsing
                  </h3>
                  <p>Professionele installatie binnen enkele dagen.</p>
                </div>

                <div>
                  <h3 className="mb-2 text-xl font-semibold">Top kwaliteit</h3>
                  <p>Alleen duurzame PVC vloeren van hoge kwaliteit.</p>
                </div>
              </div>
            </div>
          </section> */}

          {/* GALLERY */}
          <section id="vloeren" className="bg-gray-50 py-16">
            <h2 className="mb-10 text-center text-3xl font-bold">
              Inspiratie & projecten
            </h2>

            <div className="mx-auto grid max-w-6xl gap-6 px-6 md:grid-cols-3">
              {/* <div className="overflow-hidden rounded-xl shadow">
                <img
                  src="/floor1.jpg"
                  alt="PVC visgraat woonkamer"
                  className="h-64 w-full object-cover"
                />
                <p className="p-3">Visgraat PVC woonkamer</p>
              </div> */}
              <div className="overflow-hidden rounded-2xl shadow-lg transition hover:scale-[1.02]">
                <img
                  src="/floor1.jpg"
                  className="h-72 w-full object-cover"
                  alt="PVC visgraat woonkamer"
                />
                <div className="p-4">
                  <h3 className="font-semibold">Visgraat PVC woonkamer</h3>
                  <p className="text-sm text-gray-500">Luxe afwerking</p>
                </div>
              </div>

              {/* <div className="overflow-hidden rounded-xl shadow">
                <img
                  src="/floor2.jpg"
                  alt="PVC moderne keuken vloer"
                  className="h-64 w-full object-cover"
                />
                <p className="p-3">Modern PVC keuken</p>
              </div> */}
              <div className="overflow-hidden rounded-2xl shadow-lg transition hover:scale-[1.02]">
                <img
                  src="/floor2.jpg"
                  className="h-72 w-full object-cover"
                  alt="PVC moderne keuken vloer"
                />
                <div className="p-4">
                  <h3 className="font-semibold">Visgraat PVC woonkamer</h3>
                  <p className="text-sm text-gray-500">Luxe afwerking</p>
                </div>
              </div>

              {/* <div className="overflow-hidden rounded-xl shadow">
                <img
                  src="/floor3.jpg"
                  alt="PVC slaapkamer vloer"
                  className="h-64 w-full object-cover"
                />
                <p className="p-3">Luxe PVC slaapkamer</p>
              </div> */}

              <div className="overflow-hidden rounded-2xl shadow-lg transition hover:scale-[1.02]">
                <img
                  src="/floor3.jpg"
                  className="h-72 w-full object-cover"
                  alt="PVC slaapkamer vloer"
                />
                <div className="p-4">
                  <h3 className="font-semibold">Visgraat PVC woonkamer</h3>
                  <p className="text-sm text-gray-500">Luxe afwerking</p>
                </div>
              </div>
            </div>
          </section>

          {/* BEFORE / AFTER */}
          <BeforeAfter />

          {/* CTA */}
          <Banner />

          {/* FAQ */}
          <FAQ />
          {/* <section className="py-16">
            <div className="mx-auto max-w-4xl px-6">
              <h2 className="mb-10 text-center text-3xl font-bold">
                Veelgestelde vragen
              </h2>

              <div className="space-y-6">
                <div>
                  <h3 className="font-semibold">
                    Hoe snel kunnen jullie leggen?
                  </h3>
                  <p>Meestal binnen 1 tot 3 weken afhankelijk van planning.</p>
                </div>

                <div>
                  <h3 className="font-semibold">
                    Bieden jullie gratis advies?
                  </h3>
                  <p>Ja, wij komen vrijblijvend langs voor advies.</p>
                </div>

                <div>
                  <h3 className="font-semibold">Wat kost PVC vloer leggen?</h3>
                  <p>
                    Dit hangt af van oppervlakte en type vloer. Vraag een
                    offerte aan.
                  </p>
                </div>
              </div>
            </div>
          </section> */}

          {/* CONTACT */}
          <section id="contact" className="bg-gray-50 py-20">
            <div className="mx-auto grid max-w-5xl gap-10 px-6 md:grid-cols-2">
              {/* IMAGE */}
              <img
                src="/contact.jpg"
                className="h-full rounded-2xl object-cover"
                alt="contact"
              />

              {/* FORM */}
              <div>
                <h2 className="mb-4 text-3xl font-bold">Contact opnemen</h2>

                <p className="mb-6 text-gray-600">
                  Vraag vrijblijvend een offerte aan
                </p>

                <form className="grid gap-4">
                  <input className="rounded border p-3" placeholder="Naam" />
                  <input className="rounded border p-3" placeholder="Email" />
                  <input
                    className="rounded border p-3"
                    placeholder="Telefoon"
                  />
                  <textarea
                    className="rounded border p-3"
                    placeholder="Bericht"
                  />

                  <button className="rounded bg-black py-3 text-white">
                    Verstuur
                  </button>
                </form>
              </div>
            </div>
          </section>

          {/* MAP */}
          <section className="py-16">
            <h2 className="mb-6 text-center text-3xl font-bold">
              Onze locatie
            </h2>

            <div className="mx-auto max-w-5xl px-6">
              <iframe
                src="https://www.google.com/maps?q=Rotterdam&output=embed"
                className="h-[400px] w-full rounded-xl"
                loading="lazy"
              />
            </div>
          </section>

          {/* TESTIMONIALS */}
          <section className="bg-gray-100 py-16">
            <h2 className="mb-10 text-center text-3xl font-bold">
              Wat klanten zeggen
            </h2>

            <div className="mx-auto grid max-w-5xl gap-6 px-6 md:grid-cols-3">
              <div className="rounded-xl bg-white p-6 shadow">
                <p>Super service en snelle plaatsing!</p>
                <span className="mt-4 block font-semibold">- Jan</span>
              </div>

              <div className="rounded-xl bg-white p-6 shadow">
                <p>Heel tevreden met onze nieuwe vloer.</p>
                <span className="mt-4 block font-semibold">- Fatima</span>
              </div>

              <div className="rounded-xl bg-white p-6 shadow">
                <p>Top kwaliteit en goede communicatie.</p>
                <span className="mt-4 block font-semibold">- Mark</span>
              </div>
            </div>
          </section>
        </div>

        <Footer />
      </>
    )}

    {/* GLOBAL WHATSAPP BUTTON */}
    <WhatsappButton />
  </div>
);

export { Base };
