/* eslint-disable operator-linebreak */
import thunk from 'redux-thunk';
// eslint-disable-next-line object-curly-newline
import { createStore, applyMiddleware, compose, combineReducers } from 'redux';
import { productsReducer } from './products/reducer';
import { popularModelsReducer } from './popularModels/reducer';
import { cartReducer } from './cart/reducer';
import { ADD_PRODUCT_TO_CART } from './cart/types';
import { modalsReducer } from './madals/reducer';

// eslint-disable-next-line no-underscore-dangle
const devTools = window.__REDUX_DEVTOOLS_EXTENSION__
  ? // eslint-disable-next-line no-underscore-dangle
  window.__REDUX_DEVTOOLS_EXTENSION__()
  : (f) => f;

  const localStorageMiddleware = ({ getState }) => (next) => (action) => {
    const result = next(action);
    if (action.type === ADD_PRODUCT_TO_CART) {
      const { cart } = getState();
      localStorage.setItem('cart', JSON.stringify(cart));
    }
    return result;
  };
  
const rootReducer = combineReducers({
  productsPage: productsReducer,
  popularModelsPage: popularModelsReducer,
  cart: cartReducer,
  modalsReducer,
});

const store = createStore(
  rootReducer,
  // {
  //   cartPage: JSON.parse(localStorage.getItem('cartProducts')) || []
  // },
  {
    cart: JSON.parse(localStorage.getItem('cart')) || []
  },

  compose(applyMiddleware(thunk, localStorageMiddleware), devTools)
);

export default store;
