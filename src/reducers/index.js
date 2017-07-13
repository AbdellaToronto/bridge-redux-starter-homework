import { combineReducers } from 'redux';

import { generateProducts } from '../utils/data';
import { ACTION_TYPES } from '../actions';

const INITIAL_STATE = {
  products: generateProducts(10),
    textInput: {
        name: '',
        department: '',
        stock: '0',
        price: '$0.00',
    },
    searchInput: '',
};

export const products = (state = INITIAL_STATE.products, { type, payload }) => {
  switch (type) {
      case ACTION_TYPES.addProduct:
          return [...state, payload.product];
      case ACTION_TYPES.removeProduct:
          return [...state].filter(element => {
              return element.id !== payload.id
          });
      default:
          return state;
  }
};

const textInput = (state = INITIAL_STATE.textInput, { type, payload, field } ) => {
    if(type === ACTION_TYPES.inputChange) {
        return {...state, [field]: payload}; // Q: why is this payload and not payload.value?
    }
    return state;
};

const searchInput = (state = INITIAL_STATE.searchInput, { type, payload }) => {
    if(type === ACTION_TYPES.searchProducts) {
        return payload;
    }
    return state;
};

export default combineReducers({
    products,
    textInput,
    searchInput,
});
