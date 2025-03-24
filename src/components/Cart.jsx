// import axios from "axios";
// import { useEffect, useState } from "react";

function Cart({ cart, addItem, total }) {
  //   console.log(cart);
  //   const [cart, setCart] = useState([]);

  //   useEffect(() => {
  //     axios
  //       .get("http://localhost:3000/cart")
  //       .then((res) => setCart(res.data))
  //       .catch((err) => console.log(err));
  //   }, []);

  // console.log(NewTotal);
  const shoNothing = () => {
    return (
      <>
        <p>add to cart</p>
      </>
    );
  };

  const showOrders = () => {
    return (
      <>
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
                      onClick={() => addItem(item)}
                      className="my-4 cursor-pointer bg-amber-300 flex items-center px-4 py-1 rounded-4xl "
                    >
                      +
                    </button>
                    <button className="my-4 cursor-pointer bg-neutral-300 flex items-center px-4 py-1 rounded-4xl ">
                      -
                    </button>
                  </div>
                  <p className="text-3xl font-light">{total}</p>
                </div>
              </div>
            </div>
          );
        })}
      </>
    );
  };

  return (
    <div className="fixed flex justify-between left-0 right-0 bottom-0 bg-white w-full h-40 z-50 drop-shadow-[0_10px_10px_rgba(0,0,0,0.5)]">
      <div className="w-1/2 grid grid-cols-3 overflow-scroll items-center h-full max-w-screen-xl p-4">
        {cart.length > 0 ? showOrders(cart) : shoNothing()}
      </div>
    </div>
  );
}

export default Cart;
