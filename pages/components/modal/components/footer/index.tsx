import Image from "next/image";

import check from "../../../../../public/checkout.png";
import {IProductsCartParams} from "../../../../types/product.type";

import style from "./modalFooter.module.css";
export default function ModalFooter({products}: IProductsCartParams) {
  const getTotal = () => {
    let total = 0;

    products?.forEach((product) => {
      total += product.price * (product.quantity || 1);
    });

    return total.toFixed(2);
  };

  return (
    <div className={style.wrapper}>
      <div className={style.left}>
        <p>TOTAL: ${getTotal()}</p>
      </div>
      <button className={style.right}>
        <Image alt="close" src={check} />
      </button>
    </div>
  );
}
