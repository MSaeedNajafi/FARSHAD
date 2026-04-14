import Link from 'next/link';

import { Section } from '../layout/Section';
import { NavbarTwoColumns } from '../navigation/NavbarTwoColumns';
import { Logo } from './Logo';

const Navbar = () => (
  // <div className="fixed top-0 z-50 w-full bg-black/50 backdrop-blur">
  <div className="fixed top-0 z-50 w-full border-b border-white/10 bg-black/50 ">
    <Section yPadding="py-1">
      <NavbarTwoColumns logo={<Logo xl />}>
        <li>
          <Link
            href="/"
            className="text-white transition hover:text-primary-300"
          >
            Home
          </Link>
        </li>
        <li>
          <Link
            href="/vloeren"
            className="text-white transition hover:text-primary-300"
          >
            Vloeren
          </Link>
        </li>
        <li>
          <Link
            href="/visgraat"
            className="text-white transition hover:text-primary-300"
          >
            Visgraat
          </Link>
        </li>
        <li>
          <Link
            href="/over-ons"
            className="text-white transition hover:text-primary-300"
          >
            Over ons
          </Link>
        </li>
        <li>
          <Link
            href="/contact"
            className="text-white transition hover:text-primary-300"
          >
            Contact
          </Link>
        </li>
      </NavbarTwoColumns>
    </Section>
  </div>
);

export { Navbar };
