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

const Pagination = () => {
  const allProductsArr = useSelector(
    (state) => state.productsPage.allProductsCurrentCategory
  );
  const pagesCount = Math.ceil(allProductsArr.length / 6);
  console.log(allProductsArr.length, pagesCount);
  const [isActive, setIsActive] = useState(1);
  const dispatch = useDispatch();
  const pages = [];
  for (let i = 1; i <= pagesCount; i++) {
    pages.push(i);
  }
  console.log(pages);
  const handleExactPage = (item) => {
    console.log(item);
    setIsActive(item);
    dispatch(setCurrentPageAction(item));
  };

  return (
    <div className={styles.Pagination}>
      <FaChevronLeft className={styles.ButtonPrev} />
      {pages.map((item) => (
        <div
          className={classNames({
            [styles.PaginationItem]: true,
            [styles.PaginationItem_active]: isActive === item,
          })}
          key={item}
          onClick={() => {
            handleExactPage(item);
          }}
        >
          {item}
        </div>
      ))}
      <FaChevronRight className={styles.ButtonNext} />
    </div>
  );
};

export default Pagination;
