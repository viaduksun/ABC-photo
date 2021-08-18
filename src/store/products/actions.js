/* eslint-disable max-len */
/* eslint-disable no-unused-vars */
import getAllFilteredProducts from '../../api/getAllFilteredProducts';
import getFilteredProducts from '../../api/getFilteredProducts';
import filteredProductsForPagination from '../../api/getFilteredProductsForPagination';
import getSearchProducts from '../../api/getSearchProducts';
// import getProducts from '../../api/getProducts';
import {
  CLEAR_PRODUCTS,
  FILTERED_PRODUCTS_FOR_PAGINATION,
  GET_CATEGORY_FROM_LOCAL_STORAGE,
  GET_PER_PAGE_FOR_FILTER,
  GET_PRODUCTS_FROM_LOCAL_STORAGE,
  SET_CATEGORY_FOR_BREADCRUMBS,
  SET_CURRENT_BRANDQUERY,
  SET_CURRENT_CATEGORY,
  SET_CURRENT_FILTER_QUERY,
  SET_CURRENT_PAGE,
  SET_CURRENT_PRODUCTS_ARR,
  SET_CURRENT_QUERY,
  SET_FILTER_QUERY,
  SET_FLAG_IN_CART,
  SET_PER_PAGE,
  SET_PRODUCTS,
  SET_SORT_BY,
  SHOW_GRID,
} from './types';

// eslint-disable-next-line operator-linebreak
export const getFilteredProductsAction =
  (currentCategory, page, perPage, addQuery) => (dispatch) => {
    // console.log('CURRCATEGORY', currentCategory);
    // console.log('PAGE', page);
    // console.log('QUERY', addQuery);
    getFilteredProducts(currentCategory, page, perPage, addQuery).then(
      (result) => {
        // console.log('getFilteredProducts', result);
        dispatch({
          type: SET_PRODUCTS,
          payload: {
            products: result.data.products,
            productsQuantity: result.data.productsQuantity,
          }
        });
      }
    );

    // getProducts().then((data) => {
    //   dispatch({ type: SET_PRODUCTS, payload: data });
    // });
  };
// eslint-disable-next-line operator-linebreak
export const getAllProductsCurrentCategoryAction =
  (currentCategory) => (dispatch) => {
    getAllFilteredProducts(currentCategory).then((allProducts) => {
      // console.log('allProducts', allProducts);
      dispatch({
        type: SET_CURRENT_PRODUCTS_ARR,
        payload: allProducts.data.products,
      });
    });
  };

export const filteredProductsForPaginationAction = (currentCategory, addQuery) => (dispatch) => {
  filteredProductsForPagination(currentCategory, addQuery).then((allProducts) => {
    // console.log('allProducts', allProducts);
    dispatch({
      type: FILTERED_PRODUCTS_FOR_PAGINATION,
      payload: allProducts.data.products,
    });
  });
};

export const setFlagInCartAction = (product) => ({
  type: SET_FLAG_IN_CART,
  payload: { product },
});
export const setCurrentFilterAction = (filterQuery) => {
  // console.log('setCurrentPageAction', page);
  localStorage.setItem('filterQuery', filterQuery);
  return {
    type: SET_CURRENT_FILTER_QUERY,
    payload: filterQuery,
  };
};
export const setCurrentPageAction = (page) => {
  // console.log('setCurrentPageAction', page);
  localStorage.setItem('currentPage', page);
  return {
    type: SET_CURRENT_PAGE,
    payload: page,
  };
};
export const setCurrentPerPageAction = (page) => {
  localStorage.setItem('currentPerPage', page);
  return {
    type: SET_PER_PAGE,
    payload: page,
  };
};
export const setCurrentCategoryAction = (id) => {
  localStorage.setItem('currentCategory', id);
  return {
    type: SET_CURRENT_CATEGORY,
    payload: id,
  };
};
export const setCurrentQueryAction = (id, perPage, page) => ({
  type: SET_CURRENT_QUERY,
  payload: `category=${id}&perPage=${perPage}&startPage=${page}`,
});
export const setFilterQueryAction = (querySort) => ({
  type: SET_FILTER_QUERY,
  payload: querySort,
});
export const setSortQueryAction = (querySort) => ({
  type: SET_SORT_BY,
  payload: querySort,
});

export const showGridAction = () => ({
  type: SHOW_GRID,
});
export const clearProductsAction = () => ({
  type: CLEAR_PRODUCTS,
});
export const getProductsFromLocalStorageAction = (
  productsFromLocalStorage
) => ({
  type: GET_PRODUCTS_FROM_LOCAL_STORAGE,
  payload: JSON.parse(productsFromLocalStorage),
});
export const setCategoryForBreadcrumbsAction = (product) => ({
  type: SET_CATEGORY_FOR_BREADCRUMBS,
  payload: { product },
});
export const getCategoryFromLocalStorageAction = (
  categoryFromLocalStorage
) => ({
  type: GET_CATEGORY_FROM_LOCAL_STORAGE,
  payload: JSON.parse(categoryFromLocalStorage),
});

export const setCurrentBrandQueryAction = (addQueryBrand) => ({
  type: SET_CURRENT_BRANDQUERY,
  payload: addQueryBrand
});
