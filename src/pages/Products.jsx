/* eslint-disable no-shadow */
import React from 'react';
import Breadcrumbs from '../containers/Breadcrumbs/Breadcrumbs';
import ProductsContainer from '../containers/ProductsContainer/ProductsContainer';
import Stories from '../containers/Stories/Stories';

const Products = () => {
  console.log('test');
  return (
    <>
      <Breadcrumbs />
      <ProductsContainer />
      <Stories />
    </>
  );
};

export default Products;
