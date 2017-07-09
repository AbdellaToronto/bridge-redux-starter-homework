export const SEARCH_ACTION_TYPES = {
  inputChange: 'INPUT_CHANGE',
};


export function inputChange(value) {

  return {
    type: SEARCH_ACTION_TYPES.inputChange,
    payload: {
      value,
    }
  }
}
