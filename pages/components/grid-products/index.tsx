import Product from "./components/product/index";
import style from "./grid-products.module.css";

export default function GridProucts() {
  return (
    <div id={style.gridproducts}>
      <div className={style.wrapper}>
        <Product />
        <Product />
        <Product />
      </div>
    </div>
  );
}
