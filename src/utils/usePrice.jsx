import React from "react";
import useCart from "../Hooks/useCart";

export default function usePrice() {
  const { cart } = useCart();
  const getPrices = cart.map((item) => item.price * item.qty);
  let price = 0;
  for (let i = 0; i < getPrices.length; i++) {
    price += getPrices[i];
  }
  return { price };
}
