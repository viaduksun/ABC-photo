/* eslint-disable max-len */
/* eslint-disable prefer-const */
/* eslint-disable no-underscore-dangle */
/* eslint-disable no-unused-vars */
/* eslint-disable operator-linebreak */
/* eslint-disable import/named */
import addToCart from '../../api/addToCart';
import createCart from '../../api/createCart';
import deleteCart from '../../api/deleteCart';
import deleteFromCart from '../../api/deleteFromCart';
import getCartFromDB from '../../api/getCartFromDB';
import updateCart from '../../api/updateCart';
import {
  ADD_PRODUCT_TO_CART,
  ADD_SINGLE_PRODUCT_TO_CART,
  CART_DECREMENT,
  CART_FROM_LOCAL_STORAGE,
  CART_INCREMENT,
  DELETE_CART_DB_REDUX,
  DELETE_LOCAL_CART,
  DELETE_PRODUCT_FROM_CART,
  GET_CART_FROM_DB,
  LOG_OUT,
  SET_CART_DB,
  SET_POPUP_FALSE,
  SET_TOTAL_COUNT_CART,
  SET_TOTAL_SUM_CART,
} from './types';

export const addProductToCartAction = (product) => ({
  type: ADD_PRODUCT_TO_CART,
  payload: { product },
});
// === TEMP ===
export const setCartActionTemp =
  (singleProduct) => (dispatch) => {
    createCart(singleProduct).then(
      // updateCart(singleProduct).then(
      // addToCart(singleProduct).then(
      // deleteFromCart(singleProduct).then(
      (result) => {
        console.log('ADDTOCART_ACTION', result);
        dispatch({ type: ADD_SINGLE_PRODUCT_TO_CART, payload: { singleProduct }, });
      }
    );
  };
