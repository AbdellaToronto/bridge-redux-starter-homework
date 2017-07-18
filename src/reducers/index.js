import { generateProducts } from '../utils/data';
import { combineReducers } from 'redux';
import { textInput } from './search';
import { reducer as formReducer } from 'redux-form';

import { ACTION_TYPES } from '../actions';



const INITIAL_STATE = {
  products: generateProducts(10),
};


export const products = (state = INITIAL_STATE.products, action) => {
  switch (action.type) {
    case ACTION_TYPES.ADD_NEW_PRODUCT:
      return [...state, action.payload.values];
    case ACTION_TYPES.REMOVE_PRODUCT:
      return state.filter((product) => product.id !== action.payload.productID);
    default:
      return state;
  }
};



export default combineReducers({
  products,
  textInput,
  form: formReducer
});
