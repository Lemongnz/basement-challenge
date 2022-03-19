import style from "./product-title.module.css";

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

export default function ProductTitle() {
  return (
    <div className="flex flex-row justify-between">
      <span className={style.text}>{product.name}</span>
      <span className={style.text}>$ {product.price}</span>
    </div>
  );
}
