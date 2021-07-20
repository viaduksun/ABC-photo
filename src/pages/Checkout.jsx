import React from 'react';
import Breadcrumbs from '../containers/Breadcrumbs/Breadcrumbs';
import CheckoutBlock from '../components/CheckoutBlock/CheckoutBlock';

const Checkout = () => {
  const array = [['/', 'Главная'], ['cart', 'Моя корзина'], ['checkout', 'Оформление заказа']];
  return (
    <>
      <Breadcrumbs data={array} />
      <CheckoutBlock />
    </>
  );
};

export default Checkout;
