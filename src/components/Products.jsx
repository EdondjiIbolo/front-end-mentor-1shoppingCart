import { productos as productJson } from "../assets/resources/data.json";
import { Product } from "./Product";
export function Products() {
  return (
    <ul className="grid grid-cols-[repeat(auto-fit,minmax(230px,1fr))] gap-3">
      {productJson.map((product, index) => (
        <li key={index}>
          <Product product={product} />
        </li>
      ))}
    </ul>
  );
}
