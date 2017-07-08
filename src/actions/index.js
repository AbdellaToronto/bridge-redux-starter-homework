export const ACTION_TYPES = {
  addProduct: 'ADD_PRODUCTS',
  removeProduct: 'REMOVE_PRODUCT',
};


export function addProduct(product) {
  //debugger;
  return {
    type: ACTION_TYPES.addProduct,
    payload: {
      product,
    }
  }
}

export function removeProduct(productID) {
  //debugger;
  return {
    type: ACTION_TYPES.removeProduct,
    payload: {
      productID,
    }
  }
}
