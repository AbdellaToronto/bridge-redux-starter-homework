import { ACTION_TYPES } from '../constants/ActionTypes';

export function addProduct(product) {
  return {
    type: ACTION_TYPES.ADD_PRODUCT,
    payload: {
      product,
    }
  }
}

export function removeProduct(id) {
  return {
    type: ACTION_TYPES.REMOVE_PRODUCT,
    payload: {
      id,
    }
  }
}

export function typeName(name) {
  return {
    type: ACTION_TYPES.TYPE_NAME,
    payload: {
      name,
    }
  }
}

export function typeDepartment(department) {
  return {
    type: ACTION_TYPES.TYPE_DEPARTMENT,
    payload: {
      department,
    }
  }
}

export function typePrice(price) {
  return {
    type: ACTION_TYPES.TYPE_PRICE,
    payload: {
      price,
    }
  }
}

export function typeSearch(string) {
  return {
    type: ACTION_TYPES.TYPE_SEARCH,
    payload: {
      string,
    }
  }
}