import Menu from "../components/Menu";
import Cart from "../components/Cart";
import Navbar from "../components/Navbar";
import { useState } from "react";

// const showOrders = () => {
//   console.log("showorders");
// };

// const showNoting = () => {
//   return (
//     <>
//       <h1>add to cart</h1>
//     </>
//   );
// };

function Home() {
  const [cart, setCart] = useState([]);
  const [total, setTotal] = useState(0);

  const addToCart = (product) => {
    setCart((prevCart) => [...prevCart, product]);
  };

  const addItem = (item) => {
    const NewTotal = total + item.price;
    setTotal(NewTotal);
  };

  return (
    <>
      <main className="flex flex-col items-center">
        <Navbar />
        <Menu addToCart={addToCart} />
      </main>
      <Cart cart={cart} addItem={addItem} total={total} />
      {/* {cart.length > 0 ? showOrders() : showNoting()} */}
    </>
  );
}

export default Home;
