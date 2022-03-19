import Image from "next/image";
import {useDispatch} from "react-redux";

import lola from "../../../../../public/products/cap.png";
import {addProduct} from "../../../../reducers/product";

import style from "./product-image.module.css";

export default function ProductImage() {
  const product = {
    id: "black-tshirt",
    image: "/products/shirt.png",
    price: 7.95,
    name: "Black t-shirt",
    options: [
      {
        label: "size",
        values: ["S", "M", "L", "XL"],
      },
    ],
  };

  const dispatch = useDispatch();

  const addProductToCart = () => {
    dispatch(addProduct(product));
  };

  addProductToCart();

  return (
    <button className={style.imageWrapper}>
      <Image alt="product" className={style.image} src={lola} />
    </button>
  );
}
