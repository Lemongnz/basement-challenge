import Image from "next/image";
import {useDispatch} from "react-redux";

import addcart from "../../../../../public/addcart.png";
import {addProduct} from "../../../../reducers/product";
import {IProductParams} from "../../../../types/product.type";

import style from "./product-image.module.css";

export default function ProductImage({product}: IProductParams) {
  const dispatch = useDispatch();

  const addProductToCart = () => {
    dispatch(addProduct(product));
  };

  return (
    <button className={style.imageWrapper} onClick={addProductToCart}>
      <Image
        alt="product"
        className={style.image}
        height="521.54"
        src={product.image}
        width="424"
      />
      <div className={style.imghover}>
        <Image alt="add to cart" src={addcart} />
      </div>
    </button>
  );
}
