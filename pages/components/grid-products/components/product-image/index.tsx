import Image from "next/image";
import { useDispatch } from "react-redux";

import { addProduct } from "../../../../reducers/product";

import style from "./product-image.module.css";

import { IProduct } from "../../../../types/product.type";

export default function ProductImage({ product }: { product: IProduct }) {
  const dispatch = useDispatch();

  const addProductToCart = () => {
    dispatch(addProduct(product));
  };

  return (
    <button className={style.imageWrapper} onClick={addProductToCart}>
      <Image
        alt="product"
        className={style.image}
        src={product.image}
        width="424"
        height="521.54"
      />
    </button>
  );
}
