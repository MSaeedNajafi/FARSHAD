import Link from 'next/link';

import { Button } from '../button/Button';
import { HeroOneButton } from '../hero/HeroOneButton';
import { Section } from '../layout/Section';
import { NavbarTwoColumns } from '../navigation/NavbarTwoColumns';
import { Logo } from './Logo';

const Hero = () => (
  <div className="relative flex min-h-[80vh] flex-col justify-between overflow-hidden">
    {/* VIDEO BACKGROUND */}
    <video
      autoPlay
      muted
      loop
      playsInline
      className="absolute inset-0 size-full object-cover"
    >
      <source src="/hero.mp4" type="video/mp4" />
    </video>

    {/* DARK OVERLAY */}
    <div className="absolute inset-0 bg-black/60" />

    {/* NAVBAR */}
    <div className="relative z-10">
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

    {/* HERO CONTENT */}
    <div className="relative z-10">
      <Section yPadding="pt-20 pb-32">
        <HeroOneButton
          title={
            <>
              <span className="text-white">PVC vloeren specialist</span>
              <br />
              <span className="text-primary-300">voor elk interieur</span>
            </>
          }
          description={
            'Luxe PVC vloeren, professioneel gelegd en snel geïnstalleerd in heel Nederland.'
          }
          button={
            <div className="flex items-center gap-4">
              <Link href="#contact">
                <Button xl>Vraag offerte aan</Button>
              </Link>

              <a
                href="https://wa.me/31612345678"
                className="font-semibold text-green-400 hover:text-green-300"
              >
                WhatsApp →
              </a>
            </div>
          }
        />
      </Section>
    </div>
  </div>
);

export { Hero };
