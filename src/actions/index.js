export const ACTION_TYPES = {
  addProduct: 'ADD_PRODUCTS',
  removeProduct : 'REMOVE_PRODUCTS',
  updateProductsList : 'UPDATE_PRODUCTS_LIST'
};

export function addProduct(product) {
  return {
    type: ACTION_TYPES.addProduct,
    payload: {
      product,
    }
  }
}

export function removeProduct(product) {
  return {
    type: ACTION_TYPES.removeProduct,
    payload: {
      product,
    }
  }
}

export function updateProductsList(searchValue) {
  return {
    type: ACTION_TYPES.updateProductsList,
    payload: {
      searchValue,
    }
  }
}
