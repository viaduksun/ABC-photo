import { EDIT_PRODUCT_MODAL_OPEN, EDIT_PRODUCT_MODAL_CLOSE, SET_PRODUCT } from './types';
import getOneProduct from '../../api/getOneProduct';

export const getOneProductAxios = (itemNo) => (dispatch) => {
  getOneProduct(itemNo).then((data) => {
    dispatch({ type: SET_PRODUCT, payload: data });
  });
};

export const editProductModalOpen = (product) => ({
  type: EDIT_PRODUCT_MODAL_OPEN,
  payload: { product },
});
export const editProductModalClose = () => ({
  type: EDIT_PRODUCT_MODAL_CLOSE,
});