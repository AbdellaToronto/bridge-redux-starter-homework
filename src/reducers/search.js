
import { SEARCH_ACTION_TYPES } from '../actions/search.js';


export const textInput = (state = '', action) => {
  switch(action.type) {
    case SEARCH_ACTION_TYPES.INPUT_CHANGE:
      return action.payload.value;
    default:
      return state;
  }

}
