import thunk from 'redux-thunk';
import {
  createStore, applyMiddleware, compose, combineReducers
} from 'redux';
import { productsReducer } from './products/reducer';

// eslint-disable-next-line no-underscore-dangle
const devTools = window.__REDUX_DEVTOOLS_EXTENSION__
  // eslint-disable-next-line no-underscore-dangle
  ? window.__REDUX_DEVTOOLS_EXTENSION__()
  : (f) => f;

const rootReducer = combineReducers({
  products: productsReducer
});

const store = createStore(
  rootReducer,
  compose(applyMiddleware(thunk), devTools),
);

export default store;
