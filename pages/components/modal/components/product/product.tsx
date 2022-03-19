import Image from "next/image";
import { useDispatch } from "react-redux";
import {
  decrementProduct,
  incrementProduct,
} from "../../../../reducers/product";
import { IProduct } from "../../../../types/product.type";

import style from "./product.module.css";

export default function Product({ product }: { product: IProduct }) {
  const dispatch = useDispatch();

  const onIncrementProduct = () => {
    dispatch(incrementProduct(product));
  };

  const onDerementProduct = () => {
    dispatch(decrementProduct(product));
  };

  return (
    <div className={style.wrapper}>
      <div className={style.hoodie}>
        <Image
          alt="close"
          className={style.photo}
          src={product.image}
          width="226"
          height="218"
        />
      </div>

      <div className={style.text}>
        <div className={style.topside}>
          <h3>{product.name}</h3>
          <p>Unisex Basic Softstyle {product.id}</p>
        </div>
        <div className={style.bottomside}>
          <div className={style.qas}>
            <div className={style.quantity}>
              <h1>QUANTITY:</h1>
              <div className={style.quantitydiv}>
                <button onClick={() => onDerementProduct()}> - </button>
                <span>{product.total}</span>
                <button onClick={() => onIncrementProduct()}> + </button>
              </div>
            </div>
            <div className={style.size}>
              <h1>SIZE:</h1>
              {product.options[0].values.map((size) => (
                <button key={size}>
                  <p>{size}</p>
                </button>
              ))}
            </div>
          </div>
          <div className={style.amout}>${product.price}</div>
        </div>
      </div>
    </div>
  );
}
