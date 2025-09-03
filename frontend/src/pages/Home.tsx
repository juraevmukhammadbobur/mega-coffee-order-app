import Menu from '../components/Menu';
import Cart from '../components/Cart';
import Navbar from '../components/Navbar';
import { useState } from 'react';
import PaymentPopap from '../components/PaymentPopap';

export interface ProductCategory {
  hot: boolean;
  cold: boolean;
}

export interface Product {
  id: string;
  title: string;
  price: number;
  description: string;
  category: ProductCategory;
  image: string;
}

export interface CartItem extends Product {
  quantity: number;
}

function Home() {
  const [cart, setCart] = useState<CartItem[]>([]);
  const [showPaymentModal, setShowPaymentModal] = useState<boolean>(false);

  const toggleModal = () => {
    setShowPaymentModal((prevState) => !prevState);
  };

  const addToCart = (product: Product) => {
    setCart((prevCart) => {
      const haveToCart = prevCart.findIndex((item) => item.id === product.id);
      if (haveToCart >= 0) {
        const updateCart = [...prevCart];
        // updateCart[haveToCart].quantity += 1;
        return updateCart;
      } else {
        return [...prevCart, { ...product, quantity: 1 }];
      }
    });
  };

  const deleteOnCart = (productId: string) => {
    setCart((prevCart) => prevCart.filter((item) => item.id !== productId));
  };

  const incrementOrder = (productId: string) => {
    setCart((prevCart) =>
      prevCart.map((item) =>
        item.id === productId ? { ...item, quantity: item.quantity + 1 } : item,
      ),
    );
  };

  const decrementOrder = (productId: string) => {
    setCart((prevCart) =>
      prevCart
        .map((item) =>
          item.id === productId && item.quantity > 0
            ? { ...item, quantity: item.quantity - 1 }
            : item,
        )
        .filter((item) => item.quantity > 0),
    );
  };

  return (
    <>
      <main className="flex flex-col items-center">
        {showPaymentModal && (
          <PaymentPopap
            cart={cart}
            deleteOnCart={deleteOnCart}
            toggleModal={toggleModal}
          />
        )}
        <Navbar />
        <Menu addToCart={addToCart} />
      </main>
      <Cart
        cart={cart}
        deleteOnCart={deleteOnCart}
        incrementOrder={incrementOrder}
        decrementOrder={decrementOrder}
        toggleModal={toggleModal}
      />
    </>
  );
}

export default Home;
