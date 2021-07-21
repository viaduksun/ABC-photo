/* eslint-disable no-debugger */
/* eslint-disable no-underscore-dangle */
/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import React from 'react';
import styles from './ProductsField.module.scss';
import ProductsSorting from '../ProductsSorting/ProductsSorting';
import ProductCard from '../ProductCard/ProductCard';
import Pagination from '../Pagination/Pagination';

const ProductsField = ({ products }) => {
  console.log('RENDER_ProductsField ');
  return (
    <div className={styles.ProductsField}>
      <ProductsSorting />
      <div className={styles.ProductsFieldGridWrapp}>
        <div className={styles.ProductsFieldGrid}>
          {products.map((product) => (
            <ProductCard product={product} key={product._id} />
          ))}
        </div>
      </div>
      <Pagination />
    </div>
  );
};

export default ProductsField;
