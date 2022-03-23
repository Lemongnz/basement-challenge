import {IProductsCartParams} from "../../../../types/product.type";
import Product from "../product/product";

export default function ModalProductsContainer({products}: IProductsCartParams) {
  return (
    <div>
      {products.map((prod, index) => (
        <Product key={index} product={prod} />
      ))}
    </div>
  );
}
