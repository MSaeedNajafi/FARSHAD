import Link from 'next/link';
import { useRouter } from 'next/router';
import { useState } from 'react';

import { Section } from '../layout/Section';
import { NavbarTwoColumns } from '../navigation/NavbarTwoColumns';
import { Logo } from './Logo';

const Navbar = () => {
  const [open, setOpen] = useState(false);
  const router = useRouter();

  const isActive = (path: string) => router.pathname === path;

  const linkClass = (path: string) =>
    `transition ${
      isActive(path)
        ? 'text-primary-300 font-semibold'
        : 'text-white hover:text-primary-300'
    }`;

  return (
    <div className="fixed top-0 z-50 w-full border-b border-white/10 bg-black/50">
      <Section yPadding="py-1">
        <NavbarTwoColumns logo={<Logo xl />}>
          {/* DESKTOP */}
          <div className="hidden items-center gap-6 md:flex">
            <li>
              <Link href="/" className={linkClass('/')}>
                Home
              </Link>
            </li>

            <li>
              <Link href="/vloeren" className={linkClass('/vloeren')}>
                Vloeren
              </Link>
            </li>

            <li>
              <Link href="/visgraat" className={linkClass('/visgraat')}>
                Visgraat
              </Link>
            </li>

            <li>
              <Link href="/over-ons" className={linkClass('/over-ons')}>
                Over ons
              </Link>
            </li>

            <li>
              <Link href="/contact" className={linkClass('/contact')}>
                Contact
              </Link>
            </li>
          </div>

          {/* HAMBURGER */}
          <button
            onClick={() => setOpen(!open)}
            className="flex flex-col gap-1 md:hidden"
          >
            <span className="h-0.5 w-6 bg-white" />
            <span className="h-0.5 w-6 bg-white" />
            <span className="h-0.5 w-6 bg-white" />
          </button>
        </NavbarTwoColumns>
      </Section>

      {/* MOBILE MENU */}
      {open && (
        <div className="border-t border-white/10 bg-black/70 px-6 py-4 md:hidden">
          <ul className="flex flex-col gap-4">
            <li>
              <Link
                href="/"
                onClick={() => setOpen(false)}
                className={linkClass('/')}
              >
                Home
              </Link>
            </li>

            <li>
              <Link
                href="/vloeren"
                onClick={() => setOpen(false)}
                className={linkClass('/vloeren')}
              >
                Vloeren
              </Link>
            </li>

            <li>
              <Link
                href="/visgraat"
                onClick={() => setOpen(false)}
                className={linkClass('/visgraat')}
              >
                Visgraat
              </Link>
            </li>

            <li>
              <Link
                href="/over-ons"
                onClick={() => setOpen(false)}
                className={linkClass('/over-ons')}
              >
                Over ons
              </Link>
            </li>

            <li>
              <Link
                href="/contact"
                onClick={() => setOpen(false)}
                className={linkClass('/contact')}
              >
                Contact
              </Link>
            </li>
          </ul>
        </div>
      )}
    </div>
  );
};

export { Navbar };
// import Link from 'next/link';

// import { Section } from '../layout/Section';
// import { NavbarTwoColumns } from '../navigation/NavbarTwoColumns';
// import { Logo } from './Logo';

// const Navbar = () => (
//   // <div className="fixed top-0 z-50 w-full bg-black/50 backdrop-blur">
//   <div className="fixed top-0 z-50 w-full border-b border-white/10 bg-black/50 ">
//     <Section yPadding="py-1">
//       <NavbarTwoColumns logo={<Logo xl />}>
//         <li>
//           <Link
//             href="/"
//             className="text-white transition hover:text-primary-300"
//           >
//             Home
//           </Link>
//         </li>
//         <li>
//           <Link
//             href="/vloeren"
//             className="text-white transition hover:text-primary-300"
//           >
//             Vloeren
//           </Link>
//         </li>
//         <li>
//           <Link
//             href="/visgraat"
//             className="text-white transition hover:text-primary-300"
//           >
//             Visgraat
//           </Link>
//         </li>
//         <li>
//           <Link
//             href="/over-ons"
//             className="text-white transition hover:text-primary-300"
//           >
//             Over ons
//           </Link>
//         </li>
//         <li>
//           <Link
//             href="/contact"
//             className="text-white transition hover:text-primary-300"
//           >
//             Contact
//           </Link>
//         </li>
//       </NavbarTwoColumns>
//     </Section>
//   </div>
// );

// export { Navbar };
