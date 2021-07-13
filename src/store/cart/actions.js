import {
  ADD_PRODUCT_TO_CART,
  CART_DECREMENT,
  CART_FROM_LOCAL_STORAGE,
  CART_INCREMENT,
  DELETE_PRODUCT_FROM_CART,
  SET_TOTAL_COUNT_CART,
  SET_TOTAL_SUM_CART,
} from './types';

export const addProductToCartAction = (product) => ({
  type: ADD_PRODUCT_TO_CART,
  payload: { product },
});

export const deleteProductFromCartAction = (cartProductId) => ({
  type: DELETE_PRODUCT_FROM_CART,
  payload: { cartProductId },
});

export const cartFromLocalStorageAction = (cartFromLocalStorage) => ({
  type: CART_FROM_LOCAL_STORAGE,
  payload: JSON.parse(cartFromLocalStorage),
});

export const cartIncrementAction = (cartProductId) => ({
  type: CART_INCREMENT,
  payload: { cartProductId },
});

export const cartDecrementAction = (cartProductId) => ({
  type: CART_DECREMENT,
  payload: { cartProductId },
});

export const setTotalPriceCartAction = (totalSum) => ({
  type: SET_TOTAL_SUM_CART,
  payload: { totalSum },
});

export const setTotalCountCartAction = (totalCount) => ({
  type: SET_TOTAL_COUNT_CART,
  payload: { totalCount },
});
