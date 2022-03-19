import {IActionStore} from "../types/acttionStore.type";
import {IProduct} from "../types/product.type";

export const productReducer = (state = [], action: IActionStore) => {
  switch (action.type) {
    case "@cart/add":
      return [...state, action.product];
    case "@cart/delete":
      return state.filter((product: IProduct) => product.id !== product.id);
    default:
      break;
  }

  return state;
};

export const addProduct = (product: IProduct): IActionStore => {
  return {
    type: "@cart/add",
    product,
  };
};

export const deleteProduct = (deleteTR: any) => {
  return {
    type: "@cart/delete",
    deleteTR,
  };
};
