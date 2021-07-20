/* eslint-disable no-shadow */
import React from 'react';
import Breadcrumbs from '../containers/Breadcrumbs/Breadcrumbs';
import ProductsContainer from '../containers/ProductsContainer/ProductsContainer';
import Stories from '../containers/Stories/Stories';

const Products = () => {
  const array = [['/', 'Главная'], ['products', 'Цифровая техника']];
  return (
    <>
      <Breadcrumbs data={array} />
      <ProductsContainer />
      <Stories />
    </>
  );
};

export default Products;
