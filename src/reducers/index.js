import { generateProducts } from '../utils/data';
import { combineReducers } from 'redux';

import { ACTION_TYPES } from '../actions';
// bring in search reducer
import { textInput } from './search';

const INITIAL_STATE = {
  products: generateProducts(10),
};


export const products = (state = INITIAL_STATE.products, { type, payload }) => {
  switch (type) {
    case ACTION_TYPES.addProduct:
      return [...state, payload.product];
    case ACTION_TYPES.removeProduct:
      return state.filter((product) => product.id !== payload.productID);
    default:
      return state;
  }
};

// how do I access the current state.products? through getState?
export const visibleProducts = (state = INITIAL_STATE.products, {type, payload}) => {
  //const { products } = getState();
  switch(type) {
    case ACTION_TYPES.inputChange:
      console.log("payload.value is " + payload.value);

      //check if payload has length... i.e. if user has typed a character
      if ( (payload.value) && (payload.value.length) ) {
        //then take a copy
        const productsCopy = [...products];
        console.log("productsCopy is " + productsCopy);

        //then filter products in that copy
        return productsCopy.filter(product => {
          (product.name).includes(payload.value)
        });
      }
    default:
      //do I want to return state or copy of state.products?
      return state;
  }

}

export default combineReducers({
  products,
  visibleProducts,
  textInput
});
