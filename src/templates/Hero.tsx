import Link from 'next/link';

import { Button } from '../button/Button';
import { HeroOneButton } from '../hero/HeroOneButton';
import { Section } from '../layout/Section';

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

    {/* HERO CONTENT */}
    <div className="relative z-10">
      <Section yPadding="pt-32 pb-32">
        <div className="mt-16">
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
        </div>
      </Section>
    </div>
  </div>
);

export { Hero };
