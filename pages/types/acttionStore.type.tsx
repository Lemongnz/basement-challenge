import {IProduct} from "./product.type";

export interface IActionStore {
  type: string;
  product: IProduct;
}
