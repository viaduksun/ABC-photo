/* eslint-disable operator-linebreak */
/* eslint-disable max-len */
/* eslint-disable no-case-declarations */
import { SHOW_GRID } from '../products/types';
import {
  GET_FILTERED_PRODUCTS,
  SET_SEARCH_PRODUCTS,
  PAGINATE_PAGE_NUMBER,
  SET_SEARCH_PRODUCTS_PER_PAGE,
  CLEAR_SEARCH_PRODUCTS,
  SORT_SEARCH_PRODUCTS,
  SET_SEARCH_VALUE,
  CLEAR_SEARCH_VALUE,
  SET_SEARCH_VALUE_FOR_USER,
  SEARCH_PRODUCTS_FROM_LOCAL_STORAGE,
  FILTER_PRICE_SEARCH_PRODUCTS,
} from './types';

const initialState = {
  searchProducts: [],
  searchProductsForFilter: [],
  isLoadingSearchProducts: true,
  currentPage: 1,
  searchProductsPerPage: 6,
  showBy: 3,
  showGrid: true,
  searchValue: '',
  searchValueForUser: '',
  priceState: [],
};

export const searchProducts = (state = initialState, action) => {
  switch (action.type) {
    case SET_SEARCH_PRODUCTS:
      return {
        ...state,
        searchProducts: action.payload.data,
        searchProductsForFilter: action.payload.data,
        isLoadingSearchProducts: false,
        currentPage: 1,
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
        isLoadingSearchProducts: true,
        searchProducts: [],
      };
    case SHOW_GRID:
      return {
        ...state,
        showGrid: !state.showGrid,
      };
    case SET_SEARCH_VALUE:
      return {
        ...state,
        searchValue: action.payload.searchValue,
      };
    case CLEAR_SEARCH_VALUE:
      return {
        ...state,
        searchValue: '',
      };
    case SET_SEARCH_VALUE_FOR_USER:
      return {
        ...state,
        searchValueForUser: action.payload.searchValueForUser,
      };
    case SEARCH_PRODUCTS_FROM_LOCAL_STORAGE:
      return {
        ...state,
        searchProducts: action.payload,
      };
    case FILTER_PRICE_SEARCH_PRODUCTS:
      // eslint-disable-next-line no-unused-vars
      console.log(action.payload);
      const filteredPriceArr = state.searchProductsForFilter.filter(
        (item) =>
          // eslint-disable-next-line implicit-arrow-linebreak
          item.currentPrice >= action.payload[0] &&
          item.currentPrice <= action.payload[1]
      );
      console.log(filteredPriceArr);
      return {
        ...state,
        searchProducts: filteredPriceArr,
      };
    case SORT_SEARCH_PRODUCTS:
      console.log(action.payload.value);
      let newArr = [];
      if (action.payload.value === '-currentPrice') {
        newArr = state.searchProducts
          .slice(0)
          .sort(
            (a, b) => parseFloat(b.currentPrice) - parseFloat(a.currentPrice)
          );
      } else if (action.payload.value === '+currentPrice') {
        newArr = state.searchProducts
          .slice(0)
          .sort(
            (a, b) => parseFloat(a.currentPrice) - parseFloat(b.currentPrice)
          );
      } else {
        newArr = state.searchProducts.slice(0).sort(() => Math.random() - 0.5);
      }
      return {
        ...state,
        searchProducts: newArr,
      };
    default:
      return state;
  }
};
