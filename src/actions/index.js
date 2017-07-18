
export const ACTION_TYPES = {
  ADD_NEW_PRODUCT: 'ADD_NEW_PRODUCT',
  REMOVE_PRODUCT: 'REMOVE_PRODUCT',
};


export function addProductToInventory(values) {
  return {
    type: ACTION_TYPES.ADD_NEW_PRODUCT,
    payload: {
      values,
    }
  }
}

export function removeProduct(productID) {
  return {
    type: ACTION_TYPES.REMOVE_PRODUCT,
    payload: {
      productID,
    }
  }
}
