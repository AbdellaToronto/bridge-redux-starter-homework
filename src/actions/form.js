
export const FORM_ACTION_TYPES = {
  ADD_NEW_PRODUCT: 'ADD_NEW_PRODUCT',
};


export function addProductToInventory(values) {
  return {
    type: FORM_ACTION_TYPES.ADD_NEW_PRODUCT,
    payload: {
      values,
    }
  }
}
