/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable no-plusplus */
import classNames from 'classnames';
import React, { useState } from 'react';
import { FaChevronLeft, FaChevronRight } from 'react-icons/fa';
import { useDispatch, useSelector } from 'react-redux';
import { setCurrentPageAction } from '../../store/products/actions';
import styles from './Pagination.module.scss';

const Pagination = ({scrollTo}) => {
  const allProductsArr = useSelector(
    (state) => state.productsPage.AllProductsForPagination
  );
  const productPerPage = useSelector(
    (state) => state.productsPage.currentPerPage
  );
  const currentPage = useSelector((state) => state.productsPage.currentPage);
  const pagesCount = Math.ceil(allProductsArr.length / productPerPage);
  const dispatch = useDispatch();
  const pages = [];
  for (let i = 1; i <= pagesCount; i++) {
    pages.push(i);
  }
  const handleExactPage = (item) => {
    console.log(item);
    dispatch(setCurrentPageAction(item));
    scrollTo();
  };

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
      <FaChevronLeft
        className={styles.ButtonPrev}
        onClick={handleLeftPage}
      />
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
      <FaChevronRight
        className={styles.ButtonNext}
        onClick={handleRightPage}
      />
    </div>
  );
};

export default Pagination;
