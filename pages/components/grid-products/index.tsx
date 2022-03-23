import {IProductsParams} from "../../types/product.type";

import Product from "./components/product/index";
import style from "./grid-products.module.css";

export default function GridProducts({products}: IProductsParams) {
  return (
    <div id={style.gridproducts}>
      <div className={style.wrapper}>
        {products.map((prod, index) => (
          <Product key={index} product={prod} />
        ))}
      </div>
    </div>
  );
}
