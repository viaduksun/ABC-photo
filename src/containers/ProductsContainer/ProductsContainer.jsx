/* eslint-disable no-unused-vars */
import React from 'react';
import styles from './ProductsContainer.module.scss';
import ProductsFilter from '../../components/ProductsFilter/ProductsFilter';
import ProductsField from '../../components/ProductsField/ProductsField';

const ProductsContainer = () => (
  <div className={styles.ProductsBlock}>
    <div className="container">
      <div className={styles.ProductsContainer}>
        <ProductsFilter />
        <ProductsField />
      </div>
    </div>
  </div>
);

export default ProductsContainer;
