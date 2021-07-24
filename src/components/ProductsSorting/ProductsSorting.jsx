/* eslint-disable no-debugger */
/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
/* eslint-disable react/jsx-one-expression-per-line */
import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { setCurrentPerPageAction } from '../../store/products/actions';
import styles from './ProductsSorting.module.scss';

const ProductsSorting = ({ currentPage, allProducts }) => {
  const [currentInterval, setCurrentInterval] = useState([1, 3]);
  const dispatch = useDispatch();
  console.log(currentPage);

  // const [, updateState] = useState();
  // const forceUpdate = React.useCallback(() => updateState({}), []);
 
  const handlePerPage = (e) => {
    // console.log(e.target.value);
    const showBy = +e.target.value;
    dispatch(setCurrentPerPageAction(showBy));
    setCurrentInterval(
      currentInterval.map((item, index) => {
        if (index === 0) {
          return showBy * currentPage - showBy + 1;
        }
        if (index === 1 && showBy * currentPage < allProducts) {
          return showBy * currentPage;
        }
        return allProducts;
      })
    );
  };
  return (
    <div className={styles.ProductsSorting}>
      <div className={styles.ProductsSortingLeft}>
        <div className={styles.NumberOf}>
          {currentInterval[0]} - {currentInterval[1]} из {allProducts}
        </div>
        <div className={styles.Show}>
          <span>Показывать</span>
          <select
            className={styles.SelectAmount}
            onChange={(e) => {
              handlePerPage(e);
            }}
          >
            <option value="3">3 товара</option>
            <option value="6">6 товаров</option>
            <option value="9">9 товаров</option>
          </select>
        </div>
      </div>
      <div className={styles.ProductsSortingRight}>
        <span>Сортировать по</span>
        <select className={styles.SelectPrice}>
          <option>Возростанию цены</option>
          <option>По уменьшению цены</option>
        </select>
      </div>
    </div>
  );
};

export default ProductsSorting;
