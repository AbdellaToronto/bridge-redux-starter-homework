export const ACTION_TYPES = {
    addProduct: 'ADD_PRODUCTS',
    removeProduct: 'REMOVE_PRODUCTS',
    inputChange: 'INPUT_CHANGE',
    searchProducts: 'SEARCH_PRODUCTS',
};

export function addProduct(product) {
  return {
    type: ACTION_TYPES.addProduct,
    payload: {
      product,
    }
  }
}

export function removeProduct(id) {
    return {
        type: ACTION_TYPES.removeProduct,
        payload: id,
    }
}

export function inputChange(value, field) {
    return {
        type: ACTION_TYPES.inputChange,
        payload: value,
        field,
    }
}

export function searchProducts(value) {
    return {
        type: ACTION_TYPES.searchProducts,
        payload: value,
    }
}
