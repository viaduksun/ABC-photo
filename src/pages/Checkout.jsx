import React from 'react';
import Breadcrumbs from '../containers/Breadcrumbs/Breadcrumbs';
import CheckoutBlock from '../components/CheckoutBlock/CheckoutBlock';

const Checkout = () => (
  <>
    <Breadcrumbs />
    <div className="container">
      <h1>Checkout page</h1>
      <CheckoutBlock />
    </div>
  </>
);

export default Checkout;
