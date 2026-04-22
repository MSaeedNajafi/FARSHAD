import Link from 'next/link';

import { Button } from '../button/Button';
import { Section } from '../layout/Section';

const Hero = () => (
  // <div className="relative flex min-h-[80vh] flex-col justify-between overflow-hidden">
  <div className="relative flex min-h-[100vh] flex-col justify-center overflow-hidden">
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
    {/* <div className="absolute inset-0 bg-black/60" /> */}
    <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/60 to-black/80" />

    {/* HERO CONTENT */}
    {/* <div className="relative z-10">
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
    </div> */}
    <div className="relative z-10">
      <Section yPadding="pt-32 pb-28">
        <div className="max-w-3xl">
          {/* MAIN TITLE */}
          <h1 className="text-4xl font-bold leading-tight text-white md:text-6xl">
            PVC vloeren specialist
          </h1>

          {/* SUBTITLE (soft blue but still readable) */}
          <p className="mt-4 text-xl font-medium text-blue-200 md:text-2xl">
            Voor elk interieur
          </p>

          {/* DESCRIPTION (now readable with better contrast) */}
          <p className="mt-6 max-w-xl text-base leading-relaxed text-white/80 md:text-lg">
            Luxe PVC vloeren, professioneel gelegd en snel geïnstalleerd in heel
            Nederland.
          </p>

          {/* CTA BUTTONS */}
          <div className="mt-8 flex flex-col gap-4 sm:flex-row sm:items-center">
            {/* PRIMARY CTA */}
            <Link href="#contact">
              <Button xl className="bg-blue-600 text-white hover:bg-blue-700">
                Vraag offerte aan
              </Button>
            </Link>

            {/* SECONDARY CTA */}
            <a
              href="https://wa.me/31684106995"
              className="inline-flex items-center justify-center rounded-md px-6 py-3 font-semibold text-green-400 ring-1 ring-green-400/40 transition hover:bg-green-500/10 hover:text-green-300"
            >
              WhatsApp →
            </a>
          </div>
        </div>
      </Section>
    </div>
    <div className="absolute inset-x-0 bottom-0 h-24 bg-gradient-to-t from-white to-transparent" />
  </div>
);

export { Hero };
