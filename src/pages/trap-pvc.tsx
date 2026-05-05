import { useState } from 'react';

import ProductCard from '@/components/ProductCard';
import ProductListingHeader from '@/components/ProductListingHeader';
import { trapProducts } from '@/data/trap';
import { Banner } from '@/templates/Banner';
import { Base } from '@/templates/Base';

import { Section } from '../layout/Section';

const ITEMS_PER_PAGE = 20;

const OverOns = () => {
  const [page, setPage] = useState(1);

  const filtered = trapProducts.filter(
    (p) => p.category === 'trap-pvc' && p.subcategory === 'slabs',
  );

  const totalPages = Math.ceil(filtered.length / ITEMS_PER_PAGE);

  const paginated = filtered.slice(
    (page - 1) * ITEMS_PER_PAGE,
    page * ITEMS_PER_PAGE,
  );

  return (
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
        {/* CONTENT */}
        <div className="mx-auto max-w-7xl px-4 py-10">
          {/* HEADER */}
          <ProductListingHeader total={filtered.length} />

          {/* GRID */}
          <div className="grid grid-cols-2 gap-4 md:grid-cols-3 lg:grid-cols-4">
            {paginated.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>

          {/* PAGINATION */}
          <div className="mt-10 flex flex-wrap gap-2">
            {Array.from({ length: totalPages }).map((_, i) => {
              const pageNumber = i + 1;

              return (
                <button
                  key={pageNumber}
                  onClick={() => setPage(pageNumber)}
                  className={`rounded border px-3 py-1 text-sm transition ${
                    page === pageNumber
                      ? 'border-black bg-black text-white'
                      : 'border-gray-300 bg-white text-black hover:bg-gray-100'
                  }`}
                >
                  {pageNumber}
                </button>
              );
            })}
          </div>
        </div>
      </Section>

      <Banner
        title="Klaar voor nieuwe PVC vloeren?"
        description=" Vraag vandaag nog een vrijblijvende offerte aan"
        buttonText="Neem contact op"
        urlText="/contact"
      />
    </Base>
  );
};

export default OverOns;
