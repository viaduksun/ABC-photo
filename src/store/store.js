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
import { favorites } from './favorites/reducer';
import { singleProduct } from './singleProduct/reducer';
import { viewedProducts } from './viewedProducts/reducer';
import {
  ADD_PRODUCT_TO_CART,
  ADD_SINGLE_PRODUCT_TO_CART,
  CART_DECREMENT,
  CART_INCREMENT,
  DELETE_PRODUCT_FROM_CART,
} from './cart/types';
import { SET_SINGLE_PRODUCT } from './singleProduct/types';
import {
  ADD_PRODUCT_TO_FAVORITE,
  DELETE_PRODUCT_FROM_FAVORITE,
  FAVORITE_PRODUCT_CHANGE_ORDER,
} from './favorites/types';
import { ADD_VIEWED_PRODUCT } from './viewedProducts/types';

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
      action.type === CART_DECREMENT ||
      action.type === ADD_SINGLE_PRODUCT_TO_CART
    ) {
      const { cart } = getState();
      localStorage.setItem('cart', JSON.stringify(cart.cart));
    }
    if (action.type === SET_SINGLE_PRODUCT) {
      const { singleProduct } = getState();
      localStorage.setItem(
        'singleProduct',
        JSON.stringify(singleProduct.singleProduct)
      );
    }
    if (
      action.type === ADD_PRODUCT_TO_FAVORITE ||
      action.type === DELETE_PRODUCT_FROM_FAVORITE ||
      action.type === FAVORITE_PRODUCT_CHANGE_ORDER
    ) {
      const { favorites } = getState();
      localStorage.setItem('favorites', JSON.stringify(favorites.favorites));
    }
    if (action.type === ADD_VIEWED_PRODUCT) {
      const { viewedProducts } = getState();
      localStorage.setItem(
        'viewedProducts',
        JSON.stringify(viewedProducts.viewedProducts)
      );
    }
    return result;
  };

const rootReducer = combineReducers({
  productsPage: productsReducer,
  popularModelsPage: popularModelsReducer,
  modals,
  admin,
  cart,
  singleProduct,
  favorites,
  viewedProducts,
});

const store = createStore(
  rootReducer,
  compose(applyMiddleware(thunk, localStorageMiddleware), devTools)
);

export default store;
