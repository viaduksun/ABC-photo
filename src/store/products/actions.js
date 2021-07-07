import getProducts from '../../api/getProducts';
import { SET_PRODUCTS } from './types';

export const axiosProducts = () => (dispatch) => {
  getProducts().then((data) => {
    dispatch({ type: SET_PRODUCTS, payload: data });
  });
};
