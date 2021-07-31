import getSearchProducts from '../../api/getSearchProducts';
import {
  GET_FILTERED_PRODUCTS,
  SET_SEARCH_PRODUCTS,
  PAGINATE_PAGE_NUMBER,
  SET_SEARCH_PRODUCTS_PER_PAGE,
  CLEAR_SEARCH_PRODUCTS,
  SORT_SEARCH_PRODUCTS,
} from './types';

export const getSearchProductsAction = (value) => (dispatch) => {
  getSearchProducts(value).then((data) => {
    console.log('allProducts', data);
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
  payload: {value}
});
