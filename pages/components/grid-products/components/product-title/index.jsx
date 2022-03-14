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
    <div className="flex flex-row justify-between text-xl">
      <span>{product.name}</span>
      <span>$ {product.price}</span>
    </div>
  );
}
