import Image from "next/image";

import product from "../../../../../public/products/hoodie.png";

import style from "./modalProduct.module.css";

import { OptionValues } from "../../../../types/product.type";

export default function ModalProduct() {
  const sizes: string[] = Object.values(OptionValues);

  return (
    <div className={style.wrapper}>
      <div className={style.hoodie}>
        <Image alt="close" className={style.photo} src={product} />
      </div>
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
<<<<<<< HEAD
              <button className={style.focus}>
                <p>S</p>
              </button>
              <button>
                <p>M</p>
              </button>
              <button>
                <p>L</p>
              </button>
              <button>
                <p>XL</p>
              </button>
=======
              {sizes.map((size) => (
                <button>
                  <p>{size}</p>
                </button>
              ))}
>>>>>>> 4d00bde4f6dacc8c7dd4d8bf0abb7093f591bd6a
            </div>
          </div>
          <div className={style.amout}>$12.50</div>
        </div>
      </div>
    </div>
  );
}
