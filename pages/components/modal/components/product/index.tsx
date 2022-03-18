import Image from "next/image";

import product from "../../../../../public/products/hoodie.png";

import style from "./modalProduct.module.css";

export default function ModalProduct() {
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
              <button>
                <p>S</p>
              </button>
              <button className={style.focus}>
                <p>M</p>
              </button>
              <button>
                <p>L</p>
              </button>
              <button>
                <p>XL</p>
              </button>
            </div>
          </div>
          <div className={style.amout}>$12.50</div>
        </div>
      </div>
    </div>
  );
}
