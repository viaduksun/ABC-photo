/* eslint-disable no-debugger */
/* eslint-disable no-underscore-dangle */
/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import React, {useState, useEffect} from 'react';
import { useSelector, useDispatch} from 'react-redux';
import styles from './SearchProductsField.module.scss';
import {showGridAction} from '../../store/products/actions';
import SearchProductsSorting from '../SearchProductsSorting/SearchProductsSorting';
import ProductCard from '../ProductCard/ProductCard';
import ProductCardLine from '../ProductCardLine/ProductCardLine';
import Pagination from '../Pagination/Pagination';
import PaginationSearchProducts from '../PaginationSearchProducts/PaginationSearchProducts';
import { showGridSearchProductsAction } from '../../store/searchProducts/actions';

const SearchProductsField = ({ searchProducts }) => {
  console.log('RENDER_ProductsField ');
  const currentPage = useSelector((state) => state.productsPage.currentPage);
  const allProducts = useSelector(
    (state) => state.productsPage.AllProductsForPagination.length
  );
  const showGrid = useSelector((state) => state.searchProducts.showGrid);
  const dispatch = useDispatch();
  const handlerSwitch = () => {
    dispatch(showGridSearchProductsAction());
  };

  return (
    <div className={styles.ProductsField}>
      <SearchProductsSorting
        currentPage={currentPage}
        allProducts={allProducts}
        handlerSwitch={handlerSwitch}
      />
      <div className={styles.ProductsFieldGridWrapp}>
        {showGrid ? (
          <div className={styles.ProductsFieldGrid}>
            {searchProducts.map((product) => (
              <ProductCard product={product} key={product._id} dragable={false} />
          ))}
          </div>
          ) : (
            <div className={styles.ProductsFieldLine}>
              {searchProducts.map((product) => (
                <ProductCardLine product={product} key={product._id} />
              ))}
            </div>
          )}
      </div>
   
    </div>
  );
};

export default SearchProductsField;
