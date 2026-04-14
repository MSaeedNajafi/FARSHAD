import Link from 'next/link';

import { Section } from '../layout/Section';
import { NavbarTwoColumns } from '../navigation/NavbarTwoColumns';
import { Logo } from './Logo';

const Navbar = () => (
  <div className="absolute top-0 z-20 w-full">
    <Section yPadding="py-6">
      <NavbarTwoColumns logo={<Logo xl />}>
        <li>
          <Link href="/" className="text-white">
            Home
          </Link>
        </li>
        <li>
          <Link href="/vloeren" className="text-white">
            Vloeren
          </Link>
        </li>
        <li>
          <Link href="/visgraat" className="text-white">
            Visgraat
          </Link>
        </li>
        <li>
          <Link href="/over-ons" className="text-white">
            Over ons
          </Link>
        </li>
        <li>
          <Link href="/contact" className="text-white">
            Contact
          </Link>
        </li>
      </NavbarTwoColumns>
    </Section>
  </div>
);

export { Navbar };
