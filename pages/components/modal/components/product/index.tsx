import Image from "next/image";
import {useState} from "react";

import pepe from "../../../../../public/products/hoodie.png";
import {store} from "../../../../../store";
import {OptionValues} from "../../../../types/product.type";

import style from "./modalProduct.module.css";

export default function ModalProduct() {
  const sizes: string[] = Object.values(OptionValues);
  const [products, setProductsCart] = useState([]);

  store.subscribe(() => {
    console.log(store.getState());
    setProductsCart(store.getState());
  });

  return (
    <div className={style.wrapper}>
      <div className={style.hoodie}>
        <Image alt="close" className={style.photo} src={pepe} />
      </div>
      {products}
      <div className={style.text}>
        <div className={style.topside}>
          <h3>BLACK T-SHIRT</h3>
          <p>Unisex Basic Softstyle T-Shirt</p>
        </div>
        <div className={style.bottomside}>
          <div className={style.qas}>
            <div className={style.quantity}>
              <h1>QUANTITY:</h1>
              <div className={style.quantitydiv}>
                <button> - </button>
                <span>3</span>
                <button> + </button>
              </div>
            </div>
            <div className={style.size}>
              <h1>SIZE:</h1>
              {sizes.map((size) => (
                <button key={size}>
                  <p>{size}</p>
                </button>
              ))}
            </div>
          </div>
          <div className={style.amout}>$12.50</div>
        </div>
      </div>
    </div>
  );
}
