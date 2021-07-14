/* eslint-disable no-unused-vars */
import './App.scss';
import React, { useEffect } from 'react';
import { Switch, Route } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import Header from './containers/Header/Header';
import Footer from './containers/Footer/Footer';
import Home from './pages/Home';
import Contacts from './pages/Contacts';
import Products from './pages/Products';
import SingleProduct from './pages/SingleProduct';
import Cart from './pages/Cart';
import Checkout from './pages/Checkout';
import Profile from './pages/Profile';
import Admin from './pages/Admin';
import ButtonTop from './components/UI/ButtonTop/ButtonTop';
import {
  cartFromLocalStorageAction,
  setTotalCountCartAction,
  setTotalPriceCartAction,
} from './store/cart/actions';

function App() {
  const cart = useSelector((state) => state.cart.cart);
  const dispatch = useDispatch();

  let totalSum = 0;
  cart.forEach((item) => {
    totalSum += item.currentPrice * item.count;
  });
  useEffect(() => {
    dispatch(setTotalPriceCartAction(totalSum));
  }, [dispatch, totalSum]);
  let totalCount = 0;
  cart.forEach((item) => {
    totalCount += item.count;
  });
  useEffect(() => {
    dispatch(setTotalCountCartAction(totalCount));
  }, [dispatch, totalCount]);

  useEffect(() => {
    const cartFromLocalStorage = localStorage.getItem('cart');
    if (cartFromLocalStorage) {
      dispatch(cartFromLocalStorageAction(cartFromLocalStorage));
    }
  }, [dispatch]);

  return (
    <div className="wrapper">
      <Header />
      <Switch>
        <Route exact path="/">
          <Home />
        </Route>
        <Route exact path="/products">
          <Products />
        </Route>
        <Route exact path="/single-product">
          <SingleProduct />
        </Route>
        <Route exact path="/contacts">
          <Contacts />
        </Route>
        <Route exact path="/cart">
          <Cart />
        </Route>
        <Route exact path="/checkout">
          <Checkout />
        </Route>
        <Route exact path="/profile">
          <Profile />
        </Route>
        <Route exact path="/admin">
          <Admin />
        </Route>
      </Switch>
      <Footer />
      <ButtonTop />
    </div>
  );
}

export default App;
