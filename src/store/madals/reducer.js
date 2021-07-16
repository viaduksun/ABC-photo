/* eslint-disable max-len */
import {
  EDIT_PRODUCT_MODAL_OPEN, EDIT_PRODUCT_MODAL_CLOSE, SET_PRODUCT, LOGIN_MODAL_OPEN, LOGIN_MODAL_CLOSE
} from './types';

const initialState = {
  isEditProductModalOpen: false,
  isLoginModalOpen: false,
};

export const modals = (state = initialState, action) => {
  switch (action.type) {
    case LOGIN_MODAL_CLOSE:
      document.body.classList.remove('no-scroll');
      return {
        ...state,
        isLoginModalOpen: false,
      };
    case LOGIN_MODAL_OPEN:
      document.body.classList.add('no-scroll');

      return {
        ...state,
        isLoginModalOpen: true,
      };
    case EDIT_PRODUCT_MODAL_OPEN:
      return {
        ...state,
        isEditProductModalOpen: true,
        // clickedProduct: action.payload.product,
      };
    case EDIT_PRODUCT_MODAL_CLOSE:
      return {
        ...state,
        isEditProductModalOpen: false,
      };
    case SET_PRODUCT:
      return {
        ...state,
        currentProduct: action.payload.data,
      };

    default:
      return state;
  }
};
