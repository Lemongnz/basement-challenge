import {IProductParams} from "../../../../types/product.type";

import style from "./product-title.module.css";

export default function ProductTitle({product}: IProductParams) {
  return (
    <div className="flex flex-row justify-between">
      <span className={style.text}>{product.name}</span>
      <span className={style.text}>$ {product.price}</span>
    </div>
  );
}
