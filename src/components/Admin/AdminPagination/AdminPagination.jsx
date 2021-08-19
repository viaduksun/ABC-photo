/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable no-plusplus */
import classNames from 'classnames';
import React, { useState } from 'react';
import { FaChevronLeft, FaChevronRight } from 'react-icons/fa';
import { useDispatch, useSelector } from 'react-redux';
import { setCurrentPageAdminAction } from '../../../store/admin/actions';
// import { setCurrentPageAction } from '../../store/products/actions';
import styles from './Pagination.module.scss';

const AdminPagination = ({ scrollTo }) => {
  const productsQuantity = useSelector((state) => state.admin.productsQuantity);

  const currentPage = useSelector((state) => state.admin.currentPageAdmin);
  const pagesCount = Math.ceil(productsQuantity / 10);
  const dispatch = useDispatch();
  const pages = [];
  for (let i = 1; i <= pagesCount; i++) {
    pages.push(i);
  }
  const handleExactPage = (item) => {
    dispatch(setCurrentPageAdminAction(item));
    // scrollTo();
  };

  const handleRightPage = () => {
    if (currentPage <= pages.length - 1) {
      dispatch(setCurrentPageAdminAction(currentPage + 1));
      // scrollTo();
    }
  };
  const handleLeftPage = () => {
    if (currentPage > 1) {
      dispatch(setCurrentPageAdminAction(currentPage - 1));
      // scrollTo();
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

export default AdminPagination;
