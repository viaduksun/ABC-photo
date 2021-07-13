/* eslint-disable no-underscore-dangle */
/* eslint-disable no-case-declarations */
import { SET_FLAG_IN_CART, SET_PRODUCTS } from './types';

const initialState = {
  products: [],
  isLoadingProducts: true,
};

export const productsReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_PRODUCTS:
      return {
        ...state,
        products: action.payload.data,
        isLoadingProducts: false,
      };
    case SET_FLAG_IN_CART:
      // eslint-disable-next-line prefer-destructuring
      const product = action.payload.product;
      product.inCart = false;
      let newProductstArr = [];
      newProductstArr = state.products.map((item) => {
        if (item._id === product._id) {
          return { ...item, inCart: true };
        }
        return item;
      });
      return {
        ...state,
        products: newProductstArr,
      };

    default:
      return state;
  }
};
