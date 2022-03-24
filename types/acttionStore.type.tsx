import {IProductCart} from "./product.type";

export interface IActionStore {
  type: string;
  product: IProductCart;
}
