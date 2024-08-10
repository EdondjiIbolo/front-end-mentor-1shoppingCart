import { useEffect, useState } from "react";
import useCart from "../Hooks/useCart";
import Loading from "./Loading";
import ProductLoader from "./ProductLoader";

export function Product({ product }) {
  const { addToCart, cart, removeItem } = useCart();
  const [loading, setLoading] = useState(false);
  const checkIsInCart = () => {
    const productExist = cart.find((item) => item.name === product.name);
    return productExist;
  };
  const isInCart = checkIsInCart();

  const classname = isInCart
    ? "w-full rounded border-rose-500 border-2 aspect-square"
    : "w-full rounded aspect-square";

  return (
    <article className="flex flex-col justify-center gap-3  p-4 text-left">
      <picture className="w-full py-4 relative flex justify-center flex-col items-center overflow-hidden">
        {loading && (
          <div className=" absolute pt-5 bg-slate-400 w-full aspect-square flex justify-center items-center bg-opacity-80 rounded">
            <ProductLoader />
          </div>
        )}
        <img
          src={product.image.thumbnail}
          alt={product.name}
          className={classname}
        ></img>
        {!isInCart ? (
          <AddtoCartButton
            product={product}
            loading={loading}
            setLoading={setLoading}
            addToCart={addToCart}
          />
        ) : (
          <InputButton
            product={product}
            addToCart={addToCart}
            isInCart={isInCart}
            removeItem={removeItem}
            setLoading={setLoading}
          />
        )}
      </picture>
      <section>
        <p className=" text-rose300">{product.category}</p>
        <p className="text-rose-50 font-bold text-xl text-ellipsis  text-nowrap max-w-full overflow-hidden">
          {product.name}
        </p>
        <span className=" text-rose-500 font-medium text-lg">
          ${product.price}
        </span>
      </section>
    </article>
  );
}
function AddtoCartButton({ product, addToCart, loading, setLoading }) {
  const handleAdd = () => {
    setLoading(true);
    setTimeout(() => {
      addToCart(product, 1);
      setLoading(false);
    }, 2000);
  };

  return (
    <div
      className="p-1 justify-center items-center flex gap-2 px-5 absolute bottom-0 bg-rose50 text-black font-medium rounded-3xl cursor-pointer hover:border-rose-600 hover:borde-2 transition-all duration-100 ease-linear hover:shadow-md border border-transparent"
      onClick={handleAdd}
    >
      <picture>
        <img
          src="./assets/images/icon-add-to-cart.svg"
          alt="Add to cart icon"
        />
      </picture>
      <p>Add to cart</p>
      {loading && (
        <div className="w-4 h-4 flex items-center">
          <Loading />
        </div>
      )}
    </div>
  );
}
function InputButton({ product, addToCart, isInCart, removeItem, setLoading }) {
  const getCartProduct = isInCart?.qty;

  const handleAdd = () => {
    setLoading(true);
    setTimeout(() => {
      addToCart(product, 1);
      setLoading(false);
    }, 2000);
  };
  const handleDelete = () => {
    setLoading(true);
    setTimeout(() => {
      if (getCartProduct > 1) {
        addToCart(product, -1);
        setLoading(false);
        return;
      }
      removeItem(product);
      setLoading(false);
    }, 2000);
  };
  return (
    <div className=" items-center justify-center   flex gap-2 px-5 absolute sm:w-32 w-44 h-8  bottom-0 bg-roseRed text-black font-medium rounded-3xl cursor-pointer hover:border-rose-600 hover:borde-2 transition-all duration-100 ease-linear hover:shadow-md border border-transparent">
      <div
        className="border border-white rounded-full p-1 cursor-pointer hover:border-2 transition-all duration-100 ease-linear "
        onClick={handleDelete}
      >
        <img
          src="/assets/images/icon-decrement-quantity.svg"
          alt="decrease"
          className="w-2 h-2 "
        />
      </div>
      <input
        type="number"
        inputMode="numeric"
        value={getCartProduct}
        className="w-8 bg-inherit bg-opacity-15 text-white p-0  flex my-auto text-center bg-roseRed"
      />
      <div
        className="border border-white rounded-full p-1 cursor-pointer hover:border-2 transition-all duration-100 ease-linear "
        onClick={handleAdd}
      >
        <img
          src="/assets/images/icon-increment-quantity.svg"
          alt=""
          className="w-3 h-2 "
        />
      </div>
    </div>
  );
}
