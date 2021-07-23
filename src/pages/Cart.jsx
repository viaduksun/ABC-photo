import React from 'react';
import ViewedProducts from '../components/ViewedProducts/ViewedProducts';
import Breadcrumbs from '../containers/Breadcrumbs/Breadcrumbs';
import CartContainer from '../containers/CartContainer/CartContainer';

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
