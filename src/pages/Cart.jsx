import React from 'react';
import Breadcrumbs from '../containers/Breadcrumbs/Breadcrumbs';
import CartContainer from '../containers/CartContainer/CartContainer';
import ViewedProducts from '../containers/ViewedProducts/ViewedProducts';

const Cart = () => {
  const array = [['/', 'Главная'], ['cart', 'Моя корзина']];
  return (
    <>
      <Breadcrumbs data={array} />
      <CartContainer />
      <ViewedProducts />
    </>
  );
};

export default Cart;
