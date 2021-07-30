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
import { setCurrentPerPageAction, setSortQueryAction } from '../../store/products/actions';
import { setSearchProductsPerPageAction, sortSearchProductsAction} from '../../store/searchProducts/actions';
import styles from './ProductsSorting.module.scss';

const ProductsSorting = ({
 currentPage, allProducts, handlerSwitch
}) => {
  const [currentInterval, setCurrentInterval] = useState([1, 3]);
  const dispatch = useDispatch();
  console.log(currentPage);
  const showGrid = useSelector((state) => state.productsPage.showGrid);
  const searchProductsPerPage = useSelector((state) => state.searchProducts.searchProductsPerPage);
  const searchProductsShowBy = useSelector((state) => state.searchProducts.showBy);
  
  const handlePerPage = (e) => {
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
    dispatch(setSearchProductsPerPageAction(showBy));
  };

  const handleMinMaxSort = (e) => {
    dispatch(sortSearchProductsAction(e.target.value));
    dispatch(setSortQueryAction(e.target.value));
  };

  // const stateValue = [
  //   {
  //     text: 'товара',
  //     id: 3,
  //     value: '3',
  //   },
  //   {
  //     text: 'товаров',
  //     id: 6,
  //     value: '6',
  //   },
  //   {
  //     text: 'товаров',
  //     id: 9,
  //     value: '9'
  //   }
  // ];

  return (
    <div className={styles.ProductsSorting}>
      <div className={styles.ProductsSortingLeft}>
        <div className={styles.NumberOf}>
          {currentInterval[0]} - {currentInterval[1]} из {allProducts}
        </div>
        <div className={styles.Show}>
          <span>Показывать по</span>
          <select
            className={styles.SelectAmount}
            onChange={(e) => {
              handlePerPage(e);
            }}
          >
            <option value="3">3 товара</option>
            <option selected value="6">6 товаров</option>
            <option value="9">9 товаров</option>
            {/* {stateValue.map((value) => (
              <option key={value.id} value={value.id}>
                {value.value} {value.text}
              </option>
            ))} */}
          </select>
        </div>
      </div>
      <div className={styles.ProductsSortingRight}>
        <span>Сортировать по</span>
        <select
          className={styles.SelectPrice}
          onChange={(e) => handleMinMaxSort(e)}
        >
          <option value="">Умолчанию</option>
          <option value="+currentPrice">Возростанию цены</option>
          <option value="-currentPrice">Уменьшению цены</option>
        </select>
      </div>
      <div
        className={showGrid ? styles.SwitchIcon : styles.SwitchIconRotate}
        onClick={handlerSwitch}
      >
        {showGrid ? <GiHamburgerMenu style={{color: '#51ad33'}} /> : <CgMenuGridR style={{color: '#51ad33'}} />}
       
      </div>
    </div>
  );
};

export default ProductsSorting;
