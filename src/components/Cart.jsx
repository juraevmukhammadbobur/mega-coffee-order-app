// import axios from "axios";
// import { useEffect, useState } from "react";

function Cart({ cart, incrementOrder, decrementOrder, total }) {
  //   console.log(cart);
  //   const [cart, setCart] = useState([]);

  //   useEffect(() => {
  //     axios
  //       .get("http://localhost:3000/cart")
  //       .then((res) => setCart(res.data))
  //       .catch((err) => console.log(err));
  //   }, []);

  // console.log(NewTotal);
  const showNothing = () => {
    return (
      <div className="flex w-full items-center justify-center ">
        <p className="text-gray-300 border-2 border-dashed py-5 px-20 rounded ">
          ADD TO CART FOR ORDER
        </p>
      </div>
    );
  };

  const showOrders = () => {
    return (
      <>
        <div className="w-1/2 grid grid-cols-3 overflow-scroll items-center h-full max-w-screen-xl p-4">
          {cart.map((item, i) => {
            return (
              <div key={i} className="flex mb-5">
                <div className="w-62 grid grid-cols-2 cursor-pointer">
                  <img
                    src={item.image}
                    alt={item.title}
                    className=" h-30 object-cover hover:scale-108 transition-transform"
                  />

                  <div className="block mx-3">
                    <p className="text-sm font-bold">{item.title}</p>
                    <div className="flex justify-between">
                      <button
                        onClick={() => incrementOrder(item.id)}
                        className="my-4 cursor-pointer bg-amber-300 flex items-center px-4 py-1 rounded-4xl "
                      >
                        +
                      </button>
                      <button
                        onClick={() => decrementOrder(item.id)}
                        className="my-4 cursor-pointer bg-neutral-300 flex items-center px-4 py-1 rounded-4xl "
                      >
                        -
                      </button>
                    </div>
                    <p className="text-3xl font-light">
                      {item.price * item.quantity}
                      {/* {total == 0 ? item.price : total + item.price} */}
                    </p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </>
    );
  };

  return (
    <div className="fixed flex justify-between left-0 right-0 bottom-0 bg-white w-full h-40 z-50 drop-shadow-[0_10px_10px_rgba(0,0,0,0.5)]">
      {cart.length > 0 ? showOrders(cart) : showNothing()}
    </div>
  );
}

export default Cart;
