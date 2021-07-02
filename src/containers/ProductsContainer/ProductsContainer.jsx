import React from 'react';
import styles from './ProductsContainer.module.scss';
import ProductsFilter from '../../components/ProductsFilter/ProductsFilter';
import ProductsField from '../../components/ProductsField/ProductsField';

const ProductsContainer = () => (
  <div className="container">
    <div className={styles.ProductsContainer}>
      <ProductsFilter />
      <ProductsField />
    </div>
  </div>
);

export default ProductsContainer;
