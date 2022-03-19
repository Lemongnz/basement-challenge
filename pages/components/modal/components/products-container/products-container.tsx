import { IProduct } from "../../../../types/product.type";
import Product from "../product/product";

export default function ModalProductsContainer({
  products,
}: {
  products: IProduct[];
}) {
  return (
    <div>
      {products.map((prod: IProduct, index) => (
        <Product key={index} product={prod} />
      ))}
    </div>
  );
}
