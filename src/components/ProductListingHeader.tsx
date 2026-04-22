const ProductListingHeader = ({ total }: { total: number }) => {
  return (
    <div className="mb-6 flex flex-col gap-3 md:flex-row md:items-center md:justify-between">
      {/* Title + count */}
      <div>
        <h1 className="text-2xl font-semibold text-black">Plank klik PVC</h1>

        <p className="text-sm text-gray-500">
          Resultaat 1–12 van de {total} resultaten wordt getoond
        </p>
      </div>

      {/* Sort dropdown */}
      <select className="w-full border border-gray-300 bg-white px-3 py-2 text-sm text-black md:w-64">
        <option>Standaard sortering</option>
        <option>Sort on populariteit</option>
        <option>Sort on gemiddelde waarde</option>
        <option>Sort on nieuwste</option>
        <option>Sort prijs laag naar hoog</option>
        <option>Sort prijs hoog naar laag</option>
      </select>
    </div>
  );
};

export default ProductListingHeader;
