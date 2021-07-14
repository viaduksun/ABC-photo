/* eslint-disable no-underscore-dangle */
/* eslint-disable no-case-declarations */
// eslint-disable no-underscore-dangle
// eslint-disable no-case-declarations
import {
  ADD_PRODUCT_TO_CART,
  CART_DECREMENT,
  CART_FROM_LOCAL_STORAGE,
  CART_INCREMENT,
  DELETE_PRODUCT_FROM_CART,
  SET_TOTAL_COUNT_CART,
  SET_TOTAL_SUM_CART,
} from './types';

const initialState = {
  cart: [],
  totalSumCart: 0,
  totalCountCart: 0,
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
    default:
      return state;
  }
};
