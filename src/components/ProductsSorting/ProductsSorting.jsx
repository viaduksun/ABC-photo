/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable no-debugger */
/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
/* eslint-disable react/jsx-one-expression-per-line */
import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { GiHamburgerMenu } from 'react-icons/gi';
import { CgMenuGridR } from 'react-icons/cg';
import {
  setCurrentPerPageAction,
  setSortQueryAction,
} from '../../store/products/actions';
import {
  setSearchProductsPerPageAction,
  sortSearchProductsAction,
} from '../../store/searchProducts/actions';
import styles from './ProductsSorting.module.scss';

const ProductsSorting = ({ currentPage, allProducts, handlerSwitch }) => {
  // const [isSelected3, setIsSelected3] = useState(true);
  // const [isSelected6, setIsSelected6] = useState(true);
  // const [isSelected9, setIsSelected9] = useState(true);
  const [currentInterval, setCurrentInterval] = useState([1, 3]);
  const dispatch = useDispatch();
  console.log(currentPage);
  const showGrid = useSelector((state) => state.productsPage.showGrid);
  const currentPerPage = useSelector((state) => state.productsPage.currentPerPage);
  const sortBy = useSelector((state) => state.productsPage.sortBy);
  const searchProductsPerPage = useSelector(
    (state) => state.searchProducts.searchProductsPerPage
  );
  const searchProductsShowBy = useSelector(
    (state) => state.searchProducts.showBy
  );

  const handlePerPage = (e) => {
    const showBy = +e.target.value;
    dispatch(setCurrentPerPageAction(showBy));
  };

  const handleMinMaxSort = (e) => {
    dispatch(sortSearchProductsAction(e.target.value));
    dispatch(setSortQueryAction(e.target.value));
  };
  const optArr = [];

  return (
    <div className={styles.ProductsSorting}>
      <div className={styles.ProductsSortingLeft}>
        <div className={styles.Show}>
          <span>Показывать по</span>
          &nbsp;
          <select
            className={styles.SelectAmount}
            onChange={(e) => {
              handlePerPage(e);
            }}
          >
            <option selected={currentPerPage === '3'} value="3">3 товара</option>
            <option selected={currentPerPage === '6'} value="6">
              6 товаров
            </option>
            <option selected={currentPerPage === '9'} value="9">9 товаров</option>
          </select>
        </div>
      </div>
      <div className={styles.ProductsSortingRight}>
        <span>Сортировать по</span>
        &nbsp;
        <select
          className={styles.SelectPrice}
          onChange={(e) => handleMinMaxSort(e)}
        >
          <option selected={sortBy === ''} value="">Умолчанию</option>
          <option selected={sortBy === '+currentPrice'} value="+currentPrice">Возростанию цены</option>
          <option selected={sortBy === '-currentPrice'} value="-currentPrice">Уменьшению цены</option>
        </select>
      </div>
      <div
        className={showGrid ? styles.SwitchIcon : styles.SwitchIconRotate}
        onClick={handlerSwitch}
      >
        {showGrid ? (
          <GiHamburgerMenu style={{ color: '#51ad33' }} />
        ) : (
          <CgMenuGridR style={{ color: '#51ad33' }} />
        )}
      </div>
    </div>
  );
};

export default ProductsSorting;
