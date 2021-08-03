/* eslint-disable no-fallthrough */
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
  DECREMENT_CART_DB,
  DELETE_ALL_DATA_FROM_CART,
  DELETE_CART_DB,
  DELETE_CART_DB_REDUX,
  DELETE_LOCAL_CART,
  DELETE_PRODUCT_FROM_CART,
  GET_CART_FROM_DB,
  INCREMENT_CART_DB,
  LOG_OUT,
  SET_CART_DB,
  SET_POPUP_FALSE,
  SET_TOTAL_COUNT_CART,
  SET_TOTAL_SUM_CART,
} from './types';

const initialState = {
  cart: [],
  cartDB: [],
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
    // === Этот код срабатывает в App.js при загрузке приложения
    case GET_CART_FROM_DB:
      let cartArrayFromDB = [];
      if (action.payload.data) {
        cartArrayFromDB = action.payload.data.products;
      } else {
        console.log('NO CART IN DB');
      }
      console.log('CART_FROM_DB_reducer', cartArrayFromDB);
      const totalCartCoutn = cartArrayFromDB.reduce(
        (a, b) => a + b.cartQuantity,
        0
      );

      return {
        ...state,
        cartDB: cartArrayFromDB,
        totalCountCart: totalCartCoutn,
      };

    case SET_CART_DB:
      console.log(action.payload);
      return {
        ...state,
        cartDB: action.payload.resultCart.data.products,
        totalCountCart: action.payload.cartCounter,
        popupIsOpen: true,
      };
    case INCREMENT_CART_DB:
      console.log(action.payload);
      return {
        ...state,
        cartDB: action.payload.resultCart.data.products,
        totalCountCart: action.payload.cartCounter,
      };
    case DECREMENT_CART_DB:
      console.log(action.payload);
      return {
        ...state,
        cartDB: action.payload.resultCart.data.products,
        totalCountCart: action.payload.cartCounter,
      };
    case DELETE_CART_DB:
      console.log(action.payload);
      return {
        ...state,
        cartDB: action.payload.resultCart.data.products,
        totalCountCart: action.payload.cartCounter,
      };
    case DELETE_CART_DB_REDUX:
      console.log('DELETE_CART_DB_REDUX');
      return {
        ...state,
        cartDB: [],
      };
    case DELETE_ALL_DATA_FROM_CART:
      console.log('DELETE_ALL_DATA_FROM_CART');
      return {
        cart: [],
        cartDB: [],
        totalSumCart: 0,
        totalCountCart: 0,
        popupIsOpen: false,
      };
    case DELETE_LOCAL_CART:
      console.log('DELETE_LOCAL_CART');
      localStorage.removeItem('cart');
      return {
        ...state,
        cart: [],
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
    case LOG_OUT:
      return {
        ...state,
        cartDB: [],
        totalSumCart: 0,
        totalCountCart: 0,
      };
    default:
      return state;
  }
};
