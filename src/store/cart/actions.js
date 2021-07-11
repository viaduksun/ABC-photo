import { ADD_PRODUCT_TO_CART } from './types';

export const addProductToCartAction = (product) => ({
    type: ADD_PRODUCT_TO_CART,
    payload: product,
  });