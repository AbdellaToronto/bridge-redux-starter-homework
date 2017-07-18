
export const SEARCH_ACTION_TYPES = {
  INPUT_CHANGE: 'INPUT_CHANGE',
};


export function inputChange(value) {
  return {
    type: SEARCH_ACTION_TYPES.INPUT_CHANGE,
    payload: {
      value,
    }
  }
}
