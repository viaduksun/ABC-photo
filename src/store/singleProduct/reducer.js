import { SET_SINGLE_PRODUCT } from './types';

const initialState = {
  singleProduct: {}
};

export const singleProduct = (state = initialState, action) => {
  switch (action.type) {
    case SET_SINGLE_PRODUCT:
      console.log(action.payload.singleProduct);
      return {
        ...state,
        singleProduct: action.payload.singleProduct
      };
    default:
      return state;
  }
};
