import getProducts from '../../api/getProducts';
import { SET_POPULAR_PRODUCTS } from './types';

export const axiosPopularModels = () => (dispatch) => {
  getProducts().then((data) => {
    dispatch({ type: SET_POPULAR_PRODUCTS, payload: data });
  });
};
