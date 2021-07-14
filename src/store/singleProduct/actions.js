import { SET_SINGLE_PRODUCT } from './types';

export const setSingleProductAction = (singleProduct) => ({
  type: SET_SINGLE_PRODUCT,
  payload: { singleProduct },
});
