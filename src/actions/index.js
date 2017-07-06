export const ACTION_TYPES = {
  addProduct: 'ADD_PRODUCT',
  removeProduct: 'REMOVE_PRODUCT',
  typeName: 'TYPE_NAME',
  typeDepartment: 'TYPE_DEPARTMENT',
  typePrice: 'TYPE_PRICE',
  typeSearch: 'TYPE_SEARCH',
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
    payload: {
      id,
    }
  }
}

export function typeName(name) {
  return {
    type: ACTION_TYPES.typeName,
    payload: {
      name,
    }
  }
}

export function typeDepartment(department) {
  return {
    type: ACTION_TYPES.typeDepartment,
    payload: {
      department,
    }
  }
}

export function typePrice(price) {
  return {
    type: ACTION_TYPES.typePrice,
    payload: {
      price,
    }
  }
}

export function typeSearch(string) {
  return {
    type: ACTION_TYPES.typeSearch,
    payload: {
      string,
    }
  }
}