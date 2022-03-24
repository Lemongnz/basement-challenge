import ProductImage from "../product-image/index";
import ProductTitle from "../product-title/index";
import {IProductParams} from "../../../../../types/product.type";

import style from "./product.module.css";

export default function Product({product}: IProductParams) {
  return (
    <div className={style.wrapper}>
      <ProductImage product={product} />
      <ProductTitle product={product} />
    </div>
  );
}
