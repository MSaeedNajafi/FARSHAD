import Link from 'next/link';

const Footer = () => (
  <footer className="bg-[#0b0f17] text-gray-300">
    <div className="mx-auto grid max-w-6xl gap-10 px-6 py-16 md:grid-cols-3">
      {/* BRAND */}
      <div>
        <h3 className="text-xl font-bold text-white">PVC Vloeren Specialist</h3>
        <p className="mt-3 text-gray-400">
          Luxe PVC vloeren gelegd met vakmanschap in heel Nederland.
        </p>

        <p className="mt-4 text-sm text-gray-500">📧 Najafisaeed@gmail.com</p>
      </div>

      {/* LINKS */}
      <div>
        <h4 className="mb-4 font-semibold text-white">Navigatie</h4>

        <div className="space-y-2 text-sm">
          <Link href="/" className="block hover:text-white">
            Home
          </Link>
          <Link href="/vloeren" className="block hover:text-white">
            Vloeren
          </Link>
          <Link href="/visgraat" className="block hover:text-white">
            Visgraat
          </Link>
          <Link href="/contact" className="block hover:text-white">
            Contact
          </Link>
        </div>
      </div>

      {/* CTA */}
      <div>
        <h4 className="mb-4 font-semibold text-white">Offerte</h4>
        <p className="text-sm text-gray-400">
          Binnen 24 uur reactie op je aanvraag.
        </p>

        <a
          href="#contact"
          className="mt-4 inline-block rounded-lg bg-green-500 px-5 py-2 text-white hover:bg-green-600"
        >
          Vraag offerte
        </a>
      </div>
    </div>

    <div className="border-t border-white/10 py-6 text-center text-xs text-gray-500">
      © {new Date().getFullYear()} PVC Vloeren Specialist
    </div>
  </footer>
);

export { Footer };
