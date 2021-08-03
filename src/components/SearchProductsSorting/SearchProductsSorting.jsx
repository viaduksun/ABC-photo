/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable no-unused-vars */
/* eslint-disable react/jsx-one-expression-per-line */
import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { GiHamburgerMenu } from 'react-icons/gi';
import { CgMenuGridR } from 'react-icons/cg';
import PropTypes from 'prop-types';
import {
  setSearchProductsPerPageAction,
  sortSearchProductsAction,
} from '../../store/searchProducts/actions';
import styles from './SearchProductsSorting.module.scss';

const SearchProductsSorting = ({ handlerSwitch }) => {
  const dispatch = useDispatch();
  const showGrid = useSelector((state) => state.productsPage.showGrid);

  const handlePerPage = (e) => {
    const showBy = +e.target.value;
    dispatch(setSearchProductsPerPageAction(showBy));
  };

  const handleMinMaxSort = (e) => {
    dispatch(sortSearchProductsAction(e.target.value));
  };

  return (
    <div className={styles.ProductsSorting}>
      <div className={styles.ProductsSortingLeft}>
        <div className={styles.Show}>
          <span>Показывать по</span>
          <select
            className={styles.SelectAmount}
            onChange={(e) => {
              handlePerPage(e);
            }}
          >
            <option value="3">3 товара</option>
            <option selected value="6">
              6 товаров
            </option>
            <option value="9">9 товаров</option>
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
        {showGrid ? (
          <GiHamburgerMenu style={{ color: '#51ad33' }} />
        ) : (
          <CgMenuGridR style={{ color: '#51ad33' }} />
        )}
      </div>
    </div>
  );
};

SearchProductsSorting.propTypes = {
  handlerSwitch: PropTypes.func.isRequired,
};

export default SearchProductsSorting;
