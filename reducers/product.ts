export const productReducer = (state = [], action: any) => {
  switch (action.type) {
    case "@cart/add":
      state.push(action.product);
      break;
    case "@cart/delete":
      state = action.delete;
      break;
    default:
      break;
  }

  return state;
};

export const setAddProduct = (add: any) => {
  return {
    type: "@cart/add",
    add,
  };
};

export const setDeleteProduct = (deleteTR: any) => {
  return {
    type: "@cart/delete",
    deleteTR,
  };
};
