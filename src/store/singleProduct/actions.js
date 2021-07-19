import { SET_SINGLE_PRODUCT, SINGLE_PRODUCT_FROM_LOCAL_STORAGE } from './types';

export const setSingleProductAction = (singleProduct) => ({
  type: SET_SINGLE_PRODUCT,
  payload: { singleProduct },
});
export const singleProductFromLocalStorageAction = (
  singleProductFromLocalStorage
) => ({
  type: SINGLE_PRODUCT_FROM_LOCAL_STORAGE,
  payload: singleProductFromLocalStorage,
});
