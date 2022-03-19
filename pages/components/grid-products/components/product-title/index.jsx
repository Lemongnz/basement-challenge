import style from "./product-title.module.css";

export default function ProductTitle({ product }) {
  return (
    <div className="flex flex-row justify-between">
      <span className={style.text}>{product.name}</span>
      <span className={style.text}>$ {product.price}</span>
    </div>
  );
}
