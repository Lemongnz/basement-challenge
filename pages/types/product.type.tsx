export enum OptionValues {
  S = "S",
  M = "M",
  L = "L",
  XL = "XL",
}

export interface IProduct {
  id: string;
  image: string;
  price: number;
  name: string;
  options: IProductOption[];
}

interface IProductOption {
  label: string;
  values: OptionValues[];
}

export interface IProductCart extends IProduct {
  quantity: number;
  size: OptionValues;
}

export interface IProductParams {
  product: IProduct;
}

export interface IProductCartParams {
  product: IProductCart;
}

export interface IProductsCartParams {
  products: IProductCart[];
}
export interface IProductsParams {
  products: IProduct[];
}
