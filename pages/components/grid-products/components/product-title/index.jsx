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
    <div>
      <span>{product.name}</span>
      <span>{product.price}</span>
    </div>
  );
}
