/* eslint-disable no-unused-vars */
import './App.scss';
import React from 'react';
import { Switch, Route } from 'react-router-dom';
import Header from './containers/Header/Header';
import Footer from './containers/Footer/Footer';
import Home from './pages/Home';
import Contacts from './pages/Contacts';
import Products from './pages/Products';
import SingleProduct from './pages/SingleProduct';
import Cart from './pages/Cart';
import Checkout from './pages/Checkout';
import Profile from './pages/Profile';
import ApiTest from './pages/ApiTest';

function App() {
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
        <Route exact path="/api-test">
          <ApiTest />
        </Route>
      </Switch>
      <Footer />
    </div>
  );
}

export default App;
