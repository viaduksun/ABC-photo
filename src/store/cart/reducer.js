/* eslint-disable no-underscore-dangle */
/* eslint-disable no-case-declarations */
// /* eslint-disable no-underscore-dangle */
// /* eslint-disable no-case-declarations */
// import { ADD_PRODUCT_TO_CART, DELETE_PRODUCT_FROM_CART } from './types';

// import { ADD_PRODUCT_TO_CART, DELETE_PRODUCT_FROM_CART } from './types';

// const initialState = [];

// export const cartReducer = (state = initialState, action) => {
//   switch (action.type) {
//     case ADD_PRODUCT_TO_CART:
//       console.log(action.payload);
//       console.log(state);
//       return [...state, action.payload];
//     case DELETE_PRODUCT_FROM_CART:
//       const newCart = state.filter((product) => product._id !== action.payload);
//       return newCart;
//     default:
//       return state;
//   }
// };

// eslint-disable no-underscore-dangle
// eslint-disable no-case-declarations
import { ADD_PRODUCT_TO_CART, CART_FROM_LOCAL_STORAGE, DELETE_PRODUCT_FROM_CART } from './types';

const initialState = {
  cart: [],
  counter: 2
};

export const cart = (state = initialState, action) => {
  switch (action.type) {
    case ADD_PRODUCT_TO_CART:
      console.log(action.payload);
      console.log(state);
      console.log(state);
      return {
        ...state,
        cart: [...state.cart, action.payload]
      };
    case DELETE_PRODUCT_FROM_CART:
      const newCart = state.cart.filter((product) => product._id !== action.payload);
      return {
        ...state,
        cart: newCart
      };
    case CART_FROM_LOCAL_STORAGE:
      return {
        ...state,
        cart: action.payload,
      };
    default:
      return state;
  }
};

 // const cartProduct = action.payload;
      // let newCartArr;
      // let cartMatches = state.find((item) => item.id === cartProduct._id);
      // if (cartMatches) {
      //   newCartArr = state.map((item) => {
      //     if (item._id === cartProduct._id) {
      //       return { ...item, count: item.count + 1 };
      //     }
      //     return item;
      //   });
      // } else {
      //   newCartArr = [cartProduct, ...state.cart];
      // }
