import React from "react";
import useCart from "../Hooks/useCart";
import usePrice from "../utils/usePrice";

export default function OrderedModal() {
  const { cart, deleteCart } = useCart();
  const { price } = usePrice();
  const handleClick = () => {
    deleteCart();
    window.location.reload();
  };
  return (
    <div className="fixed w-full p-5 h-full bg-black bg-opacity-65 top-0 left-0 flex justify-center items-center z-40">
      <article className="p-4 bg-rose100 rounded-md shadow-lg w-[340px]">
        <picture>
          <img src="/assets/images/icon-order-confirmed.svg" alt="" />
        </picture>
        <h2 className="text-black text-2xl font-bold p-3 pt-0 m-0">
          Order Confirmed
        </h2>
        <p className="px-3 text-gray-500">We hope you enjoy your food!</p>
        <ul className="p-3 bg-rose-200 rounded shadow-sm my-2 ">
          {cart.map((item, index) => (
            <li
              className="text-black  p-1 flex items-center border-b-[3px] border-gray-300 last:border-b-0  justify-between gap-8"
              key={index}
            >
              <div className="flex gap-2 items-center">
                <picture className="w-16 aspect-square rounded overflow-hidden">
                  <img src={item.image.thumbnail} alt="" />
                </picture>
                <div>
                  <p className="font-bold text-xs">{item.name}</p>
                  <p className="text-gray-600 font-medium">
                    <b className="text-roseRed italic text-xs font-bold ">
                      x{item.qty}
                    </b>{" "}
                    @ ${item.price}
                  </p>
                </div>
              </div>{" "}
              <p className="text-gray-600 font-bold text-base">
                ${item.price * item.qty}
              </p>
            </li>
          ))}
        </ul>
        <div className="flex justify-between items-center">
          <p className="text-gray-500 p-2 text-md"> Order Total</p>
          <p className="text-gray-500 p-2 text-2xl font-bold"> ${price}</p>
        </div>
        <div className="flex justify-center items-center p-2 px-3">
          <span
            className="bg-rose-700 block w-full text-center rounded-3xl p-3 text-xl cursor-pointer font-semibold hover:bg-rose-600 transition-all duration-100 ease-linear"
            onClick={handleClick}
          >
            Start new Order
          </span>
        </div>
      </article>
    </div>
  );
}
