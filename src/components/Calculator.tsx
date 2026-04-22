import { useState } from 'react';

const Calculator = ({ price }: { price: number }) => {
  const [m2, setM2] = useState(0);
  const [waste, setWaste] = useState(0);

  const totalM2 = m2 + waste;
  const totalPrice = totalM2 * price;

  return (
    <div className="border p-4">
      <h2>Offerte aanvragen</h2>

      <input
        type="number"
        placeholder="Aantal m²"
        onChange={(e) => setM2(Number(e.target.value))}
      />

      <input
        type="number"
        placeholder="Snijverlies"
        onChange={(e) => setWaste(Number(e.target.value))}
      />

      <p>Totaal m²: {totalM2}</p>
      <p>Prijs: €{totalPrice.toFixed(2)}</p>
    </div>
  );
};

export { Calculator };
