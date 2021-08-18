/* eslint-disable operator-linebreak */
/* eslint-disable import/named */
/* eslint-disable no-unused-vars */
import './App.scss';
import React, { useEffect, useState } from 'react';
import { Switch, Route } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { FaSmileWink } from 'react-icons/fa';
import Header from './containers/Header/Header';
import Footer from './containers/Footer/Footer';
import Home from './pages/Home';
import Contacts from './pages/Contacts/Contacts';
import Products from './pages/Products';
import SearchProducts from './pages/SearchProducts';
import SingleProduct from './pages/SingleProduct';
import Shops from './pages/Shops/Shops';
// import Maps from './pages/Maps';
import Credit from './pages/Credit/Credit';
import Guaranty from './pages/Guaranty/Guaranty';
import About from './pages/About/About';
import Delivery from './pages/Delivery/Delivery';
// import Public from './pages/Public';
import Cart from './pages/Cart';
import Checkout from './pages/Checkout';
import Profile from './pages/Profile';
import Admin from './pages/Admin';
import ButtonTop from './components/UI/ButtonTop/ButtonTop';
import {
  cartFromLocalStorageAction,
  hidePopupAction,
  getCartFromDB_action,
  setTotalCountCartAction,
  setTotalPriceCartAction,
  logOutAction,
} from './store/cart/actions';
import CartPopup from './components/UI/CartPopup/CartPopup';
import { exitAction, userFromLocalStorageAction } from './store/admin/actions';
import { singleProductFromLocalStorageAction } from './store/singleProduct/actions';
import Favorites from './pages/Favorites';
import { favoritesFromLocalStorageAction } from './store/favorites/actions';
import { viewedProductsFromLocalStorageAction } from './store/viewedProducts/actions';
import deleteCart from './api/deleteCart';
import { searchProductsFromLocalStorageAction } from './store/searchProducts/actions';
import {
  getCategoryFromLocalStorageAction,
  getProductsFromLocalStorageAction,
} from './store/products/actions';
import AuthorizationPopup from './components/UI/AuthorizationPopup/AuthorizationPopup';
import ErrorPage from './pages/ErrorPage';

