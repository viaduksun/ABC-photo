/* eslint-disable operator-linebreak */
/* eslint-disable no-debugger */
/* eslint-disable no-underscore-dangle */
/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import styles from './ProductsField.module.scss';
import { showGridAction } from '../../store/products/actions';
import ProductsSorting from '../ProductsSorting/ProductsSorting';
import ProductCard from '../ProductCard/ProductCard';
import ProductCardLine from '../ProductCardLine/ProductCardLine';
import Pagination from '../Pagination/Pagination';

const ProductsField = ({ products }) => {
  console.log('RENDER_ProductsField ');
  // const currentPage = useSelector((state) => state.productsPage.currentPage);
  // const allProducts = useSelector(
  //   (state) => state.productsPage.AllProductsForPagination.length
  // );
  const showGrid = useSelector((state) => state.productsPage.showGrid);
  const dispatch = useDispatch();
  const handlerSwitch = () => {
    dispatch(showGridAction());
  };

  const scrollToTopHandler = () => {
    window.scrollTo({
      behavior: 'smooth',
      top: 0,
    });
  };
  return (
    <div className={styles.ProductsField}>
      {/* <ProductsSorting
        currentPage={currentPage}
        allProducts={allProducts}
        handlerSwitch={handlerSwitch}
      /> */}
      <div className={styles.ProductsFieldGridWrapp}>
        {showGrid ? (
          <div className={styles.ProductsFieldGrid}>
            {products &&
              products.map((product) => (
                <ProductCard
                  product={product}
                  key={product._id}
                  dragable={false}
                />
              ))}
          </div>
        ) : (
          <div className={styles.ProductsFieldLine}>
            {products &&
              products.map((product) => (
                <ProductCardLine product={product} key={product._id} />
              ))}
          </div>
        )}
      </div>
      <Pagination scrollTo={scrollToTopHandler} />
    </div>
  );
};

export default ProductsField;
