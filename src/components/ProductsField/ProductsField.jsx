/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import React from 'react';
import styles from './ProductsField.module.scss';
import ProductsSorting from '../ProductsSorting/ProductsSorting';
import ProductCard from '../ProductCard/ProductCard';
import Pagination from '../Pagination/Pagination';

const ProductsField = ({products}) => {
  console.log(products);
  // const tempProductsArray = [1, 2, 3, 4, 5, 6, 7, 8, 9];
  return (
    <div className={styles.ProductsField}>
      <ProductsSorting />
      <h1>ProductsField</h1>
      <div className={styles.ProductsFieldGrid}>
        {products.map(() => (
          <ProductCard />
        ))}
      </div>
      <Pagination />
    </div>
  );
};

export default ProductsField;
