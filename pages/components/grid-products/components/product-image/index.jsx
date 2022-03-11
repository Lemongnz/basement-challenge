import Image from "next/image";

import product from "../../../../../public/products/cap.png";

import style from "./product-image.module.css";

export default function ProductImage() {
  return (
    <div className={style.imageWrapper}>
      <Image alt="product" className={style.image} src={product} />
    </div>
  );
}
