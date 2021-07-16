/* eslint-disable max-len */
import {
  EDIT_PRODUCT_MODAL_OPEN, EDIT_PRODUCT_MODAL_CLOSE, SET_PRODUCT, LOGIN_MODAL_OPEN, LOGIN_MODAL_CLOSE
} from './types';
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
export const loginModalOpenAction = () => ({
  type: LOGIN_MODAL_OPEN
});
export const loginModalCloseAction = () => ({
  type: LOGIN_MODAL_CLOSE
});
export const editProductModalClose = () => ({
  type: EDIT_PRODUCT_MODAL_CLOSE,

});