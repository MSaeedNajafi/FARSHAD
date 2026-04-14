import { VerticalFeatureRow } from '../feature/VerticalFeatureRow';
import { Section } from '../layout/Section';

const VerticalFeatures = () => (
  <Section
    title="Onze vloeren"
    description="Ontdek onze collectie hoogwaardige PVC vloeren"
  >
    <VerticalFeatureRow
      title="Klik PVC"
      description="Sterk, waterbestendig en makkelijk te onderhouden"
      image="/assets/images/feature.svg"
      imageAlt="First feature alt text"
    />
    <VerticalFeatureRow
      title="Visgraat PVC"
      description="Luxe uitstraling met klassiek visgraat patroon"
      image="/assets/images/feature2.svg"
      imageAlt="Second feature alt text"
      reverse
    />
    <VerticalFeatureRow
      title="Tegel PVC"
      description="Moderne steenlook voor elke ruimte"
      image="/assets/images/feature3.svg"
      imageAlt="Third feature alt text"
    />
  </Section>
);

export { VerticalFeatures };
