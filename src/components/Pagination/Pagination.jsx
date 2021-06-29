/* eslint-disable no-plusplus */
import React, { useState } from 'react';
import { FaChevronLeft, FaChevronRight } from 'react-icons/fa';
import styles from './Pagination.module.scss';

const Pagination = () => {
  // eslint-disable-next-line no-unused-vars
  const [state, setState] = useState([1, 2, 3, 4, 5, 6, 7, 8]);

  const pages = [];

  for (let i = 1; i <= state; i++) {
    pages.push(i);
  }

  return (
    <div className={styles.Pagination}>
      <FaChevronLeft className={styles.ButtonPrev} />
      {state.map((item) => (
        <div className={styles.PaginationItem}>{item}</div>
      ))}
      <FaChevronRight className={styles.ButtonNext} />
    </div>
  );
};

export default Pagination;
