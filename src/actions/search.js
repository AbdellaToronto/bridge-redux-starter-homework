export const ACTION_TYPES = {
  searchProduct: 'SEARCH_PRODUCTS',
};


export default function searchProducts(value) {
  //debugger;
  return {
    type: ACTION_TYPES.searchProducts,
    payload: {
      value,
    }
  }
}
