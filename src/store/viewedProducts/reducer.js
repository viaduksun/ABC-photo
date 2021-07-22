/* eslint-disable no-underscore-dangle */
/* eslint-disable no-case-declarations */
import { ADD_VIEWED_PRODUCT, VIEWED_PRODUCTS_FROM_LOCAL_STORAGE } from './types';

const initialState = {
  viewedProducts: [],
};

export const viewedProducts = (state = initialState, action) => {
  switch (action.type) {
    case ADD_VIEWED_PRODUCT:
      return {
        ...state,
        viewedProducts: [...state.viewedProducts, action.payload.viewedProduct],
      };
    case VIEWED_PRODUCTS_FROM_LOCAL_STORAGE:
      return {
        ...state,
        viewedProducts: action.payload
      };
    default:
      return state;
  }
};