function App() {
  const cart = useSelector((state) => state.cart.cart);
  const cartDB = useSelector((state) => state.cart.cartDB);
  const popupIsOpen = useSelector((state) => state.cart.popupIsOpen);
  const authorizationPopupIsOpen = useSelector(
    (state) => state.modals.authorizationPopupIsOpen
  );
  const textAuthorizationPopup = useSelector((state) => state.modals.text);
  const currentUserFromRedux = useSelector((state) => state.admin.currentUser);
  const isLoggedIn = useSelector((state) => state.admin.isLoggedIn);
  const currentQuery = useSelector((state) => state.productsPage.currentQuery);
  const dispatch = useDispatch();
  // === USE EFFECT ========
  // const [currentQuery, setCurrentQuery] = useState('');
  // === USER ===
  useEffect(() => {
    const userFromLocalStorage = localStorage.getItem('currentUser');
    // const tokenFromLocalStorage = localStorage.getItem('token');
    if (userFromLocalStorage) {
      dispatch(userFromLocalStorageAction(JSON.parse(userFromLocalStorage)));
    }
  }, [dispatch]);
  useEffect(() => {
    if (isLoggedIn) {
      localStorage.setItem('currentUser', JSON.stringify(currentUserFromRedux));
    }
  }, [currentUserFromRedux, dispatch, isLoggedIn]);
  useEffect(() => {
    if (isLoggedIn) {
      // console.log('LOG', isLoggedIn);
      dispatch(getCartFromDB_action());
      // dispatch(setTotalCountCartAction());
      // deleteCart();
    } else {
      // console.log('LOG OUT');
      // dispatch(logOutAction());
    }
  }, [dispatch, isLoggedIn]);

  let totalSum = 0;

  if (isLoggedIn && Object.keys(cartDB).length > 0) {
    cartDB.forEach((item) => {
      totalSum += item.product.currentPrice * item.cartQuantity;
    });
  }
  if (!isLoggedIn && cart.length > 0) {
    cart.forEach((item) => {
      totalSum += item.currentPrice * item.count;
    });
  }

  useEffect(() => {
    dispatch(setTotalPriceCartAction(totalSum));
  }, [dispatch, totalSum]);

  let totalCount = 0;
  if (!isLoggedIn && cart.length > 0) {
    cart.forEach((item) => {
      totalCount += item.count;
    });
  }
  useEffect(() => {
    dispatch(setTotalCountCartAction(totalCount));
  }, [dispatch, totalCount]);

  useEffect(() => {
    const cartFromLocalStorage = localStorage.getItem('cart');
    const favoritesFromLocalStorage = localStorage.getItem('favorites');
    const singleProductFromLocalStorage = localStorage.getItem('singleProduct');
    const viewedProductsFromLocalStorage =
      localStorage.getItem('viewedProducts');
    const searchProductsFromLocalStorage =
      localStorage.getItem('searchProducts');
    const productsFromLocalStorage = localStorage.getItem('products');
    const categoryForBreadcrumbsFromLocalStorage = localStorage.getItem(
      'categoryForBreadcrumbs'
    );
    if (cartFromLocalStorage) {
      dispatch(cartFromLocalStorageAction(cartFromLocalStorage));
    }
    if (favoritesFromLocalStorage) {
      dispatch(favoritesFromLocalStorageAction(favoritesFromLocalStorage));
    }
    if (singleProductFromLocalStorage) {
      dispatch(
        singleProductFromLocalStorageAction(singleProductFromLocalStorage)
      );
    }
    if (viewedProductsFromLocalStorage) {
      dispatch(
        viewedProductsFromLocalStorageAction(viewedProductsFromLocalStorage)
      );
    }
    if (searchProductsFromLocalStorage) {
      dispatch(
        searchProductsFromLocalStorageAction(searchProductsFromLocalStorage)
      );
    }
    if (productsFromLocalStorage) {
      dispatch(getProductsFromLocalStorageAction(productsFromLocalStorage));
    }
    if (categoryForBreadcrumbsFromLocalStorage) {
      dispatch(
        getCategoryFromLocalStorageAction(
          categoryForBreadcrumbsFromLocalStorage
        )
      );
    }
  }, [dispatch]);

  useEffect(() => {
    setTimeout(() => {
      dispatch(hidePopupAction());
    }, 1500);
  }, [dispatch, popupIsOpen]);

  return (
    <div className="wrapper">
      <CartPopup />
      <AuthorizationPopup>{textAuthorizationPopup}</AuthorizationPopup>
      <Header />
      <Switch>
        <Route exact path="/">
          <Home />
        </Route>
        {/* <Route exact path={`/products${currentQuery}`}> */}
        {/* <Route exact path="/products"> */}
        <Route path="/products">
          <Products />
        </Route>
        <Route path="/favorites">
          <Favorites />
        </Route>
        <Route exact path="/single-product">
          <SingleProduct />
        </Route>
        <Route exact path="/contacts">
          <Contacts />
        </Route>
        <Route exact path="/shops">
          <Shops />
        </Route>
        <Route exact path="/guaranty">
          <Guaranty />
        </Route>
        <Route exact path="/about">
          <About />
        </Route>
        <Route exact path="/credit">
          <Credit />
        </Route>
        <Route exact path="/delivery">
          <Delivery />
        </Route>
        {/* <Route exact path="/maps">
          <Maps />
        </Route>
        <Route exact path="/public">
          <Public />
        </Route> */}
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
        <Route exact path="/search-products">
          <SearchProducts />
        </Route>
        <Route>
          <ErrorPage />
        </Route>
      </Switch>
      <Footer />
      <ButtonTop />
    </div>
  );
}

export default App;
