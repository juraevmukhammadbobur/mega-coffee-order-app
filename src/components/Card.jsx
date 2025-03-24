import axios from "axios";
import { useEffect, useState } from "react";

function Card({ addToCart }) {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    axios
      .get("http://localhost:3000/menu")
      .then((res) => setProducts(res.data))
      .catch((err) => console.log(err));
  }, []);

  return (
    <div className="mb-40 justify-center items-center grid grid-cols-4 gap-4">
      {products.map((product, i) => {
        return (
          <div
            key={i}
            className="w-70 h-85 bg-white mb-10 g-4 cursor-pointer"
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
              <p className="text-lg font-bold">{product.title}</p>
              <p className="text-3xl font-light">{product.price}</p>
            </div>
            <p className="text-sm font-thin text-gray-400 h-10 overflow-hidden">
              {product.description}
            </p>
          </div>
        );
      })}

      {/* <div className="cart">
        <h2>Cart</h2>
        {cart.map((item, i) => (
          <div key={i}>
            <p>
              {item.title} - {item.price}
            </p>
          </div>
        ))}
      </div> */}
    </div>
  );
}

export default Card;
