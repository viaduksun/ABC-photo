/* eslint-disable no-underscore-dangle */
/* eslint-disable no-case-declarations */
// eslint-disable no-underscore-dangle
// eslint-disable no-case-declarations
import {
  ADD_PRODUCT_TO_CART,
  ADD_SINGLE_PRODUCT_TO_CART,
  CART_DECREMENT,
  CART_FROM_LOCAL_STORAGE,
  CART_INCREMENT,
  DELETE_PRODUCT_FROM_CART,
  SET_POPUP_FALSE,
  SET_TOTAL_COUNT_CART,
  SET_TOTAL_SUM_CART,
} from './types';

const initialState = {
  cart: [],
  totalSumCart: 0,
  totalCountCart: 0,
  popupIsOpen: false,
};

export const cart = (state = initialState, action) => {
  switch (action.type) {
    case ADD_PRODUCT_TO_CART:
      const cartProduct = action.payload.product;
      // Adding a new key for initial OBJ = count: 1
      cartProduct.count = 1;
      let newCartArr = [];
      const cartMatches = state.cart.find(
        (item) => item._id === cartProduct._id
      );
      if (cartMatches) {
        newCartArr = state.cart.map((item) => {
          if (item._id === cartProduct._id) {
            return { ...item, count: item.count + 1 };
          }
          return item;
        });
      } else {
        newCartArr = [cartProduct, ...state.cart];
      }
      return {
        ...state,
        cart: newCartArr,
        popupIsOpen: true,
      };
    case ADD_SINGLE_PRODUCT_TO_CART:
      const cartSingleProduct = action.payload.singleProduct;
      cartSingleProduct.count = 1;
      let newCartArr2 = [];
      const cartMatches2 = state.cart.find(
        (item) => item._id === cartSingleProduct._id
      );
      if (cartMatches2) {
        newCartArr2 = state.cart.map((item) => {
          if (item._id === cartSingleProduct._id) {
            return { ...item, count: item.count + 1 };
          }
          return item;
        });
      } else {
        newCartArr2 = [cartSingleProduct, ...state.cart];
      }
      return {
        ...state,
        cart: newCartArr2,
        popupIsOpen: true,
      };
    case DELETE_PRODUCT_FROM_CART:
      const newCart = state.cart.filter(
        (product) => product._id !== action.payload.cartProductId
      );
      return {
        ...state,
        cart: newCart,
      };
    case CART_FROM_LOCAL_STORAGE:
      console.log(action.payload);
      return {
        ...state,
        cart: action.payload,
      };
    case CART_INCREMENT:
      const newCartContent = state.cart.map((item) => {
        if (item._id === action.payload.cartProductId) {
          return { ...item, count: item.count + 1 };
        }
        return item;
      });
      return { ...state, cart: newCartContent };

    case CART_DECREMENT:
      const newCartContentAfterDecrement = state.cart.map((item) => {
        if (item._id === action.payload.cartProductId && item.count > 1) {
          return { ...item, count: item.count - 1 };
        }
        return item;
      });
      return { ...state, cart: newCartContentAfterDecrement };
    case SET_TOTAL_SUM_CART:
      return {
        ...state,
        totalSumCart: action.payload.totalSum,
      };
    case SET_TOTAL_COUNT_CART:
      return {
        ...state,
        totalCountCart: action.payload.totalCount,
      };
    case SET_POPUP_FALSE:
      return {
        ...state,
        popupIsOpen: false,
      };
    default:
      return state;
  }
};
