import Menu from "../components/Menu";
import Cart from "../components/Cart";
import Navbar from "../components/Navbar";
import { useState } from "react";
import PaymentPopap from "../components/PaymentPopap";

function Home() {
  const [cart, setCart] = useState([]);
  // const [total, setTotal] = useState(0);
  const [showPaymentModal, setShowPaymentModal] = useState(false);

  const modalTrue = () => {
    setShowPaymentModal(true);
  };

  const addToCart = (product) => {
    setCart((prevCart) => {
      const haveToCart = prevCart.findIndex((item) => item.id === product.id);
      if (haveToCart >= 0) {
        const updateCart = [...prevCart];
        updateCart[haveToCart].quantity = +1;
        return updateCart;
      } else {
        return [...prevCart, { ...product, quantity: 1 }];
      }
    });
    // console.log(product);
  };

  const incrementOrder = (productId) => {
    setCart((prevCart) =>
      prevCart.map((item) =>
        item.id === productId ? { ...item, quantity: item.quantity + 1 } : item
      )
    );
  };

  const decrementOrder = (productId) => {
    setCart(
      (prevCart) =>
        prevCart.map((item) =>
          item.id === productId && item.quantity > 1
            ? { ...item, quantity: item.quantity - 1 }
            : item
        )
      // .filter((item) => item.quantity > 0)
    );
  };

  // const addItem = (item) => {
  //   const NewTotal = total + item.price;
  //   setTotal(NewTotal);
  //   console.log(cart);
  // };

  return (
    <>
      <main className="flex flex-col items-center">
        {showPaymentModal && <PaymentPopap />}
        <Navbar />
        <Menu addToCart={addToCart} />
      </main>
      <Cart
        cart={cart}
        incrementOrder={incrementOrder}
        decrementOrder={decrementOrder}
        modalTrue={modalTrue}
      />
    </>
  );
}

export default Home;
