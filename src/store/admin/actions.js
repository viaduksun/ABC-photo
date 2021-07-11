/* eslint-disable no-underscore-dangle */
import getProducts from '../../api/getProducts';
import { SET_PRODUCTS, REMOVE_PRODUCT, MODAL_REMOVE_PRODUCT } from './types';

export const adminProducts = () => (dispatch) => {
  getProducts().then((data) => {
    dispatch({ type: SET_PRODUCTS, payload: data });
  });
};
export const removeProduct = (product) => ({
  type: REMOVE_PRODUCT,
  payload: { productID: product._id },
});
export const modalDeleteOpen = () => ({
  type: MODAL_REMOVE_PRODUCT,
});