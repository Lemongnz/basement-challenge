import {IActionStore} from "../types/acttionStore.type";
import {IProduct, IProductCart} from "../types/product.type";

export const productReducer = (state = [], action: IActionStore) => {
  switch (action.type) {
    case "@cart/add":
      return [...state, action.product];
    case "@cart/delete":
      return state.filter((product: IProductCart) => product.id !== action.product.id);
    case "@cart/increment":
      return state.map((product: IProductCart) =>
        product.id === action.product.id
          ? {...product, quantity: (product.quantity || 0) + 1}
          : product,
      );
    case "@cart/decrement":
      return state.map((product: IProductCart) =>
        product.id === action.product.id
          ? {...product, quantity: (product.quantity || 0) - 1}
          : product,
      );
    default:
      return state;
  }
};

export const addProduct = (product: IProduct): IActionStore => {
  return {
    type: "@cart/add",
    product: {...product, quantity: 1, size: product.options[0].values[0]},
  };
};

export const deleteProduct = (product: IProductCart) => {
  return {
    type: "@cart/delete",
    product,
  };
};

export const incrementProduct = (product: IProductCart): IActionStore => {
  return {
    type: "@cart/increment",
    product: {...product, quantity: (product.quantity || 0) + 1},
  };
};

export const decrementProduct = (product: IProductCart): IActionStore => {
  if (product.quantity == 1) {
    return deleteProduct(product);
  }

  return {
    type: "@cart/decrement",
    product: {...product, quantity: (product.quantity || 1) - 1},
  };
};
