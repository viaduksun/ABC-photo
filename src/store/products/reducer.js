/* eslint-disable no-underscore-dangle */
/* eslint-disable no-case-declarations */
import {
  SET_CURRENT_CAREGORY, SET_CURRENT_PAGE, SET_CURRENT_PRODUCTS_ARR, SET_PRODUCTS
} from './types';

const initialState = {
  products: [],
  currentCategory: null,
  allProductsCurrentCategory: [],
  currentPage: 1,
  isLoadingProducts: true,

};

export const productsReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_PRODUCTS:
      return {
        ...state,
        products: action.payload.data.products,
        isLoadingProducts: false,
      };
    case SET_CURRENT_CAREGORY:
      return {
        ...state,
        currentCategory: action.payload,
        isLoadingProducts: false,
      };
    case SET_CURRENT_PRODUCTS_ARR:
      console.log('SET_CURRENT_PRODUCTS_ARR', action.payload);
      return {
        ...state,
        allProductsCurrentCategory: action.payload,
      };
    case SET_CURRENT_PAGE:
      return {
        ...state,
        currentPage: action.payload,
      };
    default:
      return state;
  }
};
