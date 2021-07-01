import React from 'react';
import Breadcrumbs from '../containers/Breadcrumbs/Breadcrumbs';
import SimilarProductsSlider from '../containers/SimilarProductsSlider/SimilarProductsSlider';
import CartBlock from '../components/CartBlock/CartBlock';

const Cart = () => (
  <>
    <Breadcrumbs />
    <CartBlock />
    <SimilarProductsSlider />
  </>
);

export default Cart;
