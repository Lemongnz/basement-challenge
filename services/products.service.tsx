import {IProduct} from "../types/product.type";

import HttpService from "./httpBase.service";

class ProductsService extends HttpService {
  getAll(): Promise<IProduct[]> {
    return this.http.get<Array<IProduct>>("/products").then((response) => response.data);
  }
}

export default new ProductsService();
