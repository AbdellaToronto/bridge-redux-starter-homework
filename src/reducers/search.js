//add to index reducer and put in combineReducers

import { ACTION_TYPES } from '../actions/search.js';

export const search = (state = '', {type, payload}) => {
  switch(type) {
    case ACTION_TYPES.searchProducts:
      return state.filter(product => (product.name).includes(payload.value));
    default:
      return state;
  }


}
