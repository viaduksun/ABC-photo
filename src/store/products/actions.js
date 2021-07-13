import getProducts from '../../api/getProducts';
import { SET_FLAG_IN_CART, SET_PRODUCTS } from './types';

export const axiosProducts = () => (dispatch) => {
  getProducts().then((data) => {
    dispatch({ type: SET_PRODUCTS, payload: data });
  });
};

export const setFlagInCartAction = (product) => ({
  type: SET_FLAG_IN_CART,
  payload: { product },
});
