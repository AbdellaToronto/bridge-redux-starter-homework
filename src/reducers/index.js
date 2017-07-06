import { combineReducers } from 'redux';

import { generateProducts , generateBlankProduct } from '../utils/data';
import { ACTION_TYPES } from '../actions';

const INITIAL_STATE = {
  products: generateProducts(10),
  productsForm: generateBlankProduct(),
  searchInput: '',
};

export const products = (state = INITIAL_STATE.products, { type, payload }) => {
  switch (type) {
    case ACTION_TYPES.addProduct:
      return [...state, payload.product];
    case ACTION_TYPES.removeProduct:
      return [...state].filter(product => product.id !== payload.id);
  }
  return state;
};

export const productsForm = (state = INITIAL_STATE.productsForm, { type, payload }) => {
  switch (type) {
      case ACTION_TYPES.typeName:
        return {...state, name: payload.name};
      case ACTION_TYPES.typeDepartment:
        return {...state, department: payload.department};
      case ACTION_TYPES.typePrice:
        return {...state, price: payload.price};
      case ACTION_TYPES.addProduct:
        return INITIAL_STATE.productsForm;
      default:
        return state;
  }
};

export const searchInput = (state = INITIAL_STATE.searchInput, { type, payload }) => {
  switch (type) {
    case ACTION_TYPES.typeSearch:
      console.log(payload.string);
      return payload.string;
    default:
      return state;
  }
};

export default combineReducers({
  products,
  productsForm,
  searchInput,
});
