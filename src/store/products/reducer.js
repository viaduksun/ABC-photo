import { SET_PRODUCTS } from './types';

const initialState = [];

export const productsReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_PRODUCTS: {
      return action.payload.data;
    }
    default:
      return state;
  }
};
