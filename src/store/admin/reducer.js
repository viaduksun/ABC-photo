/* eslint-disable max-len */
/* eslint-disable no-underscore-dangle */
/* eslint-disable no-case-declarations */
/* eslint-disable no-unused-expressions */
/* eslint-disable array-callback-return */
import {
  SET_PRODUCTS, REMOVE_PRODUCT, MODAL_REMOVE_PRODUCT, MODAL_REMOVE_PRODUCT_CLOSE, EDIT_PRODUCT
} from './types';

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
    case MODAL_REMOVE_PRODUCT_CLOSE:
      return {
        ...state,
        isModalRemoveProductOpen: false
      };
    case REMOVE_PRODUCT:
      const newProducts = state.products.filter((product) => product._id !== action.payload.productID);
      return {
        ...state,
        products: newProducts,
        isModalRemoveProductOpen: false
      };
    case EDIT_PRODUCT:
      console.log('STATE', state);
      console.log('PAYLOAD', action.payload);
      console.log('PAYLOAD_', action.payload);
      const productFromEditForm = action.payload;
      const targetProduct = state.products.find((product) => product._id === productFromEditForm._id);
      const productsEditedArr = state.products.filter((product) => product._id !== productFromEditForm._id);
      console.log('NEW', productsEditedArr);
      console.log('TARGET', targetProduct);
      const updatedProduct = Object.assign(targetProduct, productFromEditForm);
      productsEditedArr.push(updatedProduct);
      console.log('UP-PRO', updatedProduct);
      return {
        ...state,
        products: productsEditedArr,
      };

    default:
      return state;
  }
};
