import getProductsHitSale from '../../api/getProductsHitSale';
import { SET_POPULAR_PRODUCTS } from './types';

export const axiosPopularModels = () => (dispatch) => {
  getProductsHitSale().then((data) => {
    dispatch({ type: SET_POPULAR_PRODUCTS, payload: data });
  });
};
