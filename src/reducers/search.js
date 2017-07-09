
import { SEARCH_ACTION_TYPES } from '../actions/search.js';


export const textInput = (state = '', {type, payload}) => {
  switch(type) {
    case SEARCH_ACTION_TYPES.inputChange:
      return payload.value;

    default:
      return state;
  }

}
