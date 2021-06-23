import React from 'react';
import Breadcrumbs from '../containers/Breadcrumbs/Breadcrumbs';
import SimilarProductsSlider from '../containers/SimilarProductsSlider/SimilarProductsSlider';
import CartBlock from '../components/CartBlock/CartBlock';

const Cart = () => (
  <>
    <Breadcrumbs />
    <div className="container">
      <h1>Cart page</h1>
      <CartBlock />
    </div>
    <SimilarProductsSlider />
  </>
);

export default Cart;
