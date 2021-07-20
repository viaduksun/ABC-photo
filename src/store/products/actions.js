/* eslint-disable max-len */
/* eslint-disable no-unused-vars */
import getAllFilteredProducts from '../../api/getAllFilteredProducts';
import getFilteredProducts from '../../api/getFilteredProducts';
// import getProducts from '../../api/getProducts';
import {
  SET_CURRENT_CAREGORY, SET_CURRENT_PAGE, SET_CURRENT_PRODUCTS_ARR, SET_CURRENT_QUERY, SET_FLAG_IN_CART, SET_PRODUCTS
} from './types';

export const getFilteredProductsAction = (currentCategory, page, addQuery) => (dispatch) => {
  console.log('CURRCATEGORY', currentCategory);
  console.log('PAGE', page);
  console.log('QUERY', addQuery);
  getFilteredProducts(currentCategory, page, addQuery).then((result) => {
    console.log('getFilteredProducts', result);
    dispatch({ type: SET_PRODUCTS, payload: result });
  });

  // getProducts().then((data) => {
  //   dispatch({ type: SET_PRODUCTS, payload: data });
  // });
};
export const getAllProductsCurrentCategoryAction = (currentCategory) => (dispatch) => {
  getAllFilteredProducts(currentCategory).then((allProducts) => {
    console.log('allProducts', allProducts);
    dispatch({ type: SET_CURRENT_PRODUCTS_ARR, payload: allProducts.data.products });
  });
};

export const setFlagInCartAction = (product) => ({
  type: SET_FLAG_IN_CART,
  payload: { product },
});
export const setCurrentPageAction = (page) => ({
  type: SET_CURRENT_PAGE,
  payload: page,
});
export const setCurrentCategoryAction = (id) => ({
  type: SET_CURRENT_CAREGORY,
  payload: id,
});
export const setCurrentQueryAction = (id, page) => ({
  type: SET_CURRENT_QUERY,
  payload: `category=${id}&perPage=6&startPage=${page}`,
});
