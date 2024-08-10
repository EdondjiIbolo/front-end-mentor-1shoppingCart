import "./App.css";
import Cart from "./components/Cart";
import OrderedModal from "./components/OrderedModal";
import { Products } from "./components/Products";
import useCart from "./Hooks/useCart";

function App() {
  const { setOrdered, ordered } = useCart();
  return (
    <>
      <h1 className="pl-4 font-medium">Desserts</h1>
      <main className="grid grid-cols-1 sm:grid-cols-[auto,300px] ">
        <section className="">
          <Products />
        </section>
        <section className="w-[calc(100%-20px)] sm:w-[300px] pt-8 pr-3  mx-auto">
          <Cart />
        </section>
      </main>
      {ordered && <OrderedModal />}
    </>
  );
}

export default App;
