import ProductImage from "../product-image/index";
import ProductTitle from "../product-title/index";

import style from "./product.module.css";

export default function Product({ product }) {
  return (
    <div className={style.wrapper}>
      <ProductImage product={product} />
      <ProductTitle product={product} />
    </div>
  );
}
