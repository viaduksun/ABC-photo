/* eslint-disable operator-linebreak */
/* eslint-disable no-tabs */
/* eslint-disable no-debugger */
import React, { useEffect } from 'react';
import { useSelector } from 'react-redux';
import ViewedProducts from '../components/ViewedProducts/ViewedProducts';
import Breadcrumbs from '../containers/Breadcrumbs/Breadcrumbs';
import SingleProductContainer from '../containers/SingleProductContainer/SingleProductContainer';
import styles from './Pages.module.scss';

const SingleProduct = () => {
  const singleProduct = useSelector(
    (state) => state.singleProduct.singleProduct
  );
  console.log('singpleProductPage');
  const data = [
    ['/', 'Главная'],
    ['products', 'Цифровая техника'],
    [
      'single-product',
      Object.keys(singleProduct).length !== 0 &&
        singleProduct.characteristics.model[1],
    ],
  ];

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
    });
  };

  useEffect(() => {
    scrollToTop();
  }, [singleProduct]);

  return (
    <div className={styles.PageContainer}>
      <Breadcrumbs data={data} />
      <SingleProductContainer />
      <ViewedProducts />
    </div>
  );
};

export default SingleProduct;
