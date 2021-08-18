/* eslint-disable max-len */
/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable no-plusplus */
import classNames from 'classnames';
import React, { useState, useEffect } from 'react';
import { FaChevronLeft, FaChevronRight } from 'react-icons/fa';
import { useDispatch, useSelector } from 'react-redux';
import PropTypes from 'prop-types';
import {
  filteredProductsForPaginationAction,
  getFilteredProductsAction,
  setCurrentPageAction,
} from '../../store/products/actions';
import styles from './Pagination.module.scss';

const Pagination = ({ scrollTo }) => {
  const allProductsArr = useSelector(
    (state) => state.productsPage.allProductsForPagination
  );
  const productsQuantity = useSelector(
    (state) => state.productsPage.productsQuantity
  );
  const currentCategory = useSelector(
    (state) => state.productsPage.currentCategory
  );
  const productPerPage = useSelector(
    (state) => state.productsPage.currentPerPage
  );

  // console.log(currentQueryForPagination);
  const currentPage = useSelector((state) => state.productsPage.currentPage);
  const currentFilterQuery = useSelector(
    (state) => state.productsPage.currentFilterQuery
  );
  const pagesCount = Math.ceil(productsQuantity / productPerPage);
  const dispatch = useDispatch();
  const pages = [];
  for (let i = 1; i <= pagesCount; i++) {
    pages.push(i);
  }

  const handleExactPage = (item) => {
    dispatch(setCurrentPageAction(item));
    // dispatch(
    //   getFilteredProductsAction(
    //     currentCategory,
    //     item,
    //     productPerPage,
    //     currentFilterQuery
    //   )
    // );
    // dispatch(
    //   getFilteredProductsAction(
    //     currentCategory,
    //     item,
    //     productPerPage,
    //     currentQuery
    //   )
    // );
    // dispatch(
    //   filteredProductsForPaginationAction(
    //     currentCategory,
    //     currentQueryForPagination
    //   )
    // );
    scrollTo();
  };

  // useEffect(() => {
  //   dispatch(filteredProductsForPaginationAction(currentCategory, currentQueryForPagination));
  // }, [currentCategory, currentQueryForPagination, dispatch]);

  const handleRightPage = () => {
    if (currentPage <= pages.length - 1) {
      dispatch(setCurrentPageAction(currentPage + 1));
      scrollTo();
    }
  };
  const handleLeftPage = () => {
    if (currentPage > 1) {
      dispatch(setCurrentPageAction(currentPage - 1));
      scrollTo();
    }
  };

  return (
    <div className={styles.Pagination}>
      <FaChevronLeft className={styles.ButtonPrev} onClick={handleLeftPage} />
      {pages.map((item) => (
        <div
          className={classNames({
            [styles.PaginationItem]: true,
            [styles.PaginationItem_active]: currentPage === item,
          })}
          key={item}
          onClick={() => {
            handleExactPage(item);
          }}
        >
          {item}
        </div>
      ))}
      <FaChevronRight className={styles.ButtonNext} onClick={handleRightPage} />
    </div>
  );
};

Pagination.propTypes = {
  scrollTo: PropTypes.func.isRequired,
};

export default React.memo(Pagination);
