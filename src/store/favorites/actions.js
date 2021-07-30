import {
  ADD_PRODUCT_TO_FAVORITE,
  DELETE_PRODUCT_FROM_FAVORITE,
  FAVORITES_FROM_LOCAL_STORAGE,
  FAVORITE_PRODUCT_CHANGE_ORDER,
  SHOW_GRID,
} from './types';

export const addProdductToFavoritesAction = (favoriteProduct) => ({
  type: ADD_PRODUCT_TO_FAVORITE,
  payload: { favoriteProduct },
});

export const deleteProdductFromFavoritesAction = (favoriteProduct) => ({
  type: DELETE_PRODUCT_FROM_FAVORITE,
  payload: { favoriteProduct },
});

export const favoritesFromLocalStorageAction = (favoritesFromLocalStorage) => ({
  type: FAVORITES_FROM_LOCAL_STORAGE,
  payload: JSON.parse(favoritesFromLocalStorage),
});

export const favoriteChangeOrderAction = (product, currentProduct) => ({
  type: FAVORITE_PRODUCT_CHANGE_ORDER,
  payload: { product, currentProduct },
});
export const showGridAction = () => ({
  type: SHOW_GRID,
});
