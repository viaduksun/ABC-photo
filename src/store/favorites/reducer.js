/* eslint-disable implicit-arrow-linebreak */
/* eslint-disable no-underscore-dangle */
/* eslint-disable no-fallthrough */
/* eslint-disable no-shadow */
/* eslint-disable no-case-declarations */
import {
  ADD_PRODUCT_TO_FAVORITE,
  DELETE_PRODUCT_FROM_FAVORITE,
  FAVORITES_FROM_LOCAL_STORAGE,
  FAVORITE_PRODUCT_CHANGE_ORDER,
  SHOW_GRID,
} from './types';

const initialState = {
  favorites: [],
  showGrid: true,
};

export const favorites = (state = initialState, action) => {
  switch (action.type) {
    case ADD_PRODUCT_TO_FAVORITE:
      const { favoriteProduct } = action.payload;
      favoriteProduct.order = Date.now();
      return {
        ...state,
        favorites: [...state.favorites, favoriteProduct],
      };
    case DELETE_PRODUCT_FROM_FAVORITE:
      const newFavorites = state.favorites.filter(
        (item) => item._id !== action.payload.favoriteProduct._id
      );
      return {
        ...state,
        favorites: newFavorites,
      };
    case FAVORITES_FROM_LOCAL_STORAGE: {
      console.log(action.payload);
      return {
        ...state,
        favorites: action.payload,
      };
    }
    case FAVORITE_PRODUCT_CHANGE_ORDER:
      const orderedFavorites = state.favorites.map((favoriteProduct) => {
        if (favoriteProduct._id === action.payload.product._id) {
          return {
            ...favoriteProduct,
            order: action.payload.currentProduct.order,
          };
        }
        if (favoriteProduct._id === action.payload.currentProduct._id) {
          return { ...favoriteProduct, order: action.payload.product.order };
        }
        return favoriteProduct;
      });
      return {
        ...state,
        favorites: orderedFavorites,
      };
    case SHOW_GRID:
      return {
        ...state,
        showGrid: !state.showGrid,
      };
    default:
      return state;
  }
};
