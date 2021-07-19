/* eslint-disable no-unused-vars */
import { useSelector } from 'react-redux';
import getAllFilteredProducts from '../../api/getAllFilteredProducts';
import getFilteredProducts from '../../api/getFilteredProducts';
import getProducts from '../../api/getProducts';
import {
  SET_CURRENT_CAREGORY, SET_CURRENT_PAGE, SET_CURRENT_PRODUCTS_ARR, SET_FLAG_IN_CART, SET_PRODUCTS
} from './types';

export const axiosProducts = (currentCategory, page) => (dispatch) => {
  console.log('Action_currentCategory', currentCategory);
  getFilteredProducts(currentCategory, page).then((result) => {
    console.log('getFilteredProducts', result);
    dispatch({ type: SET_PRODUCTS, payload: result });
  });

  // getProducts().then((data) => {
  //   dispatch({ type: SET_PRODUCTS, payload: data });
  // });
};
export const allProductsCurrentCategory = (currentCategory) => (dispatch) => {
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
