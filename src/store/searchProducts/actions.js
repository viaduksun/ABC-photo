import getSearchProducts from '../../api/getSearchProducts';
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

export const getSearchProductsAction = (value) => (dispatch) => {
  getSearchProducts(value).then((data) => {
    dispatch({
      type: SET_SEARCH_PRODUCTS,
      payload: data,
    });
  });
};

export const getFilteredSearchProductsAction = (brand) => ({
  type: GET_FILTERED_PRODUCTS,
  payload: { brand },
});

export const paginateAction = (pageNumber) => ({
  type: PAGINATE_PAGE_NUMBER,
  payload: { pageNumber },
});
export const setSearchProductsPerPageAction = (showBy) => ({
  type: SET_SEARCH_PRODUCTS_PER_PAGE,
  payload: { showBy },
});

export const clearSearchProductsAction = () => ({
  type: CLEAR_SEARCH_PRODUCTS,
});
export const sortSearchProductsAction = (value) => ({
  type: SORT_SEARCH_PRODUCTS,
  payload: { value },
});

export const showGridSearchProductsAction = () => ({
  type: SHOW_GRID,
});
export const setSearchValueAction = (searchValue) => ({
  type: SET_SEARCH_VALUE,
  payload: { searchValue },
});
export const clearSearchValueAction = () => ({
  type: CLEAR_SEARCH_VALUE,
});
export const setSearchValueForUSerAction = (searchValueForUser) => ({
  type: SET_SEARCH_VALUE_FOR_USER,
  payload: { searchValueForUser },
});

export const searchProductsFromLocalStorageAction = (
  searchProductsFromLocalStorage
) => ({
  type: SEARCH_PRODUCTS_FROM_LOCAL_STORAGE,
  payload: JSON.parse(searchProductsFromLocalStorage),
});

export const filterPriceSearchProductsAction = (priceState) => ({
  type: FILTER_PRICE_SEARCH_PRODUCTS,
  payload: priceState,
});
