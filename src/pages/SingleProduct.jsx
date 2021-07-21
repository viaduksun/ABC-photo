/* eslint-disable no-debugger */
import React from 'react';
import { useSelector } from 'react-redux';
import Breadcrumbs from '../containers/Breadcrumbs/Breadcrumbs';
import SingleProductContainer from '../containers/SingleProductContainer/SingleProductContainer';

const SingleProduct = () => {
  const singleProduct = useSelector((state) => state.singleProduct.singleProduct);
  console.log('singpleProductPage');
  const data = [['/', 'Главная'], ['products', 'Цифровая техника'], ['single-product',
  Object.keys(singleProduct).length !== 0 && singleProduct.characteristics.model[1]]];
  return (
    <>
      <Breadcrumbs data={data} />
      <h1>Single product page</h1>
      <SingleProductContainer />
    </>
  );
};

export default SingleProduct;
