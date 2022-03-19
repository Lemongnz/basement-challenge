import { IActionStore } from "../types/acttionStore.type";
import { IProduct } from "../types/product.type";

export const productReducer = (state = [], action: IActionStore) => {
  switch (action.type) {
    case "@cart/add":
      return [...state, action.product];
    case "@cart/delete":
      return state.filter(
        (product: IProduct) => product.id !== action.product.id
      );
    case "@cart/increment":
      return state.map((product: IProduct) =>
        product.id === action.product.id
          ? { ...product, total: (product.total || 0) + 1 }
          : product
      );
    case "@cart/decrement":
      return state.map((product: IProduct) =>
        product.id === action.product.id
          ? { ...product, total: (product.total || 0) - 1 }
          : product
      );
    default:
      return state;
  }
};

export const addProduct = (product: IProduct): IActionStore => {
  return {
    type: "@cart/add",
    product: { ...product, total: 1 },
  };
};

export const deleteProduct = (product: IProduct) => {
  return {
    type: "@cart/delete",
    product,
  };
};

export const incrementProduct = (product: IProduct): IActionStore => {
  return {
    type: "@cart/increment",
    product: { ...product, total: (product.total || 0) + 1 },
  };
};

export const decrementProduct = (product: IProduct): IActionStore => {
  if (product.total == 1) {
    return deleteProduct(product);
  }

  return {
    type: "@cart/decrement",
    product: { ...product, total: (product.total || 1) - 1 },
  };
};
