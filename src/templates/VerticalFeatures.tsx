import { VerticalFeatureRow } from '@/feature/VerticalFeatureRow';
import { Section } from '@/layout/Section';

const VerticalFeatures = () => (
  <Section
    title="Onze vloeren"
    description="Ontdek onze volledige collectie PVC vloeren"
  >
    <div className="mx-auto max-w-5xl space-y-20">
      {/* ================= PLANK PVC ================= */}
      <div className="space-y-8 text-center">
        <h3 className="text-2xl font-semibold text-gray-900">Plank PVC</h3>

        <div className="space-y-10 text-left">
          <VerticalFeatureRow
            title="Plank Klik PVC"
            description="Sterk, waterbestendig en eenvoudig zelf te leggen dankzij het kliksysteem"
            image="https://sfvloeren.nl/wp-content/uploads/2025/05/Cyprus-klik-.jpg"
            imageAlt="Plank klik PVC vloer"
          />

          <VerticalFeatureRow
            title="Plank Plak PVC"
            description="Strakke verlijmde vloer voor een extra stabiele en luxe afwerking"
            image="https://sfvloeren.nl/wp-content/uploads/2025/05/Ava-Plank-PVC-plak.jpg"
            imageAlt="Plank plak PVC vloer"
            reverse
          />
        </div>
      </div>

      {/* ================= TEGEL PVC ================= */}
      <div className="space-y-8 text-center">
        <h3 className="text-2xl font-semibold text-gray-900">Tegel PVC</h3>

        <div className="space-y-10 text-left">
          <VerticalFeatureRow
            title="Tegel Klik PVC"
            description="Moderne steenlook met klik systeem voor snelle installatie"
            image="https://sfvloeren.nl/wp-content/uploads/2025/05/Jura-Tile-Tegel-PVC-klik.jpg"
            imageAlt="Tegel klik PVC vloer"
          />

          <VerticalFeatureRow
            title="Tegel Plak PVC"
            description="Strakke tegeluitstraling met verlijmde plaatsing voor maximale stabiliteit"
            image="https://sfvloeren.nl/wp-content/uploads/2025/04/Leisteen-XL-grey-055mm-Plak-PVC.webp"
            imageAlt="Tegel plak PVC vloer"
            reverse
          />
        </div>
      </div>

      {/* ================= VISGRAAT PVC ================= */}
      <div className="space-y-8 text-center">
        <h3 className="text-2xl font-semibold text-gray-900">Visgraat PVC</h3>

        <div className="space-y-10 text-left">
          <VerticalFeatureRow
            title="Visgraat Klik PVC"
            description="Luxe visgraatpatroon met eenvoudig klik systeem"
            image="https://sfvloeren.nl/wp-content/uploads/2025/05/Ava-Herringbone-Visgraat-PVC-Klik.jpg"
            imageAlt="Visgraat klik PVC vloer"
          />

          <VerticalFeatureRow
            title="Visgraat Plak PVC"
            description="Premium visgraat vloer voor een strak en exclusief interieur"
            image="https://sfvloeren.nl/wp-content/uploads/2025/05/Colorado-visgraat-plak-.jpg"
            imageAlt="Visgraat plak PVC vloer"
            reverse
          />
        </div>
      </div>

      {/* ================= TRAP PVC ================= */}
      <div className="space-y-8 text-center">
        <h3 className="text-2xl font-semibold text-gray-900">Trap PVC</h3>

        <div className="flex justify-center text-left">
          <div className="w-full max-w-3xl">
            <VerticalFeatureRow
              title="Trap PVC Bekleding"
              description="Slijtvaste en veilige trapafwerking met perfecte grip en uitstraling"
              image="https://sfvloeren.nl/wp-content/uploads/2025/05/Traprenovatie-Honing-dekker.png"
              imageAlt="Trap PVC bekleding"
            />
          </div>
        </div>
      </div>
    </div>
  </Section>
);

export { VerticalFeatures };
