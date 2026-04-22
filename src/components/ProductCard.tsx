import Link from 'next/link';

import type { Product } from '@/data/products';

const formatPrice = (price: number) => price.toFixed(2).replace('.', ',');

const ProductCard = ({ product }: { product: Product }) => {
  return (
    <Link href={`/product/${product.id}`}>
      <div className="group cursor-pointer overflow-hidden border border-gray-200 bg-white transition hover:shadow-md">
        {/* Image */}
        <div className="aspect-square overflow-hidden bg-gray-50">
          <img
            src={product.images[0]}
            alt={product.name}
            className="size-full object-cover transition duration-300 group-hover:scale-105"
          />
        </div>

        {/* Content */}
        <div className="p-3">
          <h3 className="line-clamp-2 text-sm font-medium text-black">
            {product.name}
          </h3>

          <p className="mt-1 text-sm text-gray-500">
            €{formatPrice(product.price)} /m² incl. BTW
          </p>
        </div>
      </div>
    </Link>
  );
};

export default ProductCard;
