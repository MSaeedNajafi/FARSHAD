import { useState } from 'react';

import ProductCard from '@/components/ProductCard';
import ProductListingHeader from '@/components/ProductListingHeader';
import { products } from '@/data/products';
import { Base } from '@/templates/Base';

const ITEMS_PER_PAGE = 20;

const Page = () => {
  const [page, setPage] = useState(1);

  const filtered = products.filter(
    (p) => p.category === 'plank-pvc' && p.subcategory === 'plak',
  );

  const totalPages = Math.ceil(filtered.length / ITEMS_PER_PAGE);

  const paginated = filtered.slice(
    (page - 1) * ITEMS_PER_PAGE,
    page * ITEMS_PER_PAGE,
  );

  return (
    <Base>
      {/* HERO */}
      <div className="relative h-[40vh] w-full overflow-hidden">
        <img
          src="/about-hero.jpg"
          alt="Plank Plak PVC"
          className="size-full object-cover"
        />
        <div className="absolute inset-0 bg-black/50" />

        <div className="absolute inset-0 flex items-center justify-center">
          <h1 className="text-4xl font-semibold text-white">Plank Plak PVC</h1>
        </div>
      </div>

      {/* CONTENT */}
      <div className="mx-auto max-w-7xl px-4 py-10">
        <ProductListingHeader total={filtered.length} />

        {/* GRID */}
        <div className="grid grid-cols-2 gap-4 md:grid-cols-3 lg:grid-cols-4">
          {paginated.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>

        {/* PAGINATION (FIXED - this was missing usage of setPage/totalPages) */}
        {totalPages > 1 && (
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
        )}
      </div>
    </Base>
  );
};

export default Page;
