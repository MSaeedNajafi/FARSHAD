import { VerticalFeatureRow } from '@/feature/VerticalFeatureRow';
import { Section } from '@/layout/Section';

const VerticalFeatures = () => (
  <Section
    title="Onze vloeren"
    description="Ontdek onze collectie hoogwaardige PVC vloeren"
  >
    <VerticalFeatureRow
      title="Klik PVC"
      description="Sterk, waterbestendig en makkelijk te onderhouden"
      image="/klik-pvc.jpg"
      imageAlt="Klik PVC vloer"
    />

    <VerticalFeatureRow
      title="Visgraat PVC"
      description="Luxe visgraat patroon met moderne uitstraling"
      image="/pexels-artbovich-6903224.jpg"
      imageAlt="Visgraat PVC vloer"
      reverse
    />

    <VerticalFeatureRow
      title="Tegel PVC"
      description="Strakke steenlook voor moderne interieurs"
      image="/pexels-digitalbuggu-368754.jpg"
      imageAlt="Tegel PVC vloer"
    />
  </Section>
);

export { VerticalFeatures };
