/* eslint-disable consistent-return */
/* eslint-disable no-shadow */
/* eslint-disable operator-linebreak */
import thunk from 'redux-thunk';
// eslint-disable-next-line object-curly-newline
import { createStore, applyMiddleware, compose, combineReducers } from 'redux';
import { productsReducer } from './products/reducer';
import { popularModelsReducer } from './popularModels/reducer';
import { modals } from './madals/reducer';
import { admin } from './admin/reducer';
import { cart } from './cart/reducer';
import { singleProduct } from './singleProduct/reducer';
import {
  ADD_PRODUCT_TO_CART,
  CART_DECREMENT,
  CART_INCREMENT,
  DELETE_PRODUCT_FROM_CART,
} from './cart/types';
import { SET_FLAG_IN_CART } from './products/types';

// eslint-disable-next-line no-underscore-dangle
const devTools = window.__REDUX_DEVTOOLS_EXTENSION__
  ? // eslint-disable-next-line no-underscore-dangle
    window.__REDUX_DEVTOOLS_EXTENSION__()
  : (f) => f;

const localStorageMiddleware =
  ({ getState }) =>
  // eslint-disable-next-line implicit-arrow-linebreak
  (next) =>
  // eslint-disable-next-line implicit-arrow-linebreak
  (action) => {
    const result = next(action);
    if (
      action.type === ADD_PRODUCT_TO_CART ||
      action.type === DELETE_PRODUCT_FROM_CART ||
      action.type === CART_INCREMENT ||
      action.type === CART_DECREMENT
    ) {
      const { cart } = getState();
      localStorage.setItem('cart', JSON.stringify(cart.cart));
    }
    if (action.type === SET_FLAG_IN_CART) {
      const { productsPage } = getState();
      localStorage.setItem('products', JSON.stringify(productsPage.products));
    }
    return result;
  };

const rootReducer = combineReducers({
  productsPage: productsReducer,
  popularModelsPage: popularModelsReducer,
  modals,
  admin,
  cart,
  singleProduct
});

const store = createStore(
  rootReducer,
  compose(applyMiddleware(thunk, localStorageMiddleware), devTools)
);

export default store;
