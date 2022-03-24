import Image from "next/image";
import {useDispatch} from "react-redux";

import {
  changeSizeProduct,
  decrementProduct,
  deleteProduct,
  incrementProduct,
  quantityToZero,
} from "../../../../reducers/product";
import {
  IProduct,
  IProductCart,
  IProductCartParams,
  OptionValues,
} from "../../../../types/product.type";

import style from "./product.module.css";

export default function Product({product}: IProductCartParams) {
  const dispatch = useDispatch();

  const onIncrementProduct = () => {
    dispatch(incrementProduct(product));
  };

  const onDerementProduct = () => {
    dispatch(decrementProduct(product));
  };

  const onChangeSize = (size: OptionValues) => {
    dispatch(changeSizeProduct(product, size));
  };

  const onQuantityToZero = () => {
    dispatch(quantityToZero(product));
  };

  const totalPrice = product.price * product.quantity;

  return (
    <div className={style.wrapper}>
      <div className={style.hoodie}>
        <Image alt="close" className={style.photo} height="218" src={product.image} width="226" />
      </div>
      <div className={style.text}>
        <div className={style.topside}>
          <div>
            <h3>{product.name}</h3>
            <p>Unisex Basic Softstyle {product.id}</p>
            <p className={style.amout}>$ {product.price}</p>
          </div>
          <div className={style.x}>
            <button onClick={onQuantityToZero}>✖</button>
          </div>
        </div>
        <div className={style.bottomside}>
          <div className={style.qas}>
            <div className={style.quantity}>
              <h1>QUANTITY:</h1>
              <div className={style.quantitydiv}>
                <button onClick={onDerementProduct}> - </button>
                <span>{product.quantity}</span>
                <button onClick={onIncrementProduct}> + </button>
              </div>
            </div>
            <div className={style.size}>
              <h1>SIZE:</h1>
              {product.options[0].values.map((size) => (
                <button
                  key={size}
                  className={product.size === size ? style.selected : ""}
                  onClick={() => onChangeSize(size)}
                >
                  <p>{size}</p>
                </button>
              ))}
            </div>
          </div>
          <div className={style.amout}>$ {totalPrice}</div>
        </div>
      </div>
    </div>
  );
}
