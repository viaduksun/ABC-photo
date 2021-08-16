/* eslint-disable max-len */
/* eslint-disable no-underscore-dangle */
/* eslint-disable no-case-declarations */
import {
  CLEAR_PRODUCTS,
  FILTERED_PRODUCTS_FOR_PAGINATION,
  GET_CATEGORY_FROM_LOCAL_STORAGE,
  GET_PRODUCTS_FROM_LOCAL_STORAGE,
  SET_CATEGORY_FOR_BREADCRUMBS,
  SET_CURRENT_BRANDQUERY,
  SET_CURRENT_CATEGORY,
  SET_CURRENT_PAGE,
  SET_CURRENT_PRODUCTS_ARR,
  SET_CURRENT_QUERY,
  SET_PER_PAGE,
  SET_PRODUCTS,
  SET_SORT_BY,
  SHOW_GRID,
} from './types';

const initialState = {
  products: [],
  allProductsForPagination: [],
  currentCategory: null,
  currentCategoryForBreadcrumbs: null,
  currentPage: 1,
  currentPerPage: 3,
  isLoadingProducts: true,
  currentQuery: '',
  sortBy: '',
  showGrid: true,
  currentQueryForPagination: ''
};

export const productsReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_PRODUCTS:
      // ==== REFACTORING ====
      console.log('SET_PRODUCTS: ', action.payload);
      return {
        ...state,
        products: action.payload,
        isLoadingProducts: false,
      };
    case SET_CURRENT_CATEGORY:
      return {
        ...state,
        currentCategory: action.payload,
        currentCategoryForBreadcrumbs: action.payload,
        isLoadingProducts: false,
      };
    case SET_CURRENT_QUERY:
      return {
        ...state,
        currentQuery: action.payload,
        isLoadingProducts: false,
      };
    case SET_CURRENT_PRODUCTS_ARR:
      // === for pagination calculation ======
      // console.log('SET_CURRENT_PRODUCTS_ARR', action.payload);
      return {
        ...state,
        allProductsForPagination: action.payload,
        // isLoadingProducts: false,
      };
    case SET_CURRENT_PAGE:
      console.log(action.payload);
      return {
        ...state,
        currentPage: action.payload,
      };
    case SET_PER_PAGE:
      return {
        ...state,
        currentPage: 1,
        currentPerPage: action.payload,
      };
    case SET_SORT_BY:
      return {
        ...state,
        products: [],
        sortBy: action.payload,
      };
    case SHOW_GRID:
      return {
        ...state,
        showGrid: !state.showGrid,
      };
    case CLEAR_PRODUCTS:
      return {
        ...state,
        products: [],
      };
    case GET_PRODUCTS_FROM_LOCAL_STORAGE:
      return {
        ...state,
        products: action.payload,
      };
    case SET_CATEGORY_FOR_BREADCRUMBS:
      return {
        ...state,
        currentCategory: action.payload.product.category,
        currentCategoryForBreadcrumbs: action.payload.product.category,
      };
    case GET_CATEGORY_FROM_LOCAL_STORAGE:
      return {
        ...state,
        currentCategoryForBreadcrumbs: action.payload,
      };
    case FILTERED_PRODUCTS_FOR_PAGINATION:
      console.log('Action payloadddddddddddddd', action.payload);
      return {
        ...state,
        allProductsForPagination: action.payload,
      };
    case SET_CURRENT_BRANDQUERY:
      console.log('SET_CURRENT_BRANDQUERY', action.payload);
      return {
        ...state,
        currentQueryForPagination: action.payload,
      };
    default:
      return state;
  }
};
