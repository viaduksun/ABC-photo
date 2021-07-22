import { ADD_VIEWED_PRODUCT, VIEWED_PRODUCTS_FROM_LOCAL_STORAGE } from './types';

export const addViewedProductAction = (viewedProduct) => ({
  type: ADD_VIEWED_PRODUCT,
  payload: { viewedProduct },
});
export const viewedProductsFromLocalStorageAction = (viewedProductsFromLocalStorage) => ({
  type: VIEWED_PRODUCTS_FROM_LOCAL_STORAGE,
  payload: JSON.parse(viewedProductsFromLocalStorage),
});