// ==== TEMP ===
export const addToCartMongoDB = (singleProduct) => (dispatch) => {
  let cartFromDB = [];
  getCartFromDB().then(
    (result) => {
      if (result.data) {
        console.log('CART FROM DB: ', result.data.products);
        const arrayFromDB = result.data.products;
        const isMatch = arrayFromDB.find((item) => (item.product._id === singleProduct._id));
        if (isMatch) {
          cartFromDB = result.data.products.map((item) => {
            if (item.product._id === singleProduct._id) {
              return {
                product: singleProduct._id,
                cartQuantity: item.cartQuantity + 1
              };
            }
            return {
              product: item.product._id,
              cartQuantity: item.cartQuantity
            };
          });
        } else {
          cartFromDB = result.data.products.map((item) => ({
            product: item.product._id,
            cartQuantity: item.cartQuantity
          }));
          const newCartItem = {
            product: singleProduct._id,
            cartQuantity: 1
          };
          cartFromDB.push(newCartItem);
        }
        console.log(cartFromDB);
        const cartCounter = cartFromDB.reduce((a, b) => a + b.cartQuantity, 0);
        updateCart(cartFromDB).then(
          // createCart(singleProduct).then(
          (resultCart) => {
            console.log('CREATE INIT CART: ', resultCart);
            dispatch({ type: SET_CART_DB, payload: { resultCart, cartCounter } });
          }
        );
      } else {
        const newCartItem = {
          product: singleProduct._id,
          cartQuantity: 1
        };
        cartFromDB.push(newCartItem);
        const cartCounter = 1;
        updateCart(cartFromDB).then(
          // createCart(singleProduct).then(
          (resultCart) => {
            console.log('CREATE INIT CART: ', resultCart);
            dispatch({ type: SET_CART_DB, payload: { resultCart, cartCounter } });
          }
        );
      }
    }
  );
};
export const deleteFromCartMongoDB = (singleProduct) => (dispatch) => {
  getCartFromDB().then(
    (result) => {
      if (result.data) {
        console.log('CART FROM DB: ', result.data.products);
        const arrayFromDB = result.data.products;
        const newArrayFromDB = arrayFromDB.filter((item) => (item.product._id !== singleProduct._id));
        console.log(newArrayFromDB);
        const cartCounter = newArrayFromDB.reduce((a, b) => a + b.cartQuantity, 0);
        updateCart(newArrayFromDB).then(
          // createCart(singleProduct).then(
          (resultCart) => {
            console.log('UPDATED CART: ', resultCart);
            dispatch({ type: SET_CART_DB, payload: { resultCart, cartCounter } });
          }
        );
      }
    }

  );
};
export const incrementCartMongoDB = (currentID) => (dispatch) => {
  getCartFromDB().then(
    (result) => {
      if (result.data) {
        const arrayFromDB = result.data.products;
        const newArrayFromDB = arrayFromDB.map((item) => {
          if (item.product._id === currentID) {
            return { ...item, cartQuantity: item.cartQuantity + 1 };
          }
          return item;
        });
        console.log(newArrayFromDB);
        const cartCounter = newArrayFromDB.reduce((a, b) => a + b.cartQuantity, 0);
        updateCart(newArrayFromDB).then(
          // createCart(singleProduct).then(
          (resultCart) => {
            console.log('UPDATED CART: ', resultCart);
            dispatch({ type: SET_CART_DB, payload: { resultCart, cartCounter } });
          }
        );
      }
    }

  );
};
export const decrementCartMongoDB = (currentID) => (dispatch) => {
  getCartFromDB().then(
    (result) => {
      if (result.data) {
        const arrayFromDB = result.data.products;
        const newArrayFromDB = arrayFromDB.map((item) => {
          if (item.product._id === currentID) {
            if (item.cartQuantity >= 1) {
              return { ...item, cartQuantity: item.cartQuantity - 1 };
            }
          }
          return item;
        });
        console.log(newArrayFromDB);
        const newArrayFromDBFiltered = newArrayFromDB.filter((item) => item.cartQuantity !== 0);

        const cartCounter = newArrayFromDBFiltered.reduce((a, b) => a + b.cartQuantity, 0);
        updateCart(newArrayFromDBFiltered).then(
          // createCart(singleProduct).then(
          (resultCart) => {
            console.log('UPDATED CART: ', resultCart);
            dispatch({ type: SET_CART_DB, payload: { resultCart, cartCounter } });
          }
        );
      }
    }
  );
};
export const getCartFromDB_action = () => (dispatch) => {
  getCartFromDB().then(
    (result) => {
      console.log('CART FROM DB: ', result);
      if (result) {
        dispatch({ type: GET_CART_FROM_DB, payload: result });
      }
    }
  );
};

export const cartDeleteAction = () => (dispatch) => {
  deleteCart().then(
    (result) => {
      console.log('DELETE CART: ', result);
      dispatch({ type: DELETE_CART_DB_REDUX });
    }
  );
};
export const logOutAction = () => {
  localStorage.removeItem('token');
  return ({
    type: LOG_OUT
  });
};
export const addSingleProductToCartAction = (singleProduct) => ({
  type: ADD_SINGLE_PRODUCT_TO_CART,
  payload: { singleProduct },
});

export const deleteProductFromCartAction = (cartProductId) => ({
  type: DELETE_PRODUCT_FROM_CART,
  payload: { cartProductId },
});

export const cartFromLocalStorageAction = (cartFromLocalStorage) => ({
  type: CART_FROM_LOCAL_STORAGE,
  payload: JSON.parse(cartFromLocalStorage),
});

export const cartIncrementAction = (cartProductId) => ({
  type: CART_INCREMENT,
  payload: { cartProductId },
});

export const cartDecrementAction = (cartProductId) => ({
  type: CART_DECREMENT,
  payload: { cartProductId },
});

export const setTotalPriceCartAction = (totalSum) => ({
  type: SET_TOTAL_SUM_CART,
  payload: { totalSum },
});

export const setTotalCountCartAction = (totalCount) => ({
  type: SET_TOTAL_COUNT_CART,
  payload: { totalCount },
});
export const deleteLocalCartAction = () => ({
  type: DELETE_LOCAL_CART
});
export const hidePopupAction = () => ({
  type: SET_POPUP_FALSE,
});
