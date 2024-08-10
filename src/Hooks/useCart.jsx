import { useContext } from "react";
import { CartContext } from "../Context/CartContext";

export default function useCart() {
  const context = useContext(CartContext);
  if (context === undefined) {
    throw new Error("Cart must be used with a provider");
  }
  return context;
}
