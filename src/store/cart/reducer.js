/* eslint-disable no-underscore-dangle */
/* eslint-disable no-case-declarations */
import { ADD_PRODUCT_TO_CART } from './types';

const initialState = [];

export const cartReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_PRODUCT_TO_CART:
      console.log(action.payload);
      console.log(state);
      return [...state, action.payload];
    default:
      return state;
  }
};
