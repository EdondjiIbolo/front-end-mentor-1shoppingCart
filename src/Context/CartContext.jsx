import { useState } from "react";
import { createContext } from "react";

export const CartContext = createContext();

export function CartProvider({ children }) {
  const [cart, setCart] = useState([]);
  const [ordered, setOrdered] = useState(false);

  const removeItem = (product) => {
    const newCart = cart.filter((item) => item.name !== product.name);
    setCart(newCart);
  };
  const deleteCart = () => {
    setCart([]);
    setOrdered(false);
  };
  const addToCart = (product, qty) => {
    const isProductInCart = cart.findIndex(
      (item) => item.name === product.name
    );
    console.log(isProductInCart);
    if (isProductInCart >= 0) {
      const newCart = structuredClone(cart);
      newCart[isProductInCart].qty += qty;
      return setCart(newCart);
    }
    setCart((prevState) => [
      ...prevState,
      {
        ...product,
        qty: 1,
      },
    ]);
  };
  return (
    <CartContext.Provider
      value={{
        cart,
        removeItem,
        deleteCart,
        addToCart,
        ordered,
        setOrdered,
      }}
    >
      {children}
    </CartContext.Provider>
  );
}
