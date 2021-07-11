/* eslint-disable max-len */
/* eslint-disable no-underscore-dangle */
/* eslint-disable no-case-declarations */
/* eslint-disable no-unused-expressions */
/* eslint-disable array-callback-return */
import { SET_PRODUCTS, REMOVE_PRODUCT, MODAL_REMOVE_PRODUCT } from './types';

const initialState = {
  products: [],
  isLoadingProducts: true,
  isModalRemoveProductOpen: false,
};

export const admin = (state = initialState, action) => {
  switch (action.type) {
    case SET_PRODUCTS:
      return {
        ...state,
        products: action.payload.data,
        isLoadingProducts: false
      };
    case MODAL_REMOVE_PRODUCT:
      return {
        ...state,
        isModalRemoveProductOpen: true
      };
    case REMOVE_PRODUCT:
      console.log('state.products', state.products);
      const newProducts = state.products.filter((product) => {
        console.log(product._id, '---', action.payload.productID);
        return product._id !== action.payload.productID;
      });
      console.log('ACTION payload productID: ', action.payload.productID);
      console.log('NEW', newProducts);
      return {
        ...state,
        products: newProducts,
        isModalRemoveProductOpen: false
      };

    default:
      return state;
  }
};
