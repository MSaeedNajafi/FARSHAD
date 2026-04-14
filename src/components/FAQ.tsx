import { useState } from 'react';

const faqs = [
  {
    q: 'Hoe snel kunnen jullie leggen?',
    a: 'Meestal binnen 1 tot 3 weken afhankelijk van planning.',
  },
  {
    q: 'Bieden jullie gratis advies?',
    a: 'Ja, wij komen vrijblijvend langs voor advies.',
  },
  {
    q: 'Wat kost PVC vloer leggen?',
    a: 'Dit hangt af van oppervlakte en type vloer. Vraag een offerte aan.',
  },
];

const FAQ = () => {
  const [open, setOpen] = useState<number | null>(null);

  return (
    <section className="bg-gray-50 py-20">
      <div className="mx-auto max-w-4xl px-6">
        <h2 className="mb-12 text-center text-4xl font-bold">
          Veelgestelde vragen
        </h2>

        <div className="space-y-4">
          {faqs.map((item, i) => (
            <div key={i} className="rounded-xl bg-white p-6 shadow-sm">
              <button
                onClick={() => setOpen(open === i ? null : i)}
                className="flex w-full justify-between text-left font-semibold"
              >
                {item.q}
                <span>{open === i ? '−' : '+'}</span>
              </button>

              {open === i && <p className="mt-3 text-gray-600">{item.a}</p>}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export { FAQ };
