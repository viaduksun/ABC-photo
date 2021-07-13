/* eslint-disable no-underscore-dangle */
import getProducts from '../../api/getProducts';
import getCatalog from '../../api/getCatalog';
import {
  SET_PRODUCTS,
  REMOVE_PRODUCT,
  MODAL_REMOVE_PRODUCT,
  MODAL_REMOVE_PRODUCT_CLOSE,
  EDIT_PRODUCT,
  SET_CATALOG
} from './types';

export const adminProducts = () => (dispatch) => {
  getProducts().then((data) => {
    dispatch({ type: SET_PRODUCTS, payload: data });
  });
};
export const setCatalog = () => (dispatch) => {
  getCatalog().then((data) => {
    console.log(data);
    dispatch({ type: SET_CATALOG, payload: data });
  });
};
export const removeProduct = (product) => ({
  type: REMOVE_PRODUCT,
  payload: { productID: product._id },
});
export const editProduct = (product) => ({
  type: EDIT_PRODUCT,
  payload: product,
});
export const modalDeleteOpen = () => ({
  type: MODAL_REMOVE_PRODUCT,
});
export const modalDeleteClose = () => ({
  type: MODAL_REMOVE_PRODUCT_CLOSE,
});