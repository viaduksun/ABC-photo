import { ADD_PRODUCT_TO_CART, CART_FROM_LOCAL_STORAGE, DELETE_PRODUCT_FROM_CART } from './types';

export const addProductToCartAction = (product) => ({
  type: ADD_PRODUCT_TO_CART,
  payload: product,
});

export const deleteProductFromCartAction = (productId) => ({
  type: DELETE_PRODUCT_FROM_CART,
  payload: productId,
});

export const cartFromLocalStorageAction = (cartFromLocalStorage) => ({
    type: CART_FROM_LOCAL_STORAGE,
    payload: JSON.parse(cartFromLocalStorage),
  });
