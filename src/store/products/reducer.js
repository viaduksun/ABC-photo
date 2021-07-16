/* eslint-disable no-underscore-dangle */
/* eslint-disable no-case-declarations */
import { SET_PRODUCTS } from './types';

const initialState = {
  products: [],
  isLoadingProducts: true,
};

export const productsReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_PRODUCTS:
      return {
        ...state,
        products: action.payload.data,
        isLoadingProducts: false,
      };
    default:
      return state;
  }
};
