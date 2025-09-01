import type { Product } from '../pages/Home';

interface CardProps {
  products: Product[];
  addToCart: (product: Product) => void;
  className?: string;
}

function Card({ products = [], addToCart }: CardProps) {
  return (
    <div className="mb-40 justify-center items-center p-10 grid grid-cols-4 gap-5 max-xl:grid-cols-3 max-sm:grid-cols-1">
      {products.map((product) => {
        return (
          <div
            key={product.id}
            className="w-full h-full bg-white mb-10 g-4 cursor-pointer"
            onClick={() => addToCart(product)}
          >
            <div className="h-64">
              <img
                src={product.image}
                alt={product.title}
                className="w-full h-full object-cover hover:scale-108 transition-transform"
              />
            </div>
            <div className="flex justify-between items-end mb-3 mt-4">
              <p className="text-lg font-bold max-xl:text-sm">
                {product.title}
              </p>
              <p className="text-3xl font-light max-lg:text-lg">
                {product.price}₩
              </p>
            </div>
            <p className="text-sm font-thin text-gray-400 h-10 overflow-hidden ">
              {product.description}
            </p>
          </div>
        );
      })}
    </div>
  );
}

export default Card;
