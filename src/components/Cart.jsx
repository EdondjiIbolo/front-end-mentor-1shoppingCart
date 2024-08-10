import { useEffect, useState } from "react";
import useCart from "../Hooks/useCart";
import usePrice from "../utils/usePrice";
import Loading from "./Loading";

export default function Cart() {
  const [total, setTotal] = useState(0);
  const [loading, setLoading] = useState(false);
  const { cart, removeItem, setOrdered } = useCart();
  const { price } = usePrice();
  const handleOrder = () => {
    setLoading(true);
    setTimeout(() => {
      setOrdered(true);
      setLoading(false);
    }, 2000);
  };

  return (
    <section className="bg-rose-50 rounded    flex flex-col relative overflow-hidden pt-12">
      <header className="absolute top-0 w-full">
        <h2 className="text-rose-700 text-2xl my-2 px-2 py-1  border-black">
          Your Cart ({cart.length})
        </h2>
      </header>
      <article className="flex   flex-1">
        {cart.length > 0 ? (
          <main className="flex flex-col flex-1">
            {" "}
            <ul className="overflow-y-auto max-h-[250px]  flex-1 items-star justify-startt flex-col flex p-0  m-0">
              {cart.map((item) => (
                <li
                  key={item.name}
                  className="text-black list-none flex items-center  text-left w-full p-3 justify-between text-lg"
                >
                  <div className="flex flex-col">
                    <p className="font-bold">{item.name}</p>
                    <div className="flex gap-2">
                      <p className="text-rose-700 font-bold italic">
                        x{item.qty}
                      </p>
                      <div className="flex text-gray-400 font-semibold">
                        <p>@{item.price}</p>
                      </div>
                      <p className=" text-gray-400 font-semibold">
                        ${item.qty * item.price}
                      </p>
                    </div>
                  </div>
                  <span
                    className="text-black font-bold p-1 hover:border-2 italic text-opacity-55 border border-black rounded-full transition-all duration-200 ease-linear"
                    onClick={() => removeItem(item)}
                  >
                    <img
                      src="/assets/images/icon-remove-item.svg"
                      alt=""
                      className="hover:invert cursor-pointer aspect-square h-4 w-4 transition-all duration-200 ease-linear"
                    />
                  </span>
                </li>
              ))}
            </ul>
            <div className="flex justify-between text-xl font-medium  items-center p-2 py-3">
              <p className="text-gray-400 text-base ">Order total</p>
              <p className="text-black font-bold text-2xl">{price}$</p>
            </div>
            <div className="flex  p-3 py-3">
              <p className="text-black text-center w-full p-2 bg-rose-200 rounded shadow-sm">
                This is a <b>carbon-neutral</b> delivery
              </p>
            </div>
            <div
              className="flex justify-center items-center p-2 px-3"
              onClick={handleOrder}
            >
              <span className="bg-rose-800  w-full text-center rounded-3xl p-3 text-2xl cursor-pointer font-semibold hover:bg-rose-700 transition-all duration-100  flex  justify-center items-center gap-4 ease-linear">
                Continue
                {loading && (
                  <div>
                    <Loading />
                  </div>
                )}
              </span>
            </div>
          </main>
        ) : (
          <div className="justify-center flex-1 items-center flex h-[270px] ">
            <picture className="flex-1 flex justify-center items-center">
              <img
                src="./assets/images/illustration-empty-cart.svg"
                alt="empty cart image"
                className="scale-150"
              />
            </picture>
          </div>
        )}
      </article>
    </section>
  );
}
