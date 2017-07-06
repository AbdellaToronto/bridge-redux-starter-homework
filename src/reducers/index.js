import { combineReducers } from 'redux';

import { generateProducts } from '../utils/data';
import { ACTION_TYPES } from '../actions';

const INITIAL_STATE = {
  products: generateProducts(10),
};

export const products = (state = INITIAL_STATE.products, { type, payload }) => {
  console.log(payload)
  switch (type) {
    case ACTION_TYPES.addProduct:
      return [...state, payload.product];
    case ACTION_TYPES.removeProduct:
      return [...state.filter( prod => prod.name !== payload.product.name)]
    case ACTION_TYPES.updateProductsList:
      return [...state.filter( prod => prod.name.includes(payload.searchValue.searchValue))]
  }

  return state;
};

export default combineReducers({
  products,
});
