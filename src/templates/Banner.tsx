import Link from 'next/link';

import { Button } from '../button/Button';
import { CTABanner } from '../cta/CTABanner';
import { Section } from '../layout/Section';

const Banner = () => (
  <Section>
    <CTABanner
      title="Klaar voor nieuwe PVC vloeren?"
      subtitle="Vraag vandaag nog een vrijblijvende offerte aan"
      button={
        <Link href="#contact">
          <Button>Aanvragen</Button>
        </Link>
      }
    />
  </Section>
);

export { Banner };
