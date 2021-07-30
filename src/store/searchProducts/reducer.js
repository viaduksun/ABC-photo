/* eslint-disable max-len */
/* eslint-disable no-case-declarations */
import {
  GET_FILTERED_PRODUCTS,
  SET_SEARCH_PRODUCTS,
  PAGINATE_PAGE_NUMBER,
  SET_SEARCH_PRODUCTS_PER_PAGE,
  CLEAR_SEARCH_PRODUCTS,
  SORT_SEARCH_PRODUCTS,
} from './types';

const initialState = {
  searchProducts: [],
  isLoadingSearchProducts: true,
  currentPage: 1,
  searchProductsPerPage: 6,
  showBy: 3,
};

export const searchProducts = (state = initialState, action) => {
  switch (action.type) {
    case SET_SEARCH_PRODUCTS:
      return {
        ...state,
        searchProducts: action.payload.data,
        searchProducts2: action.payload.data,
        isLoadingSearchProducts: false,
        searchProductsPerPage: 6,
      };
    case GET_FILTERED_PRODUCTS:
      console.log(action.payload.brand);
      let newArr1 = '';

      newArr1 = state.searchProducts.filter(
        (item) => item.brand === action.payload.brand
      );
      return {
        ...state,
        searchProducts: newArr1,
      };
    case PAGINATE_PAGE_NUMBER:
      return {
        ...state,
        currentPage: action.payload.pageNumber,
      };
    case SET_SEARCH_PRODUCTS_PER_PAGE:
      return {
        ...state,
        searchProductsPerPage: action.payload.showBy,
      };
    case CLEAR_SEARCH_PRODUCTS:
      return {
        ...state,
        searchProducts: [],
      };
    case SORT_SEARCH_PRODUCTS:
      const newArr = (state.searchProducts.sort((a, b) => a.currentPrice + b.currentPrice)).slice(0, -1);
      return {
        ...state,
        searchProducts: newArr,
      };
    default:
      return state;
  }
};
