import React from 'react';
import Breadcrumbs from '../containers/Breadcrumbs/Breadcrumbs';
import SingleProductContainer from '../containers/SingleProductContainer/SingleProductContainer';

const SingleProduct = () => (
  <div>
    <Breadcrumbs />
    <h1>Single product page</h1>
    <SingleProductContainer />
  </div>
);

export default SingleProduct;
