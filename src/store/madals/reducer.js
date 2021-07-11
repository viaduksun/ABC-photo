import { EDIT_PRODUCT_MODAL_OPEN, EDIT_PRODUCT_MODAL_CLOSE, SET_PRODUCT } from './types';

const initialState = {
  isEditProductModalOpen: false,
  clickedProduct: '',
};

export const modals = (state = initialState, action) => {
  switch (action.type) {
    case EDIT_PRODUCT_MODAL_OPEN:
      console.log(action.payload);
      return {
        ...state,
        isEditProductModalOpen: true,
        clickedProduct: action.payload.product,
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
