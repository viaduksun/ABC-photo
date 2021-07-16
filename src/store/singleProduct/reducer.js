import { SET_SINGLE_PRODUCT, SINGLE_PRODUCT_FROM_LOCAL_STORAGE } from './types';

const initialState = {
  singleProduct: {},
};

export const singleProduct = (state = initialState, action) => {
  switch (action.type) {
    case SET_SINGLE_PRODUCT:
      console.log(action.payload.singleProduct);
      return {
        ...state,
        singleProduct: action.payload.singleProduct,
      };
    case SINGLE_PRODUCT_FROM_LOCAL_STORAGE:
      console.log(action.payload);
      return {
        ...state,
        singleProduct: action.payload,
      };
    default:
      return state;
  }
};
