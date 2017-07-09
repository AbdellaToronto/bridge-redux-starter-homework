import { SEARCH_ACTION_TYPES } from './search.js';

export const ACTION_TYPES = {
  addProduct: 'ADD_PRODUCTS',
  removeProduct: 'REMOVE_PRODUCT',
  inputChange: 'INPUT_CHANGE'
};


export function addProduct(product) {

  return {
    type: ACTION_TYPES.addProduct,
    payload: {
      product,
    }
  }
}

export function removeProduct(productID) {

  return {
    type: ACTION_TYPES.removeProduct,
    payload: {
      productID,
    }
  }
}

export const inputChange = SEARCH_ACTION_TYPES.inputChange;
