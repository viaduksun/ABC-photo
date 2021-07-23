/* eslint-disable no-debugger */
/* eslint-disable no-underscore-dangle */
/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import React from 'react';
import { useSelector } from 'react-redux';
import styles from './ProductsField.module.scss';
import ProductsSorting from '../ProductsSorting/ProductsSorting';
import ProductCard from '../ProductCard/ProductCard';
import Pagination from '../Pagination/Pagination';

const ProductsField = ({ products }) => {
  console.log('RENDER_ProductsField ');
  const currentPage = useSelector((state) => state.productsPage.currentPage);
  const allProducts = useSelector(
    (state) => state.productsPage.AllProductsForPagination.length
  );
  return (
    <div className={styles.ProductsField}>
      <ProductsSorting currentPage={currentPage} allProducts={allProducts} />
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
