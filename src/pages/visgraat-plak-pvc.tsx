import { Base } from '@/templates/Base';

const Page = () => {
  return (
    <Base>
      {/* HERO */}
      <div className="relative h-[40vh] w-full overflow-hidden">
        <img
          src="/VisgraatPlakPVC.jpg"
          alt="Visgraat Plak PVC"
          className="size-full object-cover"
        />
        <div className="absolute inset-0 bg-black/50" />

        <div className="absolute inset-0 flex items-center justify-center">
          <h1 className="text-4xl font-semibold text-white">
            Visgraat Plak PVC
          </h1>
        </div>
      </div>

      {/* CONTENT */}
      <div className="mx-auto max-w-7xl px-4 py-20 text-center">
        <h2 className="text-2xl font-semibold text-black">Coming soon</h2>

        <p className="mt-4 text-gray-600">
          We zijn momenteel onze collectie Visgraat Plak PVC aan het uitbreiden.
          Binnenkort vind je hier nieuwe visgraat stijlen met verlijmde
          afwerking, perfect voor een strakke en luxe uitstraling.
        </p>

        {/* CTA */}
        <a
          href="/visgraat-pvc"
          className="mt-8 inline-block rounded-lg bg-black px-6 py-3 text-sm font-semibold text-white transition hover:bg-gray-800"
        >
          Bekijk Visgraat PVC
        </a>
      </div>
    </Base>
  );
};

export default Page;
