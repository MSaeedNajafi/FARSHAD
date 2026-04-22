import { useRouter } from 'next/router';
import { useState } from 'react';

import { products } from '@/data/products';
import { Base } from '@/templates/Base';

const ProductPage = () => {
  const router = useRouter();
  const { id } = router.query;

  const product = products.find((p) => p.id === id);

  const [selectedImage, setSelectedImage] = useState(0);
  const [m2, setM2] = useState(0);
  const [waste, setWaste] = useState(0);

  if (!product) return <div className="p-20">Product not found</div>;

  const totalM2 = m2 + waste;
  const totalPrice = totalM2 * product.price;

  return (
    <Base>
      <div className="mx-auto max-w-7xl p-10 ">
        <div className="grid gap-10 md:grid-cols-2">
          {/* LEFT: IMAGE GALLERY */}
          <div>
            <img
              src={product.images[selectedImage]}
              className="mb-4 w-full rounded-xl"
            />

            <div className="flex gap-2">
              {product.images.map((img, i) => (
                <img
                  key={i}
                  src={img}
                  onClick={() => setSelectedImage(i)}
                  className={`size-20 cursor-pointer rounded object-cover ${
                    selectedImage === i ? 'border-2 border-primary-300' : ''
                  }`}
                />
              ))}
            </div>
          </div>

          {/* RIGHT: CALCULATOR + FORM */}
          <div className="rounded-xl bg-black/40 p-6">
            <h1 className="text-2xl font-bold text-white">{product.name}</h1>

            <p className="mt-2 text-xl text-primary-300">
              €{product.price} / m²
            </p>

            <h2 className="mt-6 text-lg font-semibold text-white">
              Offerte aanvragen
            </h2>

            {/* CALCULATOR */}
            <div className="mt-4 space-y-3 text-white">
              <input
                type="number"
                placeholder="Aantal m² strak gemeten"
                onChange={(e) => setM2(Number(e.target.value))}
                className="w-full border border-white/20 bg-black p-2"
              />

              <input
                type="number"
                placeholder="Snijverlies m²"
                onChange={(e) => setWaste(Number(e.target.value))}
                className="w-full border border-white/20 bg-black p-2"
              />

              <p>Totaal m²: {totalM2}</p>
              <p className="font-semibold text-primary-300">
                Totaal prijs: €{totalPrice.toFixed(2)}
              </p>
            </div>

            {/* OPTIONS */}
            <div className="mt-6 space-y-2 text-white">
              <label>
                <input type="checkbox" /> Plinten
              </label>
              <label>
                <input type="checkbox" /> Ondervloer
              </label>
              <label>
                <input type="checkbox" /> Leg service
              </label>
              <label>
                <input type="checkbox" /> Bezorgen
              </label>
            </div>

            {/* FORM */}
            <div className="mt-6 space-y-3">
              <input
                placeholder="Naam"
                className="w-full border border-white/20 bg-black p-2"
              />
              <input
                placeholder="Email"
                className="w-full border border-white/20 bg-black p-2"
              />
              <input
                placeholder="Telefoon"
                className="w-full border border-white/20 bg-black p-2"
              />
              <textarea
                placeholder="Opmerkingen"
                className="w-full border border-white/20 bg-black p-2"
              />

              <button className="w-full bg-primary-300 py-3 font-semibold text-black">
                Verstuur aanvraag
              </button>
            </div>
          </div>
        </div>

        {/* DESCRIPTION */}
        <div className="mt-16">
          <h2 className="mb-4 text-2xl font-bold text-white">Beschrijving</h2>

          <p className="leading-relaxed text-gray-900">{product.description}</p>

          {product.features && (
            <ul className="mt-6 space-y-2 text-gray-900">
              {product.features.map((item, i) => (
                <li key={i}>✔ {item}</li>
              ))}
            </ul>
          )}

          {product.specs && (
            <div className="mt-16">
              <h2 className="mb-4 text-2xl font-bold text-brand-black">
                Productinformatie
              </h2>

              <div className="overflow-hidden rounded-xl border border-white/10">
                {product.specs.map((spec, i) => (
                  <div
                    key={i}
                    className={`flex justify-between px-4 py-3 ${
                      i % 2 === 0 ? 'bg-black/40' : 'bg-black/20'
                    }`}
                  >
                    <span className="text-gray-800">{spec.label}</span>
                    <span className="font-medium text-white">{spec.value}</span>
                  </div>
                ))}
              </div>
            </div>
          )}
        </div>
      </div>
    </Base>
  );
};

export default ProductPage;
// import { useRouter } from 'next/router';
// import { Base } from '@/templates/Base';
// import { products } from '@/data/products';

// const ProductPage = () => {
//   const router = useRouter();
//   const { id } = router.query;

//   const product = products.find((p) => p.id === id);

//   if (!product) return <div className="p-20">Product not found</div>;

//   return (
//     <Base>
//       <div className="mx-auto grid max-w-7xl gap-10 p-10 md:grid-cols-2">

//         {/* IMAGE */}
//         <img
//           src={product.image}
//           className="w-full rounded-xl"
//         />

//         {/* INFO */}
//         <div>
//           <h1 className="text-3xl text-white font-bold">
//             {product.name}
//           </h1>

//           <p className="mt-4 text-2xl text-primary-300">
//             €{product.price}
//           </p>

//           <p className="mt-6 text-gray-300">
//             Hoogwaardige PVC vloer met luxe uitstraling en lange levensduur.
//           </p>
//         </div>
//       </div>
//     </Base>
//   );
// };

// export default ProductPage;
// // import { useRouter } from 'next/router';

// // import { products } from '@/data/products';

// // const ProductPage = () => {
// //   const router = useRouter();
// //   const { id } = router.query;

// //   const product = products.find((p) => p.id === id);

// //   if (!product) return <div className="p-20">Product not found</div>;

// //   return (
// //     <div className="mx-auto grid max-w-7xl gap-10 p-10 md:grid-cols-2">
// //       {/* IMAGE */}
// //       <img src={product.image} className="w-full" />

// //       {/* INFO */}
// //       <div>
// //         <h1 className="text-2xl text-white">{product.name}</h1>
// //         <p className="mt-4 text-xl text-primary-300">€{product.price}</p>
// //       </div>
// //     </div>
// //   );
// // };

// // export default ProductPage;
